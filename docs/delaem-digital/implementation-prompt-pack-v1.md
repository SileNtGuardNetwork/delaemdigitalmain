# Delaem Digital Implementation Prompt Pack v1

## 0. Global Rules For Every Pass

Always prepend these rules to any Codex/Cursor prompt:

```text
Project: Delaem Digital / ClientFlow System.
Repository: SileNtGuardNetwork/delaemdigitalmain.

Use the approved docs:
- docs/website-factory/*
- docs/delaem-digital/site-blueprint-v1.md
- docs/delaem-digital/hero-factory-brief-v1.md

Core principle:
This is not a generic agency website. It is the first showcase of the Website Factory and ClientFlow System.

Do not use Framer.
Do not generate images.
Do not touch env/secrets.
Do not run production deploy.
Do not change business positioning unless explicitly requested.
Do not add fake dashboards.
Do not add random decorative cards.
Do not use neon/cyberpunk styling.
Do not accept AI-raster text as UI.

Use Next.js-first production implementation.
Use real HTML text, responsive Tailwind, clean TypeScript, accessible UI, and restrained motion.

After implementation run:
npm run build
npx tsc --noEmit

If preview is requested:
npx vercel@latest

Report:
- files changed
- what changed
- build result
- typecheck result
- preview URL if created
- risks/blockers
```

## DDF-01 — Production Hero Build

```text
DDF-01 — Production Hero Build

Goal:
Rebuild only the homepage hero section into a premium, conversion-ready, founder-led first screen.

Use:
- docs/delaem-digital/site-blueprint-v1.md
- docs/delaem-digital/hero-factory-brief-v1.md

Do not redesign the whole website.
Do not touch lower sections unless required by imports.
Do not change copy.
Do not generate images.
Do not add fake dashboards/random cards.

Hero fixed copy:
Logo: Делаем Диджитал
Descriptor: Управляемое привлечение клиентов
Navigation: Подход / Услуги / Кейсы / Обо мне / Контакты
Header CTA: Обсудить проект
Kicker: Виталий Тимошенко · основатель Делаем Диджитал
H1:
Собираю бизнесу
управляемую систему
привлечения клиентов
Subheadline:
Для владельцев бизнеса и экспертов, которым нужен не набор digital-инструментов, а понятный маршрут от первого касания до заявки.
Primary CTA: Разбор системы
Secondary CTA: Telegram-канал
Proof row: Сайт / AI-квалификация / Telegram / CRM / Аналитика / Трафик

Visual direction:
Hybrid A+B from the hero brief:
Founder Control Room + ClientFlow Architecture.
Premium dark, founder-led, calm authority, high-ticket B2B, real business architecture.

Implementation requirements:
- Desktop 1440×900 first.
- Max width 1280–1360px.
- Header 72–84px.
- CTA above fold.
- H1 large but controlled.
- Proof row compact and readable.
- Real HTML text, not image text.
- Subtle route-line/grid accent allowed.
- No fake dashboard panels.
- No random floating cards.
- No heavy portrait dependency unless a clean asset exists.
- Respect prefers-reduced-motion.

Mobile:
- 390px and 430px clean.
- No horizontal overflow.
- Text first.
- CTA visible early.
- Proof row wraps cleanly.
- Cookie banner must not cover first CTA.

Run:
npm run build
npx tsc --noEmit

Create preview only:
npx vercel@latest
```

## DDF-02 — Sections 2–13 Production Build

```text
DDF-02 — Sections 2–13 Production Build

Goal:
Build the full homepage after the hero using docs/delaem-digital/site-blueprint-v1.md.

Do not rebuild the approved hero unless required for section rhythm.
Do not change copy meaning.
Do not add generic dark card grids everywhere.
Do not add fake dashboards.
Do not touch API routes, lead logic, env/secrets, legal pages, or production deploy.

Sections to implement or polish:
2. Loss Map
3. ClientFlow System
4. What We Build
5. Before / After
6. Process
7. Products / Services
8. Proof / Cases
9. Founder / Methodology
10. Audit Offer
11. Pricing / Packages
12. FAQ / Objections
13. Final CTA / Lead Form

Design direction:
Premium dark ClientFlow Architecture.
Every section must have a distinct commercial job and visual pattern.
Avoid repeating the same card grid.

Required patterns:
- Loss Map: diagnostic route / broken-to-controlled path.
- ClientFlow System: premium route map.
- What We Build: restrained service grid.
- Before / After: split comparison.
- Process: production timeline.
- Products: 3 premium product cards with CTA intent.
- Proof: case/artifact cards.
- Founder: editorial trust block.
- Audit Offer: diagnostic panel/checklist.
- Pricing: 3 premium pricing cards.
- FAQ: clean accordion.
- Final CTA: high-ticket intake form.

Mobile:
- no horizontal overflow;
- logical stacking;
- readable headings;
- CTA rhythm preserved;
- no section feels like an endless wall of dark cards.

Run:
npm run build
npx tsc --noEmit

Create preview only:
npx vercel@latest
```

