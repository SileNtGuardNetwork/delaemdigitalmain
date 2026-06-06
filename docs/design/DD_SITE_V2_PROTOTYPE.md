# DD Site V2 Prototype — Full Pre-Code Homepage

**Status:** Hero offer **LOCKED** (company-led) — DD-V2-OFFER-FIX  
**Date:** May 2026  
**Project:** Delaem Digital / ClientFlow System  
**Repository:** SileNtGuardNetwork/delaemdigitalmain  
**Baseline:** V2-1 skeleton (`2163367`) · prototype doc (`d554b49`)  
**Mode:** Prototype before code — **no runtime changes until approved**

**Source hierarchy:**

| Doc | Role |
| --- | --- |
| `DD_SITE_V2_BLUEPRINT.md` | Structure, positioning, hero direction |
| `DD_SITE_RETHINK_v2.md` | Why v1 stopped; strategic pivot |
| `DD_VISUAL_SYSTEM_v1.md` | Tokens, layout primitives (partially superseded) |
| `DD_VISUAL_QA_GATE_v1.md` | Pass criteria for implementation |
| `design-constitution-v1.md` | Color, type, button rules |
| `REFERENCE_PACK_v1.md` | Editorial + command visual references |
| `lib/pricing.ts` | **Only** price source |

---

## 1. Site Thesis

### What the website must communicate

**Делаем Диджитал** — компания, которая собирает для бизнеса **premium digital** и **управляемые системы привлечения клиентов**: технология, качество, заявки, AI-интеграции и аналитика в одном маршруте.

Сайт не продаёт «дизайн» и не объясняет внутреннюю методологию на каждом экране. Он отвечает на три вопроса:

1. **Что предлагает компания** — управляемая система привлечения клиентов, не набор услуг.
2. **Что получит бизнес** — доверие, заявки, управляемый контур.
3. **С чего начать** — разбор, продукт, процесс, контакт.

**Личное доверие** (Виталий Тимошенко, ответственность, портрет) — **секция 7 Founder**, не hero.

### Sharpened thesis (one paragraph)

> Делаем Диджитал собирает для бизнеса управляемую систему привлечения клиентов: premium-сайт, оффер, заявки, Telegram/CRM, AI-квалификация и аналитика в понятном маршруте от первого касания до обращения. Hero говорит от лица компании и продукта. Основатель Виталий Тимошенко — слой доверия ниже по странице: личная ответственность за архитектуру, визуальный уровень и запуск.

### What the site is NOT

- Не каталог услуг фрилансера.
- Не учебник ClientFlow.
- Не обещание «гарантированных лидов».
- Не дешёвый конструктор сайтов.

---

## 2. Audience

### For whom

| Segment | Signal in copy |
| --- | --- |
| **Владельцы бизнеса** | Нужен понятный маршрут от касания до заявки, не хаос инструментов |
| **Эксперты и консультанты** | Premium-образ, доверие, high-ticket заявка |
| **B2B-услуги** | Система под рекламу и квалификацию |
| **Локальный high-ticket** (клиники, студии, производство) | Сайт как точка доверия + обработка обращений |
| **Проекты с бюджетом на нормальный контур** | От 150 000 ₽ — готовность инвестировать в маршрут, не в «страничку» |

Fit показывается **тоном, продуктами и ценами** — без отдельной секции «кому подходит».

### Not for whom

| Segment | Why we say no (quietly, not arrogantly) |
| --- | --- |
| Запрос «сделайте одностраничник за N» | Нет продукта под дешёвый one-page |
| Нет оффера / продукта | Сайт не заменяет продукт и позиционирование |
| Ожидание лидов без трафика, обработки и данных | Система требует процесса — мы честно об этом говорим |
| Нужен только «красивый макет» без заявок | Мы собираем вход в продажи, не портфолио ради портфолио |

### Tone toward «not for» audience

Премиум, не высокомерно: «Мы собираем систему привлечения — если нужна только визитка, это другой формат работы.»

---

## 3. Main Offer

### Rejected hero offers (DD-V2-OFFER-FIX)

| Offer | Status |
| --- | --- |
| Offer A–E (founder «Собираю», Hybrid A+B, EN hook) | **REJECTED** for hero |
| Founder-led hero with Vitaly kicker/portrait | **REJECTED** |
| «Соберём» in hero H1 | **FORBIDDEN** |

### Approved winner: **Company-led / Product-led (canonical)**

**H1 (canonical):**

