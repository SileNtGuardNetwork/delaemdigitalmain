# Factory Client Delivery Checklist v1

## Назначение

Этот чеклист фиксирует, что нужно проверить и подготовить перед клиентским preview, перед production deploy и после production deploy. Он нужен, чтобы клиент получал не "ссылку на красивую страницу", а проверенный ClientFlow-сайт.

## Before Client Preview

Перед отправкой preview клиенту:

- [ ] Убедиться, что preview URL открывается.
- [ ] Проверить desktop first viewport.
- [ ] Проверить mobile first viewport.
- [ ] Проверить, что оффер понятен без объяснений.
- [ ] Проверить primary CTA.
- [ ] Проверить secondary CTA, если есть.
- [ ] Проверить форму или quiz.
- [ ] Проверить success и error states.
- [ ] Проверить Telegram/CRM/webhook handoff, если включен.
- [ ] Проверить analytics events на preview, если подключены.
- [ ] Проверить legal links.
- [ ] Проверить cookie/consent UI.
- [ ] Проверить, что нет lorem ipsum и английских UI-заглушек.
- [ ] Проверить, что фото клиента не искажено.
- [ ] Проверить, что mobile не ломает лицо, CTA и форму.
- [ ] Прогнать `npm.cmd run build`, если были code changes.
- [ ] Прогнать `npx.cmd tsc --noEmit`, если были code changes.
- [ ] Прогнать `git diff --check`.
- [ ] Проверить `git status --short`.

## Что Захватить Для Client Preview

Скриншоты:

- [ ] Desktop hero.
- [ ] Desktop lead form / final CTA.
- [ ] Mobile hero.
- [ ] Mobile form / final CTA.
- [ ] Key offer/pricing section.
- [ ] Success state after form submit, если можно безопасно показать.

Видео или screen recording:

- [ ] Первый экран и скролл до формы.
- [ ] CTA click до формы или quiz.
- [ ] Заполнение тестовой формы.
- [ ] Success state.
- [ ] Mobile scroll, если mobile был важной частью задачи.

Ссылки для отправки:

- [ ] Preview URL.
- [ ] Ссылка на production URL, если уже есть и это не новый deploy.
- [ ] Ссылки на legal pages.
- [ ] Ссылка на форму/quiz section через anchor, если есть.
- [ ] Краткий список того, что клиент должен проверить.

## Сообщение Клиенту Для Preview

Отправлять клиенту не просто ссылку, а короткий контекст:

```text
Готов preview:
{preview_url}

Пожалуйста, проверьте:
1. Первый экран: понятен ли оффер и доверие.
2. Фото/личность: все ли выглядит корректно.
3. CTA и форма: удобно ли оставить заявку.
4. Тексты: есть ли фактические правки.
5. Mobile: откройте ссылку с телефона.

Технические интеграции проверены: {yes/no/scope}
```

## Before Production Deploy

Перед production deploy:

- [ ] Получено явное approval от клиента или владельца проекта.
- [ ] Нет незавершенных PATCH из Gate.
- [ ] `website-factory-gate-v2` имеет `PASS`.
- [ ] Production env values готовы и не менялись случайно.
- [ ] Domain/DNS готов, если deploy на новый домен.
- [ ] Redirects проверены, если есть.
- [ ] Metadata и title проверены.
- [ ] Open Graph preview проверен.
- [ ] Favicon проверен.
- [ ] Robots/sitemap проверены согласно scope.
- [ ] Forms отправляют тестовый лид.
- [ ] Telegram/CRM/webhook принимает тестовый лид.
- [ ] Analytics ловит page view и conversion events.
- [ ] Legal/cookie path работает.
- [ ] Build проходит.
- [ ] Typecheck проходит.
- [ ] Diff-check проходит.
- [ ] Нет package/env/backend/deploy изменений без approval.
- [ ] Нет commit/deploy без явной команды.

## Production Deploy Approval Rule

Нельзя деплоить production, если approval звучит расплывчато.

Достаточные формулировки:

- "Деплой в production одобрен";
- "Можно выкатывать на домен";
- "Approve production deploy";
- "Запускай production deploy".

Недостаточные формулировки:

- "Вроде норм";
- "Покажи клиенту";
- "Давай дальше";
- "Сделай красиво";
- "Ок" без контекста deploy.

## After Production Deploy

После production deploy:

- [ ] Открыть production URL.
- [ ] Проверить desktop first viewport.
- [ ] Проверить mobile first viewport.
- [ ] Проверить primary CTA.
- [ ] Отправить production test lead.
- [ ] Проверить Telegram notification.
- [ ] Проверить CRM/webhook entry.
- [ ] Проверить analytics real-time или debug view.
- [ ] Проверить UTM на production URL.
- [ ] Проверить legal links.
- [ ] Проверить cookie/consent behavior.
- [ ] Проверить canonical/domain behavior, если важно.
- [ ] Проверить отсутствие console errors на главном сценарии.
- [ ] Проверить 404/redirects, если они в scope.
- [ ] Сохранить production screenshots.
- [ ] Зафиксировать deploy URL и время.

## Что Захватить После Production Deploy

Скриншоты:

- [ ] Production desktop hero.
- [ ] Production mobile hero.
- [ ] Production form.
- [ ] Production success state.
- [ ] Analytics event confirmation.
- [ ] Telegram/CRM lead confirmation без чувствительных данных.

Видео:

- [ ] Production main flow: открыть сайт -> CTA -> форма -> success.
- [ ] Mobile production flow, если клиент активно смотрит с телефона.

Ссылки:

- [ ] Production URL.
- [ ] Preview URL, если нужно сравнение.
- [ ] Legal URLs.
- [ ] Analytics dashboard link, если клиенту доступен.
- [ ] CRM lead link, если клиенту доступен.

## Events To Verify

Минимальный набор событий:

- [ ] `page_view` или аналог системы аналитики.
- [ ] primary CTA click.
- [ ] secondary CTA click, если есть.
- [ ] form start, если событие предусмотрено.
- [ ] form submit success.
- [ ] form submit error, если событие предусмотрено.
- [ ] quiz start, если есть quiz.
- [ ] quiz step complete, если есть quiz.
- [ ] quiz submit success, если есть quiz.
- [ ] Telegram/CRM handoff success, если трекается.

Названия событий нельзя менять без отдельного решения, потому что это ломает аналитику и сравнение конверсий.

## Что Отправить Клиенту После Production

Минимальный delivery message:

```text
Сайт опубликован:
{production_url}

Проверено:
- desktop/mobile;
- CTA и форма;
- тестовая заявка;
- Telegram/CRM handoff;
- analytics events;
- legal/cookie links.

Тестовая заявка:
{time_or_marker}

Если будете проверять форму сами, используйте пометку "тест", чтобы оператор не обработал заявку как реальную.
```

## Stop Conditions

Не отправлять клиенту preview или production delivery, если:

- форма не работает;
- handoff не подтвержден;
- mobile сломан;
- фото искажает клиента;
- legal/consent отсутствует;
- analytics не ловит основную конверсию;
- есть видимые заглушки;
- Gate result = `REJECT`;
- production deploy не был явно одобрен.
