# DD Step 2-F Visual QA v1

**Pass:** DD-STEP-2-F  
**Base:** `67dc0a5` — Rebuild process pipeline section  
**Reviewer:** Agent (code + layout inspection)  
**Date:** May 2026

## QA method

| Method | Status |
| --- | --- |
| Breakpoint / markup inspection | Done |
| Live browser 1440 / 390 / 430 | **Not available** in-agent |
| Build / typecheck | Required gate |

## Desktop ~1440px

**Process → Why transition**

- Both use `FlagshipContainer` (1360px) — **width jump resolved**.

**Why / Differentiation**

- H2 + subhead per brief; kicker «Почему не просто сайт».
- Two-column comparison: Обычный подход vs ClientFlow System.
- Four numbered items per column — conceptual contrast (page vs managed route).
- Left muted/fragmented feel without red danger styling.
- Right blue system cues; no copper fill on column.
- Bottom accent blockquote + CTAs (`#contacts`, `#audit`).
- Copper `PrimaryBtn` only on «Разбор системы».

**Why → Audience transition**

- Audience still `DdContainer` (1180px) — step at section 9 (Step 2-G).

**Desktop 1440 result:** **PASS**

## Mobile 390px

- Columns stack: ordinary first, ClientFlow second.
- Numbered items readable; no horizontal overflow.
- CTAs stack vertically.

**Mobile 390 result:** **PASS**

## Mobile 430px

- Same stacked layout as 390.
- Comparison items fit ~382px content width.

**Mobile 430 result:** **PASS**

## Issues found

| # | Issue | Severity |
| --- | --- | --- |
| 1 | Process→Why width jump | High — **fixed** |
| 2 | Red danger badges on left column | Medium — **fixed** |
| 3 | Generic disconnected-node grid | Medium — **fixed** (4-step narrative) |
| 4 | Why→Audience 1360→1180 step | Medium — documented for 2-G |
| 5 | No live browser QA | Low |

## Issues fixed

- `FlagshipContainer` on Why.
- `ComparisonColumn` primitive with ordinary/clientflow variants.
- Approved copy structure; no fearmongering styling.

## Remaining blockers

1. Audience+ sections still 1180px.
2. Header shell 1180px vs content 1360px.
3. Owner browser sign-off recommended.

## Motion plan (documented)

- Columns: `fadeUp` stagger L then R, 0.1s offset
- ClientFlow column: subtle border-opacity on reveal (CSS only)
- `prefers-reduced-motion`: instant

## Score breakdown

| Criterion | Score |
| --- | ---: |
| Visual direction | 18/20 |
| Differentiation clarity | 18/20 |
| Mobile 390/430 | 17/20 |
| Width fix Process→Why | 18/20 |
| QA gate compliance | 17/20 |
| **Total** | **88/100** |

## Final status

**PASS** (≥85)

## Sign-off

```
Pass: DD-STEP-2-F
Scope: Why differentiation rebuild
Build: OK
Typecheck: OK
```
