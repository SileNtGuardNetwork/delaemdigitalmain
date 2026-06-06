# Canonical Tokens Decision v1

**Status:** Active for implementation (DD-STEP-1)  
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
| Container width | Not specified | Not in token doc | Not specified | `--container: 1180px` (hero uses `1360px` inline — frozen) |
| Button radius | 10px primary | `dd-radius-sm: 12px` | 10px, not pill | Mixed: legacy `.button` + Tailwind `rounded-[10px]` header |

**Implementation rule:** Prefer `--dd-*` and design-tokens-v1 values. Legacy `--bg`, `--copper`, `.button-*` classes remain until LEGACY_CSS cleanup (Step 2+).

## Header navigation anchor map

Approved labels from `docs/delaem-digital/hero-factory-brief-v1.md`. Canonical config: `lib/navigation.ts` → `headerNavigation`.

| Nav label | Target | Section / route | Status |
| --- | --- | --- | --- |
| Подход | `#system` | `system-section.tsx` — ClientFlow methodology | OK |
| Услуги | `#services` | `services-section.tsx` | OK |
| Кейсы | `/cases` | `app/cases/page.tsx` | OK (leaves homepage) |
| Обо мне | `#founder` | `founder-section.tsx` | **Mismatch** — no `id` on section yet; fix in Step 2 |
| Контакты | `#contacts` | `final-cta-section.tsx` | OK |

Header CTA: **Обсудить проект** → `#contacts` (hero-factory-brief). Hero primary CTA remains **Разбор системы** (frozen in Step 1).

## Header source of truth

- **Active:** `lib/navigation.ts` (`headerNavigation`, `headerCta`) imported by `components/layout/header.tsx`
- **Legacy:** `navigation` export kept for unused `header-controls.tsx` only
- **Footer:** still uses inline links (not synced in Step 1 — intentional)
