import { SectionKicker } from "@/components/sections/section-ui";

const usualList = [
  "Заявки теряются на стыках",
  "Никто не отвечает за результат целиком",
  "Аналитика собирается из 4 разных мест"
] as const;

const ourList = [
  "Сквозной KPI — стоимость целевой сделки",
  "Один ответственный за результат целиком",
  "Аналитика и оптимизация — в одном контуре"
] as const;

export function WhySection() {
  return (
    <section className="bg-[var(--dd-canvas-graphite)] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]">
      <SectionKicker>Почему это работает</SectionKicker>
      <h2 className="max-w-3xl text-[clamp(32px,3.5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--dd-text-primary)]">
        Маркетинг не ломается на инструментах.
        <br />
        <span className="text-[#5f8ed8]">Ломается между ними.</span>
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="flex min-h-[360px] flex-col gap-5 rounded-[20px] border border-[rgba(214,106,106,0.2)] bg-[rgba(30,8,8,0.4)] p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-[rgba(214,106,106,0.25)] bg-[rgba(214,106,106,0.08)] px-3 py-1 text-xs font-semibold text-[#d66a6a]">
              Как обычно
            </span>
            <span className="font-mono text-[11px] text-[var(--dd-text-muted)]">Инструменты отдельно</span>
          </div>
          <p className="text-[15px] leading-[1.6] text-[var(--dd-text-secondary)]">
            Один подрядчик делает сайт. Второй — контекст. Третий — таргет. Четвёртый — CRM. У каждого свой
            отчёт, своя метрика. Ответственность размывается — оптимизировать конверсию некому.
          </p>
          <ul className="mt-auto flex flex-col gap-2.5">
            {usualList.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--dd-text-secondary)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d66a6a]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article
          className="flex min-h-[360px] flex-col gap-5 rounded-[20px] border border-[rgba(111,191,145,0.25)] p-8"
          style={{ background: "linear-gradient(145deg, rgba(14,20,10,0.5), rgba(12,17,25,0.7))" }}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-[rgba(111,191,145,0.3)] bg-[rgba(111,191,145,0.12)] px-3 py-1 text-xs font-semibold text-[#6fbf91]">
              У нас
            </span>
            <span className="font-mono text-[11px] text-[var(--dd-text-muted)]">Один маршрут</span>
          </div>
          <p className="text-[15px] leading-[1.6] text-[var(--dd-text-secondary)]">
            Все семь компонентов собирает одна команда, под общим KPI — стоимость целевой сделки. Один
            ответственный за результат целиком.
          </p>
          <ul className="mt-auto flex flex-col gap-2.5">
            {ourList.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--dd-text-secondary)]">
                <span className="text-[var(--dd-action-steel-blue)]" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