```
Собираем для бизнеса
управляемую систему
привлечения клиентов
```

**H1 (accepted alternative):**

```
Собираем бизнесу
управляемую систему
привлечения клиентов
```

**Kicker:** Делаем Диджитал · сайты, заявки, AI-интеграции

**Subheadline:** Соединяем сайт, оффер, заявки, Telegram/CRM, AI-квалификацию и аналитику в понятный маршрут от первого касания до обращения.

**Flow strip:** Трафик → Сайт → AI-квалификация → Заявка → Обработка

**Hero verb rule:** **Собираем** only in H1. «Соберём» allowed in Final CTA (§8) and sales microcopy, not in main company offer.

**Rationale:** Company/product-level clarity in 5 seconds; technology and managed system; founder trust deferred to §7.

---

## 4. Tone of Voice

### Allowed

| Attribute | Example |
| --- | --- |
| Direct | «Сначала разбор. Потом сборка.» |
| Company-led (hero) | «Собираем», «Соединяем», «Делаем Диджитал» |
| Founder-led (§7 only) | «Отвечаю лично», «Веду каждый проект» |
| Confident | «Premium digital», «управляемый вход в продажи» |
| Commercial | «от 150 000 ₽», «три уровня входа» |
| Clear | Короткие предложения, один смысл на блок |
| Premium | Сдержанные формулировки, без крика |

### Forbidden (homepage)

| Phrase / pattern | Why |
| --- | --- |
| «инновационные решения» | Generic agency |
| «комплексная экосистема» | Abstract, SaaS-template |
| «уникальная методология» в hero/H2 | Methodology vendor |
| ClientFlow в каждом заголовке | Internal docs aesthetic |
| «6 этапов / 9 этапов / единый маршрут» как повторяющийся мотив | v1 overload |
| Fake metrics (scores, uptime, latency) | Trust damage |
| § NN / Frame NN section labels | Internal playbook |
| Founder-led hero (я / Собираю в H1) | Owner rejected — hero is company voice |
| «Соберём» in hero H1 | Future tense — CTA/sales only |

### ClientFlow terminology rule

| Level | Where |
| --- | --- |
| **Low** | Footer, описание «Делаем Систему», опционально одна строка в Process |
| **Medium (max)** | Одно упоминание в Internal Proof или Why It Works |
| **Not on homepage** | Route maps, audit UI, module grids, fit filters |

---

## 5. CTA Map

Primary conversion path: **Разбор системы** → `#contacts` (form wired in V2-8 only).

| CTA | Type | Where it appears | Links to | User expects after click |
| --- | --- | --- | --- | --- |
| **Разбор системы** | Primary | Hero, Header nav CTA, Process, Final CTA, Product cards (variant) | `#contacts` | Скролл к финальному блоку; позже — форма заявки на разбор |
| **Как это работает** | Secondary | Hero (preferred), Why It Works (optional) | `#why` or `#process` | Понимание подхода или 5 шагов процесса |
| **Telegram-канал** | Secondary (alt) | Hero, Final CTA, Founder (optional) | `https://t.me/delaemdigital` | Открытие Telegram; контент, процесс, кейсы |
| **Посмотреть продукты** | Additional | Hero (optional text link), What I Build (optional) | `#products` | Три продукта с ценами и входом |
| **ClientFlow Аудит** | Additional | Final CTA secondary (optional), footer | `/diagnostic` or `#audit` if page exists | Диагностика системы до разговора — не главный путь |
| **Смотреть кейсы** | Additional | Internal Proof | `/cases` | Реальные проекты |
| **Начать с разбора** | Additional | Process | `#contacts` | Same as primary |
| **Написать на email** | Fallback | Final CTA placeholder (skeleton) | `mailto:hello@delaem.digital` | Прямой контакт до формы |

**No backend wiring in prototype phase.** CTAs are scroll, external link, or mailto only until V2-8.

### Header navigation (V2 locked in skeleton)

| Nav label | Anchor |
| --- | --- |
| Что делаю | `#build` |
| Подход | `#why` |
| Продукты | `#products` |
| Обо мне | `#founder` |
| Контакты | `#contacts` |
| Header CTA | Разбор системы → `#contacts` |

---

## 6. Homepage Prototype — 8 Sections

---

### Section 1 — Hero

| Field | Content |
| --- | --- |
| **Number** | 01 |
| **Name** | Hero |
| **Anchor** | `#top` (implicit) |
| **Goal** | Offer clear in 5 seconds; position **Делаем Диджитал** as company/product; communicate technology + managed system |
| **User question** | «Что это за продукт и что я получу?» |

