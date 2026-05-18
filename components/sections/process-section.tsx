import { SectionKicker } from "@/components/sections/section-ui";

const steps = [
  {
    num: "01",
    title: "Назначить созвон",
    desc: "Смотрим, что у вас уже есть. Сверяем оффер, сайт, источники, регламенты и аналитику по 30 контрольным точкам.",
    duration: "60 мин"
  },
  {
    num: "02",
    title: "Стратегия",
    desc: "Собираем целевой маршрут: каналы, оффер, путь заявки, стадии, регламенты. Согласуем бюджет, KPI и горизонт.",
    duration: "1–2 дня"
  },
  {
    num: "03",
    title: "Запуск",
    desc: "Четыре команды параллельно: посадочная, трафик, CRM, квалификация. Запуск поэтапно, без даунтайма.",
    duration: "3–6 недель"
  },
  {
    num: "04",
    title: "Стабилизация",
    desc: "Первые 4 недели — режим наблюдения. Чиним то, что вскрылось на реальных заявках.",
    duration: "4 недели"
  },
  {
    num: "05",
    title: "Оптимизация",
    desc: "Спринт-цикл: раз в две недели — точечный апгрейд самой узкой точки маршрута.",
    duration: "непрерывно"
  }
] as const;

export function ProcessSection() {
  return (
    <section className="bg-[#070C14] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]">
      <SectionKicker>Процесс</SectionKicker>
      <h2 className="text-[clamp(32px,3.5vw,44px)] font-extrabold tracking-[-0.025em] text-[var(--dd-text-primary)]">
        Как это работает.
      </h2>

      <div className="relative mx-auto mt-14 max-w-[720px] pl-10">
        <span className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-[rgba(184,121,75,0.25)]" aria-hidden />
        {steps.map((step) => (
          <div key={step.num} className="relative flex gap-6 pb-12 last:pb-0">
            <span className="absolute -left-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--dd-action-copper)] bg-[var(--dd-canvas-graphite)] text-sm font-bold text-[var(--dd-action-copper)]">
              {step.num}
            </span>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold text-[var(--dd-text-primary)]">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--dd-text-secondary)]">{step.desc}</p>
              <span className="mt-2.5 inline-block rounded-[20px] border border-[rgba(148,163,184,0.15)] px-2.5 py-1 text-[11px] text-[var(--dd-text-muted)]">
                {step.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
