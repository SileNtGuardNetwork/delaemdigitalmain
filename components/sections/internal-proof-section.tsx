import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  PrimaryBtn,
  SecondaryBtn,
  SectionFrame
} from "@/components/sections/dd-ui";

const evidenceBlocks = [
  {
    title: "Сайт как продукт",
    description: "Не просто страница, а управляемая точка входа в продажи."
  },
  {
    title: "Система заявок",
    description: "Формы, CTA, маршруты и обработка связаны — не живут отдельно."
  },
  {
    title: "Аналитика и улучшения",
    description: "После запуска видно, где усиливать оффер, трафик, форму или обработку."
  },
  {
    title: "Production-подход",
    description: "Каждый блок проходит структуру, реализацию, проверку и улучшение."
  }
] as const;

export function InternalProofSection() {
  return (
    <SectionFrame id="proof" bg="#080C12" fadeTo="#05070A" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[760px] flex-col gap-5">
          <KickerLine>Сначала собираем себе</KickerLine>
          <DdH2>Мы строим Делаем Диджитал как собственную ClientFlow-систему.</DdH2>
          <DdSub>
            Этот сайт — не витрина «на потом». Мы собираем на нём тот же контур, который предлагаем клиентам:
            сильный оффер, структура, заявки, Telegram/CRM, аналитика и дальнейшие улучшения.
          </DdSub>
        </div>

        <div
          className="mb-4 flex items-center justify-between gap-3 rounded-[14px] border border-[var(--dd-border-cool)] px-5 py-3"
          style={{ background: "rgba(8,12,18,.55)" }}
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
            Внутренний контур · evidence board
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--dd-diagnostic-blue)]">
            Build in public
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {evidenceBlocks.map((item, index) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-[14px] border border-[var(--dd-border-cool)] p-5 md:p-6"
              style={{ background: "rgba(14,22,34,.45)" }}
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(95,142,216,0.25)] font-mono text-[12px] font-semibold text-[var(--dd-diagnostic-blue)]"
                style={{ background: "rgba(95,142,216,0.08)" }}
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-[var(--dd-text-primary)]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-[var(--dd-text-secondary)]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <SecondaryBtn
            href="#products"
            className="px-6 py-3 text-[14px]"
            data-analytics-event="cta_secondary_click"
            data-analytics-label="proof_view_products"
            data-analytics-value="#products"
          >
            Посмотреть продукты
          </SecondaryBtn>
          <PrimaryBtn
            href="#contacts"
            className="px-6 py-3 text-[14px]"
            data-analytics-event="cta_primary_click"
            data-analytics-label="proof_primary_cta"
            data-analytics-value="#contacts"
          >
            Разбор системы
          </PrimaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
