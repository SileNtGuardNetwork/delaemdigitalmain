import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="hero-scene" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container hero-shell">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="status-dot" />
            Виталий Тимошенко · CEO «Делаем Диджитал» · Архитектор ClientFlow System
          </div>
          <h1 className="hero-title" aria-label="Собираю бизнесу управляемую систему привлечения клиентов">
            <span>Собираю бизнесу</span>
            <span><span className="highlight">управляемую систему</span></span>
            <span>привлечения клиентов</span>
          </h1>
          <p className="hero-subtitle">
            Сайт, трафик или полная система — под задачу бизнеса и текущую точку роста. Сайт · Трафик · Система.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacts" data-analytics-event="cta_primary_click" data-analytics-label="hero_primary" data-analytics-value="#contacts">Разбор системы →</a>
            <a className="button button-secondary" href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_channel_click" data-analytics-label="hero_telegram_channel" data-analytics-value={siteConfig.telegramChannelUrl}>Telegram-канал</a>
          </div>
          <div className="trust-grid" aria-label="Ключевые факты">
            <div className="trust-card card"><strong>8 лет</strong><span>в digital</span></div>
            <div className="trust-card card"><strong>140+</strong><span>проектов</span></div>
            <div className="trust-card card"><strong>5</strong><span>человек команда</span></div>
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-stage-field" aria-hidden="true" />
          <div className="hero-glass-rail" aria-hidden="true" />
          <div className="hero-route-rail" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <figure className="hero-founder">
            <Image
              src="/images/vitaly-hero-dark.webp"
              alt="Виталий Тимошенко, основатель Делаем Диджитал"
              width={960}
              height={1200}
              sizes="(max-width: 640px) 286px, (max-width: 980px) 460px, (max-width: 1180px) 50vw, 610px"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
