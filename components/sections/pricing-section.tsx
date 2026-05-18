import { pricing } from "@/lib/pricing";
import {
  BtnArrow,
  CopperCheckIcon,
  DdContainer,
  DdH2,
  DdLabel,
  DdSub,
  KickerLine,
  PingDot,
  PrimaryBtn,
  SectionFrame,
  SectionIndex,
  SecondaryBtn
} from "@/components/sections/dd-ui";

const planMeta: Record<
  (typeof pricing)[number]["intent"],
  { kicker: string; lede: string; time: string; excludes: string[]; featured?: boolean }
> = {
  "delaem-site": {
    kicker: "СТАРТ",
    lede: "Одна посадочная, один канал, чистый запуск.",
    time: "3–4 недели",
    excludes: ["Многоканальный трафик", "CRM-маршрут", "AI-квалификация"]
  },
  "delaem-traffic": {
    kicker: "ТРАФИК · ВЫБИРАЮТ ЧАЩЕ",
    lede: "Связка трафик → посадочная → CRM с управляемым результатом.",
    time: "6–8 недель",
    excludes: ["AI-квалификация", "Обучение продаж"],
    featured: true
  },
  "delaem-system": {
    kicker: "СИСТЕМА",
    lede: "Все семь компонентов под ключ, спринт-цикл оптимизации.",
    time: "10–14 недель",
    excludes: []
  }
};

export function PricingSection() {
  return (
    <SectionFrame id="pricing" bg="#05070A" fadeTo="#080C12" style={{ minHeight: 980 }}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[360px] h-[540px] w-[540px] -translate-x-1/2 rounded-full blur-[20px]"
        style={{
          background: "radial-gradient(circle at center, rgba(184,121,75,.16) 0%, transparent 65%)"
        }}
      />

      <DdContainer className="relative py-24">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[760px] flex-col gap-[18px]">
            <KickerLine>Стоимость · § 11</KickerLine>
            <DdH2>
              Прозрачные тарифы.
              <br />
              Без скрытых доплат.
            </DdH2>
            <DdSub className="max-w-[620px]">
              Фиксированная стоимость проекта — без ежемесячных абонентов и скрытых доплат. Бюджет на трафик — отдельно,
              у клиента, мы только им управляем.
            </DdSub>
          </div>
          <SectionIndex n={11} />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-[22px] lg:grid-cols-3">
          {pricing.map((item) => {
            const meta = planMeta[item.intent];
            const featured = meta.featured ?? false;

            return (
              <article
                key={item.intent}
                className="relative flex flex-col gap-[22px] rounded-[var(--dd-radius-lg)] p-7 lg:p-8"
                style={{
                  background: featured
                    ? "linear-gradient(180deg, rgba(20,14,9,.85) 0%, rgba(14,22,34,.82) 100%)"
                    : "var(--dd-surface-obsidian)",
                  border: featured ? "1px solid rgba(184,121,75,.55)" : "1px solid var(--dd-border-steel)",
                  boxShadow: featured ? "0 24px 64px rgba(184,121,75,.18), var(--dd-shadow-panel)" : "var(--dd-shadow-subtle)"
                }}
              >
                {featured ? (
                  <div className="absolute -top-2.5 left-7 rounded-full bg-[var(--dd-action-copper)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0a0c10]">
                    Чаще выбирают
                  </div>
                ) : null}

                <div className="flex flex-col gap-2">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: featured ? "var(--dd-action-copper)" : "var(--dd-text-muted)" }}
                  >
                    {meta.kicker}
                  </span>
                  <h3 className="text-[28px] font-bold leading-[1.15] tracking-[-0.025em] text-[var(--dd-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[1.55] text-[var(--dd-text-secondary)]">{meta.lede}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[36px] font-bold leading-none tracking-[-0.03em] text-[var(--dd-text-primary)]">
                    {item.price}
                  </span>
                  <span className="text-[13px] text-[var(--dd-text-muted)]">фиксированная стоимость проекта</span>
                </div>

                <div className="flex items-center gap-3 border-y border-[var(--dd-border-steel)] py-3">
                  <DdLabel className="tracking-[0.14em]">Срок сборки</DdLabel>
                  <span className="text-sm font-semibold text-[var(--dd-text-primary)]">{meta.time}</span>
                </div>

                <ul className="flex flex-1 flex-col gap-2.5">
                  {item.items.map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-sm text-[var(--dd-text-secondary)]">
                      <CopperCheckIcon className={featured ? "mt-1" : "mt-1 opacity-80"} />
                      <span>{line}</span>
                    </li>
                  ))}
                  {meta.excludes.map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-sm text-[var(--dd-text-muted)]">
                      <svg width="13" height="13" viewBox="0 0 13 13" className="mt-1 shrink-0" aria-hidden>
                        <path d="M3 6.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      <span className="line-through decoration-[rgba(127,139,156,.5)]">{line}</span>
                    </li>
                  ))}
                </ul>

                {featured ? (
                  <PrimaryBtn
                    href="#contacts"
                    className="w-full justify-center"
                    data-analytics-event="pricing_cta_click"
                    data-analytics-label={item.title}
                    data-analytics-value={item.price}
                    data-analytics-intent={item.intent}
                  >
                    {item.cta}
                    <BtnArrow />
                  </PrimaryBtn>
                ) : (
                  <SecondaryBtn
                    href="#contacts"
                    className="w-full justify-center border-[var(--dd-action-copper)] text-[var(--dd-action-copper)]"
                    data-analytics-event="pricing_cta_click"
                    data-analytics-label={item.title}
                    data-analytics-value={item.price}
                    data-analytics-intent={item.intent}
                  >
                    {item.cta}
                  </SecondaryBtn>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[var(--dd-text-muted)]">
          <span className="inline-flex items-center gap-2">
            <PingDot />
            Гарантия конверсии в договоре
          </span>
          <span className="hidden h-3.5 w-px bg-[var(--dd-border-steel)] sm:block" aria-hidden />
          <span>Оплата по этапам — 30 / 40 / 30</span>
          <span className="hidden h-3.5 w-px bg-[var(--dd-border-steel)] sm:block" aria-hidden />
          <span>Договор и закрывающие документы — на ООО или ИП</span>
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
