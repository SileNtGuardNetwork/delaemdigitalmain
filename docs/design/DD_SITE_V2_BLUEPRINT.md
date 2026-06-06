# DD Site V2 Blueprint

**Status:** Source of truth for next implementation pass  
**Date:** May 2026 (updated DD-V2-OFFER-FIX)  
**Project:** Delaem Digital / ClientFlow System  
**Predecessor:** `docs/design/DD_SITE_RETHINK_v2.md` (`2f2dfb7`)  
**Mode:** Documentation only — no runtime changes until V2 implementation is approved

---

## Owner decisions locked for this blueprint

| Decision | Choice |
| --- | --- |
| Site direction | **Company-led Premium Digital System Builder** |
| Hero concept | **Company-led / Product-led** — **APPROVED** (see §4) |
| Hero concept (rejected) | ~~Founder-led hero~~ · ~~Hybrid A+B~~ · ~~Founder portrait in hero~~ |
| Visual direction | **Dark Editorial + Premium Command** — product/technology emphasis in hero |
| Brand emphasis | **Делаем Диджитал** as company/product offer in hero; **Виталий** as trust layer in §7 Founder |
| ClientFlow terminology | **Low / Medium** — supporting concept, not homepage methodology |
| Homepage length | **8 sections** (not 13) |
| Core principle | **Clear company offer + managed system first**, then proof → products → process → founder → CTA |
| Hero verb | **Собираем** (not «Соберём» in H1) |

---

## 1. V2 strategic decision

### Frozen state

The section-by-section rebuild program (Steps 2-A through 2-G) is **frozen**. No Step 2-H+ commits without approval of this blueprint.

### What went wrong with v1 narrative

| v1 reality | Owner problem |
| --- | --- |
| Technically clean rebuilds (build/typecheck pass, QA 85–88) | Polished the **wrong concept** |
| 13 sections teaching ClientFlow methodology | Site felt like **internal documentation** |
| Route maps, module grids, audit previews, fit filters | **Too schematic**, not premium brand |
| Products at §06 after long education | **Commercial clarity too late** |
| Hero frozen on old constitution copy | **Offer and founder presence** not aligned with desired v2 |

### v2 must

- Be **simpler, stronger, company-led in hero, less methodological**.
- **Sell a premium outcome** — expensive-looking sites and manageable lead systems — not explain internal methodology on scroll.
- Use ClientFlow as **how work is done**, mentioned sparingly (footer, one product card, optional subline).
- Lead with **company offer + system visual**, then show **what is built** and **why it works**, then **proof → products → process → founder (personal trust) → CTA**.
- **Hero speaks as Делаем Диджитал** — not from Vitaly personally; founder photo and accountability move to §7.

---

## 2. New positioning

### One-line positioning

**Делаем Диджитал** собирает для бизнеса premium-сайты и управляемые системы привлечения клиентов: технология, качество, заявки и аналитика в одном маршруте. **Виталий Тимошенко** — основатель и ответственный архитектор; личное доверие — в секции Founder (§7), не в hero.

### What we sell (outcome, not deliverable list)

- Premium digital presence that **supports high-ticket sales**.
- **Lead capture and handling** that does not fall apart after launch.
- **Production system** (design, build, AI, integrations, analytics) — not a loose bundle of freelancers.

### Avoid

| Avoid | Why |
| --- | --- |
| Heavy **ClientFlow** terminology on every block | Reads as methodology vendor |
| Long **methodology** before offer | Loses high-ticket buyers |
| **Route maps** and phase rails on homepage | Documentation aesthetic |
| Generic **AI agency** claims | Commodity positioning |
| **«Делаем сайты»** as hero | Low-ticket; no system/outcome |

### Audience (implicit, not a dedicated homepage section)

B2B owners, experts, local high-ticket businesses — fit is shown through copy tone and products, not a §09 fit-filter wall.

---

## 3. Tone of voice v2

### Attributes

| Yes | No |
| --- | --- |
| Direct | Hype / superlatives |
| Confident | Academic / textbook |
| Premium | Cheap / mass-market |
| Company-led in hero (мы / собираем) | Founder-led hero (я / собираю в H1) |
| Founder-led in §7 only (личная ответственность) | Anonymous «мы как агентство» без лица ниже |
| Commercial clarity | System-heavy jargon |
| Concrete outcomes | Abstract «экосистемы» |

