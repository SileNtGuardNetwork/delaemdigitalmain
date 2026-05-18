import {
  DdContainer,
  DdLabel,
  DdSub,
  KickerLine,
  PrimaryBtn,
  RimLight,
  SecondaryBtn,
  SectionFrame,
  SectionIndex,
  SteelCheckIcon
} from "@/components/sections/dd-ui";

type CheckStatus = "pass" | "warn" | "fail";

const checks: {
  g: string;
  t: string;
  s: CheckStatus;
  n: string;
}[] = [
  { g: "оффер", t: "Формулировка считывается за 5 секунд", s: "fail", n: "два сообщения конкурируют за внимание" },
  { g: "сайт", t: "Время до интерактива < 2.5 с", s: "warn", n: "3.8 с — превышение норматива" },
  { g: "сайт", t: "CTA выше первого экрана", s: "pass", n: "присутствует" },
  { g: "трафик", t: "Каналы диверсифицированы (≥ 3)", s: "fail", n: "92% бюджета — один источник" },
  { g: "заявка", t: "Скорость первого касания < 15 мин", s: "warn", n: "42 мин в среднем" },
  { g: "заявка", t: "Квалификация заявки до менеджера", s: "fail", n: "нет — все заявки идут в одну корзину" },
  { g: "CRM", t: "Стадии маршрута описаны и используются", s: "pass", n: "amoCRM, 7 стадий" },
  { g: "дожим", t: "Касания до 14 дня после заявки", s: "fail", n: "обрыв на 3 день" },
  { g: "отчёт", t: "Сквозная аналитика канал → сделка", s: "warn", n: "частично — нет связки с CRM" }
];

const counts = checks.reduce(
  (acc, c) => {
    acc[c.s] += 1;
    return acc;
  },
  { pass: 0, warn: 0, fail: 0 }
);

const SCORE = 39;

const auditIncludes = [
  "Анализ оффера и посадочной",
  "Аудит каналов и качества трафика",
  "Проверка CRM и регламентов обработки",
  "Сквозная аналитика и точки утечки"
] as const;

function ScoreBlock({ c, l, v }: { c: string; l: string; v: number }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} aria-hidden />
        {l}
      </span>
      <span className="text-[22px] font-bold tracking-[-0.025em] text-[var(--dd-text-primary)]">{v}</span>
    </div>
  );
}

