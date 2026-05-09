export type AnalyticsValue = string | number | boolean | null | undefined;

export type AnalyticsParams = Record<string, AnalyticsValue>;

export type AnalyticsEventName =
  | "lead_form_submit_attempt"
  | "lead_form_submit_success"
  | "lead_form_submit_error"
  | "cta_primary_click"
  | "cta_secondary_click"
  | "pricing_cta_click"
  | "telegram_contact_click"
  | "telegram_channel_click"
  | "legal_link_click"
  | "cookie_accept";

type YandexMetrica = {
  a?: unknown[];
  l?: number;
  (id: number, method: "reachGoal", goal: AnalyticsEventName, params?: Record<string, string | number | boolean>): void;
};

function isAnalyticsEnabled() {
  const flag = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED;
  if (flag === "0" || flag === "false") return false;
  return Boolean(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID);
}

function normalizeValue(value: AnalyticsValue) {
  if (typeof value === "string") {
    return value.slice(0, 160);
  }

  return value;
}

function normalizeParams(params?: AnalyticsParams) {
  if (!params) return undefined;

  const entries = Object.entries(params).filter(([, value]) => value !== undefined);
  if (entries.length === 0) return undefined;

  return Object.fromEntries(entries.map(([key, value]) => [key, normalizeValue(value)])) as Record<
    string,
    string | number | boolean
  >;
}

export function trackEvent(eventName: AnalyticsEventName, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;
  if (!isAnalyticsEnabled()) return;

  const yandexId = Number(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID);
  if (!Number.isFinite(yandexId)) return;

  const ym = (window as Window & { ym?: YandexMetrica }).ym;
  if (typeof ym !== "function") return;

  try {
    ym(yandexId, "reachGoal", eventName, normalizeParams(params));
  } catch {
    // No-op. Analytics must never break the site.
  }
}
