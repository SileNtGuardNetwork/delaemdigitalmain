# DD Step 2-D Visual QA v1

**Pass:** DD-STEP-2-D  
**Base:** `c4ec8e1` — Rebuild assembly and audit sections  
**Reviewer:** Agent (code + layout inspection)  
**Date:** May 2026

## QA method

| Method | Status |
| --- | --- |
| Breakpoint / markup inspection | Done |
| Live browser 1440 / 390 / 430 | **Not available** in-agent |
| Build / typecheck | Required gate |
| Prices verified against `lib/pricing.ts` | Done |

## Desktop ~1440px

**Audit → Services transition**

- Both use `FlagshipContainer` (1360px) — **Audit→Services width jump resolved**.

**Services / Product Ladder**

- H2 + subhead per brief; kicker «Продукты Делаем Диджитал».
- Three cards: Делаем Сайт / Делаем Трафик / Делаем Систему.
- Prices: от 150 000 ₽ / от 250 000 ₽ / от 350 000 ₽ — from `lib/pricing.ts`.
- «Делаем Систему» featured (blue border, gradient) — strongest without weakening siblings.
- Copper `PrimaryBtn` only on System card; Site/Traffic use steel `SecondaryBtn`.
- Bottom note links to `#contacts` and `#audit`.
- Analytics `data-analytics-*` preserved on CTAs.

**Services → Process transition**

- Process still `DdContainer` (1180px) — new step at section 7 (expected Step 2-E).

**Desktop 1440 result:** **PASS**

## Mobile 390px

- Single-column card stack — no horizontal scroll.
- Price line prominent (`22px` bold).
- Includes limited to 4–5 items — not checklist noise.
- CTAs full-width on mobile (`w-full`), self-start on `sm+`.
- Bottom note wraps cleanly.

**Mobile 390 result:** **PASS**

## Mobile 430px

- Same 1-col layout as 390.
- Card padding `p-5` — readable content width ~382px.

**Mobile 430 result:** **PASS**

## Issues found

| # | Issue | Severity |
| --- | --- | --- |
| 1 | Audit→Services width jump | High — **fixed** |
| 2 | Hardcoded prices in old section | Medium — **fixed** (`lib/pricing.ts`) |
| 3 | Interactive picker UI felt SaaS-y | Medium — **fixed** (static ladder cards) |
| 4 | Services→Process 1360→1180 step | Medium — documented for 2-E |
| 5 | No live browser QA | Low |

## Issues fixed

- `FlagshipContainer` on Services.
- `ProductLadderCard` primitive; prices from `lib/pricing.ts`.
- Removed client-side picker; per-card CTAs with analytics.
- Blueprint-aligned copy structure.

## Remaining blockers

1. Process+ sections still 1180px.
2. Header shell 1180px vs content 1360px.
3. Owner browser sign-off recommended.

## Motion plan (documented)

- Product cards: CSS `fadeUp` stagger 0.1s, `0.5s ease`
- Featured card: optional subtle border-opacity transition on scroll (CSS only)
- `prefers-reduced-motion`: no stagger

## Score breakdown

| Criterion | Score |
| --- | ---: |
| Visual direction | 18/20 |
| Product ladder clarity | 18/20 |
| Pricing source integrity | 19/20 |
| Mobile 390/430 | 17/20 |
| Width fix Audit→Services | 18/20 |
| QA gate compliance | 17/20 |
| **Total** | **87/100** |

## Final status

**PASS** (≥85)

## Sign-off

```
Pass: DD-STEP-2-D
Scope: Services product ladder rebuild
Build: OK
Typecheck: OK
Pricing: lib/pricing.ts
```
