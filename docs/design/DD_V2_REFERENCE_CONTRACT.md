# DD V2 Visual Reference Contract

**Status:** Source of truth for future hero/header visual implementation  
**Date:** June 2026  
**Project:** Delaem Digital / ClientFlow System  
**Mode:** Documentation only — **no runtime changes without approved mockup**

**Related docs:**

- `DD_V2_ART_DIRECTION_RESET_01.md` — why AI art direction stopped
- `DD_SITE_V2_PROTOTYPE.md` — copy and 8-section structure
- `DD_SITE_V2_BLUEPRINT.md` — company-led offer lock

---

## 1. Current Status

| Item | State |
| --- | --- |
| **V2 8-section structure** | **KEPT** — approved |
| **V2 company-led copy** | **KEPT** — canonical hero/content |
| **Bad AI hero commit** | `66df659` — Redesign hero and header art direction |
| **Revert** | `9842329` — Revert "Redesign hero and header art direction" |
| **Current hero/header** | **Structural checkpoint only** — not final design |
| **AI-led art direction** | **STOPPED** — no more Cursor-invented visual passes |
| **Cursor role** | **Implementation engineer** — from references/mockups only |
| **Forms, motion, analytics, cleanup, deploy** | **ON HOLD** |

### Operating rule

Cursor must **not** invent original art direction. Future visual work requires an **approved reference contract** (this document) **plus** an **owner-approved static mockup** before any `hero-section.tsx` / `header.tsx` code changes.

---

## 2. Approved Reference Stack

| Role | Reference | Purpose |
| --- | --- | --- |
| **Main visual anchor** | **Scale** | Dark high-tech hero, abstract geometric system object, enterprise AI seriousness |
| **Supporting — rhythm / CTA** | **Mercury** | Calm premium spacing, one accent, lightweight headline authority, command restraint |
| **Supporting — typography / luxury** | **Sequel** | Black-canvas confidence, sharp type, gallery restraint, minimal chrome |

### Why this stack

| Reference | Contribution |
| --- | --- |
| **Scale** | Ultra-dark canvas, crisp light typography, **one** abstract geometric / iridescent hero object, minimal UI noise, technology credibility — not a dashboard |
| **Mercury** | Calm spacious rhythm, single strong CTA accent, headline that feels authoritative without heaviness, generous whitespace, no decorative clutter |
| **Sequel** | Black gallery-space confidence, sharp typographic hierarchy, components barely visible until needed, luxury restraint without losing B2B tech |

**Combination:** Scale × Mercury × Sequel = dark premium technology company with one abstract system visual and restrained typography — **not** a template, not agency boilerplate, not AI dashboard.

---

## 3. What We Take From Scale

### Take

- Ultra-dark canvas (near-black, not flat void)
- Crisp white / light typography on dark
- **Abstract geometric or iridescent system object** as hero visual anchor
- Minimal UI noise — one focal object, not many panels
- Enterprise / technology seriousness
- **One conceptual visual anchor** instead of dashboard panels or module lists

### Do not take

- Generic AI startup clichés (glow orbs, «neural» buzzwords as visuals)
- Excessive abstract 3D that feels random or decorative without system meaning
- Weak centered generic copy blocks
- Overuse of gradient decoration without structure
- Fake product UI chrome

---

## 4. What We Take From Mercury

### Take

- Calm, spacious vertical rhythm
- **One** strong CTA accent (copper) — not rainbow buttons
- Light-weight headline **feeling** — authority through spacing and weight discipline, not only size
- Premium command-center **restraint** — control without dashboard density
- Generous section spacing
- No decorative clutter around primary message

### Do not take

- Full mountain / landscape photography as hero mood
- Fintech-specific visual patterns (charts, cards, account UI)
- Overly empty hero with no product/system meaning
- Illustration-led consumer fintech tone

---

## 5. What We Take From Sequel

### Take

- Black canvas / gallery-space confidence
- Sharp typography hierarchy
- Minimal component visibility — type and one object carry the screen
- Luxury restraint in borders, radius, and chrome
- Pill / lozenge actions **if** they match design constitution (10px radius primary still preferred per `design-constitution-v1.md` — adapt lozenge only where mockup explicitly approves)

### Do not take

- Personal portrait-led story (Vitaly stays §7 only)
- Editorial/luxury mood so strong the site stops feeling **technological**
- Generic black-and-white portfolio look
- Fashion/gallery brand that undermines managed-system offer

---

## 6. Delaem Digital Target Visual Direction

### Formula

**Scale × Mercury × Sequel**

### Definition

A **dark, premium technology-company** site with:

- **One** strong abstract acquisition-system visual (Scale)
- **Restrained** typography and calm spacing (Mercury + Sequel)
- **No** fake dashboards, module lists, or KPI panels

### The site must feel like

| Yes | No |
| --- | --- |
| Premium technology company | SaaS template |
| Managed acquisition system | Agency boilerplate |
| Expensive custom digital product | AI-generated dashboard |
| Serious B2B high-ticket | Cyberpunk / neon startup |
| Company-led (Делаем Диджитал) | Founder portrait hero |

### Bar test

First screen: visitor senses **technology studio + managed system** — not **dark landing template**.

---

## 7. Hero Contract

### Canonical content (unchanged)