### Allowed language (direction)

**Hero (company voice):**

- «Собираем для бизнеса управляемую систему привлечения клиентов.»
- «Соединяем сайт, оффер, заявки, Telegram/CRM, AI и аналитику в один маршрут.»
- «Сначала разбор. Потом сборка. Потом запуск под трафик.»

**Founder section (personal voice):**

- «Отвечаю за результат целиком — не за отдельный макет.»
- «Лично веду стратегию, дизайн-направление и запуск.»

### Forbidden language (homepage)

- «инновационные решения»
- «комплексная экосистема»
- «уникальная методология» (as hero or H2)
- «ClientFlow System» in every section header
- «6 этапов / 9 этапов / единый маршрут» as repeated homepage motif
- Fake metrics (scores, uptime, latency)
- § 02 / § 09 section index labels on public homepage

### ClientFlow usage rule

| Level | Where |
| --- | --- |
| **Low** | Footer, «Делаем Систему» product description, optional one subline in Process |
| **Medium (max)** | One mention in Why It Works or Internal Proof — «собрано по логике ClientFlow» |
| **Not on homepage** | Route maps, audit score UI, module grids, fit-filter panels |

---

## 4. Hero v2

### Rejected directions (do not implement)

| Direction | Status | Reason |
| --- | --- | --- |
| **Founder-led hero** (Vitaly kicker, «Собираю», portrait-primary) | **REJECTED** | Owner: hero must speak as company/team |
| **Hybrid A+B** (commercial + founder architect in hero) | **REJECTED** | Superseded by company-led lock |
| **Founder portrait in hero** (`vitaly-hero-cinematic.webp` as primary visual) | **REJECTED** | Portrait moves to §7 Founder only |
| **EN H1 placeholder** (skeleton Offer D) | **REJECTED** | Canonical RU company offer locked |
| **«Соберём» in hero H1** | **FORBIDDEN** | Future tense reserved for CTA/sales copy (§8), not main offer |

### Approved direction: **Company-led / Product-led Hero**

Hero communicates: **technology · quality · managed client acquisition system · company/product-level offer**.

| Field | Canonical copy |
| --- | --- |
| **Kicker** | Делаем Диджитал · сайты, заявки, AI-интеграции |
| **Headline** | Собираем для бизнеса / управляемую систему / привлечения клиентов |
| **Headline (alt)** | Собираем бизнесу / управляемую систему / привлечения клиентов |
| **Subheadline** | Соединяем сайт, оффер, заявки, Telegram/CRM, AI-квалификацию и аналитику в понятный маршрут от первого касания до обращения. |
| **Primary CTA** | Разбор системы |
| **Secondary CTA** | Как это работает → `#why` or `#process` **or** Telegram-канал |
| **Flow strip** | Трафик → Сайт → AI-квалификация → Заявка → Обработка |
| **Visual** | **No Vitaly portrait.** Product/technology emphasis: system artifact, site frame, integration UI, or abstract command layer — Dark Editorial + Premium Command |
| **Hero verb** | **Собираем** only |

### Positioning rules (hero)

1. Company-led, not Vitaly-led.
2. No founder portrait as primary hero visual.
3. Visual = technology, quality, managed system.
4. Founder photo + personal trust = §7 only.
5. Primary CTA unchanged: **Разбор системы**.
6. Flow strip **approved** for hero (5 steps, plain labels).

### Reference only (superseded alternatives)

Earlier concepts A (Direct Commercial), B (Founder Architect), C (Premium System Builder), Hybrid A+B — archived in `DD_SITE_V2_PROTOTYPE.md` revision history; **not for implementation**.

**Note:** Runtime `hero-section.tsx` still reflects V2-1 skeleton; update in V2-2 per this section.

---

## 5. Homepage structure v2

Exactly **8 sections**. Map from current `app/page.tsx` components at implementation time.

---

### Section 1 — Hero

