import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[var(--dd-canvas-graphite)] font-[family-name:var(--dd-font-primary)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 600px 500px at 72% 30%, rgba(184,121,75,0.06) 0%, transparent 70%)"
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-screen max-w-[1360px] grid-cols-1 lg:grid-cols-[52%_48%]">
        <div className="flex flex-col justify-center px-6 pb-20 pt-32 md:px-[60px] md:pb-[80px] md:pt-[160px]">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-[22px] bg-[var(--dd-action-copper)]" aria-hidden />
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--dd-action-copper)]">
              Виталий Тимошенко · основатель Делаем Диджитал
            </span>
          </div>

          <h1
            className="mt-6 max-w-[560px] text-[clamp(44px,4.2vw,66px)] font-extrabold leading-[1.05] tracking-[-0.03em]"
            aria-label="Собираю бизнесу управляемую систему привлечения клиентов"
          >
            <span className="block text-[var(--dd-text-primary)]">Собираю бизнесу</span>
            <span className="block text-[var(--dd-text-primary)]">управляемую систему</span>
            <span className="block text-[#5f8ed8]">привлечения клиентов.</span>
          </h1>

          <p className="mt-6 max-w-[480px] text-[17px] leading-[1.6] text-[var(--dd-text-secondary)]">
            Для предпринимателей, которым нужен не набор digital-инструментов, а понятный маршрут от первого
            касания до заявки.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:gap-3.5">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--dd-action-copper)] px-7 py-[15px] text-[15px] font-bold text-[#F5F7FB] no-underline transition-[background,box-shadow] duration-200 hover:bg-[var(--dd-action-copper-hover)] hover:shadow-[0_16px_42px_rgba(184,121,75,0.28)] sm:w-auto"
              data-analytics-event="cta_primary_click"
              data-analytics-label="hero_primary"
              data-analytics-value="#contacts"
            >
              Разбор системы →
            </a>
            <a
              href={siteConfig.telegramChannelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-[1.5px] border-[var(--dd-action-steel-blue)] px-[26px] py-3.5 text-[15px] font-semibold text-[var(--dd-action-steel-blue)] no-underline transition-colors duration-200 hover:bg-[rgba(127,166,214,0.08)] sm:w-auto"
              data-analytics-event="telegram_channel_click"
              data-analytics-label="hero_telegram_channel"
              data-analytics-value={siteConfig.telegramChannelUrl}
            >
              Telegram-канал
            </a>
          </div>

          <div className="mt-10 w-full max-w-[560px] border-t border-[rgba(148,163,184,0.12)] pt-6">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-[20px] border border-[rgba(148,163,184,0.12)] bg-[rgba(14,22,34,0.6)] px-3.5 py-1.5 text-xs text-[var(--dd-text-muted)]">
                2 проекта в квартал · места есть
              </span>
              <span className="rounded-[20px] border border-[rgba(148,163,184,0.12)] bg-[rgba(14,22,34,0.6)] px-3.5 py-1.5 text-xs text-[var(--dd-text-muted)]">
                ClientFlow System · с 2021
              </span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden lg:min-h-0">
          <Image
            src="/images/vitaly-hero-cinematic.webp"
            alt="Виталий Тимошенко — основатель Делаем Диджитал"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--dd-canvas-graphite)] via-transparent to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[var(--dd-canvas-graphite)] to-transparent"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-[rgba(5,7,10,0.25)]" aria-hidden />

          <svg
            className="pointer-events-none absolute right-6 top-6"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden
          >
            <path
              d="M10 110 A 90 90 0 0 1 110 10"
              stroke="rgba(184,121,75,0.35)"
              strokeWidth="1"
            />
          </svg>

          <div className="absolute bottom-20 left-8 rounded-xl border border-[rgba(184,121,75,0.3)] bg-[rgba(12,17,25,0.88)] px-[18px] py-3.5 backdrop-blur-[8px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
              ClientFlow Score
            </p>
            <p className="mt-1 text-[22px] font-bold text-[var(--dd-text-primary)]">72 / 100</p>
            <div className="mt-2 h-[3px] w-[120px] overflow-hidden rounded-sm bg-[rgba(148,163,184,0.15)]">
              <span className="block h-full w-[72%] rounded-sm bg-[var(--dd-action-copper)]" />
            </div>
          </div>

          <div className="absolute bottom-8 right-8 text-right">
            <p className="text-[13px] font-semibold text-[var(--dd-text-primary)]">Виталий Тимошенко</p>
            <p className="text-[11px] text-[var(--dd-text-muted)]">Архитектор цифровых систем</p>
          </div>
        </div>
      </div>
    </section>
  );
}
