# Implementation Roadmap

## Phase 0 — Documentation lock

Status: completed in this docs package.

## Phase 1 — Foundation

- Add database migration
- Add TypeScript types
- Add config schema
- Add base quiz route
- Add base UI shell
- Add basic analytics event helper

## Phase 2 — First production quiz

- Build Delaem Digital quiz config
- Build scoring model
- Build offer routing model
- Build result dashboard
- Build submit endpoint
- Build Telegram lead card
- Build Vercel preview

## Phase 3 — Intelligence layer

- Add AI interpretation helper
- Add deterministic fallback result
- Add sales brief generator
- Add reward and lead magnet logic
- Add anti-garbage checks

## Phase 4 — Analytics and reporting

- Add PostHog events
- Add Yandex Metrica hooks
- Add Supabase event audit
- Add first reporting query set
- Add drop-off and source quality metrics

## Phase 5 — Two additional case studies

- Add Zapadny Metr quiz config
- Add Zapadny Metr design pack
- Add Simbioz quiz config
- Add Simbioz design pack
- Validate universal engine flexibility

## Phase 6 — Commercial packaging

- Add landing block for AI quiz product
- Add internal sales materials
- Add delivery checklist
- Add pricing packages

## Build checks

Each implementation layer must pass:

- npm run build
- npm run typecheck
- lint if available
- mobile QA
- preview QA
- no secrets in code
- no destructive SQL

## Deployment rule

Preview first. Production only after manual QA.
