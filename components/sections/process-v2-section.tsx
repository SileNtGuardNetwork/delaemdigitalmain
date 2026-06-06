import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  PrimaryBtn,
  ProcessStepCard,
  SectionFrame
} from "@/components/sections/dd-ui";

const steps = [
  {
    title: "Разбор",
    description: "Смотрим, что уже есть, где теряются заявки и с чего начинать."
  },
  {
    title: "Оффер и структура",
    description: "Фиксируем обещание, структуру сайта и путь к заявке."
  },
  {
    title: "Дизайн и сборка",
    description: "Собираем premium-интерфейс, который быстро работает и ведёт к действию."
  },
  {
    title: "Интеграции и аналитика",
    description: "Связываем формы, Telegram, AI и цели — до запуска трафика."
  },
  {
    title: "Запуск и улучшения",
    description: "Включаем поток и дорабатываем по данным, а не вслепую."
  }
] as const;

export function ProcessV2Section() {
  return (
    <SectionFrame id="process" bg="#080C12" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[720px] flex-col gap-5">
          <KickerLine>Процесс</KickerLine>
          <DdH2>Пять этапов — без хаоса и бесконечных согласований</DdH2>
          <DdSub>Производственный порядок: от разбора до запуска и цикла улучшений.</DdSub>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <ProcessStepCard key={step.title} index={index + 1} title={step.title} description={step.description} />
          ))}
        </div>

        <div className="mt-8">
          <PrimaryBtn href="#contacts" className="px-6 py-3 text-[14px]">
            Начать с разбора
          </PrimaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
