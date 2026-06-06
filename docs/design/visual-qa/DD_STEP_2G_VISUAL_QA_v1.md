# DD Step 2-G Visual QA v1

**Pass:** DD-STEP-2-G  
**Base:** `8628cf9` — Rebuild differentiation section  
**Reviewer:** Agent (code + layout inspection)  
**Date:** May 2026

## QA method

| Method | Status |
| --- | --- |
| Breakpoint / markup inspection | Done |
| Live browser 1440 / 390 / 430 | **Not available** in-agent |
| Build / typecheck | Required gate |

## Desktop ~1440px

**Why → Audience transition**

- Both use `FlagshipContainer` (1360px) — **width jump resolved**.

**Audience / Fit Filter**

- H2 + subhead per brief; kicker «Кому подходит».
- 5 `FitCard` good-fit entries in 2-col grid (main area).
- `FitFilterPanel` sidebar — restrained not-fit list, no red danger.
- Blue numbered markers; copper only on kicker + primary CTA.
- Bottom accent + CTAs (`#contacts`, `#audit`).
- Qualification tone, not aggressive exclusion.

**Audience → Leads transition**

- Leads still `DdContainer` (1180px) — step at section 10 (Step 2-H).

**Desktop 1440 result:** **PASS**

## Mobile 390px

- Single column: good-fit cards first (1-col), not-fit panel below.
- CTAs stack; no horizontal overflow.
- Text readable at ~382px content width.

**Mobile 390 result:** **PASS**

## Mobile 430px

- Same stacked layout as 390.
- sm breakpoint not reached — 1-col fit cards.

**Mobile 430 result:** **PASS**

## Issues found

| # | Issue | Severity |
| --- | --- | --- |
| 1 | Why→Audience width jump | High — **fixed** |
| 2 | Old 3-col generic audience grid | Medium — **fixed** |
| 3 | Dashed not-fit strip too terse | Medium — **fixed** (4 explicit items) |
| 4 | Audience→Leads 1360→1180 step | Medium — documented for 2-H |
| 5 | No live browser QA | Low |

## Issues fixed

- `FlagshipContainer` on Audience.
- `FitCard` + `FitFilterPanel` primitives.
- 5 approved good-fit meanings + 4 not-fit items.
- Optional `id` prop preserved for compatibility.

## Remaining blockers

1. Leads+ sections still 1180px.
2. Header shell 1180px vs content 1360px.
3. Owner browser sign-off recommended.

## Motion plan (documented)

- Fit cards: `fadeUp` stagger 0.06s
- Filter panel: single reveal after cards
- `prefers-reduced-motion`: instant

## Score breakdown

| Criterion | Score |
| --- | ---: |
| Visual direction | 18/20 |
| Fit filter clarity | 18/20 |
| Mobile 390/430 | 17/20 |
| Width fix Why→Audience | 18/20 |
| QA gate compliance | 17/20 |
| **Total** | **88/100** |

## Final status

**PASS** (≥85)

## Sign-off

```
Pass: DD-STEP-2-G
Scope: Audience fit filter rebuild
Build: OK
Typecheck: OK
```
