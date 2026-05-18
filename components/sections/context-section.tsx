import {
  CopperCheckIcon,
  DdContainer,
  DdH2,
  DdH3,
  DdLabel,
  DdSub,
  FlowPath,
  KickerLine,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const fragmentedTags = ["Сайт", "Реклама", "Telegram", "CRM", "Контент", "AI"] as const;

const fragmentedList = [
  "Стыки между каналами не описаны",
  "Никто не отвечает за результат целиком",
  "Заявка теряется на полпути"
] as const;

const connectedList = [
  "Каждый стык описан и измеряем",
  "Один ответственный за результат",
  "Клиент доходит до заявки — а не уходит к конкуренту"
] as const;

const flowSteps = ["Внимание", "Доверие", "Заявка", "Обработка", "Аналитика", "Улучшение"] as const;

function TagArrow() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden className="shrink-0 text-[var(--dd-action-copper)] opacity-70">
      <path
        d="M0 4h8M5.5 1 9 4l-3.5 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContextSection() {
  return (
    <SectionFrame id="context" bg="#080C12" fadeTo="#080C12" className="min-h-[900px]">
      <DdContainer className="py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[880px] flex-col gap-[22px]">
            <KickerLine>Контекст рынка · § 02</KickerLine>
            <DdH2 className="max-w-[900px]">
              Digital-инструменты уже есть.
              <br />
              <span className="font-bold text-[var(--dd-text-secondary)]">Связанного пути клиента —</span>{" "}
              <span className="text-[var(--dd-diagnostic-blue)]">часто нет</span>.
            </DdH2>
            <DdSub className="max-w-[560px]">
              Бизнес запускает сайт, рекламу, Telegram, CRM, контент и нейросети. Но если эти элементы не соединены в
              единый маршрут, клиент проходит между ними с потерями: увидел рекламу, не понял ценность, не оставил
              заявку, написал в мессенджер, не получил вовремя ответ — и ушёл.
            </DdSub>
          </div>
          <SectionIndex n={2} />
        </div>

        <div className="mt-2 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          <div
            className="flex min-h-[360px] flex-col gap-[22px] p-8"
            style={{
              background: "rgba(8,12,18,.55)",
              border: "1px solid var(--dd-border-steel)",
              borderRadius: "var(--dd-radius-lg)"
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="inline-flex items-center gap-2 rounded-full px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-danger)]"
                style={{
                  background: "rgba(214,106,106,.08)",
                  border: "1px solid rgba(214,106,106,.28)"
                }}
              >
                <span className="h-[5px] w-[5px] rounded-full bg-[var(--dd-danger)]" aria-hidden />
                Как обычно
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                config · disconnected
              </span>
            </div>

            <DdH3>Разрозненный digital</DdH3>

            <div className="-mt-1 flex flex-wrap gap-2">
              {fragmentedTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-[7px] text-xs font-medium text-[var(--dd-text-secondary)]"
                  style={{
                    border: "1px dashed rgba(214,106,106,.3)",
                    background: "rgba(8,12,18,.6)"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-auto text-sm leading-[1.65] text-[var(--dd-text-secondary)]">
              Каждый инструмент запущен отдельно: свой подрядчик, своя метрика, свой отчёт. Между ними — пустота, в
              которую утекает внимание клиента.
            </p>

            <ul className="flex flex-col gap-2.5">
              {fragmentedList.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] text-[var(--dd-text-secondary)]">
                  <span
                    className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--dd-danger)] opacity-85"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative flex min-h-[360px] flex-col gap-[22px] overflow-hidden p-8"
            style={{
              background: "linear-gradient(180deg, rgba(20,14,9,.55) 0%, rgba(14,22,34,.65) 100%)",
              border: "1px solid rgba(184,121,75,.42)",
              borderRadius: "var(--dd-radius-lg)",
              boxShadow: "0 22px 58px rgba(0,0,0,.32)"
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="inline-flex items-center gap-2 rounded-full px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-copper)]"
                style={{
                  background: "rgba(184,121,75,.1)",
                  border: "1px solid rgba(184,121,75,.4)"
                }}
              >
                <span className="h-[5px] w-[5px] rounded-full bg-[var(--dd-action-copper)]" aria-hidden />
                У нас
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                config · linked
              </span>
            </div>

            <DdH3>ClientFlow-подход</DdH3>

            <div className="flex flex-wrap items-center gap-1.5">
              {fragmentedTags.map((tag, index) => (
                <div key={tag} className="inline-flex items-center gap-1.5">
                  <span
                    className="rounded-full px-3 py-[7px] text-xs font-semibold text-[var(--dd-text-primary)]"
                    style={{
                      border: "1px solid rgba(184,121,75,.4)",
                      background: "rgba(184,121,75,.08)"
                    }}
                  >
                    {tag}
                  </span>
                  {index < fragmentedTags.length - 1 ? <TagArrow /> : null}
                </div>
              ))}
            </div>

            <p className="mt-auto text-sm leading-[1.65] text-[var(--dd-text-secondary)]">
              Те же инструменты, но собраны в маршрут: от первого касания до заявки и дальше к сделке. Между шагами —
              описанные регламенты и сквозная аналитика.
            </p>

            <ul className="flex flex-col gap-2.5">
              {connectedList.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] text-[var(--dd-text-secondary)]">
                  <CopperCheckIcon className="mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-9 flex flex-col gap-3.5 p-5 md:p-6"
          style={{
            border: "1px solid var(--dd-border-cool)",
            borderRadius: "var(--dd-radius-md)",
            background: "rgba(14,22,34,.55)"
          }}
        >
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <DdLabel className="tracking-[0.16em]">Связанный маршрут клиента</DdLabel>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
              6 stages · single route
            </span>
          </div>
          <FlowPath steps={flowSteps} activeIndex={1} />
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
