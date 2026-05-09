const route = [
  ["01", "Сайт", "отдельно, без маршрута"],
  ["02", "Трафик", "ведут в слабую точку"],
  ["03", "CRM", "подключают поздно"],
  ["04", "Follow-up", "забывают вернуть"],
  ["05", "Система", "всё разрознено"]
] as const;

export function LossMapSection() {
  return (
    <section className="section section-tight loss-section">
      <div className="container">
        <div className="section-eyebrow">Карта потерь клиента</div>
        <h2 className="section-title">Клиенты теряются не в одном инструменте, а между касаниями.</h2>
        <p className="section-text">
          Проблема не в инструменте. Проблема в маршруте.
        </p>
        <div className="loss-grid">
          {route.map(([index, title, loss]) => (
            <div className="route-card card" key={title}>
              <div className="route-index">{index}</div>
              <div className="route-title">{title}</div>
              <div className="route-loss">Проблема: {loss}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
