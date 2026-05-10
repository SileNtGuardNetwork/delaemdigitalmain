# Delaem Digital Implementation Spec v1

## 1. Layer Purpose

Будущий implementation layer:

**v0.15.0 - Delaem Digital Flagship Visual Implementation**

Цель будущего слоя:

Перевести visual direction lock в реальный интерфейс главной страницы без изменения смысла, цен, формы, backend, legal, `/en`, `/cases`, `/articles`.

Главный результат:

- сайт должен перестать выглядеть как generic dark landing;
- hero должен стать flagship founder scene;
- ClientFlow formula должна стать визуальным якорем;
- продуктовая линейка должна считываться мгновенно;
- форма должна выглядеть как premium request panel;
- runtime-поведение должно остаться стабильным.

Будущий слой не должен быть CSS-косметикой. Он должен реализовать утвержденную концепцию:

**Founder Control Room / ClientFlow Diagnostic Interface**

## 2. Approved Strategic Context

Зафиксированное позиционирование:

- Виталий Тимошенко - CEO «Делаем Диджитал».
- Виталий - архитектор ClientFlow System.
- ClientFlow System - метод сборки маршрута от первого касания до заявки.
- Сайт продает три продукта:
  1. **Делаем Сайт** - от 150 000 ₽.
  2. **Делаем Трафик** - от 250 000 ₽.
  3. **Делаем Систему** - от 350 000 ₽.
- **Делаем Систему** - главный продукт.

Главная формула ClientFlow:

**Оффер -> Сайт/Квиз -> Трафик -> Заявка -> Follow-up -> Аналитика**

Смысловая рамка:

- проблема не в одном инструменте, а в маршруте;
- сайт, квиз, трафик, заявка, follow-up и аналитика должны быть показаны как единая система;
- Виталий должен быть представлен как человек, который проектирует и собирает этот маршрут.

## 3. Source Documents

Implementation v0.15.0 должен опираться на:

- `docs/website-factory/clientflow-website-factory-v1.md`
- `docs/website-factory/reference-scoring-system-v1.md`
- `docs/website-factory/delaem-digital-project-brief-v1.md`
- `docs/website-factory/delaem-digital-visual-direction-lock-v1.md`

Перед началом реализации исполнитель должен прочитать эти документы и использовать их как источник решений.

## 4. Protected Scope

Запрещено менять:

- `env` / secrets;
- backend формы;
- Telegram notification behavior;
- API route `/api/leads`;
- legal pages;
- prices;
- nav labels;
- English page `/en`;
- content architecture `/cases` и `/articles`;
- `sitemap` / `robots`, если нет фактических route changes;
- product logic;
- number/order of homepage sections, если отдельно не указано;
- claims / cases / metrics без подтверждения;
- production deploy.

Запрещено добавлять:

- fake cases;
- fake awards;
- fake metrics;
- обещания «гарантируем заявки»;
- неподтвержденные интеграции;
- новые legal-sensitive claims.

## 5. Allowed Scope

В будущем implementation layer можно менять:

- `app/globals.css`
- visual structure внутри homepage sections
- JSX-разметку секций при необходимости:
  - `components/sections/hero-section.tsx`
  - `components/sections/clientflow-system-section.tsx`
  - `components/sections/audit-section.tsx`
  - `components/sections/pricing-section.tsx`
  - `components/sections/final-cta-section.tsx`
  - `components/sections/homepage-structure-sections.tsx`
  - `components/sections/loss-map-section.tsx`

Только если действительно нужно:

- `lib/homepage-content.ts`
- `lib/pricing.ts`

Ограничение для `lib/homepage-content.ts` и `lib/pricing.ts`:

- не менять смысл;
- не менять цены;
- не менять названия продуктов;
- не менять продуктовую логику;
- не добавлять длинный copy.

## 6. Section-by-Section Implementation Requirements

### Hero

Требование:

- сделать flagship founder scene;
- не делать «портрет справа» как отдельную фотографию;
- интегрировать portrait в system scene;
- показать route-line / diagnostic interface вокруг portrait;
- сохранить clear CTA;
- first screen должен читаться за 3 секунды;
- не возвращать heavy audit-card поверх hero.

