const route = [
  ["01", "Первое касание", "интерес не попадает в ясный маршрут"],
  ["02", "Посадочная", "обещание не доводит до действия"],
  ["03", "Квалификация", "заявка приходит без контекста"],
  ["04", "Передача", "лид теряется между CRM и Telegram"],
  ["05", "Дожим", "нет управляемого возврата к решению"]
] as const;

export function LossMapSection() {
  return (
    <section className="section section-tight loss-section d1-section d1-loss-section">
      <div className="container">
        <div className="section-eyebrow">Карта потерь клиента</div>
        <h2 className="section-title">Клиенты теряются не в одном инструменте, а между касаниями.</h2>
        <p className="section-text">
          Проблема не в инструменте. Проблема в маршруте.
        </p>
        <div className="loss-grid">
          {route.map(([index, title, loss]) => (
            <div className="route-card d1-route-card" key={title}>
              <div className="route-index">{index}</div>
              <div className="route-marker" aria-hidden="true" />
              <div className="route-title">{title}</div>
              <div className="route-loss">Утечка: {loss}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
