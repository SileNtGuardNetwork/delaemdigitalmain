import {
  DdH2,
  DdSub,
  FitCard,
  FitFilterPanel,
  FlagshipContainer,
  KickerLine,
  PrimaryBtn,
  SecondaryBtn,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const goodFit = [
  {
    title: "Владельцы бизнеса",
    description: "Уже есть продукт, услуга или экспертность, но digital работает фрагментами."
  },
  {
    title: "Эксперты и консультанты",
    description: "Нужна упаковка личного бренда, доверия и заявок."
  },
  {
    title: "B2B-услуги",
    description: "Важны доверие, квалификация, быстрый контакт и понятная обработка лида."
  },
  {
    title: "Локальные компании с дорогой заявкой",
    description: "Сайт и реклама должны работать как связанный маршрут, а не отдельные активности."
  },
  {
    title: "Проекты, готовые к трафику",
    description: "Нужно подготовить систему, чтобы не сливать рекламный бюджет в слабый маршрут."
  }
] as const;

const notFit = [
  "Нужен просто дешёвый сайт.",
  "Нет понятного продукта или экономики заявки.",
  "Нет готовности обрабатывать лиды.",
  "Ожидается гарантия заявок без участия, данных и нормального предложения."
] as const;

type AudienceSectionProps = {
  id?: string;
};

export function AudienceSection({ id }: AudienceSectionProps) {
  return (
    <SectionFrame id={id} bg="#080C12" fadeTo="#100A04" className="min-h-0 md:min-h-[720px]">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[840px] flex-col gap-5">
            <KickerLine>Кому подходит · § 09</KickerLine>
            <DdH2>
              Для бизнеса, которому нужен не ещё один инструмент, а{" "}
              <span className="text-[var(--dd-diagnostic-blue)]">управляемый путь клиента</span>
            </DdH2>
            <DdSub className="max-w-[640px]">
              ClientFlow System имеет смысл там, где уже есть продукт, аудитория и задача превратить разрозненный
              digital в понятный маршрут к заявке.
            </DdSub>
          </div>
          <SectionIndex n={9} />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.65fr_1fr] lg:gap-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {goodFit.map((item, index) => (
              <FitCard key={item.title} index={index + 1} title={item.title} description={item.description} />
            ))}
          </div>

          <FitFilterPanel label="Не подойдёт, если" items={notFit} />
        </div>

        <blockquote
          className="mt-8 rounded-[var(--dd-radius-md)] border-l-2 px-5 py-5 md:mt-10 md:px-7"
          style={{
            borderColor: "var(--dd-diagnostic-blue)",
            background: "rgba(14,22,34,.4)"
          }}
        >
          <p className="max-w-[960px] text-[15px] font-medium leading-[1.65] text-[var(--dd-text-primary)] md:text-base">
            Если не уверены, подходит ли вам такой формат, начните с Разбора системы или ClientFlow Аудита.
          </p>
        </blockquote>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryBtn href="#contacts" className="px-6 py-3 text-[14px]">
            Разбор системы
          </PrimaryBtn>
          <SecondaryBtn href="#audit" className="px-6 py-3 text-[14px]">
            ClientFlow Аудит
          </SecondaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
