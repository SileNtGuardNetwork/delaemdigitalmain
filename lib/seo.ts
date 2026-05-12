const DEFAULT_SITE_URL = "https://delaemdigital.com";

function normalizeSiteUrl(value?: string) {
  try {
    if (!value) return DEFAULT_SITE_URL;
    return new URL(value).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const seoConfig = {
  baseUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL),
  title: "Делаем Диджитал — ClientFlow System для привлечения клиентов",
  description:
    "Собираю бизнесу управляемую систему привлечения клиентов: сайт, трафик, Telegram, AI, CRM и follow-up в едином маршруте от первого касания до заявки.",
  keywords: [
    "ClientFlow System",
    "Делаем Диджитал",
    "система привлечения клиентов",
    "сайт для бизнеса",
    "digital-система",
    "AI-воронка",
    "Telegram-воронка",
    "лидогенерация",
    "маркетинг для бизнеса"
  ],
  ogImage: "/opengraph-image"
} as const;
