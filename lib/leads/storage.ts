import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { LeadNotificationResult, SanitizedLead } from "@/lib/leads/notifications";

export type LeadContactType = "telegram" | "email" | "phone" | "other" | "empty";
export type LeadNotificationStatus = "pending" | "sent" | "partial" | "failed" | "skipped";
export type LeadStorageStatus = "stored" | "skipped_missing_env" | "failed";

export type LeadStorageResult =
  | { status: "stored"; id?: string }
  | { status: "skipped_missing_env" }
  | { status: "failed"; error: string };

type StoreSiteLeadInput = {
  lead: SanitizedLead;
  contactType: LeadContactType;
};

type UpdateSiteLeadDeliveryInput = {
  id?: string;
  delivery: LeadNotificationResult;
  notificationStatus: LeadNotificationStatus;
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

function safeErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message.slice(0, 240);
  return "Unknown Supabase storage error.";
}

function sanitizeStorageError(error: string) {
  return error
    .replace(/Bearer\s+[A-Za-z0-9._-]+/g, "Bearer [redacted]")
    .replace(/bot[0-9]+:[A-Za-z0-9_-]+/g, "bot[redacted]")
    .replace(/SUPABASE_SERVICE_ROLE_KEY\s*=\s*\S+/gi, "SUPABASE_SERVICE_ROLE_KEY=[redacted]")
    .slice(0, 240);
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
      console.warn("Site lead Supabase client initialization failed", {
        event: "site_lead_storage_client_failed",
        status: "failed",
        error: sanitizeStorageError(safeErrorMessage(error))
      });
      return null;
    }
  }

  return cachedClient;
}

async function withStorageTimeout(operation: () => Promise<LeadStorageResult>): Promise<LeadStorageResult> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeout = new Promise<LeadStorageResult>((resolve) => {
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

export function getLeadNotificationStatus(delivery: LeadNotificationResult): LeadNotificationStatus {
  const statuses = Object.values(delivery);
  const sentCount = statuses.filter((status) => status === "sent").length;

  if (sentCount === statuses.length) return "sent";
  if (sentCount > 0 && statuses.every((status) => status === "sent" || status === "skipped_missing_env")) {
    return "sent";
  }
  if (sentCount > 0) return "partial";
  if (statuses.every((status) => status === "skipped_missing_env")) return "skipped";
  return "failed";
}

export async function storeSiteLeadPending(input: StoreSiteLeadInput): Promise<LeadStorageResult> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) return getSupabaseEnv() ? { status: "failed", error: "storage_client_unavailable" } : { status: "skipped_missing_env" };

    return withStorageTimeout(async () => {
      const { data, error } = await supabase
        .from("site_leads")
        .insert({
          received_at: input.lead.receivedAt,
          name: input.lead.name,
          contact: input.lead.contact,
          contact_type: input.contactType,
          company: input.lead.company || null,
          service: input.lead.service,
          message: input.lead.message || null,
          source: input.lead.source,
          page: input.lead.page,
          consent: input.lead.consent,
          has_message: input.lead.message.length > 0,
          delivery: {},
          notification_status: "pending",
          storage_metadata: {
            version: "d2.4c",
            storage_step: "pending_before_notifications"
          }
        })
        .select("id")
        .single();

      if (error) {
        return { status: "failed", error: sanitizeStorageError(error.message) };
      }

      return { status: "stored", id: data?.id };
    });
  } catch (error) {
    return { status: "failed", error: sanitizeStorageError(safeErrorMessage(error)) };
  }
}

export async function updateSiteLeadDelivery(input: UpdateSiteLeadDeliveryInput): Promise<LeadStorageResult> {
  try {
    if (!input.id) return { status: "skipped_missing_env" };

    const supabase = getSupabaseClient();
    if (!supabase) return getSupabaseEnv() ? { status: "failed", error: "storage_client_unavailable" } : { status: "skipped_missing_env" };

    return withStorageTimeout(async () => {
      const { error } = await supabase
        .from("site_leads")
        .update({
          delivery: input.delivery,
          notification_status: input.notificationStatus,
          storage_metadata: {
            version: "d2.4c",
            storage_step: "delivery_updated"
          }
        })
        .eq("id", input.id);

      if (error) {
        return { status: "failed", error: sanitizeStorageError(error.message) };
      }

      return { status: "stored", id: input.id };
    });
  } catch (error) {
    return { status: "failed", error: sanitizeStorageError(safeErrorMessage(error)) };
  }
}
