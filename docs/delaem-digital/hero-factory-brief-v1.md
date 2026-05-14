# Delaem Digital Hero Factory Brief v1

## 0. Hero Mission

Hero must explain in 3 seconds:

1. Who speaks: Vitaly Timoshenko, founder-led digital architect.
2. Who it is for: business owners and experts.
3. What is sold: a controlled client acquisition system.
4. What is different: not a bundle of digital tools, but a route from first touch to lead.
5. What to do next: start with a system audit.

## 1. Fixed Copy

Logo: Делаем Диджитал

Descriptor: Управляемое привлечение клиентов

Navigation: Подход / Услуги / Кейсы / Обо мне / Контакты

Header CTA: Обсудить проект

Kicker: Виталий Тимошенко · основатель Делаем Диджитал

H1:

```text
Собираю бизнесу
управляемую систему
привлечения клиентов
```

Subheadline:

```text
Для владельцев бизнеса и экспертов, которым нужен не набор digital-инструментов, а понятный маршрут от первого касания до заявки.
```

Primary CTA: Разбор системы

Secondary CTA: Telegram-канал

Proof row: Сайт / AI-квалификация / Telegram / CRM / Аналитика / Трафик

## 2. Strategic Direction

The hero must not look like a generic agency website. It must feel like a personal commercial control room: founder-led, high-ticket, confident, dark, technological, but not cyberpunk.

Core image: Founder Control Room + ClientFlow Architecture.

## 3. Three Concepts To Explore

### Concept A — Founder-Led Editorial Control Room

Meaning: trust through the founder/operator.

Composition:

- copy on the left;
- founder/environment on the right;
- compact proof row below CTA;
- transparent dark header.

Strength:

- reinforces personal brand;
- fits founder-led selling;
- works for high-ticket services.

Risk:

- portrait cannot conflict with the offer;
- face cannot be darkened or covered by headline.

### Concept B — ClientFlow Architecture Map

Meaning: the product is a system, not a website.

Composition:

- H1 + CTA left/top;
- premium route map: traffic -> website -> AI -> Telegram/CRM -> analytics;
- founder can appear below, not necessarily in hero.

Strength:

- explains methodology faster;
- less dependent on portrait;
- easier to adapt to mobile.

Risk:

- can become generic SaaS if fake dashboards appear.

### Concept C — Premium Command Interface

Meaning: Delaem Digital as an operating center for leads.

Composition:

- strong H1;
- abstract but real system modules;
- subtle route-lines;
- CTA above fold.

Strength:

- looks technological;
- shows AI/CRM/analytics direction.

Risk:

- may lose human trust and become cold SaaS.

## 4. Recommended Winner Direction

Start with Hybrid A+B.

Not just a portrait on the right. Not just a system map.

Best direction:

- left: powerful offer + CTA;
- right: founder/environment as trust anchor;
- subtle ClientFlow route motif;
- no fake dashboards;
- no text inside image;
- UI implemented with real HTML/CSS.

## 5. Visual Rules

Allowed:

- premium dark;
- graphite/obsidian background;
- steel-blue accents;
- warm champagne/copper micro-accent;
- subtle route-lines;
- controlled grid;
- dark glass panels;
- realistic founder/editorial layer.

Forbidden:

- cyberpunk;
- neon overload;
- random floating cards;
- fake analytics charts;
- AI-generated text in image;
- default SaaS buttons;
- generic photo-card-right template;
- over-darkened portrait.

## 6. Portrait Rules

Portrait is integrated only after composition is accepted.

Portrait can be used:

1. right-side integrated editorial scene;
2. founder section;
3. final CTA trust block.

Portrait cannot:

- be redrawn by AI as a new person;
- be blurred;
- be darkened until details disappear;
- be covered by headline;
- become a cheap coach/photo-card.

## 7. Desktop Layout Rules

- Canvas: 1440×900 first.
- Max width: 1280–1360px.
- Header height: 72–84px.
- Content column: 46–52%.
- CTA visible above fold.
- Proof row below CTA, compact and readable.
- Visual anchor on right must support, not fight, headline.

## 8. Mobile Rules

- Widths: 390px and 430px.
- No horizontal overflow.
- Text first.
- CTA visible early.
- Proof row wraps cleanly or becomes compact pills.
- Portrait/background does not kill readability.
- Cookie banner must not cover first CTA.

## 9. Acceptance Criteria

Hero accepted if:

- offer understood in 3 seconds;
- H1 readable and premium;
- CTA visible without scroll or very early on mobile;
- visual layer is not generic;
- no fake dashboard;
- no text baked into image;
- desktop score >= 8.7/10;
- mobile score >= 8.3/10;
- can become first proof case of Website Factory.

## 10. Reject Criteria

Reject immediately if:

- text is rasterized;
- founder face is blurred or changed;
- headline overlaps face;
- design looks like AI-generated dark landing;
- buttons look default;
- proof row is noise;
- more than one corrective pass is needed after production preview.

## 11. Codex Production Prompt

```text
DDF-01 — Production Hero Build

Context:
We are rebuilding only the homepage hero for Delaem Digital, a founder-led agency selling ClientFlow Systems: website + AI qualification + Telegram/CRM + analytics + traffic-ready structure.

Do not redesign the whole website.
Do not change copy.
Do not touch lower sections unless required by imports.
Do not generate images.
Do not use Framer.
Do not add fake dashboards.
Do not run production deploy.
Do not touch env/secrets.

Implement a production-grade hero in Next.js/Tailwind with real HTML text, real buttons, responsive layout, premium dark direction, and restrained motion.

Use fixed copy from docs/delaem-digital/hero-factory-brief-v1.md.

Visual direction:
Founder Control Room + ClientFlow Architecture.
Premium dark, founder-led, calm authority, high-ticket B2B.

Requirements:
- Desktop 1440×900 first.
- Max width 1280–1360px.
- Header 72–84px.
- CTA above fold.
- H1 large but controlled.
- Proof row compact.
- Mobile 390/430px clean.
- No horizontal overflow.
- No fake dashboards/random cards.
- Respect prefers-reduced-motion.

After implementation:
- npm run build
- npx tsc --noEmit
- create Vercel preview only if local project is linked
- report changed files, checks, preview URL
```

## 12. QA Checklist

Desktop:

- H1 visible and sharp;
- CTA visible;
- header balanced;
- visual anchor supports offer;
- proof row readable;
- no clutter.

Mobile:

- no overflow;
- H1 readable;
- CTA early;
- portrait/background does not block readability;
- cookie does not cover CTA.

Final:

- if hero fails, fix one pass only;
- if still fails, return to concept selection.
