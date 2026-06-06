import {
  BtnArrow,
  DdSub,
  FlagshipContainer,
  KickerLine,
  PrimaryBtn,
  RimLight,
  SecondaryBtn,
  SectionFrame
} from "@/components/sections/dd-ui";
import { siteConfig } from "@/lib/site-config";

const reviewMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Разбор системы — Делаем Диджитал")}`;

const actionCards = [
  {
    label: "Разбор системы",
    detail: "Короткий созвон или переписка: смотрим текущий маршрут и слабые места.",
    href: reviewMailto,
    cta: "Запросить разбор",
    analyticsLabel: "final_cta_request_review",
    primary: true
  },
  {
    label: "Написать в Telegram",
    detail: "Быстрый контакт, если удобнее обсудить в мессенджере.",
    href: siteConfig.telegramContactUrl,
    cta: "Открыть Telegram",
    analyticsLabel: "final_cta_telegram_contact",
    primary: false
  }
] as const;

export function FinalCtaSection() {
  return (
    <SectionFrame id="contacts" bg="#05070A" className="min-h-0">
      <RimLight style={{ left: "50%", top: "40%", transform: "translate(-50%, -50%)", opacity: 0.45 }} />

      <FlagshipContainer className="relative py-20 md:py-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-7 md:gap-8">
            <KickerLine>Следующий шаг</KickerLine>

            <h2 className="max-w-[700px] text-[clamp(32px,4.2vw,52px)] font-extrabold leading-[1.06] tracking-[-0.04em] text-[var(--dd-text-primary)]">
              Начнём с разбора вашей системы
            </h2>

            <DdSub className="max-w-[600px]">
              Покажем, где сейчас теряется путь к заявке, какие элементы уже работают и что нужно собрать, чтобы сайт,
              трафик, AI, Telegram/CRM и аналитика стали одной системой.
            </DdSub>

            <div className="flex flex-wrap items-center gap-3.5">
              <PrimaryBtn
                href={reviewMailto}
                className="px-8 py-4 text-base"
                data-analytics-event="cta_primary_click"
                data-analytics-label="final_cta_primary"
                data-analytics-value={siteConfig.email}
              >
                Разбор системы
                <BtnArrow />
              </PrimaryBtn>
              <SecondaryBtn
                href={siteConfig.telegramContactUrl}
                target="_blank"
                rel="noreferrer"
                className="px-[26px] py-[15px]"
                data-analytics-event="cta_secondary_click"
                data-analytics-label="final_cta_telegram"
                data-analytics-value={siteConfig.telegramContactUrl}
              >
                Написать в Telegram
              </SecondaryBtn>
            </div>

            <p className="m-0 max-w-[560px] text-[14px] leading-[1.65] text-[var(--dd-text-muted)]">
              Без обязательств и навязчивых продаж. Сначала смотрим систему, потом предлагаем следующий шаг.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {actionCards.map((card) => {
              const Cta = card.primary ? PrimaryBtn : SecondaryBtn;
              return (
                <article
                  key={card.label}
                  className="flex flex-col gap-4 rounded-[14px] border border-[var(--dd-border-cool)] p-6"
                  style={{
                    background: "var(--dd-surface-control)",
                    boxShadow: "var(--dd-shadow-panel)"
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-steel-blue)]">
                      {card.label}
                    </span>
                    <p className="m-0 text-[14px] leading-[1.6] text-[var(--dd-text-secondary)]">{card.detail}</p>
                  </div>
                  <Cta
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    className="w-full justify-center py-3.5 text-[15px] sm:w-auto sm:self-start"
                    data-analytics-event={card.primary ? "cta_primary_click" : "cta_secondary_click"}
                    data-analytics-label={card.analyticsLabel}
                    data-analytics-value={card.href}
                  >
                    {card.cta}
                    {card.primary ? <BtnArrow /> : null}
                  </Cta>
                </article>
              );
            })}

            <p className="m-0 rounded-[12px] border border-[var(--dd-border-steel)] px-4 py-3 text-[12px] leading-[1.55] text-[var(--dd-text-muted)]"
              style={{ background: "rgba(8,12,18,.45)" }}
            >
              Форма заявки с согласием на обработку данных подключится на этапе V2-8. Сейчас — прямой контакт без
              отправки в backend.
            </p>
          </div>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
