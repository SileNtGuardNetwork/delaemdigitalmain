# DD Site Rethink v2

**Status:** Active — reset / strategic pivot  
**Date:** May 2026  
**Project:** Delaem Digital / ClientFlow System  
**Mode:** Documentation only — **no runtime changes in this pass**

---

## 1. Current state summary

### Last good technical checkpoint

| Checkpoint | Commit | Notes |
| --- | --- | --- |
| **Latest (section rebuild wave)** | `cf35634` — Rebuild audience fit section | `main` synced with `origin/main`; working tree clean |
| Foundation + shell | `acc09d3` — Prepare visual rebuild foundation | Header/footer nav, design docs, token decision |
| Hero (frozen) | `4c22f35` — feat(hero): rebuild per design constitution spec | Not part of section-rebuild wave; unchanged since |

Build and typecheck passed on every section-rebuild commit through `cf35634`.

### Homepage sections — rebuild status

| # | Section | Component | FlagshipContainer (1360px) | Rebuild commit wave |
| ---: | --- | --- | :---: | --- |
| 1 | Hero | `hero-section.tsx` | inline 1360px | Frozen (`4c22f35`) |
| 2 | Context / Loss Map | `context-section.tsx` | yes | Step 2-B (`76df102`, `cc30e9b`) |
| 3 | ClientFlow System | `system-section.tsx` | yes | Step 2-B |
| 4 | Assembly | `assembly-section.tsx` | yes | Step 2-C (`c4ec8e1`) |
| 5 | Audit | `audit-section.tsx` | yes | Step 2-C |
| 6 | Services / Product Ladder | `services-section.tsx` | yes | Step 2-D (`5f8171f`) |
| 7 | Process (9-step pipeline) | `process-section.tsx` | yes | Step 2-E (`67dc0a5`) |
| 8 | Why / Differentiation | `why-section.tsx` | yes | Step 2-F (`8628cf9`) |
| 9 | Audience / Fit Filter | `audience-section.tsx` | yes | Step 2-G (`cf35634`) |
| 10 | Leads | `leads-section.tsx` | no (1180px) | Legacy |
| 11 | Pricing | `pricing-section.tsx` | no | Legacy |
| 12 | Founder | `founder-section.tsx` | no | Legacy (+ `id="founder"`) |
| 13 | Final CTA | `final-cta-section.tsx` | no | Legacy |

**Note:** Step 2-G was completed technically before this reset decision. **No further section passes** (2-H+) should run without owner approval of v2 direction.

### What is technically safe

- Clean git history on `main`; all rebuilds scoped and verified (`npm run build`, `npm run typecheck`).
- Shell: header/footer navigation synced via `lib/navigation.ts`.
- Design foundation: `docs/design/*`, visual QA notes per step, `CANONICAL_TOKENS_DECISION_v1.md`.
- Runtime tokens: `--dd-container-flagship: 1360px`; legacy `--container: 1180px` unchanged.
- `dd-ui.tsx` primitives (see §8).
- Backend/legal/analytics layers untouched: `/api/leads`, legal pages, quiz, PostHog hooks on existing CTAs.
- `lib/pricing.ts` as single price source for Services ladder.
- Hero assets: `vitaly-hero-cinematic.webp`, `vitaly-founder-light.webp`.

---

## 2. Why we are stopping

The controlled section-rebuild program (Steps 2-A through 2-G) was **technically successful** but **strategically misaligned** with owner intent.

| Fact | Implication |
| --- | --- |
| Each pass improved layout, width consistency, and QA scores (85–88/100) | Quality of execution ≠ quality of concept |
| Work preserved the **13-section methodology narrative** | Polishing the wrong story |
| Owner does not like underlying **logic, copy, or design direction** | Continuing 2-H (Leads), Pricing, etc. would invest in a site they do not want |
| Page reads increasingly like **ClientFlow documentation** | More sections = more problem, not less |

**Decision:** Stop section-by-section rebuild. Rethink positioning, structure, copy, and visual language before any further runtime work.

---

## 3. Problems with current site direction

Likely issues (hypothesis for owner validation):

### Narrative & copy

- **Too much methodology** — Context, System, Assembly, Audit, Process (9 steps), Why, Audience = long education before commercial clarity.
- **Too many ClientFlow terms** — System, route, pipeline, audit, modules repeated; feels like product documentation.
- **Too many explanatory sections** — 13 screens for a founder-led high-ticket offer; visitor must work to understand what to buy.
- **Not enough founder-led authority** — Vitality present in hero only; mid-page becomes abstract system diagrams.
- **Not enough direct commercial clarity** — Primary path (Разбор системы) competes with methodology; products appear late (§06).
- **Mechanical tone** — Numbered steps, phase rails, comparison columns: correct but cold.

### Visual & UX

