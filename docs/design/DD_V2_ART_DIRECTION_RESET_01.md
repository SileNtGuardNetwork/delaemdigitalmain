# DD V2 Art Direction Reset 01

**Status:** Source of truth for next visual redesign — **awaiting owner approval**  
**Date:** May 2026  
**Project:** Delaem Digital / ClientFlow System  
**Trigger:** Owner review after V2-6 (`1d8e2fc`)  
**Mode:** Documentation + design direction only — **no runtime changes**

**Predecessor docs (copy/structure still valid):**

- `DD_SITE_V2_PROTOTYPE.md`
- `DD_SITE_V2_BLUEPRINT.md` (hero offer lock)
- `DD_V2_6_FINAL_CTA_FULL_PAGE_QA.md` (structural pass)

**Frozen implementation passes:**

- ~~V2-7 motion~~ — **do not start**
- ~~V2-8 forms/backend~~ — **do not start**
- ~~Polish current hero visual~~ — **rejected**

---

## 1. Current Visual Verdict

| Item | Verdict |
| --- | --- |
| **V2 8-section structure** | **KEPT** — approved |
| **Company-led offer & copy** | **KEPT** — canonical H1, kicker, CTAs, flow strip |
| **Product logic & pricing source** | **KEPT** — `lib/pricing.ts` untouched |
| **Sections 2–8 content direction** | **KEPT** for now — structural checkpoint |
| **Current visual direction** | **REJECTED** |
| **Current hero (`09ef4ca` → `1d8e2fc`)** | **Structural checkpoint only** — not final design |
| **V2-7 motion on current visuals** | **STOPPED** — motion cannot fix weak art direction |

### Decision

No further homepage **visual implementation** until this document is approved and **V2-7R-1** (hero + header rebuild) is explicitly green-lit.

Copy, IA, backend, legal, pricing, and analytics remain frozen at V2-6 level.

---

## 2. What Is Wrong With Current Hero

Owner review (localhost after V2-6) — documented problems:

### Layout & composition

| Problem | Observation |
| --- | --- |
| **Generic dark SaaS layout** | Standard 50/50 text + card grid reads as template, not custom product |
| **Too much plain black negative space** | `#05070A` field + weak radial glow = empty, not intentional editorial void |
| **No strong brand moment** | First screen has no signature visual — nothing memorable in 3 seconds beyond text |
| **Weak first impression** | Feels like early-stage B2B landing, not high-end digital company |

### Right-side artifact (command panel)

| Problem | Observation |
| --- | --- |
| **Ordinary UI card** | «Системный контур» panel = stacked list rows with borders — common component.gallery pattern |
| **Dashboard demo feel** | Module list + «активно/слой» labels mimic admin UI, not premium acquisition system |
| **Too many small rows** | Five equal cards inside one panel = clutter without hierarchy |
| **No custom visual object** | No abstract system map, no integrated route geometry — reads as placeholder |

### Typography

| Problem | Observation |
| --- | --- |
| **Large but not premium** | H1 is big (extrabold) but lacks refined rhythm, contrast steps, and editorial pacing |
| **Heavy, not refined** | Three equal-weight lines; blue middle line is only accent — no typographic craft |
| **Kicker feels default** | Uppercase copper label = constitution pattern, not brand-specific |

### Color & accents

| Problem | Observation |
| --- | --- |
| **Blue/copper too basic** | `#5F8ED8` dots + `#B8794B` buttons — token-correct but visually generic |
| **No depth system** | Flat rgba panels; no glass/metal/edge light discipline |
| **Weak technology signal** | Accents decorate UI cards; they do not communicate managed system quality |

### Header (supports weak first screen)

| Problem | Observation |
| --- | --- |
| **Wordmark lacks level** | Lowercase plain text `делаем диджитал` — no mark, no intentional typography |
| **Generic navbar** | Sticky blur bar + outline CTA = default SaaS shell |
| **Width mismatch** | Header uses `--container` (1180px); hero uses 1360px — subtle misalignment |

### Summary

The current hero **implements the right offer** but **looks like a mediocre dark SaaS template**. It does not feel like an expensive custom product, a technology studio, or a managed acquisition system. First screen fails the premium bar.

---

## 3. What Must Stay

