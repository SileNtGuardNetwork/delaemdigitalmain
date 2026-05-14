# 07_DESIGN_SYSTEM — Website Factory

## Purpose
A practical design system baseline for premium conversion websites built with Next.js and Tailwind.

## Visual Principles

- dark-first but readable;
- premium, not decorative;
- calm authority;
- clear hierarchy;
- conversion before effects;
- real UI over AI-raster mockups;
- mobile-first QA even when desktop is designed first.

## Base Tokens

```css
--bg: #080B10;
--surface: rgba(17, 23, 34, 0.72);
--surface-soft: rgba(255, 255, 255, 0.035);
--text: #F3F7FB;
--text-secondary: #A8B3C2;
--text-muted: #6F7B8C;
--primary: #1F6FEB;
--primary-hover: #2F8CFF;
--steel: #7AA2C7;
--warm: #C6A15B;
--border: rgba(255, 255, 255, 0.12);
```

## Typography

Preferred stack:

- Manrope;
- Geist Sans;
- Inter.

Rules:

- H1: large, tight, controlled.
- H2: strong but calmer than H1.
- Body: readable, not tiny.
- Kicker: precise, compact, not decorative.
- Russian typography must be checked visually, not trusted by AI screenshots.

## Spacing

Desktop:

- max width: 1280–1360px;
- section vertical padding: 96–140px;
- hero min-height: close to 100svh;
- card gap: 16–28px.

Mobile:

- section vertical padding: 64–88px;
- side padding: 20–24px;
- no horizontal overflow;
- CTA visible early.

## Radius

- Buttons: 16px.
- Cards: 20px.
- Large panels: 28px.
- Inputs: 14px.
- Pills: 999px.

## Buttons

Primary:

- high contrast;
- 52–60px height;
- radius 16px;
- clear hover;
- optional arrow movement.

Secondary:

- transparent or subtle surface;
- visible border;
- high readability;
- no weak grey text.

## Surfaces

Cards must feel like controlled panels, not generic SaaS boxes.

Use:

- subtle border;
- slight background transparency;
- controlled blur if performance allows;
- no excessive glow.

## Motion

Allowed:

- fade + translateY;
- stagger reveal;
- route-line drawing;
- subtle hover lift;
- button arrow movement;
- accordion smooth open.

Avoid:

- aggressive parallax;
- neon pulse;
- spinning 3D;
- distracting scroll hijack;
- motion that breaks mobile performance.

## Visual Anti-Patterns

Reject:

- fake dashboards;
- random floating cards;
- cyberpunk neon;
- cheap gradient blobs;
- childish icons;
- tiny unreadable text;
- repeated card grids in every section;
- text rendered inside images.
