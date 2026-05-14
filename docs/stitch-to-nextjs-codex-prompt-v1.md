# Stitch To Next.js Codex Prompt v1

## Назначение

Этот документ содержит reusable prompt для передачи утвержденного Stitch-дизайна в Claude Code или Codex. Промпт нужен для controlled implementation: перевод дизайна в Next.js без поломки форм, аналитики, backend, env, package-файлов, legal и деплоя.

## Когда Использовать

Использовать только после того, как:

- `DESIGN.md` утвержден;
- выбран один визуальный победитель;
- есть `screen.png` или набор экранов;
- есть `code.html`, если Stitch его выдал;
- активы подготовлены или перечислены;
- текущие repo docs прочитаны;
- allowed files явно указаны.

## Reusable Prompt

```text
Ты работаешь в Next.js-репозитории Delaem Digital.

Задача:
Перевести утвержденный Stitch-дизайн в production-ready Next.js-реализацию.

Входные материалы:
- Stitch DESIGN.md: {path_to_design_md}
- Desktop screen.png: {path_to_desktop_screen}
- Mobile screen.png: {path_to_mobile_screen}
- Stitch code.html: {path_to_code_html_or_none}
- Assets: {asset_paths}
- Current repo docs:
  - docs/factory-stack-v1.md
  - docs/factory-workflow-v1.md
  - docs/factory-codex-operating-rules-v1.md
  - docs/factory-visual-gate-v1.md
  - docs/website-factory-gate-v2.md
  - docs/delaem-digital-design-bible-v1.md
  - docs/delaem-digital-design-tokens-v1.md
  - docs/client-photo-integration-rules-v1.md
  - docs/portrait-source-lock-v1.md
  - docs/rejected-visual-patterns-v1.md

Allowed output:
- Next.js implementation only inside the allowed files.

Allowed files:
- {exact_allowed_files}

Do not touch:
- backend/API routes unless explicitly allowed;
- env files;
- package.json;
- lockfiles;
- deployment config;
- analytics config;
- CRM/Telegram handoff logic;
- unrelated components;
- unrelated CSS;
- legal content unless explicitly allowed.

Implementation rules:
- Use the Stitch design as direction, not as raw code to paste blindly.
- Preserve the existing Next.js architecture.
- Preserve existing CTA hrefs.
- Preserve form behavior, validation, hidden fields, consent, success/error states.
- Preserve analytics event names, data attributes, UTM handling and tracking hooks.
- Preserve Telegram/CRM/webhook handoff behavior.
- Preserve legal links and cookie/consent behavior.
- Use existing tokens, fonts, components and project conventions.
- Keep visible UI text in Russian.
- Do not introduce generic SaaS visuals, dashboard hero, purple AI style, prompt bars, chip clouds, or photo-card hero.
- Do not invent fake metrics, fake cases, fake product UI, or fake integrations.
- Do not add new dependencies.
- Do not change backend/env/package/deploy unless the task explicitly says so.

Photo rules:
- Preserve client identity.
- Do not distort face, glasses, beard, hair, hands or body.
- Do not cover the face with UI.
- Integrate portrait into the visual system instead of placing it as a rectangular card.
- If source photo is weak, report the risk and stop before inventing a new identity.

Required process:
1. Read the listed docs and current implementation.
2. Identify exact files that need edits.
3. Implement only the approved scope.
4. Run:
   npm.cmd run build
   npx.cmd tsc --noEmit
   git diff --check
5. Review git diff for forbidden changes.
6. Report changed files, checks and remaining risks.

Do not:
- commit;
- push;
- deploy;
- run production deploy commands;
- request or change secrets;
- modify packages.

Acceptance:
- desktop visual gate passes;
- mobile visual gate passes;
- photo integration gate passes;
- lead form / quiz still works;
- Telegram/CRM handoff is preserved;
- analytics events are preserved;
- legal/cookie behavior is preserved;
- performance is not obviously degraded;
- git diff contains only approved files.

Report format:
- Files changed:
- What was implemented:
- Preserved behavior:
- Checks:
  - npm.cmd run build:
  - npx.cmd tsc --noEmit:
  - git diff --check:
- Git status:
- Risks / follow-ups:
```

## Diff-Check Rules

После реализации обязательно проверить:

- нет изменений в `package.json`;
- нет изменений в lockfile;
- нет изменений в env;
- нет deployment edits;
- нет backend edits без разрешения;
- CTA hrefs не поменялись случайно;
- analytics names и attributes сохранены;
- формы не потеряли поля, consent и error states;
- legal links остались доступны.

## Когда Остановиться

Claude Code / Codex должен остановиться и сообщить риск, если:

- Stitch-дизайн требует backend/env/package изменений, но они не разрешены;
- фото требует генеративной замены личности;
- текущая реализация не содержит нужных форм или событий;
- allowed files не покрывают необходимый scope;
- дизайн возвращает запрещенный паттерн;
- build/typecheck ломаются по причинам вне разрешенного scope.

## Минимальный Итоговый Отчет

Отчет должен быть коротким и проверяемым:

- какие файлы изменены;
- какие секции реализованы;
- какие CTA, формы и события сохранены;
- какие проверки пройдены;
- что осталось риском;
- что не делалось: commit, deploy, package/env/backend changes.
