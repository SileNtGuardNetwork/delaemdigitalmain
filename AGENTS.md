# AGENTS.md — Delaem Digital / ClientFlow System

## Назначение
Единые правила для AI-кодеров в проекте `SileNtGuardNetwork/delaemdigitalmain`.
Файл предназначен для Cursor, Roo Code, Codex и других coding agents.

## Проект
Личный сайт Виталия Тимошенко / Делаем Диджитал.
Эталонный showcase Website Factory и ClientFlow System.

## Production stack
- Next.js App Router
- TypeScript strict
- Tailwind CSS
- shadcn/ui where applicable
- Supabase for lead storage
- Telegram Bot API for lead cards
- Vercel for preview/production deploys

## Product position
Делаем Диджитал собирает бизнесу ClientFlow AI-системы:
- сайты под платный трафик
- AI-квалификацию лидов
- квизы и лид-магниты
- Telegram/CRM/n8n-автоматизацию
- аналитику и контроль заявок

Не менять позиционирование, цены, hero offer и core messaging без явного запроса владельца проекта.

## Approved hero copy
Kicker: `Виталий Тимошенко · основатель Делаем Диджитал`

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

CTA:
- `Разбор системы`
- `Telegram-канал`

Navigation:
- `Подход`
- `Услуги`
- `Кейсы`
- `Обо мне`
- `Контакты`

## Design source of truth
Primary design rules are stored in:
- `docs/delaem-digital/design-constitution-v1.md`
- `CLAUDE.md`

Core tokens:
- background: `#07070d`
- surface: `#0f0f1a`
- border: `#18182a`
- blue: `#5b8cff`
- accent: `#5266eb`
- copper: `#c97a50`
- text: `#ededf3`
- muted: `#8a8f98`

Design direction:
- premium dark B2B
- founder-led
- restrained, strategic, high-ticket
- no visual noise
- one accent = one meaning

## Forbidden visual patterns
Do not use:
- cyberpunk or neon styling
- fake dashboards
- random decorative floating cards
- raster AI text in images
- purple/rainbow gradients
- over-glow
- pill primary buttons
- heavy box-shadow for elevation
- generic SaaS template look

## Engineering rules
Always work in small scoped layers:
1. audit
2. plan
3. implementation
4. checks
5. report

Before changing runtime code:
- inspect related files first
- explain the files you intend to change
- avoid broad rewrites

Do not:
- touch `.env`, secrets, tokens or production credentials
- add dependencies without explicit approval
- run migrations without explicit approval
- change pricing without explicit approval
- change business positioning without explicit approval
- commit, push or deploy without explicit approval when working locally

Destructive commands are forbidden unless the owner explicitly approves them:
- `rm -rf`
- `git reset`
- `git clean`
- `DROP`
- `DELETE FROM`
- `supabase db reset`

## Required checks after code changes
Run available checks:
```bash
npm run build
npx tsc --noEmit
```

If the project has a dedicated typecheck script, this is also acceptable:
```bash
npm run typecheck
```

## Deploy rules
Default deploy path:
```bash
npx vercel@latest
```

Do not run production deploys unless explicitly requested:
```bash
vercel --prod
```

## Reporting format
After every completed change, report:
- files changed
- what changed
- build result
- typecheck result
- preview URL if created
- risks or blockers

## Legal and data rules
For all lead forms:
- consent checkbox must be visible and not pre-checked
- avoid logging PII in plain text
- preserve privacy/cookie/legal pages
- verify 152-ФЗ requirements before production decisions

## Operating principle
This repository is not a playground. It is the production foundation for the Website Factory and ClientFlow System.
Prefer boring, stable, typed code over clever experiments.
