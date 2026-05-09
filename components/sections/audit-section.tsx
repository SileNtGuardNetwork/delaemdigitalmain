const benefits = [
  ["01", "Что вам нужно сейчас"],
  ["02", "Где теряются заявки"],
  ["03", "Что усиливать первым"],
  ["04", "Следующий шаг без лишней теории"]
] as const;

const routeNodes = ["Первый контакт", "Квалификация", "Доверие", "Заявка"] as const;

export function AuditSection() {
  return (
    <section id="audit" className="section section-tight audit-section">
      <div className="container">
        <div className="audit-card card">
          <div>
            <div className="section-eyebrow">ClientFlow Аудит</div>
            <h2 className="section-title">Покажу, что нужно именно вам: сайт, трафик или полная система</h2>
            <p className="section-text">
              Покажу, где ваша система теряет клиентов и что даст самый быстрый управляемый эффект.
            </p>
            <div className="audit-outcome">На выходе: понятный формат — сайт, трафик или система.</div>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacts" data-analytics-event="cta_primary_click" data-analytics-label="audit_primary" data-analytics-value="#contacts">Пройти ClientFlow Аудит →</a>
            </div>
          </div>
          <div className="audit-steps">
            <div className="audit-interface-head">
              <span>ClientFlow Audit</span>
              <strong>первичный разбор</strong>
            </div>
            <div className="audit-route" aria-label="Маршрут диагностики">
              {routeNodes.map((node) => (
                <div className="audit-node" key={node}>
                  <span />
                  <p>{node}</p>
                </div>
              ))}
            </div>
            {benefits.map(([index, text]) => (
              <div className="audit-step" key={text}>
                <strong>{index}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
