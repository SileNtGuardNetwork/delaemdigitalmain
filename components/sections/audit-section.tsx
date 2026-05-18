import { SectionKicker } from "@/components/sections/section-ui";

type AuditStatus = "PASS" | "WARN" | "FAIL";

const auditRows: { status: AuditStatus; title: string; value: string }[] = [
  { status: "WARN", title: "Оффер", value: "два сообщения конкурируют за внимание" },
  { status: "WARN", title: "Время загрузки", value: "3.8 с — превышение норматива" },
  { status: "FAIL", title: "Оффер выше первого экрана", value: "отсутствует" },
  { status: "PASS", title: "Каналы трафика", value: "диверсифицированы" },
  { status: "FAIL", title: "Источники бюджета", value: "80% бюджета — один источник" },
  { status: "WARN", title: "Скорость первого касания", value: "9 мин в среднем" },
  { status: "FAIL", title: "Квалификация заявки", value: "нет — все заявки в одну корзину" },
  { status: "PASS", title: "Стадии маршрута", value: "описаны и используются" },
  { status: "FAIL", title: "Касания до 14 дня", value: "обрыв на 3 день" },
  { status: "WARN", title: "Сквозная аналитика", value: "частично — нет связки с CRM" },
  { status: "PASS", title: "Регламент ответа", value: "до 15 минут" },
  { status: "FAIL", title: "Дожим после заявки", value: "не настроен" }
];

const auditCards = [
  { title: "Анализ оффера и посадочной", desc: "Проверяем по 30 контрольным точкам" },
  { title: "Аудит каналов и качества трафика", desc: "Проверяем по 30 контрольным точкам" },
  { title: "Проверка CRM и регламентов", desc: "Проверяем по 30 контрольным точкам" },
  { title: "Сквозная аналитика и точки утечки", desc: "Проверяем по 30 контрольным точкам" }
] as const;

const badgeStyles: Record<AuditStatus, string> = {
  PASS: "border-[rgba(111,191,145,0.3)] bg-[rgba(111,191,145,0.12)] text-[#6fbf91]",
  WARN: "border-[rgba(184,121,75,0.3)] bg-[rgba(184,121,75,0.1)] text-[var(--dd-action-copper)]",
  FAIL: "border-[rgba(214,106,106,0.3)] bg-[rgba(214,106,106,0.1)] text-[#d66a6a]"
};

export function AuditSection() {
  return (
    <section id="audit" className="bg-[var(--dd-canvas-graphite)] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]">
      <SectionKicker>Диагностика</SectionKicker>
      <h2 className="text-[clamp(32px,3.5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--dd-text-primary)]">
        Сначала — диагноз.
        <br />
        <span className="text-[#5f8ed8]">Потом — действие.</span>
      </h2>
      <p className="mt-5 max-w-2xl text-[17px] leading-[1.6] text-[var(--dd-text-secondary)]">
        Прежде чем собирать систему — проверяем что уже работает, а что сливает бюджет.
      </p>

      <div className="mt-14 overflow-hidden rounded-[20px] border border-[var(--dd-border-cool)] bg-[var(--dd-surface-control)]">
        <div className="flex items-center justify-between border-b border-[var(--dd-border-cool)] bg-[rgba(8,12,18,0.7)] px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#d66a6a]" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
              АУДИТ CLIENTFLOW · АКТИВЕН
            </span>
          </div>
          <span className="text-[11px] text-[var(--dd-text-muted)]">30 контрольных точек</span>
        </div>

        <div className="px-6">
          {auditRows.map((row) => (
            <div
              key={row.title}
              className="flex items-center gap-4 border-b border-[rgba(148,163,184,0.06)] py-3.5 last:border-b-0"
            >
              <span
                className={`w-[52px] shrink-0 rounded border px-2 py-0.5 text-center text-[10px] font-bold uppercase tracking-[0.1em] ${badgeStyles[row.status]}`}
              >
                {row.status}
              </span>
              <span className="flex-1 text-sm font-medium text-[var(--dd-text-primary)]">{row.title}</span>
              <span className="shrink-0 text-right text-xs text-[var(--dd-text-muted)]">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between bg-[rgba(8,12,18,0.5)] px-6 py-4">
          <span className="text-[13px] text-[var(--dd-text-muted)]">ClientFlow Score: 39 / 100</span>
          <div className="h-1 w-40 overflow-hidden rounded-sm bg-[rgba(148,163,184,0.15)]">
            <span className="block h-full w-[39%] rounded-sm bg-[#d66a6a]" />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-6">
        {auditCards.map((card) => (
          <article
            key={card.title}
            className="min-w-[240px] flex-1 rounded-xl border border-[var(--dd-border-steel)] bg-[rgba(12,17,25,0.6)] p-5"
          >
            <h3 className="text-sm font-semibold text-[var(--dd-text-primary)]">{card.title}</h3>
            <p className="mt-1.5 text-xs text-[var(--dd-text-muted)]">{card.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#audit"
          className="rounded-xl bg-[var(--dd-action-copper)] px-6 py-3.5 text-sm font-bold text-[#F5F7FB] no-underline transition-colors hover:bg-[var(--dd-action-copper-hover)]"
          data-analytics-event="cta_primary_click"
          data-analytics-label="audit_primary"
          data-analytics-value="#audit"
        >
          Получить ClientFlow Аудит
        </a>
        <span className="text-[13px] text-[var(--dd-text-muted)]">Бесплатно · 30 минут · Результат сразу</span>
      </div>
    </section>
  );
}