**Kicker:** Делаем Диджитал · сайты, заявки, AI-интеграции

**Headline (canonical):** Собираем для бизнеса / управляемую систему / привлечения клиентов

**Headline (alt):** Собираем бизнесу / управляемую систему / привлечения клиентов

**Subheadline:** Соединяем сайт, оффер, заявки, Telegram/CRM, AI-квалификацию и аналитику в понятный маршрут от первого касания до обращения.

**Content blocks:**

- Kicker (copper rule + uppercase label)
- H1 (3 lines; key phrase «управляемую систему» in diagnostic blue)
- Subheadline (one sentence)
- Primary CTA: Разбор системы
- Secondary CTA: Как это работает → `#why` or `#process` **or** Telegram-канал
- **Flow strip:** Трафик → Сайт → AI-квалификация → Заявка → Обработка
- System/technology visual (artifact, site frame, integration UI) — **no founder portrait**

**CTA:** Разбор системы · Как это работает or Telegram-канал

**Visual direction:**

- Dark Editorial + Premium Command: copy left; **technology/system visual** right or full-bleed background
- **No** `vitaly-hero-cinematic.webp` in hero
- Flow strip with blue dots/connectors (approved)
- FlagshipContainer 1360px; min-height ~100vh
- Copper kicker + primary button; blue accent on H1 highlight

**What to avoid:**

- Founder portrait, Vitaly kicker, «Собираю» / «Соберём» in H1
- Fake dashboard, neon, purple gradients
- ClientFlow map, § index, SYS labels
- English H1 (skeleton placeholder)

**Acceptance criteria:**

- [ ] Visitor names **managed client acquisition system** in 5 seconds
- [ ] Hero reads as **company/product**, not personal founder page
- [ ] **No** Vitaly portrait in hero
- [ ] Flow strip present with 5 canonical steps
- [ ] Primary CTA visible above fold on 1440px and 390px

---

### Section 2 — What I Build

| Field | Content |
| --- | --- |
| **Number** | 02 |
| **Name** | What I Build |
| **Anchor** | `#build` |
| **Goal** | Three outcomes: site / leads route / managed system |
| **User question** | «Что конкретно вы делаете?» |

**Kicker:** Что мы собираем

**Headline:** Три результата вместо набора разрозненных услуг

**Subheadline:** Не отдельный лендинг и не «ещё один инструмент» — связанный digital-контур под заявки и управление после запуска.

**Content blocks (3 cards):**

| Card | Title | Body |
| --- | --- | --- |
| 1 | Сайт, который продаёт доверие | Premium-посадочная: оффер, визуальный уровень и путь к заявке — без ощущения шаблона. |
| 2 | Заявки, которые не теряются | Формы, квиз, AI-квалификация и Telegram — обращение попадает в рабочий контур. |
| 3 | Система, которой можно управлять | Интеграции, аналитика и регламенты после запуска — видно, что работает и что улучшать. |

**CTA:** Optional text link «Посмотреть продукты» → `#products`

**Visual direction:**

- 3 cards in one row (desktop) / stack (mobile)
- ModuleCard or editorial column pattern; blue index accents optional
- Background band `#080C12`; FlagshipContainer

**What to avoid:**

- 6–7 module grid, ClientFlow Map title, route diagrams
- Collapsing into Context+System+Assembly visual language

**Acceptance criteria:**

- [ ] Exactly 3 pillars, plain language
- [ ] No methodology education longer than 2 lines per card
- [ ] Mobile: single column, readable without horizontal scroll

---

### Section 3 — Why It Works

| Field | Content |
| --- | --- |
| **Number** | 03 |
| **Name** | Why It Works |
| **Anchor** | `#why` |
| **Goal** | Credibility: strategy + design + AI + analytics |
| **User question** | «Почему это лучше, чем просто заказать сайт?» |

**Kicker:** Подход

**Headline:** Почему это работает как производственная система

**Subheadline:** Стратегия, дизайн, интеграции и аналитика в одном контуре — без лишней методологии на каждом экране.

**Content blocks (4 pillars):**

| Pillar | Title | Body |
| --- | --- | --- |
| 1 | Стратегия | Оффер, аудитория и структура — до дизайна и вёрстки. |
| 2 | Премиальный дизайн | Визуальный уровень, который выдерживает дорогую заявку и рекламу. |
| 3 | AI, Telegram, CRM | Заявка не теряется: квалификация, уведомления и передача в продажи. |
| 4 | Аналитика и улучшения | Цели, события и цикл доработок после запуска — по данным, не по ощущениям. |

