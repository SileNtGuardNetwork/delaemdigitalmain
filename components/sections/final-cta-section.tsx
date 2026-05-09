import { ContactForm } from "@/components/ui-custom/contact-form";
import { siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <section id="contacts" className="section final-cta-section">
      <div className="container">
        <div className="section-eyebrow">Контакты</div>
        <h2 className="section-title">Разберём, где ваша система теряет клиентов</h2>
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
              <span>Диагностика</span>
              <span>Следующий шаг</span>
            </div>
            <div className="contact-links">
              <a className="contact-link" href={siteConfig.telegramContactUrl} target="_blank" rel="noreferrer">Telegram: @vitalycreator</a>
              <a className="contact-link" href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer">Канал: @delaemdigital</a>
              <a className="contact-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </aside>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
