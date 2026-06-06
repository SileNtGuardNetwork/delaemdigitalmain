import {
  ComparisonColumn,
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  PrimaryBtn,
  SecondaryBtn,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const ordinaryApproach = [
  {
    title: "Сделать сайт",
    description: "Получить красивую страницу и надеяться, что она начнёт приводить клиентов."
  },
  {
    title: "Запустить рекламу",
    description: "Привести трафик без полной проверки посадочного маршрута."
  },
  {
    title: "Получить заявку",
    description: "Считать обращение результатом, даже если дальше оно плохо обработано."
  },
  {
    title: "Смотреть отчёты",
    description: "Видеть клики и показы, но не понимать, где теряется клиент."
  }
] as const;

const clientflowApproach = [
  {
    title: "Собрать маршрут клиента",
    description: "Сайт, оффер, CTA, Telegram, AI и обработка работают как связанная система."
  },
  {
    title: "Готовить систему к трафику",
    description:
      "Перед рекламой проверяются скорость, адаптив, формы, аналитика и путь к заявке."
  },
  {
    title: "Квалифицировать обращение",
    description:
      "Квиз, AI-аудит и Telegram-прогрев помогают понять уровень клиента и следующий шаг."
  },
  {
    title: "Улучшать по данным",
    description:
      "Система показывает, где теряется поток: в оффере, сайте, трафике, форме, Telegram или обработке."
  }
] as const;

export function WhySection() {
  return (
    <SectionFrame bg="#05070A" fadeTo="#080C12" className="min-h-0 md:min-h-[820px]">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[880px] flex-col gap-5">
            <KickerLine>Почему не просто сайт · § 08</KickerLine>
            <DdH2>
              Сайт не должен просто выглядеть современно. Он должен быть частью{" "}
              <span className="text-[var(--dd-diagnostic-blue)]">системы привлечения клиентов</span>.
            </DdH2>
            <DdSub className="max-w-[640px]">
              Красивый дизайн важен, но его недостаточно. Если сайт не связан с оффером, трафиком, формой,
              Telegram, аналитикой и обработкой заявок — он остаётся витриной, а не управляемым клиентским
              маршрутом.
            </DdSub>
          </div>
          <SectionIndex n={8} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <ComparisonColumn label="Обычный подход" items={ordinaryApproach} variant="ordinary" />
          <ComparisonColumn label="ClientFlow System" items={clientflowApproach} variant="clientflow" />
        </div>

        <blockquote
          className="mt-8 rounded-[var(--dd-radius-md)] border-l-2 px-5 py-5 md:mt-10 md:px-7"
          style={{
            borderColor: "var(--dd-diagnostic-blue)",
            background: "rgba(14,22,34,.45)"
          }}
        >
          <p className="max-w-[960px] text-[15px] font-medium leading-[1.65] text-[var(--dd-text-primary)] md:text-base">
            Сильный сайт — это не финальная точка. Это центральный узел системы, которая должна принимать трафик,
            создавать доверие, фиксировать заявки и показывать, что улучшать дальше.
          </p>
        </blockquote>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryBtn href="#contacts" className="px-6 py-3 text-[14px]">
            Разбор системы
          </PrimaryBtn>
          <SecondaryBtn href="#audit" className="px-6 py-3 text-[14px]">
            Пройти ClientFlow Аудит
          </SecondaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
