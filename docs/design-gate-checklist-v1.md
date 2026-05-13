# Design Gate Checklist v1

Use this checklist before committing any visual implementation layer.

## Required Visual Checks

- Desktop hero screenshot checked.
- Mobile hero screenshot checked.
- Section transition after hero checked.
- ClientFlow/System/Audit transition checked when relevant.
- Typography checked for hierarchy, line-height, and Russian readability.
- CTA visibility and hierarchy checked.
- Card spam checked.
- Color/token discipline checked against `docs/delaem-digital-design-tokens-v1.md`.
- No fake dashboard or fake metrics introduced.
- Mobile endless stack risk checked.
- Portrait/asset quality checked when portrait appears.
- Cookie banner interference checked on mobile.
- Performance sanity checked for excessive images/effects.

## Behavior Preservation

- Lead flow preserved.
- Form behavior preserved.
- CTA hrefs preserved.
- Analytics attributes preserved.
- Legal links preserved.
- No API/backend/Supabase/env/package/deploy edits unless explicitly approved.

## Anti-Pattern Check

Confirm none of these were introduced:

- route-card grid under hero CTA;
- operator panel over portrait;
- fake command center widgets;
- dashboard-like decorative metrics;
- too many equal-weight dark cards;
- violet primary;
- neon lime;
- crypto/cyber effects;
- mobile route/card tower.

## Before Commit

- Preview QA is required before commit.
- `docs/visual-qa/[layer]/review.md` should exist or be updated.
- `npm.cmd run build` passes.
- `npx.cmd tsc --noEmit` passes.
- `git diff --check` passes.
- Final response lists files changed, validation results, and known visual risks.
