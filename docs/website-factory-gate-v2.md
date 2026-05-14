# Website Factory Gate v2

## Назначение

Gate v2 - финальная приемка сайта перед клиентским preview, production deploy или передачей в следующий слой работ. Gate проверяет не только визуал, но и фото, формы, handoff, аналитику, legal, cookies и производительность.

Результат Gate может быть только:

- `PASS` - можно двигаться дальше;
- `PATCH` - есть конкретные правки без смены направления;
- `REJECT` - направление или реализация не проходят стандарт.

## Общее Правило

Сайт не проходит Gate, если:

- первый экран не объясняет оффер;
- CTA не виден или не работает;
- mobile ломает доверие или конверсию;
- фото искажает личность;
- форма не отправляет лид;
- Telegram/CRM/handoff не подтвержден;
- аналитика не ловит ключевые события;
- legal/cookie элементы отсутствуют или мешают действию;
- появились запрещенные визуальные паттерны;
- build/typecheck/diff-check не пройдены для implementation-задачи.

## Desktop Visual Gate

Проверить на desktop viewport около `1440x900`.

- [ ] H1 понятен в первом экране.
- [ ] Primary CTA виден без скролла.
- [ ] Secondary CTA не спорит с primary CTA.
- [ ] Визуальный якорь интегрирован, а не вставлен карточкой.
- [ ] Страница не похожа на generic SaaS template.
- [ ] Нет dashboard hero, prompt bar, chip cloud, purple AI.
- [ ] Нет фейковых метрик и декоративных графиков без смысла.
- [ ] Русский текст не обрезан.
- [ ] Иерархия секций читается.
- [ ] Нет card spam и равновесных темных блоков.
- [ ] Типографика выглядит контролируемо.
- [ ] CTA и формы визуально выделены.
- [ ] Нет горизонтального overflow.

Решение:

- `PASS`: визуал выглядит market-ready.
- `PATCH`: есть локальные проблемы: spacing, wrapping, contrast, отдельный блок.
- `REJECT`: hero или общий стиль возвращает запрещенный паттерн.

## Mobile Visual Gate

Проверить на стандартном phone viewport.

- [ ] H1 появляется рано.
- [ ] Primary CTA появляется рано.
- [ ] Портрет или главный визуал не выталкивает оффер слишком низко.
- [ ] Нет горизонтального overflow.
- [ ] Нет обрезанного русского текста.
- [ ] Кнопки tap-friendly.
- [ ] Секции не превращаются в бесконечную башню карточек.
- [ ] Форма удобна для заполнения.
- [ ] Consent читается.
- [ ] Cookie/legal UI не блокирует первое действие.
- [ ] Sticky/overlay элементы не закрывают CTA и поля.

Решение:

- `PASS`: mobile сохраняет оффер, доверие и действие.
- `PATCH`: локальная адаптивная правка.
- `REJECT`: первый экран или форма непригодны.

## Photo Integration Gate

- [ ] Личность клиента сохранена.
- [ ] Лицо не искажено.
- [ ] Очки, борода, волосы, руки и контур тела не сломаны.
- [ ] Фото не выглядит AI-plastic.
- [ ] Hero не стал photo-card.
- [ ] UI не закрывает лицо.
- [ ] Фото поддерживает оффер и доверие.
- [ ] Mobile crop не ломает лицо и CTA.
- [ ] Слабые фото не замаскированы эффектами.

Решение:

- `PASS`: фото усиливает сайт.
- `PATCH`: нужна ретушь, crop или cleanup.
- `REJECT`: нужен новый asset или новая фотосъемка.

## Lead Form / Quiz Gate

- [ ] Все обязательные поля отображаются.
- [ ] Валидация работает.
- [ ] Ошибки понятны.
- [ ] Success state работает.
- [ ] Failure state работает или корректно обрабатывается.
- [ ] Consent checkbox / legal notice сохранены.
- [ ] Hidden fields, UTM, service intent и source данные не потеряны.
- [ ] CTA hrefs сохранены.
- [ ] Form submit не ломается на desktop.
- [ ] Form submit не ломается на mobile.
- [ ] Нет fake success без реальной отправки.

Решение:

- `PASS`: лид можно отправить и проверить.
- `PATCH`: мелкая UI/validation правка.
- `REJECT`: лид не доходит или данные теряются.

## Telegram / CRM Handoff Gate

