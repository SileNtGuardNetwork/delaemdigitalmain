import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  PrimaryBtn,
  SectionFrame
} from "@/components/sections/dd-ui";

const pillars = [
  {
    title: "Стратегия и оффер",
    description: "Понимаем, кому продаём, что обещаем и почему клиент должен выбрать вас."
  },
  {
    title: "Премиальный интерфейс",
    description: "Делаем сайт визуально сильным, быстрым и понятным — без шаблонного вида и лишнего шума."
  },
  {
    title: "AI, Telegram и CRM",
    description: "Связываем заявку с обработкой: уведомления, квалификация, данные о клиенте и следующий шаг."
  },
  {
    title: "Аналитика и улучшения",
    description: "Фиксируем события, заявки и слабые места, чтобы улучшать систему после запуска."
  }
] as const;

export function WhyItWorksSection() {
  return (
    <SectionFrame id="why" bg="#05070A" fadeTo="#080C12" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[760px] flex-col gap-5">
          <KickerLine>Почему это работает</KickerLine>
          <DdH2>Мы связываем дизайн, смысл, заявки и обработку в один маршрут.</DdH2>
          <DdSub>
            Красивый сайт сам по себе не гарантирует результат. Работает связка: понятный оффер, сильный первый экран,
            доверие, быстрый контакт, квалификация лида и данные для улучшений.
          </DdSub>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pillars.map((item, index) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-[14px] border border-[var(--dd-border-cool)] p-5 md:p-6"
              style={{ background: "rgba(8,12,18,.55)" }}
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(95,142,216,0.25)] font-mono text-[12px] font-semibold text-[var(--dd-diagnostic-blue)]"
                style={{ background: "rgba(95,142,216,0.08)" }}
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-[var(--dd-text-primary)]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-[var(--dd-text-secondary)]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-8 rounded-[14px] border border-[var(--dd-border-cool)] px-5 py-4 md:px-6 md:py-5"
          style={{ background: "rgba(14,22,34,.45)" }}
        >
          <p className="m-0 text-[15px] leading-[1.6] text-[var(--dd-text-secondary)]">
            Смысл не в том, чтобы добавить больше инструментов. Смысл — собрать их в управляемую последовательность.
          </p>
        </div>

        <div className="mt-8">
          <PrimaryBtn
            href="#contacts"
            className="px-7 py-3.5 text-[15px]"
            data-analytics-event="cta_primary_click"
            data-analytics-label="why_primary_cta"
            data-analytics-value="#contacts"
          >
            Разбор системы
          </PrimaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
