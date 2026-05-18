import {
  DdContainer,
  DdH2,
  DdH3,
  DdLabel,
  KickerLine,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const groups = [
  {
    tag: "для собственников",
    title: "Владельцам бизнеса",
    sub: "5–50 человек, оборот от 30 М/год",
    body: "Когда команда «делает маркетинг», а сделок предсказуемо не прибавляется. Хотите видеть систему целиком — от рубля в трафик до рубля в кассе.",
    points: [
      "Сквозной отчёт собственнику",
      "Один контракт — одна ответственность",
      "KPI завязан на выручку, не на клики"
    ]
  },
  {
    tag: "для экспертов",
    title: "Экспертам и консультантам",
    sub: "индивидуальная практика, средний чек от 300 ₽",
    body: "Когда работаете на сарафане и хочется управляемого потока, не теряя позиционирования. Не «инфобиз», а спокойный B2B-канал заявок.",
    points: ["Оффер под высокий чек", "Квалификация до созвона", "Поток без перегруза календаря"]
  },
  {
    tag: "для команд",
    title: "Маркетинг-командам",
    sub: "in-house маркетолог + 1–2 подрядчика",
    body: "Когда внутри есть руки, но нет системы. Собираем маршрут, регламенты и аналитику — дальше команда ведёт сама, мы остаёмся на сопровождении.",
    points: ["Сборка + передача", "Регламенты и обучение", "Сопровождение на 6 мес."]
  }
] as const;

type AudienceSectionProps = {
  id?: string;
};

export function AudienceSection({ id }: AudienceSectionProps) {
  return (
    <SectionFrame id={id} bg="#080C12" fadeTo="#100A04" style={{ minHeight: 720 }}>
      <DdContainer className="py-24">
        <div className="mb-14 flex flex-col items-end justify-between gap-8 sm:flex-row">
          <div className="flex max-w-[760px] flex-col gap-[18px]">
            <KickerLine>Кому подходит · § 09</KickerLine>
            <DdH2>
              Кому это подходит.
              <br />
              А кому — нет.
            </DdH2>
          </div>
          <SectionIndex n={9} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {groups.map((group, index) => (
            <article
              key={group.title}
              className="flex flex-col gap-[18px] border-[var(--dd-border-steel)] px-7 py-1 lg:border-r lg:px-7"
              style={{
                borderLeft: index === 0 ? "1px solid var(--dd-border-steel)" : undefined
              }}
            >
              <div className="flex flex-col gap-3">
                <DdLabel className="text-[var(--dd-action-copper)]">{group.tag}</DdLabel>
                <DdH3>{group.title}</DdH3>
                <p className="text-[13px] text-[var(--dd-text-muted)]">{group.sub}</p>
              </div>

              <p className="text-[15px] leading-[1.65] text-[var(--dd-text-secondary)]">{group.body}</p>

              <hr className="border-0 border-t border-[var(--dd-border-steel)]" />

              <ul className="flex flex-col gap-2.5">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[13px] text-[var(--dd-text-secondary)]">
                    <span
                      className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--dd-action-steel-blue)]"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-start gap-4 rounded-[var(--dd-radius-sm)] border border-dashed border-[var(--dd-border-steel)] bg-[rgba(8,12,18,0.5)] px-[22px] py-4 sm:flex-row sm:items-center sm:gap-[18px]">
          <DdLabel className="shrink-0 text-[var(--dd-text-muted)]">Не подойдём, если</DdLabel>
          <span className="hidden h-4 w-px shrink-0 bg-[var(--dd-border-steel)] sm:block" aria-hidden />
          <p className="text-[13px] text-[var(--dd-text-secondary)]">
            бюджет на маркетинг до 300 ₽/мес · ждёте «волшебной кнопки» · нужен SMM-контент или дизайн без системы
          </p>
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
