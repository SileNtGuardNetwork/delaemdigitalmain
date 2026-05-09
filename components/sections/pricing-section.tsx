import { pricing } from "@/lib/pricing";

export function PricingSection() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="section-eyebrow">Тарифы</div>
        <h2 className="section-title">Три уровня сборки системы привлечения клиентов</h2>
        <p className="section-text">
          Начать можно с сайта, усилить поток касаний трафиком или собрать систему целиком.
        </p>
        <div className="pricing-grid">
          {pricing.map((item) => (
            <article className={`price-card card ${item.title === "Делаем Систему" ? "featured" : ""}`} key={item.title}>
              {item.title === "Делаем Систему" && <div className="price-badge">Основной маршрут</div>}
              <h3>{item.title}</h3>
              <div className="price">{item.price}</div>
              <p>{item.description}</p>
              <ul>
                {item.items.map((line) => <li key={line}>{line}</li>)}
              </ul>
              <a
                className="button button-primary"
                href="#contacts"
                data-analytics-event="pricing_cta_click"
                data-analytics-label={item.title}
                data-analytics-value={item.price}
              >
                Обсудить
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