| Field | Direction |
| --- | --- |
| **Goal** | In 5 seconds: what company offers, what system does, what to do next |
| **User question** | «Что это за продукт и что я получу?» |
| **Headline** | Company-led canonical H1 (§4) — **Собираем** |
| **Content blocks** | Kicker, H1, sub, dual CTA, **flow strip** (5 steps) |
| **Visual** | Technology/system artifact — **no founder portrait**; 1360px |
| **CTA** | Разбор системы · Как это работает or Telegram |
| **Avoid** | Vitaly kicker, «Собираю/Соберём» in H1, portrait-led layout, SYS labels |

**Runtime (future):** replace `hero-section.tsx` in V2-2; remove `vitaly-hero-cinematic.webp` from hero.

---

### Section 2 — What I Build

| Field | Direction |
| --- | --- |
| **Goal** | Show three outcomes: сайты / заявки / система — not methodology |
| **User question** | «Что конкретно вы делаете?» |
| **Headline** | Три вещи, которые мы собираем для бизнеса |
| **Content blocks** | 3 pillars: **Premium-сайт** (доверие + конверсия) · **Поток заявок** (формы, квиз, AI, Telegram) · **Управляемая система** (интеграции + аналитика после запуска) |
| **Visual** | 3 strong cards or editorial columns; blue accents; no module grid of 6–7 |
| **CTA** | Optional text link → Product Ladder anchor |
| **Avoid** | Context+System+Assembly collapse into route maps; «ClientFlow Map» title |

**Collapses:** `context-section`, `system-section`, `assembly-section`.

---

### Section 3 — Why It Works

| Field | Direction |
| --- | --- |
| **Goal** | Credibility: strategy + design + AI + integrations — why this is not a template shop |
| **User question** | «Почему это сработает лучше, чем просто заказать сайт?» |
| **Headline** | Почему это работает как **система**, а не как набор услуг |
| **Content blocks** | 4 blocks (not 4 comparison columns): Стратегия и оффер · Дизайн и сборка · AI и квалификация · Интеграции и аналитика — each 2–3 lines |
| **Visual** | Horizontal band or 2×2 grid; editorial typography; one optional «command» detail (e.g. Telegram notify mock) |
| **CTA** | None or soft link to Process |
| **Avoid** | Why+Audit comparison columns; diagnostic score UI; red/green before-after |

**Collapses:** `why-section`, parts of `audit-section` (concept only, not audit product wall).

---

### Section 4 — Internal Proof

| Field | Direction |
| --- | --- |
| **Goal** | «Сначала строим для себя» — show this site and ClientFlow as living proof |
| **User question** | «Вы сами этим пользуетесь?» |
| **Headline** | Сначала собираем систему **для себя** — потом для клиентов |
| **Content blocks** | 2–3 proof slots: Делаем Диджитал (этот сайт) · процесс/кейс-заглушки under real assets · короткий founder quote |
| **Visual** | Browser frame or artifact screenshot; no fake dashboard metrics |
| **CTA** | Кейсы → `/cases` |
| **Avoid** | `leads-section` generic logos; empty social proof |

**Collapses:** `leads-section`; blueprint «Proof / Cases» intent.

---

### Section 5 — Product Ladder

| Field | Direction |
| --- | --- |
| **Goal** | Commercial entry — three products, prices from `lib/pricing.ts` |
| **User question** | «Сколько стоит и с чего начать?» |
| **Headline** | Три уровня входа — от сайта до системы под ключ |
| **Content blocks** | Делаем Сайт / Делаем Трафик / Делаем Систему — price, outcome, 3–4 includes, CTA per card |
| **Visual** | Reuse `ProductLadderCard` pattern; featured = Делаем Систему; copper on primary CTA only |
| **CTA** | Per product → `#contacts?service=…` |
| **Avoid** | Separate `pricing-section` duplicate; invented prices; «Делаем Заявки» public product |

**Runtime:** adapt `services-section.tsx` copy/structure or new `product-ladder-section.tsx`.

---

### Section 6 — Process

