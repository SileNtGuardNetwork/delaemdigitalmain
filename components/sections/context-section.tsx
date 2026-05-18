const fragmentedTags = ["Сайт", "Реклама", "Telegram", "CRM", "Контент", "AI"] as const;
const connectedTags = ["Сайт", "Реклама", "Telegram", "CRM", "AI"] as const;

const fragmentedList = [
  "Стыки между каналами не описаны",
  "Никто не отвечает за результат целиком",
  "Заявка теряется на полпути"
] as const;

const connectedList = [
  "Каждый стык описан и измеряем",
  "Один ответственный за результат",
  "Клиент доходит до заявки, а не уходит к конкуренту"
] as const;

const flowSteps = ["Внимание", "Доверие", "Заявка", "Обработка", "Аналитика", "Улучшение"] as const;

function FlowArrow() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden className="shrink-0 opacity-70">
      <path d="M0 4H8M8 4L5 1M8 4L5 7" stroke="var(--dd-action-copper)" strokeWidth="1" />
    </svg>
  );
}

function CopperCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-0.5 shrink-0">
      <path
        d="M2.5 7.2L5.4 10.1L11.5 3.9"
        stroke="var(--dd-action-copper)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContextSection() {
  return (
    <section id="context" className="bg-[var(--dd-canvas-obsidian)] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]">
      <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-[22px] bg-[var(--dd-action-copper)]" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--dd-action-copper)]">
              Контекст рынка
            </span>
          </div>
          <h2 className="text-[clamp(32px,3.5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--dd-text-primary)]">
            Digital-инструменты уже есть.
            <br />
            Связанного пути клиента — <span className="text-[#5f8ed8]">нет.</span>
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.6] text-[var(--dd-text-secondary)]">
            Бизнес запускает сайт, рекламу, Telegram и CRM. Но без единого маршрута клиент теряется между ними — и
            уходит к конкуренту.
          </p>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="flex min-h-[320px] flex-col gap-5 rounded-[20px] border border-[var(--dd-border-steel)] bg-[rgba(8,12,18,0.55)] p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-[rgba(214,106,106,0.25)] bg-[rgba(214,106,106,0.08)] px-3 py-1 text-xs font-semibold text-[#d66a6a]">
              Как обычно
            </span>
            <span className="font-mono text-[11px] text-[var(--dd-text-muted)]">разрозненный digital</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {fragmentedTags.map((tag) => (
              <span
                key={tag}
                className="rounded-[20px] border border-dashed border-[rgba(214,106,106,0.25)] bg-[rgba(8,12,18,0.6)] px-3 py-1.5 text-xs text-[var(--dd-text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-auto text-sm leading-[1.6] text-[var(--dd-text-secondary)]">
            Каждый инструмент — отдельный подрядчик, отдельный отчёт. Между ними пустота, в которую утекает внимание
            клиента.
          </p>
          <ul className="flex flex-col gap-2.5">
            {fragmentedList.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--dd-text-secondary)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d66a6a]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article
          className="flex min-h-[320px] flex-col gap-5 rounded-[20px] border border-[rgba(184,121,75,0.42)] p-8 shadow-[0_22px_58px_rgba(0,0,0,0.32)]"
          style={{
            background: "linear-gradient(rgba(20,14,9,0.55), rgba(14,22,34,0.65))"
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-[rgba(184,121,75,0.4)] bg-[rgba(184,121,75,0.1)] px-3 py-1 text-xs font-semibold text-[var(--dd-action-copper)]">
              У нас
            </span>
            <span className="font-mono text-[11px] text-[var(--dd-text-muted)]">единый маршрут</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {connectedTags.map((tag, index) => (
              <span key={tag} className="inline-flex items-center gap-1.5">
                <span className="rounded-[20px] border border-[rgba(184,121,75,0.4)] bg-[rgba(184,121,75,0.08)] px-3 py-1.5 text-xs font-semibold text-[var(--dd-text-primary)]">
                  {tag}
                </span>
                {index < connectedTags.length - 1 ? <FlowArrow /> : null}
              </span>
            ))}
          </div>
          <p className="mt-auto text-sm leading-[1.6] text-[var(--dd-text-secondary)]">
            Те же инструменты, но в одном маршруте: от первого касания до заявки. Каждый стык описан. Один
            ответственный за результат.
          </p>
          <ul className="flex flex-col gap-2.5">
            {connectedList.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--dd-text-secondary)]">
                <CopperCheck />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-9 rounded-2xl border border-[var(--dd-border-cool)] bg-[rgba(14,22,34,0.55)] px-6 py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dd-action-copper)]">
            Связанный маршрут клиента
          </p>
          <span className="font-mono text-[11px] text-[var(--dd-text-muted)]">6 этапов · один путь</span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {flowSteps.map((step, index) => (
            <span key={step} className="inline-flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-2 text-sm ${
                  index < 2 ? "text-[var(--dd-text-primary)]" : "text-[var(--dd-text-muted)]"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index < 2 ? "bg-[var(--dd-action-copper)]" : "bg-[rgba(148,163,184,0.35)]"
                  }`}
                  aria-hidden
                />
                {step}
              </span>
              {index < flowSteps.length - 1 ? (
                <span className="h-px w-6 bg-[rgba(184,121,75,0.4)]" aria-hidden />
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
