import {
  CopperCheckIcon,
  DdContainer,
  DdH2,
  DdH3,
  KickerLine,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const disconnectedNodes = ["Сайт", "Контекст", "Таргет", "CRM"] as const;

const usualBullets = [
  "Заявки теряются на стыках",
  "Никто не отвечает за результат целиком",
  "Аналитика собирается из 4 разных мест"
] as const;

const ourBullets = [
  "Сквозной KPI — стоимость целевой сделки",
  "Один ответственный за результат целиком",
  "Аналитика и оптимизация — в одном контуре"
] as const;

function NodeArrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="shrink-0 text-[var(--dd-action-copper)]">
      <path
        d="M0 5h12M8.5 1 13 5l-4.5 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhySection() {
  return (
    <SectionFrame bg="#05070A" fadeTo="#080C12" style={{ minHeight: 820 }}>
      <DdContainer className="py-24">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 sm:flex-row">
          <div className="flex max-w-[760px] flex-col gap-[18px]">
            <KickerLine>Почему это работает · § 08</KickerLine>
            <DdH2>
              Маркетинг не ломается
              <br />
              на инструментах. Ломается{" "}
              <span className="text-[var(--dd-diagnostic-blue)]">между ними</span>.
            </DdH2>
          </div>
          <SectionIndex n={8} />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <article className="relative flex flex-col gap-6 overflow-hidden rounded-[var(--dd-radius-lg)] border border-[var(--dd-border-steel)] bg-[rgba(8,12,18,0.4)] p-9">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(214,106,106,0.3)] bg-[rgba(214,106,106,0.1)] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-danger)]">
                <span className="h-[5px] w-[5px] rounded-full bg-[var(--dd-danger)]" aria-hidden />
                Как обычно
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                cfg · disconnected
              </span>
            </div>

            <DdH3>Инструменты отдельно.</DdH3>
            <p className="max-w-[480px] text-[15px] leading-[1.65] text-[var(--dd-text-secondary)]">
              Один подрядчик делает сайт. Второй — контекст. Третий — таргет. Четвёртый — CRM. У каждого свой отчёт,
              свой KPI, своя версия правды. Ответственность размывается, оптимизировать общую конверсию некому.
            </p>

            <div className="mt-auto grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              {disconnectedNodes.map((node) => (
                <div
                  key={node}
                  className="rounded-[var(--dd-radius-sm)] border border-dashed border-[rgba(214,106,106,0.25)] bg-[rgba(8,12,18,0.6)] px-3 py-3.5 text-center text-xs text-[var(--dd-text-muted)]"
                >
                  {node}
                </div>
              ))}
            </div>

            <ul className="mt-1 flex flex-col gap-2.5">
              {usualBullets.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] text-[var(--dd-text-secondary)]">
                  <span
                    className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--dd-danger)] opacity-[0.85]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article
            className="relative flex flex-col gap-6 overflow-hidden rounded-[var(--dd-radius-lg)] border border-[rgba(184,121,75,0.42)] p-9 shadow-[var(--dd-shadow-panel)]"
            style={{
              background: "linear-gradient(180deg, rgba(14,22,34,0.85) 0%, rgba(14,22,34,0.7) 100%)"
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(184,121,75,0.4)] bg-[rgba(184,121,75,0.1)] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-copper)]">
                <span className="h-[5px] w-[5px] rounded-full bg-[var(--dd-action-copper)]" aria-hidden />
                У нас
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                cfg · linked
              </span>
            </div>

            <DdH3>Один маршрут.</DdH3>
            <p className="max-w-[480px] text-[15px] leading-[1.65] text-[var(--dd-text-secondary)]">
              Все семь компонентов собирает одна команда, под общим KPI — стоимость целевой сделки. Узлы
              синхронизированы между собой, аналитика сквозная. Чинить можно точечно — не пересобирая всё.
            </p>

            <div className="mt-auto flex items-center justify-between gap-1.5 pt-4">
              {disconnectedNodes.map((node, index, arr) => (
                <span key={node} className="contents">
                  <span className="flex-1 rounded-[var(--dd-radius-sm)] border border-[rgba(184,121,75,0.35)] bg-[rgba(8,12,18,0.6)] px-2 py-3.5 text-center text-xs font-semibold text-[var(--dd-text-primary)]">
                    {node}
                  </span>
                  {index < arr.length - 1 ? <NodeArrow /> : null}
                </span>
              ))}
            </div>

            <ul className="mt-1 flex flex-col gap-2.5">
              {ourBullets.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] text-[var(--dd-text-secondary)]">
                  <CopperCheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
