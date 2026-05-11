import { pricing } from "@/lib/pricing";

export function PricingSection() {
  return (
    <section id="pricing" className="section pricing-section d1-section d1-pricing-section">
      <div className="container">
        <div className="section-eyebrow">Продукты</div>
        <h2 className="section-title">Коммерческие форматы ClientFlow</h2>
        <p className="section-text">
          Ниже — конкретные форматы работы после выбора масштаба задачи.
        </p>
        <div className="pricing-grid">
          {pricing.map((item) => (
            <article className={`price-card card d1-price-card ${item.recommended ? "featured d1-recommended" : ""}`} key={item.title}>
              <div className="price-badge">{item.path}</div>
              <h3>{item.title}</h3>
              <div className="price">{item.price}</div>
              <p>{item.description}</p>
              <ul>
                {item.items.map((line) => <li key={line}>{line}</li>)}
              </ul>
              <a
                className="button button-primary"
                href={`?service=${item.intent}&source=pricing#contacts`}
                data-analytics-event="pricing_cta_click"
                data-analytics-label={item.title}
                data-analytics-value={item.price}
                data-analytics-intent={item.intent}
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