- **Visual system too schematic** — Route maps, module grids, fit cards: architectural diagrams, not premium brand.
- **Documentation aesthetic** — Dark B2B + blue route cues + section indices (§ 02…§ 09) = internal playbook, not flagship website.
- **Width band inconsistency** — Sections 2–9 at 1360px; 10–13 at 1180px (would have continued in 2-H).
- **Generic SaaS patterns avoided in QA** — yet comparison grids and product ladders still feel like template B2B.

### Structural

- **Homepage order optimizes for understanding ClientFlow**, not for trust → offer → proof → action.
- **Duplicate ideas** — Context vs Why vs Audience all say “fragmented vs connected” in different wrappers.
- **Process overload** — 9-step pipeline after 6-step route after 6 modules: cognitive load.

---

## 4. Proposed new site direction v2

### Working direction

**Founder-led Premium Digital Architect**

Delaem Digital is not explained as a methodology deck. It is presented as a **high-ticket founder practice** that builds premium client-acquisition systems — sites, traffic, AI, integrations — with direct accountability.

The site should feel:

| Attribute | Target |
| --- | --- |
| Premium | High-ticket, restrained, no template noise |
| Confident | Clear claims; less hedging and less “audit score” theater |
| Direct | What we build, for whom, what it costs, what to do next |
| Personal | Виталий as architect, not anonymous agency |
| Modern | Strong typography and photography; not schematic dashboards |
| Visually strong | Editorial composition; fewer diagram sections |
| Less verbose | Half the words per screen; one idea per section |
| Less methodological | ClientFlow as **how we work**, not **what the page is about** |
| System-based under the hood | Integrations, AI, analytics remain true — not the headline |

**Primary CTA (unchanged until owner says otherwise):** Разбор системы  
**Commercial frame:** Делаем Сайт / Делаем Трафик / Делаем Систему — from `lib/pricing.ts`

---

## 5. Proposed new structure v2

Recommend a **tighter 8-section homepage** (down from 13):

| # | Section | Purpose | Replaces / absorbs |
| ---: | --- | --- | --- |
| 1 | **Hero** — strong founder-led offer | One-screen positioning + CTA + proof strip | Current hero (revise copy/design in v2 pass, not in reset) |
| 2 | **What I Build** — сайт / заявки / система | Three outcomes, not methodology | Context + System + Assembly (compressed) |
| 3 | **Why It Works** — strategy + design + AI + integrations | Credibility without route maps | Why + partial Audit |
| 4 | **Internal Proof** — first we build it for ourselves | Show, don’t diagram | Leads / cases rhythm |
| 5 | **Product Ladder** — Делаем Сайт / Трафик / Систему | Commercial entry | Services (+ optional Pricing merge) |
| 6 | **Process** — 5 clear steps | Production confidence | 9-step Process (simplify) |
| 7 | **Founder** — trust and responsibility | Personal brand | Founder section |
| 8 | **Final CTA** — Разбор системы | Conversion close | Final CTA (+ wire form when approved) |

**Removed or demoted from homepage:**

- Standalone Context, System, Assembly, Audit, Audience as full sections
- Separate Pricing section if ladder is sufficient
- Section index labels (§ 02…)

**Optional secondary pages (later):** ClientFlow methodology, diagnostic, cases — not homepage cargo.

---

## 6. Copy direction v2

Do **not** overwrite locked hero or live components in this document. Three **alternative hero concepts** for owner choice:

### A. Direct commercial

**Kicker:** Виталий Тимошенко · Делаем Диджитал  
**H1:** Собираю систему, которая приводит заявки — не просто сайт.  
**Sub:** Сайт, трафик, AI-квалификация и обработка лидов в одном контуре. Для бизнеса, где заявка дорогая и важна скорость.  
**CTA:** Разбор системы · Telegram-канал  
**Tone:** Short, offer-first, minimal jargon.

### B. Founder architect

**Kicker:** Виталий Тимошенко · digital-архитектор  
**H1:** Проектирую путь клиента от первого касания до заявки.  
**Sub:** Не подряд на страницы — личная сборка premium-систем под ваш продукт, трафик и продажи.  
**CTA:** Разбор системы · Кейсы  
**Tone:** Personal authority, “I build”, high-ticket studio.

### C. Premium system builder

**Kicker:** Делаем Диджитал · ClientFlow  
**H1:** Управляемая система привлечения клиентов под ключ.  
**Sub:** Посадочная, реклама, Telegram, AI и аналитика — связаны в один маршрут. Запускаем только когда система готова к трафику.  
**CTA:** Разбор системы · Продукты  
**Tone:** System promise with restraint; one ClientFlow mention, not a glossary.

---

## 7. Design direction v2

Three visual directions for owner choice. None implemented in code yet.

### A. Dark Editorial Founder