| Requirement | Detail |
| --- | --- |
| **Company-led hero** | Voice from Делаем Диджитал — not Vitaly |
| **No Vitaly portrait in hero** | Founder trust stays §7 only |
| **Canonical H1** | Собираем для бизнеса / управляемую систему / привлечения клиентов |
| **Canonical kicker** | Делаем Диджитал · сайты, заявки, AI-интеграции |
| **Canonical subheadline** | Соединяем сайт, оффер, заявки… |
| **Primary CTA** | Разбор системы |
| **Secondary CTA** | Как это работает → `#build` |
| **Flow strip** | Трафик → Сайт → AI-квалификация → Заявка → Обработка |
| **Dark premium direction** | Near-black canvas — not cyberpunk |
| **Technology / system feeling** | Must strengthen visually — not remove |
| **8-section homepage** | Order and anchors unchanged |
| **Git history & QA docs** | Archive of V2-1…V2-6 passes |

---

## 4. What Must Change

| Area | Change |
| --- | --- |
| **Hero composition** | New layout — not 50/50 text + list card |
| **Header / wordmark** | Intentional brand lockup; premium calm nav |
| **Right-side artifact** | One custom system visual — not module stack |
| **Typography rhythm** | Editorial scale, weight steps, line-length discipline |
| **Empty space** | Intentional void with depth, gradient fields, or geometry — not flat black |
| **Brand accents** | Refined copper/blue usage — fewer, sharper, more meaning |
| **Visual depth** | Edge light, layered surfaces, subtle glass/metal — no box-shadow elevation spam |
| **First-screen uniqueness** | Signature object or typographic moment competitors cannot copy in 5 minutes |

---

## 5. Target Visual Standard

The site must feel like:

| Yes | No |
| --- | --- |
| Premium digital company | Generic SaaS template |
| Technology studio | Dashboard demo |
| Managed acquisition system | Web agency boilerplate |
| Expensive custom product | Dark mode UI kit |
| Strong visual identity | Command panel from component library |
| Restrained high-ticket B2B | Neon / cyberpunk |
| Editorial + system hybrid | Random floating cards |

### Bar test (first 5 seconds)

Visitor should think: **«This is a serious technology company that builds managed client acquisition systems»** — not **«This is another dark SaaS landing»**.

### Score target before leaving hero pass

**Hero visual self-score ≥ 90/100** on owner review. V2-2 hero scored ~88 on structure; current implementation fails premium bar on aesthetics.

---

## 6. Three New Hero Art Directions

---

### Concept A — Premium Digital System

**Essence:** Hero built around **one custom system visual** — a high-end technology product stage, not a dashboard.

| Dimension | Direction |
| --- | --- |
| **Layout** | Desktop: left 40% typographic column; right 60% **single large system object** (SVG/CSS). Vertical center-weighted. Mobile: type → CTAs → cropped system object (hero band, not full card stack). |
| **Visual object** | Abstract **acquisition-system sculpture**: concentric route rings, 5 nodes (flow strip positions), thin signal lines, one active pulse on «Заявка». Feels like product industrial design — not UI list. |
| **Typography** | Display scale: H1 with size contrast between line 1 and lines 2–3; tighter tracking on kicker; sub at 17–18px with max-width 28em. |
| **CTA placement** | Below sub, above flow strip; flow strip integrated into object baseline — not separate widget row. |
| **Mobile** | System object becomes horizontal **route ribbon** (5 nodes) under CTAs; no tall panel. |
| **Risk** | Abstract SVG can feel cold if over-geometric; needs warm copper entry point on CTA. |
| **Why it can work** | Strongest technology signal; implementable in Next.js (SVG + CSS); no image dependency; unique silhouette. |

---

### Concept B — Dark Editorial Tech Studio

**Essence:** Expensive **editorial technology company** — brand and atmosphere over UI chrome.