| Field | Copy |
| --- | --- |
| **Kicker** | Делаем Диджитал · сайты, заявки, AI-интеграции |
| **H1** | Собираем для бизнеса / управляемую систему / привлечения клиентов |
| **Subheadline** | Соединяем сайт, оффер, заявки, Telegram/CRM, AI-квалификацию и аналитику в понятный маршрут от первого касания до обращения. |
| **Primary CTA** | Разбор системы → `#contacts` |
| **Secondary CTA** | Как это работает → `#build` |
| **Flow (optional strip)** | Трафик → Сайт → AI-квалификация → Заявка → Обработка |

### Visual must (from reference stack)

- **One** abstract acquisition-system object — geometric / iridescent / signal geometry per **approved mockup**
- Scale-level darkness + crisp type
- Mercury-level spacing and single CTA accent
- Sequel-level typographic sharpness and restraint

### Visual must not

- Dashboards, card lists, module rows (current reverted pattern — **banned**)
- Fake metrics, KPI cards
- Vitaly portrait
- SaaS admin panel on the right
- Stock people, AI raster text in images
- Cursor-invented «command panel» without mockup approval

### Responsive

- Desktop 1440: strong immediate impression; CTA above fold
- Mobile 390/430: copy first; visual simplified per mockup; no overflow; no absurd height

---

## 8. Header Contract

| Requirement | Direction |
| --- | --- |
| **Brand** | Real lockup — not temporary lowercase placeholder; per approved mockup |
| **Width** | Align with hero flagship **1360px** |
| **Navigation** | Restrained; labels unchanged: Что делаю · Подход · Продукты · Обо мне · Контакты |
| **CTA** | Разбор системы — premium, not default outline-only unless mockup specifies |
| **Tone** | Mercury calm + Sequel restraint |

### Avoid

- Gimmicks, neon, heavy logo effects
- Mega menu
- Misalignment with hero canvas
- Cursor-invented monogram without mockup approval

---

## 9. Explicit Visual Bans

The following are **forbidden** in hero/header implementation unless owner explicitly removes from this list:

| Ban | Notes |
| --- | --- |
| Generic command panel | Reverted `66df659` module stack |
| Right-side module list | «Системный контур» rows — structural only, not final |
| Fake dashboard | Scores, charts, live widgets |
| KPI cards | Any numeric fake proof |
| Random floating cards | Bento noise |
| Neon / cyberpunk | Design constitution |
| Purple SaaS gradient | Design constitution |
| Stock people | Including founder in hero |
| Vitaly portrait in hero | §7 only |
| AI-generated raster text | Real HTML text only |
| Overdesigned logo effects | Glow, 3D logo, etc. |
| Heavy glassmorphism | Subtle depth OK if mockup-approved |
| Cursor-invented art direction | **Always banned** |

---

## 10. Cursor Implementation Rules

### Cursor MAY

- Implement **owner-approved static mockup** (Figma, PNG, PDF spec)
- Translate **this reference contract** + mockup into Next.js / Tailwind / CSS / SVG
- Improve responsive layout within mockup bounds
- Run `npm run build` and `npm run typecheck`
- Create scoped QA docs (e.g. `DD_V2_*_QA.md`)
- Touch only files in approved scope (typically `hero-section.tsx`, `hero-section.module.css`, `header.tsx`)

### Cursor MAY NOT

- Invent new hero art direction or «improve» visuals without mockup
- Decide visual concept alone
- Add UI panels because they «look tech»
- Add motion before static visual approval
- Alter sections 2–8 without explicit scope
- Change forms, API, pricing, legal, analytics, env, dependencies
- Deploy to production without owner request
- Repeat failed patterns from `66df659` (SVG route + module-adjacent panels)

---

## 11. Next Approved Workflow

```
1. Owner selects visual basis
   └─ Scale-led mockup (static) OR reference collage + written spec

2. Assistant / designer converts to implementation spec
   └─ Layout grid, type scale, object description, colors, breakpoints

3. Cursor implements ONLY that spec
   └─ Single scoped commit; build + typecheck

4. Owner reviews localhost
   └─ Pass / fail; no auto-continue

5. Only after visual approval:
   └─ Motion (optional) → Forms (V2-8) → Analytics → Cleanup → Deploy
```

### Roles

| Role | Responsibility |
| --- | --- |
| **Owner** | Approve mockup, localhost sign-off |
| **Designer / Assistant** | Mockup + implementation spec from Scale/Mercury/Sequel |
| **Cursor** | Code implementation only |

---

## 12. Implementation Gate

Before **any** future hero/header code change:

| Gate | Required |
| --- | --- |
| Reference stack acknowledged | This document + `DD_V2_ART_DIRECTION_RESET_01.md` |
| Static mockup or spec | **Owner-approved** |
| Scope document | Files listed; sections 2–8 out of scope |
| Motion | **No** |
| Backend / forms | **No** |
| Build + typecheck | **Yes** |
| Owner localhost review | **Yes** — before next pass |

### Sign-off block (fill before implementation)

```
Mockup approved by: ___
Date: ___
Reference stack: Scale + Mercury + Sequel
Implementation scope: hero + header / other: ___
Start Cursor implementation: YES / NO
```

---

## Appendix: Git state at contract lock

| Commit | Description |
| --- | --- |
| `9842329` | Revert failed AI hero/header redesign |
| `66df659` | Rejected — do not re-apply |
| `c84c1e9` | Art direction reset doc (superseded for implementation by **this contract**) |
| `1d8e2fc` | V2-6 final CTA + full page structural QA |

**Runtime hero/header:** Pre-`66df659` checkpoint (company copy + command panel list). **Not final.**
