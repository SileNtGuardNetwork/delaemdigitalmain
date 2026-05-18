import { siteConfig } from "@/lib/site-config";
import {
  BtnArrow,
  DdContainer,
  FlowPath,
  PingDot,
  PrimaryBtn,
  RimLight,
  SecondaryBtn,
  SectionFrame
} from "@/components/sections/dd-ui";

const heroFlowSteps = [
  "Трафик",
  "Сайт",
  "AI-квалификация",
  "Заявка",
  "Обработка",
  "Аналитика",
  "Улучшение"
] as const;

export function HeroSection() {
  return (
    <SectionFrame id="top" bg="#05070A" fadeTo="#080C12" className="min-h-[900px]">
      <RimLight style={{ right: -260, top: -220 }} />
      <RimLight style={{ left: -340, bottom: -300, opacity: 0.6 }} />

      <div className="absolute bottom-0 right-0 top-0 z-[1] w-[56%] overflow-hidden" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/vitaly-hero-cinematic.webp"
          alt="Виталий Тимошенко"
          className="absolute inset-0 block h-full w-full object-cover object-[center_top]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,12,18,.22) 0%, rgba(8,12,18,.05) 32%, rgba(8,12,18,.55) 100%)",
            mixBlendMode: "multiply"
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #05070A 0%, #05070A 12%, rgba(5,7,10,.85) 32%, rgba(5,7,10,.4) 56%, transparent 90%)"
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,7,10,.55) 0%, transparent 22%, transparent 78%, rgba(5,7,10,.85) 100%)"
          }}
        />
      </div>

      <DdContainer className="relative z-[2] pb-[72px] pt-[168px]" style={{ minHeight: 900 }}>
        <div className="grid min-h-[660px] grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-between gap-9">
            <div className="flex flex-col gap-9">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-[22px] bg-[var(--dd-action-copper)]" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-copper)]">
                  Виталий Тимошенко · основатель Делаем Диджитал
                </span>
              </div>

              <h1 className="max-w-[620px] text-[clamp(44px,4.2vw,68px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--dd-text-primary)]">
                <div>Собираю бизнесу управляемую систему</div>
                <div>
                  <span className="text-[var(--dd-diagnostic-blue)]">привлечения клиентов.</span>
                </div>
              </h1>

              <p className="max-w-[480px] text-[17px] leading-[1.6] text-[var(--dd-text-secondary)]">
                Для предпринимателей, которым нужен не набор digital-инструментов, а понятный маршрут от первого
                касания до заявки.
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-[14px]">
                <PrimaryBtn
                  href="#contacts"
                  data-analytics-event="cta_primary_click"
                  data-analytics-label="hero_primary"
                  data-analytics-value="#contacts"
                >
                  Разбор системы
                  <BtnArrow />
                </PrimaryBtn>
                <SecondaryBtn
                  href={siteConfig.telegramChannelUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-event="telegram_channel_click"
                  data-analytics-label="hero_telegram_channel"
                  data-analytics-value={siteConfig.telegramChannelUrl}
                >
                  Telegram-канал
                </SecondaryBtn>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-6 text-[13px] text-[var(--dd-text-muted)]">
                <span className="inline-flex items-center gap-2">
                  <PingDot />
                  Принимаем 2 проекта в квартал
                </span>
                <span className="hidden h-[14px] w-px bg-[var(--dd-border-steel)] sm:block" aria-hidden />
                <span>Методология ClientFlow System</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--dd-text-muted)]">
                Замкнутый маршрут
              </span>
              <FlowPath steps={heroFlowSteps} activeIndex={2} />
            </div>
          </div>

          <div className="relative hidden min-h-[200px] lg:block">
            <p className="absolute right-0 top-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
              SYS · 01 / 12 · HERO
            </p>
            <div className="absolute bottom-2 right-0 text-right">
              <p className="text-[14px] font-semibold text-[var(--dd-text-primary)]">Виталий Тимошенко</p>
              <p className="text-[12px] tracking-[0.02em] text-[var(--dd-text-muted)]">основатель · ведёт каждый проект</p>
            </div>
          </div>
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
