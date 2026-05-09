# Implementation Spec Template v1

## 1. Layer Name

- Название слоя:
- Версия:
- Дата:
- Тип слоя: copy / visual / structure / integration / QA / launch

## 2. Purpose

Коротко описать, зачем нужен слой.

- Business purpose:
- User purpose:
- System purpose:
- Что должно стать лучше:

## 3. Approved Positioning

- Кто мы:
- Что делаем:
- Для кого:
- Главный результат:
- Главный differentiator:
- Что нельзя утверждать:

## 4. Approved Copy

Указать только утвержденные тексты или ссылку на copy doc.

- Hero headline:
- Hero subtitle:
- Primary CTA:
- Secondary CTA:
- Product names:
- Product descriptions:
- Form microcopy:
- Legal-sensitive copy:

Rules:

- не раздувать текст;
- не добавлять fake claims;
- не менять утвержденные цены;
- не менять продуктовую логику без отдельного слоя.

## 5. Approved Visual Direction

Ссылка на visual direction lock:

- Concept name:
- Main metaphor:
- Palette:
- Typography:
- Surfaces:
- Buttons:
- Cards:
- Forms:
- Motion:
- Mobile rules:

## 6. Sections to Change

| Section | Change Type | Goal | Notes |
|---|---|---|---|
| Hero | | | |
| System | | | |
| Products / Pricing | | | |
| Audit / Lead Magnet | | | |
| Founder / Trust | | | |
| Final CTA / Form | | | |
| Footer / Legal | | | |

## 7. Files Likely Involved

- `app/globals.css`
- `components/sections/...`
- `components/ui-custom/...`
- `lib/...`
- `app/...`

Уточнить фактический список после чтения кода.

## 8. Protected Files / Behavior

Нельзя менять без отдельного разрешения:

- env/secrets;
- backend формы;
- Telegram notification behavior;
- legal pages;
- prices;
- nav labels;
- English page;
- analytics naming;
- routes `/cases`, `/articles`, `/en`;
- production deploy.

Project-specific protected files:

- 

## 9. Design Rules

- Следовать approved visual direction.
- Не делать большой redesign вне scope слоя.
- Не добавлять декоративные элементы без функции.
- Не использовать forbidden styles.
- Сохранять CTA hierarchy.
- Проверять mobile.
- Не копировать референсы целиком.

## 10. Copy Rules

- Один экран - одна мысль.
- CTA = конкретное действие.
- Тексты не раздувать.
- Не добавлять fake cases.
- Не добавлять неподтвержденные claims.
- Не менять approved copy без отдельного слоя.

## 11. Responsive Rules

Desktop:

- 

Tablet:

- 

Mobile:

- 

Checklist:

- нет горизонтального скролла;
- кнопки tap-friendly;
- текст не вылезает;
- форма читается;
- hero не перегружен;
- cookie/banner не блокирует ключевой CTA.

## 12. QA Checklist

Functional:

- links;
- anchors;
- form submit;
- validation;
- success/error states;
- Telegram links;
- legal links.

Visual:

- hero first screen;
- section rhythm;
- products hierarchy;
- lead magnet / audit clarity;
- final CTA visibility;
- mobile layout;
- no overlap;
- no text overflow.

Content:

- approved positioning preserved;
- prices preserved;
- nav labels preserved;
- product logic preserved;
- no fake claims;
- legal-sensitive copy unchanged unless approved.

Technical:

- build passed;
- typecheck passed;
- preview deploy created if required;
- no unintended files changed;
- no env/secrets touched;
- no production deploy.

## 13. Build / Typecheck Commands

```powershell
npm.cmd run build
npx.cmd tsc --noEmit
```

## 14. Preview Deploy Command

Use only when required by the layer:

```powershell
npx.cmd vercel@latest
```

Forbidden unless explicitly requested:

```powershell
vercel --prod
```

## 15. Report Format

```markdown
# ◈ СЛОЙ: {layer name}

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

## 16. Acceptance Criteria

Слой считается выполненным, если:

- scope соблюден;
- protected behavior не изменен;
- approved positioning preserved;
- approved visual direction followed;
- responsive rules checked;
- QA checklist пройден;
- build/typecheck passed;
- report подготовлен.

