import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  ModuleCard,
  SectionFrame
} from "@/components/sections/dd-ui";

const pillars = [
  {
    title: "Сайт, который продаёт доверие",
    description: "Premium-посадочная: оффер, визуальный уровень и путь к заявке — без ощущения шаблона."
  },
  {
    title: "Заявки, которые не теряются",
    description: "Формы, квиз, AI-квалификация и Telegram — обращение попадает в рабочий контур, а не в пустоту."
  },
  {
    title: "Система, которой можно управлять",
    description: "Интеграции, аналитика и регламенты после запуска — видно, что работает и что улучшать."
  }
] as const;

export function WhatIBuildSection() {
  return (
    <SectionFrame id="build" bg="#080C12" fadeTo="#080C12" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[720px] flex-col gap-5">
          <KickerLine>Что я собираю</KickerLine>
          <DdH2>Три результата вместо набора разрозненных услуг</DdH2>
          <DdSub>
            Не отдельный лендинг и не «ещё один инструмент» — связанный digital-контур под заявки и управление после
            запуска.
          </DdSub>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((item, index) => (
            <ModuleCard key={item.title} index={index + 1} title={item.title} description={item.description} />
          ))}
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
