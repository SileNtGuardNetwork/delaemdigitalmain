# Technical Spec

## Runtime stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Zod
- Supabase PostgreSQL
- Supabase Storage
- Telegram Bot API
- PostHog
- Yandex Metrica
- Webhooks for CRM
- OpenRouter / Gemini / OpenAI for AI interpretation
- Vercel for hosting and previews

## Main routes

- /quiz/[slug] - public quiz runtime
- /quiz/[slug]/result/[submissionId] - optional result page
- /api/quiz/[slug]/submit - submission endpoint
- /api/quiz/[slug]/event - analytics event endpoint
- /api/quiz/[slug]/webhook/retry - internal retry endpoint later

## Core modules

- lib/clientflow-quiz/config
- lib/clientflow-quiz/flow
- lib/clientflow-quiz/scoring
- lib/clientflow-quiz/segmentation
- lib/clientflow-quiz/offer-routing
- lib/clientflow-quiz/ai
- lib/clientflow-quiz/notifications
- lib/clientflow-quiz/integrations
- lib/clientflow-quiz/analytics
- lib/clientflow-quiz/consent
- lib/clientflow-quiz/anti-garbage
- components/clientflow-quiz

## Submission flow

1. Load quiz config by slug.
2. Render start screen.
3. Track quiz_started.
4. Collect answers.
5. Apply branching.
6. Show contact gate.
7. Validate contact and consent.
8. Submit to API.
9. Server validates config, answers, contact and consent.
10. Anti-spam checks run.
11. Score and segment are calculated.
12. Offer route is selected.
13. AI result is generated or fallback is used.
14. Submission is stored.
15. Telegram lead card is sent.
16. CRM/webhook payload is sent.
17. Analytics events are written.
18. User sees result dashboard and CTA.

## Quality rules

Rules-first. AI-second. Every AI output must have deterministic fallback.

No raw secrets in logs. No raw private answers in public telemetry. No hidden destructive operations.

## Performance rules

- Mobile-first.
- No heavy runtime builder.
- Config loaded server-side or statically where possible.
- Client bundle must remain lean.
- Animations must not block interaction.
- Result generation must tolerate AI timeout.

## V1 implementation order

1. Database migration.
2. Config schema and types.
3. Static config for Delaem Digital quiz.
4. Public runtime UI.
5. Submit endpoint.
6. Scoring and offer routing.
7. Telegram lead card.
8. Analytics events.
9. Consent and cookies.
10. QA and preview.
11. Add Zapadny Metr config.
12. Add Simbioz config.
