# ClientFlow Website Factory v1

## Назначение

ClientFlow Website Factory - внутренняя производственная система для выпуска премиальных ClientFlow-систем под ключ.

Результат работы фабрики - не просто сайт. Результат - связанный маршрут:

**сайт / квиз / трафик / заявка / follow-up / аналитика**

Сайт рассматривается как интерфейс привлечения и квалификации клиента, а не как отдельная витрина.

## Принципы производства

- Сначала бизнес-логика, затем визуальная оболочка.
- Сначала маршрут клиента, затем секции.
- Сначала оффер и доказательства, затем дизайн-эффекты.
- Каждый визуальный прием должен поддерживать смысл, доверие или конверсию.
- Нельзя копировать референсы целиком. Можно забирать паттерны.
- Нельзя добавлять claims, кейсы, цифры и обещания без подтверждения.
- Legal, форма, аналитика и follow-up проектируются как часть ClientFlow, а не как постскриптум.

## Pipeline

### 1. Client / Founder Brief

Цель: собрать исходные данные от владельца, фаундера или команды.

На выходе:

- кто продает;
- кому продает;
- что продает;
- средний чек;
- география;
- текущий процесс продаж;
- источники трафика;
- ограничения и запреты;
- критерии успеха.

### 2. Business & Offer Diagnosis

Цель: понять, что реально продается и почему клиент должен выбрать это решение.

Проверяем:

- продуктовую линейку;
- основной оффер;
- входной продукт;
- high-ticket или флагманский продукт;
- возражения;
- причины недоверия;
- что должно произойти до заявки.

На выходе:

- карта оффера;
- продуктовая иерархия;
- список смыслов, которые сайт обязан донести.

### 3. Audience & Traffic Context

Цель: связать сайт с источником внимания.

Проверяем:

- откуда придет пользователь;
- насколько он прогрет;
- что он уже знает;
- чего боится;
- какой следующий шаг для него реалистичен;
- нужен ли квиз, lead magnet, аудит или прямая заявка.

На выходе:

- сценарии посетителей;
- уровень прогрева;
- приоритетный CTA;
- вторичный CTA.

### 4. Reference Research

Цель: собрать сильные визуальные и структурные примеры.

Ищем не только hero, а весь сайт:

- первый экран;
- ритм секций;
- продуктовые карточки;
- формы;
- CTA-блоки;
- founder/trust-блоки;
- инфографику;
- mobile UX.

На выходе:

- набор референсов;
- краткое описание паттернов;
- список того, что можно адаптировать.

### 5. Reference Scoring

Цель: отделить качественные паттерны от визуального шума.

Оценка проводится по матрице `reference-scoring-system-v1.md`.

На выходе:

- shortlist референсов;
- score по категориям;
- anti-patterns, которые нельзя повторять;
- рекомендации для visual direction.

### 6. Concept Direction

Цель: зафиксировать единую концепцию сайта до дизайна и разработки.

Фиксируем:

- название концепции;
- главную метафору;
- роль founder/product visual;
- визуальный тон;
- композицию hero;
- структуру маршрута;
- принципы интерфейса.

На выходе:

- visual direction lock;
- список разрешенных паттернов;
- список запрещенных приемов.

### 7. Website Structure

Цель: собрать структуру сайта как маршрут принятия решения.

Типовая логика:

1. Hero: кто, что делает, для кого, главный CTA.
2. Problem / Loss Map: где теряется клиент.
3. System: как устроен маршрут.
4. Products / Services: что можно купить.
5. Process: как будет идти работа.
6. Proof / Trust / Founder: почему можно доверять.
7. Lead Magnet / Audit / Quiz: мягкий вход.
8. Final CTA: заявка или следующий шаг.
9. Legal / Footer: доверие и соответствие требованиям.

На выходе:

- карта секций;
- назначение каждой секции;
- CTA для каждой критической точки.

### 8. Copywriting System

Цель: написать короткий, точный и продающий текст без раздувания.

Правила:

