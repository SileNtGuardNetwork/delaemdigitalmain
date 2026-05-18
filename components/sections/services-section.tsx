import { CopperCheck, SectionKicker } from "@/components/sections/section-ui";

const services = [
  {
    level: "Уровень 01",
    title: "Делаем Сайт",
    tagline: "Одна посадочная под одну задачу.",
    price: "от 150 000 ₽",
    items: ["Оффер и структура", "Дизайн и адаптив", "Базовая аналитика и события", "Поддержка 30 дней"],
    when: "Когда нужна быстрая точка приземления для одной кампании.",
    cta: "Обсудить сайт",
    href: "?service=delaem-site&source=services#contacts",
    featured: false
  },
  {
    level: "Уровень 02",
    title: "Делаем Трафик",
    tagline: "Связка трафик — посадочная с управляемым результатом.",
    price: "от 250 000 ₽",
    items: [
      "Всё из «Делаем Сайт»",
      "Три канала трафика",
      "Квалификация и скоринг",
      "CRM-маршрут и стадии",
      "Сквозная аналитика",
      "Серии дожима"
    ],
    when: "Когда нужен предсказуемый объём заявок месяц-в-месяц.",
    cta: "Обсудить трафик",
    href: "?service=delaem-traffic&source=services#contacts",
    featured: true
  },
  {
    level: "Уровень 03",
    title: "Делаем Систему",
    tagline: "Все семь компонентов под ключ.",
    price: "от 350 000 ₽",
    items: [
      "Всё из «Делаем Трафик»",
      "AI-квалификация заявок",
      "Регламенты и обучение продаж",
      "Сборка и передача под ключ",
      "Персональный аналитик на проекте",
      "Сопровождение 6 мес."
    ],
    when: "Когда выручка зависит от системы привлечения целиком.",
    cta: "Собрать систему",
    href: "?service=delaem-system&source=services#contacts",
    featured: false
  }
] as const;

export function ServicesSection() {
  return (
    <section className="bg-[var(--dd-canvas-obsidian)] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]">
      <SectionKicker>Услуги</SectionKicker>
      <h2 className="text-[clamp(32px,3.5vw,44px)] font-extrabold tracking-[-0.025em] text-[var(--dd-text-primary)]">
        Три масштаба работы.
      </h2>
      <p className="mt-4 max-w-2xl text-[17px] text-[var(--dd-text-secondary)]">
        Выбирайте уровень под задачу. Каждый следующий включает всё из предыдущего.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {services.map((item) => (
          <article
            key={item.title}
            className={
              item.featured
                ? "relative flex flex-col rounded-[20px] border-[1.5px] border-[var(--dd-action-copper)] p-8 shadow-[0_0_60px_rgba(184,121,75,0.12),0_22px_58px_rgba(0,0,0,0.4)]"
                : "flex flex-col rounded-[20px] border border-[var(--dd-border-steel)] bg-[var(--dd-surface-obsidian)] p-8"
            }
            style={
              item.featured
                ? { background: "linear-gradient(145deg, rgba(20,14,9,0.85), rgba(12,17,25,0.9))" }
                : undefined
            }
          >
            {item.featured ? (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-[20px] bg-[var(--dd-action-copper)] px-4 py-1 text-[11px] font-bold tracking-[0.08em] text-[#F5F7FB]">
                Чаще выбирают
              </span>
            ) : null}
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--dd-action-copper)]">
              {item.level}
            </span>
            <h3
              className={`mt-2 text-2xl font-bold ${item.featured ? "text-[var(--dd-action-copper)]" : "text-[var(--dd-text-primary)]"}`}
            >
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--dd-text-secondary)]">{item.tagline}</p>
            <p
              className={`mt-5 text-[32px] font-extrabold ${item.featured ? "text-[var(--dd-action-copper)]" : "text-[var(--dd-text-primary)]"}`}
            >
              {item.price}
            </p>
            <p className="text-[11px] text-[var(--dd-text-muted)]">фиксированная стоимость</p>
            <div className="my-5 h-px bg-[var(--dd-border-steel)]" />
            <ul className="flex flex-col gap-2.5">
              {item.items.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-[var(--dd-text-secondary)]">
                  <CopperCheck />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-5 text-[13px] leading-normal text-[var(--dd-text-muted)]">{item.when}</p>
            <a
              href={item.href}
              className={
                item.featured
                  ? "mt-4 block w-full rounded-xl bg-[var(--dd-action-copper)] py-3.5 text-center text-sm font-bold text-[#F5F7FB] no-underline transition-colors hover:bg-[var(--dd-action-copper-hover)]"
                  : "mt-4 block w-full rounded-xl border-[1.5px] border-[var(--dd-action-copper)] py-3.5 text-center text-sm font-semibold text-[var(--dd-action-copper)] no-underline transition-colors hover:bg-[rgba(184,121,75,0.08)]"
              }
              data-analytics-event="pricing_cta_click"
              data-analytics-label={item.title}
              data-analytics-value={item.price}
            >
              {item.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
