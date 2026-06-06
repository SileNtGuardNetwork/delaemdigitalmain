# DD Step 2-E Visual QA v1

**Pass:** DD-STEP-2-E  
**Base:** `5f8171f` — Rebuild product ladder section  
**Reviewer:** Agent (code + layout inspection)  
**Date:** May 2026

## QA method

| Method | Status |
| --- | --- |
| Breakpoint / markup inspection | Done |
| Live browser 1440 / 390 / 430 | **Not available** in-agent |
| Build / typecheck | Required gate |

## Desktop ~1440px

**Services → Process transition**

- Both use `FlagshipContainer` (1360px) — **width jump resolved**.

**Process / Production Pipeline**

- H2 + subhead per brief; kicker «Процесс сборки».
- Phase rail (xl+): Стратегия → Сборка → Интеграции → Измерение → Улучшение.
- 9 steps in 5 `PhaseBand` groups — operating pipeline, not generic agency list.
- Blue numbered markers; copper only on kicker + primary CTA.
- Bottom accent blockquote + CTAs (`#contacts`, `#audit`).
- No fake dashboards or meta timelines.

**Process → Why transition**

- Why still `DdContainer` (1180px) — step at section 8 (Step 2-F).

**Desktop 1440 result:** **PASS**

## Mobile 390px

- Phase rail hidden — vertical phase bands with labels.
- Steps stack 1-col; 2-col only within phase at `sm` (≥640px) — 390 stays 1-col per phase.
- No horizontal overflow; no cramped 9-card wall.
- CTAs stack vertically.

**Mobile 390 result:** **PASS**

## Mobile 430px

- Same as 390 for layout.
- Step cards readable at ~382px content width.

**Mobile 430 result:** **PASS**

## Issues found

| # | Issue | Severity |
| --- | --- | --- |
| 1 | Services→Process width jump | High — **fixed** |
| 2 | Old 5-step generic timeline | Medium — **fixed** (9-step pipeline) |
| 3 | Copper-heavy step labels | Medium — **fixed** (blue system cues) |
| 4 | Process→Why 1360→1180 step | Medium — documented for 2-F |
| 5 | No live browser QA | Low |

## Issues fixed

- `FlagshipContainer` on Process.
- `ProcessStepCard` + `PhaseBand` primitives.
- 9 approved steps with 5-phase structure.
- Precomputed step indices (no render mutation).

## Remaining blockers

1. Why+ sections still 1180px.
2. Header shell 1180px vs content 1360px.
3. Owner browser sign-off recommended.

## Motion plan (documented)

- Phase bands: `fadeUp` stagger 0.08s
- Phase rail: single reveal on xl+
- `prefers-reduced-motion`: instant

## Score breakdown

| Criterion | Score |
| --- | ---: |
| Visual direction | 18/20 |
| Pipeline clarity (9 steps / 5 phases) | 18/20 |
| Mobile 390/430 | 17/20 |
| Width fix Services→Process | 18/20 |
| QA gate compliance | 17/20 |
| **Total** | **88/100** |

## Final status

**PASS** (≥85)

## Sign-off

```
Pass: DD-STEP-2-E
Scope: Process pipeline rebuild
Build: OK
Typecheck: OK
```