- один экран - одна мысль;
- заголовок отвечает за смысл, подзаголовок - за контекст;
- CTA называет действие, а не абстрактное желание;
- bullets показывают пользу или состав;
- без fake claims, пустых суперлативов и длинных стен текста.

На выходе:

- approved positioning;
- approved copy;
- CTA map;
- список запретных формулировок.

### 9. Visual System

Цель: создать визуальный язык, который поддерживает позиционирование.

Фиксируем:

- палитру;
- типографику;
- grid;
- surfaces;
- buttons;
- cards;
- forms;
- infographics;
- motion rules;
- mobile rules.

На выходе:

- visual direction lock;
- component behavior;
- правила адаптива.

### 10. Conversion System

Цель: спроектировать путь к заявке.

Проверяем:

- основной CTA;
- вторичный CTA;
- форму;
- квиз;
- lead magnet;
- доверительные элементы;
- последовательность касаний.

На выходе:

- CTA hierarchy;
- lead path;
- сценарии заявки;
- правила follow-up.

### 11. Lead Magnet / Quiz / Form Logic

Цель: выбрать правильный механизм входа.

Возможные форматы:

- ClientFlow Audit;
- PDF/checklist;
- diagnostic quiz;
- request form;
- Telegram-first contact;
- callback request.

На выходе:

- формат lead magnet;
- вопросы квиза или поля формы;
- логика квалификации;
- message после отправки;
- follow-up сценарий.

### 12. Analytics & Tracking

Цель: сделать систему измеряемой.

Отслеживаем:

- CTA clicks;
- form starts;
- form submits;
- quiz steps;
- Telegram clicks;
- lead magnet downloads;
- pricing/product CTA clicks;
- scroll depth при необходимости.

На выходе:

- analytics event map;
- naming convention;
- список целей;
- QA checklist по событиям.

### 13. Legal & Trust

Цель: не запускать сбор заявок без правовой и доверительной базы.

Проверяем:

- privacy policy;
- consent;
- cookies;
- реквизиты;
- корректность claims;
- условия обработки персональных данных;
- legal links в форме и footer.

На выходе:

- legal checklist;
- trust checklist;
- список ограничений для copy.

### 14. Build Spec

Цель: перевести концепцию в понятное ТЗ для Codex, Framer, v0 или другой реализации.

Spec должен содержать:

- layer name;
- purpose;
- approved positioning;
- approved copy;
- approved visual direction;
- sections to change;
- protected files / behavior;
- responsive rules;
- QA checklist;
- commands.

На выходе:

- implementation spec;
- список файлов;
- acceptance criteria.

### 15. QA Gate

Цель: проверить, что сайт работает как система.

Проверяем:

- смысл hero за 5 секунд;
- понятность продуктовой линейки;
- CTA hierarchy;
- читаемость desktop/mobile;
- отсутствие visual clutter;
- форму и legal links;
- analytics hooks;
- performance/build/typecheck.

На выходе:

- QA report;
- список blockers;
- список polish tasks.

### 16. Launch Gate

Цель: запускать только то, что готово принимать трафик.

Перед запуском:

- production build passed;
- typecheck passed;
- form backend checked;
- notifications checked;
- legal checked;
- analytics checked;
- preview approved;
- domain/metadata/OG checked.

На выходе:

- launch approval;
- deploy plan;
- rollback plan.

### 17. Post-launch Review

Цель: улучшать систему по фактическим данным.

Через 3-14 дней проверяем:

- заявки;
- качество лидов;
- слабые CTA;
- drop-off points;
- вопросы клиентов;
- конверсию lead magnet / quiz / form;
- необходимость follow-up изменений.

На выходе:

- post-launch review;
- список улучшений;
- следующий production layer.

## Definition of Done

Проект считается собранным через Website Factory, если:

- есть brief;
- есть diagnosis;
- есть scored references;
- есть locked visual direction;
- есть approved copy;
- есть implementation spec;
- есть QA gate;
- есть launch gate;
- есть post-launch review plan.

