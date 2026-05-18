import { SectionKicker, SteelDot } from "@/components/sections/section-ui";

const audiences = [
  {
    label: "для собственников",
    title: "Владельцам бизнеса",
    subtitle: "от 5 человек, оборот от 30 М",
    desc: "Когда команда «делает маркетинг», а сделок предсказуемо не прибавляется. Хотите видеть систему — от рубля в трафик до рубля в кассе.",
    items: ["Сквозной отчёт собственнику", "Один контракт — одна ответственность", "KPI завязан на выручку, не на клики"]
  },
  {
    label: "для экспертов",
    title: "Экспертам и консультантам",
    subtitle: "индивидуальная практика, чек от 300к",
    desc: "Когда работаете на сарафане и хочется управляемого потока, не теряя позиционирования. Не «инфобиз», а B2B-канал заявок.",
    items: ["Оффер под высокий чек", "Квалификация до созвона", "Поток без перегруза календаря"]
  },
  {
    label: "для команд",
    title: "Маркетинг-командам",
    subtitle: "маркетолог + 2–4 подрядчика",
    desc: "Когда внутри есть руки, но нет системы. Собираем маршрут, регламенты и аналитику — дальше команда ведёт сама.",
    items: ["Регламенты и обучение", "Сопровождение 6 мес.", "Передача под ключ"]
  }
] as const;

export function AudienceSection() {
  return (
    <section className="border-t border-[rgba(184,121,75,0.15)] bg-[var(--dd-canvas-obsidian)] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]">
      <SectionKicker>Кому подходит</SectionKicker>
      <h2 className="text-[clamp(32px,3.5vw,44px)] font-extrabold tracking-[-0.025em] text-[var(--dd-text-primary)]">
        Владельцам. Экспертам. <span className="text-[#5f8ed8]">Командам.</span>
      </h2>
      <p className="mt-4 max-w-2xl text-[17px] text-[var(--dd-text-secondary)]">
        ClientFlow System адаптируется под масштаб и структуру бизнеса.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {audiences.map((card) => (
          <article
            key={card.title}
            className="flex flex-col gap-4 rounded-[20px] border border-[var(--dd-border-steel)] bg-[var(--dd-surface-obsidian)] p-7"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--dd-action-copper)]">
              {card.label}
            </span>
            <h3 className="text-xl font-bold text-[var(--dd-text-primary)]">{card.title}</h3>
            <p className="text-xs text-[var(--dd-text-muted)]">{card.subtitle}</p>
            <p className="text-sm leading-[1.6] text-[var(--dd-text-secondary)]">{card.desc}</p>
            <ul className="mt-auto flex flex-col gap-2">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--dd-text-secondary)]">
                  <SteelDot />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-start gap-5 rounded-2xl border border-[rgba(214,106,106,0.2)] bg-[rgba(214,106,106,0.04)] px-7 py-5">
        <span className="shrink-0 text-lg text-[#d66a6a]" aria-hidden>
          ⊘
        </span>
        <p className="text-sm text-[var(--dd-text-muted)]">
          <span className="font-semibold text-[var(--dd-text-primary)]">Не подойдём, если: </span>
          нужен только сайт без системы · хочется разовую работу без сопровождения · бюджет до 100к · нет
          готовности внедрять регламенты
        </p>
      </div>
    </section>
  );
}
