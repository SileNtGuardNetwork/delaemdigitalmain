import { SectionKicker } from "@/components/sections/section-ui";

const modules = [
  { num: "01", title: "Оффер", desc: "Формулировка, которая считывается за 5 секунд.", tag: "Боль · Решение · Доказательство" },
  { num: "02", title: "Посадочная", desc: "Сайт или мини-сайт под одну задачу. Скорость до 1.4 с.", tag: "Структура · Дизайн · Адаптив" },
  { num: "03", title: "Трафик", desc: "3 канала, диверсифицированных по риску. Бюджет под маржу.", tag: "Контекст · Таргет · SEO" },
  { num: "04", title: "Квалификация", desc: "Скоринг по 7 признакам. Только целевые — в продажу.", tag: "AI · Скрипт · Маршрут" },
  { num: "05", title: "Дожим", desc: "Серии касаний до 14 дней без потери. Реактивация раз в квартал.", tag: "Мессенджеры · Email" },
  { num: "06", title: "Аналитика", desc: "Сквозной отчёт от клика до сделки. Дашборд для собственника.", tag: "CAC · LTV · CRM" },
  { num: "07", title: "CRM", desc: "Чистый маршрут заявки. Регламент скорости ответа. Автоматизация.", tag: "Стадии · Регламент" }
] as const;

function ModuleIcon({ type }: { type: number }) {
  const paths = [
    "M4 12V6l4-3 4 3v6M4 12h8",
    "M3 5h10v8H3zM6 9h4",
    "M3 8h10M8 3v10",
    "M4 10l3-4 3 4M7 6v6",
    "M4 7h6l-2 5H6z",
    "M4 11V5h6v6H4zM9 9h3",
    "M4 4h8v8H4zM7 7h2"
  ];
  return (
    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" aria-hidden className="text-[var(--dd-action-steel-blue)]">
      <path d={paths[type] ?? paths[0]} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AssemblySection() {
  return (
    <section className="border-l-2 border-[var(--dd-action-copper)] bg-[var(--dd-canvas-graphite)] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]">
      <SectionKicker>Сборка системы</SectionKicker>
      <h2 className="max-w-3xl text-[clamp(32px,3.5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--dd-text-primary)]">
        Семь компонентов.
        <br />
        <span className="text-[#5f8ed8]">Один маршрут.</span>
      </h2>
      <p className="mt-5 max-w-[520px] text-[17px] leading-[1.6] text-[var(--dd-text-secondary)]">
        ClientFlow System — не набор инструментов, а сборка под конкретный маршрут клиента. Каждый компонент решает
        один вопрос.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((item, index) => (
          <article
            key={item.num}
            className="flex min-h-[220px] flex-col rounded-2xl border border-[var(--dd-border-steel)] bg-[var(--dd-surface-obsidian)] p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[rgba(184,121,75,0.35)]"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--dd-action-copper)]">
              {item.num}
            </span>
            <div className="mt-3">
              <ModuleIcon type={index} />
            </div>
            <h3 className="mt-3 text-[17px] font-bold text-[var(--dd-text-primary)]">{item.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-[var(--dd-text-secondary)]">{item.desc}</p>
            <p className="mt-auto border-t border-[rgba(148,163,184,0.08)] pt-3 text-[11px] text-[var(--dd-text-muted)]">
              {item.tag}
            </p>
          </article>
        ))}

        <article
          className="flex flex-col justify-between gap-6 rounded-[20px] border border-[rgba(184,121,75,0.5)] p-7 sm:col-span-2 lg:col-span-4 lg:flex-row lg:items-center"
          style={{ background: "linear-gradient(135deg, rgba(20,14,9,0.7), rgba(14,22,34,0.8))" }}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--dd-action-copper)]">
              Σ Система целиком
            </p>
            <p className="mt-2 text-xl font-bold text-[var(--dd-text-primary)]">
              Все семь компонентов под ключ — от оффера до аналитики.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <p className="text-2xl font-extrabold text-[var(--dd-action-copper)]">от 350 000 ₽</p>
            <a
              href="?service=delaem-system&source=assembly#contacts"
              className="rounded-xl bg-[var(--dd-action-copper)] px-6 py-3 text-sm font-bold text-[#F5F7FB] no-underline transition-colors hover:bg-[var(--dd-action-copper-hover)]"
              data-analytics-event="cta_primary_click"
              data-analytics-label="assembly_system"
              data-analytics-value="#contacts"
            >
              Собрать систему
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
