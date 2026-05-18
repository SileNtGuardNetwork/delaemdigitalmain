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
        <div className="system-architecture">
          <div className="system-architecture-copy">
            <div className="section-eyebrow">Система</div>
            <h2 className="section-title">ClientFlow System собирает маршрут заявки под платный трафик</h2>
            <p className="section-text">
              От рекламного входа до заявки, передачи в рабочий канал, прогрева и решений по аналитике.
            </p>
            <div className="system-route-kicker">
              <span className="status-dot" />
              Input → Offer → Site / Quiz → Traffic → Qualification → CRM / Telegram → Follow-up → Analytics
            </div>
            <a className="button button-primary" href="#audit" data-analytics-event="cta_primary_click" data-analytics-label="system_start_audit" data-analytics-value="#audit">Начать с аудита →</a>
          </div>

          <div className="system-architecture-route" aria-label="Архитектура ClientFlow System">
            {modules.map(([index, title, text], stepIndex) => (
              <div className={`system-route-row${stepIndex === 0 ? " is-active" : ""}`} key={title}>
                <span className="system-route-marker" aria-hidden="true">
                  {stepIndex === 0 ? <span className="system-route-active-dot" /> : null}
                </span>
                <span className="system-route-index">{index}</span>
                <span className="system-route-title">{title}</span>
                <span className="system-route-separator" aria-hidden="true">·</span>
                <span className="system-route-desc">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
