import styles from "@/components/sections/hero-section.module.css";

const flowSteps = ["Трафик", "Сайт", "AI-квалификация", "Заявка", "Обработка"] as const;

const routeNodes = [
  { id: "traffic", label: "Трафик", x: 72, y: 300, active: false },
  { id: "site", label: "Сайт", x: 168, y: 210, active: false },
  { id: "ai", label: "AI", x: 280, y: 148, active: false },
  { id: "lead", label: "Заявка", x: 392, y: 210, active: true },
  { id: "process", label: "Обработка", x: 488, y: 300, active: false }
] as const;

function AcquisitionSystemVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.systemStage} ${className}`} aria-hidden>
      <div className="relative aspect-[4/3] w-full min-h-[280px] md:min-h-[360px]">
        <svg
          viewBox="0 0 560 380"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Маршрут привлечения: от трафика до обработки заявки"
        >
          <defs>
            <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(95,142,216,0.05)" />
              <stop offset="50%" stopColor="rgba(95,142,216,0.18)" />
              <stop offset="100%" stopColor="rgba(184,121,75,0.08)" />
            </linearGradient>
            <linearGradient id="pathStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(95,142,216,0.25)" />
              <stop offset="45%" stopColor="rgba(95,142,216,0.65)" />
              <stop offset="100%" stopColor="rgba(95,142,216,0.3)" />
            </linearGradient>
            <radialGradient id="nodeActive" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(95,142,216,0.55)" />
              <stop offset="100%" stopColor="rgba(95,142,216,0)" />
            </radialGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <ellipse cx="280" cy="210" rx="220" ry="118" stroke="rgba(95,142,216,0.08)" strokeWidth="1" />
          <ellipse cx="280" cy="210" rx="168" ry="88" stroke="rgba(95,142,216,0.06)" strokeWidth="1" />
          <rect x="24" y="24" width="512" height="332" rx="16" fill="url(#routeGlow)" opacity="0.45" />

          <path
            d="M 72 300 C 110 240, 130 220, 168 210 S 230 160, 280 148 S 350 160, 392 210 S 450 240, 488 300"
            stroke="url(#pathStroke)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 72 300 C 110 240, 130 220, 168 210 S 230 160, 280 148 S 350 160, 392 210"
            stroke="rgba(95,142,216,0.85)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 6"
            opacity="0.55"
          />

          {routeNodes.map((node) => (
            <g key={node.id}>
              {node.active ? (
                <>
                  <circle cx={node.x} cy={node.y} r="36" fill="url(#nodeActive)" />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="14"
                    fill="rgba(95,142,216,0.15)"
                    stroke="rgba(95,142,216,0.55)"
                    strokeWidth="1"
                    filter="url(#softGlow)"
                  />
                  <circle cx={node.x} cy={node.y} r="5" fill="#5F8ED8" />
                </>
              ) : (
                <>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="10"
                    fill="rgba(8,12,18,0.9)"
                    stroke="rgba(148,163,184,0.28)"
                    strokeWidth="1"
                  />
                  <circle cx={node.x} cy={node.y} r="3" fill="rgba(148,163,184,0.45)" />
                </>
              )}
              <text
                x={node.x}
                y={node.y + 28}
                textAnchor="middle"
                fill={node.active ? "#A8C4E8" : "#7F8B9C"}
                fontSize="11"
                fontFamily="ui-monospace, monospace"
                letterSpacing="0.08em"
              >
                {node.label.toUpperCase()}
              </text>
            </g>
          ))}

          <text x="32" y="48" fill="#7F8B9C" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.14em">
            ACQUISITION ROUTE · LIVE
          </text>
          <text x="32" y="64" fill="#5F8ED8" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">
            MANAGED SYSTEM LAYER
          </text>
        </svg>
      </div>
    </div>
  );
}

function FlowStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-1 gap-y-2 ${className}`}
      aria-label="Маршрут: Трафик, Сайт, AI-квалификация, Заявка, Обработка"
    >
      {flowSteps.map((label, index) => {
        const isActive = label === "Заявка";
        return (
          <span key={label} className="inline-flex items-center">
            <span className="inline-flex items-center gap-2">
              <span
                className="block h-2 w-2 shrink-0 rounded-full"
                style={
                  isActive
                    ? { background: "#5F8ED8", boxShadow: "0 0 0 3px rgba(95,142,216,0.22)" }
                    : { background: "transparent", border: "1.5px solid rgba(148,163,184,0.28)" }
                }
                aria-hidden
              />
              <span className={`${styles.flowChip} ${isActive ? styles.flowChipActive : ""}`}>{label}</span>
            </span>
            {index < flowSteps.length - 1 ? (
              <span className="mx-2 block h-px w-4 shrink-0 md:w-6" style={{ background: "rgba(95,142,216,0.35)" }} aria-hidden />
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className={`${styles.heroSection} relative min-h-[min(92vh,820px)] overflow-hidden font-[family-name:var(--font-onest),Onest,sans-serif] md:min-h-[min(100vh,920px)]`}
    >
      <div className={`${styles.heroGridNoise} pointer-events-none absolute inset-0 z-0`} aria-hidden />

      <div className="relative z-[2] mx-auto flex max-w-[1360px] flex-col justify-center gap-10 px-6 py-14 md:min-h-[min(100vh,920px)] md:grid md:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] md:items-center md:gap-12 md:px-[60px] md:py-20">
        <div className="flex flex-col gap-6 md:gap-7">
          <p
            className={`${styles.fadeUp} ${styles.delay0} m-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B8794B]`}
          >
            Делаем Диджитал · сайты, заявки, AI-интеграции
          </p>

          <h1 className={`${styles.fadeUp} ${styles.delay1} m-0 max-w-[600px]`}>
            <span className="block text-[clamp(28px,5.2vw,38px)] font-bold leading-[1.12] tracking-[-0.03em] text-[#C8D0DC]">
              Собираем для бизнеса
            </span>
            <span className="mt-1 block text-[clamp(36px,6.8vw,58px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#5F8ED8]">
              управляемую систему
            </span>
            <span className="mt-1 block text-[clamp(32px,5.8vw,48px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#F5F7FB]">
              привлечения клиентов
            </span>
          </h1>

          <p
            className={`${styles.fadeUp} ${styles.delay2} m-0 max-w-[520px] text-[15px] font-normal leading-[1.7] text-[#9AA6B5] md:text-[16px]`}
          >
            Соединяем сайт, оффер, заявки, Telegram/CRM, AI-квалификацию и аналитику в понятный маршрут от первого
            касания до обращения.
          </p>

          <div className={`${styles.fadeUp} ${styles.delay3} flex flex-wrap items-center gap-3`}>
            <a
              href="#contacts"
              className={`${styles.primaryBtn} inline-flex items-center justify-center rounded-[10px] bg-[#B8794B] px-7 py-3.5 text-[15px] font-bold text-[#F5F7FB] no-underline`}
              data-analytics-event="cta_primary_click"
              data-analytics-label="hero_primary"
              data-analytics-value="#contacts"
            >
              Разбор системы
            </a>
            <a
              href="#build"
              className={`${styles.secondaryBtn} inline-flex items-center justify-center rounded-[10px] border border-[rgba(184,121,75,0.45)] bg-transparent px-6 py-3.5 text-[15px] font-semibold text-[#B8794B] no-underline`}
              data-analytics-event="cta_secondary_click"
              data-analytics-label="hero_secondary_how_it_works"
              data-analytics-value="#build"
            >
              Как это работает
            </a>
          </div>

          <FlowStrip className={`${styles.fadeUp} ${styles.delay4} hidden md:flex`} />
        </div>

        <div className={`${styles.fadeUp} ${styles.delay5} w-full md:justify-self-end`}>
          <AcquisitionSystemVisual className="hidden md:block" />
          <div className={`${styles.mobileRail} p-4 md:hidden`}>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#5F8ED8]">Маршрут системы</p>
            <FlowStrip />
          </div>
        </div>
      </div>
    </section>
  );
}
