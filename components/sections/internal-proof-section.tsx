import {
  DdEyebrow,
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  SecondaryBtn,
  SectionFrame
} from "@/components/sections/dd-ui";

const proofItems = [
  {
    title: "Делаем Диджитал",
    description: "Этот сайт — живой пример: founder-led offer, продуктовая лестница, диагностика и сборка под заявки."
  },
  {
    title: "Build in public",
    description: "Показываем процесс и артефакты — не обещания на слайдах. Кейсы и подход — в открытом доступе."
  }
] as const;

export function InternalProofSection() {
  return (
    <SectionFrame id="proof" bg="#080C12" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[720px] flex-col gap-5">
          <KickerLine>Доказательство</KickerLine>
          <DdH2>Сначала собираем систему для себя — потом для клиентов</DdH2>
          <DdSub>
            Не продаём то, чего нет. Собственный сайт, продукты и процесс — тот же стандарт, что предлагаем бизнесу.
          </DdSub>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {proofItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 rounded-[var(--dd-radius-md)] border border-[var(--dd-border-cool)] p-6"
              style={{ background: "rgba(14,22,34,.45)" }}
            >
              <DdEyebrow tone="steel">{item.title}</DdEyebrow>
              <p className="text-[14px] leading-[1.6] text-[var(--dd-text-secondary)]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <SecondaryBtn href="/cases" className="px-6 py-3 text-[14px]">
            Смотреть кейсы
          </SecondaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
