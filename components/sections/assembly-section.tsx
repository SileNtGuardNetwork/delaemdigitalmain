import {
  DdEyebrow,
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  ModuleCard,
  SecondaryBtn,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const modules = [
  {
    title: "Премиальный сайт / лендинг",
    description: "Посадочная под задачу: доверие за 5 секунд, скорость, понятный путь к заявке."
  },
  {
    title: "AI-квалификация лидов",
    description: "Скоринг и маршрутизация обращения до менеджера — в продажу идут целевые заявки."
  },
  {
    title: "Telegram / CRM-уведомления",
    description: "Моментальная передача заявки в рабочий контур — без потери контекста и задержек."
  },
  {
    title: "Аналитика и цели",
    description: "Сквозной отчёт по каналу, источнику и этапу маршрута — видно, где система работает."
  },
  {
    title: "Автопрогрев и follow-up",
    description: "Серия касаний по тёплым и спящим контактам — заявка не обрывается на третий день."
  },
  {
    title: "Техническая упаковка",
    description: "Интеграции, скорость, регламенты запуска — контур готов к платному трафику."
  }
] as const;

export function AssemblySection() {
  return (
    <SectionFrame bg="#080C12" fadeTo="#05070A" className="min-h-0 md:min-h-[900px]">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex max-w-[780px] flex-col gap-5">
            <KickerLine>Сборка контура · § 04</KickerLine>
            <DdH2>
              Не отдельный лендинг.
              <br />
              <span className="text-[var(--dd-diagnostic-blue)]">Рабочий контур</span> под заявки.
            </DdH2>
            <DdSub className="max-w-[620px]">
              Делаем Диджитал собирает не страницу, а связанный контур: сайт, квалификация, уведомления, аналитика и
              дожим работают как одна операционная система привлечения клиентов.
            </DdSub>
          </div>
          <SectionIndex n={4} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.title}
              index={index + 1}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>

        <div
          className="mt-6 flex flex-col gap-5 rounded-[var(--dd-radius-md)] border border-[var(--dd-border-cool)] p-5 md:mt-8 md:flex-row md:items-center md:justify-between md:p-6"
          style={{ background: "rgba(14,22,34,.45)" }}
        >
          <div className="flex flex-col gap-2.5">
            <DdEyebrow tone="steel">Единый контур</DdEyebrow>
            <p className="max-w-[720px] text-[15px] font-medium leading-[1.6] text-[var(--dd-text-primary)]">
              Шесть модулей связаны в один маршрут. Выпавший узел роняет конверсию каскадом — на старте проверяем, что
              уже есть, и достраиваем недостающее.
            </p>
          </div>
          <SecondaryBtn href="#contacts" className="shrink-0 self-start px-5 py-2.5 text-[13px] md:self-center">
            Собрать контур
          </SecondaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
