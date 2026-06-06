import styles from "@/components/sections/hero-section.module.css";

const flowSteps = ["Трафик", "Сайт", "AI-квалификация", "Заявка", "Обработка"] as const;

const systemModules = [
  { label: "Сайт", detail: "Оффер · доверие · заявка", active: false },
  { label: "Заявка", detail: "Форма · квиз · захват", active: true },
  { label: "AI", detail: "Квалификация обращения", active: false },
  { label: "Telegram / CRM", detail: "Передача в продажи", active: false },
  { label: "Аналитика", detail: "Цели · события · цикл", active: false }
] as const;

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[min(100vh,900px)] overflow-hidden bg-[#05070A] font-[family-name:var(--font-onest),Onest,sans-serif] md:min-h-screen"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 75% 40%, rgba(95,142,216,0.06) 0%, transparent 70%)"
        }}
        aria-hidden
      />

      <div className="relative z-[2] mx-auto flex max-w-[1360px] flex-col justify-center gap-10 px-6 py-16 md:min-h-screen md:grid md:grid-cols-[1fr_1fr] md:items-center md:gap-14 md:px-[60px] md:py-24">
        {/* Left — copy, CTAs, flow strip */}
        <div className="flex flex-col gap-7 md:gap-8">
          <p
            className={`${styles.fadeUp} ${styles.delay0} m-0 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#B8794B]`}
          >
            Делаем Диджитал · сайты, заявки, AI-интеграции
          </p>

          <h1
            className={`${styles.fadeUp} ${styles.delay1} m-0 max-w-[620px] text-[clamp(30px,6.5vw,42px)] font-extrabold leading-[1.06] tracking-[-0.035em] md:text-[clamp(38px,3.6vw,54px)]`}
          >
            <span className="block text-[#F5F7FB]">Собираем для бизнеса</span>
            <span className="block text-[#5F8ED8]">управляемую систему</span>
            <span className="block text-[#F5F7FB]">привлечения клиентов</span>
          </h1>

          <p
            className={`${styles.fadeUp} ${styles.delay2} m-0 max-w-[540px] text-[15px] font-normal leading-[1.65] text-[#B8C1CE] md:text-base`}
          >
            Соединяем сайт, оффер, заявки, Telegram/CRM, AI-квалификацию и аналитику в понятный маршрут от первого
            касания до обращения.
          </p>

          <div className={`${styles.fadeUp} ${styles.delay3} flex flex-wrap items-center gap-3.5`}>
            <a
              href="#contacts"
              className={`${styles.primaryBtn} inline-flex items-center justify-center rounded-[10px] bg-[#B8794B] px-7 py-3.5 text-[15px] font-bold text-[#F5F7FB] no-underline transition-colors`}
              data-analytics-event="cta_primary_click"
              data-analytics-label="hero_primary"
              data-analytics-value="#contacts"
            >
              Разбор системы
            </a>
            <a
              href="#build"
              className="inline-flex items-center justify-center rounded-[10px] border-[1.5px] border-[#B8794B] bg-transparent px-[26px] py-3.5 text-[15px] font-semibold text-[#B8794B] no-underline transition-colors hover:bg-[rgba(184,121,75,0.08)]"
              data-analytics-event="cta_secondary_click"
              data-analytics-label="hero_secondary_how_it_works"
              data-analytics-value="#build"
            >
              Как это работает
            </a>
          </div>

          <div
            className={`${styles.fadeUp} ${styles.delay4} flex flex-wrap items-center gap-0`}
            aria-label="Маршрут: Трафик, Сайт, AI-квалификация, Заявка, Обработка"
          >
            {flowSteps.map((label, index) => {
              const isActive = index === 0;

              return (
                <span key={label} className="inline-flex items-center">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="block h-2.5 w-2.5 shrink-0 rounded-full"
                      style={
                        isActive
                          ? {
                              background: "#5F8ED8",
                              boxShadow: "0 0 0 4px rgba(95,142,216,0.2)"
                            }
                          : {
                              background: "transparent",
                              border: "1.5px solid rgba(148,163,184,0.3)"
                            }
                      }
                      aria-hidden
                    />
                    <span className="text-xs text-[#7F8B9C]">{label}</span>
                  </span>
                  {index < flowSteps.length - 1 ? (
                    <span
                      className="mx-2 block h-px w-5 shrink-0 md:w-7"
                      style={{ background: "rgba(95,142,216,0.4)" }}
                      aria-hidden
                    />
                  ) : null}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right — command artifact */}
        <div
          className={`${styles.fadeUp} ${styles.delay5} ${styles.commandPanel} w-full max-w-[520px] rounded-[14px] p-5 md:max-w-none md:justify-self-end md:p-6`}
          aria-hidden
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7F8B9C]">
              Системный контур
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#5F8ED8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5F8ED8]" aria-hidden />
              В маршруте
            </span>
          </div>

          <div className={`${styles.signalLine} mb-4 h-px w-full`} aria-hidden />

          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {systemModules.map((mod) => (
              <li
                key={mod.label}
                className={`flex items-center justify-between gap-3 rounded-[12px] border border-[rgba(24,32,48,0.8)] px-3.5 py-2.5 ${
                  mod.active ? styles.moduleRowActive : ""
                }`}
              >
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-[13px] font-semibold text-[#F5F7FB]">{mod.label}</span>
                  <span className="truncate text-[11px] text-[#7F8B9C]">{mod.detail}</span>
                </div>
                <span
                  className="shrink-0 font-mono text-[10px] uppercase tracking-[0.1em]"
                  style={{ color: mod.active ? "#5F8ED8" : "rgba(127,139,156,0.6)" }}
                >
                  {mod.active ? "активно" : "слой"}
                </span>
              </li>
            ))}
          </ul>

          <p className="mb-0 mt-4 text-[11px] leading-[1.5] text-[#7F8B9C]">
            Управляемый маршрут — не набор разрозненных инструментов.
          </p>
        </div>
      </div>
    </section>
  );
}
