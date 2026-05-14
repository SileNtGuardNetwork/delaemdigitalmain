# Delaem Digital Stitch DESIGN.md v1

## Назначение

Этот документ является Stitch-ready `DESIGN.md` для личного сайта Виталия Тимошенко и бренда "Делаем Диджитал". Его задача - задать визуальную систему до генерации макетов в Stitch и до реализации в Next.js.

Stitch должен использовать этот документ как дизайн-brief, а не как просьбу "сделай весь сайт сразу". Сначала нужно получить 2-3 визуальных направления, затем 3 hero-варианта, затем ключевые экраны.

## Бизнес-Контекст

**Primary brand:** Делаем Диджитал  
**Founder:** Виталий Тимошенко  
**Methodology / product system:** ClientFlow System

Делаем Диджитал строит Next.js ClientFlow-системы:

- premium website / landing page;
- AI lead qualification;
- lead form;
- Telegram / CRM routing;
- analytics;
- integration readiness;
- traffic-ready conversion architecture.

Позиционирование:

- Не "делаем красивые сайты".
- Не "дизайн ради дизайна".
- Не "обычный лендинг под ключ".
- Мы строим управляемый маршрут от первого касания до квалифицированной заявки.

Сайт должен продавать не визуальную оболочку, а управляемую систему привлечения клиентов.

## Главная Визуальная Гипотеза

**Founder-Led Editorial Control Room**

Сайт должен ощущаться как премиальная темная B2B-система, которой управляет реальный основатель. Визуально это не dashboard и не SaaS-template. Это editorial/control-room сцена: человек, архитектура маршрута, спокойная уверенность, точные CTA и ощущение системного управления.

Ключевые ощущения:

- founder authority;
- premium dark B2B;
- calm expensive confidence;
- digital architecture;
- controlled conversion path;
- refined system intelligence;
- human-led technology.

## Brand Hierarchy

Иерархия в интерфейсе:

1. **Делаем Диджитал** - главный бренд.
2. **Виталий Тимошенко** - основатель и authority anchor.
3. **ClientFlow System** - методология и продуктовая система.

ClientFlow System не должен выглядеть как отдельный SaaS-продукт с фейковым dashboard. Это метод и операционная архитектура, через которую Делаем Диджитал превращает трафик в заявки.

## Typography

Направление типографики:

- headings: Manrope-style;
- body/nav/forms: Onest-style;
- без serif как основной типографики;
- без дешевого futuristic font;
- без декоративного luxury font;
- без terminal-style как основной эстетики.

Правила:

- H1 крупный, уверенный, но не кричащий;
- русские строки должны дышать;
- не пережимать межбуквенное расстояние;
- не использовать мелкие технические labels как главный визуальный язык;
- навигация и формы должны быть спокойными, понятными и взрослыми.

## Color System

Основная палитра:

- deep graphite / obsidian / near-black background;
- soft white main text;
- muted blue-gray secondary text;
- copper / bronze только для primary conversion actions;
- steel-blue для secondary/system cues;
- subtle dark steel borders;
- cool blue atmosphere только как мягкая глубина.

Запрещено:

- purple primary;
- violet AI glow;
- neon;
- cyberpunk;
- generic SaaS blue как главный цвет;
- decorative rainbow gradients;
- excessive glow.

Цветовая роль:

- графит и обсидиан создают дорогую базу;
- copper ведет к действию;
- steel-blue объясняет системность;
- белый и muted blue-gray держат читаемость;
- success green и danger red только для статусов формы, если они нужны.

## Locked Hero Content

Hero H1 должен быть ровно таким:

```text
Собираю бизнесу
управляемую систему
привлечения клиентов
```

Subtitle должен быть ровно таким:

```text
Для владельцев бизнеса и экспертов, которым нужен понятный маршрут от первого касания до заявки.
```

CTA:

- Primary: `Разбор системы`
- Secondary: `Telegram-канал`

Hero route cue:

```text
Трафик → Сайт → AI-квалификация → Заявка
```

Navigation:

- `Система`
- `ClientFlow Аудит`
- `Продукты`
- `Web3`
- `Контакты`

Все видимые UI-тексты должны быть на русском. Не использовать английские labels вроде `ACTIVE_ROUTING`, `FOUNDER-LED`, `assessment mode`.

## Photo Assets

