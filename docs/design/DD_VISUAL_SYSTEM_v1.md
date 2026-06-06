# DD Visual System v1

**Project:** Delaem Digital / ClientFlow System  
**Status:** Foundation doc (DD-STEP-1)  
**Canonical tokens:** see `CANONICAL_TOKENS_DECISION_v1.md`

## Positioning

Founder-led **ClientFlow Architecture** — not a generic agency site.  
Sells a managed route: website → AI qualification → Telegram/CRM → analytics → qualified lead.

**Primary conversion CTA (site-wide):** Разбор системы  
**Header shell CTA:** Обсудить проект (same destination `#contacts` in Step 1)

## Visual language

| Principle | Rule |
| --- | --- |
| Mood | Premium dark B2B, architectural, restrained |
| Tone | Founder-led, high-ticket, controlled |
| Forbidden | Neon, cyberpunk, fake dashboards, random floating cards, generic SaaS template, pill primary buttons, heavy elevation shadows |
| Motion | Subtle fade/slide only; respect `prefers-reduced-motion` |
| Copy | Locked hero offer per `hero-factory-brief-v1.md` — do not change without owner approval |

## Token usage (runtime)

Use CSS variables from `app/globals.css` `:root`:

- **Canvas:** `--dd-canvas-graphite`, `--dd-canvas-obsidian`
- **Text:** `--dd-text-primary`, `--dd-text-secondary`, `--dd-text-muted`
- **Action:** `--dd-action-copper`, `--dd-action-copper-hover`, `--dd-action-steel-blue`
- **Signal:** `--dd-diagnostic-blue`, `--dd-success`, `--dd-danger`
- **Structure:** `--dd-border-steel`, `--dd-border-cool`
- **Elevation:** `--dd-shadow-subtle`, `--dd-shadow-panel`, `--dd-shadow-copper-action`
- **Radius:** `--dd-radius-sm` (12px) for controls; header nav CTA `10px` until harmonized
- **Font:** `--dd-font-primary` (Onest + Manrope via `next/font`)

Full tables: `docs/delaem-digital-design-tokens-v1.md`

## Layout primitives

| Element | Guideline |
| --- | --- |
| Section max width | `1360px` for hero (frozen); `--container` 1180px elsewhere until unified |
| Horizontal padding | `60px` desktop / `24px` mobile |
| Section rhythm | Full-bleed dark bands; 40px bottom fade between bands where `SectionFrame` uses `fadeTo` |
| Grid | Editorial 2-col splits; no decorative bento noise |

## Component layers (current codebase)

| Layer | Location | Step 1 status |
| --- | --- | --- |
| Hero | `hero-section.tsx` + module CSS | **Frozen** |
| Sections 2–13 | `dd-ui.tsx` + per-section files | Frozen — rebuild in Step 2+ |
| Header | `header.tsx` + `lib/navigation.ts` | Aligned in Step 1 |
| Legacy CSS | `globals.css` (~4k lines) | Inventory only — not removed |

## Homepage section map (13 screens)

Order in `app/page.tsx`:

1. Hero `#top`  
2. Context `#context`  
3. System `#system`  
4. Assembly  
5. Audit `#audit`  
6. Services `#services`  
7. Process  
8. Why  
9. Audience  
10. Leads  
11. Pricing `#pricing`  
12. Founder *(no id yet)*  
13. Final CTA `#contacts`

## Motion plan (first visual pass)

- Hero: CSS `fadeUp` stagger (implemented, frozen)
- Future sections: same pattern or CSS-only; no Framer/Lenis/GSAP until approved
- Reference: `appmotion.design` patterns — extract timing/easing ideas only