function StatusIcon({ s }: { s: CheckStatus }) {
  if (s === "pass") {
    return (
      <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[rgba(111,191,145,0.14)]">
        <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
          <path
            d="M2 5.5 4.5 8 9.5 3"
            stroke="var(--dd-success)"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (s === "warn") {
    return (
      <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[rgba(184,121,75,0.16)]">
        <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
          <path d="M5.5 2v4.5M5.5 8.5v.5" stroke="var(--dd-action-copper)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[rgba(214,106,106,0.14)]">
      <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
        <path d="M3 3 8 8 M8 3 3 8" stroke="var(--dd-danger)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function statusLabel(s: CheckStatus): string {
  if (s === "pass") return "pass";
  if (s === "warn") return "warn";
  return "fail";
}

function statusColor(s: CheckStatus): string {
  if (s === "pass") return "var(--dd-success)";
  if (s === "warn") return "var(--dd-action-copper)";
  return "var(--dd-danger)";
}

export function AuditSection() {
  return (
    <SectionFrame id="audit" bg="#05070A" fadeTo="#080C12" style={{ height: 880 }}>
      <RimLight style={{ right: -260, top: -200, opacity: 0.5 }} />

      <DdContainer className="relative" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="mb-14 flex items-start justify-between">
          <div className="flex max-w-[720px] flex-col gap-[18px]">
            <KickerLine>Диагностика · § 05</KickerLine>
            <div className="text-[clamp(32px,3.2vw,44px)] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--dd-text-primary)]">
              <div>
                Сначала{" "}
                <span className="text-[var(--dd-diagnostic-blue)]">аудит ClientFlow</span>.
              </div>
              <div>Потом — действие.</div>
            </div>
          </div>
          <SectionIndex n={5} />
        </div>

        <div className="grid items-start gap-14" style={{ gridTemplateColumns: "380px 1fr" }}>
          <div className="flex flex-col gap-6 pt-2">
            <DdSub>
              Сверяем 30+ контрольных точек по семи компонентам системы. Каждая — с конкретным нормативом, а не «на
              глаз».
            </DdSub>
            <div className="text-[15px] leading-[1.6] text-[var(--dd-text-secondary)]">
              По итогам аудита — отчёт на 6–8 страниц: что работает, где течёт, что чинить в первую очередь. С
              приоритетами по выручке, не по красоте.
            </div>

            <div className="h-px w-full bg-[var(--dd-border-steel)]" aria-hidden />

            <div className="flex flex-col gap-3.5">
              <DdLabel className="tracking-[0.14em]">В аудит входит</DdLabel>
              {auditIncludes.map((x) => (
                <div key={x} className="flex items-start gap-3 text-[14px] text-[var(--dd-text-secondary)]">
                  <SteelCheckIcon className="mt-1 shrink-0" />
                  <span>{x}</span>
                </div>
              ))}
            </div>

            <div className="mt-2 flex gap-3">
              <PrimaryBtn href="/diagnostic">Запросить аудит</PrimaryBtn>
              <SecondaryBtn href="/diagnostic#sample">Пример отчёта</SecondaryBtn>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-[var(--dd-radius-md)] border border-[rgba(95,142,216,0.32)] bg-[var(--dd-surface-control)] shadow-[var(--dd-shadow-panel)]"
          >
            <div
              className="flex items-center justify-between border-b border-[var(--dd-border-cool)] px-[22px] py-4"
              style={{ background: "rgba(8,12,18,.5)" }}
            >
              <div className="flex items-center gap-3.5">
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] text-[var(--dd-action-steel-blue)]">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[var(--dd-diagnostic-blue)]"
                    style={{ boxShadow: "0 0 0 4px rgba(95,142,216,.18)" }}
                    aria-hidden
                  />
                  audit · ClientFlow · in progress
                </span>
                <span className="h-3 w-px bg-[var(--dd-border-cool)]" aria-hidden />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                  client · acme-co · funnel · q2
                </span>
              </div>
              <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--dd-text-muted)]">30 / 30 checks</span>
            </div>

            <div
              className="grid items-end gap-8 border-b border-[var(--dd-border-cool)] px-[22px] pb-6 pt-[22px]"
              style={{ gridTemplateColumns: "1fr auto auto auto" }}
            >
              <div className="flex flex-col gap-1.5">
                <DdLabel className="tracking-[0.14em]">Совокупная оценка системы</DdLabel>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[52px] font-bold leading-none tracking-[-0.035em] text-[var(--dd-text-primary)]">
                    {SCORE}
                  </span>
                  <span className="text-[16px] text-[var(--dd-text-muted)]">/ 100</span>
                </div>
              </div>
              <ScoreBlock c="var(--dd-success)" l="passed" v={counts.pass} />
              <ScoreBlock c="var(--dd-action-copper)" l="warn" v={counts.warn} />
              <ScoreBlock c="var(--dd-danger)" l="failed" v={counts.fail} />
            </div>

            <div className="max-h-[420px] overflow-hidden">
              {checks.map((c, i) => (
                <div
                  key={`${c.g}-${c.t}`}
                  className="grid items-center gap-3.5 px-[22px] py-3"
                  style={{
                    gridTemplateColumns: "22px 92px 1fr auto",
                    borderBottom: i === checks.length - 1 ? "none" : "1px solid rgba(148,163,184,.08)"
                  }}
                >
                  <StatusIcon s={c.s} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
                    {c.g}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[14px] text-[var(--dd-text-primary)]">{c.t}</span>
                    <span className="text-[12px] text-[var(--dd-text-muted)]">{c.n}</span>
                  </div>
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: statusColor(c.s) }}
                  >
                    {statusLabel(c.s)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
