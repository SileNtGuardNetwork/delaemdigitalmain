# DD-V2-1 — Homepage 8-Section Skeleton QA

**Pass:** structural skeleton only — not final visual polish.  
**Blueprint:** `docs/design/DD_SITE_V2_BLUEPRINT.md`  
**Date:** 2026-05-19

## New active section order

| # | Section | Component | Anchor |
| ---: | --- | --- | --- |
| 1 | Hero | `hero-section.tsx` | `#top` (implicit) |
| 2 | What I Build | `what-i-build-section.tsx` | `#build` |
| 3 | Why It Works | `why-it-works-section.tsx` | `#why` |
| 4 | Internal Proof | `internal-proof-section.tsx` | `#proof` |
| 5 | Product Ladder | `product-ladder-v2-section.tsx` | `#products` |
| 6 | Process | `process-v2-section.tsx` | `#process` |
| 7 | Founder | `founder-section.tsx` | `#founder` |
| 8 | Final CTA | `final-cta-section.tsx` | `#contacts` |

## Navigation (V2)

| Label | Anchor |
| --- | --- |
| Что делаю | `#build` |
| Подход | `#why` |
| Продукты | `#products` |
| Обо мне | `#founder` |
| Контакты | `#contacts` |
| Header CTA: Разбор системы | `#contacts` |

## Old sections unlinked from homepage

Still in repo; **not** imported by `app/page.tsx`:

- `context-section.tsx`
- `system-section.tsx`
- `assembly-section.tsx`
- `audit-section.tsx`
- `services-section.tsx`
- `process-section.tsx` (9-step)
- `why-section.tsx`
- `audience-section.tsx`
- `leads-section.tsx`
- `pricing-section.tsx`

## Mobile structural expectation

- Single-column stack for all V2 sections.
- Product ladder: 1 col → `lg:3` cols.
- Why It Works: 1 col → `sm:2` cols.
- Founder: image block above copy on mobile.
- Final CTA: copy above placeholder form card.
- Hero: existing responsive layout retained; trust marker replaces flow strip.

## Known unfinished areas

| Area | Status |
| --- | --- |
| Hero | Skeleton V2 copy only — **not** final Hybrid A+B design |
| Final CTA form | Placeholder card + mailto — no backend wiring |
| Founder | Legacy layout (1180px split) — not migrated to FlagshipContainer |
| Analytics events | Partial — hero events unchanged; section view events not added |
| English H1 | Temporary per skeleton brief — may localize in V2-2 |
| Cases link | Internal proof links to `/cases` — page exists |

## Visual score estimate

| Criterion | Score (1–10) | Note |
| --- | ---: | --- |
| Structure / IA | 8 | 8 sections, clear anchors |
| Premium dark B2B | 6 | Consistent tokens; founder/hero mixed systems |
| Founder-led tone | 7 | Less methodology; some legacy ClientFlow in founder |
| Density | 8 | Lighter than 13-section flow |
| Mobile | 7 | Grid breakpoints OK; founder min-heights heavy |
| **Overall skeleton** | **7/10** | Acceptable for structural pass |

## Next pass recommendation (V2-2)

1. **Hero final** — Hybrid A+B per blueprint: founder portrait integration, refined typography, Russian/EN headline decision.
2. **Founder** — FlagshipContainer alignment, reduce `min-height: 1000px`, update copy tone.
3. **Final CTA** — Wire consent form via existing `contact-form` / leads API when approved.
4. **Section analytics** — `dd_[section]_viewed` for 8 sections.
5. **Visual polish** — rim lights, spacing rhythm, remove legacy Frame labels.
6. **Legacy cleanup pass** — archive or delete unlinked v1 sections after owner sign-off.

## Verification checklist

- [x] `app/page.tsx` imports only 8 V2 sections
- [x] Old 13-section flow inactive
- [x] Prices from `lib/pricing.ts` only
- [x] No API/backend/form wiring changes
- [x] `npm run build` — see commit report
- [x] `npm run typecheck` — see commit report
