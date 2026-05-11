import { NextRequest, NextResponse } from "next/server";
import { runClientFlowAntiGarbageChecks } from "@/lib/clientflow-quiz/anti-garbage";
import { getClientFlowQuizConfig } from "@/lib/clientflow-quiz/config/registry";
import { validateClientFlowConsent } from "@/lib/clientflow-quiz/consent";
import { selectClientFlowOfferRoute } from "@/lib/clientflow-quiz/offer-routing";
import { calculateClientFlowScores } from "@/lib/clientflow-quiz/scoring";
import { quizSubmitRequestSchema } from "@/lib/clientflow-quiz/schema";
import { assignClientFlowSegment } from "@/lib/clientflow-quiz/segmentation";

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
  const submissionId = `cfq_${crypto.randomUUID()}`;

  console.info("ClientFlow quiz submission accepted", {
    quizSlug: config.slug,
    quizVersion: config.version,
    submissionId,
    segment: segment.id,
    offerRoute: offerRoute.id,
    leadValue: scores.leadValue
  });

  return successResponse({
    submissionId,
    scores,
    segment,
    offerRoute,
    integrations: {
      storage: "noop_phase_1",
      telegram: "noop_phase_1",
      crmWebhook: "noop_phase_1",
      ai: "noop_phase_1",
      posthog: "noop_phase_1"
    }
  });
}

export function GET() {
  return errorResponse("method_not_allowed", "Use POST to submit a quiz.", 405);
}