**CTA:** Optional «Как проходит работа» → `#process`

**Visual direction:**

- 2×2 grid desktop / 1 col mobile
- Editorial typography; one optional command detail (Telegram notify snippet) — not comparison columns
- Band fade `#05070A` → `#080C12`

**What to avoid:**

- Red/green before-after columns, diagnostic score UI, audit wall
- «Уникальная методология» as H2

**Acceptance criteria:**

- [ ] 4 blocks, each ≤3 lines body
- [ ] No fake KPI dashboard
- [ ] ClientFlow mentioned 0–1 times total in section

---

### Section 4 — Internal Proof

| Field | Content |
| --- | --- |
| **Number** | 04 |
| **Name** | Internal Proof |
| **Anchor** | `#proof` |
| **Goal** | We build the system for ourselves first |
| **User question** | «Вы сами этим пользуетесь?» |

**Kicker:** Доказательство

**Headline:** Сначала собираем систему для себя — потом для клиентов

**Subheadline:** Не продаём то, чего нет. Собственный сайт, продукты и процесс — тот же стандарт, что предлагаем бизнесу.

**Content blocks:**

| Slot | Title | Body |
| --- | --- | --- |
| 1 | Делаем Диджитал | Этот сайт — живой пример: founder-led offer, продуктовая лестница, диагностика и сборка под заявки. |
| 2 | Build in public | Показываем процесс и артефакты — не обещания на слайдах. Кейсы и подход — в открытом доступе. |

Optional third slot (future): short founder quote — one sentence, no manifesto.

**CTA:** Смотреть кейсы → `/cases`

**Visual direction:**

- 2 editorial cards or browser-frame artifact (real screenshot when available)
- No logo wall, no fake metrics
- Link to cases as secondary copper-outline button

**What to avoid:**

- `leads-section` generic logos
- Invented conversion numbers, uptime, latency

**Acceptance criteria:**

- [ ] Honest proof only — site itself + process visibility
- [ ] CTA to real `/cases` page
- [ ] No empty social proof placeholders

---

### Section 5 — Product Ladder

| Field | Content |
| --- | --- |
| **Number** | 05 |
| **Name** | Product Ladder |
| **Anchor** | `#products` |
| **Goal** | Three products with commercial entry |
| **User question** | «Сколько стоит и с чего начать?» |

**Kicker:** Продукты

**Headline:** Три уровня входа — от сайта до системы под ключ

**Subheadline:** Цены и состав — из актуального прайса. Без скрытых доплат на старте разговора.

**Content blocks (from `lib/pricing.ts`):**

| Product | Price | Outcome (card) | Includes (3–4 bullets) | CTA |
| --- | --- | --- | --- | --- |
| **Делаем Сайт** | от 150 000 ₽ | Premium-посадочная под рекламу: доверие, заявка, готовность к трафику. | Премиальная посадка · AI-логика заявки · Готовность к трафику · Форма и legal-база | Обсудить сайт |
| **Делаем Трафик** | от 250 000 ₽ | Запуск заявок: рекламный вход, квалификация и передача в рабочий канал. | Премиальный квиз · Трафик через eLama · Запуск заявок · Бюджет отдельно | Разобрать трафик |
| **Делаем Систему** | от 350 000 ₽ | Полный контур под ключ: сайт, AI, Telegram, аналитика и цикл улучшений. | ClientFlow Audit до старта · Карта гипотез · Цели аналитики · Telegram-уведомления *(+2 in full card)* | Собрать систему |

**Featured:** Делаем Систему (`recommended: true` in pricing)

**CTA per card:** → `#contacts?service={intent}&source=products`

**Visual direction:**

- ProductLadderCard pattern; 3 columns desktop / stack mobile
- Copper primary on featured card only; steel-blue secondary on others
- Prices prominent; no invented tiers

**What to avoid:**

- Separate pricing section duplicate
- «Делаем Заявки» as public product name
- Editing prices in copy doc

**Acceptance criteria:**

- [ ] Prices match `lib/pricing.ts` exactly
- [ ] Three products only
- [ ] Commercial clarity before scroll to founder

---

### Section 6 — Process

| Field | Content |
| --- | --- |
| **Number** | 06 |
| **Name** | Process |
| **Anchor** | `#process` |
| **Goal** | Production confidence in 5 steps |
| **User question** | «Как проходит работа?» |

