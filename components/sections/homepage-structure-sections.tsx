import Image from "next/image";
import {
  assemblyModules,
  audienceCards,
  faqItems,
  processSteps,
  serviceTracks
} from "@/lib/homepage-content";

export function AssemblySection() {
  return (
    <section className="section section-graphite assembly-section d1-section d1-assembly-section">
      <div className="container">
        <div className="section-eyebrow">Что собирается</div>
        <h2 className="section-title">Собираются все точки, которые влияют на заявку</h2>
        <p className="section-text">
          Оффер, сайт/квиз, трафик, заявка, follow-up и аналитика получают одну логику: что усиливать сейчас и где система должна довести клиента до действия.
        </p>
        <div className="assembly-grid">
          {assemblyModules.map(([index, title, text]) => (
            <article className="assembly-card d1-line-card" key={title}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section services-section d1-section d1-services-section">
      <div className="container">
        <div className="section-eyebrow">Выбор масштаба</div>
        <h2 className="section-title">Сначала определяем масштаб задачи</h2>
        <p className="section-text">
          Сначала определяем масштаб: входная посадочная, запуск заявок или полная ClientFlow-система.
        </p>
        <div className="service-track-grid">
          {serviceTracks.map((item) => (
            <article className="service-track card d1-service-track" key={item.title}>
              <div className="track-label">{item.label}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section section-tight process-section d1-section d1-process-section">
      <div className="container">
        <div className="section-eyebrow">Процесс</div>
        <h2 className="section-title">Работа идёт как проектирование и запуск рабочей системы</h2>
        <div className="process-map">
          {processSteps.map(([index, title, text]) => (
            <article className="process-step d1-process-step" key={title}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyItWorksSection() {
  return (
    <section className="section why-section d1-section d1-why-section">
      <div className="container">
        <div className="why-layout card d1-editorial-panel">
          <div>
            <div className="section-eyebrow">Почему это работает</div>
            <h2 className="section-title">Клиенту нужен понятный путь к решению</h2>
          </div>
          <div className="why-points">
            <div className="why-contrast">
              <span>Инструменты отдельно</span>
              <p>Сайт, реклама, CRM и контент спорят за внимание.</p>
            </div>
            <div className="why-contrast positive">
              <span>Один маршрут</span>
              <p>ClientFlow System связывает касания в один путь к заявке.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="section section-graphite audience-section d1-section d1-audience-section">
      <div className="container">
        <div className="section-eyebrow">Кому подходит</div>
        <h2 className="section-title">Для тех, кому нужна управляемая система, а не разовые digital-работы</h2>
        <div className="audience-grid">
          {audienceCards.map(([title, text]) => (
            <article className="audience-card d1-line-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section className="section founder-section d1-section d1-founder-section">
      <div className="container">
        <div className="founder-panel card d1-founder-panel">
          <div className="founder-photo">
            <Image
              src="/images/vitaly-founder-light.webp"
              alt="Виталий Тимошенко"
              width={720}
              height={900}
              sizes="(max-width: 640px) 240px, (max-width: 980px) 45vw, 280px"
            />
          </div>
          <div>
            <div className="section-eyebrow">Founder / CEO</div>
            <h2 className="section-title">Виталий Тимошенко — CEO «Делаем Диджитал» и архитектор ClientFlow System</h2>
          </div>
          <div>
            <p>Я проектирую маршруты, где сайт, трафик и заявки работают как одна система.</p>
            <p>Telegram-канал: <a href="https://t.me/delaemdigital" target="_blank" rel="noreferrer" data-analytics-event="telegram_channel_click" data-analytics-label="founder_telegram_channel" data-analytics-value="https://t.me/delaemdigital">@delaemdigital</a>.</p>
            <div className="founder-signature">Виталий Тимошенко · CEO · ClientFlow архитектор</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section section-tight faq-section d1-section d1-faq-section">
      <div className="container">
        <div className="section-eyebrow">FAQ</div>
        <h2 className="section-title">Коротко о формате работы</h2>
        <div className="faq-list">
          {faqItems.map(([question, answer]) => (
            <details className="faq-item card d1-faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
