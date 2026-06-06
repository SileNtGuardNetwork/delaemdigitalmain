import {
  DdEyebrow,
  DdH2,
  DdSub,
  FlagshipContainer,
  KickerLine,
  ProductLadderCard,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";
import { pricing } from "@/lib/pricing";

const ladderMeta = {
  "delaem-site": {
    level: "Уровень 01",
    outcome:
      "Премиальный сайт как точка доверия, захват заявки и аналитическая база — готовность к первому трафику.",
    fit: "Когда нужна посадочная под рекламу и понятный маршрут от первого касания до заявки.",
    cta: "Обсудить сайт",
    href: "?service=delaem-site&source=services#contacts"
  },
  "delaem-traffic": {
    level: "Уровень 02",
    outcome:
      "Сайт + рекламный маршрут + отслеживание источников + готовность потока заявок к обработке.",
    fit: "Когда нужен предсказуемый входящий поток и связка трафик → сайт → CRM.",
    cta: "Разобрать трафик",
    href: "?service=delaem-traffic&source=services#contacts"
  },
  "delaem-system": {
    level: "Уровень 03 · ClientFlow",
    outcome:
      "Полная ClientFlow System: стратегия, сайт, трафик, Telegram/CRM, AI-квалификация, аналитика и цикл улучшения.",
    fit: "Когда выручка зависит от управляемой системы привлечения клиентов целиком.",
    cta: "Собрать систему",
    href: "?service=delaem-system&source=services#contacts"
  }
} as const;

const ladderOrder = ["delaem-site", "delaem-traffic", "delaem-system"] as const;

export function ServicesSection() {
  const products = ladderOrder.map((intent) => {
    const product = pricing.find((p) => p.intent === intent)!;
    const meta = ladderMeta[intent];
    const maxIncludes = intent === "delaem-system" ? 5 : 4;

    return {
      intent,
      title: product.title,
      price: product.price,
      outcome: meta.outcome,
      includes: product.items.slice(0, maxIncludes),
      fit: meta.fit,
      cta: meta.cta,
      href: meta.href,
      level: meta.level,
      featured: product.recommended
    };
  });

  return (
    <SectionFrame id="services" bg="#080C12" className="min-h-0 md:min-h-[880px]">
      <FlagshipContainer className="py-20 md:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex max-w-[820px] flex-col gap-5">
            <KickerLine>Продукты Делаем Диджитал · § 06</KickerLine>
            <DdH2>
              Выберите уровень, с которого нужно собрать вашу{" "}
              <span className="text-[var(--dd-diagnostic-blue)]">ClientFlow System</span>
            </DdH2>
            <DdSub className="max-w-[640px]">
              Можно начать с сайта, усилить входящий поток через трафик или собрать полную систему привлечения
              клиентов под ключ.
            </DdSub>
          </div>
          <SectionIndex n={6} />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {products.map((product) => (
            <ProductLadderCard
              key={product.intent}
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

        <div
          className="mt-8 flex flex-col gap-3 rounded-[var(--dd-radius-md)] border border-[var(--dd-border-cool)] p-5 md:mt-10 md:flex-row md:items-center md:justify-between md:p-6"
          style={{ background: "rgba(14,22,34,.4)" }}
        >
          <p className="max-w-[720px] text-[14px] leading-[1.6] text-[var(--dd-text-secondary)]">
            Если не знаете, с чего начать — начните с{" "}
            <a href="#contacts" className="font-medium text-[var(--dd-text-primary)] underline-offset-2 hover:underline">
              разбора системы
            </a>{" "}
            или{" "}
            <a href="#audit" className="font-medium text-[var(--dd-text-primary)] underline-offset-2 hover:underline">
              ClientFlow Аудита
            </a>
            .
          </p>
          <DdEyebrow tone="steel">Три уровня · один маршрут</DdEyebrow>
        </div>
      </FlagshipContainer>
    </SectionFrame>
  );
}
