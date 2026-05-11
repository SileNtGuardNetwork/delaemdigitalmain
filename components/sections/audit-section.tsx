const benefits = [
  ["Маршрут", "где клиент выходит из цепочки"],
  ["Сигналы", "какие данные нужны до запуска"],
  ["Приоритет", "что усилит заявки быстрее"],
  ["Формат", "сайт, трафик или полная система"]
] as const;

const routeNodes = ["Вход", "Оффер", "Квиз", "Заявка", "Дожим"] as const;

export function AuditSection() {
  return (
    <section id="audit" className="section section-tight audit-section d1-section d1-audit-section">
      <div className="container">
        <div className="audit-card card d1-audit-card">
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
          <div className="audit-steps d1-diagnostic-panel">
            <div className="audit-interface-head">
              <span>ClientFlow Audit</span>
              <strong>assessment mode</strong>
            </div>
            <div className="audit-status-grid" aria-label="Статус диагностики">
              <div>
                <span>Вход</span>
                <strong>под трафик</strong>
              </div>
              <div>
                <span>Фокус</span>
                <strong>заявка</strong>
              </div>
              <div>
                <span>Выход</span>
                <strong>план усиления</strong>
              </div>
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