Использовать реальные загруженные портреты из `public/images`.

Main hero portrait candidate:

```text
public/images/vitaly-hero-portrait-v3.png
```

Secondary / trust portrait:

```text
public/images/vitaly-hero-portrait-v2.png
```

Reference visual:

```text
public/images/hero-visual-lock-reference.png
```

Фото должно сохранять личность Виталия Тимошенко. Нельзя генерировать другого человека, менять лицо, очки, бороду, руки, тело или возраст.

## Photo Integration Rules

Портрет в hero:

- интегрирован в editorial-сцену;
- не находится в видимой photo-card;
- не закрыт тяжелыми градиентами;
- не перекрыт UI-панелями;
- не превращен в AI-avatar;
- сохраняет лицо и узнаваемость;
- получает мягкую dark/cool обработку без потери деталей;
- поддерживает ощущение основателя как оператора системы.

Допустимо:

- мягкая маска по краям;
- subtle rim light;
- темная атмосферная интеграция;
- тонкие route-линии рядом с портретом;
- architectural edge marks;
- аккуратный crop под desktop и mobile.

Запрещено:

- visible framed photo-card;
- dashboard-widget поверх лица или тела;
- сильное затемнение лица;
- distortion glasses/beard/hands/body;
- замена личности;
- stock-like background swap;
- heavy AI-plastic cleanup.

Если фото не держит hero-качество, нужно остановиться и запросить asset cleanup pass или новый фото-источник. Не прятать слабое фото эффектами.

## Hard Rejected Patterns

Запрещенные паттерны:

- `text-left + framed photo-card-right`;
- generic SaaS dashboard;
- fake charts;
- prompt bars;
- chip clouds;
- purple AI visual;
- cyberpunk;
- excessive glow;
- cheap card grid;
- English visible UI labels;
- random metrics;
- startup template look;
- фейковые product screens;
- равновесная сетка темных карточек;
- large route panel under CTA;
- operator panel over portrait;
- literal command center UI.

Если Stitch возвращает один из этих паттернов, результат считается `REJECT`, даже если выглядит "дорого".

## Homepage Structure

Структура главной страницы:

1. Hero
2. Problem / Diagnostic
3. ClientFlow System
4. ClientFlow Audit
5. Products / Service Ladder
6. Proof / Founder Trust
7. Pricing / Offer Ladder
8. FAQ / Objections
9. Final CTA / Lead Form
10. Footer

Каждая секция должна отвечать на отдельный вопрос посетителя. Не делать страницу набором одинаковых карточек.

## Section 1. Hero

**Job:** за 5 секунд объяснить, что Делаем Диджитал строит управляемую систему привлечения клиентов, и показать Виталия как человека, который этой системой управляет.

**Visual pattern:** cinematic founder control room. Левая часть - спокойный conversion stack: бренд/краткий kicker, locked H1, locked subtitle, CTA group. Правая часть - интегрированный портрет, dark editorial atmosphere, тонкая route cue, steel-blue системные линии.

**Content direction:**

- locked H1;
- locked subtitle;
- CTA `Разбор системы`;
- CTA `Telegram-канал`;
- route cue `Трафик → Сайт → AI-квалификация → Заявка`;
- бренд `Делаем Диджитал`;
- founder signal `Виталий Тимошенко` только если не перегружает hero.

**Avoid:**

- photo-card справа;
- dashboard panels;
- fake metrics;
- prompt bar;
- chip cloud;
- English labels;
- крупная панель маршрута под CTA;
- виджет поверх портрета.

**Mobile behavior:** H1 и primary CTA появляются рано. Портрет появляется как часть первого впечатления, а не после башни блоков. Route cue сжимается в одну строку или компактную последовательность. Никаких больших route-card до портрета.

## Section 2. Problem / Diagnostic

**Job:** показать, что у бизнеса часто нет управляемого маршрута: трафик приходит, заявки теряются, квалификация неясна, follow-up и аналитика разорваны.

**Visual pattern:** restrained diagnostic layer. Не alarm wall, а спокойная карта утечек: точки потерь, последствия, разрыв между касанием и заявкой.

**Content direction:**

- "трафик не превращается в понятную заявку";
- "форма не квалифицирует";
- "оператор получает неполный контекст";
- "аналитика не показывает путь";
- "сайт не готов к платному трафику".

