const systemSteps = [
  {
    num: "01",
    title: "Внимание",
    description: "Реклама, контент, охват — поводы заметить компанию там, где есть аудитория.",
    label: "Контекст · Таргет · SEO",
    dot: "success" as const,
    arrow: "right" as const
  },
  {
    num: "02",
    title: "Доверие",
    description: "Сайт, прогрев, кейсы — доказательство, что вы решаете задачу клиента.",
    label: "Посадочная · Telegram · Кейсы",
    dot: "success" as const,
    arrow: "right" as const
  },
  {
    num: "03",
    title: "Заявка",
    description: "Оффер, форма, лид-магнит — момент, когда интерес превращается в обращение.",
    label: "Оффер · Форма · Лид-магнит",
    dot: "success" as const,
    arrow: "right" as const
  },
  {
    num: "04",
    title: "Обработка",
    description: "Менеджер, скрипт, скорость ответа — фиксируем обращение, не теряем контакт.",
    label: "CRM · Регламент · Скрипт",
    dot: "success" as const,
    arrow: "left" as const
  },
  {
    num: "05",
    title: "Аналитика",
    description: "Сквозной отчёт по каналу и источнику — видно, где маршрут работает.",
    label: "CAC · LTV · Сквозной отчёт",
    dot: "success" as const,
    arrow: "left" as const
  },
  {
    num: "06",
    title: "Улучшение",
    description: "Спринт-цикл: раз в две недели чиним самую узкую точку маршрута.",
    label: "AB-тесты · Спринты · Гипотезы",
    dot: "copper" as const,
    arrow: null
  }
] as const;

function RowArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden
      className={`pointer-events-none absolute top-1/2 z-10 -translate-y-1/2 text-[rgba(127,166,214,0.5)] ${
        direction === "right" ? "-right-4" : "-left-4 rotate-180"
      }`}
    >
      <path d="M0 5H12M12 5L8 1M12 5L8 9" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function SystemSection() {
  return (
    <section
      id="system"
      className="relative overflow-hidden bg-[var(--dd-canvas-obsidian)] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse 500px 300px at 50% -5%, rgba(184,121,75,0.04) 0%, transparent 70%)"
        }}
        aria-hidden
      />

      <div className="relative mb-12 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-[22px] bg-[var(--dd-action-copper)]" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--dd-action-copper)]">
              Новый стандарт
            </span>
          </div>
          <h2 className="text-[clamp(32px,3.5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--dd-text-primary)]">
            Новый стандарт digital —
            <br />
            проектировать не страницы,
            <br />
            а <span className="text-[#5f8ed8]">путь клиента.</span>
          </h2>
        </div>
        <p className="text-[17px] leading-[1.6] text-[var(--dd-text-secondary)]">
          Сайт, реклама, Telegram, AI и аналитика — единая система. Каждый элемент отвечает за конкретный шаг клиента
          к заявке.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[20px] border border-[var(--dd-border-cool)] bg-[var(--dd-surface-control)]">
        <div className="flex items-center justify-between border-b border-[var(--dd-border-cool)] bg-[rgba(8,12,18,0.5)] px-[22px] py-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#6fbf91]" aria-hidden />
            <span className="text-xs font-semibold text-[var(--dd-action-steel-blue)]">ClientFlow System · LIVE</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--dd-text-muted)]">6 этапов · один маршрут</span>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
          {systemSteps.slice(0, 3).map((step) => (
            <article
              key={step.num}
              className="relative flex min-h-[180px] flex-col gap-3 rounded-xl border border-[var(--dd-border-cool)] bg-[rgba(8,12,18,0.66)] p-5 transition-colors duration-200 hover:border-[rgba(113,151,198,0.35)]"
            >
              {step.arrow ? <RowArrow direction={step.arrow} /> : null}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase text-[var(--dd-action-steel-blue)]">
                  {step.num}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    step.dot === "copper" ? "bg-[var(--dd-action-copper)]" : "bg-[#6fbf91]"
                  }`}
                  aria-hidden
                />
              </div>
              <h3 className="text-lg font-bold text-[var(--dd-text-primary)]">{step.title}</h3>
              <p className="text-[13px] leading-[1.55] text-[var(--dd-text-secondary)]">{step.description}</p>
              <p className="mt-auto border-t border-[rgba(148,163,184,0.08)] pt-2.5 text-[11px] text-[var(--dd-text-muted)]">
                {step.label}
              </p>
            </article>
          ))}
        </div>

        <div className="flex items-center gap-3 px-6 py-2 text-[11px] uppercase text-[var(--dd-text-muted)]">
          <span className="h-px flex-1 bg-[var(--dd-border-cool)]" aria-hidden />
          ↩ LOOP · OPT → ATN
          <span className="h-px flex-1 bg-[var(--dd-border-cool)]" aria-hidden />
        </div>

        <div className="grid grid-cols-1 gap-4 px-6 pb-6 md:grid-cols-3">
          {systemSteps.slice(3).map((step) => (
            <article
              key={step.num}
              className="relative flex min-h-[180px] flex-col gap-3 rounded-xl border border-[var(--dd-border-cool)] bg-[rgba(8,12,18,0.66)] p-5 transition-colors duration-200 hover:border-[rgba(113,151,198,0.35)]"
            >
              {step.arrow ? <RowArrow direction={step.arrow} /> : null}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase text-[var(--dd-action-steel-blue)]">
                  {step.num}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    step.dot === "copper" ? "bg-[var(--dd-action-copper)]" : "bg-[#6fbf91]"
                  }`}
                  aria-hidden
                />
              </div>
              <h3 className="text-lg font-bold text-[var(--dd-text-primary)]">{step.title}</h3>
              <p className="text-[13px] leading-[1.55] text-[var(--dd-text-secondary)]">{step.description}</p>
              <p className="mt-auto border-t border-[rgba(148,163,184,0.08)] pt-2.5 text-[11px] text-[var(--dd-text-muted)]">
                {step.label}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div
        className="mt-7 rounded-r-xl border-l-2 border-[var(--dd-action-copper)] bg-[rgba(184,121,75,0.04)] px-6 py-5"
        style={{ borderRadius: "0 12px 12px 0" }}
      >
        <p className="text-base font-medium leading-[1.55] text-[var(--dd-text-primary)]">
          ClientFlow System строится вокруг этого маршрута. Не вокруг отдельных услуг, а{" "}
          <span className="text-[var(--dd-action-copper)]">вокруг движения клиента к заявке.</span>
        </p>
      </div>
    </section>
  );
}
