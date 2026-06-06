import {
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  ProductLadderCard,
  SectionFrame
} from "@/components/sections/dd-ui";
import { pricing } from "@/lib/pricing";

const ladderOrder = ["delaem-site", "delaem-traffic", "delaem-system"] as const;

const meta = {
  "delaem-site": {
    level: "Уровень 01",
    outcome: "Premium-посадочная под рекламу: доверие, заявка, готовность к трафику.",
    fit: "Когда нужен сильный сайт и первый управляемый маршрут к заявке.",
    cta: "Обсудить сайт",
    href: "?service=delaem-site&source=products#contacts"
  },
  "delaem-traffic": {
    level: "Уровень 02",
    outcome: "Запуск заявок: рекламный вход, квалификация и передача в рабочий канал.",
    fit: "Когда нужен поток обращений, а не только красивая страница.",
    cta: "Разобрать трафик",
    href: "?service=delaem-traffic&source=products#contacts"
  },
  "delaem-system": {
    level: "Уровень 03",
    outcome: "Полный контур под ключ: сайт, AI, Telegram, аналитика и цикл улучшений.",
    fit: "Когда выручка зависит от управляемой системы привлечения.",
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
        <div className="mb-10 flex max-w-[720px] flex-col gap-5">
          <KickerLine>Продукты</KickerLine>
          <DdH2>Три уровня входа — от сайта до системы под ключ</DdH2>
          <DdSub>Цены и состав — из актуального прайса. Без скрытых доплат на старте разговора.</DdSub>
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
      </FlagshipContainer>
    </SectionFrame>
  );
}
