export type SanitizedLead = {
  name: string;
  contact: string;
  company: string;
  service: string;
  message: string;
  consent: boolean;
  source: string;
  page: string;
  attribution?: {
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    utmContent: string;
    utmTerm: string;
    referrer: string;
    landingPath: string;
  };
  receivedAt: string;
};

export type DeliveryStatus = "sent" | "skipped_missing_env" | "failed";

export type LeadNotificationResult = {
  telegram: DeliveryStatus;
  email: DeliveryStatus;
};

function truncate(value: string, maxLength: number) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, Math.max(0, maxLength - 1))}…`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function valueOrDash(value: string) {
  return value || "—";
}

function getSafeErrorName(error: unknown) {
  return error instanceof Error ? error.name.slice(0, 80) : "unknown_error";
}

function logProviderFailure(provider: "telegram" | "email", details: Record<string, string | number>) {
  console.warn("Lead notification provider failed", {
    event: "lead_notification_provider_failed",
    provider,
    status: "failed",
    ...details
  });
}

function formatTelegramContact(value: string) {
  const contact = truncate(value, 120);
  const usernameMatch = /^@([a-zA-Z0-9_]{5,32})$/.exec(contact);

  if (!usernameMatch) {
    return escapeHtml(valueOrDash(contact));
  }

  const username = usernameMatch[1];
  return `<a href="https://t.me/${username}">${escapeHtml(contact)}</a>`;
}

function formatLeadForTelegram(lead: SanitizedLead) {
  const fields = {
    name: escapeHtml(valueOrDash(truncate(lead.name, 80))),
    contact: formatTelegramContact(lead.contact),
    service: escapeHtml(valueOrDash(truncate(lead.service, 120))),
    company: escapeHtml(valueOrDash(truncate(lead.company, 120))),
    message: escapeHtml(valueOrDash(truncate(lead.message, 1000))),
    source: escapeHtml(valueOrDash(truncate(lead.source, 120))),
    page: escapeHtml(valueOrDash(truncate(lead.page, 240))),
    consent: lead.consent ? "да" : "нет",
    receivedAt: escapeHtml(lead.receivedAt)
  };

  return [
    "<b>Новая заявка с сайта Делаем Диджитал</b>",
    "",
    `<b>Имя:</b> ${fields.name}`,
    `<b>Контакт:</b> ${fields.contact}`,
    `<b>Услуга:</b> ${fields.service}`,
    `<b>Компания:</b> ${fields.company}`,
    `<b>Сообщение:</b> ${fields.message}`,
    "",
    `<b>Источник:</b> ${fields.source}`,
    `<b>Страница:</b> ${fields.page}`,
    `<b>Согласие:</b> ${fields.consent}`,
    `<b>Время:</b> ${fields.receivedAt}`,
    "",
    "<b>Следующий шаг:</b> написать человеку и провести первичный разбор системы."
  ].join("\n");
}

function formatLeadForEmailText(lead: SanitizedLead) {
  return [
    "Новая заявка с сайта Делаем Диджитал",
    "",
    `Имя: ${valueOrDash(truncate(lead.name, 80))}`,
    `Контакт: ${valueOrDash(truncate(lead.contact, 120))}`,
    `Услуга: ${valueOrDash(truncate(lead.service, 120))}`,
    `Компания: ${valueOrDash(truncate(lead.company, 120))}`,
    `Сообщение: ${valueOrDash(truncate(lead.message, 1000))}`,
    `Источник: ${valueOrDash(truncate(lead.source, 120))}`,
    `Страница: ${valueOrDash(truncate(lead.page, 240))}`,
    "",
    `Согласие: ${lead.consent ? "да" : "нет"}`,
    `Время: ${lead.receivedAt}`
  ].join("\n");
}

function formatLeadForEmailHtml(lead: SanitizedLead) {
  const lines = formatLeadForEmailText(lead).split("\n").map((line) => escapeHtml(line));
  return `<pre style="font-family:Arial,sans-serif;white-space:pre-wrap;line-height:1.5">${lines.join("\n")}</pre>`;
}

function parseEmailRecipients(value: string | undefined) {
  if (!value) return [];

  return Array.from(
    new Set(
      value
        .split(",")
        .map((recipient) => recipient.trim())
        .filter(Boolean)
    )
  ).slice(0, 50);
}

async function sendTelegramNotification(lead: SanitizedLead): Promise<DeliveryStatus> {
  const token = process.env.LEAD_NOTIFY_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.LEAD_NOTIFY_TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return "skipped_missing_env";
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatLeadForTelegram(lead),
        parse_mode: "HTML",
        disable_web_page_preview: true
      })
    });

    if (!response.ok) {
      logProviderFailure("telegram", {
        statusCode: response.status,
        statusText: response.statusText.slice(0, 120)
      });
      return "failed";
    }

    return "sent";
  } catch (error) {
    logProviderFailure("telegram", {
      errorName: getSafeErrorName(error)
    });
    return "failed";
  }
}

async function sendEmailNotification(lead: SanitizedLead): Promise<DeliveryStatus> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipients = parseEmailRecipients(process.env.LEAD_NOTIFY_EMAIL_TO);
  const from = process.env.LEAD_NOTIFY_EMAIL_FROM;

  if (!apiKey || recipients.length === 0 || !from) {
    return "skipped_missing_env";
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: recipients,
        subject: "Новая заявка с сайта Делаем Диджитал",
        text: formatLeadForEmailText(lead),
        html: formatLeadForEmailHtml(lead)
      })
    });

    if (!response.ok) {
      logProviderFailure("email", {
        statusCode: response.status,
        statusText: response.statusText.slice(0, 120)
      });
      return "failed";
    }

    return "sent";
  } catch (error) {
    logProviderFailure("email", {
      errorName: getSafeErrorName(error)
    });
    return "failed";
  }
}

export async function sendLeadNotifications(lead: SanitizedLead): Promise<LeadNotificationResult> {
  const [telegram, email] = await Promise.all([
    sendTelegramNotification(lead),
    sendEmailNotification(lead)
  ]);

  return { telegram, email };
}