**Kicker:** Процесс

**Headline:** Пять этапов — без хаоса и бесконечных согласований

**Subheadline:** Производственный порядок: от разбора до запуска и цикла улучшений.

**Content blocks (5 steps):**

| Step | Title | Description |
| ---: | --- | --- |
| 1 | Разбор | Смотрим, что уже есть, где теряются заявки и с чего начинать. |
| 2 | Оффер и структура | Фиксируем обещание, структуру сайта и путь к заявке. |
| 3 | Дизайн и сборка | Собираем premium-интерфейс, который быстро работает и ведёт к действию. |
| 4 | Интеграции и аналитика | Связываем формы, Telegram, AI и цели — до запуска трафика. |
| 5 | Запуск и улучшения | Включаем поток и дорабатываем по данным, а не вслепую. |

**CTA:** Начать с разбора → `#contacts`

**Visual direction:**

- Vertical timeline mobile / simple numbered list desktop
- ProcessStepCard pattern; no 9-step phase rails
- Optional one-line ClientFlow mention in step 4 only (medium terminology)

**What to avoid:**

- 9-step pipeline, Traffic-ready Gate jargon on homepage
- Phase bands, schematic route

**Acceptance criteria:**

- [ ] Exactly 5 steps
- [ ] One sentence per step
- [ ] CTA to contacts visible

---

### Section 7 — Founder

| Field | Content |
| --- | --- |
| **Number** | 07 |
| **Name** | Founder |
| **Anchor** | `#founder` |
| **Goal** | Who is responsible; why trust this person |
| **User question** | «Кто отвечает?» |

**Kicker:** Основатель

**Headline:** Виталий Тимошенко.

**Subheadline:** Основатель «Делаем Диджитал» · ведёт каждый проект лично.

**Content blocks:**

- Editorial portrait (`vitaly-founder-light.webp`)
- Pull quote (1–2 sentences): «Клиенты теряются не в инструментах — а между ними. Моя задача: собрать маршрут, который довозит человека до заявки.»
- Short bio (3–4 lines): architect role, high-ticket focus, personal accountability
- Restrained metrics (if kept): 10+ проектов · 2 клиента в квартал — no fake precision
- Optional link: Обо мне → `/about` if page exists

**CTA:** Telegram-канал · or scroll to `#contacts`

**Visual direction:**

- Editorial split: portrait left (desktop) / top (mobile), copy right
- Warm dark tones; gradient overlays on photo per constitution
- FlagshipContainer alignment (migrate from legacy 1180px in V2-5)
- Remove Frame NN / Σ ClientFlow System labels

**What to avoid:**

- Long manifesto, agency «we» voice
- min-height 1000px on mobile
- Rim-light schematic labels

**Acceptance criteria:**

- [ ] Face + name + accountability visible
- [ ] No §12 / Frame 12 legacy labels
- [ ] Metrics restrained and honest

---

### Section 8 — Final CTA

| Field | Content |
| --- | --- |
| **Number** | 08 |
| **Name** | Final CTA |
| **Anchor** | `#contacts` |
| **Goal** | Move user to Разбор системы |
| **User question** | «Что делать дальше?» |

**Kicker:** Следующий шаг

**Headline:** Начнём с разбора вашей системы

**Subheadline:** Короткий разговор: что уже есть, где теряются заявки и с какого уровня продукта логично начать.

**Content blocks:**

- Headline + sub
- Primary CTA: Разбор системы
- Secondary CTA: Telegram-канал
- Optional tertiary: ClientFlow Аудит → `/diagnostic`
- Trust microcopy: «Принимаем 2 проекта в квартал» · «Ответим в течение рабочего дня»
- Form area: placeholder until V2-8 (or mailto fallback)

**CTA:** Разбор системы (primary)

**Visual direction:**

- FlagshipContainer; copper primary button
- Minimal surface panel for form placeholder
- Rim light optional, restrained
- No stub `console.log` form in production after V2-8

**What to avoid:**

- Wiring `/api/leads` before visual approval
- Competing headlines with hero
- ClientFlow Аудит as primary CTA

**Acceptance criteria:**

- [ ] Single clear next step
- [ ] `id="contacts"` matches nav
- [ ] Form wiring deferred to V2-8

---

## 7. Full Draft Copy

Readable copy-doc — all headings, cards, CTAs, microcopy for approval.

---

### Global