- [ ] Telegram notification приходит в нужный канал/чат.
- [ ] CRM lead создается или webhook получает данные.
- [ ] Имя, телефон/email, услуга, сообщение и UTM передаются.
- [ ] Ошибки handoff логируются или видимы оператору.
- [ ] Дубли не создаются без причины.
- [ ] Нет изменения token/env без отдельного разрешения.
- [ ] Нет silent fail.

Если integration не входит в scope текущего проекта, это нужно явно отметить в Gate report.

Решение:

- `PASS`: handoff подтвержден тестовым лидом.
- `PATCH`: данные доходят, но есть неполное поле или формат.
- `REJECT`: лид не доходит в операционный канал.

## Analytics Gate

- [ ] Page view фиксируется.
- [ ] Primary CTA click фиксируется.
- [ ] Secondary CTA click фиксируется, если есть.
- [ ] Form start фиксируется, если событие предусмотрено.
- [ ] Form submit success фиксируется.
- [ ] Form submit error фиксируется, если событие предусмотрено.
- [ ] Quiz events фиксируются, если есть quiz.
- [ ] UTM сохраняются.
- [ ] Event names не изменены случайно.
- [ ] Yandex Metrika / PostHog / Vercel Analytics подключены согласно scope.

Решение:

- `PASS`: ключевые события подтверждены.
- `PATCH`: не хватает вторичного события.
- `REJECT`: нет данных по главной конверсии.

## Legal / Cookie Gate

- [ ] Privacy policy доступна.
- [ ] Terms / offer / legal page доступны, если нужны проекту.
- [ ] Consent рядом с формой сохранен.
- [ ] Cookie notice работает согласно scope.
- [ ] Cookie UI не закрывает CTA и форму.
- [ ] Legal links не ведут на 404.
- [ ] Тексты не изменены случайно в visual pass.

Решение:

- `PASS`: legal path доступен и не мешает конверсии.
- `PATCH`: ссылка, текст или mobile-позиция требуют правки.
- `REJECT`: отсутствует обязательная legal/consent часть.

## Performance Gate

Минимум для implementation-задачи:

- [ ] `npm.cmd run build` проходит.
- [ ] `npx.cmd tsc --noEmit` проходит.
- [ ] `git diff --check` проходит.
- [ ] Нет очевидного layout jank.
- [ ] Изображения оптимизированы или готовы к оптимизации.
- [ ] Нет тяжелой анимации без смысла.
- [ ] Нет новых зависимостей без разрешения.
- [ ] Нет package/env/deploy изменений без разрешения.

Для production-ready прохода дополнительно:

- [ ] Lighthouse performance не имеет критичных провалов.
- [ ] LCP hero asset не чрезмерно тяжелый.
- [ ] Mobile scroll остается плавным.
- [ ] Нет console errors на основном сценарии.

## Reject / Patch / Pass Rules

### PASS

Можно ставить `PASS`, если:

- визуал desktop и mobile проходят;
- фото проходит;
- формы и handoff проверены;
- аналитика подтверждена;
- legal/cookie путь работает;
- performance checks пройдены;
- diff не содержит запрещенных изменений.

### PATCH

Ставить `PATCH`, если:

- направление правильное;
- проблема локальная;
- исправление можно сделать без смены структуры;
- integrations не сломаны;
- нет запрещенного паттерна в основе.

Примеры PATCH:

- кнопка переносится некрасиво;
- один блок слишком плотный на mobile;
- фото требует crop;
- не хватает одного analytics event;
- cookie banner перекрывает часть экрана.

### REJECT

Ставить `REJECT`, если:

- hero слабее стандарта;
- сайт выглядит generic SaaS;
- вернулись dashboard, prompt bar, chip cloud, purple AI или photo-card hero;
- портрет искажает личность;
- mobile непригоден;
- форма не отправляет лид;
- handoff не работает;
- аналитика не фиксирует главную конверсию;
- legal/consent отсутствует;
- реализация требует запрещенных backend/env/package/deploy изменений;
- diff вышел за approved scope.

После `REJECT` нельзя бесконечно патчить поверх слабой базы. Нужно вернуться к `DESIGN.md`, выбранному паттерну или Stitch-варианту.

## Gate Report Template

```text
Gate result: PASS / PATCH / REJECT

Desktop visual:
Mobile visual:
Photo integration:
Lead form / quiz:
Telegram / CRM handoff:
Analytics:
Legal / cookie:
Performance:

Checks:
- npm.cmd run build:
- npx.cmd tsc --noEmit:
- git diff --check:

Required patches:
Risks:
Approval needed:
```