**Avoid:**

- красная паника;
- фейковые графики;
- dashboard analytics;
- 6-8 одинаковых карточек;
- пугающий тон.

**Mobile behavior:** 3-4 диагностических пункта максимум на первом мобильном view этой секции. Сохранять scanability, не делать длинный список равных dark cards.

## Section 3. ClientFlow System

**Job:** объяснить систему как маршрут от источника трафика до квалифицированного лида и handoff.

**Visual pattern:** digital architecture / route blueprint. Горизонтальная или ступенчатая схема с группами: traffic, site, AI qualification, lead, Telegram/CRM, analytics.

**Content direction:**

- Next.js landing / website;
- lead form or quiz;
- AI qualification readiness;
- Telegram / CRM routing;
- analytics and UTM;
- integration-ready architecture.

**Avoid:**

- fake product dashboard;
- случайные метрики;
- сложные charts;
- technical overload;
- равные карточки без маршрута.

**Mobile behavior:** route превращается в вертикальную линию или compact stepper. Каждый шаг короткий, на русском, без английских системных labels.

## Section 4. ClientFlow Audit

**Job:** показать низкий порог входа: аудит текущей системы привлечения и понимание, где теряются заявки.

**Visual pattern:** premium diagnostic artifact. Это не quiz gimmick, а серьезная проверка готовности: сайт, оффер, форма, квалификация, handoff, аналитика, трафик.

**Content direction:**

- аудит маршрута клиента;
- проверка формы и CTA;
- readiness для платного трафика;
- карта слабых мест;
- следующий шаг после аудита.

**Avoid:**

- игровой quiz style;
- дешевые progress bars;
- fake assessment mode;
- English labels;
- перегруз статусов.

**Mobile behavior:** компактный список проверок и один сильный CTA. Не показывать мелкие UI-таблицы, которые не читаются на телефоне.

## Section 5. Products / Service Ladder

**Job:** объяснить, что можно купить и в какой логике: от аудита к сайту, интеграциям и росту системы.

**Visual pattern:** service ladder / ordered path. Не обычные pricing cards в стиле SaaS, а последовательная лестница развития ClientFlow.

**Content direction:**

- ClientFlow Audit;
- Next.js website / landing;
- AI qualification;
- Telegram / CRM routing;
- analytics setup;
- traffic-ready conversion architecture.

**Avoid:**

- одинаковые карточки услуг;
- "лендинг под ключ" как главная рамка;
- скидочная инфобизнес-подача;
- слишком дружелюбный mass-SaaS тон.

**Mobile behavior:** лестница становится последовательностью из 3-5 этапов. CTA остается после логики, не теряется между карточками.

## Section 6. Proof / Founder Trust

**Job:** усилить доверие к Виталию и подходу Делаем Диджитал: реальный человек, реальный процесс, системное мышление.

**Visual pattern:** founder trust editorial block. Использовать secondary portrait `public/images/vitaly-hero-portrait-v2.png` или спокойный founder signal рядом с текстом и proof-пунктами.

**Content direction:**

- кто ведет проект;
- почему подход founder-led;
- что контролируется: структура, дизайн, Next.js, формы, handoff, аналитика;
- proof только реальный, без выдуманных кейсов и метрик.

**Avoid:**

- random logos;
- fake cases;
- overly personal bio;
- second hero photo-card;
- превращение в портфолио без ClientFlow.

**Mobile behavior:** портрет не должен занимать весь экран без смысла. Сначала доверие и ясный тезис, затем детали.

## Section 7. Pricing / Offer Ladder

**Job:** помочь посетителю понять уровни работы и выбрать следующий шаг.

**Visual pattern:** premium offer ladder with one recommended path. Copper можно использовать только для recommended action или primary CTA.

**Content direction:**

- понятные уровни;
- что входит;
- для кого подходит;
- чем отличается следующий уровень;
- CTA к разбору системы.

**Avoid:**

- дешевые discount labels;
- яркая распродажа;
- generic SaaS pricing cards;
- много мелкого текста;
- визуально равные тарифы без приоритета.

**Mobile behavior:** тарифы читаются сверху вниз. Recommended path виден, но не кричит. Кнопки не ломают строки.

## Section 8. FAQ / Objections

**Job:** снять ключевые возражения перед заявкой.

