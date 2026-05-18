// ========== HERO ==========

// SECTION 1 — Hero
// Founder photo right, H1 left, copper CTA, flow path dots, atmospheric rim light.

function Sec1Hero() {
  return (
    <DDFrame bg="#05070A" fadeTo="#080C12" style={{ height: 900 }}>
      {/* Ambient rim light — atmosphere blue radial */}
      <div className="dd-rim-light" style={{ right: -260, top: -220 }} />
      <div className="dd-rim-light" style={{ left: -340, bottom: -300, opacity: .6 }} />

      <DDNav />

      {/* Founder photo right column — absolute, masked left edge; subtle slow bg zoom */}
      <div className="dd-bg-zoom" style={{
        position: 'absolute', top: 0, right: 0, bottom: 0,
        width: '56%', overflow: 'hidden', zIndex: 1,
      }}>
        <img
          src={(typeof window !== 'undefined' && window.__resources && window.__resources.heroPortrait) || "assets/hero-portrait.png"}
          alt="Виталий Тимошенко"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            display: 'block',
          }}
        />
        {/* Cool tone overlay to integrate cream backdrop into dark canvas */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(8,12,18,.22) 0%, rgba(8,12,18,.05) 32%, rgba(8,12,18,.55) 100%)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }} />
        {/* Left-edge fade for text readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #05070A 0%, #05070A 12%, rgba(5,7,10,.85) 32%, rgba(5,7,10,.4) 56%, transparent 90%)',
          pointerEvents: 'none',
        }} />
        {/* Vertical fade top/bottom for cinematic feel */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,7,10,.55) 0%, transparent 22%, transparent 78%, rgba(5,7,10,.85) 100%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Left column — content */}
      <div className="dd-container" style={{
        position: 'relative', zIndex: 2,
        paddingTop: 168, paddingBottom: 72,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
        minHeight: 900,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {/* Kicker */}
            <div data-reveal="up" data-reveal-delay="0" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 22, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Виталий Тимошенко · основатель Делаем Диджитал</span>
            </div>

            <h1 className="dd-h1" style={{ maxWidth: 620 }}>
              <div><WordStagger text="Собираю бизнесу управляемую систему" base={120} step={80} /></div>
              <div><span className="accent"><WordStagger text="привлечения клиентов." base={520} step={80} /></span></div>
            </h1>

            <p className="dd-sub" data-reveal="up" data-reveal-delay="900" style={{ maxWidth: 480 }}>
              Для предпринимателей, которым нужен не набор digital-инструментов,
              а понятный маршрут от первого касания до заявки.
            </p>

            <div data-reveal="up" data-reveal-delay="1040" style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 8 }}>
              <button className="dd-btn dd-btn-primary dd-pulse-copper">
                Разбор системы
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="dd-btn dd-btn-secondary">
                Telegram-канал
              </button>
            </div>

            {/* Trust strip */}
            <div data-reveal="up" data-reveal-delay="1180" style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 8, color: 'var(--dd-text-muted)', fontSize: 13 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span className="dd-dot dd-dot-ping" />
                Принимаем 2 проекта в квартал
              </span>
              <span style={{ width: 1, height: 14, background: 'var(--dd-border-steel)' }} />
              <span>Методология ClientFlow System</span>
            </div>
          </div>

          {/* Flow path strip at the bottom */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="dd-label" style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Замкнутый маршрут
            </div>
            <DDFlowPath activeIndex={2} />
          </div>
        </div>

        {/* Right column — leave empty (photo is behind, absolute) but place a small system tag */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', right: 0, top: 8,
            display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end',
          }}>
            <div className="dd-mono" style={{
              fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              SYS · 01 / 12 · HERO
            </div>
          </div>

          {/* Founder caption bottom-right */}
          <div style={{
            position: 'absolute', right: 0, bottom: 8, textAlign: 'right',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            <div style={{ fontSize: 14, color: 'var(--dd-text-primary)', fontWeight: 600 }}>
              Виталий Тимошенко
            </div>
            <div style={{ fontSize: 12, color: 'var(--dd-text-muted)', letterSpacing: '0.02em' }}>
              основатель · ведёт каждый проект
            </div>
          </div>
        </div>
      </div>
    </DDFrame>
  );
}

window.Sec1Hero = Sec1Hero;


// ========== NAV_HEADER ==========

// Shared building blocks used across all section artboards.
// All exported to window so each <script type="text/babel"> can use them.

function DDNav() {
  return (
    <nav className="dd-nav">
      <a className="dd-nav-logo" href="#">
        <span className="mark">Д</span>
        <span>делаем&nbsp;диджитал</span>
      </a>
      <div className="dd-nav-links">
        <a href="#">Подход</a>
        <a href="#">Услуги</a>
        <a href="#">Кейсы</a>
        <a href="#">Обо мне</a>
        <a href="#">Контакты</a>
      </div>
      <button className="dd-btn dd-btn-nav">Обсудить проект</button>
    </nav>
  );
}

// Section header — small kicker + H2 + optional sub. Editorial, restrained.
function DDSectionHead({ kicker, title, sub, align = 'left', maxSubWidth = 640 }) {
  return (
    <header style={{
      display: 'flex', flexDirection: 'column', gap: 18,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      marginBottom: 56,
    }}>
      {kicker && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
          <span className="dd-tech-badge">{kicker}</span>
        </div>
      )}
      <h2 className="dd-h2" style={{ maxWidth: 880 }}>{title}</h2>
      {sub && <p className="dd-sub" style={{ maxWidth: maxSubWidth }}>{sub}</p>}
    </header>
  );
}

// Editorial section index badge — e.g. "Раздел 02 / 12"
function DDSectionIndex({ n, total = 13 }) {
  return (
    <div className="dd-mono" style={{
      fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'var(--dd-text-muted)',
    }}>
      § {String(n).padStart(2,'0')} <span style={{ opacity: .4, margin: '0 8px' }}>/</span> {total}
    </div>
  );
}

// Hairline divider with optional left label
function DDRule({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {label && <span className="dd-label" style={{ textTransform: 'uppercase', letterSpacing: '0.12em' }}>{label}</span>}
      <hr className="dd-hr" style={{ flex: 1 }} />
    </div>
  );
}

// Hero flow path — full strip
function DDFlowPath({ activeIndex = 2 }) {
  const steps = ['Трафик','Сайт','AI-квалификация','Заявка','Обработка','Аналитика','Улучшение'];
  return (
    <div className="dd-flow" style={{ flexWrap: 'wrap', rowGap: 10 }}>
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <span className={'step' + (i <= activeIndex ? ' active' : '')}>
            <span className={'pip' + (i <= activeIndex ? ' active' : '')} />
            {s}
          </span>
          {i < steps.length - 1 && <span className={'line' + (i < activeIndex ? ' active' : '')} />}
        </React.Fragment>
      ))}
    </div>
  );
}

// Wrap each artboard's interior in a uniform .dd-section frame.
// bg: hex for this section's background (default canvas-graphite)
// fadeTo: hex of next section — draws a 40px gradient strip at the bottom
function DDFrame({ children, bg, fadeTo, style }) {
  return (
    <div
      className="dd dd-section"
      style={{
        background: bg || 'var(--dd-canvas-graphite)',
        ...style,
      }}
    >
      {children}
      {fadeTo && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', left: 0, right: 0, bottom: 0,
            height: 40, pointerEvents: 'none', zIndex: 5,
            background: `linear-gradient(to bottom, transparent 0%, ${fadeTo} 100%)`,
          }}
        />
      )}
    </div>
  );
}

Object.assign(window, { DDNav, DDSectionHead, DDSectionIndex, DDRule, DDFlowPath, DDFrame });


// ========== CONTEXT ==========

// SECTION 2 — КОНТЕКСТ РЫНКА (replaces LossMap)
// "Digital-инструменты уже есть. Связанного пути клиента — часто нет."
// Two-card split + 6-step flow path at the bottom.