Hero должен показывать:

- Виталий - CEO «Делаем Диджитал»;
- Виталий - архитектор ClientFlow System;
- есть три направления: Сайт / Трафик / Система;
- следующий шаг понятен.

Разрешенные визуальные приемы:

- subtle grid;
- route-line;
- diagnostic nodes;
- edge highlights;
- control-room depth;
- restrained copper accents;
- mineral steel highlights.

Запрещено:

- noisy dashboard;
- blue SaaS glow;
- purple gradient;
- cyberpunk;
- decorative metrics;
- animation clutter.

### Loss Map

Требование:

- усилить ощущение потерь в маршруте;
- уменьшить generic cards feeling;
- можно использовать route break / friction points;
- не добавлять длинный текст;
- не менять смысл секции.

Секция должна показывать:

- клиенты теряются между касаниями;
- проблема в маршруте;
- каждый friction point связан с ClientFlow logic.

### ClientFlow System

Требование:

- сделать центральную route-инфографику;
- формула должна стать visual anchor;
- steps connected by visual logic;
- desktop: horizontal / diagonal / control-room route;
- mobile: clean vertical route;
- no decorative useless charts.

Формула:

**Оффер -> Сайт/Квиз -> Трафик -> Заявка -> Follow-up -> Аналитика**

Правила:

- каждый step должен быть читаем;
- связь между step должна быть визуальной и смысловой;
- route-line используется только как объяснение маршрута;
- не превращать блок в набор одинаковых карточек;
- не добавлять fake analytics charts.

### ClientFlow Audit

Требование:

- сделать блок похожим на diagnostic panel;
- не менять смысл;
- аудит = первичный разбор: сайт / трафик / система;
- CTA должен оставаться понятным;
- блок должен ощущаться как вход в диагностику, а не обычная секция.

Разрешено:

- diagnostic route;
- compact status panel;
- structured steps;
- subtle interface frame.

Запрещено:

- сложный dashboard;
- fake scores;
- fake reports;
- перегруз metrics.

### Products

Требование:

- product line, not pricing cards;
- «Делаем Систему» visually flagship;
- cards have different hierarchy;
- no fake scarcity;
- prices unchanged.

Продукты:

- Делаем Сайт - от 150 000 ₽.
- Делаем Трафик - от 250 000 ₽.
- Делаем Систему - от 350 000 ₽.

Правила:

- «Делаем Сайт» = премиальная посадочная;
- «Делаем Трафик» = премиальный квиз + трафик через eLama, не полноценный сайт;
- «Делаем Систему» = Делаем Сайт + Делаем Трафик под ключ, главный продукт;
- главный продукт выделяется визуально, но без агрессивного pressure.

Запрещено:

- менять цены;
- менять названия;
- добавлять скидки;
- добавлять urgency;
- добавлять fake bonuses.

### Founder

Требование:

- premium founder panel;
- Виталий как architect, not biography block;
- Telegram CTA stays;
- no overlong copy.

Секция должна:

- усиливать доверие;
- закреплять роль Виталия;
- не превращаться в биографию;
- выглядеть статусно и спокойно.

Запрещено:

- длинная биография;
- awards без подтверждения;
- fake logos;
- founder-блок без связи с ClientFlow.

### Final CTA / Form

Требование:

- premium request panel;
- form visually stronger;
- no backend/form behavior changes;
- consent/legal preserved;
- Telegram delivery behavior preserved.

Форма должна:

- выглядеть как следующий шаг в системе;
- быть ясной и аккуратной;
- сохранять все поля, validation и consent;
- сохранять текущий submit behavior.

Запрещено:

- менять API;
- менять поля без отдельного слоя;
- менять validation;
- менять Telegram notifications;
- скрывать legal links;
- визуально ослаблять consent.

### Footer / Cookie

Требование:

- do not redesign unless necessary;
- cookie remains compact;
- nav stays stable.

Разрешено:

- только мелкая визуальная полировка, если она нужна для общей цельности.

Запрещено:

- менять legal links;
- менять cookie behavior / localStorage;
- менять footer routes;
- менять nav labels.