| Field | Direction |
| --- | --- |
| **Goal** | Production confidence in **5 steps**, not 9 |
| **User question** | «Как проходит работа?» |
| **Headline** | Пять этапов — без хаоса и без бесконечных согласований |
| **Content blocks** | **1. Разбор** · **2. Стратегия и структура** · **3. Дизайн и сборка** · **4. Интеграции и запуск** · **5. Улучшение по данным** — title + one sentence each |
| **Visual** | Simple horizontal steps (desktop) or vertical timeline (mobile); no phase rails, no 9 cards |
| **CTA** | Начать с разбора → `#contacts` |
| **Avoid** | `process-section` 9-step pipeline; Traffic-ready Gate jargon on homepage |

**Collapses:** 9-step `process-section`.

---

### Section 7 — Founder

| Field | Direction |
| --- | --- |
| **Goal** | Trust and personal responsibility |
| **User question** | «Кто отвечает?» |
| **Headline** | Виталий Тимошенко — архитектор и ответственный за сборку |
| **Content blocks** | Portrait (`vitaly-founder-light.webp`), 3–4 lines bio, 2–3 metrics (restrained), link Обо мне |
| **Visual** | Editorial split; warm but dark; no rim-light schematic |
| **CTA** | Telegram / Контакты |
| **Avoid** | Long manifesto; agency «we» voice |

**Runtime:** rebuild `founder-section.tsx`; keep `id="founder"`.

---

### Section 8 — Final CTA

| Field | Direction |
| --- | --- |
| **Goal** | Close — Разбор системы |
| **User question** | «Что делать дальше?» |
| **Headline** | Разберём, какой digital-контур нужен вашему бизнесу |
| **Content blocks** | Short sub, primary CTA, optional secondary (Аудит → `#audit` or `/diagnostic`) |
| **Visual** | Copper primary button; minimal surface; `id="contacts"` |
| **CTA** | Разбор системы |
| **Avoid** | Form wiring until V2-8; stub `console.log` left until approved |

**Runtime:** rebuild `final-cta-section.tsx`; wire `contact-form.tsx` only in V2-8.

---

### v2 homepage map (implementation target)

```
app/page.tsx (future)
├── HeroSectionV2
├── WhatIBuildSection
├── WhyItWorksSection
├── InternalProofSection
├── ProductLadderSection      ← pricing from lib/pricing.ts
├── ProcessSectionV2          ← 5 steps
├── FounderSectionV2
└── FinalCtaSectionV2
```

Old section files remain in repo until deletion approved; not imported after V2-1 skeleton.

---

## 6. What to keep from current implementation

| Asset | Action |
| --- | --- |
| Clean git history + visual QA docs | Keep as archive |
| `FlagshipContainer` / `--dd-container-flagship` | Default width for all v2 sections |
| `ProductLadderCard` | Reuse for §5 |
| `PrimaryBtn` / `SecondaryBtn`, `KickerLine`, `DdH2`, `DdSub` | Reuse |
| `ModuleCard`, `ProcessStepCard`, `ComparisonColumn`, etc. | **Do not default-import** — only if a v2 section truly needs |
| Header/footer + `lib/navigation.ts` | Keep shell; update anchors after v2 `id`s locked |
| `/api/leads`, legal, quiz, analytics | Untouched until V2-8 |
| `lib/pricing.ts` | **Only** price source |
| `vitaly-founder-light.webp` | §7 Founder only |
| `vitaly-hero-cinematic.webp` | **Not in hero** — retired from hero per company-led lock |
| `DD_SITE_RETHINK_v2.md`, design constitution docs | Reference; constitution hero copy superseded by this blueprint when approved |

---

## 7. What to remove / collapse

| Remove from homepage | Collapse into |
| --- | --- |
| 13-section flow | 8-section flow |
| `context-section` | What I Build |
| `system-section` | What I Build + Why It Works (light) |
| `assembly-section` | What I Build |
| `audit-section` (as homepage wall) | Why It Works (one line) + `/diagnostic` link |
| `why-section` comparison | Why It Works |
| `audience-section` | Tone + products (no dedicated section) |
| `leads-section` | Internal Proof |
| `pricing-section` (separate) | Product Ladder |
| 9-step `process-section` | Process 5-step |
| Repeated route maps / FlowPath rows | Delete from homepage |
| § NN section indices | Delete |
| Heavy «ClientFlow System» headers | Rename to plain language |

