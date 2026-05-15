# Design Constitution v1 — Делаем Диджитал
# Canonical token source: docs/delaem-digital-design-tokens-v1.md

Status: updated May 2026
Previous conflicts with design-tokens-v1.md resolved.
This file is a usage guide. Raw values live in design-tokens-v1.md.

---

## 1. Philosophy

Dark, cinematic, founder-led, architectural, controlled, high-ticket B2B.
Authority through restraint, not volume.
One accent = one meaning. No visual noise.

---

## 2. Color Tokens (aligned with design-tokens-v1.md)

### Backgrounds / Canvas
```css
--dd-canvas-graphite:    #05070A;           /* Main page bg — use this, never pure #000 */
--dd-canvas-obsidian:    #080C12;           /* Secondary depth, section bands, footer */
--dd-surface-obsidian:   rgba(12,17,25,.82); /* Premium cards, pricing panels */
--dd-surface-control:    rgba(14,22,34,.72); /* Diagnostic blocks, audit, system panels */
```

### Borders
```css
--dd-border-steel:  rgba(148,163,184,.16);  /* Default card / form edges */
--dd-border-cool:   rgba(113,151,198,.18);  /* System signals, hero linework */
```

### Text
```css
--dd-text-primary:   #F5F7FB;   /* H1, H2, labels, CTA text */
--dd-text-secondary: #B8C1CE;   /* Paragraphs, subtitles, body */
--dd-text-muted:     #7F8B9C;   /* Metadata, captions, small labels */
```

### Action / Accent
```css
--dd-action-copper:       #B8794B;              /* PRIMARY CTA — use only here */
--dd-action-copper-hover: #D09A6E;              /* Primary CTA hover */
--dd-action-steel-blue:   #7FA6D6;              /* Secondary CTA, quiet links, route markers */
--dd-diagnostic-blue:     #5F8ED8;              /* H1 last-line highlight, audit signals */
--dd-atmosphere-blue:     rgba(92,132,180,.18); /* Hero rim light, ambient depth only */
```

### Status
```css
--dd-success: #6FBF91;   /* Sent, connected, ready, passed */
--dd-danger:  #D66A6A;   /* Validation / failure states only */
```

### Color Discipline
- Copper (`#B8794B`) → PRIMARY CTA + kicker text + nav CTA border ONLY
- Steel-blue (`#7FA6D6`) → secondary CTAs, route markers, system cues
- Diagnostic blue (`#5F8ED8`) → H1 last-line highlight, audit states
- Atmosphere blue → hero ambient only, never for cards
- **NO violet as primary** — previously used `#5266eb` is removed
- **NO neon lime**
- **NO generic SaaS blue identity**
- Max 2 accent colors visible simultaneously on screen

---

## 3. Typography

Font: **Onest** (Google Fonts) — weights 300 / 400 / 500 / 600 / 700 / 800
Also in use: **Manrope** — preserve both, do not remove.
Do not introduce new paid fonts without explicit approval.

### Scale
| Role | Size | Weight | Letter-spacing | Line-height |
|------|------|--------|----------------|-------------|
| H1 Display | clamp(48px,4.5vw,72px) | 800 | -0.03em to -0.04em | 1.02–1.08 |
| H2 | 36–42px | 700 | -0.025em | 1.1 |
| H3 | 24–28px | 600–700 | -0.02em | 1.2 |
| Subheadline | 16–18px | 400 | 0 | 1.55–1.65 |
| Body | 15–16px | 400 | 0 | 1.45–1.65 |
| Label/UI | 12–13px | 500–600 | +0.01em | 1.4 |
| Technical badge | 10–11px | 600 | +0.08–0.16em uppercase | 1.3 |

### H1 Structure (hero)
```
Line 1: #F5F7FB, weight 800
Line 2: #F5F7FB, weight 800
Line 3: #5F8ED8 (diagnostic blue), weight 800  ← accent on last line only
```

### Typography Rules
- Hero: large, confident, restrained weight
- No artificial luxury tracking on long Russian text
- Avoid clipped Cyrillic ascenders/descenders via tight line-height
- Button labels must not wrap awkwardly on mobile

---

## 4. Buttons

**Primary (copper fill)**
```css
background: #B8794B;
color: #F5F7FB;
border: none;
border-radius: 12px;
padding: 14px 28px;
font-weight: 700;
/* hover: background #D09A6E, box-shadow: 0 16px 42px rgba(184,121,75,.24) */
```

**Secondary (copper outline)**
```css
background: transparent;
color: #B8794B;
border: 1.5px solid #B8794B;
border-radius: 12px;
padding: 14px 26px;
font-weight: 600;
```

**Nav CTA**
```css
background: transparent;
color: #B8794B;
border: 1.5px solid #B8794B;
border-radius: 10px;
padding: 10px 24px;
font-size: 13px;
```

**Pills (9999px border-radius): badges and tags ONLY.** Never for primary/secondary actions.

---

## 5. Cards / Surfaces

```css
/* Standard card */
background: rgba(12,17,25,.82);
border: 1px solid rgba(148,163,184,.16);
border-radius: 16px;  /* dd-radius-md */

/* Control/diagnostic surface */
background: rgba(14,22,34,.72);
border: 1px solid rgba(113,151,198,.18);
border-radius: 16px;
```