**Visual pattern:** restrained accordion or compact objection list. Тихая секция, без визуального шума.

**Content direction:**

- "чем это отличается от обычного сайта";
- "нужны ли CRM и Telegram сразу";
- "что если нет трафика";
- "можно ли начать с аудита";
- "что нужно от клиента";
- "как быстро появится preview".

**Avoid:**

- длинные полотна текста;
- агрессивные продажи;
- слишком технические ответы;
- раскрытые блоки, которые перегружают страницу.

**Mobile behavior:** accordion должен быть tap-friendly. Ответы короткие, без горизонтального overflow.

## Section 9. Final CTA / Lead Form

**Job:** собрать заявку на разбор системы и передать лид в операционный маршрут.

**Visual pattern:** serious intake console. Это форма, а не декоративная панель. Она должна выглядеть надежно, спокойно и дорого.

**Content direction:**

- короткое обещание результата разбора;
- поля формы;
- consent/legal notice;
- primary submit action;
- ожидание ответа через Telegram/CRM/оператора, если это отражено в текущей системе.

**Avoid:**

- fake success;
- декоративные input без функции;
- изменение validation;
- скрытие consent;
- перегруз формы лишними вопросами;
- тяжелые glow-эффекты вокруг полей.

**Mobile behavior:** поля высокие и удобные, consent читается, submit виден. Cookie/legal UI не перекрывает форму.

## Section 10. Footer

**Job:** завершить страницу, дать навигацию, контакты и legal-ссылки.

**Visual pattern:** quiet trust support layer. Не еще одна hero-секция.

**Content direction:**

- бренд;
- навигация;
- Telegram/contact;
- legal links;
- краткий ClientFlow signal.

**Avoid:**

- декоративный шум;
- повторение всех CTA;
- огромный футер;
- потеря legal links.

**Mobile behavior:** простая вертикальная структура, без мелких колонок, которые трудно нажать.

## Component Rules

Stitch должен проектировать интерфейс так, чтобы его можно было реалистично перевести в Next.js:

- buttons for CTA;
- accordion for FAQ;
- form fields with clear states;
- route/stepper for ClientFlow;
- tabs only if они реально помогают;
- cards только для meaningful repeated units;
- no cards inside cards;
- no decorative product dashboard;
- no fake charts.

Компоненты должны выглядеть как часть Delaem Digital, а не как shadcn defaults или SaaS template.

## Spacing Rhythm

Ритм страницы:

- hero - просторный, cinematic, но CTA early;
- diagnostic - плотнее, но не crowded;
- ClientFlow - архитектурный, с ясной последовательностью;
- pricing/final form - более focused;
- footer - тихий и компактный.

Не делать одинаковые вертикальные отступы и одинаковые карточки в каждой секции. Ритм должен меняться: крупная сцена, диагностическая плотность, маршрут, offer, доверие, форма.

## Surface Rules

Поверхности:

- page canvas: graphite / obsidian;
- section bands: subtle depth changes;
- elevated panels: только для важных conversion или diagnostic зон;
- form surface: читаемая, надежная, без декоративного шума;
- pricing surface: премиальная, но не SaaS tile;
- glass: редко и только если поддерживает глубину.

Запрещено:

- glass everywhere;
- huge rounded cards everywhere;
- repeated equal-weight panels;
- bright neon borders;
- purple glow;
- dashboard walls.

## CTA Hierarchy

Primary CTA:

- `Разбор системы`;
- copper / bronze;
- самый заметный action;
- ведет к форме или `#contacts` в реализации.

Secondary CTA:

- `Telegram-канал`;
- steel-blue или quiet text/button treatment;
- не спорит с primary;
- не должен выглядеть как второй primary.

CTA должны быть видимы:

- в hero;
- после ClientFlow/Audit logic;
- рядом с offer/pricing;
- в final form.

## Motion Rules

Motion должен быть спокойным и функциональным.

Разрешено:

- soft fade/translate;
- route-line reveal;
- subtle CTA hover;
- form focus transitions;
- small section entrance.

Запрещено:

- aggressive parallax;
- pulsing glow;
- constant particles;
- spinning charts;
- cyber motion;
- motion that hides text or delays CTA.

Motion должен помогать понять маршрут, а не создавать шоу.

## Mobile Compression Rules

Mobile должен сохранять premium impression.

