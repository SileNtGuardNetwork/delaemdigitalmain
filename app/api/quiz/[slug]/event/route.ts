import { NextRequest, NextResponse } from "next/server";
import { isClientFlowQuizEventName } from "@/lib/clientflow-quiz/analytics/events";
import { getClientFlowQuizConfig } from "@/lib/clientflow-quiz/config/registry";
import { quizEventRequestSchema } from "@/lib/clientflow-quiz/schema";
import { storeQuizEvent } from "@/lib/clientflow-quiz/storage/supabase";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

const MAX_BODY_LENGTH = 12_000;

function successResponse(body: Record<string, unknown> = {}, status = 200) {
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

  const parsed = quizEventRequestSchema.safeParse(json);
  if (!parsed.success) {
    return errorResponse("validation_failed", "Event payload is invalid.", 400);
  }

  if (!isClientFlowQuizEventName(parsed.data.eventName)) {
    return errorResponse("unknown_event", "Event name is not supported.", 400);
  }

  console.info("ClientFlow quiz event accepted", {
    quizSlug: config.slug,
    quizVersion: config.version,
    eventName: parsed.data.eventName,
    sessionId: parsed.data.sessionId,
    submissionId: parsed.data.submissionId
  });

  const storage = await storeQuizEvent({
    quizSlug: config.slug,
    eventName: parsed.data.eventName,
    sessionId: parsed.data.sessionId,
    submissionId: parsed.data.submissionId,
    eventPayload: parsed.data.payload,
    source: {
      quizVersion: config.version
    }
  });

  return successResponse({ stored: storage.status === "stored", storage: storage.status });
}

export function GET() {
  return errorResponse("method_not_allowed", "Use POST to record a quiz event.", 405);
}
