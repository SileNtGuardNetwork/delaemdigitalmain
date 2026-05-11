import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type {
  ClientFlowAnswers,
  ClientFlowConsent,
  ClientFlowContact,
  ClientFlowOfferRoute,
  ClientFlowQuizConfig,
  ClientFlowScoreMap,
  ClientFlowSegment
} from "@/lib/clientflow-quiz/types";

export type ClientFlowStorageStatus = "stored" | "skipped_missing_env" | "failed";

export type ClientFlowStorageResult =
  | { status: "stored"; id?: string }
  | { status: "skipped_missing_env" }
  | { status: "failed"; error: string };

export type StoreQuizSubmissionInput = {
  config: ClientFlowQuizConfig;
  submissionCode: string;
  contact: ClientFlowContact;
  answers: ClientFlowAnswers;
  scores: ClientFlowScoreMap & { leadValue: number };
  segment: ClientFlowSegment;
  offerRoute: ClientFlowOfferRoute;
  source?: unknown;
  consent: ClientFlowConsent;
  device?: unknown;
};

export type StoreQuizEventInput = {
  quizSlug: string;
  eventName: string;
  sessionId?: string;
  submissionId?: string;
  eventPayload?: unknown;
  source?: unknown;
};

export type StoreDeliveryLogInput = {
  submissionId?: string;
  channel: string;
  provider: string;
  status: string;
  error?: string;
  attempts?: number;
};

let cachedClient: SupabaseClient | null = null;
const STORAGE_TIMEOUT_MS = 2500;

function getSupabaseEnv() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return { url, serviceRoleKey };
}

function getSupabaseClient() {
  const env = getSupabaseEnv();
  if (!env) return null;

  if (!cachedClient) {
    try {
      cachedClient = createClient(env.url, env.serviceRoleKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        }
      });
    } catch (error) {
      console.warn("ClientFlow Supabase client initialization failed", {
        error: sanitizeStorageError(safeErrorMessage(error))
      });
      return null;
    }
  }

  return cachedClient;
}

function safeErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message.slice(0, 240);
  return "Unknown Supabase storage error.";
}

function sanitizeStorageError(error: string) {
  return error.replace(/Bearer\s+[A-Za-z0-9._-]+/g, "Bearer [redacted]").slice(0, 240);
}

async function withStorageTimeout(
  operation: () => Promise<ClientFlowStorageResult>
): Promise<ClientFlowStorageResult> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeout = new Promise<ClientFlowStorageResult>((resolve) => {
    timeoutId = setTimeout(() => {
      resolve({ status: "failed", error: "storage_timeout" });
    }, STORAGE_TIMEOUT_MS);
  });

  try {
    return await Promise.race([operation(), timeout]);
  } catch (error) {
    return { status: "failed", error: sanitizeStorageError(safeErrorMessage(error)) };
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

function normalizeUuid(value?: string) {
  if (!value) return null;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
    ? value
    : null;
}

export function isClientFlowSupabaseConfigured() {
  return Boolean(getSupabaseEnv());
}

export async function storeQuizSubmission(input: StoreQuizSubmissionInput): Promise<ClientFlowStorageResult> {
  const supabase = getSupabaseClient();
  if (!supabase) return getSupabaseEnv() ? { status: "failed", error: "storage_client_unavailable" } : { status: "skipped_missing_env" };

  return withStorageTimeout(async () => {
    const { data, error } = await supabase
      .from("clientflow_quiz_submissions")
      .insert({
        quiz_slug: input.config.slug,
        submission_code: input.submissionCode,
        contact: input.contact,
        answers: input.answers,
        scores: input.scores,
        segment: input.segment.id,
        offer_route: input.offerRoute,
        ai_result: { status: "noop_phase_2a" },
        sales_brief: { status: "noop_phase_2a" },
        reward: { status: "noop_phase_2a" },
        source: input.source ?? {},
        consent: input.consent,
        device: input.device ?? {},
        status: "accepted",
        notification_status: "skipped",
        crm_sync_status: "skipped"
      })
      .select("id")
      .single();

    if (error) {
      const message = sanitizeStorageError(error.message);
      console.warn("ClientFlow quiz submission storage failed", {
        quizSlug: input.config.slug,
        submissionCode: input.submissionCode,
        error: message
      });
      return { status: "failed", error: message };
    }

    return { status: "stored", id: data?.id };
  });
}

export async function storeQuizEvent(input: StoreQuizEventInput): Promise<ClientFlowStorageResult> {
  const supabase = getSupabaseClient();
  if (!supabase) return getSupabaseEnv() ? { status: "failed", error: "storage_client_unavailable" } : { status: "skipped_missing_env" };

  return withStorageTimeout(async () => {
    const { data, error } = await supabase
      .from("clientflow_quiz_events")
      .insert({
        quiz_slug: input.quizSlug,
        submission_id: normalizeUuid(input.submissionId),
        session_id: input.sessionId,
        event_name: input.eventName,
        event_payload: input.eventPayload ?? {},
        source: input.source ?? {}
      })
      .select("id")
      .single();

    if (error) {
      const message = sanitizeStorageError(error.message);
      console.warn("ClientFlow quiz event storage failed", {
        quizSlug: input.quizSlug,
        eventName: input.eventName,
        error: message
      });
      return { status: "failed", error: message };
    }

    return { status: "stored", id: data?.id };
  });
}

export async function storeDeliveryLog(input: StoreDeliveryLogInput): Promise<ClientFlowStorageResult> {
  const supabase = getSupabaseClient();
  if (!supabase) return getSupabaseEnv() ? { status: "failed", error: "storage_client_unavailable" } : { status: "skipped_missing_env" };

  return withStorageTimeout(async () => {
    const { data, error } = await supabase
      .from("clientflow_quiz_delivery_logs")
      .insert({
        submission_id: normalizeUuid(input.submissionId),
        channel: input.channel,
        provider: input.provider,
        status: input.status,
        error: input.error,
        attempts: input.attempts ?? 1,
        last_attempt_at: new Date().toISOString()
      })
      .select("id")
      .single();

    if (error) {
      const message = sanitizeStorageError(error.message);
      console.warn("ClientFlow quiz delivery log storage failed", {
        submissionId: input.submissionId,
        channel: input.channel,
        provider: input.provider,
        error: message
      });
      return { status: "failed", error: message };
    }

    return { status: "stored", id: data?.id };
  });
}