| Dimension | Direction |
| --- | --- |
| **Layout** | Desktop: **type-dominant** left 55%; right 45% = subtle atmospheric layer (gradient mesh, noise, one faint system line art) — not a card. Optional oversized wordmark fragment «DD» or «система» watermark at 3% opacity. |
| **Visual object** | **Typographic monument** + one thin **route line** drawing (single path, 5 stops). No panels. Atmosphere: deep graphite + single cool edge light from top-right. |
| **Typography** | Hero as magazine cover: very large H1 (clamp 48–72px), generous line breaks, copper kicker as small caps with wide tracking. Sub shortened visually — one block. |
| **CTA placement** | Inline with typographic block; secondary as text link with arrow — fewer buttons, more confidence. |
| **Mobile** | Full-bleed type; atmosphere crop; flow strip as minimal dot line under CTAs. |
| **Risk** | Can feel empty if atmosphere is too subtle; needs disciplined whitespace and one sharp accent. |
| **Why it can work** | Maximum premium restraint; avoids SaaS card trap; strong brand moment. |

---

### Concept C — Managed Growth Command Layer

**Essence:** **Command/control layer** — managed acquisition visible as state, not fake dashboard.

| Dimension | Direction |
| --- | --- |
| **Layout** | Desktop: asymmetric — copy left; right = **one large command artifact** (glass/metal surface) showing **route state machine**: 5 stages, one highlighted, connection lines, no numeric KPIs. |
| **Visual object** | Single **Command Stage** — wide aspect (~16:10), depth via border-gradient + inner glow + 1px edge highlight. Shows: Трафик → … → Обработка as **state rail** with labels, not list rows. |
| **Typography** | Slightly smaller H1 than B; balance with artifact weight. Mono labels only inside artifact. |
| **CTA placement** | Left column; artifact does not compete with primary button copper. |
| **Mobile** | Artifact becomes **compact state rail** (horizontal scroll-free); stages as chips connected by line. |
| **Risk** | Slips into SaaS if artifact has too many controls; must be **one** surface, max 5 labels. |
| **Why it can work** | Directly maps to offer; closest to current structure but **elevated** — replaces list card with integrated command stage. |

---

## 7. Recommended Winner

### Recommendation: **Hybrid A + C**

**Premium Digital System (A)** + **Managed Growth Command Layer (C)**

| Criterion | Hybrid A+C |
| --- | --- |
| Match to offer | Strong — managed system + route visible |
| Technology & quality | Custom system object + state rail — not list UI |
| Avoids founder hero | No portrait |
| Avoids generic SaaS | One signature object, not card grid |
| Implementable | SVG/CSS/HTML in Next.js — no stock images |
| Polish path | CSS variables, edge lights, SVG animation later (post-90 score) |

### Not recommended alone

| Concept | Why not alone |
| --- | --- |
| **B only** | Weakest technology literal — may under-sell «система» for B2B buyers who need visual proof of production |
| **C only** | Too close to current failed direction without A’s custom sculptural identity |
| **Current implementation** | Rejected |

### Hybrid composition (summary)

- **Left:** Editorial typography (B-influenced rhythm, A/C scale).
- **Right:** One **custom acquisition-system object** with **integrated state rail** (5 flow steps) — sculptural geometry + command surface depth.
- **No** inner list of 5 module rows.
- **No** separate floating cards.

---

## 8. Header / Wordmark Reset

**Do not implement yet.** Direction only.

| Element | Current | Target |
| --- | --- | --- |
| **Wordmark** | Plain lowercase text | Intentional lockup: weight contrast, optional monogram «ДД», tracking discipline; reads as brand, not placeholder |
| **Nav** | 14px gray links, centered | Calm premium: slightly tighter spacing, hover = opacity/light not color jump; align to 1360px flagship |
| **CTA** | Copper outline pill | **Filled copper** or copper with subtle inner glow — feels expensive; 10px radius; not default outline |
| **Bar** | 1180px container, blur | Match hero width (1360px); refined border (hairline); optional subtle bottom edge light |
| **Relationship to hero** | Disconnected shell | Header + hero share background depth language — one canvas |

### Header score target

Header must not downgrade hero — target **85+** alongside hero **90+** in V2-7R-1 review.

---

## 9. Hero Visual Requirements For Next Implementation

### Must

- Real HTML text only (H1, kicker, sub, CTAs, flow labels)
- Company-led copy (canonical §3)
- No Vitaly portrait
- No fake metrics (scores, %, uptime)
- No generic dashboard wall
- No random floating cards
- No neon / cyberpunk / purple SaaS gradients
- CTA above fold at **1440**, **390**, **430**
- `prefers-reduced-motion` respected if motion added later
- Build + typecheck pass

