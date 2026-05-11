const modules = [
  ["01", "Вход", "платный трафик и первое касание"],
  ["02", "Оффер", "ценность, сегмент и причина оставить заявку"],
  ["03", "Страница / квиз", "посадочная архитектура под рекламу"],
  ["04", "Трафик", "проверяет оффер на нужной аудитории"],
  ["05", "AI-квалификация", "контекст, потребность и приоритет лида"],
  ["06", "CRM / Telegram", "быстрая передача в рабочий канал"],
  ["07", "Follow-up", "возврат к решению после первого контакта"],
  ["08", "Аналитика", "решения по данным, а не по ощущениям"]
] as const;

export function ClientFlowSystemSection() {
  return (
    <section id="system" className="section system-section d1-section d1-system-section">
      <div className="container">
        <div className="section-eyebrow">Система</div>
        <h2 className="section-title">ClientFlow System собирает маршрут заявки под платный трафик</h2>
        <p className="section-text">
          От рекламного входа до заявки, передачи в рабочий канал, прогрева и решений по аналитике.
        </p>
        <div className="system-route-kicker">
          <span className="status-dot" />
          Input → Offer → Site / Quiz → Traffic → Qualification → CRM / Telegram → Follow-up → Analytics
        </div>

        <div className="system-layout">
          <div className="system-core card d1-system-core">
            <div>
              <div className="system-node-label">ClientFlow Core</div>
              <h3>Не набор инструментов. <span className="gradient-text">Маршрут.</span></h3>
              <p>
                Система задаёт последовательность решений: что человек видит, чему верит, когда оставляет заявку и как команда возвращает его к разговору.
              </p>
            </div>
            <a className="button button-primary" href="#audit" data-analytics-event="cta_primary_click" data-analytics-label="system_start_audit" data-analytics-value="#audit">Начать с аудита →</a>
          </div>
          <div className="module-grid d1-architecture-route" aria-label="Архитектура ClientFlow System">
            <div className="system-center-node" aria-hidden="true">
              <strong>ClientFlow</strong>
              <span>System</span>
            </div>
            {modules.map(([index, title, text]) => (
              <div className="module-card d1-stage-card" key={title}>
                <span>{index}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
