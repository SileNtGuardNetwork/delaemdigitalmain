const benefits = [
  ["01", "Карта текущего маршрута клиента"],
  ["02", "Точки потерь заявок"],
  ["03", "Приоритеты усиления"],
  ["04", "Следующий шаг для роста системы"]
] as const;

const routeNodes = ["Первый контакт", "Квалификация", "Доверие", "Заявка"] as const;

export function AuditSection() {
  return (
    <section id="audit" className="section section-tight audit-section">
      <div className="container">
        <div className="audit-card card">
          <div>
            <div className="section-eyebrow">ClientFlow Аудит</div>
            <h2 className="section-title">Начните с ClientFlow Аудита</h2>
            <p className="section-text">
              Покажу, где ваша система теряет клиентов и какие точки нужно усилить в первую очередь.
            </p>
            <div className="audit-outcome">На выходе: карта потерь, приоритеты и следующий шаг без лишней теории.</div>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacts">Пройти ClientFlow Аудит →</a>
            </div>
          </div>
          <div className="audit-steps">
            <div className="audit-interface-head">
              <span>ClientFlow Audit</span>
              <strong>диагностика маршрута</strong>
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
