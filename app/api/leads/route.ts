import { NextRequest, NextResponse } from "next/server";
import { type LeadNotificationResult, sendLeadNotifications } from "@/lib/leads/notifications";
import {
  getLeadNotificationStatus,
  type LeadContactType,
  type LeadStorageResult,
  storeSiteLeadPending,
  updateSiteLeadDelivery
} from "@/lib/leads/storage";

export const runtime = "nodejs";

type FieldErrors = Partial<Record<"name" | "contact" | "company" | "service" | "message" | "consent", string>>;

type LeadPayload = {
  name?: unknown;
  contact?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
  company_website_hidden?: unknown;
  source?: unknown;
  page?: unknown;
};

const MAX_BODY_LENGTH = 12_000;

type LeadRouteStage =
  | "read_payload"
  | "validate"
  | "storage_insert"
  | "notifications"
  | "storage_update"
  | "accepted_response"
  | "unknown";

function jsonResponse(body: unknown, status: number) {
  return NextResponse.json(body, { status });
}

function normalize(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function isTooLong(value: unknown, maxLength: number) {
  return typeof value === "string" && value.trim().length > maxLength;
}

function getContactType(contact: string): LeadContactType {
  if (/^@[a-zA-Z0-9_]{5,32}$/.test(contact)) return "telegram";
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) return "email";
  if (/^[+\d][\d\s().-]{5,}$/.test(contact)) return "phone";
  return contact ? "other" : "empty";
}

function getSafeErrorName(error: unknown) {
  return error instanceof Error ? error.name.slice(0, 80) : "unknown_error";
}

function getSafeErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown lead route error.";
  return message
    .replace(/Bearer\s+[A-Za-z0-9._-]+/g, "Bearer [redacted]")
    .replace(/bot[0-9]+:[A-Za-z0-9_-]+/g, "bot[redacted]")
    .replace(/SUPABASE_SERVICE_ROLE_KEY\s*=\s*\S+/gi, "SUPABASE_SERVICE_ROLE_KEY=[redacted]")
    .slice(0, 160);
}

function logLeadRouteFailure(stage: LeadRouteStage, error: unknown) {
  console.error("Lead route failed", {
    event: "lead_route_failed",
    stage,
    errorName: getSafeErrorName(error),
    errorMessage: getSafeErrorMessage(error)
  });
}

function logLeadAccepted(input: {
  source: string;
  page: string;
  service: string;
  hasMessage: boolean;
  contactType: string;
  receivedAt: string;
  storage: LeadStorageResult["status"];
  delivery: LeadNotificationResult;
}) {
  console.info("Lead accepted", {
    event: "lead_accepted",
    source: input.source,
    page: input.page,
    service: input.service,
    hasMessage: input.hasMessage,
    contactType: input.contactType,
    storage: input.storage,
    delivery: input.delivery,
    receivedAt: input.receivedAt,
    result: "accepted"
  });
}

async function safelyStoreSiteLeadPending(
  input: Parameters<typeof storeSiteLeadPending>[0]
): Promise<LeadStorageResult> {
  try {
    return await storeSiteLeadPending(input);
  } catch (error) {
    return { status: "failed", error: getSafeErrorMessage(error) };
  }
}

async function safelyUpdateSiteLeadDelivery(
  input: Parameters<typeof updateSiteLeadDelivery>[0]
): Promise<LeadStorageResult> {
  try {
    return await updateSiteLeadDelivery(input);
  } catch (error) {
    return { status: "failed", error: getSafeErrorMessage(error) };
  }
}

function logLeadStorageFailure(stage: "insert" | "update", result: LeadStorageResult) {
  if (result.status !== "failed") return;

  console.warn("Lead storage failed", {
    event: "lead_storage_failed",
    stage,
    status: result.status,
    error: result.error
  });
}

function logFailedDeliveries(delivery: LeadNotificationResult) {
  (Object.entries(delivery) as Array<[keyof LeadNotificationResult, LeadNotificationResult[keyof LeadNotificationResult]]>)
    .filter(([, status]) => status === "failed")
    .forEach(([provider, status]) => {
      console.warn("Lead notification delivery failed", {
        event: "lead_notification_delivery_failed",
        provider,
        status
      });
    });
}