**Site name:** Делаем Диджитал  
**Founder:** Виталий Тимошенко  
**Primary CTA (site-wide):** Разбор системы  
**Secondary CTA:** Telegram-канал  

**Header nav:** Что делаю · Подход · Продукты · Обо мне · Контакты  
**Header CTA:** Разбор системы  

---

### §01 Hero

**Kicker:** Делаем Диджитал · сайты, заявки, AI-интеграции

**H1:**
Собираем для бизнеса
управляемую систему
привлечения клиентов

**Sub:** Соединяем сайт, оффер, заявки, Telegram/CRM, AI-квалификацию и аналитику в понятный маршрут от первого касания до обращения.

**CTA primary:** Разбор системы  
**CTA secondary:** Как это работает *(or Telegram-канал)*  
**Flow strip:** Трафик → Сайт → AI-квалификация → Заявка → Обработка  

---

### §02 What I Build

**Kicker:** Что мы собираем  
**H2:** Три результата вместо набора разрозненных услуг  
**Sub:** Не отдельный лендинг и не «ещё один инструмент» — связанный digital-контур под заявки и управление после запуска.

**Card 1 — Сайт, который продаёт доверие**  
Premium-посадочная: оффер, визуальный уровень и путь к заявке — без ощущения шаблона.

**Card 2 — Заявки, которые не теряются**  
Формы, квиз, AI-квалификация и Telegram — обращение попадает в рабочий контур, а не в пустоту.

**Card 3 — Система, которой можно управлять**  
Интеграции, аналитика и регламенты после запуска — видно, что работает и что улучшать.

**Optional link:** Посмотреть продукты

---

### §03 Why It Works

**Kicker:** Подход  
**H2:** Почему это работает как производственная система  
**Sub:** Стратегия, дизайн, интеграции и аналитика в одном контуре — без лишней методологии на каждом экране.

**Стратегия** — Оффер, аудитория и структура — до дизайна и вёрстки.  
**Премиальный дизайн** — Визуальный уровень, который выдерживает дорогую заявку и рекламу.  
**AI, Telegram, CRM** — Заявка не теряется: квалификация, уведомления и передача в продажи.  
**Аналитика и улучшения** — Цели, события и цикл доработок после запуска — по данным, не по ощущениям.

**Optional link:** Как проходит работа

---

### §04 Internal Proof

**Kicker:** Доказательство  
**H2:** Сначала собираем систему для себя — потом для клиентов  
**Sub:** Не продаём то, чего нет. Собственный сайт, продукты и процесс — тот же стандарт, что предлагаем бизнесу.

**Делаем Диджитал** — Этот сайт — живой пример: company-led offer, продуктовая лестница, диагностика и сборка под заявки.  
**Build in public** — Показываем процесс и артефакты — не обещания на слайдах. Кейсы и подход — в открытом доступе.

**CTA:** Смотреть кейсы

---

### §05 Product Ladder

**Kicker:** Продукты  
**H2:** Три уровня входа — от сайта до системы под ключ  
**Sub:** Цены и состав — из актуального прайса. Без скрытых доплат на старте разговора.

**Делаем Сайт** · от 150 000 ₽  
Премиальная посадочная архитектура под рекламу: оффер, доверие, заявка и готовность к первому трафику.  
— Премиальная посадка · AI-логика заявки · Готовность к трафику · Форма и legal-база  
**CTA:** Обсудить сайт

**Делаем Трафик** · от 250 000 ₽  
Быстрый запуск заявок: квиз, рекламный вход, квалификация и передача лидов в рабочий канал.  
— Премиальный квиз · Трафик через eLama · Запуск заявок · Бюджет отдельно  
**CTA:** Разобрать трафик

**Делаем Систему** · от 350 000 ₽ *(featured)*  
Полная ClientFlow-система под трафик: сайт/квиз, AI-квалификация, CRM/Telegram, прогрев и аналитика.  
— ClientFlow Audit до старта · Карта гипотез · Цели аналитики · Telegram-уведомления · 7 дней наблюдения · Loom-разбор  
**CTA:** Собрать систему

---

### §06 Process

**Kicker:** Процесс  
**H2:** Пять этапов — без хаоса и бесконечных согласований  
**Sub:** Производственный порядок: от разбора до запуска и цикла улучшений.

1. **Разбор** — Смотрим, что уже есть, где теряются заявки и с чего начинать.  
2. **Оффер и структура** — Фиксируем обещание, структуру сайта и путь к заявке.  
3. **Дизайн и сборка** — Собираем premium-интерфейс, который быстро работает и ведёт к действию.  
4. **Интеграции и аналитика** — Связываем формы, Telegram, AI и цели — до запуска трафика.  
5. **Запуск и улучшения** — Включаем поток и дорабатываем по данным, а не вслепую.

