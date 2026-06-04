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

## Agent source of truth

Use the DD Agent Pack from the Website Factory OS repository when a specialized role is useful:

- `SileNtGuardNetwork/delaemdigital/docs/ai-agents/DD_AGENT_PACK_v1.md`
- `SileNtGuardNetwork/delaemdigital/docs/ai-agents/CODEX_CUSTOM_AGENTS.md`

Recommended roles for this repo:

- `dd-website-factory-architect`
- `dd-design-quality-director`
- `dd-frontend-product-ui-engineer`
- `dd-evidence-collector`
- `dd-reality-gate-checker`
- `dd-minimal-change-engineer`
- `dd-legal-claims-filter`

## Minimal Autonomy Protocol

This protocol adapts the useful part of Karpathy-style `program.md`: small scope, baseline first, one change, objective check, evidence, keep/discard.

For every implementation task:

1. Define the target flow in one sentence.
2. Read only the relevant files first.
3. State the files that may be changed.
4. State the files that must not be changed.
5. Establish a baseline before editing.
6. Make the smallest safe diff.
7. Run the relevant verification commands.
8. Collect evidence.
9. If the change passes, keep it and report evidence.
10. If the change fails, revert or report the exact blocker.
11. Do not expand scope without explicit instruction.

The agent must not run an indefinite loop. This is a production showcase, not an autonomous overnight experiment harness.

## Baseline Requirements

Before editing code, establish the current state using the smallest useful check:

- build/typecheck status;
- current homepage/route behavior;
- current form behavior;
- current Telegram notification behavior;
- current design/spec requirement;
- current legal/consent requirement.

If a baseline cannot be established, say so explicitly and continue with the safest narrow change.

## Keep / Discard Logic

Keep a change only if it improves the target flow without damaging adjacent flows.

Keep when:

- build/typecheck pass;
- the target behavior is verified;
- no unrelated files were changed;
- hero positioning and approved copy remain intact unless explicitly requested;
- consent/legal minimum is preserved;
- evidence is captured in the final report.

Discard or revise when:

- build/typecheck fails because of the change;
- the target behavior is not verified;
- the change broadens scope;
- the change weakens consent, legal, analytics, monitoring or owner notification;
- the change adds visual noise or generic SaaS design.

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
- identify files that must not be touched
- establish baseline first

Do not:

- touch `.env`, secrets, tokens or production credentials
- add dependencies without explicit approval
- run migrations without explicit approval
- change pricing without explicit approval
- change business positioning without explicit approval
- commit, push or deploy without explicit approval when working locally
- perform autonomous production deploys

Destructive commands are forbidden unless the owner explicitly approves them:

- `rm -rf`
- `git reset --hard`
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

- applied role, if any
- target flow
- baseline checked
- files changed
- files intentionally not changed
- what changed
- build result
- typecheck result
- functional evidence
- preview URL if created
- risks or blockers
- keep/discard decision

## Legal and data rules

For all lead forms:

- consent checkbox must be visible and not pre-checked
- avoid logging PII in plain text
- preserve privacy/cookie/legal pages
- verify 152-ФЗ requirements before production decisions

## Final gate

Before any launch claim, apply `dd-reality-gate-checker`.

Default status is `NEEDS WORK` unless evidence proves readiness.

Allowed statuses:

- `PASS`
- `CONDITIONAL PASS`
- `FAIL`

Never claim production readiness from visual review alone.

## Operating principle

This repository is not a playground. It is the production foundation for the Website Factory and ClientFlow System.
Prefer boring, stable, typed code over clever experiments.
