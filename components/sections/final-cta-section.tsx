import { ContactForm } from "@/components/ui-custom/contact-form";
import { siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <section id="contacts" className="section final-cta-section d1-section d1-final-section">
      <div className="container">
        <div className="section-eyebrow">Контакты</div>
        <h2 className="section-title">Оставьте контакт — покажу, что вам нужно: сайт, трафик или система</h2>
        <p className="section-text">
          Оставьте заявку — покажу, что усиливать первым.
        </p>
        <div className="contact-grid">
          <aside className="contact-aside card d1-contact-aside">
            <div className="contact-aside-label">Next step</div>
            <h3>Короткий маршрут диагностики</h3>
            <p>Вы оставляете заявку. Я смотрю текущий маршрут привлечения и показываю, что даст самый быстрый управляемый эффект.</p>
            <div className="contact-route" aria-label="Маршрут заявки">
              <span>Заявка</span>
              <span>Аудит</span>
              <span>Решение</span>
            </div>
            <div className="contact-links">
              <a className="contact-link" href={siteConfig.telegramContactUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_contact_click" data-analytics-label="final_cta_telegram_contact" data-analytics-value={siteConfig.telegramContactUrl}>Telegram: @vitalycreator</a>
              <a className="contact-link" href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_channel_click" data-analytics-label="final_cta_telegram_channel" data-analytics-value={siteConfig.telegramChannelUrl}>Канал: @delaemdigital</a>
              <a className="contact-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </aside>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
