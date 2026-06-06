# Canonical Tokens Decision v1

**Status:** Active for implementation (DD-STEP-2-A updated)  
**Date:** May 2026  
**Project:** Delaem Digital / ClientFlow System

## Decision

For all **new and rebuilt** UI work, treat these as the practical source of truth:

1. **Runtime CSS variables** in `app/globals.css` under `:root` — prefix `--dd-*`
2. **`docs/delaem-digital-design-tokens-v1.md`** — token definitions and discipline

Do **not** mass-rewrite older docs in early rebuild passes. Document conflicts; resolve in dedicated token-harmonization step later.

## Conflicts (documented, not resolved in Step 1)

| Topic | `docs/delaem-digital/design-constitution-v1.md` | `docs/delaem-digital-design-tokens-v1.md` + `--dd-*` | `.cursorrules` | `app/globals.css` legacy |
| --- | --- | --- | --- | --- |
| Canvas background | `#07070d` (`--bg`) | `#05070A` (`--dd-canvas-graphite`) | `#07070d` | Both: `--dd-canvas-graphite` + `--bg: #07090c` |
| Copper / CTA | `#c97a50` | `#B8794B` (`--dd-action-copper`) | `#c97a50` | `--dd-action-copper` + `--copper: #c7845c` |
| H1 highlight blue | `#5b8cff` | `#5F8ED8` (`--dd-diagnostic-blue`) | `#5b8cff` | `--dd-diagnostic-blue` |
| Accent violet | `#5266eb` listed | Explicitly removed / no violet primary | `#5266eb` in rules | `--primary-a/b` steel tones |
| Container width | Not specified | Not in token doc | Not specified | `--container: 1180px` legacy; **flagship target 1360px** (see below) |
| Button radius | 10px primary | `dd-radius-sm: 12px` | 10px, not pill | Mixed: legacy `.button` + Tailwind `rounded-[10px]` header |

**Implementation rule:** Prefer `--dd-*` and design-tokens-v1 values. Legacy `--bg`, `--copper`, `.button-*` classes remain until LEGACY_CSS cleanup (Step 2+).

## Header navigation anchor map

Approved labels from `docs/delaem-digital/hero-factory-brief-v1.md`. Canonical config: `lib/navigation.ts` → `headerNavigation`.

| Nav label | Target | Section / route | Status |
| --- | --- | --- | --- |
| Подход | `#system` | `system-section.tsx` — ClientFlow methodology | OK |
| Услуги | `#services` | `services-section.tsx` | OK |
| Кейсы | `/cases` | `app/cases/page.tsx` | OK (leaves homepage) |
| Обо мне | `#founder` | `founder-section.tsx` | OK (DD-STEP-2-A) |
| Контакты | `#contacts` | `final-cta-section.tsx` | OK |

Header CTA: **Обсудить проект** → `#contacts` (hero-factory-brief). Hero primary CTA remains **Разбор системы** (frozen in Step 1).

## Container width decision (DD-STEP-2-A)

**Flagship visual max width:** `1360px` for hero and premium system sections in future visual rebuilds.

**Current runtime:**

- Hero: `1360px` inline (frozen — do not change in shell passes)
- Header inner: `max-w-[var(--container)]` → `1180px` via `--container` in `globals.css`
- Sections 2–13 (`dd-ui` `SectionInner`): `max-w-[var(--container)]` → `1180px`

**Runtime token (DD-STEP-2-B.1):** `--dd-container-flagship: 1360px` in `app/globals.css`. Consumed by `FlagshipContainer` in `dd-ui.tsx`.

**Rule for rebuild passes:** New and rebuilt sections use `FlagshipContainer` / `--dd-container-flagship`. Do **not** change global `--container: 1180px` in a mass pass — legacy `.container` rules and unrebuilt sections depend on it.

**Known width jump:** Sections 2–8 at 1360px (`FlagshipContainer`); section 9+ (`DdContainer`) at 1180px — visible at why → audience boundary until Step 2-G.

**Unification:** Planned when sections 4+ migrate to `FlagshipContainer`.

## Shell navigation source of truth

- **Active:** `lib/navigation.ts` (`headerNavigation`, `headerCta`)
- **Header:** `components/layout/header.tsx`
- **Footer:** `components/layout/footer.tsx` — synced with `headerNavigation` (DD-STEP-2-A)
- **Legacy:** `navigation` export kept for unused `header-controls.tsx` only