## DDF-03 — Motion / Interaction Pass

```text
DDF-03 — Motion / Interaction Pass

Goal:
Add restrained premium motion to the homepage without hurting performance or readability.

Do not redesign layout.
Do not change copy.
Do not add heavy animation libraries unless already present and justified.
Do not add aggressive parallax, scroll hijack, neon pulse, spinning 3D, or animation noise.

Allowed motion:
- fade + translateY reveal;
- staggered section/card reveal;
- route-line drawing;
- button arrow movement;
- hover lift for cards;
- smooth FAQ accordion;
- subtle active node transitions;
- respects prefers-reduced-motion.

Priority sections:
- Hero: headline/CTA/proof soft reveal.
- Loss Map: route-line and nodes reveal.
- ClientFlow System: system path activation.
- Process: timeline reveal.
- Cards: subtle hover, no gimmicks.
- FAQ: smooth accordion.

Mobile:
- motion must be lighter;
- no layout shifts;
- no performance-heavy effects.

Run:
npm run build
npx tsc --noEmit

Create preview only if requested.
```

## DDF-04 — Mobile QA / Responsive Hardening

```text
DDF-04 — Mobile QA / Responsive Hardening

Goal:
Make the homepage clean, readable, and conversion-ready on mobile.

Focus widths:
- 390px
- 430px
- optional 360px if safe

Do not redesign desktop.
Do not change copy meaning.
Do not touch backend/API/env/secrets.
Do not run production deploy.

Fix:
- horizontal overflow;
- hero CTA visibility;
- header compression;
- proof row wrapping;
- card spacing;
- pricing card layout;
- form usability;
- cookie banner overlap;
- section rhythm;
- too-large dark blocks;
- unreadable text sizes.

Acceptance:
- no horizontal overflow;
- first CTA visible early;
- H1 readable;
- form usable;
- pricing/product cards do not overlap;
- footer/legal links accessible;
- page feels premium, not cramped.

Run:
npm run build
npx tsc --noEmit

Create preview only:
npx vercel@latest
```

## DDF-05 — Conversion Layer Hardening

```text
DDF-05 — Conversion Layer Hardening

Goal:
Harden the website as a ClientFlow conversion system ready for traffic.

Do not redesign visual UI unless required for form states.
Do not touch env/secrets values.
Do not run production deploy.

Review and harden:
- lead form validation;
- consent checkbox;
- cookie banner;
- privacy/legal links;
- UTM capture;
- CTA intent propagation from products/pricing to form;
- Telegram notification;
- optional email/CRM delivery if already architected;
- durable lead storage if configured;
- safe logs without PII;
- stable API response contract;
- success/error states.

Rules:
- missing optional env must not break lead submission;
- notification failure must not break accepted lead;
- never log raw PII/secrets;
- preserve existing API contracts unless clearly broken;
- no destructive migrations.

Run:
npm run build
npx tsc --noEmit

Create preview only if requested.
```

## DDF-06 — Final QA Gate

```text
DDF-06 — Final QA Gate

Goal:
Run final pre-client/pre-production QA for Delaem Digital homepage.

Do not change code unless explicitly instructed.
Do not deploy production.

Check:
1. Desktop 1440×900 and 1920×1080.
2. Mobile 390px and 430px.
3. No horizontal overflow.
4. Hero offer understood in 3 seconds.
5. CTA visible early.
6. Section rhythm is premium and not repetitive.
7. Lead form works.
8. Invalid form states work.
9. Consent/cookie/privacy exist.
10. Telegram/notification behavior documented.
11. Analytics/UTM behavior documented.
12. Build passes.
13. Typecheck passes.
14. No secrets in code/logs.
15. No production deploy was run.

Return:
- PASS/FAIL
- critical blockers
- non-critical improvements
- suggested final corrective pass if needed
- production readiness score
```

## Execution Order

1. DDF-01 Hero Production.
2. Visual QA hero.
3. One corrective hero pass if needed.
4. DDF-02 Sections 2–13.
5. Visual QA full page.
6. DDF-03 Motion Pass.
7. DDF-04 Mobile QA.
8. DDF-05 Conversion Layer.
9. DDF-06 Final QA Gate.
10. Production deploy only after explicit approval.

## Stop Rule

If any pass returns a weak visual result, do not continue stacking features. Stop, QA, fix the layer, then proceed.
