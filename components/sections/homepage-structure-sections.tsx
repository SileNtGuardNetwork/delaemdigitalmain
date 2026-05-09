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
    <section className="section section-graphite assembly-section">
      <div className="container">
        <div className="section-eyebrow">Что собирается</div>
        <h2 className="section-title">В систему входят все точки, где клиент принимает решение</h2>
        <p className="section-text">
          Не нужно усиливать каждый инструмент отдельно. Важно собрать маршрут, где сайт, трафик, Telegram, AI, CRM, аналитика и follow-up работают как одна цепочка.
        </p>
        <div className="assembly-grid">
          {assemblyModules.map(([index, title, text]) => (
            <article className="assembly-card" key={title}>
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
    <section className="section services-section">
      <div className="container">
        <div className="section-eyebrow">Продукты и услуги</div>
        <h2 className="section-title">Можно начать с одного модуля или собрать маршрут целиком</h2>
        <div className="service-track-grid">
          {serviceTracks.map((item) => (
            <article className="service-track card" key={item.title}>
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
    <section className="section section-tight process-section">
      <div className="container">
        <div className="section-eyebrow">Процесс</div>
        <h2 className="section-title">Работа идёт как сборка архитектуры, а не как хаотичный список задач</h2>
        <div className="process-map">
          {processSteps.map(([index, title, text]) => (
            <article className="process-step" key={title}>
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
    <section className="section why-section">
      <div className="container">
        <div className="why-layout card">
          <div>
            <div className="section-eyebrow">Почему это работает</div>
            <h2 className="section-title">Клиенту нужен не набор инструментов, а непрерывный маршрут</h2>
          </div>
          <div className="why-points">
            <div className="why-contrast">
              <span>Инструменты отдельно</span>
              <p>Сайт, реклама, CRM и контент спорят за внимание и не отвечают за общий результат.</p>
            </div>
            <div className="why-contrast positive">
              <span>Один маршрут</span>
              <p>ClientFlow System связывает касания: человек понимает ценность, видит следующий шаг, оставляет заявку и не теряется после первого контакта.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="section section-graphite audience-section">
      <div className="container">
        <div className="section-eyebrow">Кому подходит</div>
        <h2 className="section-title">Для тех, кому нужна управляемая система, а не разовые digital-работы</h2>
        <div className="audience-grid">
          {audienceCards.map(([title, text]) => (
            <article className="audience-card" key={title}>
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
    <section className="section founder-section">
      <div className="container">
        <div className="founder-panel card">
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
            <div className="section-eyebrow">Founder / approach</div>
            <h2 className="section-title">Виталий Тимошенко — digital-архитектор, который собирает маршрут клиента</h2>
          </div>
          <div>
            <p>
              Я смотрю на digital не как на набор подрядчиков и задач, а как на систему управления вниманием, доверием и заявками.
            </p>
            <p>
              Поэтому в работе важны не только дизайн, реклама или автоматизация, а связка между ними: что человек видит, куда движется и почему доходит до контакта.
            </p>
            <div className="founder-signature">Виталий Тимошенко · digital-архитектор</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section section-tight faq-section">
      <div className="container">
        <div className="section-eyebrow">FAQ</div>
        <h2 className="section-title">Коротко о формате работы</h2>
        <div className="faq-list">
          {faqItems.map(([question, answer]) => (
            <details className="faq-item card" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