**File deletion:** not automatic — owner approves in §10 before removing orphan components.

---

## 8. Visual direction v2

### Chosen system: Dark Editorial + Premium Command (company-led hero)

| Layer | Rule |
| --- | --- |
| **Mood** | Premium dark B2B, company/product-led in hero; founder trust in §7 |
| **Hero composition** | Copy + system/technology visual; **flow strip** below CTAs; **no founder portrait** |
| **Background** | `#05070A` / `#080C12` bands; subtle gradient fades between sections |
| **Typography** | Onest; large H1; short subheads; fewer labels |
| **Image usage** | **No portrait in hero.** `vitaly-founder-light.webp` in §7 only; proof artifacts — real only |
| **Command/system layer** | At most **one** artifact per section (lead card, site frame, Telegram snippet) — never fake KPI dashboard |
| **Card density** | Max 3 cards per row; prefer 2–3 pillars over 6–9 modules |
| **Color discipline** | Copper = kicker + primary CTA; blue = subtle system cue; no red danger; no neon |
| **Motion** | Deferred to V2-7; CSS-only stagger; `prefers-reduced-motion` |

### Must avoid

- Neon, cyberpunk, SaaS purple gradients  
- Fake dashboards and live audit widgets  
- Too many small cards (bento noise)  
- Over-explaining diagrams on scroll  
- Pill primary buttons (radius 10–12px per design constitution)

### Layout

- All v2 sections: `FlagshipContainer` (1360px)  
- Harmonize header to flagship width in separate shell pass (optional)

---

## 9. Implementation plan after approval

| Step | Scope | Deliverable |
| --- | --- | --- |
| **V2-1** | New homepage skeleton | `app/page.tsx` imports 8 new section stubs; old sections unlinked; build pass |
| **V2-2** | Hero | Company-led hero per §4 (no portrait; flow strip) |
| **V2-3** | What I Build + Why It Works | §2–3 content + visuals |
| **V2-4** | Product Ladder + Process | §5–6; `lib/pricing.ts`; 5-step process |
| **V2-5** | Founder + Final CTA | §7–8; `id="founder"`, `id="contacts"` |
| **V2-6** | Mobile QA | 390/430/1440 doc + fixes |
| **V2-7** | Motion pass | CSS stagger only |
| **V2-8** | Forms / lead flow | `contact-form.tsx` → Final CTA; `/api/leads` — **after visual sign-off** |

Each coding step: `npm run build`, `npm run typecheck`, scoped commit, owner review before next step.

**Do not start V2-1 until §10 owner approvals are recorded.**

---

## 10. Owner decisions required

Explicit sign-off needed before implementation:

| # | Decision | Options / status |
| --- | --- | --- |
| 1 | **Approve hero winner** | **Company-led / Product-led** — **LOCKED** (§4) |
| 2 | **Approve 8-section structure** | As §5 — or request changes |
| 3 | **Approve tone of voice** | As §3 |
| 4 | **Approve visual direction** | Hybrid Editorial + Command — as §8 |
| 5 | **Approve collapse/delete old sections** | Unlink + later delete orphan TSX files? (yes/no list) |
| 6 | **Approve starting V2 implementation** | Green-light V2-1 skeleton |
| 7 | **Nav labels** | Keep current header nav or simplify for 8-section anchors |
| 8 | **Diagnostic / audit** | Homepage mention only vs prominent secondary CTA |

### Sign-off block (fill when approved)

```
Approved by: ___
Date: ___
Hero: Company-led / Product-led (LOCKED) / other: ___
Structure: 8 sections / other: ___
Start V2-1: YES / NO
```

---

## Appendix: Reference links

- Reset rationale: `docs/design/DD_SITE_RETHINK_v2.md`
- Tokens: `docs/design/CANONICAL_TOKENS_DECISION_v1.md`
- Visual system v1 (partially superseded): `docs/design/DD_VISUAL_SYSTEM_v1.md`
- Pricing source: `lib/pricing.ts`
- Current homepage (frozen): `app/page.tsx` — 13 sections until V2-1

**Blueprint status:** Hero offer **LOCKED** (company-led) — DD-V2-OFFER-FIX. Other §10 items may still need sign-off.