async function readJsonSafely(request: NextRequest): Promise<LeadPayload | null> {
  const text = await request.text();
  if (text.length > MAX_BODY_LENGTH) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return null;
    }
    return parsed as LeadPayload;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  let stage: LeadRouteStage = "unknown";

  try {
    stage = "read_payload";
    const payload = await readJsonSafely(request);

    if (!payload) {
      return jsonResponse(
        {
          ok: false,
          message: "Проверьте поля формы.",
          fieldErrors: {
            name: "Не удалось прочитать заявку. Попробуйте ещё раз."
          }
        },
        400
      );
    }

    stage = "validate";
    const honeypot = normalize(payload.website ?? payload.company_website_hidden, 200);
    if (honeypot) {
      return jsonResponse(
        {
          ok: true,
          message: "Заявка принята. Я свяжусь с вами после первичного разбора."
        },
        200
      );
    }

    const name = normalize(payload.name, 80);
    const contact = normalize(payload.contact, 120);
    const company = normalize(payload.company, 120);
    const service = normalize(payload.service, 120);
    const message = normalize(payload.message, 1000);
    const source = normalize(payload.source, 80);
    const page = normalize(payload.page, 300);
    const consent = payload.consent === true;

    const fieldErrors: FieldErrors = {};

    if (name.length < 2) {
      fieldErrors.name = "Укажите имя: минимум 2 символа.";
    }
    if (contact.length < 3) {
      fieldErrors.contact = "Укажите Telegram, телефон или email для связи.";
    }
    if (isTooLong(payload.name, 80)) {
      fieldErrors.name = "Имя слишком длинное.";
    }
    if (isTooLong(payload.contact, 120)) {
      fieldErrors.contact = "Контакт слишком длинный.";
    }
    if (isTooLong(payload.company, 120)) {
      fieldErrors.company = "Название проекта слишком длинное.";
    }
    if (isTooLong(payload.service, 120)) {
      fieldErrors.service = "Выбранное направление слишком длинное.";
    }
    if (isTooLong(payload.message, 1000)) {
      fieldErrors.message = "Комментарий слишком длинный.";
    }
    if (!consent) {
      fieldErrors.consent = "Нужно согласие на обработку персональных данных.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return jsonResponse(
        {
          ok: false,
          message: "Проверьте поля формы.",
          fieldErrors
        },
        400
      );
    }

    const sanitizedLead = {
      name,
      contact,
      company,
      service,
      message,
      consent,
      source,
      page,
      receivedAt: new Date().toISOString()
    };

    const contactType = getContactType(contact);
    stage = "storage_insert";
    const storage = await safelyStoreSiteLeadPending({
      lead: sanitizedLead,
      contactType
    });
    logLeadStorageFailure("insert", storage);

    let delivery: LeadNotificationResult = {
      telegram: "failed",
      email: "failed"
    };

    stage = "notifications";
    try {
      delivery = await sendLeadNotifications(sanitizedLead);
    } catch {
      console.warn("Lead notification delivery failed", {
        event: "lead_notification_delivery_failed",
        provider: "all",
        status: "failed"
      });
    }

    logFailedDeliveries(delivery);
    if (storage.status === "stored") {
      stage = "storage_update";
      const storageUpdate = await safelyUpdateSiteLeadDelivery({
        id: storage.id,
        delivery,
        notificationStatus: getLeadNotificationStatus(delivery)
      });
      logLeadStorageFailure("update", storageUpdate);
    }

    stage = "accepted_response";
    logLeadAccepted({
      source,
      page,
      service,
      hasMessage: message.length > 0,
      contactType,
      receivedAt: sanitizedLead.receivedAt,
      storage: storage.status,
      delivery
    });

    return jsonResponse(
      {
        ok: true,
        message: "Заявка принята. Я свяжусь с вами после первичного разбора."
      },
      200
    );
  } catch (error) {
    logLeadRouteFailure(stage, error);

    return jsonResponse(
      {
        ok: false,
        message: "Не удалось отправить заявку. Напишите напрямую в Telegram: @vitalycreator"
      },
      500
    );
  }
}

export function GET() {
  return jsonResponse(
    {
      ok: false,
      message: "Метод не поддерживается."
    },
    405
  );
}
