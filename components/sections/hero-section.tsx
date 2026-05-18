import { siteConfig } from "@/lib/site-config";

const flowSignals = ["Разбор", "Система", "Запуск", "Результат"] as const;

export function HeroSection() {
  return (
    <section
      id="top"
      className="hero"
      style={{
        backgroundImage: "url('/images/vitaly-hero-cinematic.webp')"
      }}
    >
      <div className="container hero-shell">
        <div className="hero-copy">
          <div className="hero-kicker">
            9 лет в digital · 140+ проектов · команда 5 человек
          </div>
          <h1 className="hero-title" aria-label="Собираю бизнесу управляемую систему привлечения клиентов">
            Собираю бизнесу<br />
            <span className="hero-accent">управляемую систему</span><br />
            привлечения клиентов
          </h1>
          <p className="hero-subtitle">
            Для владельцев бизнеса и экспертов, которые тратят бюджет
            <br />
            на рекламу — но заявки не превращаются в деньги.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacts" data-analytics-event="cta_primary_click" data-analytics-label="hero_primary" data-analytics-value="#contacts">Получить бесплатный разбор ↗</a>
            <a className="button button-secondary" href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_channel_click" data-analytics-label="hero_telegram_channel" data-analytics-value={siteConfig.telegramChannelUrl}>Telegram-канал</a>
          </div>
          <div className="hero-proof-row">
            <div className="hero-proof-item">
              <span className="hero-proof-num">140+</span>
              <span className="hero-proof-txt">проектов</span>
            </div>
            <div className="hero-proof-divider" />
            <div className="hero-proof-item">
              <span className="hero-proof-num">9 лет</span>
              <span className="hero-proof-txt">в digital</span>
            </div>
            <div className="hero-proof-divider" />
            <div className="hero-proof-item">
              <span className="hero-proof-num">5</span>
              <span className="hero-proof-txt">человек команда</span>
            </div>
          </div>
          <div className="hero-flow" aria-label="Маршрут ClientFlow: разбор, система, запуск, результат">
            {flowSignals.flatMap((signal, index) => {
              const item = (
                <div className="hero-flow-item" key={signal}>
                  <span className={`hero-flow-dot${index === 0 ? " active" : ""}`} aria-hidden="true" />
                  <span>{signal}</span>
                </div>
              );

              if (index === 0) {
                return [item];
              }

              return [
                <div key={`line-${signal}`} className="hero-flow-line" aria-hidden="true" />,
                item
              ];
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
