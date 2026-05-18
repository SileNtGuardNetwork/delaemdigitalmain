import {
  DdContainer,
  DdSub,
  KickerLine,
  SecondaryBtn,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const components = [
  {
    k: "01",
    t: "Оффер",
    d: "Формулировка, которая выдерживает первое прочтение",
    bullets: ["Боль · Решение · Доказательство", "Тестируем 3–5 версий", "Один смысл — везде"]
  },
  {
    k: "02",
    t: "Сайт",
    d: "Посадочная или мини-сайт под одну задачу",
    bullets: ["5-секундный тест", "Скорость до 1.4 с", "Адаптив + AB-тесты"]
  },
  {
    k: "03",
    t: "Трафик",
    d: "3–5 каналов, диверсифицированных по риску",
    bullets: ["Контекст · Таргет · SEO", "Прогрев холодной базы", "Бюджет под маржу"]
  },
  {
    k: "04",
    t: "Заявка",
    d: "Квалификация и приоритезация входящей заявки",
    bullets: ["AI-скоринг по 7 признакам", "Маршрут под тип заявки", "Только целевые в продажу"]
  },
  {
    k: "05",
    t: "Дожим",
    d: "Серии касаний по тёплым и спящим заявкам",
    bullets: ["SMS · Email · Мессенджеры", "До 14 дней без потери", "Реактивация раз в квартал"]
  },
  {
    k: "06",
    t: "Аналитика",
    d: "Сквозной отчёт от клика до сделки",
    bullets: ["CAC · LTV · Доля рынка канала", "Дашборд для собственника", "Алёрты на отклонения"]
  },
  {
    k: "07",
    t: "CRM",
    d: "Чистый маршрут заявки вместо хаотичного таб-листа",
    bullets: ["Стадии под ваш процесс", "Регламент скорости ответа", "Автоматизация рутины"]
  }
] as const;

function CompMark({ id, className = "" }: { id: string; className?: string }) {
  const S = 36;
  const stroke = "rgba(184,121,75,.72)";
  const muted = "rgba(127,166,214,.5)";
  const common = {
    stroke,
    strokeWidth: 1.3,
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  return (
    <svg width={S} height={S} viewBox="0 0 36 36" className={`block ${className}`} aria-hidden>
      {id === "01" && (
        <>
          <rect x="6" y="9" width="24" height="3" rx="1.5" {...common} />
          <rect x="6" y="16" width="18" height="3" rx="1.5" {...common} stroke={muted} />
          <rect x="6" y="23" width="14" height="3" rx="1.5" {...common} stroke={muted} />
        </>
      )}
      {id === "02" && (
        <>
          <rect x="5" y="7" width="26" height="22" rx="2" {...common} />
          <line x1="5" y1="13" x2="31" y2="13" {...common} />
          <circle cx="9" cy="10" r="0.9" fill={stroke} />
          <circle cx="12" cy="10" r="0.9" fill={muted} />
          <rect x="9" y="17" width="9" height="3" rx="1" {...common} stroke={muted} />
          <rect x="9" y="22" width="14" height="3" rx="1" {...common} stroke={muted} />
        </>
      )}
      {id === "03" && (
        <>
          <path d="M4 28 L12 18 L18 22 L24 10 L32 14" {...common} />
          <circle cx="12" cy="18" r="1.6" {...common} />
          <circle cx="24" cy="10" r="1.6" {...common} />
        </>
      )}
      {id === "04" && (
        <>
          <circle cx="18" cy="18" r="11" {...common} stroke={muted} />
          <circle cx="18" cy="18" r="6" {...common} />
          <circle cx="18" cy="18" r="1.6" fill={stroke} stroke="none" />
        </>
      )}
      {id === "05" && (
        <>
          <path d="M6 12 L18 22 L30 12" {...common} />
          <rect x="6" y="9" width="24" height="18" rx="2" {...common} stroke={muted} />
          <circle cx="27" cy="9" r="2.4" {...common} />
        </>
      )}
      {id === "06" && (
        <>
          <line x1="6" y1="28" x2="30" y2="28" {...common} stroke={muted} />
          <rect x="8" y="18" width="3" height="10" {...common} stroke={muted} />
          <rect x="14" y="13" width="3" height="15" {...common} stroke={muted} />
          <rect x="20" y="9" width="3" height="19" {...common} />
          <rect x="26" y="15" width="3" height="13" {...common} stroke={muted} />
        </>
      )}
      {id === "07" && (
        <>
          <path d="M8 9 L28 9 L24 15 L24 25 L19 28 L19 17 Z" {...common} />
          <path d="M8 9 L13 15 L13 25 L18 28" {...common} stroke={muted} />
        </>
      )}
    </svg>
  );
}

export function AssemblySection() {
  return (
    <SectionFrame bg="#080C12" fadeTo="#05070A" style={{ height: 940 }}>
      <DdContainer className="relative py-24" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="mb-14 flex items-end justify-between">
          <div className="flex max-w-[760px] flex-col gap-[18px]">
            <KickerLine>Сборка системы · § 04</KickerLine>
            <div className="text-[clamp(32px,3.2vw,44px)] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--dd-text-primary)]">
              <div>Семь компонентов.</div>
              <div>Один маршрут.</div>
            </div>
            <DdSub className="max-w-[620px]">
              Не работаем «по кусочкам». Подключаем недостающие узлы, чиним существующие, собираем в одну
              систему. Каждый элемент — обязателен.
            </DdSub>
          </div>
          <SectionIndex n={4} />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {components.map((c) => (
            <div
              key={c.k}
              className="flex min-h-[270px] flex-col gap-3.5 rounded-[var(--dd-radius-md)] border border-[var(--dd-border-steel)] bg-[var(--dd-surface-obsidian)] p-[22px] shadow-[var(--dd-shadow-subtle)] transition-[border-color] duration-200 hover:border-[rgba(184,121,75,0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--dd-action-copper)]">
                  module · {c.k}
                </div>
                <CompMark id={c.k} />
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[22px] font-bold tracking-[-0.02em] text-[var(--dd-text-primary)]">
                  {c.t}
                </div>
                <div className="text-[14px] leading-[1.5] text-[var(--dd-text-secondary)]">{c.d}</div>
              </div>

              <div className="h-px w-full bg-[var(--dd-border-steel)]" aria-hidden />

              <div className="flex flex-col gap-2">
                {c.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-[13px] text-[var(--dd-text-secondary)]">
                    <span
                      className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--dd-action-steel-blue)]"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div
            className="flex min-h-[270px] flex-col justify-between gap-4 rounded-[var(--dd-radius-md)] border border-[rgba(184,121,75,0.34)] p-[22px] transition-[border-color] duration-200 hover:border-[rgba(184,121,75,0.5)]"
            style={{
              background: "linear-gradient(180deg, rgba(14,22,34,.72) 0%, rgba(20,14,9,.72) 100%)"
            }}
          >
            <div className="flex flex-col gap-3.5">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--dd-action-copper)]">
                Σ · all · seven
              </div>
              <div className="text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--dd-text-primary)]">
                Связаны в один поток — иначе не работает.
              </div>
              <div className="text-[13px] leading-[1.5] text-[var(--dd-text-secondary)]">
                Любой выпавший узел роняет конверсию каскадом. Проверяем на старте, какие части уже есть, и
                достраиваем недостающие.
              </div>
            </div>
            <SecondaryBtn href="#contacts" className="self-start px-[18px] py-2.5 text-[13px]">
              Что у вас уже есть?
            </SecondaryBtn>
          </div>
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
