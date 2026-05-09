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
          <a href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer">Telegram-канал</a>
          <a href={siteConfig.telegramContactUrl} target="_blank" rel="noreferrer">Связаться</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href="/privacy">Политика</a>
          <a href="/consent">Согласие</a>
          <a href="/cookies">Cookie</a>
        </div>
      </div>
    </footer>
  );
}
