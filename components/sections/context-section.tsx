import {
  DdEyebrow,
  DdH2,
  DdH3,
  DdSub,
  FlagshipContainer,
  FlowPath,
  KickerLine,
  SectionFrame,
  SectionIndex,
  SteelCheckIcon
} from "@/components/sections/dd-ui";

const fragmentedTools = ["Сайт", "Реклама", "Telegram", "CRM", "Контент", "AI"] as const;

const flowSteps = ["Внимание", "Доверие", "Заявка", "Обработка", "Аналитика", "Улучшение"] as const;

const fragmentedNotes = [
  "Каналы запускаются отдельно — без общего маршрута",
  "Между инструментами нет описанных стыков",
  "Клиент теряется между касаниями"
] as const;

const connectedNotes = [
  "Один маршрут от первого касания до заявки",
  "Каждый стык описан и измеряем",
  "Инструменты работают как система, а не набор"
] as const;

function FragmentedToolCard({ label, offset }: { label: string; offset?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-[var(--dd-radius-sm)] border border-dashed px-4 py-3.5 text-[13px] font-medium text-[var(--dd-text-secondary)] ${offset ? "translate-x-1" : ""}`}
      style={{
        borderColor: "rgba(148,163,184,.22)",
        background: "rgba(8,12,18,.5)"
      }}
    >
      {label}
    </div>
  );
}

export function ContextSection() {
  return (
    <SectionFrame id="context" bg="#080C12" fadeTo="#080C12" className="min-h-[900px]">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[880px] flex-col gap-5">
            <KickerLine>Контекст рынка · § 02</KickerLine>
            <DdH2 className="max-w-[900px]">
              Digital-инструменты уже есть.
              <br />
              <span className="font-bold text-[var(--dd-text-secondary)]">Связанного пути клиента —</span>{" "}
              <span className="text-[var(--dd-diagnostic-blue)]">часто нет</span>.
            </DdH2>
            <DdSub className="max-w-[600px]">
              Бизнес запускает сайт, рекламу, Telegram, CRM, контент и AI. Но если элементы не соединены в единый
              маршрут, клиент проходит между ними с потерями — и не доходит до заявки.
            </DdSub>
          </div>
          <SectionIndex n={2} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Fragmented — first on mobile */}
          <div
            className="flex flex-col gap-6 rounded-[var(--dd-radius-lg)] border border-[var(--dd-border-steel)] p-6 md:p-8"
            style={{ background: "rgba(8,12,18,.55)" }}
          >
            <div className="flex items-center justify-between gap-4">
              <DdEyebrow tone="muted">Как обычно</DdEyebrow>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                disconnected
              </span>
            </div>

            <DdH3>Разрозненный digital</DdH3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {fragmentedTools.map((tool, index) => (
                <FragmentedToolCard key={tool} label={tool} offset={index % 2 === 1} />
              ))}
            </div>

            <p className="text-[14px] leading-[1.65] text-[var(--dd-text-secondary)]">
              Каждый инструмент живёт своей жизнью: свой подрядчик, своя метрика, свой отчёт. Между ними — разрывы, в
              которые утекает внимание клиента.
            </p>

            <ul className="flex flex-col gap-2.5">
              {fragmentedNotes.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] text-[var(--dd-text-secondary)]">
                  <span
                    className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--dd-text-muted)] opacity-70"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ClientFlow — second on mobile */}
          <div
            className="flex flex-col gap-6 rounded-[var(--dd-radius-lg)] border p-6 md:p-8"
            style={{
              borderColor: "rgba(113,151,198,.28)",
              background: "linear-gradient(165deg, rgba(14,22,34,.72) 0%, rgba(8,12,18,.65) 100%)"
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <DdEyebrow tone="steel">ClientFlow-подход</DdEyebrow>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                linked route
              </span>
            </div>

            <DdH3>Связанный маршрут</DdH3>

            <div
              className="rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-cool)] p-4 md:p-5"
              style={{ background: "rgba(8,12,18,.45)" }}
            >
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                Маршрут клиента
              </p>
              <FlowPath steps={flowSteps} activeIndex={5} variant="blue" />
            </div>

            <p className="text-[14px] leading-[1.65] text-[var(--dd-text-secondary)]">
              Те же инструменты — сайт, реклама, Telegram, CRM, контент, AI — но собраны в последовательность: от
              внимания до заявки, обработки и улучшения маршрута.
            </p>

            <ul className="flex flex-col gap-2.5">
              {connectedNotes.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] text-[var(--dd-text-secondary)]">
                  <SteelCheckIcon className="mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote
          className="mt-8 rounded-[var(--dd-radius-md)] border-l-2 px-5 py-5 md:mt-10 md:px-7"
          style={{
            borderColor: "var(--dd-diagnostic-blue)",
            background: "rgba(14,22,34,.45)"
          }}
        >
          <p className="max-w-[960px] text-[15px] font-medium leading-[1.65] text-[var(--dd-text-primary)] md:text-base">
            Проблема не в том, что бизнесу нужен ещё один инструмент. Проблема в том, что уже существующие инструменты
            часто не собраны в систему.
          </p>
        </blockquote>
      </FlagshipContainer>
    </SectionFrame>
  );
}
