import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  SectionFrame
} from "@/components/sections/dd-ui";

const pillars = [
  {
    title: "Стратегия",
    description: "Оффер, аудитория и структура — до дизайна и вёрстки."
  },
  {
    title: "Премиальный дизайн",
    description: "Визуальный уровень, который выдерживает дорогую заявку и рекламу."
  },
  {
    title: "AI, Telegram, CRM",
    description: "Заявка не теряется: квалификация, уведомления и передача в продажи."
  },
  {
    title: "Аналитика и улучшения",
    description: "Цели, события и цикл доработок после запуска — по данным, не по ощущениям."
  }
] as const;

export function WhyItWorksSection() {
  return (
    <SectionFrame id="why" bg="#05070A" fadeTo="#080C12" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[720px] flex-col gap-5">
          <KickerLine>Подход</KickerLine>
          <DdH2>Почему это работает как производственная система</DdH2>
          <DdSub>
            Стратегия, дизайн, интеграции и аналитика собраны в один контур — без лишней методологии на каждом экране.
          </DdSub>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-cool)] p-5"
              style={{ background: "rgba(8,12,18,.55)" }}
            >
              <h3 className="text-base font-bold text-[var(--dd-text-primary)]">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-[var(--dd-text-secondary)]">{item.description}</p>
            </article>
          ))}
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
