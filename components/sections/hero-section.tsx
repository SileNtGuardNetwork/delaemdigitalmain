import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const routeItems = ["Оффер", "Сайт / Квиз", "Трафик", "Заявка"];

export function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="hero-scene" aria-hidden="true" />
      <div className="container hero-shell">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="status-dot" />
            Виталий Тимошенко · CEO Делаем Диджитал
          </div>
          <h1 className="hero-title" aria-label="Собираю бизнесу управляемую систему привлечения клиентов">
            Собираю бизнесу <span className="hero-accent">управляемую систему</span> привлечения клиентов
          </h1>
          <p className="hero-subtitle">
            Для владельцев бизнеса и экспертов, которым нужен понятный маршрут от первого касания до заявки.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacts" data-analytics-event="cta_primary_click" data-analytics-label="hero_primary" data-analytics-value="#contacts">Разбор системы</a>
            <a className="button button-secondary" href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_channel_click" data-analytics-label="hero_telegram_channel" data-analytics-value={siteConfig.telegramChannelUrl}>Telegram-канал</a>
          </div>

          <div className="hero-route" aria-label="Маршрут ClientFlow Аудита">
            <div className="hero-route-title">ClientFlow Аудит</div>
            <div className="hero-route-items">
              {routeItems.map((item, index) => (
                <div className="hero-route-part" key={item}>
                  <span>{item}</span>
                  {index < routeItems.length - 1 && <i aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-stage">
          <figure className="hero-founder" aria-label="Портрет Виталия Тимошенко">
            <div className="hero-scene-line hero-scene-line-top" aria-hidden="true" />
            <div className="hero-scene-line hero-scene-line-right" aria-hidden="true" />
            <div className="hero-photo-aura" aria-hidden="true" />
            <Image
              src="/images/vitaly-hero-dark.webp"
              alt="Виталий Тимошенко, основатель Делаем Диджитал"
              width={960}
              height={1200}
              sizes="(max-width: 640px) 100vw, (max-width: 980px) 520px, (max-width: 1180px) 50vw, 572px"
              priority
            />
            <div className="hero-photo-fade" aria-hidden="true" />
          </figure>
        </div>
      </div>
    </section>
  );
}
