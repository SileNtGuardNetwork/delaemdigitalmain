const modules = [
  ["01", "Позиционирование", "объясняет, почему выбирают вас"],
  ["02", "Сайт", "ведёт человека к заявке"],
  ["03", "Трафик", "приводит нужные касания"],
  ["04", "Telegram", "удерживает внимание"],
  ["05", "AI-воронка", "ускоряет диагностику"],
  ["06", "CRM", "не теряет обращения"],
  ["07", "Аналитика", "показывает узкие места"],
  ["08", "Follow-up", "возвращает клиента к решению"]
] as const;

export function ClientFlowSystemSection() {
  return (
    <section id="system" className="section system-section">
      <div className="container">
        <div className="section-eyebrow">Система</div>
        <h2 className="section-title">ClientFlow System собирает digital-инструменты в управляемый маршрут</h2>
        <p className="section-text">
          Сайт, трафик, контент, Telegram, AI, CRM и продажи должны работать не отдельно, а как единая система движения клиента к заявке.
        </p>

        <div className="system-layout">
          <div className="system-core card">
            <div>
              <div className="system-node-label">ClientFlow Core</div>
              <h3>Не набор инструментов. <span className="gradient-text">Маршрут.</span></h3>
              <p>
                ClientFlow System связывает точки контакта в логику: что человек видит, чему верит, куда нажимает, как оставляет заявку и почему возвращается после первого касания.
              </p>
            </div>
            <a className="button button-primary" href="#audit" data-analytics-event="cta_primary_click" data-analytics-label="system_start_audit" data-analytics-value="#audit">Начать с аудита →</a>
          </div>
          <div className="module-grid">
            <div className="system-center-node" aria-hidden="true">
              <strong>ClientFlow</strong>
              <span>System</span>
            </div>
            {modules.map(([index, title, text]) => (
              <div className="module-card" key={title}>
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
