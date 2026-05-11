import { NextRequest, NextResponse } from "next/server";
import { runClientFlowAntiGarbageChecks } from "@/lib/clientflow-quiz/anti-garbage";
import { getClientFlowQuizConfig } from "@/lib/clientflow-quiz/config/registry";
import { validateClientFlowConsent } from "@/lib/clientflow-quiz/consent";
import { selectClientFlowOfferRoute } from "@/lib/clientflow-quiz/offer-routing";
import { calculateClientFlowScores } from "@/lib/clientflow-quiz/scoring";
import { quizSubmitRequestSchema } from "@/lib/clientflow-quiz/schema";
import { assignClientFlowSegment } from "@/lib/clientflow-quiz/segmentation";
import {
  type ClientFlowStorageResult,
  storeDeliveryLog,
  storeQuizSubmission
} from "@/lib/clientflow-quiz/storage/supabase";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

const MAX_BODY_LENGTH = 24_000;

function successResponse(body: Record<string, unknown>, status = 200) {
  return NextResponse.json({ ok: true, ...body }, { status });
}

function errorResponse(code: string, message: string, status: number) {
  return NextResponse.json({ ok: false, error: { code, message } }, { status });
}

function generateSubmissionCode() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const random = crypto.randomUUID().slice(0, 8).toUpperCase();
  return `CFQ-${date}-${random}`;
}

function getStorageErrorDetails(results: Record<string, ClientFlowStorageResult>) {
  const errors = Object.entries(results)
    .filter((entry): entry is [string, Extract<ClientFlowStorageResult, { status: "failed" }>] => entry[1].status === "failed")
    .map(([operation, result]) => ({
      operation,
      error: result.error
    }));

  return errors.length > 0 ? errors : undefined;
}

async function readJsonSafely(request: NextRequest) {
  const text = await request.text();
  if (text.length > MAX_BODY_LENGTH) return null;

  try {
    const parsed: unknown = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  const config = getClientFlowQuizConfig(slug);

  if (!config) {
    return errorResponse("quiz_not_found", "Quiz was not found.", 404);
  }

  const json = await readJsonSafely(request);
  if (!json) {
    return errorResponse("invalid_json", "Request body is invalid.", 400);
  }

  const parsed = quizSubmitRequestSchema.safeParse(json);
  if (!parsed.success) {
    return errorResponse("validation_failed", "Please check answers, contact details and consent.", 400);
  }

  if (!validateClientFlowConsent(config, parsed.data.consent)) {
    return errorResponse("consent_required", "Consent is required before submitting the quiz.", 400);
  }

  const antiGarbage = runClientFlowAntiGarbageChecks({
    answers: parsed.data.answers,
    contact: parsed.data.contact
  });

  if (!antiGarbage.ok) {
    return errorResponse(antiGarbage.code, antiGarbage.message, 400);
  }

  const scores = calculateClientFlowScores(config, parsed.data.answers);
  const segment = assignClientFlowSegment(config, scores.leadValue);
  const offerRoute = selectClientFlowOfferRoute(config, scores.leadValue);
  const fallbackSubmissionId = `cfq_${crypto.randomUUID()}`;
  const submissionCode = generateSubmissionCode();

  const submissionStorage = await storeQuizSubmission({
    config,
    submissionCode,
    contact: parsed.data.contact,
    answers: parsed.data.answers,
    scores,
    segment,
    offerRoute,
    source: parsed.data.source ?? {},
    consent: parsed.data.consent
  });

  const submissionId = submissionStorage.status === "stored" && submissionStorage.id ? submissionStorage.id : fallbackSubmissionId;
  const [telegramDeliveryLog, crmDeliveryLog] = await Promise.all([
    storeDeliveryLog({
      submissionId: submissionStorage.status === "stored" ? submissionStorage.id : undefined,
      channel: "telegram",
      provider: "telegram_bot_api",
      status: "skipped_phase_2a",
      error: "Telegram integration is not enabled in Phase 2A."
    }),
    storeDeliveryLog({
      submissionId: submissionStorage.status === "stored" ? submissionStorage.id : undefined,
      channel: "webhook",
      provider: "crm_webhook",
      status: "skipped_phase_2a",
      error: "CRM webhook integration is not enabled in Phase 2A."
    })
  ]);
  const storageErrors = getStorageErrorDetails({
    submission: submissionStorage,
    telegramDeliveryLog,
    crmDeliveryLog
  });

  console.info("ClientFlow quiz submission accepted", {
    quizSlug: config.slug,
    quizVersion: config.version,
    submissionId,
    submissionCode,
    segment: segment.id,
    offerRoute: offerRoute.id,
    leadValue: scores.leadValue,
    storage: submissionStorage.status
  });

  return successResponse({
    submissionId,
    submissionCode,
    result: {
      scores,
      segment,
      offerRoute
    },
    storage: {
      submission: submissionStorage.status,
      telegramDeliveryLog: telegramDeliveryLog.status,
      crmDeliveryLog: crmDeliveryLog.status
    },
    storageErrors,
    integrations: {
      telegram: "noop_phase_2a",
      crmWebhook: "noop_phase_2a",
      ai: "noop_phase_2a",
      posthog: "noop_phase_2a"
    }
  });
}

export function GET() {
  return errorResponse("method_not_allowed", "Use POST to submit a quiz.", 405);
}
