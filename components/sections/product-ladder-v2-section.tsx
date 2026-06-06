import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  PrimaryBtn,
  ProductLadderCard,
  SecondaryBtn,
  SectionFrame
} from "@/components/sections/dd-ui";
import { pricing } from "@/lib/pricing";

const ladderOrder = ["delaem-site", "delaem-traffic", "delaem-system"] as const;

const meta = {
  "delaem-site": {
    level: "Уровень 01",
    outcome: "Сильная упаковка, доверие, структура и первый вход в заявки.",
    fit: "Когда нужен сильный сайт и понятный маршрут к первому обращению.",
    cta: "Обсудить сайт",
    href: "?service=delaem-site&source=products#contacts"
  },
  "delaem-traffic": {
    level: "Уровень 02",
    outcome:
      "Сайт и маршрут для входящего потока — реклама ведёт в подготовленную систему, а не просто на страницу.",
    fit: "Когда нужен поток обращений и связка с обработкой.",
    cta: "Разобрать трафик",
    href: "?service=delaem-traffic&source=products#contacts"
  },
  "delaem-system": {
    level: "Уровень 03",
    outcome: "Полный контур: оффер, сайт, заявки, AI/Telegram/CRM, аналитика и улучшения.",
    fit: "Когда выручка зависит от управляемой системы привлечения под ключ.",
    cta: "Собрать систему",
    href: "?service=delaem-system&source=products#contacts"
  }
} as const;

export function ProductLadderV2Section() {
  const products = ladderOrder.map((intent) => {
    const product = pricing.find((p) => p.intent === intent)!;
    const m = meta[intent];
    return {
      level: m.level,
      title: product.title,
      price: product.price,
      outcome: m.outcome,
      includes: product.items.slice(0, 4),
      fit: m.fit,
      cta: m.cta,
      href: m.href,
      featured: product.recommended
    };
  });

  return (
    <SectionFrame id="products" bg="#05070A" fadeTo="#080C12" className="min-h-0">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[760px] flex-col gap-5">
          <KickerLine>Продукты Делаем Диджитал</KickerLine>
          <DdH2>Можно начать с сайта, трафика или полной системы.</DdH2>
          <DdSub>
            Подбираем уровень под задачу: от сильного сайта до связанного контура привлечения клиентов с заявками,
            Telegram/CRM, AI и аналитикой.
          </DdSub>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <ProductLadderCard
              key={product.title}
              level={product.level}
              title={product.title}
              price={product.price}
              outcome={product.outcome}
              includes={product.includes}
              fit={product.fit}
              cta={product.cta}
              href={product.href}
              featured={product.featured}
              ctaVariant={product.featured ? "primary" : "secondary"}
              analyticsLabel={product.title}
              analyticsValue={product.price}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <PrimaryBtn
            href="#contacts"
            className="px-7 py-3.5 text-[15px]"
            data-analytics-event="cta_primary_click"
            data-analytics-label="products_primary_cta"
            data-analytics-value="#contacts"
          >
            Разбор системы
          </PrimaryBtn>
          <SecondaryBtn
            href="#process"
            className="px-6 py-3 text-[14px]"
            data-analytics-event="cta_secondary_click"
            data-analytics-label="products_how_to_choose"
            data-analytics-value="#process"
          >
            Как выбрать продукт?
          </SecondaryBtn>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
