import {
  DdContainer,
  DdH2,
  DdLabel,
  KickerLine,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const steps = [
  {
    n: "01",
    label: "Аудит",
    title: "Смотрим, что у вас уже есть",
    d: "Сверяем оффер, сайт, источники, регламенты, CRM и аналитику со списком из 30+ контрольных точек. На выходе — отчёт с приоритетами по выручке.",
    meta: "1–2 недели"
  },
  {
    n: "02",
    label: "Стратегия",
    title: "Собираем целевой маршрут",
    d: "Описываем будущую систему: каналы, оффер, путь заявки, стадии маршрута, регламенты. Согласуем бюджет, KPI и горизонт планирования.",
    meta: "1 неделя"
  },
  {
    n: "03",
    label: "Сборка",
    title: "Достраиваем недостающие узлы",
    d: "Под посадочной, трафиком, CRM, квалификацией и дожимом работают четыре команды параллельно. Запуск — поэтапно, без длинного даунтайма.",
    meta: "4–8 недель"
  },
  {
    n: "04",
    label: "Запуск",
    title: "Включаем и стабилизируем",
    d: "Первые 4 недели — режим наблюдения. Чиним то, что вскрылось на реальных заявках. Передаём панель управления вашей команде.",
    meta: "4 недели"
  },
  {
    n: "05",
    label: "Оптимизация",
    title: "Спринт-цикл улучшений",
    d: "Раз в две недели — точечный апгрейд самой узкой точки маршрута. Без переделок, без «давайте всё перерисуем».",
    meta: "непрерывно"
  }
] as const;

export function ProcessSection() {
  return (
    <SectionFrame bg="#080C12" fadeTo="#05070A" style={{ minHeight: 880 }}>
      <DdContainer className="py-24">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[760px] flex-col gap-[18px]">
            <KickerLine>Процесс · § 07</KickerLine>
            <DdH2>
              Как мы работаем —
              <br />
              в пять шагов.
            </DdH2>
          </div>
          <SectionIndex n={7} />
        </div>

        <div className="relative flex flex-col">
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-8 left-[38px] top-8 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(184,121,75,.5) 0%, rgba(127,166,214,.18) 50%, rgba(148,163,184,0) 100%)"
            }}
          />
          {steps.map((step, index) => (
            <div key={step.n}>
              <div
                className="grid items-start gap-8 py-8"
                style={{ gridTemplateColumns: "minmax(0, 88px) minmax(0, 220px) 1fr minmax(0, 140px)" }}
              >
                <div className="pt-1.5 font-mono text-sm font-semibold tracking-[0.08em] text-[var(--dd-text-muted)]">
                  {step.n}
                </div>
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-copper)]">
                    {step.label}
                  </span>
                  <DdLabel className="font-normal normal-case tracking-normal">{step.meta}</DdLabel>
                </div>
                <div className="flex max-w-[640px] flex-col gap-3">
                  <h3 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--dd-text-primary)]">
                    {step.title}
                  </h3>
                  <p className="max-w-[580px] text-[15px] leading-[1.6] text-[var(--dd-text-secondary)]">{step.d}</p>
                </div>
                <div className="flex items-start justify-end gap-2 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                    этап {index + 1} / {steps.length}
                  </span>
                  <span
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--dd-action-steel-blue)] opacity-70"
                    aria-hidden
                  />
                </div>
              </div>
              {index < steps.length - 1 ? <hr className="border-0 border-t border-[var(--dd-border-steel)]" /> : null}
            </div>
          ))}
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