Правила:

- H1 и primary CTA early;
- portrait не выталкивает оффер вниз;
- route cue компактный;
- нет башни dark cards;
- формы удобны;
- русские строки не обрезаются;
- buttons не ломаются;
- sticky/cookie/legal не перекрывают CTA;
- изображения не ломают лицо и не создают horizontal overflow.

Если mobile выглядит как длинная стопка одинаковых панелей, дизайн не проходит.

## Stitch Workflow Notes

Stitch должен работать так:

1. Использовать этот документ как `DESIGN.md`.
2. Не делать весь сайт первым ответом.
3. Сначала предложить 2-3 визуальных направления.
4. Для каждого направления показать desktop hero и mobile hero.
5. После выбора направления сделать 3 hero variants.
6. После утверждения hero собрать key screens.
7. Сохранять русский visible UI.
8. Использовать реальные портреты из `public/images`.
9. Не менять личность.
10. Не возвращать rejected patterns.

Первый Stitch-запрос должен быть про visual direction, а не про production site.

## Codex / Claude Code Implementation Notes

После Stitch дизайн должен быть передан в Claude Code / Codex только как утвержденное направление.

Implementation rules:

- Next.js implementation only;
- preserve CTA hrefs;
- preserve analytics;
- preserve forms;
- preserve validation, consent, success/error states;
- preserve Telegram / CRM handoff;
- no backend changes unless explicitly allowed;
- no env changes unless explicitly allowed;
- no package changes;
- no deploy;
- no commit without approval;
- use existing repo docs and tokens;
- keep visible UI Russian;
- translate Stitch visuals into maintainable components, not pasted HTML.

Required implementation checks:

```powershell
npm.cmd run build
npx.cmd tsc --noEmit
git diff --check
```

## Gate Criteria

Дизайн может идти в реализацию только если:

- desktop hero выглядит premium и founder-led;
- mobile hero сохраняет H1, CTA и portrait signal;
- портрет не искажен;
- hero не выглядит как photo-card;
- нет generic SaaS, dashboard, prompt bar, chip cloud, purple AI;
- все visible UI на русском;
- CTA hierarchy clear;
- forms/legal/analytics requirements preserved;
- key screens показывают не только красоту, но и lead route.

Если направление сомнительное, нужно вернуться к visual direction или hero variants, а не просить "улучшить весь сайт".

## Stitch Prompt Seed

```text
Design a premium dark B2B personal website for "Делаем Диджитал" by founder Виталий Тимошенко. The product system is ClientFlow System: a managed route from first touch to qualified lead, built with Next.js websites, lead forms, AI qualification, Telegram/CRM routing, analytics and integration readiness.

Visual direction: Founder-Led Editorial Control Room. Graphite/obsidian base, soft white text, muted blue-gray secondary text, copper/bronze only for primary conversion actions, refined steel-blue system cues. Calm expensive confidence, digital architecture, founder authority.

Use real portraits only: main hero portrait public/images/vitaly-hero-portrait-v3.png, secondary trust portrait public/images/vitaly-hero-portrait-v2.png, reference visual public/images/hero-visual-lock-reference.png. Do not change identity, do not generate another man, do not distort face, glasses, beard, hands or body. Do not hide the face under heavy gradients. Integrate portrait into an editorial scene, not a visible photo card.

Locked hero copy:
Собираю бизнесу
управляемую систему
привлечения клиентов

Locked subtitle:
Для владельцев бизнеса и экспертов, которым нужен понятный маршрут от первого касания до заявки.

CTA: Разбор системы, Telegram-канал.
Hero route cue: Трафик → Сайт → AI-квалификация → Заявка.
Navigation: Система, ClientFlow Аудит, Продукты, Web3, Контакты.

Homepage sections: Hero, Problem/Diagnostic, ClientFlow System, ClientFlow Audit, Products/Service Ladder, Proof/Founder Trust, Pricing/Offer Ladder, FAQ/Objections, Final CTA/Lead Form, Footer.

Visible UI language must be Russian. Avoid generic SaaS dashboard, fake charts, prompt bars, chip clouds, purple AI visuals, cyberpunk, excessive glow, cheap card grids, English UI labels, random metrics, startup template look, and text-left plus framed photo-card-right. First create 2-3 visual directions with desktop/mobile hero, not the whole site.
```
