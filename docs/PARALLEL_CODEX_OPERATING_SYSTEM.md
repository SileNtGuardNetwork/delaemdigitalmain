# Parallel Codex Operating System

## Purpose

This repo is one of two active Codex lanes.

Active lanes:

1. `SileNtGuardNetwork/architect-web3-bot` — Web3 educational Telegram MVP.
2. `SileNtGuardNetwork/delaemdigitalmain` — ClientFlow AI-system landing / lead infrastructure.

## Hard rule

One Codex thread = one repository = one task = one branch.

Never mix product contexts inside one Codex thread.

## Lane B — Delaem Digital

Repository: `SileNtGuardNetwork/delaemdigitalmain`

Current objective: continue production site infrastructure without disturbing approved visual/product layers.

Confirmed state:

- v0.3.0 Real Lead Submit Foundation works on preview.
- v0.3.1 Telegram / Email Notification Foundation works without env and logs safe skipped/missing delivery state.
- Next practical layer should not rewrite the site.

Recommended next layer:

`v0.3.2 Lead Storage / CRM Foundation`

Scope:

- add persistence for accepted leads;
- keep current form UX;
- keep Telegram/email notifications non-blocking;
- create safe repository/service layer;
- no visual redesign;
- no pricing/copy changes;
- no real CRM integration yet unless separately approved.

Forbidden without separate approval:

- hero offer changes
- portrait replacement
- pricing changes
- section order changes
- legal page rewrites
- destructive data operations
- secrets in code
- replacing the form UX
- adding heavy dependencies without reason

## Lane A — Architect Web3

Repository: `SileNtGuardNetwork/architect-web3-bot`

Current objective: build v0.1 Telegram educational MVP foundation.

Main prompt in that repo:

```text
docs/CODEX_PROMPT_BOT_MVP_FOUNDATION.md
```

## Working rhythm

1. Start one Codex task per repo.
2. Codex audits repo first.
3. Codex creates/uses a clean feature branch.
4. Codex implements only the approved layer.
5. Codex runs checks.
6. User sends summary/diff/checks to ChatGPT for gate review.
7. Only after gate PASS: commit/push/PR/merge.

## Gate format

Each Codex result must report:

- branch
- changed files
- what was implemented
- what was intentionally not implemented
- checks passed
- checks failed
- risks / open questions
- next recommended layer
