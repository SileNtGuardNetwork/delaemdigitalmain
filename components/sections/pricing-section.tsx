import { pricing } from "@/lib/pricing";
import { CopperCheck, SectionKicker } from "@/components/sections/section-ui";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative bg-[#050709] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 500px 400px at 50% 60%, rgba(184,121,75,0.07) 0%, transparent 70%)"
        }}
        aria-hidden
      />

      <div className="relative">
        <SectionKicker>Тарифы</SectionKicker>
        <h2 className="text-[clamp(32px,3.5vw,44px)] font-extrabold tracking-[-0.025em] text-[var(--dd-text-primary)]">
          Прозрачная стоимость.
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] text-[var(--dd-text-secondary)]">
          Фиксированная цена проекта — без скрытых платежей и почасовых рисков.
        </p>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {pricing.map((item) => (
            <article
              key={item.title}
              className={
                item.recommended
                  ? "relative flex flex-col gap-5 rounded-[20px] border-[1.5px] border-[var(--dd-action-copper)] p-8 shadow-[0_0_80px_rgba(184,121,75,0.14),0_22px_58px_rgba(0,0,0,0.32)] lg:-translate-y-2"
                  : "flex flex-col gap-5 rounded-[20px] border border-[var(--dd-border-steel)] bg-[var(--dd-surface-obsidian)] p-8"
              }
              style={
                item.recommended
                  ? { background: "linear-gradient(165deg, rgba(20,14,9,0.9), rgba(12,17,25,0.95))" }
                  : undefined
              }
            >
              <h3 className="text-[22px] font-bold text-[var(--dd-text-primary)]">{item.title}</h3>
              <p className="text-sm text-[var(--dd-text-secondary)]">{item.description}</p>
              <p
                className={`text-4xl font-extrabold tracking-[-0.02em] ${
                  item.recommended ? "text-[var(--dd-action-copper)]" : "text-[var(--dd-text-primary)]"
                }`}
              >
                {item.price}
              </p>
              <p className="text-[11px] text-[var(--dd-text-muted)]">фиксированная стоимость</p>
              <div className="h-px bg-[var(--dd-border-steel)]" />
              <ul className="flex flex-col gap-2.5 [&_li]:before:content-none">
                {item.items.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-[var(--dd-text-secondary)]">
                    <CopperCheck />
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href={`?service=${item.intent}&source=pricing#contacts`}
                className={
                  item.recommended
                    ? "mt-auto block w-full rounded-xl bg-[var(--dd-action-copper)] py-3.5 text-center text-sm font-bold text-[#F5F7FB] no-underline transition-all hover:bg-[var(--dd-action-copper-hover)] hover:shadow-[var(--dd-shadow-copper-action)]"
                    : "mt-auto block w-full rounded-xl border-[1.5px] border-[var(--dd-action-copper)] py-3.5 text-center text-sm font-semibold text-[var(--dd-action-copper)] no-underline transition-colors hover:bg-[rgba(184,121,75,0.08)]"
                }
                data-analytics-event="pricing_cta_click"
                data-analytics-label={item.title}
                data-analytics-value={item.price}
                data-analytics-intent={item.intent}
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
