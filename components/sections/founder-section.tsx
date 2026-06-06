import Image from "next/image";
import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  PrimaryBtn,
  SectionFrame
} from "@/components/sections/dd-ui";

const responsibilityBlocks = [
  "Основатель Делаем Диджитал",
  "Digital-архитектор",
  "Собирает сайты, ботов, AI-инструменты и системы привлечения клиентов",
  "Отвечает за стратегию, визуальный уровень и связку продукта с обработкой заявок"
] as const;

export function FounderSection() {
  return (
    <SectionFrame id="founder" bg="#080C12" fadeTo="#05070A" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,42%)_1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-[14px] border border-[var(--dd-border-cool)] bg-[#0b0e14] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full max-h-[520px] lg:max-h-[600px]">
              <Image
                src="/images/vitaly-founder-light.webp"
                alt="Виталий Тимошенко — основатель Делаем Диджитал"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 40vw"
                priority={false}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,12,18,.12) 0%, rgba(8,12,18,0) 35%, rgba(8,12,18,.5) 100%)"
                }}
                aria-hidden
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-7 md:gap-8">
            <div className="flex max-w-[640px] flex-col gap-5">
              <KickerLine>Кто отвечает за систему</KickerLine>
              <DdH2>За архитектуру и результат отвечает Виталий Тимошенко.</DdH2>
              <DdSub>
                Делаем Диджитал — это не потоковая сборка шаблонов. Каждый проект проходит через архитектуру оффера,
                визуальный уровень, техническую связку и проверку маршрута к заявке.
              </DdSub>
            </div>

            <ul className="m-0 grid max-w-[640px] list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
              {responsibilityBlocks.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-[12px] border border-[var(--dd-border-cool)] px-4 py-3.5"
                  style={{ background: "rgba(8,12,18,.55)" }}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] font-mono text-[11px] font-semibold text-[var(--dd-diagnostic-blue)]"
                    style={{
                      border: "1px solid rgba(95,142,216,.35)",
                      background: "rgba(95,142,216,0.08)"
                    }}
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-[1.5] text-[var(--dd-text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="m-0 max-w-[600px] border-l-2 border-[var(--dd-action-copper)] pl-5 text-[17px] font-medium leading-[1.45] tracking-[-0.01em] text-[var(--dd-text-primary)] md:text-[18px]">
              Я не продаю «просто сайт». Я смотрю, как человек попадает в вашу систему, где он теряет доверие, как
              оставляет заявку и что происходит после этого.
            </blockquote>

            <div>
              <PrimaryBtn
                href="#contacts"
                className="px-7 py-3.5 text-[15px]"
                data-analytics-event="cta_primary_click"
                data-analytics-label="founder_discuss_system"
                data-analytics-value="#contacts"
              >
                Обсудить систему
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
