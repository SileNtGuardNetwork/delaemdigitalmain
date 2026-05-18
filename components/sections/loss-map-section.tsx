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
        <div className="loss-route" role="list">
          {route.map(([index, title, loss]) => (
            <div className="loss-route-step route-card d1-route-card" key={title} role="listitem">
              <span className="loss-route-dot" aria-hidden="true" />
              <div className="loss-route-body">
                <span className="route-index">{index}</span>
                <span className="route-title">{title}</span>
                <span className="route-loss">Утечка: {loss}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