## 7. Visual System Rules

Зафиксированная визуальная система:

- graphite / black base;
- restrained copper / bronze accents;
- mineral steel highlights;
- warm off-white text;
- Manrope headings;
- Onest body;
- strong spacing;
- fewer stronger surfaces;
- route-lines only where they explain logic;
- buttons expensive and clear;
- cards intentional, not repetitive;
- forms as premium request panels.

Дополнительные правила:

- visual depth должен помогать hierarchy;
- surfaces должны отличаться по роли;
- CTA должен быть видимым, но не кричащим;
- route-lines не должны быть декоративным шумом;
- mobile должен быть спроектирован отдельно, а не просто сжат.

## 8. Forbidden Visual Directions

Запрещено:

- generic SaaS dashboard;
- random glow;
- blue SaaS glow;
- purple gradients;
- cyberpunk;
- noisy dashboard widgets;
- fake metrics;
- fake awards;
- fake cases;
- long copy;
- heavy audit-card in hero;
- decorative charts without meaning;
- overdesigned AI clutter;
- one-note palette;
- meaningless floating cards;
- портрет без связи с системой.

## 9. Responsive Requirements

### Desktop

Требования:

- hero must feel premium above fold;
- CTA visible;
- route elements not cluttered;
- portrait integrated;
- ClientFlow route reads as system;
- products hierarchy obvious;
- final CTA has enough visual weight.

Проверить:

- 1440px;
- 1280px;
- 1024px.

### Mobile

Требования:

- headline / CTA before portrait priority;
- no horizontal scroll;
- route formula vertical;
- product cards readable;
- cookie does not fight hero;
- form easy to use;
- no tiny labels;
- no text overflow;
- portrait must not dominate uselessly.

Проверить:

- 390px width;
- 375px width;
- 430px width.

## 10. QA Checklist

Future implementation layer must check:

Visual:

- desktop hero;
- mobile hero;
- ClientFlow route;
- Products;
- Founder;
- Final CTA / form;
- cookie;
- no visual clutter;
- no generic SaaS cards feeling.

Functional:

- nav scroll;
- primary CTA anchors;
- product CTA anchors;
- Telegram links;
- form still submits;
- validation still works;
- consent/legal links remain.

Routes:

- `/en` opens;
- `/cases` opens;
- `/articles` opens;
- `/privacy` opens;
- `/consent` opens;
- `/cookies` opens.

Technical:

- build passes;
- typecheck passes;
- preview deploy created;
- no env/secrets touched;
- no production deploy.

Content:

- prices unchanged;
- nav labels unchanged;
- product names unchanged;
- product logic unchanged;
- no fake claims;
- no fake cases;
- no fake metrics.

## 11. Verification Commands

Required:

```powershell
npm.cmd run build
npx.cmd tsc --noEmit
npx.cmd vercel@latest
```

Never:

```powershell
vercel --prod
```

Also forbidden:

```powershell
npx.cmd vercel@latest --prod
```

## 12. Report Format

Future implementation report:

```markdown
# ◈ СЛОЙ: v0.15.0 — Delaem Digital Flagship Visual Implementation

Зачем делали
Что было
Что стало
Какие файлы изменены
Что проверено
Preview URL
Риски
Следующий слой
Score
```

## 13. Acceptance Criteria

Implementation spec считается успешным, если:

- документ можно дать Codex как основное ТЗ для v0.15.0;
- нет runtime code changes;
- build passes;
- typecheck passes;
- spec достаточно конкретен, чтобы избежать CSS-косметики;
- protected scope явно зафиксирован;
- allowed scope явно зафиксирован;
- section-by-section requirements описаны;
- responsive QA описан;
- verification commands указаны;
- report format указан.

Будущий v0.15.0 считается успешным, если:

- hero looks like flagship founder site;
- ClientFlow route is visually memorable;
- product ladder is instantly clear;
- «Делаем Систему» visually flagship;
- final CTA feels premium;
- site no longer looks like generic dark landing;
- no meaning changes;
- no backend changes;
- no legal/nav/price/product changes;
- build/typecheck pass;
- preview deploy created.