### Must not (carry forward)

- AI raster text in images
- Stock photo people
- 5-row module list inside panel (current pattern — **banned**)
- Reuse current command panel markup as base — **rebuild**

### Responsive

| Breakpoint | Requirement |
| --- | --- |
| **1440** | Type + object balanced; no orphan black void |
| **390** | Copy first; object simplified; no horizontal scroll |
| **430** | Same; touch targets ≥44px |

### Gate

**Hero self-score ≥ 90** on `DD_V2_7R_HERO_QA.md` (to be created in V2-7R-1) before any motion or form work.

---

## 10. Reference Search Brief

**Extract patterns only — do not copy sites.**

### Approved sources

| Source | Use for |
| --- | --- |
| [curated.design](https://www.curated.design) | Premium composition, dark editorial spacing |
| [landing.love](https://www.landing.love) | Hero structure, CTA placement, type scale |
| [saaspo.com](https://saaspo.com) | Product-site discipline — what to avoid as well |
| [appmotion.design](https://appmotion.design) | Restrained motion timing (post-visual pass only) |
| [component.gallery](https://component.gallery) | High-quality component logic — not visual copy |
| [rebrand.gallery](https://rebrand.gallery) | Brand identity restraint, wordmark level |

### Search targets

- Premium dark technology site
- Editorial agency hero (no portrait)
- Product command layer (one artifact)
- Acquisition system visual / abstract system map
- Dark high-ticket studio
- B2B system product stage

### Pattern extraction checklist

- [ ] How first screen creates **one** focal object
- [ ] How typography carries premium without oversized bold only
- [ ] How dark backgrounds use **depth** not emptiness
- [ ] How route/system is shown without dashboard KPIs
- [ ] How header wordmark anchors brand in 72px

---

## 11. Next Implementation Plan

### After owner approves this document

| Step | ID | Scope |
| --- | --- | --- |
| 1 | **V2-7R-1** | Rebuild **hero + header** visual language only |
| 2 | — | `hero-section.tsx`, `hero-section.module.css` |
| 3 | — | `header.tsx` if approved in §12 |
| 4 | — | `docs/design/visual-qa/DD_V2_7R_HERO_QA.md` |
| 5 | — | **No** sections 2–8 |
| 6 | — | **No** backend / forms / pricing / legal |
| 7 | — | `npm run build` + `npm run typecheck` |
| 8 | — | Owner visual review — score ≥ 90 to proceed |

### Explicitly deferred

| Pass | Status |
| --- | --- |
| V2-7 motion (original) | **Cancelled** until hero passes 90+ |
| V2-8 forms | **Deferred** |
| Sections 2–8 visual polish | **After** hero/header pass |

---

## 12. Owner Approval Checklist

| # | Item | Approve? |
| ---: | --- | :---: |
| 1 | **Reject** current visual direction (§1–2) | ☐ |
| 2 | **Keep** V2 structure + company-led copy (§3) | ☐ |
| 3 | **Art direction** — A / B / C / **Hybrid A+C** (recommended) | ☐ |
| 4 | **Header / wordmark reset** direction (§8) | ☐ |
| 5 | **Hero rebuild scope** — V2-7R-1 only (§11) | ☐ |
| 6 | **No motion** until hero visual ≥ 90 | ☐ |
| 7 | **No forms/backend** until hero visual ≥ 90 | ☐ |
| 8 | **Green-light V2-7R-1** implementation | ☐ |

### Sign-off block

```
Approved by: ___
Date: ___
Reject current hero visual: YES / NO
Art direction: Hybrid A+C / A / B / C / other: ___
Header reset approved: YES / NO
Start V2-7R-1: YES / NO
Notes: ___
```

---

## Appendix: Current implementation snapshot (rejected visual)

| File | Role | Status |
| --- | --- | --- |
| `hero-section.tsx` | Company copy + command panel list | Visual **rejected** — copy **kept** |
| `hero-section.module.css` | fadeUp + panel styles | **Replace** in V2-7R-1 |
| `header.tsx` | Plain wordmark + outline CTA | **Rebuild** in V2-7R-1 |

**Last structural commit:** `1d8e2fc` — Polish final CTA and full page QA  
**Last hero visual commit:** `09ef4ca` — Finalize company-led hero (checkpoint)
