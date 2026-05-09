const route = [
  ["01", "Сайт", "покупают отдельно, без маршрута"],
  ["02", "Трафик", "ведут в слабую точку входа"],
  ["03", "CRM", "подключают после потери заявок"],
  ["04", "Follow-up", "забывают вернуть к контакту"],
  ["05", "Аналитика", "не видят, где течёт воронка"],
  ["06", "Система", "всё остаётся разрозненным"]
] as const;

export function LossMapSection() {
  return (
    <section className="section section-tight loss-section">
      <div className="container">
        <div className="section-eyebrow">Карта потерь клиента</div>
        <h2 className="section-title">Бизнес покупает сайт, потом отдельно рекламу, потом отдельно CRM — а клиенты всё равно теряются между касаниями.</h2>
        <p className="section-text">
          Проблема не в одном инструменте. Проблема в маршруте. Если оффер, сайт, трафик, заявка и follow-up не связаны, клиент выпадает между касаниями.
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
