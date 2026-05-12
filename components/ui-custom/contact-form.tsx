"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics/client";

type FormState = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "contact" | "company" | "service" | "message" | "consent", string>>;

type LeadResponse = {
  ok: boolean;
  message: string;
  fieldErrors?: FieldErrors;
};

type AttributionState = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  referrer: string;
  landing_path: string;
};

const serviceOptions = [
  "ClientFlow Аудит",
  "Делаем Сайт",
  "Делаем Трафик",
  "Делаем Систему",
  "Пока не знаю"
] as const;

const initialFields = {
  name: "",
  contact: "",
  company: "",
  service: "ClientFlow Аудит",
  message: "",
  company_website_hidden: ""
};

const pricingIntentToService: Record<string, (typeof serviceOptions)[number]> = {
  "delaem-site": serviceOptions[1],
  "delaem-traffic": serviceOptions[2],
  "delaem-system": serviceOptions[3]
};

const initialAttribution: AttributionState = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  referrer: "",
  landing_path: ""
};

function getSafeLeadSource(value: string | null) {
  return value === "pricing" ? "pricing" : "final-cta";
}

function getSafeAttributionValue(value: string | null, maxLength: number) {
  return (value ?? "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function getClientFieldErrors(fields: typeof initialFields, consent: boolean) {
  const errors: FieldErrors = {};

  if (fields.name.trim().length < 2) {
    errors.name = "Укажите имя: минимум 2 символа.";
  }
  if (fields.contact.trim().length < 3) {
    errors.contact = "Укажите Telegram, телефон или email для связи.";
  }
  if (!consent) {
    errors.consent = "Нужно согласие на обработку персональных данных.";
  }

  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [state, setState] = useState<FormState>("idle");
  const [consent, setConsent] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [leadSource, setLeadSource] = useState("final-cta");
  const [attribution, setAttribution] = useState<AttributionState>(initialAttribution);
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedService = pricingIntentToService[params.get("service") ?? ""];

    if (selectedService) {
      setFields((current) => ({ ...current, service: selectedService }));
    }

    setLeadSource(getSafeLeadSource(params.get("source")));
    setAttribution({
      utm_source: getSafeAttributionValue(params.get("utm_source"), 180),
      utm_medium: getSafeAttributionValue(params.get("utm_medium"), 180),
      utm_campaign: getSafeAttributionValue(params.get("utm_campaign"), 180),
      utm_content: getSafeAttributionValue(params.get("utm_content"), 180),
      utm_term: getSafeAttributionValue(params.get("utm_term"), 180),
      referrer: getSafeAttributionValue(document.referrer, 500),
      landing_path: getSafeAttributionValue(`${window.location.pathname}${window.location.search}`, 500)
    });
  }, []);

  function updateField(name: keyof typeof initialFields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => ({ ...current, [name]: undefined }));
    if (state !== "submitting") {
      setState("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = getClientFieldErrors(fields, consent);
    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setState("idle");
      setStatusMessage("Проверьте поля формы.");
      trackEvent("lead_form_submit_error", {
        service: fields.service,
        source: leadSource,
        page: pathname
      });
      return;
    }

    const analyticsPayload = {
      service: fields.service,
      source: leadSource,
      page: pathname
    };

    trackEvent("lead_form_submit_attempt", analyticsPayload);
    setState("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...fields,
          consent,
          source: leadSource,
          page: typeof window === "undefined" ? "/" : window.location.pathname,
          ...attribution
        })
      });

      const result = (await response.json()) as LeadResponse;

      if (!response.ok || !result.ok) {
        setFieldErrors(result.fieldErrors ?? {});
        setState("error");
        setStatusMessage(result.message || "Не удалось отправить заявку. Напишите напрямую в Telegram: @vitalycreator");
        trackEvent("lead_form_submit_error", analyticsPayload);
        return;
      }

      setFields(initialFields);
      setConsent(false);
      setFieldErrors({});
      setState("success");
      setStatusMessage("Заявка принята. Следующий шаг — первичный разбор вашей системы.");
      trackEvent("lead_form_submit_success", analyticsPayload);
    } catch {
      setState("error");
      setStatusMessage("Не удалось отправить заявку. Напишите напрямую в Telegram: @vitalycreator");
      trackEvent("lead_form_submit_error", analyticsPayload);
    }
  }

  const isSubmitting = state === "submitting";

  return (
    <form className="form card d1-intake-form" onSubmit={handleSubmit} noValidate>
      <div className="form-head">
        <span>ClientFlow intake</span>
        <strong>первичный разбор системы</strong>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Как к вам обращаться"
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            minLength={2}
            maxLength={80}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name && <span className="field-error" id="name-error">{fieldErrors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="contact">Telegram / телефон</label>
          <input
            id="contact"
            name="contact"
            type="text"
            placeholder="@username, телефон или email"
            value={fields.contact}
            onChange={(event) => updateField("contact", event.target.value)}
            required
            minLength={3}
            maxLength={120}
            aria-invalid={Boolean(fieldErrors.contact)}
            aria-describedby={fieldErrors.contact ? "contact-error" : undefined}
          />
          {fieldErrors.contact && <span className="field-error" id="contact-error">{fieldErrors.contact}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="company">Проект / сайт</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Сайт, соцсеть или название проекта"
            value={fields.company}
            onChange={(event) => updateField("company", event.target.value)}
            maxLength={120}
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={fieldErrors.company ? "company-error" : undefined}
          />
          {fieldErrors.company && <span className="field-error" id="company-error">{fieldErrors.company}</span>}
        </div>
        <div className="field">
          <label htmlFor="service">Что обсудить</label>
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={Boolean(fieldErrors.service)}
            aria-describedby={fieldErrors.service ? "service-error" : undefined}
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {fieldErrors.service && <span className="field-error" id="service-error">{fieldErrors.service}</span>}
        </div>
      </div>

      <div className="field honeypot-field" aria-hidden="true">
        <label htmlFor="company_website_hidden">Website</label>
        <input
          id="company_website_hidden"
          name="company_website_hidden"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.company_website_hidden}
          onChange={(event) => updateField("company_website_hidden", event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="message">Комментарий</label>
        <textarea
          id="message"
          name="message"
          placeholder="Коротко опишите, что хотите усилить в системе привлечения клиентов. Не указывайте лишние персональные или конфиденциальные данные."
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          maxLength={1000}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message && <span className="field-error" id="message-error">{fieldErrors.message}</span>}
      </div>

      <label className="consent">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => {
            setConsent(event.target.checked);
            setFieldErrors((current) => ({ ...current, consent: undefined }));
          }}
          required
          aria-invalid={Boolean(fieldErrors.consent)}
        />
        <span>
          Я соглашаюсь с <a href="/privacy" data-analytics-event="legal_link_click" data-analytics-label="form_privacy" data-analytics-value="/privacy">политикой конфиденциальности</a> и даю <a href="/consent" data-analytics-event="legal_link_click" data-analytics-label="form_consent" data-analytics-value="/consent">согласие на обработку персональных данных</a> для связи по моей заявке.
        </span>
      </label>
      {fieldErrors.consent && <span className="field-error consent-error">{fieldErrors.consent}</span>}

      {state === "success" && (
        <div className="success-box" role="status">{statusMessage}</div>
      )}
      {state === "error" && (
        <div className="error-box" role="alert">{statusMessage}</div>
      )}
      {state === "idle" && statusMessage && (
        <div className="error-box" role="alert">{statusMessage}</div>
      )}

      <button className="button button-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Отправляю…" : "Записаться на разбор системы"}
      </button>

      <div className="form-note">
        После отправки заявка уходит в рабочий канал Делаем Диджитал. Следующий шаг — первичный разбор вашей системы и контакт по указанному способу связи.
      </div>
    </form>
  );
}
