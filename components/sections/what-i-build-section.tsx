import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  SecondaryBtn,
  SectionFrame
} from "@/components/sections/dd-ui";

const buildCards = [
  {
    category: "Сайт",
    title: "Сайт, который продаёт доверие",
    description:
      "Структура, тексты и визуальный уровень помогают человеку быстро понять, почему вам можно доверять и какой следующий шаг сделать."
  },
  {
    category: "Заявки",
    title: "Маршрут, где заявки не теряются",
    description:
      "Формы, квизы, Telegram/CRM и уведомления связываются так, чтобы обращение попадало в обработку, а не растворялось между сервисами."
  },
  {
    category: "Система",
    title: "Контур, которым можно управлять",
    description:
      "Аналитика, события и точки контроля показывают, где усиливать сайт, оффер, трафик или обработку заявок."
  }
] as const;

export function WhatIBuildSection() {
  return (
    <SectionFrame id="build" bg="#080C12" fadeTo="#080C12" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[760px] flex-col gap-5">
          <KickerLine>Что собираем</KickerLine>
          <DdH2>Не просто сайт. Систему, которая доводит человека до заявки.</DdH2>
          <DdSub>
            Сайт — только один из элементов. Мы соединяем оффер, визуальную упаковку, форму, Telegram/CRM,
            AI-квалификацию и аналитику в маршрут, который можно проверять и улучшать.
          </DdSub>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {buildCards.map((item, index) => (
            <article
              key={item.title}
              className="flex min-w-0 flex-col gap-3 rounded-[14px] border border-[var(--dd-border-cool)] p-5 transition-[border-color] duration-200 hover:border-[rgba(95,142,216,0.32)] md:p-6"
              style={{ background: "rgba(8,12,18,.55)" }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-steel-blue)]">
                  {item.category}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-[var(--dd-diagnostic-blue)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-[17px] font-bold leading-[1.25] tracking-[-0.02em] text-[var(--dd-text-primary)]">
                {item.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.65] text-[var(--dd-text-secondary)]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <SecondaryBtn
            href="#products"
            className="px-6 py-3 text-[14px]"
            data-analytics-event="cta_secondary_click"
            data-analytics-label="build_view_products"
            data-analytics-value="#products"
          >
            Посмотреть продукты
          </SecondaryBtn>
          <a
            href="#why"
            className="text-[14px] font-semibold text-[var(--dd-diagnostic-blue)] no-underline transition-colors hover:text-[var(--dd-text-primary)]"
            data-analytics-event="cta_secondary_click"
            data-analytics-label="build_how_system_works"
            data-analytics-value="#why"
          >
            Как работает система →
          </a>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