Shadows are allowed for depth (unlike glass effects):
```css
/* Panel */
box-shadow: 0 22px 58px rgba(0,0,0,.32);
/* Subtle */
box-shadow: 0 10px 28px rgba(0,0,0,.24);
```
Do not stack multiple dramatic shadows on repeated items.

---

## 6. Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 8px | Small labels, tiny controls |
| sm | 12px | Inputs, compact controls |
| md | 16px | Standard cards, form surfaces |
| lg | 20px | Premium panels, pricing cards |
| xl | 28px | Large hero/CTA surfaces, used sparingly |
| scene | 32–40px | Cinematic founder/hero scene framing only |

---

## 7. Layout

```
Max-width:    1360px
Side padding: 60px desktop / 24px mobile
Nav height:   72px, position fixed
Nav bg:       rgba(7,7,13,.88) + backdrop-filter blur(16px)
Section gap:  96px desktop (dd-space-3xl)
Hero:         min-height 100vh, 2-col grid (text left, photo right)
```

### Hero Photo
```css
position: absolute;
right: 0; top: 0;
width: 55–60%; height: 100%;
object-fit: cover; object-position: center top;

/* Gradient fade — left edge for text readability */
mask: linear-gradient(to right, transparent 0%, black 30%);
/* OR overlay div: */
background: linear-gradient(to right, #05070A 0%, #05070A 15%, rgba(5,7,10,.8) 50%, transparent 100%);
```

---

## 8. Navigation

```
Logo (left)  |  Подход · Услуги · Кейсы · Обо мне · Контакты (center)  |  Обсудить проект (right)
```

---

## 9. Hero Flow Path

```
Трафик → Сайт → AI-квалификация → Заявка → Обработка → Аналитика → Улучшение
```
- Active dot: `#5F8ED8` with `rgba(95,142,216,.2)` ring
- Inactive dot: `border: 1.5px solid rgba(148,163,184,.3)`
- Active line: `rgba(95,142,216,.5)`
- Inactive line: `rgba(148,163,184,.12)`

---

## 10. Motion

- Stagger on page load: 0.1s step per element
- fadeUp: `translateY(16px) → 0`, `opacity 0→1`, 0.5s ease
- Hover transitions: 0.2–0.25s ease
- Loop animations: status dot pulse, skeleton loading ONLY
- `prefers-reduced-motion`: must be respected

---

## 11. Responsive

| Breakpoint | Rule |
|------------|------|
| 1440px | Design base |
| 1280px | H1 max 56px |
| 1024px | Nav collapse to hamburger |
| 768px | Hero photo → blurred bg, single column |
| 390px | Text first, CTA early, no card overflow |

---

## 12. Forbidden (Never Use)

- Cyberpunk / neon aesthetics
- Violet as primary color (`#5266eb` removed)
- Fake dashboards / decorative floating cards
- Raster AI text in images
- More than 2 accent colors on screen simultaneously
- Generic SaaS blue as main identity
- `box-shadow` stacked on every repeated card
- Pill-shaped primary or secondary buttons
- Stock photos or AI-generated portraits as hero
- D-DIN / SpaceX-style terminal aesthetic
- Heavy glassmorphism on every section

---

## 13. CSS Variables (globals.css reference)

```css
:root {
  /* Canvas */
  --dd-canvas-graphite:   #05070A;
  --dd-canvas-obsidian:   #080C12;
  --dd-surface-obsidian:  rgba(12,17,25,.82);
  --dd-surface-control:   rgba(14,22,34,.72);

  /* Borders */
  --dd-border-steel: rgba(148,163,184,.16);
  --dd-border-cool:  rgba(113,151,198,.18);

  /* Text */
  --dd-text-primary:   #F5F7FB;
  --dd-text-secondary: #B8C1CE;
  --dd-text-muted:     #7F8B9C;

  /* Actions */
  --dd-action-copper:       #B8794B;
  --dd-action-copper-hover: #D09A6E;
  --dd-action-steel-blue:   #7FA6D6;
  --dd-diagnostic-blue:     #5F8ED8;
  --dd-atmosphere-blue:     rgba(92,132,180,.18);

  /* Status */
  --dd-success: #6FBF91;
  --dd-danger:  #D66A6A;

  /* Shadows */
  --dd-shadow-subtle:        0 10px 28px rgba(0,0,0,.24);
  --dd-shadow-panel:         0 22px 58px rgba(0,0,0,.32);
  --dd-shadow-copper-action: 0 16px 42px rgba(184,121,75,.24);
  --dd-shadow-blue-ambient:  0 0 88px rgba(92,132,180,.16);

  /* Radius */
  --dd-radius-xs:    8px;
  --dd-radius-sm:    12px;
  --dd-radius-md:    16px;
  --dd-radius-lg:    20px;
  --dd-radius-xl:    28px;
  --dd-radius-scene: 36px;

  /* Spacing */
  --dd-space-3xs: 4px;
  --dd-space-2xs: 8px;
  --dd-space-xs:  12px;
  --dd-space-sm:  16px;
  --dd-space-md:  24px;
  --dd-space-lg:  32px;
  --dd-space-xl:  48px;
  --dd-space-2xl: 64px;
  --dd-space-3xl: 96px;

  /* Layout */
  --dd-max-w:   1360px;
  --dd-pad-x:   60px;
  --dd-nav-h:   72px;

  /* Font */
  --dd-font-primary: 'Onest', 'Manrope', system-ui, sans-serif;
}
```
