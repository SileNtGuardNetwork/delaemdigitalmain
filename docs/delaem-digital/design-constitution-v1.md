# Design Constitution v1 — Делаем Диджитал

Дата: май 2026
Статус: утверждено

## 1. Философия

Премиум тёмный минимализм. Founder-led, high-ticket B2B.
Авторитет через сдержанность, не через громкость.
Один акцент — один смысл. Никакого визуального шума.

## 2. Цвета

```css
--bg:           #07070d;
--surface:      #0f0f1a;
--surface-2:    #141425;
--border:       #18182a;
--accent:       #5266eb;
--blue:         #5b8cff;
--copper:       #c97a50;
--text:         #ededf3;
--muted:        #8a8f98;
--dim:          #3a3a52;
--green:        #48c878;
```

### Правила
- Медь (#c97a50): ТОЛЬКО kicker + primary button + nav CTA border
- Blue (#5b8cff): ТОЛЬКО последняя строка H1 + flow dots + активные состояния
- Steel-violet (#5266eb): secondary CTAs, badges
- НЕ использовать: purple gradients, neon, rainbow

## 3. Типографика

Шрифт: Onest (Google Fonts)
https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700;800&display=swap

| Роль | Размер | Вес | Letter-spacing | Line-height |
|------|--------|-----|----------------|-------------|
| Display/H1 | clamp(48px,4.5vw,72px) | 800 | -0.04em | 1.05 |
| H2 | 40px | 700 | -0.03em | 1.1 |
| H3 | 28px | 700 | -0.02em | 1.2 |
| Subheadline | 16-18px | 400 | 0 | 1.7 |
| Body | 15-16px | 400 | 0 | 1.65 |
| Label/UI | 12-13px | 500-600 | +0.01em | 1.4 |
| Caption | 9-11px | 600 | +0.07em | 1.3 |

H1: строки 1-2 белые (#ededf3) вес 800, строка 3 синяя (#5b8cff) вес 800

## 4. Кнопки

Primary: background #c97a50, color #fff, border-radius 10px, padding 14px 28px, font-weight 700
Secondary: transparent, color #c97a50, border 1.5px solid #c97a50, border-radius 10px
Nav CTA: transparent, color #c97a50, border 1.5px solid #c97a50, border-radius 10px, padding 10px 24px
НЕ pill (9999px) для кнопок. Pill только для badges и tags.

## 5. Карточки

background #0f0f1a, border 1px solid #18182a, border-radius 14px
НЕТ box-shadow. Elevation через color shift.

## 6. Layout

- Max-width: 1360px
- Side padding: 60px desktop, 24px mobile
- Section gap: 100-120px
- Hero min-height: 100vh
- Nav height: 72px, fixed, backdrop-filter blur(16px)
- Hero grid: 1fr 1fr (text left, photo right)

## 7. Hero Photo

Photo: position absolute, right 0, top 0, width 55-60%, height 100%, object-fit cover
Gradient fade LEFT edge: linear-gradient(to right, #07070d 0%, #07070d 15%, rgba(7,7,13,.85) 45%, transparent 100%)

Требования к фото:
- Тёмный студийный или интерьерный фон
- Dramatic side-lighting (Rembrandt)
- Тёмный пиджак или водолазка
- Мин. 2400px, WebP, вертикальная ориентация

## 8. Nav

Логотип (слева) | Подход · Услуги · Кейсы · Обо мне · Контакты (центр) | Обсудить проект (справа)
Nav scroll bg: rgba(7,7,13,.88) + backdrop-filter blur(16px)

## 9. Flow Path (hero bottom)

Трафик → Сайт → AI-квалификация → Заявка → Обработка → Аналитика → Улучшение
Active dot: #5b8cff, Inactive dot: border 1.5px solid #3a3a52
Active line: rgba(91,140,255,.5), Inactive line: #1e1e2a

## 10. Anti-patterns (ЗАПРЕЩЕНО)

- Cyberpunk / neon
- Random floating cards
- Fake analytics charts
- box-shadow для elevation
- Медь как основной фон
- Более 2-х акцентных цветов одновременно
- Pill-кнопки для primary/secondary actions

## 11. Motion

- Stagger load: 0.1s step
- fadeUp: translateY(18px)→0, opacity 0→1, 0.5s ease
- Hover: 0.2-0.25s ease
- prefers-reduced-motion: обязательно

## 12. Responsive

1440px: design base
1280px: H1 до 56px
1024px: nav collapse
768px: photo в bg blurred, 1 колонка
390px: текст сначала, CTA ранний

## 13. CSS Variables

```css
:root {
  --bg: #07070d;
  --surface: #0f0f1a;
  --surface-2: #141425;
  --border: #18182a;
  --accent: #5266eb;
  --blue: #5b8cff;
  --copper: #c97a50;
  --text: #ededf3;
  --muted: #8a8f98;
  --dim: #3a3a52;
  --green: #48c878;
  --font: 'Onest', system-ui, sans-serif;
  --radius-btn: 10px;
  --radius-card: 14px;
  --radius-badge: 9999px;
  --nav-h: 72px;
  --max-w: 1360px;
  --pad-x: 60px;
}
```
