# Factory Codex Operating Rules v1

## Purpose

These are hard operating rules for Codex in this repository. They exist to stop speculative design work, avoid unnecessary terminal churn, and keep implementation tied to a selected pattern and an explicit gate.

## Hard Rules

- No code before a pattern winner is selected.
- No implementation without an explicit allowed-files list.
- No random "make it beautiful" work.
- No 900-line hand-drawn CSS scenes.
- No fake dashboards unless real data exists.
- No generic SaaS purple, cyber, prompt-bar, or chip-cloud UI.
- No accepting work by text report only.
- No commit, push, or deploy without explicit approval.
- Minimize terminal work for Vitaly; do not create extra review loops when the answer is in the docs or code.
- Codex must run checks itself before reporting done.
- Visual QA decides PASS, PATCH, or REJECT.
- If the visual result is weak, prefer rollback or better context over endless patching.

## Scope Discipline

- Stay inside the requested layer.
- Do not touch backend/API/env/package/deploy unless the task explicitly allows it.
- Do not touch unrelated components just because they are nearby.
- Do not change copy, prices, form behavior, analytics, or legal behavior unless the task explicitly includes that work.
- Do not keep stacking overrides onto a broken composition.

## Pattern Discipline

- Use references first.
- Score pattern candidates before code.
- Select one winner only.
- Implement the winner as a translation, not a copy.
- Reject patterns that resemble generic SaaS, crypto, cyber, or dashboard UI.
- Treat fake metrics, fake charts, and fake product previews as disqualifying unless the product genuinely has that data.

## Visual QA Discipline

- Desktop and mobile QA are required.
- Hero below 8.5/10 is not final.
- Mobile below 8/10 is not final.
- Homepage below 8.5/10 is not market-ready.
- If the hero still reads as text-left/photo-card-right, it is not done.
- If the layout feels like a tower of boxes on mobile, it is not done.
- If typography feels rough or compressed, it is not done.

## Execution Discipline

- Prefer existing tokens, existing components, and scoped CSS.
- Keep changes small enough to reason about.
- Remove bad structure before adding new decoration.
- Use motion only if it clarifies the route or conversion path.
- Do not accept a report that claims success without the required checks.

## Required Checks

Implementation tasks must run:

```powershell
npm.cmd run build
npx.cmd tsc --noEmit
git diff --check
```

Documentation-only tasks must run:

```powershell
git diff --check
```

## Decision Rule

If a change creates visual drift, blocked conversion, broken mobile behavior, or scope creep, stop and either:

1. patch only the specific problem, or
2. rollback the visual layer and re-approach with better pattern context.

Do not keep layering fixes on top of a weak base.

