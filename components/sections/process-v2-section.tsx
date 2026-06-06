import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  PrimaryBtn,
  ProcessStepCard,
  SecondaryBtn,
  SectionFrame
} from "@/components/sections/dd-ui";

const steps = [
  {
    title: "Разбор",
    description:
      "Смотрим, что уже есть: сайт, оффер, трафик, заявки, обработка и слабые места."
  },
  {
    title: "Оффер и структура",
    description: "Фиксируем, кому продаём, что обещаем и какой путь должен пройти человек до заявки."
  },
  {
    title: "Дизайн и сборка",
    description: "Собираем современный интерфейс, который выглядит дорого, быстро работает и ведёт к действию."
  },
  {
    title: "Интеграции и аналитика",
    description: "Подключаем формы, Telegram/CRM, AI-квалификацию, события и точки контроля."
  },
  {
    title: "Запуск и улучшения",
    description:
      "После запуска смотрим данные и усиливаем то, что мешает получать больше качественных обращений."
  }
] as const;

export function ProcessV2Section() {
  return (
    <SectionFrame id="process" bg="#080C12" fadeTo="#05070A" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[760px] flex-col gap-5">
          <KickerLine>Как работаем</KickerLine>
          <DdH2>Сначала разбираем систему. Потом собираем сайт, заявки и контроль.</DdH2>
          <DdSub>
            Не начинаем с дизайна ради дизайна. Сначала понимаем, где бизнес теряет клиентов, затем собираем маршрут:
            оффер, структура, интерфейс, интеграции, аналитика и улучшения.
          </DdSub>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <ProcessStepCard key={step.title} index={index + 1} title={step.title} description={step.description} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <PrimaryBtn
            href="#contacts"
            className="px-7 py-3.5 text-[15px]"
            data-analytics-event="cta_primary_click"
            data-analytics-label="process_primary_cta"
            data-analytics-value="#contacts"
          >
            Разбор системы
          </PrimaryBtn>
          <SecondaryBtn
            href="#products"
            className="px-6 py-3 text-[14px]"
            data-analytics-event="cta_secondary_click"
            data-analytics-label="process_view_products"
            data-analytics-value="#products"
          >
            Посмотреть продукты
          </SecondaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