| Field | Direction |
| --- | --- |
| **Mood** | Magazine-like dark editorial; portrait-led; generous whitespace |
| **Hero composition** | Large founder portrait, asymmetric type, single copper CTA; minimal diagram |
| **Visual risks** | Can feel “personal blog” if typography weak; needs strong photography |
| **Why it may work** | Matches founder-led premium; reduces schematic feel; mobbin/curation-friendly |

### B. Premium Command System

| Field | Direction |
| --- | --- |
| **Mood** | Controlled command center — but **not** fake dashboard; real artifacts (site frames, Telegram card, form) |
| **Hero composition** | Split: founder left, one real system artifact right (not 6-step route) |
| **Visual risks** | Slips into SaaS UI if over-designed; needs strict “no fake metrics” rule |
| **Why it may work** | Keeps system credibility without methodology scroll; good for B2B buyers |

### C. Minimal High-Ticket Studio

| Field | Direction |
| --- | --- |
| **Mood** | Ultra-minimal; large type; few sections; almost no diagrams |
| **Hero composition** | Text-dominant; portrait small or environmental; one line of proof |
| **Visual risks** | Can feel empty or under-designed; requires exceptional copy and photography |
| **Why it may work** | Maximum confidence and directness; fastest path to CTA; least documentation-like |

**Shared rules (all directions):** `--dd-*` dark tokens; copper = CTA only; blue = subtle system cue; no neon; no pill buttons; prices from `lib/pricing.ts`.

---

## 8. What to keep from current implementation

| Asset | Keep? | Notes |
| --- | :---: | --- |
| Git history & QA docs | yes | Audit trail for rebuild wave |
| `FlagshipContainer` / `--dd-container-flagship` | yes | Layout standard for v2 |
| `ProductLadderCard` + `lib/pricing.ts` | yes | Commercial ladder |
| `ModuleCard`, `ProcessStepCard`, `PhaseBand` | maybe | Reuse if v2 still needs modules/process — simplify first |
| `ComparisonColumn`, `FitCard`, `FitFilterPanel` | maybe | Only if fit/comparison stays on homepage |
| `RouteStageCard`, `FlowPath` | rethink | Likely too schematic for v2 homepage |
| Header/footer shell + `lib/navigation.ts` | yes | Adjust labels/targets after structure lock |
| Hero assets (webp) | yes | Recompose in new art direction |
| `/api/leads`, legal, quiz, analytics | yes | No changes without explicit task |
| Frozen hero TSX (current) | rethink | Copy/structure may change in v2 hero pass |

---

## 9. What to discard or rethink

- **Overlong methodology flow** — Context → System → Assembly → Audit before products.
- **Dense route maps** — 6-step paths repeated in Context, System, Audit, Process.
- **9-step process** — collapse to 5 for homepage.
- **Section index labels** — § 02 / § 09 internal numbering on public site.
- **Mechanical ClientFlow wording** — use sparingly; methodology moves to `/clientflow` or PDF later.
- **Audience + Why + Context triplication** — one fit/trust moment, not three.
- **Documentation layout patterns** — comparison columns, diagnostic sample scores, phase rails as homepage heroes.
- **13-section default** — default to 8 unless owner explicitly wants more.
- **Continuing Step 2-H+** on current narrative — **stopped**.

---

## 10. Next decisions needed from owner

Short decision list before any v2 implementation:

1. **Hero concept** — A Direct commercial / B Founder architect / C Premium system builder (or hybrid).
2. **Visual direction** — A Dark Editorial / B Premium Command / C Minimal Studio (or hybrid).
3. **Brand mode** — More **personal brand** (Виталий) vs **agency/product** (Делаем Диджитал / ClientFlow).
4. **ClientFlow terminology** — High (methodology brand) / Medium (footer + one section) / Low (hero sub only).
5. **Homepage length** — **8 sections** (recommended) vs keep **13** vs custom count.
6. **Approve reset** — Confirm section rebuild wave is frozen; no more 2-H commits without v2 spec.
7. **Hero pass** — Whether v2 starts with new hero brief or structure-first wireframe.
8. **Pricing on homepage** — Product ladder only vs separate pricing section.

---

## Appendix: Rebuild wave reference (frozen)

| Step | Scope | Commit | QA score |
| --- | --- | --- | ---: |
| 2-A | Shell nav, founder id, tokens | `6d40d15` | — |
| 2-B | Context + System | `76df102`, `cc30e9b` | 87 |
| 2-C | Assembly + Audit | `c4ec8e1` | 88 |
| 2-D | Services ladder | `5f8171f` | 87 |
| 2-E | Process 9-step | `67dc0a5` | 88 |
| 2-F | Why differentiation | `8628cf9` | 88 |
| 2-G | Audience fit | `cf35634` | 88 |

**Program status:** STOPPED — await v2 owner decisions.
