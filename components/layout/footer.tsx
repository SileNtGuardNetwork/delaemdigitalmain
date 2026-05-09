import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="wordmark">Делаем Диджитал</div>
          <small>
            © {new Date().getFullYear()} {siteConfig.operator.legalName}. ИНН {siteConfig.operator.inn}. ОГРНИП {siteConfig.operator.ogrnip}.
          </small>
        </div>
        <div className="footer-links">
          <a href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_channel_click" data-analytics-label="footer_telegram_channel" data-analytics-value={siteConfig.telegramChannelUrl}>Telegram-канал</a>
          <a href={siteConfig.telegramContactUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_contact_click" data-analytics-label="footer_telegram_contact" data-analytics-value={siteConfig.telegramContactUrl}>Связаться</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href="/cases" data-analytics-event="cta_secondary_click" data-analytics-label="footer_cases" data-analytics-value="/cases">Кейсы</a>
          <a href="/articles" data-analytics-event="cta_secondary_click" data-analytics-label="footer_articles" data-analytics-value="/articles">Статьи</a>
          <a href="/privacy" data-analytics-event="legal_link_click" data-analytics-label="footer_privacy" data-analytics-value="/privacy">Политика</a>
          <a href="/consent" data-analytics-event="legal_link_click" data-analytics-label="footer_consent" data-analytics-value="/consent">Согласие</a>
          <a href="/cookies" data-analytics-event="legal_link_click" data-analytics-label="footer_cookies" data-analytics-value="/cookies">Cookie</a>
        </div>
      </div>
    </footer>
  );
}
