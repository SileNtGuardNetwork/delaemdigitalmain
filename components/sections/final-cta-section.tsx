import { ContactForm } from "@/components/ui-custom/contact-form";
import { siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <section id="contacts" className="section final-cta-section">
      <div className="container">
        <div className="section-eyebrow">Контакты</div>
        <h2 className="section-title">Оставьте контакт — я посмотрю, что вам нужно: сайт, трафик или система</h2>
        <p className="section-text">
          Оставьте заявку — посмотрю ваш текущий маршрут привлечения и подскажу, с чего логичнее начать.
        </p>
        <div className="contact-grid">
          <aside className="contact-aside card">
            <h3>Короткий маршрут</h3>
            <p>
              Вы оставляете заявку, я смотрю сайт/соцсеть и текущую систему касаний. Дальше — короткий разбор и понятный следующий шаг.
            </p>
            <div className="contact-route" aria-label="Маршрут заявки">
              <span>Заявка</span>
              <span>Аудит</span>
              <span>Формат</span>
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
