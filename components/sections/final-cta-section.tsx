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

export function FinalCtaSection() {
  return (
    <SectionFrame id="contacts" bg="#05070A" className="min-h-0">
      <RimLight style={{ left: "50%", top: "40%", transform: "translate(-50%, -50%)", opacity: 0.55 }} />

      <FlagshipContainer className="relative py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-8">
            <KickerLine>Следующий шаг · § 08</KickerLine>

            <h2 className="max-w-[700px] text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[var(--dd-text-primary)]">
              Начнём с разбора вашей системы
            </h2>

            <DdSub className="max-w-[560px]">
              Короткий разговор: что уже есть, где теряются заявки и с какого уровня продукта логично начать.
            </DdSub>

            <div className="flex flex-wrap items-center gap-3.5">
              <PrimaryBtn
                href="#contacts"
                className="px-8 py-4 text-base"
                data-analytics-event="cta_primary_click"
                data-analytics-label="final_cta_primary"
                data-analytics-value="#contacts"
              >
                Разбор системы
                <BtnArrow />
              </PrimaryBtn>
              <SecondaryBtn
                href={siteConfig.telegramChannelUrl}
                className="px-[26px] py-[15px]"
                data-analytics-event="cta_secondary_click"
                data-analytics-label="final_cta_telegram"
                data-analytics-value={siteConfig.telegramChannelUrl}
              >
                Telegram-канал
              </SecondaryBtn>
            </div>

            <div className="flex flex-wrap items-center gap-[18px] text-[13px] text-[var(--dd-text-muted)]">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--dd-success)]" aria-hidden />
                Принимаем 2 проекта в квартал
              </span>
              <span className="h-3.5 w-px bg-[var(--dd-border-steel)]" aria-hidden />
              <span>Ответим в течение рабочего дня</span>
            </div>
          </div>

          <div
            className="flex flex-col gap-4 rounded-[var(--dd-radius-md)] border border-[var(--dd-border-cool)] p-7"
            style={{
              background: "var(--dd-surface-control)",
              boxShadow: "var(--dd-shadow-panel)"
            }}
          >
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-steel-blue)]">
              ↳ форма заявки
            </span>
            <hr className="border-0 border-t border-[var(--dd-border-steel)]" />
            <p className="text-[14px] leading-[1.6] text-[var(--dd-text-secondary)]">
              Форма подключится на этапе V2-8. Сейчас — скелет: CTA ведёт к разбору, без отправки в backend.
            </p>
            <PrimaryBtn href="mailto:hello@delaem.digital" className="w-full justify-center py-3.5 text-[15px]">
              Написать на hello@delaem.digital
            </PrimaryBtn>
          </div>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
