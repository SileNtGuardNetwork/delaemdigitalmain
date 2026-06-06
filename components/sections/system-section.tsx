import {
  DdEyebrow,
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  RimLight,
  RouteStageCard,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const stages = [
  {
    title: "Внимание",
    description: "Реклама, контент, охват — поводы заметить компанию там, где есть аудитория.",
    tools: "Контекст · Таргет · SEO · Контент"
  },
  {
    title: "Доверие",
    description: "Посадочная, прогрев, кейсы — доказательство, что вы решаете задачу клиента.",
    tools: "Посадочная · Telegram · Кейсы"
  },
  {
    title: "Заявка",
    description: "Оффер, форма, лид-магнит — момент, в который интерес превращается в обращение.",
    tools: "Оффер · Форма · Лид-магнит"
  },
  {
    title: "Обработка",
    description: "Менеджер, скрипт, скорость ответа — фиксируем обращение, не теряем тёплый контакт.",
    tools: "CRM · Регламент · Скрипт"
  },
  {
    title: "Аналитика",
    description: "Сквозной отчёт по каналу, источнику, менеджеру — видно, где маршрут работает, а где нет.",
    tools: "CAC · LTV · Сквозной отчёт"
  },
  {
    title: "Улучшение",
    description: "Спринт-цикл оптимизации: раз в две недели чиним самую узкую точку маршрута.",
    tools: "AB-тесты · Спринты · Гипотезы"
  }
] as const;

function RouteConnector({ vertical }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex justify-start pl-[13px] lg:hidden" aria-hidden>
        <div className="h-6 w-px" style={{ background: "rgba(95,142,216,.35)" }} />
      </div>
    );
  }

  return (
    <div className="hidden items-center justify-center lg:flex" aria-hidden>
      <svg width="24" height="10" viewBox="0 0 24 10" fill="none" className="text-[rgba(95,142,216,.45)]">
        <path
          d="M0 5h18M14 1.5 20 5l-6 3.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function SystemSection() {
  return (
    <SectionFrame id="system" bg="#080C12" fadeTo="#080C12" className="min-h-[940px]">
      <RimLight style={{ left: "50%", top: -340, transform: "translateX(-50%)", opacity: 0.4 }} />

      <FlagshipContainer className="relative py-20 md:py-24">
        <div className="mb-6 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <KickerLine>ClientFlow System · § 03</KickerLine>
          <SectionIndex n={3} />
        </div>

        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <DdH2 className="max-w-[780px]">
            Новый стандарт digital —
            <br />
            проектировать не страницы,
            <br />
            а <span className="text-[var(--dd-diagnostic-blue)]">путь клиента</span>.
          </DdH2>
          <DdSub className="max-w-[480px]">
            Сайт, реклама, Telegram, AI и аналитика должны работать как единая система: привлечь внимание, создать
            доверие, довести до заявки, зафиксировать обращение и показать, что улучшать дальше.
          </DdSub>
        </div>

        <div
          className="rounded-[var(--dd-radius-lg)] border border-[var(--dd-border-cool)] p-5 md:p-7"
          style={{ background: "rgba(8,12,18,.5)" }}
        >
          <div className="mb-6 flex flex-col gap-3 border-b border-[var(--dd-border-cool)] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <DdEyebrow tone="steel">Архитектура маршрута</DdEyebrow>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
                6 этапов · единая система
              </span>
            </div>
            <p className="max-w-[320px] text-[12px] leading-[1.5] text-[var(--dd-text-muted)]">
              Не сайт и не рекламная кампания — связанная ClientFlow System.
            </p>
          </div>

          {/* Desktop: horizontal stepped route (2 rows of 3) */}
          <div className="hidden lg:block">
            <div className="flex items-stretch gap-2">
              {stages.slice(0, 3).map((stage, index) => (
                <div key={stage.title} className="flex min-w-0 flex-1 items-stretch">
                  <RouteStageCard
                    index={index + 1}
                    title={stage.title}
                    description={stage.description}
                    tools={stage.tools}
                  />
                  {index < 2 ? <RouteConnector /> : null}
                </div>
              ))}
            </div>

            <div className="my-4 flex items-center gap-3 px-2" aria-hidden>
              <div className="h-px flex-1" style={{ background: "rgba(95,142,216,.2)" }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                цикл улучшения
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(95,142,216,.2)" }} />
            </div>

            <div className="flex items-stretch gap-2">
              {stages.slice(3, 6).map((stage, index) => (
                <div key={stage.title} className="flex min-w-0 flex-1 items-stretch">
                  <RouteStageCard
                    index={index + 4}
                    title={stage.title}
                    description={stage.description}
                    tools={stage.tools}
                  />
                  {index < 2 ? <RouteConnector /> : null}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="flex flex-col lg:hidden">
            {stages.map((stage, index) => (
              <div key={stage.title}>
                <RouteStageCard
                  index={index + 1}
                  title={stage.title}
                  description={stage.description}
                  tools={stage.tools}
                />
                {index < stages.length - 1 ? <RouteConnector vertical /> : null}
              </div>
            ))}
          </div>
        </div>

        <p
          className="mt-8 max-w-[920px] border-l-2 py-1 pl-5 text-[15px] font-medium leading-[1.6] text-[var(--dd-text-primary)] md:mt-10 md:text-base"
          style={{ borderColor: "var(--dd-action-steel-blue)" }}
        >
          ClientFlow System строится вокруг этого маршрута — не вокруг отдельных услуг, а вокруг движения клиента от
          первого касания до заявки и дальше.
        </p>
      </FlagshipContainer>
    </SectionFrame>
  );
}
