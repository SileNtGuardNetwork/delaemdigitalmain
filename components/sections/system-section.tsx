import {
  DdContainer,
  DdH2,
  DdSub,
  KickerLine,
  PingDot,
  RimLight,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

type SysNodeData = {
  i: number;
  k: string;
  t: string;
  d: string;
  tools: string;
  s: "live" | "tune";
};

const nodes: SysNodeData[] = [
  {
    i: 1,
    k: "ATN",
    t: "Внимание",
    d: "Реклама, контент, охват — поводы заметить компанию там, где есть аудитория.",
    tools: "Контекст · Таргет · SEO · Контент",
    s: "live"
  },
  {
    i: 2,
    k: "TRU",
    t: "Доверие",
    d: "Посадочная, прогрев, кейсы — доказательство, что вы решаете задачу клиента.",
    tools: "Посадочная · Telegram · Кейсы",
    s: "live"
  },
  {
    i: 3,
    k: "REQ",
    t: "Заявка",
    d: "Оффер, форма, лид-магнит — момент, в который интерес превращается в обращение.",
    tools: "Оффер · Форма · Лид-магнит",
    s: "live"
  },
  {
    i: 4,
    k: "PRC",
    t: "Обработка",
    d: "Менеджер, скрипт, скорость ответа — фиксируем обращение, не теряем тёплый контакт.",
    tools: "CRM · Регламент · Скрипт",
    s: "live"
  },
  {
    i: 5,
    k: "BIQ",
    t: "Аналитика",
    d: "Сквозной отчёт по каналу, источнику, менеджеру — видно, где маршрут работает, а где нет.",
    tools: "CAC · LTV · Сквозной отчёт",
    s: "live"
  },
  {
    i: 6,
    k: "OPT",
    t: "Улучшение",
    d: "Спринт-цикл оптимизации: раз в две недели чиним самую узкую точку маршрута.",
    tools: "AB-тесты · Спринты · Гипотезы",
    s: "tune"
  }
];

function SysNode({ n, arrow, reverse }: { n: SysNodeData; arrow?: boolean; reverse?: boolean }) {
  const isTune = n.s === "tune";

  return (
    <div className="relative">
      <div
        className="flex min-h-[200px] flex-col gap-3 p-5"
        style={{
          background: "rgba(8,12,18,.66)",
          border: "1px solid var(--dd-border-cool)",
          borderRadius: "var(--dd-radius-sm)"
        }}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-steel-blue)]">
            {String(n.i).padStart(2, "0")} · {n.k}
          </span>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{
              background: isTune ? "var(--dd-action-copper)" : "var(--dd-success)",
              boxShadow: isTune ? "0 0 0 4px rgba(184,121,75,.18)" : "0 0 0 4px rgba(111,191,145,.16)"
            }}
            aria-hidden
          />
        </div>
        <div className="text-xl font-bold tracking-[-0.02em] text-[var(--dd-text-primary)]">{n.t}</div>
        <p className="text-[13px] leading-[1.55] text-[var(--dd-text-secondary)]">{n.d}</p>
        <p className="mt-auto border-t border-[rgba(148,163,184,0.08)] pt-2.5 font-mono text-[11px] tracking-[0.04em] text-[var(--dd-text-muted)]">
          {n.tools}
        </p>
      </div>
      {arrow ? (
        <div
          className="absolute top-1/2 z-[2] flex h-[18px] w-[18px] -translate-y-1/2 items-center justify-center text-[rgba(127,166,214,.55)]"
          style={{ right: -16, transform: `translateY(-50%) ${reverse ? "rotate(180deg)" : ""}` }}
          aria-hidden
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path
              d="M0 5h12M8.5 1 13 5l-4.5 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
}

export function SystemSection() {
  return (
    <SectionFrame id="system" bg="#080C12" fadeTo="#080C12" className="min-h-[940px]">
      <RimLight style={{ left: "50%", top: -340, transform: "translateX(-50%)", opacity: 0.5 }} />

      <DdContainer className="relative py-24">
        <div className="mb-[18px] flex items-center justify-between">
          <KickerLine>Новый стандарт · § 03</KickerLine>
          <SectionIndex n={3} />
        </div>

        <div className="mb-12 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <DdH2 className="max-w-[760px]">
            Новый стандарт digital —
            <br />
            проектировать не страницы,
            <br />
            а <span className="text-[var(--dd-diagnostic-blue)]">путь клиента</span>.
          </DdH2>
          <DdSub className="max-w-[460px]">
            Сайт, реклама, Telegram, AI и аналитика должны работать как единая система: привлечь внимание,
            создать доверие, довести до заявки, зафиксировать обращение и показать, что улучшать дальше.
          </DdSub>
        </div>

        <div
          className="relative rounded-[var(--dd-radius-lg)] border border-[var(--dd-border-cool)] p-7"
          style={{
            background: "var(--dd-surface-control)",
            boxShadow: "var(--dd-shadow-panel)"
          }}
        >
          <div className="mb-6 flex flex-col gap-4 border-b border-[var(--dd-border-cool)] pb-[18px] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2">
                <PingDot />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dd-text-secondary)]">
                  ClientFlow System · LIVE
                </span>
              </span>
              <span className="hidden h-3 w-px bg-[var(--dd-border-cool)] sm:block" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
                6 · stages
              </span>
              <span className="hidden h-3 w-px bg-[var(--dd-border-cool)] sm:block" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
                single · route
              </span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--dd-text-muted)]">
              latency 9m · uptime 99.4%
            </span>
          </div>

          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
            {nodes.slice(0, 3).map((node, index) => (
              <SysNode key={node.k} n={node} arrow={index < 2} />
            ))}
          </div>

          <div className="my-2.5 flex items-center gap-3 text-[11px] tracking-[0.14em] text-[var(--dd-text-muted)]">
            <div className="h-px flex-1" style={{ background: "rgba(113,151,198,.18)" }} aria-hidden />
            <span className="font-mono uppercase">↩ Loop · OPT → ATN</span>
            <div className="h-px flex-1" style={{ background: "rgba(113,151,198,.18)" }} aria-hidden />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {nodes.slice(3, 6).map((node, index, arr) => (
              <SysNode key={node.k} n={node} arrow={index < arr.length - 1} reverse />
            ))}
          </div>
        </div>

        <div
          className="mt-7 px-6 py-5"
          style={{
            borderLeft: "2px solid var(--dd-action-copper)",
            background: "rgba(184,121,75,.04)",
            borderRadius: "0 var(--dd-radius-sm) var(--dd-radius-sm) 0"
          }}
        >
          <p className="max-w-[900px] text-base font-medium leading-[1.55] tracking-[-0.005em] text-[var(--dd-text-primary)]">
            ClientFlow System строится вокруг этого маршрута. Не вокруг отдельных услуг, а{" "}
            <span className="text-[var(--dd-action-copper)]">вокруг движения клиента к заявке</span>.
          </p>
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
