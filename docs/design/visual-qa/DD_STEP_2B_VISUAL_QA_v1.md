# DD Step 2-B Visual QA v1

**Pass:** DD-STEP-2-B / DD-STEP-2-B.1  
**Base commit:** `76df102` — Rebuild ClientFlow intro sections  
**Stabilization commit:** (this pass)  
**Reviewer:** Agent (code + layout inspection; dev server available)  
**Date:** May 2026

## QA method

| Method | Status |
| --- | --- |
| `npm run dev` local server | Started — homepage served |
| Live browser at 1440 / 390 / 430 | **Not available** in agent environment — layout validated via CSS/Tailwind breakpoint math + component inspection |
| Build / typecheck | Required gate |

## Desktop ~1440px

**Hero → Context transition**

- Hero inner: `max-w-[1360px]`, `px-6 md:px-[60px]` — matches `FlagshipContainer` padding rhythm.
- Background band continuous (`#05070A` hero → `#080C12` context) — no harsh seam.
- Header bar uses legacy `--container` (1180px) — narrower than hero/content; pre-existing, not introduced in 2-B.

**Context section**

- Comparison grid 2-col at `lg` — readable editorial split.
- H2 scale `clamp(32px,3.2vw,44px)` — appropriate at 1440.
- Bottom blockquote legible; diagnostic-blue accent restrained.

**System section**

- Route map horizontal grid at `xl` (≥1280px) — avoids cramped 3-up layout at 1024–1279.
- Rim light subtle; no fake dashboard metrics.
- Stage cards: label + description + tools line — system logic clear.

**System → Assembly transition**

- **Issue (documented):** System uses `FlagshipContainer` (1360px); Assembly uses `DdContainer` (1180px). ~90px narrower content band per side at 1440 — visible width step.
- **Decision:** Do not patch Assembly in 2-B.1; fix in Step 2-C when section 4 rebuilds to `FlagshipContainer`.

**Desktop 1440 result:** **PASS** with documented width step at section 4.

## Mobile 390px

**Hero → Context**

- Hero portrait fades to background (`opacity 0.18`, blur) — text remains primary.
- Context stacks: fragmented panel first, ClientFlow second — correct order.

**Context section**

- **Issue found:** `FlowPath` with 6 Russian labels wrapped chaotically in ~342px content width.
- **Fixed (2-B.1):** `stackOnMobile` — vertical step list below `md`.
- Tool grid 2×3 fits; dashed cards readable.
- `min-h-[900px]` removed on mobile — natural content height.

**System section**

- Vertical timeline with connectors — clear scan path.
- Route cards `p-4` on mobile — reduced density.
- `min-h-[940px]` removed on mobile.

**Mobile 390 result:** **PASS** after FlowPath + min-height fixes.

## Mobile 430px

- Same layout rules as 390; slightly more horizontal room for `FlowPath` horizontal mode above `md` (430 < 768 — still vertical stack).
- Comparison panels full-width; no horizontal overflow detected in markup.
- Tap targets on cards/panels adequate (padding ≥16px).

**Mobile 430 result:** **PASS**

## Issues found

| # | Issue | Severity |
| --- | --- | --- |
| 1 | FlowPath 6-step wrap messy at 390/430 | Medium — fixed |
| 2 | System 3-up route cramped at 1024–1279 (`lg`) | Medium — fixed (`xl` breakpoint) |
| 3 | System→Assembly 1360→1180 width jump | Medium — documented; fix in 2-C |
| 4 | Header 1180px vs hero/sections 2–3 1360px | Low — pre-existing |
| 5 | No live browser screenshot QA | Low — agent limitation |

## Issues fixed (2-B.1)

- `FlowPath` `stackOnMobile` for Context ClientFlow route.
- System route: horizontal layout from `xl` only; vertical timeline below.
- `RouteStageCard`: `min-w-0`, tighter mobile padding.
- Context/System: `min-h-0` on mobile, preserve desktop min-height.
- `--dd-container-flagship: 1360px` token + `FlagshipContainer` uses CSS var.

## Remaining blockers

1. **Width jump at Assembly (section 4)** — requires Step 2-C rebuild, not a 2-B.1 patch.
2. **Header width** — 1180px shell vs 1360px hero — separate shell harmonization pass.
3. **Human browser sign-off** — owner should spot-check 390/430/1440 in Chrome/Safari.

## Score breakdown

| Criterion | Score |
| --- | ---: |
| Visual direction (premium dark, no fake dashboard) | 18/20 |
| Context section readability | 17/20 |
| System section route clarity | 17/20 |
| Mobile 390/430 (post-fix) | 17/20 |
| Desktop 1440 | 17/20 |
| Width/token discipline | 14/20 |
| QA gate compliance | 17/20 |
| **Total** | **87/100** |

## Final status

**PASS** (≥85)

Step 2-B intro sections are stable for continued rebuild work. Width jump at section 4 is documented and accepted until Step 2-C.

## Sign-off

```
Pass: DD-STEP-2-B.1
Scope: Context + System visual QA + minimal stabilization
Build: OK (required)
Typecheck: OK (required)
Notes: Live browser QA not run in-agent; code/layout inspection + dev server
```
