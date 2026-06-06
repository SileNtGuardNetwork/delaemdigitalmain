import {
  DdEyebrow,
  DdH2,
  DdLabel,
  DdSub,
  DiagnosticReportRow,
  FlagshipContainer,
  FlowPath,
  KickerLine,
  PrimaryBtn,
  RimLight,
  SecondaryBtn,
  SectionFrame,
  SectionIndex,
  SteelCheckIcon
} from "@/components/sections/dd-ui";

const auditIncludes = [
  "Разбор оффера и посадочной",
  "Проверка каналов и готовности к трафику",
  "Аудит CRM, скорости ответа и регламентов",
  "Точки потери на маршруте клиента"
] as const;

const sampleRoute = ["Внимание", "Доверие", "Заявка", "Обработка", "Аналитика", "Улучшение"] as const;

const SAMPLE_SCORE = 62;

export function AuditSection() {
  return (
    <SectionFrame id="audit" bg="#05070A" fadeTo="#080C12" className="min-h-0 md:min-h-[880px]">
      <RimLight style={{ right: -260, top: -200, opacity: 0.35 }} />

      <FlagshipContainer className="relative py-20 md:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[760px] flex-col gap-5">
            <KickerLine>ClientFlow Аудит · § 05</KickerLine>
            <DdH2>
              Проверьте, где ваша система{" "}
              <span className="text-[var(--dd-diagnostic-blue)]">теряет клиентов</span> до заявки.
            </DdH2>
            <DdSub className="max-w-[560px]">
              Диагностика перед полной сборкой: сверяем маршрут клиента, находим главную точку потери и фиксируем
              рекомендацию следующего шага — без обещаний «волшебной таблетки».
            </DdSub>
          </div>
          <SectionIndex n={5} />
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="flex flex-col gap-6">
            <p className="text-[15px] leading-[1.6] text-[var(--dd-text-secondary)]">
              ClientFlow Аудит — вход в систему, а не обычная форма заявки. Вы получаете структурированный разбор
              маршрута и приоритеты по выручке, не по «красоте сайта».
            </p>

            <div className="h-px w-full bg-[var(--dd-border-steel)]" aria-hidden />

            <div className="flex flex-col gap-3">
              <DdLabel className="tracking-[0.14em]">В диагностику входит</DdLabel>
              {auditIncludes.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[14px] text-[var(--dd-text-secondary)]">
                  <SteelCheckIcon className="mt-1 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryBtn href="/diagnostic">Запросить аудит</PrimaryBtn>
              <SecondaryBtn href="/diagnostic#sample">Пример отчёта</SecondaryBtn>
            </div>
          </div>

          <aside
            className="rounded-[var(--dd-radius-lg)] border border-[var(--dd-border-cool)] p-5 md:p-6"
            style={{ background: "rgba(8,12,18,.55)" }}
            aria-label="Пример результата диагностики"
          >
            <div className="mb-5 flex flex-col gap-2 border-b border-[var(--dd-border-cool)] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <DdEyebrow tone="steel">Пример отчёта</DdEyebrow>
              <p className="text-[11px] leading-[1.45] text-[var(--dd-text-muted)]">
                Иллюстрация формата · не гарантированный результат
              </p>
            </div>

            <div className="mb-5 flex items-end gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
                  ClientFlow Score
                </p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="text-[44px] font-bold leading-none tracking-[-0.03em] text-[var(--dd-text-primary)] md:text-[48px]">
                    {SAMPLE_SCORE}
                  </span>
                  <span className="text-[15px] text-[var(--dd-text-muted)]">/ 100</span>
                </p>
              </div>
            </div>

            <DiagnosticReportRow
              label="Главная точка потери"
              value="Заявка — нет квалификации до передачи менеджеру"
              emphasis
            />
            <DiagnosticReportRow label="Уровень готовности к трафику" value="Средний — посадочная готова, обработка — узкое место" />
            <DiagnosticReportRow
              label="Рекомендация следующего шага"
              value="Настроить AI-квалификацию и регламент ответа в первые 15 минут"
            />

            <div className="mt-4 rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-cool)] p-4" style={{ background: "rgba(14,22,34,.4)" }}>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
                Маршрут внутри ClientFlow System
              </p>
              <FlowPath steps={sampleRoute} activeIndex={2} variant="blue" stackOnMobile />
            </div>
          </aside>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