**CTA:** Начать с разбора

---

### §07 Founder

**Kicker:** Основатель  
**H2:** Виталий Тимошенко.  
**Sub:** Основатель «Делаем Диджитал» · ведёт каждый проект лично.

**Quote:** «Клиенты теряются не в инструментах — а между ними. Моя задача: собрать маршрут, который довозит человека до заявки, а не просто создаёт трафик.»

**Bio (direction):** Digital-архитектор и основатель студии. Собираю premium-сайты и системы привлечения для B2B и экспертов с дорогой заявкой. Лично веду стратегию, дизайн-направление и запуск.

**Metrics (optional):** 10+ проектов собрано · 2 клиента в квартал  

**CTA:** Telegram-канал

---

### §08 Final CTA

**Kicker:** Следующий шаг  
**H2:** Начнём с разбора вашей системы  
**Sub:** Короткий разговор: что уже есть, где теряются заявки и с какого уровня продукта логично начать.

**CTA primary:** Разбор системы  
**CTA secondary:** Telegram-канал  
**CTA tertiary (optional):** ClientFlow Аудит  

**Microcopy:** Принимаем 2 проекта в квартал · Ответим в течение рабочего дня  

**Form placeholder copy:** Форма заявки подключится на этапе V2-8. Пока — напишите на hello@delaem.digital  

---

## 8. Visual Prototype Notes

No final implementation — layout intent only.

| Section | Desktop | Mobile | Image / portrait | Motion (later) |
| --- | --- | --- | --- | --- |
| **Hero** | Copy left + system/tech visual right (or full-bleed); CTAs + flow strip | Stack copy → flow strip → visual; no portrait | **No portrait.** System artifact / site frame / integration UI | CSS fadeUp stagger; respect reduced-motion |
| **What I Build** | 3-col equal cards | 1-col stack, gap 16px | No photo | Subtle card fade on scroll (V2-7) |
| **Why It Works** | 2×2 grid | 1-col | Optional Telegram snippet mock (one only) | None required |
| **Internal Proof** | 2-col cards | 1-col | Browser frame when asset ready | None |
| **Product Ladder** | 3-col cards; middle or right featured | 1-col; featured first or second | No photo | None |
| **Process** | Vertical numbered list or horizontal 5-step | Vertical timeline | No photo | Step reveal optional |
| **Founder** | 45/55 split portrait/copy | Image top, copy below; reduce min-height | `vitaly-founder-light.webp` | None |
| **Final CTA** | 2-col: copy left, form panel right | Copy top, panel below | No photo | None |

### Global visual rules

- **Width:** FlagshipContainer 1360px all sections
- **Bands:** `#05070A` / `#080C12` alternation with 40px fade
- **Type:** Onest; large H1/H2; short subs
- **Color:** Copper = kicker + primary CTA; blue = H1 highlight + subtle cues
- **Density:** Max 3 cards per row; prefer whitespace over grids
- **Command layer:** ≤1 artifact per section; never fake dashboard
- **Buttons:** border-radius 10–12px; not pill

### Reference mood (from REFERENCE_PACK)

- Founder photography **§7 only** (Rembrandt lighting, dark studio)
- Hero: product/technology/command layer — not portrait-led
- Restrained command UI (real form/Telegram card, not KPI wall)
- Premium dark B2B — not cyberpunk, not generic SaaS purple

---

## 9. What To Remove From Current Site

### Remove from homepage (already unlinked in V2-1)

| Old section | Why remove | Collapsed into |
| --- | --- | --- |
| 13-section methodology flow | Cognitive overload | 8-section flow |
| `context-section` | Repeated «fragmented vs connected» | What I Build |
| `system-section` | ClientFlow route map | What I Build + Why It Works |
| `assembly-section` | 6-module grid | What I Build |
| `audit-section` (homepage wall) | Diagnostic theater | Why (one line) + `/diagnostic` |
| `why-section` comparison columns | Cold schematic | Why It Works |
| `audience-section` fit filter | Dedicated § unnecessary | Tone + products |
| `leads-section` logo wall | Empty/generic proof | Internal Proof |
| `pricing-section` duplicate | Second price block | Product Ladder |
| 9-step `process-section` | Too long | Process 5-step |

