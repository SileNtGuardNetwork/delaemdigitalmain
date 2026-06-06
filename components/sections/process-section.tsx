import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  PhaseBand,
  PrimaryBtn,
  ProcessStepCard,
  SecondaryBtn,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const phases = [
  {
    label: "Стратегия",
    steps: [
      {
        title: "Разбор системы",
        description:
          "Определяем, что уже есть, где теряются заявки и с какого узла нужно начинать."
      },
      {
        title: "Стратегия и оффер",
        description:
          "Фиксируем, кому продаём, что обещаем и почему клиент должен выбрать именно вас."
      }
    ]
  },
  {
    label: "Сборка",
    steps: [
      {
        title: "Структура и copy",
        description: "Собираем маршрут сайта: от первого экрана до заявки."
      },
      {
        title: "Дизайн и сборка",
        description:
          "Создаём интерфейс, который выглядит современно, быстро работает и ведёт пользователя к действию."
      }
    ]
  },
  {
    label: "Интеграции",
    steps: [
      {
        title: "Интеграции",
        description:
          "Связываем сайт с каналами, формами, Telegram, AI-аудитом и обработкой заявок."
      }
    ]
  },
  {
    label: "Измерение",
    steps: [
      {
        title: "Аналитика",
        description:
          "Настраиваем приборную панель системы: цели, события, UTM и ключевые действия."
      },
      {
        title: "Traffic-ready Gate",
        description:
          "Проверяем, готова ли система принимать поток людей без утечки заявок."
      }
    ]
  },
  {
    label: "Улучшение",
    steps: [
      {
        title: "Трафик",
        description: "Направляем рекламный поток не на страницу, а в подготовленную систему."
      },
      {
        title: "Улучшения",
        description: "После запуска система развивается по данным."
      }
    ]
  }
] as const;

const phaseRail = ["Стратегия", "Сборка", "Интеграции", "Измерение", "Улучшение"] as const;

const phasesIndexed = (() => {
  let index = 0;
  return phases.map((phase) => ({
    label: phase.label,
    steps: phase.steps.map((step) => {
      index += 1;
      return { ...step, index };
    })
  }));
})();

export function ProcessSection() {
  return (
    <SectionFrame bg="#080C12" fadeTo="#05070A" className="min-h-0 md:min-h-[900px]">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex max-w-[840px] flex-col gap-5">
            <KickerLine>Процесс сборки · § 07</KickerLine>
            <DdH2>
              От разрозненного digital — к системе, которая готова принимать{" "}
              <span className="text-[var(--dd-diagnostic-blue)]">трафик и заявки</span>.
            </DdH2>
            <DdSub className="max-w-[640px]">
              ClientFlow System собирается по этапам: сначала диагностика и стратегия, затем сайт, интеграции,
              аналитика, трафик и цикл улучшений.
            </DdSub>
          </div>
          <SectionIndex n={7} />
        </div>

        <div
          className="mb-10 hidden flex-wrap items-center gap-2 rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-cool)] p-4 xl:flex"
          style={{ background: "rgba(14,22,34,.4)" }}
          aria-label="Фазы производственного конвейера"
        >
          {phaseRail.map((phase, index) => (
            <span key={phase} className="inline-flex items-center gap-2">
              <span className="text-[12px] font-semibold tracking-[0.04em] text-[var(--dd-text-primary)]">
                {phase}
              </span>
              {index < phaseRail.length - 1 ? (
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  className="text-[rgba(95,142,216,.45)]"
                  aria-hidden
                >
                  <path
                    d="M0 5h10M7 1.5 12 5l-5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {phasesIndexed.map((phase) => {
            const gridClass =
              phase.steps.length === 1
                ? "grid grid-cols-1"
                : "grid grid-cols-1 gap-4 sm:grid-cols-2";

            return (
              <PhaseBand key={phase.label} label={phase.label}>
                <div className={gridClass}>
                  {phase.steps.map((step) => (
                    <ProcessStepCard
                      key={step.title}
                      index={step.index}
                      title={step.title}
                      description={step.description}
                    />
                  ))}
                </div>
              </PhaseBand>
            );
          })}
        </div>

        <blockquote
          className="mt-10 rounded-[var(--dd-radius-md)] border-l-2 px-5 py-5 md:mt-12 md:px-7"
          style={{
            borderColor: "var(--dd-diagnostic-blue)",
            background: "rgba(14,22,34,.45)"
          }}
        >
          <p className="max-w-[960px] text-[15px] font-medium leading-[1.65] text-[var(--dd-text-primary)] md:text-base">
            ClientFlow System не заканчивается публикацией сайта. Запуск — это начало измеримого маршрута, где видно,
            что работает, где теряется клиент и какой элемент нужно усилить дальше.
          </p>
        </blockquote>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryBtn href="#contacts" className="px-6 py-3 text-[14px]">
            Начать с Разбора системы
          </PrimaryBtn>
          <SecondaryBtn href="#audit" className="px-6 py-3 text-[14px]">
            Пройти ClientFlow Аудит
          </SecondaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