function Sec2Context() {
  const flow = ['Внимание', 'Доверие', 'Заявка', 'Обработка', 'Аналитика', 'Улучшение'];

  return (
    <DDFrame bg="#080C12" fadeTo="#080C12" style={{ height: 900 }}>
      <div className="dd-container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 880 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Контекст рынка · § 02</span>
            </div>
            <h2 className="dd-h2" style={{ maxWidth: 900 }}>
              Digital-инструменты уже есть.<br/>
              <span style={{ color: 'var(--dd-text-secondary)', fontWeight: 700 }}>Связанного пути клиента —</span>&nbsp;
              <span style={{ color: 'var(--dd-diagnostic-blue)' }}>часто нет</span>.
            </h2>
            <p className="dd-sub" style={{ maxWidth: 560 }}>
              Бизнес запускает сайт, рекламу, Telegram, CRM, контент и нейросети. Но если эти
              элементы не соединены в единый маршрут, клиент проходит между ними с потерями:
              увидел рекламу, не понял ценность, не оставил заявку, написал в мессенджер,
              не получил вовремя ответ — и ушёл.
            </p>
          </div>
          <DDSectionIndex n={2} />
        </div>

        {/* Two-card split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch', marginTop: 8 }}>
          {/* LEFT — Разрозненный digital */}
          <div data-reveal="left" data-reveal-delay="120" style={{
            padding: 32,
            background: 'rgba(8,12,18,.55)',
            border: '1px solid var(--dd-border-steel)',
            borderRadius: 'var(--dd-radius-lg)',
            display: 'flex', flexDirection: 'column', gap: 22,
            minHeight: 360,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '5px 11px', borderRadius: 9999,
                fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--dd-danger)',
                background: 'rgba(214,106,106,.08)',
                border: '1px solid rgba(214,106,106,.28)',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--dd-danger)' }} />
                Как обычно
              </span>
              <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                config · disconnected
              </span>
            </div>

            <h3 className="dd-h3">Разрозненный digital</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: -4 }}>
              {['Сайт', 'Реклама', 'Telegram', 'CRM', 'Контент', 'AI'].map((x) => (
                <span key={x} style={{
                  padding: '7px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 500,
                  border: '1px dashed rgba(214,106,106,.3)',
                  background: 'rgba(8,12,18,.6)',
                  color: 'var(--dd-text-secondary)',
                }}>{x}</span>
              ))}
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--dd-text-secondary)', marginTop: 'auto' }}>
              Каждый инструмент запущен отдельно: свой подрядчик, своя метрика, свой отчёт.
              Между ними — пустота, в которую утекает внимание клиента.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Стыки между каналами не описаны',
                'Никто не отвечает за результат целиком',
                'Заявка теряется на полпути',
              ].map((x) => (
                <li key={x} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--dd-text-secondary)' }}>
                  <span style={{ flex: 'none', marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: 'var(--dd-danger)', opacity: 0.85 }} />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — ClientFlow-подход */}
          <div data-reveal="right" data-reveal-delay="240" style={{
            padding: 32,
            background: 'linear-gradient(180deg, rgba(20,14,9,.55) 0%, rgba(14,22,34,.65) 100%)',
            border: '1px solid rgba(184,121,75,.42)',
            borderRadius: 'var(--dd-radius-lg)',
            display: 'flex', flexDirection: 'column', gap: 22,
            boxShadow: '0 22px 58px rgba(0,0,0,.32)',
            minHeight: 360,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '5px 11px', borderRadius: 9999,
                fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--dd-action-copper)',
                background: 'rgba(184,121,75,.1)',
                border: '1px solid rgba(184,121,75,.4)',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--dd-action-copper)' }} />
                У нас
              </span>
              <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                config · linked
              </span>
            </div>

            <h3 className="dd-h3">ClientFlow-подход</h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              {['Сайт', 'Реклама', 'Telegram', 'CRM', 'Контент', 'AI'].map((x, i, arr) => (
                <React.Fragment key={x}>
                  <span style={{
                    padding: '7px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 600,
                    border: '1px solid rgba(184,121,75,.4)',
                    background: 'rgba(184,121,75,.08)',
                    color: 'var(--dd-text-primary)',
                  }}>{x}</span>
                  {i < arr.length - 1 && (
                    <svg width="10" height="8" viewBox="0 0 10 8" style={{ color: 'var(--dd-action-copper)', opacity: .7 }}>
                      <path d="M0 4h8M5.5 1 9 4l-3.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--dd-text-secondary)', marginTop: 'auto' }}>
              Те же инструменты, но собраны в маршрут: от первого касания до заявки и
              дальше к сделке. Между шагами — описанные регламенты и сквозная аналитика.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Каждый стык описан и измеряем',
                'Один ответственный за результат',
                'Клиент доходит до заявки — а не уходит к конкуренту',
              ].map((x) => (
                <li key={x} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--dd-text-secondary)' }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" style={{ flex: 'none', marginTop: 4 }}>
                    <path d="M2.5 6.5 5 9 10.5 3.5" stroke="var(--dd-action-copper)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flow path */}
        <div data-reveal="up" data-reveal-delay="460" style={{
          marginTop: 36,
          padding: '20px 24px',
          border: '1px solid var(--dd-border-cool)',
          borderRadius: 'var(--dd-radius-md)',
          background: 'rgba(14,22,34,.55)',
          display: 'flex', flexDirection: 'column', gap: 14,
          position: 'relative',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="dd-label" style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Связанный маршрут клиента
            </span>
            <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              6 stages · single route
            </span>
          </div>
          <div className="dd-flow" style={{ flexWrap: 'wrap', rowGap: 10, position: 'relative' }}>
            {flow.map((s, i) => (
              <React.Fragment key={s}>
                <span className={'step' + (i < 2 ? ' active' : '')}>
                  <span className={'pip' + (i < 2 ? ' active' : '')} />
                  {s}
                </span>
                {i < flow.length - 1 && <span className={'line' + (i < 1 ? ' active' : '')} />}
              </React.Fragment>
            ))}
            {/* Traveling copper dot — traverses the strip on loop */}
            <span className="dd-traveler" />
          </div>
        </div>
      </div>
    </DDFrame>
  );
}

window.Sec2Context = Sec2Context;


// ========== SYSTEM ==========

// SECTION 3 — НОВЫЙ СТАНДАРТ
// "Новый стандарт digital — проектировать не страницы, а путь клиента"
// 6 stage nodes in 3×2 grid, command-center surface. Bottom accent quote.

function Sec3System() {
  const nodes = [
    { i: 1, k: 'ATN', t: 'Внимание',
      d: 'Реклама, контент, охват — поводы заметить компанию там, где есть аудитория.',
      tools: 'Контекст · Таргет · SEO · Контент', s: 'live' },
    { i: 2, k: 'TRU', t: 'Доверие',
      d: 'Посадочная, прогрев, кейсы — доказательство, что вы решаете задачу клиента.',
      tools: 'Посадочная · Telegram · Кейсы', s: 'live' },
    { i: 3, k: 'REQ', t: 'Заявка',
      d: 'Оффер, форма, лид-магнит — момент, в который интерес превращается в обращение.',
      tools: 'Оффер · Форма · Лид-магнит', s: 'live' },
    { i: 4, k: 'PRC', t: 'Обработка',
      d: 'Менеджер, скрипт, скорость ответа — фиксируем обращение, не теряем тёплый контакт.',
      tools: 'CRM · Регламент · Скрипт', s: 'live' },
    { i: 5, k: 'BIQ', t: 'Аналитика',
      d: 'Сквозной отчёт по каналу, источнику, менеджеру — видно, где маршрут работает, а где нет.',
      tools: 'CAC · LTV · Сквозной отчёт', s: 'live' },
    { i: 6, k: 'OPT', t: 'Улучшение',
      d: 'Спринт-цикл оптимизации: раз в две недели чиним самую узкую точку маршрута.',
      tools: 'AB-тесты · Спринты · Гипотезы', s: 'tune' },
  ];

  return (
    <DDFrame bg="#080C12" fadeTo="#080C12" style={{ height: 940 }}>
      <div className="dd-rim-light" style={{ left: '50%', top: -340, transform: 'translateX(-50%)', opacity: .5 }} />

      <div className="dd-container" style={{ paddingTop: 96, paddingBottom: 96, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
            <span className="dd-tech-badge">Новый стандарт · § 03</span>
          </div>
          <DDSectionIndex n={3} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 80, alignItems: 'flex-end', marginBottom: 48 }}>
          <h2 className="dd-h2" style={{ maxWidth: 760 }}>
            Новый стандарт digital —<br/>
            проектировать не страницы,<br/>
            а&nbsp;<span style={{ color: 'var(--dd-diagnostic-blue)' }}>путь клиента</span>.
          </h2>
          <p className="dd-sub" style={{ maxWidth: 460 }}>
            Сайт, реклама, Telegram, AI и аналитика должны работать как единая система:
            привлечь внимание, создать доверие, довести до заявки, зафиксировать обращение
            и показать, что улучшать дальше.
          </p>
        </div>

        {/* Command panel */}
        <div className="dd-card control" style={{
          padding: 28,
          boxShadow: 'var(--dd-shadow-panel)',
          position: 'relative',
        }}>
          {/* Panel header bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            paddingBottom: 18, marginBottom: 24,
            borderBottom: '1px solid var(--dd-border-cool)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span className="dd-dot" />
                <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-secondary)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  ClientFlow System · LIVE
                </span>
              </span>
              <span style={{ width: 1, height: 12, background: 'var(--dd-border-cool)' }} />
              <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                6 · stages
              </span>
              <span style={{ width: 1, height: 12, background: 'var(--dd-border-cool)' }} />
              <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                single · route
              </span>
            </div>
            <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              latency 9m · uptime 99.4%
            </span>
          </div>

          {/* 3 × 2 grid with arrow connectors */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, position: 'relative' }}>
            {nodes.slice(0, 3).map((n, i) => (
              <div key={n.k} data-reveal="up" data-reveal-delay={120 + i * 100}>
                <SysNode n={n} arrow={i < 2} />
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, margin: '10px 0',
            color: 'var(--dd-text-muted)', fontSize: 11, letterSpacing: '0.14em',
          }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(113,151,198,.18)' }} />
            <span className="dd-mono" style={{ textTransform: 'uppercase' }}>↩ Loop · OPT → ATN</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(113,151,198,.18)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {nodes.slice(3, 6).map((n, i, arr) => (
              <div key={n.k} data-reveal="up" data-reveal-delay={460 + i * 100}>
                <SysNode n={n} arrow={i < arr.length - 1} reverse />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent quote */}
        <div data-reveal="left" data-reveal-delay="820" style={{
          marginTop: 28,
          padding: '20px 24px',
          borderLeft: '2px solid var(--dd-action-copper)',
          background: 'rgba(184,121,75,.04)',
          borderRadius: '0 var(--dd-radius-sm) var(--dd-radius-sm) 0',
        }}>
          <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.55, color: 'var(--dd-text-primary)', letterSpacing: '-0.005em', maxWidth: 900 }}>
            ClientFlow System строится вокруг этого маршрута. Не вокруг отдельных услуг,
            а&nbsp;<span style={{ color: 'var(--dd-action-copper)' }}>вокруг движения клиента к&nbsp;заявке</span>.
          </p>
        </div>
      </div>
    </DDFrame>
  );
}

function SysNode({ n, arrow, reverse }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        padding: 20,
        background: 'rgba(8,12,18,.66)',
        border: '1px solid var(--dd-border-cool)',
        borderRadius: 'var(--dd-radius-sm)',
        display: 'flex', flexDirection: 'column', gap: 12,
        minHeight: 200,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="dd-mono" style={{
            fontSize: 11, color: 'var(--dd-action-steel-blue)',
            letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600,
          }}>
            {String(n.i).padStart(2, '0')} · {n.k}
          </div>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: n.s === 'tune' ? 'var(--dd-action-copper)' : 'var(--dd-success)',
            boxShadow: n.s === 'tune'
              ? '0 0 0 4px rgba(184,121,75,.18)'
              : '0 0 0 4px rgba(111,191,145,.16)',
          }} />
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--dd-text-primary)' }}>
          {n.t}
        </div>
        <div style={{ fontSize: 13, color: 'var(--dd-text-secondary)', lineHeight: 1.55 }}>
          {n.d}
        </div>
        <div style={{
          marginTop: 'auto', paddingTop: 10,
          borderTop: '1px solid rgba(148,163,184,.08)',
          fontSize: 11, color: 'var(--dd-text-muted)',
          letterSpacing: '0.04em',
        }} className="dd-mono">
          {n.tools}
        </div>
      </div>
      {arrow && (
        <div style={{
          position: 'absolute', top: '50%', right: -16, transform: 'translateY(-50%) ' + (reverse ? 'rotate(180deg)' : ''),
          width: 18, height: 18,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'rgba(127,166,214,.55)', zIndex: 2,
        }}>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M0 5h12M8.5 1 13 5l-4.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
}

window.Sec3System = Sec3System;


// ========== AUDIT ==========

// SECTION 5 — AuditSection
// Diagnostic panel — Authkit-style control surface with blue border accent.
// Live audit checklist that scans a hypothetical funnel.

function Sec5Audit() {
  const checks = [
    { g: 'оффер',     t: 'Формулировка считывается за 5 секунд', s: 'fail', n: 'два сообщения конкурируют за внимание' },
    { g: 'сайт',      t: 'Время до интерактива < 2.5 с',          s: 'warn', n: '3.8 с — превышение норматива' },
    { g: 'сайт',      t: 'CTA выше первого экрана',               s: 'pass', n: 'присутствует' },
    { g: 'трафик',    t: 'Каналы диверсифицированы (≥ 3)',         s: 'fail', n: '92% бюджета — один источник' },
    { g: 'заявка',    t: 'Скорость первого касания < 15 мин',     s: 'warn', n: '42 мин в среднем' },
    { g: 'заявка',    t: 'Квалификация заявки до менеджера',         s: 'fail', n: 'нет — все заявки идут в одну корзину' },
    { g: 'CRM',       t: 'Стадии маршрута описаны и используются', s: 'pass', n: 'amoCRM, 7 стадий' },
    { g: 'дожим',     t: 'Касания до 14 дня после заявки',         s: 'fail', n: 'обрыв на 3 день' },
    { g: 'отчёт',     t: 'Сквозная аналитика канал → сделка',     s: 'warn', n: 'частично — нет связки с CRM' },
  ];
  const counts = checks.reduce((a, c) => (a[c.s]++, a), { pass: 0, warn: 0, fail: 0 });
  const total = checks.length;
  const score = Math.round((counts.pass + counts.warn * 0.5) / total * 100);
  const [scoreRef, scoreText] = useCountUp(score, { duration: 1200 });

  return (
    <DDFrame bg="#05070A" fadeTo="#080C12" style={{ height: 880 }}>
      <div className="dd-rim-light" style={{ right: -260, top: -200, opacity: .5 }} />

      <div className="dd-container" style={{ paddingTop: 96, paddingBottom: 96, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 720 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Диагностика · § 05</span>
            </div>
            <h2 className="dd-h2">
              Сначала&nbsp;<span style={{ color: 'var(--dd-diagnostic-blue)' }}>аудит ClientFlow</span>.<br/>
              Потом — действие.
            </h2>
          </div>
          <DDSectionIndex n={5} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 56, alignItems: 'flex-start' }}>
          {/* Left: copy */}
          <div data-reveal="left" data-reveal-delay="60" style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 8 }}>
            <p className="dd-sub">
              Сверяем 30+ контрольных точек по семи компонентам системы.
              Каждая — с конкретным нормативом, а не «на глаз».
            </p>
            <p className="dd-body">
              По итогам аудита — отчёт на 6–8 страниц: что работает, где течёт,
              что чинить в первую очередь. С приоритетами по выручке, не по красоте.
            </p>

            <hr className="dd-hr" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="dd-label" style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                В аудит входит
              </div>
              {[
                'Анализ оффера и посадочной',
                'Аудит каналов и качества трафика',
                'Проверка CRM и регламентов обработки',
                'Сквозная аналитика и точки утечки',
              ].map((x) => (
                <div key={x} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: 'var(--dd-text-secondary)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" style={{ flex: 'none', marginTop: 4 }}>
                    <path d="M2.5 7.5 5.5 10.5 11.5 4" stroke="var(--dd-action-steel-blue)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{x}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button className="dd-btn dd-btn-primary">Запросить аудит</button>
              <button className="dd-btn dd-btn-secondary">Пример отчёта</button>
            </div>
          </div>

          {/* Right: diagnostic panel */}
          <div data-reveal="right" data-reveal-delay="120" className="dd-card control" style={{
            padding: 0, overflow: 'hidden',
            boxShadow: 'var(--dd-shadow-panel)',
            border: '1px solid rgba(95,142,216,.32)',
          }}>
            {/* Panel header */}
            <div style={{
              padding: '16px 22px',
              borderBottom: '1px solid var(--dd-border-cool)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(8,12,18,.5)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 12, fontWeight: 600, color: 'var(--dd-action-steel-blue)',
                  letterSpacing: '0.06em',
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'var(--dd-diagnostic-blue)',
                    boxShadow: '0 0 0 4px rgba(95,142,216,.18)',
                  }} />
                  audit · ClientFlow · in progress
                </span>
                <span style={{ width: 1, height: 12, background: 'var(--dd-border-cool)' }} />
                <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  client · acme-co · funnel · q2
                </span>
              </div>
              <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.1em' }}>
                30 / 30 checks
              </span>
            </div>

            {/* Score band */}
            <div style={{
              padding: '22px 22px 24px',
              borderBottom: '1px solid var(--dd-border-cool)',
              display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: 32, alignItems: 'flex-end',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span className="dd-label" style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Совокупная оценка системы
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span ref={scoreRef} style={{ fontSize: 52, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1, color: 'var(--dd-text-primary)' }}>
                    {scoreText}
                  </span>
                  <span style={{ fontSize: 16, color: 'var(--dd-text-muted)' }}>/ 100</span>
                </div>
              </div>
              <ScoreBlock c="var(--dd-success)" l="passed" v={counts.pass} />
              <ScoreBlock c="var(--dd-action-copper)" l="warn"   v={counts.warn} />
              <ScoreBlock c="var(--dd-danger)" l="failed" v={counts.fail} />
            </div>

            {/* Checks list */}
            <div style={{ maxHeight: 420, overflow: 'hidden' }}>
              {checks.map((c, i) => (
                <div key={i} data-scan-row style={{ '--row': i,
                  display: 'grid', gridTemplateColumns: '22px 92px 1fr auto', gap: 14,
                  alignItems: 'center', padding: '12px 22px',
                  borderBottom: i === checks.length - 1 ? 'none' : '1px solid rgba(148,163,184,.08)',
                }}>
                  <StatusIcon s={c.s} />
                  <span className="dd-mono" style={{
                    fontSize: 11, color: 'var(--dd-text-muted)',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                  }}>
                    {c.g}
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 14, color: 'var(--dd-text-primary)' }}>{c.t}</span>
                    <span style={{ fontSize: 12, color: 'var(--dd-text-muted)' }}>{c.n}</span>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: c.s === 'pass' ? 'var(--dd-success)'
                         : c.s === 'warn' ? 'var(--dd-action-copper)'
                         : 'var(--dd-danger)',
                  }}>
                    {c.s === 'pass' ? 'pass' : c.s === 'warn' ? 'warn' : 'fail'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DDFrame>
  );
}

function ScoreBlock({ c, l, v }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />
        {l}
      </span>
      <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--dd-text-primary)' }}>{v}</span>
    </div>
  );
}

function StatusIcon({ s }) {
  if (s === 'pass') return (
    <span style={{
      width: 22, height: 22, borderRadius: '50%',
      background: 'rgba(111,191,145,.14)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="11" height="11" viewBox="0 0 11 11"><path d="M2 5.5 4.5 8 9.5 3" stroke="var(--dd-success)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
  if (s === 'warn') return (
    <span style={{
      width: 22, height: 22, borderRadius: '50%',
      background: 'rgba(184,121,75,.16)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="11" height="11" viewBox="0 0 11 11"><path d="M5.5 2v4.5M5.5 8.5v.5" stroke="var(--dd-action-copper)" strokeWidth="1.8" strokeLinecap="round"/></svg>
    </span>
  );
  return (
    <span style={{
      width: 22, height: 22, borderRadius: '50%',
      background: 'rgba(214,106,106,.14)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="11" height="11" viewBox="0 0 11 11"><path d="M3 3 8 8 M8 3 3 8" stroke="var(--dd-danger)" strokeWidth="1.6" strokeLinecap="round"/></svg>
    </span>
  );
}

window.Sec5Audit = Sec5Audit;


// ========== ASSEMBLY ==========

// SECTION 4 — Assembly
// 7 components grid: Offer, Site, Traffic, Lead, Дожим, Analytics, CRM.
// Plus a meta-card that ties them into one route.

function Sec4Assembly() {
  const components = [
    { k: '01', t: 'Оффер',     d: 'Формулировка, которая выдерживает первое прочтение',
      bullets: ['Боль · Решение · Доказательство', 'Тестируем 3–5 версий', 'Один смысл — везде'] },
    { k: '02', t: 'Сайт',      d: 'Посадочная или мини-сайт под одну задачу',
      bullets: ['5-секундный тест', 'Скорость до 1.4 с', 'Адаптив + AB-тесты'] },
    { k: '03', t: 'Трафик',    d: '3–5 каналов, диверсифицированных по риску',
      bullets: ['Контекст · Таргет · SEO', 'Прогрев холодной базы', 'Бюджет под маржу'] },
    { k: '04', t: 'Заявка',     d: 'Квалификация и приоритезация входящей заявки',
      bullets: ['AI-скоринг по 7 признакам', 'Маршрут под тип заявки', 'Только целевые в продажу'] },
    { k: '05', t: 'Дожим',     d: 'Серии касаний по тёплым и спящим заявкам',
      bullets: ['SMS · Email · Мессенджеры', 'До 14 дней без потери', 'Реактивация раз в квартал'] },
    { k: '06', t: 'Аналитика', d: 'Сквозной отчёт от клика до сделки',
      bullets: ['CAC · LTV · Доля рынка канала', 'Дашборд для собственника', 'Алёрты на отклонения'] },
    { k: '07', t: 'CRM',       d: 'Чистый маршрут заявки вместо хаотичного таб-листа',
      bullets: ['Стадии под ваш процесс', 'Регламент скорости ответа', 'Автоматизация рутины'] },
  ];

  return (
    <DDFrame bg="#080C12" fadeTo="#05070A" style={{ height: 940 }}>
      <div className="dd-container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 760 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Сборка системы · § 04</span>
            </div>
            <h2 className="dd-h2">
              Семь компонентов.<br/>Один маршрут.
            </h2>
            <p className="dd-sub" style={{ maxWidth: 620 }}>
              Не работаем «по кусочкам». Подключаем недостающие узлы, чиним существующие,
              собираем в одну систему. Каждый элемент — обязателен.
            </p>
          </div>
          <DDSectionIndex n={4} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
        }}>
          {components.map((c, i) => (
            <div key={c.k} data-reveal="up" data-reveal-delay={i * 60} className="dd-card dd-hoverable" style={{
              padding: 22,
              display: 'flex', flexDirection: 'column', gap: 14,
              minHeight: 270,
              boxShadow: 'var(--dd-shadow-subtle)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="dd-mono" style={{
                  fontSize: 11, color: 'var(--dd-action-copper)',
                  letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600,
                }}>
                  module · {c.k}
                </div>
                <CompMark id={c.k} className="dd-icon-rotate" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--dd-text-primary)' }}>
                  {c.t}
                </div>
                <div style={{ fontSize: 14, color: 'var(--dd-text-secondary)', lineHeight: 1.5 }}>
                  {c.d}
                </div>
              </div>

              <hr className="dd-hr" />

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {c.bullets.map((b) => (
                  <li key={b} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    fontSize: 13, color: 'var(--dd-text-secondary)',
                  }}>
                    <span style={{
                      flex: 'none', marginTop: 7, width: 5, height: 5,
                      background: 'var(--dd-action-steel-blue)', borderRadius: '50%',
                    }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 8th meta-card */}
          <div data-reveal="up" data-reveal-delay={components.length * 60} className="dd-card control dd-hoverable" style={{
            padding: 22, minHeight: 270,
            display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'space-between',
            background: 'linear-gradient(180deg, rgba(14,22,34,.72) 0%, rgba(20,14,9,.72) 100%)',
            border: '1px solid rgba(184,121,75,.34)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="dd-mono" style={{
                fontSize: 11, color: 'var(--dd-action-copper)',
                letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600,
              }}>
                Σ · all · seven
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--dd-text-primary)', lineHeight: 1.15 }}>
                Связаны в один поток — иначе не работает.
              </div>
              <div style={{ fontSize: 13, color: 'var(--dd-text-secondary)', lineHeight: 1.5 }}>
                Любой выпавший узел роняет конверсию каскадом.
                Проверяем на старте, какие части уже есть, и достраиваем недостающие.
              </div>
            </div>
            <button className="dd-btn dd-btn-secondary" style={{ alignSelf: 'flex-start', padding: '10px 18px', fontSize: 13 }}>
              Что у вас уже есть?
            </button>
          </div>
        </div>
      </div>
    </DDFrame>
  );
}

// Tiny iconographic marks for each component — pure geometry, no slop.
function CompMark({ id, className }) {
  const S = 36;
  const stroke = 'rgba(184,121,75,.72)';
  const muted = 'rgba(127,166,214,.5)';
  const common = { stroke, strokeWidth: 1.3, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  const props = (
    <svg width={S} height={S} viewBox="0 0 36 36" className={className} style={{ display: 'block' }}>
      {id === '01' && (<>
        <rect x="6" y="9"  width="24" height="3" rx="1.5" {...common} />
        <rect x="6" y="16" width="18" height="3" rx="1.5" {...common} stroke={muted} />
        <rect x="6" y="23" width="14" height="3" rx="1.5" {...common} stroke={muted} />
      </>)}
      {id === '02' && (<>
        <rect x="5" y="7" width="26" height="22" rx="2" {...common} />
        <line x1="5" y1="13" x2="31" y2="13" {...common} />
        <circle cx="9" cy="10" r="0.9" fill={stroke} />
        <circle cx="12" cy="10" r="0.9" fill={muted} />
        <rect x="9" y="17" width="9" height="3" rx="1" {...common} stroke={muted} />
        <rect x="9" y="22" width="14" height="3" rx="1" {...common} stroke={muted} />
      </>)}
      {id === '03' && (<>
        <path d="M4 28 L12 18 L18 22 L24 10 L32 14" {...common} />
        <circle cx="12" cy="18" r="1.6" {...common} />
        <circle cx="24" cy="10" r="1.6" {...common} />
      </>)}
      {id === '04' && (<>
        <circle cx="18" cy="18" r="11" {...common} stroke={muted} />
        <circle cx="18" cy="18" r="6" {...common} />
        <circle cx="18" cy="18" r="1.6" fill={stroke} stroke="none" />
      </>)}
      {id === '05' && (<>
        <path d="M6 12 L18 22 L30 12" {...common} />
        <rect x="6" y="9" width="24" height="18" rx="2" {...common} stroke={muted} />
        <circle cx="27" cy="9" r="2.4" {...common} />
      </>)}
      {id === '06' && (<>
        <line x1="6" y1="28" x2="30" y2="28" {...common} stroke={muted} />
        <rect x="8"  y="18" width="3" height="10" {...common} stroke={muted} />
        <rect x="14" y="13" width="3" height="15" {...common} stroke={muted} />
        <rect x="20" y="9"  width="3" height="19" {...common} />
        <rect x="26" y="15" width="3" height="13" {...common} stroke={muted} />
      </>)}
      {id === '07' && (<>
        <path d="M8 9 L28 9 L24 15 L24 25 L19 28 L19 17 Z" {...common} />
        <path d="M8 9 L13 15 L13 25 L18 28" {...common} stroke={muted} />
      </>)}
    </svg>
  );
  return props;
}

window.Sec4Assembly = Sec4Assembly;


// ========== PROCESS ==========

// SECTION 7 — Process
// Five numbered steps, minimal editorial layout. Linear-style precise spacing,
// text-dominant. Numbers in monospace, hairline separators, restrained.

function Sec7Process() {
  const steps = [
    {
      n: '01', label: 'Аудит',
      title: 'Смотрим, что у вас уже есть',
      d: 'Сверяем оффер, сайт, источники, регламенты, CRM и аналитику со списком из 30+ контрольных точек. На выходе — отчёт с приоритетами по выручке.',
      meta: '1–2 недели',
    },
    {
      n: '02', label: 'Стратегия',
      title: 'Собираем целевой маршрут',
      d: 'Описываем будущую систему: каналы, оффер, путь заявки, стадии маршрута, регламенты. Согласуем бюджет, KPI и горизонт планирования.',
      meta: '1 неделя',
    },
    {
      n: '03', label: 'Сборка',
      title: 'Достраиваем недостающие узлы',
      d: 'Под посадочной, трафиком, CRM, квалификацией и дожимом работают четыре команды параллельно. Запуск — поэтапно, без длинного даунтайма.',
      meta: '4–8 недель',
    },
    {
      n: '04', label: 'Запуск',
      title: 'Включаем и стабилизируем',
      d: 'Первые 4 недели — режим наблюдения. Чиним то, что вскрылось на реальных заявках. Передаём панель управления вашей команде.',
      meta: '4 недели',
    },
    {
      n: '05', label: 'Оптимизация',
      title: 'Спринт-цикл улучшений',
      d: 'Раз в две недели — точечный апгрейд самой узкой точки маршрута. Без переделок, без «давайте всё перерисуем».',
      meta: 'непрерывно',
    },
  ];

  return (
    <DDFrame bg="#080C12" fadeTo="#05070A" style={{ height: 880 }}>
      <div className="dd-container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 760 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Процесс · § 07</span>
            </div>
            <h2 className="dd-h2">
              Как мы работаем —<br/>в пять шагов.
            </h2>
          </div>
          <DDSectionIndex n={7} />
        </div>

        {/* Editorial step list — wide rows, hairline rules. Vertical timeline draws on scroll. */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {/* Drawn timeline line on the left */}
          <span
            data-reveal="fade"
            className="dd-draw-v"
            style={{
              position: 'absolute',
              left: 38, top: 32, bottom: 32,
              width: 1,
              background: 'linear-gradient(to bottom, rgba(184,121,75,.5) 0%, rgba(127,166,214,.18) 50%, rgba(148,163,184,.0) 100%)',
            }}
          />
          {steps.map((s, i) => (
            <React.Fragment key={s.n}>
              <div data-reveal="up" data-reveal-delay={i * 120} style={{
                display: 'grid',
                gridTemplateColumns: '88px 220px 1fr 140px',
                gap: 32,
                padding: '32px 0',
                alignItems: 'flex-start',
              }}>
                {/* Number */}
                <div className="dd-mono" style={{
                  fontSize: 14, fontWeight: 600,
                  color: 'var(--dd-text-muted)',
                  letterSpacing: '0.08em',
                  paddingTop: 6,
                }}>
                  {s.n}
                </div>

                {/* Label column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 4 }}>
                  <span className="dd-tech-badge" style={{ color: 'var(--dd-action-copper)' }}>
                    {s.label}
                  </span>
                  <span className="dd-label" style={{ fontWeight: 400, color: 'var(--dd-text-muted)' }}>
                    {s.meta}
                  </span>
                </div>

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 640 }}>
                  <h3 style={{
                    fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em',
                    color: 'var(--dd-text-primary)', lineHeight: 1.2,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontSize: 15, lineHeight: 1.6,
                    color: 'var(--dd-text-secondary)',
                    maxWidth: 580,
                  }}>
                    {s.d}
                  </p>
                </div>

                {/* Right rail — progress pip */}
                <div style={{
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end',
                  paddingTop: 8,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="dd-mono" style={{
                      fontSize: 11, color: 'var(--dd-text-muted)',
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                    }}>
                      этап {i + 1} / {steps.length}
                    </span>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--dd-action-steel-blue)',
                      opacity: 0.7,
                    }} />
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && <hr className="dd-hr" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </DDFrame>
  );
}

window.Sec7Process = Sec7Process;


// ========== FOUNDER ==========

// SECTION 11 — Founder
// 45/55 split: full-bleed vertical portrait left, editorial bio right.
// min-height 100vh equivalent (1000px artboard). Sequel-style oversized name.

function Sec11Founder() {
  const [statRef1, stat1] = useCountUp(10, { duration: 1100 });
  const [statRef2, stat2] = useCountUp(4,  { duration: 1100 });
  const statRefs = [statRef1, statRef2];
  const statValues = [stat1 + '+', stat2, '2 / квартал'];
  return (
    <DDFrame bg="#080C12" fadeTo="#05070A" style={{ height: 1000 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '45% 55%', minHeight: 1000 }}>
        {/* LEFT 45% — full-bleed portrait */}
        <div style={{ position: 'relative', overflow: 'hidden', background: '#0b0e14' }}>
          <img
            data-reveal="hero-photo"
            src={(typeof window !== 'undefined' && window.__resources && window.__resources.founderPortrait) || "assets/founder-portrait.png"}
            alt="Виталий Тимошенко"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Cool tone overlay to darken/cool the cream studio backdrop */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(8,12,18,.18) 0%, rgba(8,12,18,.0) 30%, rgba(8,12,18,.45) 100%)',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }} />
          {/* Right edge fade into section bg */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, transparent 70%, #080C12 100%)',
            pointerEvents: 'none',
          }} />
          {/* Subtle top vignette */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(8,12,18,.35) 0%, transparent 22%)',
            pointerEvents: 'none',
          }} />

          {/* Frame label — bottom-left */}
          <div style={{
            position: 'absolute', left: 40, bottom: 40, zIndex: 2,
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <div className="dd-mono" style={{
              fontSize: 11, color: 'var(--dd-text-muted)',
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>
              Frame 12 / 13 · founder
            </div>
            <div style={{ fontSize: 14, color: 'var(--dd-text-secondary)' }}>
              Студия · 2026
            </div>
          </div>

          {/* Frame label — top-right */}
          <div style={{
            position: 'absolute', right: 56, top: 40, zIndex: 2, textAlign: 'right',
          }}>
            <div className="dd-mono" style={{
              fontSize: 11, color: 'var(--dd-text-muted)',
              letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Σ · ClientFlow System
            </div>
          </div>
        </div>

        {/* RIGHT 55% — bio. Padding 80px, content starts ~30% from top */}
        <div style={{
          padding: '300px 80px 80px 80px',
          display: 'flex', flexDirection: 'column', gap: 32,
          maxWidth: 780,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 22, height: 1, background: 'var(--dd-action-copper)' }} />
            <span className="dd-tech-badge">Основатель · § 12</span>
            <span style={{ flex: 1 }} />
            <DDSectionIndex n={12} />
          </div>

          {/* Sequel-style oversized name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h2 style={{
              fontSize: 64, fontWeight: 800, letterSpacing: '-0.04em',
              lineHeight: 0.98, color: 'var(--dd-text-primary)',
            }}>
              Виталий<br/>Тимошенко.
            </h2>
            <div style={{ fontSize: 16, color: 'var(--dd-text-secondary)', marginTop: 8 }}>
              Основатель «Делаем&nbsp;Диджитал» · ведёт каждый проект лично.
            </div>
          </div>

          {/* Editorial pull */}
          <blockquote data-reveal="up" data-reveal-delay="300" style={{
            margin: 0,
            paddingLeft: 22,
            borderLeft: '2px solid var(--dd-action-copper)',
            fontSize: 22, fontWeight: 500,
            color: 'var(--dd-text-primary)',
            letterSpacing: '-0.015em',
            lineHeight: 1.35,
            maxWidth: 560,
          }}>
            «Клиенты теряются не в инструментах — а между ними. Моя задача: собрать
            маршрут, который довозит человека до заявки, а не просто создаёт трафик.»
          </blockquote>

          <p style={{
            fontSize: 16, lineHeight: 1.7,
            color: 'var(--dd-text-secondary)',
            maxWidth: 560,
          }}>
            До «Делаем Диджитал» — опыт в digital-маркетинге и IT-продуктах. Специализация:
            B2B-сегмент, услуги с высоким чеком, сложные ниши. Методология ClientFlow System —
            собственная разработка на основе реальных проектов.
          </p>

          <div data-reveal="up" data-reveal-delay="450" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
            padding: '24px 0',
            borderTop: '1px solid var(--dd-border-steel)',
            borderBottom: '1px solid var(--dd-border-steel)',
            maxWidth: 560,
          }}>
            {[
              { v: statValues[0], l: 'проектов собрано', r: statRefs[0] },
              { v: statValues[1], l: 'ниши экспертизы', r: statRefs[1] },
              { v: statValues[2], l: 'новых клиента', r: null },
            ].map((s) => (
              <div key={s.l} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span ref={s.r || undefined} style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--dd-text-primary)' }}>{s.v}</span>
                <span className="dd-label" style={{ letterSpacing: '0.04em' }}>{s.l}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, maxWidth: 560 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span className="dd-label" style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                написать лично
              </span>
              <a href="mailto:vitaly@delaem.digital" style={{
                fontSize: 16, fontWeight: 500, color: 'var(--dd-text-primary)',
                borderBottom: '1px solid var(--dd-action-copper)',
                paddingBottom: 2,
              }}>
                vitaly@delaem.digital
              </a>
            </div>
            <svg width="120" height="48" viewBox="0 0 120 48" style={{ opacity: 0.7 }}>
              <path d="M4 32 C 12 8, 22 8, 28 28 C 32 38, 40 36, 42 22 C 44 10, 52 8, 56 22 S 70 38, 78 22 C 82 14, 92 12, 100 24 L 116 24"
                stroke="var(--dd-action-copper)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M88 36 L 104 36" stroke="var(--dd-action-copper)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </DDFrame>
  );
}

window.Sec11Founder = Sec11Founder;


// ========== AUDIENCE ==========

// SECTION 9 — Audience
// Three columns: Владельцам / Экспертам / Командам.
// Restrained, editorial — each column reads as a short letter.

function Sec9Audience() {
  const groups = [
    {
      tag: 'для собственников',
      title: 'Владельцам бизнеса',
      sub: '5–50 человек, оборот от 30 М/год',
      body: 'Когда команда «делает маркетинг», а сделок предсказуемо не прибавляется. Хотите видеть систему целиком — от рубля в трафик до рубля в кассе.',
      points: [
        'Сквозной отчёт собственнику',
        'Один контракт — одна ответственность',
        'KPI завязан на выручку, не на клики',
      ],
    },
    {
      tag: 'для экспертов',
      title: 'Экспертам и консультантам',
      sub: 'индивидуальная практика, средний чек от 300 ₽',
      body: 'Когда работаете на сарафане и хочется управляемого потока, не теряя позиционирования. Не «инфобиз», а спокойный B2B-канал заявок.',
      points: [
        'Оффер под высокий чек',
        'Квалификация до созвона',
        'Поток без перегруза календаря',
      ],
    },
    {
      tag: 'для команд',
      title: 'Маркетинг-командам',
      sub: 'in-house маркетолог + 1–2 подрядчика',
      body: 'Когда внутри есть руки, но нет системы. Собираем маршрут, регламенты и аналитику — дальше команда ведёт сама, мы остаёмся на сопровождении.',
      points: [
        'Сборка + передача',
        'Регламенты и обучение',
        'Сопровождение на 6 мес.',
      ],
    },
  ];

  return (
    <DDFrame bg="#080C12" fadeTo="#100A04" style={{ height: 720 }}>
      <div className="dd-container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 760 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Кому подходит · § 09</span>
            </div>
            <h2 className="dd-h2">
              Кому это подходит.<br/>А кому — нет.
            </h2>
          </div>
          <DDSectionIndex n={9} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
          {groups.map((g, i) => (
            <div key={g.title} data-reveal="scale" data-reveal-delay={120 + i * 90} style={{
              padding: '4px 28px',
              borderLeft: i === 0 ? '1px solid var(--dd-border-steel)' : 'none',
              borderRight: '1px solid var(--dd-border-steel)',
              display: 'flex', flexDirection: 'column', gap: 18,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span className="dd-tech-badge">{g.tag}</span>
                <h3 className="dd-h3">{g.title}</h3>
                <div style={{ fontSize: 13, color: 'var(--dd-text-muted)' }}>{g.sub}</div>
              </div>

              <p style={{
                fontSize: 15, lineHeight: 1.65,
                color: 'var(--dd-text-secondary)',
              }}>
                {g.body}
              </p>

              <hr className="dd-hr" />

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {g.points.map((p) => (
                  <li key={p} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--dd-text-secondary)' }}>
                    <span style={{
                      flex: 'none', marginTop: 7, width: 5, height: 5, borderRadius: '50%',
                      background: 'var(--dd-action-steel-blue)',
                    }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom — кому НЕ подходит */}
        <div data-reveal="up" data-reveal-delay="460" style={{
          marginTop: 36,
          display: 'flex', alignItems: 'center', gap: 18,
          padding: '16px 22px',
          background: 'rgba(8,12,18,.5)',
          border: '1px dashed var(--dd-border-steel)',
          borderRadius: 'var(--dd-radius-sm)',
        }}>
          <span className="dd-tech-badge" style={{ color: 'var(--dd-text-muted)' }}>
            Не подойдём, если
          </span>
          <span style={{ width: 1, height: 16, background: 'var(--dd-border-steel)' }} />
          <span style={{ fontSize: 13, color: 'var(--dd-text-secondary)' }}>
            бюджет на маркетинг до 300 ₽/мес ·  ждёте «волшебной кнопки» ·  нужен SMM-контент или дизайн без системы
          </span>
        </div>
      </div>
    </DDFrame>
  );
}

window.Sec9Audience = Sec9Audience;


// ========== WHY ==========

// SECTION 8 — WhyItWorks
// Split layout: "Инструменты отдельно" vs "Один маршрут". Stark contrast.

function Sec8Why() {
  return (
    <DDFrame bg="#05070A" fadeTo="#080C12" style={{ height: 820 }}>
      <div className="dd-container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 760 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Почему это работает · § 08</span>
            </div>
            <h2 className="dd-h2">
              Маркетинг не ломается<br/>
              на инструментах. Ломается&nbsp;<span style={{ color: 'var(--dd-diagnostic-blue)' }}>между ними</span>.
            </h2>
          </div>
          <DDSectionIndex n={8} />
        </div>

        {/* Split panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch' }}>
          {/* LEFT — Инструменты отдельно */}
          <div data-reveal="left" data-reveal-delay="120" style={{
            padding: 36,
            background: 'rgba(8,12,18,.4)',
            border: '1px solid var(--dd-border-steel)',
            borderRadius: 'var(--dd-radius-lg)',
            display: 'flex', flexDirection: 'column', gap: 24,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '5px 11px', borderRadius: 9999,
                fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--dd-danger)',
                background: 'rgba(214,106,106,.1)',
                border: '1px solid rgba(214,106,106,.3)',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--dd-danger)' }} />
                Как обычно
              </span>
              <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                cfg · disconnected
              </span>
            </div>

            <h3 className="dd-h3" style={{ color: 'var(--dd-text-primary)' }}>
              Инструменты отдельно.
            </h3>
            <p style={{ fontSize: 15, color: 'var(--dd-text-secondary)', lineHeight: 1.65, maxWidth: 480 }}>
              Один подрядчик делает сайт. Второй — контекст. Третий — таргет.
              Четвёртый — CRM. У каждого свой отчёт, свой KPI, своя версия правды.
              Ответственность размывается, оптимизировать общую конверсию некому.
            </p>

            {/* Disconnected nodes diagram */}
            <div style={{
              marginTop: 'auto', paddingTop: 16,
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
            }}>
              {['Сайт', 'Контекст', 'Таргет', 'CRM'].map((x) => (
                <div key={x} style={{
                  padding: '14px 12px', textAlign: 'center',
                  background: 'rgba(8,12,18,.6)',
                  border: '1px dashed rgba(214,106,106,.25)',
                  borderRadius: 'var(--dd-radius-sm)',
                  fontSize: 12, color: 'var(--dd-text-muted)',
                }}>
                  {x}
                </div>
              ))}
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
              {[
                'Заявки теряются на стыках',
                'Никто не отвечает за результат целиком',
                'Аналитика собирается из 4 разных мест',
              ].map((x) => (
                <li key={x} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--dd-text-secondary)' }}>
                  <span style={{
                    flex: 'none', marginTop: 7, width: 5, height: 5, borderRadius: '50%',
                    background: 'var(--dd-danger)', opacity: 0.85,
                  }} />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Один маршрут */}
          <div data-reveal="right" data-reveal-delay="240" style={{
            padding: 36,
            background: 'linear-gradient(180deg, rgba(14,22,34,.85) 0%, rgba(14,22,34,.7) 100%)',
            border: '1px solid rgba(184,121,75,.42)',
            borderRadius: 'var(--dd-radius-lg)',
            display: 'flex', flexDirection: 'column', gap: 24,
            boxShadow: 'var(--dd-shadow-panel)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '5px 11px', borderRadius: 9999,
                fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--dd-action-copper)',
                background: 'rgba(184,121,75,.1)',
                border: '1px solid rgba(184,121,75,.4)',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--dd-action-copper)' }} />
                У нас
              </span>
              <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                cfg · linked
              </span>
            </div>

            <h3 className="dd-h3" style={{ color: 'var(--dd-text-primary)' }}>
              Один маршрут.
            </h3>
            <p style={{ fontSize: 15, color: 'var(--dd-text-secondary)', lineHeight: 1.65, maxWidth: 480 }}>
              Все семь компонентов собирает одна команда, под общим KPI — стоимость
              целевой сделки. Узлы синхронизированы между собой, аналитика сквозная.
              Чинить можно точечно — не пересобирая всё.
            </p>

            {/* Connected nodes diagram */}
            <div style={{
              marginTop: 'auto', paddingTop: 16,
              display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'space-between',
            }}>
              {['Сайт', 'Контекст', 'Таргет', 'CRM'].map((x, i, arr) => (
                <React.Fragment key={x}>
                  <div style={{
                    flex: 1, padding: '14px 8px', textAlign: 'center',
                    background: 'rgba(8,12,18,.6)',
                    border: '1px solid rgba(184,121,75,.35)',
                    borderRadius: 'var(--dd-radius-sm)',
                    fontSize: 12, color: 'var(--dd-text-primary)', fontWeight: 600,
                  }}>
                    {x}
                  </div>
                  {i < arr.length - 1 && (
                    <svg width="14" height="10" viewBox="0 0 14 10" style={{ flex: 'none', color: 'var(--dd-action-copper)' }}>
                      <path d="M0 5h12M8.5 1 13 5l-4.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
              {[
                'Сквозной KPI — стоимость целевой сделки',
                'Один ответственный за результат целиком',
                'Аналитика и оптимизация — в одном контуре',
              ].map((x) => (
                <li key={x} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--dd-text-secondary)' }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" style={{ flex: 'none', marginTop: 4 }}>
                    <path d="M2.5 6.5 5 9 10.5 3.5" stroke="var(--dd-action-copper)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DDFrame>
  );
}

window.Sec8Why = Sec8Why;


// ========== LEADS ==========

// SECTION 10 — Lead Magnets / AI Funnel Entry
// Warm "campfire" section — copper-only, no blue. Sits between Audience and Pricing.

function Sec10LeadMagnets() {
  return (
    <DDFrame bg="#100A04" fadeTo="#05070A" style={{ height: 900 }}>
      {/* Big radial copper glow behind headline */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        left: '50%', top: 280, transform: 'translateX(-50%)',
        width: 1200, height: 1200, borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(184,121,75,.32) 0%, rgba(184,121,75,.08) 28%, transparent 60%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />
      {/* Warm ember pinpoints */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <span className="dd-drift-a" style={{ position: 'absolute', left: '22%', top: '34%', width: 3, height: 3, borderRadius: '50%', background: 'rgba(208,154,110,.5)' }} />
        <span className="dd-drift-b" style={{ position: 'absolute', left: '78%', top: '46%', width: 2, height: 2, borderRadius: '50%', background: 'rgba(184,121,75,.45)' }} />
        <span className="dd-drift-a" style={{ position: 'absolute', left: '64%', top: '72%', width: 2.5, height: 2.5, borderRadius: '50%', background: 'rgba(208,154,110,.4)' }} />
      </div>

      <div className="dd-container" style={{ paddingTop: 110, paddingBottom: 96, position: 'relative' }}>
        {/* Section header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
          <div data-reveal="up" data-reveal-delay="60" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'center', textAlign: 'center', margin: '0 auto', maxWidth: 880 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Бесплатный старт · § 10</span>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
            </div>
            <h2 style={{
              fontSize: 56, fontWeight: 800, letterSpacing: '-0.035em',
              lineHeight: 1.06, color: 'var(--dd-text-primary)',
              maxWidth: 820,
            }}>
              Узнайте, где ваш бизнес<br/>
              <span style={{ color: 'var(--dd-action-copper)', fontWeight: 400 }}>теряет клиентов</span> прямо сейчас.
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.65,
              color: 'rgba(232,220,206,.78)',
              maxWidth: 620,
            }}>
              Выберите, с чего удобнее начать. Всё бесплатно, всё в Telegram —
              без звонков и предложений до того, как вы сами захотите.
            </p>
          </div>
          <div style={{ position: 'absolute', right: 60, top: 110 }}>
            <DDSectionIndex n={10} />
          </div>
        </div>

        {/* Three cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32 }}>
          {/* Card 1 — PRIMARY */}
          <LMCard
            featured
            delay={140}
            kicker="Аудит системы"
            title="ClientFlow Аудит"
            body="AI задаст 7 вопросов о вашем маршруте привлечения клиентов и покажет, где теряется больше всего заявок."
            badge="ClientFlow Score + главная точка потери"
            cta="Пройти Аудит"
            ctaStyle="primary"
            icon={(
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
                <path d="m17.5 17.5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          />
          {/* Card 2 — Consultation */}
          <LMCard
            delay={240}
            kicker="Консультация"
            title="Разбор на 30 минут"
            body="Созвон с Виталием. Разбираем вашу ситуацию — без шаблонных советов и обязательств заранее."
            badge="Разбор ситуации без обязательств"
            cta="Записаться"
            ctaStyle="secondary"
            icon={(
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="6" width="20" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 11h20" stroke="currentColor" strokeWidth="1.6" />
                <path d="M9 4v4M19 4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="14" cy="17" r="2.6" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            )}
          />
          {/* Card 3 — Telegram */}
          <LMCard
            delay={340}
            kicker="Контент"
            title="Telegram-канал"
            body="Разборы систем, кейсы, инструменты. Подписка — и вы видите, как работает ClientFlow System изнутри."
            badge="Разборы, кейсы, инструменты каждую неделю"
            cta="Перейти в канал"
            ctaStyle="secondary"
            icon={(
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M3.2 13.4 24 4.5l-3.6 18.2c-.3 1.2-1 1.4-2 .9l-5.4-4-2.6 2.5c-.3.3-.5.5-1 .5l.4-5.4 9.6-8.6c.4-.4 0-.6-.6-.2L7.4 15.1l-5-1.5c-1.1-.3-1.1-1 .2-1.2Z"
                  stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
            )}
          />
        </div>

        {/* Bottom strip */}
        <div data-reveal="up" data-reveal-delay="500" style={{
          marginTop: 32,
          padding: '22px 28px',
          background: 'linear-gradient(90deg, rgba(184,121,75,.22) 0%, rgba(184,121,75,.12) 50%, rgba(184,121,75,.22) 100%)',
          border: '1px solid rgba(184,121,75,.38)',
          borderRadius: 'var(--dd-radius-md)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--dd-action-copper)',
              boxShadow: '0 0 0 4px rgba(184,121,75,.22), 0 0 12px rgba(184,121,75,.5)',
            }} />
            <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--dd-text-primary)', letterSpacing: '-0.005em' }}>
              Все три пути ведут в одно место — в&nbsp;Telegram, где начинается разговор о&nbsp;вашей системе.
            </span>
          </div>
          <span style={{ fontSize: 13, color: 'rgba(232,220,206,.7)' }}>
            Без регистраций и коммерческих предложений.
          </span>
        </div>
      </div>
    </DDFrame>
  );
}

function LMCard({ featured, delay, kicker, title, body, badge, cta, ctaStyle, icon }) {
  return (
    <div data-reveal="up" data-reveal-delay={delay} className={featured ? 'dd-glow-copper' : ''} style={{
      padding: 28,
      background: featured
        ? 'linear-gradient(180deg, rgba(28,18,10,.88) 0%, rgba(20,14,9,.78) 100%)'
        : 'rgba(20,14,9,.7)',
      border: featured
        ? '1px solid rgba(184,121,75,.55)'
        : '1px solid rgba(184,121,75,.3)',
      borderRadius: 'var(--dd-radius-lg)',
      display: 'flex', flexDirection: 'column', gap: 20,
      minHeight: 420,
      position: 'relative',
      boxShadow: featured
        ? '0 24px 64px rgba(184,121,75,.18), 0 22px 58px rgba(0,0,0,.32)'
        : '0 10px 28px rgba(0,0,0,.24)',
    }}>
      {featured && (
        <div style={{
          position: 'absolute', top: -10, left: 26,
          padding: '4px 10px', borderRadius: 9999,
          background: 'var(--dd-action-copper)',
          color: '#0a0c10', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>
          Рекомендуем
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          width: 52, height: 52, borderRadius: 14,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: featured ? 'rgba(184,121,75,.18)' : 'rgba(184,121,75,.1)',
          border: '1px solid rgba(184,121,75,.32)',
          color: featured ? '#E8C9A6' : 'var(--dd-action-copper)',
        }}>
          {icon}
        </span>
        <span className="dd-tech-badge" style={{ color: 'var(--dd-action-copper)' }}>
          {kicker}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h3 style={{
          fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em',
          color: 'var(--dd-text-primary)', lineHeight: 1.2,
        }}>{title}</h3>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(232,220,206,.78)' }}>
          {body}
        </p>
      </div>

      {badge && (
        <div style={{
          marginTop: 'auto',
          padding: '10px 14px',
          background: 'rgba(184,121,75,.08)',
          border: '1px solid rgba(184,121,75,.28)',
          borderRadius: 10,
          fontSize: 12, color: '#E8C9A6',
          letterSpacing: '0.02em',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" style={{ flex: 'none' }}>
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <span>{badge}</span>
        </div>
      )}

      <button className={'dd-btn ' + (ctaStyle === 'primary' ? 'dd-btn-primary dd-pulse-copper' : 'dd-btn-secondary')}
        style={{ width: '100%', justifyContent: 'center', marginTop: badge ? 0 : 'auto' }}>
        {cta}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

window.Sec10LeadMagnets = Sec10LeadMagnets;


// ========== SERVICES ==========

// SECTION 6 — ServicesScale
// Three selection cards — choose scope. State-driven; selection highlights.

function Sec6Services() {
  const [picked, setPicked] = React.useState('flow');

  const tiers = [
    {
      id: 'site',
      kicker: 'Уровень 01',
      title: 'Делаем Сайт',
      subtitle: 'Одна посадочная под одну задачу',
      time: '3–4 недели',
      from: 'от 150 000 ₽',
      includes: [
        'Оффер и структура',
        'Дизайн + вёрстка',
        'Базовая аналитика',
        'Тест на 1–2 каналах',
      ],
      fit: 'Когда нужна быстрая точка приземления для одной кампании.',
      cta: 'Обсудить сайт',
    },
    {
      id: 'flow',
      kicker: 'Уровень 02 · Чаще выбирают',
      title: 'Делаем Трафик',
      subtitle: 'Связка трафик → сайт → CRM',
      time: '6–8 недель',
      from: 'от 250 000 ₽',
      includes: [
        'Всё из «Посадочной»',
        'Три канала трафика',
        'Квалификация и CRM-маршрут',
        'Сквозная аналитика',
        'Серии дожима',
      ],
      fit: 'Когда нужен предсказуемый объём заявок месяц-в-месяц.',
      cta: 'Обсудить трафик',
    },
    {
      id: 'system',
      kicker: 'Уровень 03',
      title: 'Делаем Систему',
      subtitle: 'Все семь компонентов под ключ',
      time: '10–14 недель',
      from: 'от 350 000 ₽',
      includes: [
        'Всё из «Потока»',
        'AI-квалификация заявок',
        'Регламенты и обучение продаж',
        'Спринт-цикл оптимизации',
        'Сопровождение 6 мес.',
      ],
      fit: 'Когда выручка зависит от системы привлечения целиком.',
      cta: 'Собрать систему',
    },
  ];

  return (
    <DDFrame bg="#080C12" style={{ height: 880 }}>
      <div className="dd-container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 760 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Услуги · § 06</span>
            </div>
            <h2 className="dd-h2">
              Три масштаба.<br/>Один подход.
            </h2>
            <p className="dd-sub" style={{ maxWidth: 620 }}>
              Заходим в проект ровно на тот объём, который сейчас закрывает узкое место.
              Расти можно поэтапно — без переделок и без скрытых доплат.
            </p>
          </div>
          <DDSectionIndex n={6} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {tiers.map((t, i) => {
            const active = picked === t.id;
            return (
              <button
                key={t.id}
                data-reveal="up"
                data-reveal-delay={120 + i * 80}
                onClick={() => setPicked(t.id)}
                style={{
                  textAlign: 'left',
                  background: active ? 'rgba(14,22,34,.85)' : 'var(--dd-surface-obsidian)',
                  border: active
                    ? '1px solid rgba(184,121,75,.55)'
                    : '1px solid var(--dd-border-steel)',
                  borderRadius: 'var(--dd-radius-lg)',
                  padding: 28,
                  display: 'flex', flexDirection: 'column', gap: 22,
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'transform var(--dd-dur-hover) var(--dd-ease), background .22s ease, border-color .22s ease, box-shadow .22s ease',
                  boxShadow: active ? '0 16px 42px rgba(184,121,75,.18)' : 'var(--dd-shadow-subtle)',
                  minHeight: 540,
                  color: 'inherit',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Radio + kicker row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="dd-tech-badge" style={{
                    color: active ? 'var(--dd-action-copper)' : 'var(--dd-text-muted)',
                  }}>
                    {t.kicker}
                  </span>
                  <span style={{
                    width: 18, height: 18, borderRadius: '50%',
                    border: active ? '1.5px solid var(--dd-action-copper)' : '1.5px solid var(--dd-border-steel)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {active && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--dd-action-copper)' }} />}
                  </span>
                </div>

                {/* Title block */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--dd-text-primary)' }}>
                    {t.title}
                  </div>
                  <div style={{ fontSize: 15, color: 'var(--dd-text-secondary)' }}>
                    {t.subtitle}
                  </div>
                </div>

                {/* Numerics */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
                  padding: '14px 0',
                  borderTop: '1px solid var(--dd-border-steel)',
                  borderBottom: '1px solid var(--dd-border-steel)',
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span className="dd-label" style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>срок</span>
                    <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--dd-text-primary)' }}>{t.time}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span className="dd-label" style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>стоимость</span>
                    <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--dd-text-primary)' }}>{t.from}</span>
                  </div>
                </div>

                {/* Includes */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {t.includes.map((x) => (
                    <li key={x} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--dd-text-secondary)' }}>
                      <svg width="13" height="13" viewBox="0 0 13 13" style={{ flex: 'none', marginTop: 4 }}>
                        <path d="M2.5 6.5 5 9 10.5 3.5" stroke={active ? 'var(--dd-action-copper)' : 'var(--dd-action-steel-blue)'} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                {/* Fit */}
                <div style={{
                  padding: 12, fontSize: 12, lineHeight: 1.5,
                  color: 'var(--dd-text-muted)',
                  background: 'rgba(8,12,18,.55)',
                  borderRadius: 'var(--dd-radius-sm)',
                  border: '1px solid var(--dd-border-steel)',
                }}>
                  {t.fit}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footnote selection feedback */}
        <div style={{
          marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 20px',
          background: 'rgba(8,12,18,.5)',
          border: '1px solid var(--dd-border-steel)',
          borderRadius: 'var(--dd-radius-sm)',
        }}>
          <span style={{ fontSize: 13, color: 'var(--dd-text-muted)' }}>
            <span style={{ color: 'var(--dd-text-secondary)' }}>Выбрано:</span>{' '}
            <span style={{ color: 'var(--dd-action-copper)', fontWeight: 600 }}>
              {tiers.find((t) => t.id === picked)?.title}
            </span>
            {' '}— первый созвон бесплатный, 40 минут.
          </span>
          <button className="dd-btn dd-btn-primary" style={{ padding: '12px 24px', fontSize: 14 }}>
            {tiers.find((t) => t.id === picked)?.cta || 'Назначить созвон'}
          </button>
        </div>
      </div>
    </DDFrame>
  );
}

window.Sec6Services = Sec6Services;


// ========== FINALCTA ==========

// SECTION 12 — FinalCTA + Footer
// Conversion block (big editorial CTA) + minimal dark footer below.

function Sec12Final() {
  return (
    <DDFrame bg="#05070A" style={{ height: 820 }}>
      {/* Atmospheric rim */}
      <div className="dd-rim-light" style={{ left: '50%', top: '40%', transform: 'translate(-50%, -50%)', opacity: .55 }} />
      {/* Drifting atmospheric particles — very subtle */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <span className="dd-drift-a" style={{ position: 'absolute', left: '18%', top: '32%', width: 3, height: 3, borderRadius: '50%', background: 'rgba(127,166,214,.35)' }} />
        <span className="dd-drift-b" style={{ position: 'absolute', left: '74%', top: '22%', width: 2, height: 2, borderRadius: '50%', background: 'rgba(127,166,214,.28)' }} />
        <span className="dd-drift-a" style={{ position: 'absolute', left: '52%', top: '68%', width: 2.5, height: 2.5, borderRadius: '50%', background: 'rgba(184,121,75,.22)' }} />
        <span className="dd-drift-b" style={{ position: 'absolute', left: '28%', top: '78%', width: 2, height: 2, borderRadius: '50%', background: 'rgba(127,166,214,.22)' }} />
        <span className="dd-drift-a" style={{ position: 'absolute', left: '88%', top: '54%', width: 2, height: 2, borderRadius: '50%', background: 'rgba(127,166,214,.18)' }} />
      </div>

      <div className="dd-container" style={{ paddingTop: 120, paddingBottom: 48, position: 'relative' }}>
        {/* CONVERSION BLOCK */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center', minHeight: 460 }}>
          {/* Left: headline + CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div data-reveal="up" data-reveal-delay="0" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Следующий шаг · § 13</span>
            </div>

            <h2 style={{
              fontSize: 60, fontWeight: 800, letterSpacing: '-0.04em',
              lineHeight: 1.04, color: 'var(--dd-text-primary)',
              maxWidth: 700,
            }}>
              <div><WordStagger text="Соберите digital в систему," base={120} step={80} /></div>
              <div>
                <WordStagger text="которая" base={420} step={80} />&nbsp;
                <span style={{ color: 'var(--dd-diagnostic-blue)' }}>
                  <WordStagger text="ведёт клиента к заявке" base={500} step={80} />
                </span>.
              </div>
            </h2>

            <p className="dd-sub" data-reveal="up" data-reveal-delay="900" style={{ maxWidth: 560 }}>
              Начните с консультации, если уже готовы обсуждать проект.
              Или пройдите ClientFlow Аудит, если хотите сначала увидеть
              слабые места вашей системы.
            </p>

            <div data-reveal="up" data-reveal-delay="1040" style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8 }}>
              <button className="dd-btn dd-btn-primary dd-pulse-copper" style={{ padding: '16px 32px', fontSize: 16 }}>
                Разбор системы
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="dd-btn dd-btn-secondary" style={{ padding: '15px 26px', fontSize: 15 }}>
                ClientFlow Аудит
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: 'var(--dd-text-muted)', fontSize: 13, marginTop: 8 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span className="dd-dot" />
                Принимаем 2 проекта в квартал
              </span>
              <span style={{ width: 1, height: 14, background: 'var(--dd-border-steel)' }} />
              <span>Ответим в течение рабочего дня</span>
            </div>
          </div>

          {/* Right: compact contact form panel */}
          <div data-reveal="right" data-reveal-delay="300" className="dd-card control" style={{
            padding: 28,
            boxShadow: 'var(--dd-shadow-panel)',
            display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="dd-mono" style={{
                fontSize: 11, color: 'var(--dd-action-steel-blue)',
                letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600,
              }}>
                ↳ форма заявки
              </span>
              <span className="dd-mono" style={{ fontSize: 11, color: 'var(--dd-text-muted)', letterSpacing: '0.12em' }}>
                30 сек.
              </span>
            </div>

            <hr className="dd-hr" />

            <FormField label="Имя">Алексей</FormField>
            <FormField label="Email">a.petrov@</FormField>
            <FormField label="Сайт компании (опционально)">delaem.digital</FormField>

            {/* Tier chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="dd-label" style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Что интересует
              </span>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[
                  { l: 'Аудит ClientFlow', active: true },
                  { l: 'Посадочная',    active: false },
                  { l: 'Поток заявок',  active: false },
                  { l: 'Система',       active: false },
                ].map((c) => (
                  <span key={c.l} style={{
                    padding: '7px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 600,
                    border: c.active ? '1px solid rgba(184,121,75,.5)' : '1px solid var(--dd-border-steel)',
                    background: c.active ? 'rgba(184,121,75,.1)' : 'rgba(8,12,18,.5)',
                    color: c.active ? 'var(--dd-action-copper)' : 'var(--dd-text-secondary)',
                    cursor: 'pointer',
                  }}>{c.l}</span>
                ))}
              </div>
            </div>

            <button className="dd-btn dd-btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
              Отправить заявку
            </button>
            <div style={{ fontSize: 11, color: 'var(--dd-text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
              Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: 'var(--dd-canvas-graphite)',
        borderTop: '1px solid var(--dd-border-steel)',
      }}>
        <div className="dd-container" style={{ padding: '32px 60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
            <a className="dd-nav-logo" href="#">
              <span className="mark">Д</span>
              <span>делаем&nbsp;диджитал</span>
            </a>

            <div style={{ display: 'flex', gap: 28 }}>
              {['Подход','Услуги','Кейсы','Обо мне','Контакты','Telegram'].map((x) => (
                <a key={x} href="#" style={{ fontSize: 13, color: 'var(--dd-text-secondary)' }}>{x}</a>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 12, color: 'var(--dd-text-muted)' }}>
              <span>© 2026 Делаем Диджитал</span>
              <span style={{ width: 1, height: 12, background: 'var(--dd-border-steel)' }} />
              <a href="#" style={{ color: 'inherit' }}>Политика</a>
            </div>
          </div>
        </div>
      </div>
    </DDFrame>
  );
}

function FormField({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span className="dd-label" style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>{label}</span>
      <div style={{
        padding: '10px 14px',
        background: 'rgba(8,12,18,.5)',
        border: '1px solid var(--dd-border-steel)',
        borderRadius: 'var(--dd-radius-sm)',
        fontSize: 14, color: 'var(--dd-text-primary)',
        display: 'flex', alignItems: 'center',
      }}>
        <span style={{ color: 'var(--dd-text-muted)' }}>{children}</span>
        <span className="dd-caret" />
      </div>
    </div>
  );
}

window.Sec12Final = Sec12Final;


// ========== PRICING ==========

// SECTION 10 — Pricing
// Three premium cards, middle = featured (copper glow). Clear numbers,
// no marketing fluff, restrained typographic hierarchy.

function Sec10Pricing() {
  const plans = [
    {
      id: 'start',
      kicker: 'СТАРТ',
      title: 'Делаем Сайт',
      lede: 'Одна посадочная, один канал, чистый запуск.',
      price: 'от 150 000 ₽',
      priceNote: 'фиксированная стоимость проекта',
      time: '3–4 недели',
      includes: [
        'Оффер + структура',
        'Дизайн и адаптив',
        'Базовая аналитика и события',
        'Запуск в одном канале трафика',
        'Поддержка 30 дней после запуска',
      ],
      excludes: ['Многоканальный трафик', 'CRM-маршрут', 'AI-квалификация'],
      cta: 'Обсудить сайт',
      ctaStyle: 'secondary',
    },
    {
      id: 'flow',
      kicker: 'ТРАФИК · ВЫБИРАЮТ ЧАЩЕ',
      title: 'Делаем Трафик',
      lede: 'Связка трафик → посадочная → CRM с управляемым результатом.',
      price: 'от 250 000 ₽',
      priceNote: 'фиксированная стоимость проекта',
      time: '6–8 недель',
      includes: [
        'Всё из «Посадочной»',
        '3 канала трафика',
        'CRM-маршрут и стадии',
        'Серии дожима',
        'Сквозная аналитика',
        'Спринт-цикл оптимизации',
      ],
      excludes: ['AI-квалификация', 'Обучение продаж'],
      cta: 'Обсудить трафик',
      ctaStyle: 'primary',
      featured: true,
    },
    {
      id: 'system',
      kicker: 'СИСТЕМА',
      title: 'Делаем Систему',
      lede: 'Все семь компонентов под ключ, спринт-цикл оптимизации.',
      price: 'от 350 000 ₽',
      priceNote: 'фиксированная стоимость проекта',
      time: '10–14 недель',
      includes: [
        'Всё из «Потока»',
        'AI-квалификация и скоринг',
        'Регламенты обработки заявок',
        'Обучение отдела продаж',
        'Сборка и передача под ключ',
        'Персональный аналитик на проекте',
      ],
      excludes: [],
      cta: 'Собрать систему',
      ctaStyle: 'secondary',
    },
  ];

  return (
    <DDFrame bg="#05070A" fadeTo="#080C12" style={{ height: 980 }}>
      {/* Soft copper rim behind featured */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 360, transform: 'translateX(-50%)',
        width: 540, height: 540, borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(184,121,75,.16) 0%, transparent 65%)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />

      <div className="dd-container" style={{ paddingTop: 96, paddingBottom: 96, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 760 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1, background: 'var(--dd-action-copper)' }} />
              <span className="dd-tech-badge">Стоимость · § 11</span>
            </div>
            <h2 className="dd-h2">
              Прозрачные тарифы.<br/>Без скрытых доплат.
            </h2>
            <p className="dd-sub" style={{ maxWidth: 620 }}>
              Фиксированная стоимость проекта — без ежемесячных абонентов и скрытых доплат.
              Бюджет на трафик — отдельно, у клиента, мы только им управляем.
            </p>
          </div>
          <DDSectionIndex n={11} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, alignItems: 'stretch' }}>
          {plans.map((p, i) => {
            const featured = !!p.featured;
            return (
              <div key={p.id} data-reveal="up" data-reveal-delay={120 + i * 100} className={featured ? 'dd-float dd-glow-copper' : 'dd-card dd-hoverable'} style={{
                position: 'relative',
                padding: featured ? 32 : 28,
                background: featured
                  ? 'linear-gradient(180deg, rgba(20,14,9,.85) 0%, rgba(14,22,34,.82) 100%)'
                  : 'var(--dd-surface-obsidian)',
                border: featured
                  ? '1px solid rgba(184,121,75,.55)'
                  : '1px solid var(--dd-border-steel)',
                borderRadius: 'var(--dd-radius-lg)',
                display: 'flex', flexDirection: 'column', gap: 22,
              }}>
                {/* Featured ribbon */}
                {featured && (
                  <div style={{
                    position: 'absolute', top: -10, left: 28,
                    padding: '4px 10px', borderRadius: 9999,
                    background: 'var(--dd-action-copper)',
                    color: '#0a0c10', fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>
                    Чаще выбирают
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span className="dd-tech-badge" style={{
                    color: featured ? 'var(--dd-action-copper)' : 'var(--dd-text-muted)',
                  }}>
                    {p.kicker}
                  </span>
                  <h3 style={{
                    fontSize: 28, fontWeight: 700, letterSpacing: '-0.025em',
                    color: 'var(--dd-text-primary)', lineHeight: 1.15,
                  }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--dd-text-secondary)', lineHeight: 1.55 }}>
                    {p.lede}
                  </p>
                </div>

                {/* Price */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--dd-text-primary)', lineHeight: 1 }}>
                    {p.price}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--dd-text-muted)' }}>
                    {p.priceNote}
                  </span>
                </div>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 0', borderTop: '1px solid var(--dd-border-steel)', borderBottom: '1px solid var(--dd-border-steel)',
                }}>
                  <span className="dd-label" style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>Срок сборки</span>
                  <span style={{ fontSize: 14, color: 'var(--dd-text-primary)', fontWeight: 600 }}>{p.time}</span>
                </div>

                {/* Includes */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {p.includes.map((x) => (
                    <li key={x} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--dd-text-secondary)' }}>
                      <svg width="13" height="13" viewBox="0 0 13 13" style={{ flex: 'none', marginTop: 4 }}>
                        <path d="M2.5 6.5 5 9 10.5 3.5" stroke={featured ? 'var(--dd-action-copper)' : 'var(--dd-action-steel-blue)'} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{x}</span>
                    </li>
                  ))}
                  {p.excludes.map((x) => (
                    <li key={x} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--dd-text-muted)' }}>
                      <svg width="13" height="13" viewBox="0 0 13 13" style={{ flex: 'none', marginTop: 4 }}>
                        <path d="M3 6.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                      <span style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(127,139,156,.5)' }}>{x}</span>
                    </li>
                  ))}
                </ul>

                <button className={'dd-btn ' + (p.ctaStyle === 'primary' ? 'dd-btn-primary' : 'dd-btn-secondary')}
                  style={{ width: '100%', justifyContent: 'center' }}>
                  {p.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Below pricing — small print */}
        <div style={{
          marginTop: 32,
          display: 'flex', alignItems: 'center', gap: 24,
          justifyContent: 'center', flexWrap: 'wrap',
          fontSize: 13, color: 'var(--dd-text-muted)',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span className="dd-dot" />
            Гарантия конверсии в договоре
          </span>
          <span style={{ width: 1, height: 14, background: 'var(--dd-border-steel)' }} />
          <span>Оплата по этапам — 30 / 40 / 30</span>
          <span style={{ width: 1, height: 14, background: 'var(--dd-border-steel)' }} />
          <span>Договор и закрывающие документы — на ООО или ИП</span>
        </div>
      </div>
    </DDFrame>
  );
}

window.Sec10Pricing = Sec10Pricing;