### Remove visual patterns site-wide on homepage

- Heavy ClientFlow maps and FlowPath rows
- § NN / Frame NN section indices
- Repeated comparison sections (context / why / audience)
- Dense audit/report blocks with scores
- Fake dashboards and metric cards
- Founder portrait in hero (`vitaly-hero-cinematic.webp`)
- Vitaly kicker in hero
- Over-explaining diagrams on scroll
- `Σ · ClientFlow System` decorative labels

### Keep in repo (do not delete until owner approves)

All old TSX files remain for archive; deletion is separate cleanup pass.

---

## 10. Implementation Rules For Cursor

When owner approves this prototype:

1. **Section-by-section** — V2-2 Hero → V2-3 §2–3 → V2-4 §5–6 → V2-5 §7–8 → V2-6 Mobile → V2-7 Motion → V2-8 Forms.
2. **Copy source** — This document + `DD_SITE_V2_BLUEPRINT.md`; changes need owner note.
3. **No backend/form** until V2-8 and visual sign-off.
4. **No pricing edits** — read-only from `lib/pricing.ts`.
5. **No legal / env / dependencies** changes unless explicit task.
6. **No analytics rewrite** unless requested; preserve `data-analytics-*` on CTAs.
7. **After every pass:** `npm run build` + `npm run typecheck`.
8. **Scoped commits** — one pass per commit; owner review between passes.
9. **QA gate** — `DD_VISUAL_QA_GATE_v1.md` blockers must pass.
10. **Hero** — dedicated pass (V2-2); do not mix with other sections in one commit unless owner requests.

### Mapping to runtime (current skeleton)

| Prototype § | Component |
| ---: | --- |
| 1 | `hero-section.tsx` |
| 2 | `what-i-build-section.tsx` |
| 3 | `why-it-works-section.tsx` |
| 4 | `internal-proof-section.tsx` |
| 5 | `product-ladder-v2-section.tsx` |
| 6 | `process-v2-section.tsx` |
| 7 | `founder-section.tsx` |
| 8 | `final-cta-section.tsx` |

---

## 11. Owner Approval Checklist

Before starting V2-2+ implementation, owner confirms:

| # | Item | Approve? |
| ---: | --- | :---: |
| 1 | **Site thesis** (§1) | ☐ |
| 2 | **Audience** — for / not for (§2) | ☐ |
| 3 | **Main offer** — Company-led canonical H1 (§3) | ☑ LOCKED |
| 4 | **Hero copy** — §7 §01 (company-led, flow strip) | ☑ LOCKED |
| 5 | **8 sections** — order and goals (§6) | ☐ |
| 6 | **Full draft copy** (§7) | ☐ |
| 7 | **CTA map** (§5) | ☐ |
| 8 | **Visual direction** (§8) | ☐ |
| 9 | **What to delete/collapse** (§9) | ☐ |
| 10 | **ClientFlow Аудит** — tertiary CTA only vs hidden | ☐ |
| 11 | **Hero visual** — no portrait; technology/system emphasis | ☐ |
| 12 | **Secondary hero CTA** — Как это работает vs Telegram | ☐ |
| 13 | **Start implementation** — green-light V2-2 Hero | ☐ |

### Sign-off block

```
Approved by: ___
Date: ___
Main offer: Company-led / Product-led (LOCKED) / other: ___
Hero H1: Собираем для бизнеса… (canonical) / alt: Собираем бизнесу…
Hero portrait: NO (founder §7 only)
Structure: 8 sections approved: YES / NO
CTAs approved: YES / NO
Visual direction approved: YES / NO
Collapse old sections approved: YES / NO
Start V2-2: YES / NO
Notes: ___
```

---

## Appendix: Skeleton vs prototype gaps

| Item | V2-1 skeleton (`2163367`) | This prototype |
| --- | --- | --- |
| Hero H1 | EN placeholder / founder «Собираю» | **Company-led canonical H1 (LOCKED)** |
| Hero visual | Portrait (`vitaly-hero-cinematic.webp`) | **No portrait — system/tech visual** |
| Hero flow strip | Removed in V2-1 skeleton | **Restored — 5 steps (LOCKED)** |
| Final CTA headline | Matches prototype | Aligned («Начнём…» — «Соберём» OK in §8) |
| Founder | Legacy Frame labels | Portrait + trust **§7 only** |
| Form | Placeholder mailto | Wire in V2-8 |

**Next pass:** V2-2 — Company-led Hero (canonical copy + flow strip + no portrait).
