const route = [
  ["01", "Реклама", "не понял ценность"],
  ["02", "Сайт", "не увидел следующий шаг"],
  ["03", "Доверие", "не доверился"],
  ["04", "Заявка", "не оставил заявку"],
  ["05", "Ответ", "не получил быстрый ответ"],
  ["06", "Follow-up", "не вернулся после первого контакта"]
] as const;

export function LossMapSection() {
  return (
    <section className="section section-tight loss-section">
      <div className="container">
        <div className="section-eyebrow">Карта потерь клиента</div>
        <h2 className="section-title">Клиент редко теряется в одном месте. Чаще он выпадает между касаниями.</h2>
        <p className="section-text">
          Реклама, сайт, Telegram, контент и продажи могут работать отдельно. Но если между ними нет маршрута, заявки теряются до того, как бизнес успевает их обработать.
        </p>
        <div className="loss-grid">
          {route.map(([index, title, loss]) => (
            <div className="route-card card" key={title}>
              <div className="route-index">{index}</div>
              <div className="route-title">{title}</div>
              <div className="route-loss">Потеря: {loss}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
