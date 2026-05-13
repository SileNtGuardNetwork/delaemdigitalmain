# Factory Workflow v1

## Purpose

This document locks the Delaem Digital production workflow. The factory exists to stop random design attempts and replace them with a repeatable Next.js-first process for ClientFlow websites.

## End-To-End Workflow

```text
brief -> Relume sitemap/wireframe -> Refero/LazyWeb pattern search -> MCP/component pattern selection -> Next.js/Codex implementation -> AI/CRM/Telegram integrations -> preview QA -> Gate -> commit/deploy
```

| Stage | Action | Primary Tools | Output Artifact | Gate |
| --- | --- | --- | --- | --- |
| 1. Brief | Capture business, audience, offer, assets, constraints, conversion goal, and integration needs. | ChatGPT / Claude, client intake | Brief notes | The business goal and primary CTA are clear. |
| 2. Relume Sitemap / Wireframe | Build page structure before visuals: sitemap, section order, section jobs, content blocks. | Relume, ChatGPT / Claude, Codex fallback | Sitemap/wireframe outline | Structure is approved before reference search narrows. |
| 3. Refero / LazyWeb Pattern Search | Find real references for niche, hero, sections, pricing, forms, motion, and mobile behavior. | LazyWeb, Refero Pro when available, local docs | Reference shortlist | References include what to take and what not to copy. |
| 4. MCP / Component Pattern Selection | Match reference behavior to implementable component patterns and primitives. | shadcn MCP, 21st.dev Magic MCP, Magic UI, Aceternity, Tailark, Kibo | Ranked candidate table and winner | One pattern winner is selected before code. |
| 5. Next.js / Codex Implementation | Implement the selected pattern in scoped files only. | Codex, Next.js, TypeScript, Tailwind, shadcn/ui, Motion | Scoped code diff | Allowed files are explicit and respected. |
| 6. AI / CRM / Telegram Integrations | Connect ClientFlow behavior: forms, AI qualification, Telegram, CRM, email, webhooks, analytics events. | Supabase, OpenAI / Anthropic / OpenRouter, Telegram Bot API, AmoCRM, n8n / Webhooks, Resend, Upstash | Tested integration flow | Lead data reaches the right destination with tracking intact. |
| 7. Preview QA | Run build/type checks, responsive preview, screenshots, interaction checks, analytics/form review. | Lighthouse, Playwright, Manual Gate, project commands | QA report | No visible, runtime, mobile, or lead-flow regressions. |
| 8. Gate | Review against brand, conversion, rejected patterns, mobile, accessibility, performance, and scope. | Local docs, Manual Gate | Pass/fail decision | Pass is required before commit/deploy. |
| 9. Commit / Deploy | Commit, push, and deploy only when explicitly approved. | GitHub, Vercel, Cloudflare | Commit/deploy record | No commit/push/deploy without approval. |

## Hard Rules

- No random design.
- No "make it beautiful" prompts.
- No hand-drawn 900-line CSS scenes.
- No fake dashboards unless real product data exists.
- No implementation before a pattern winner is selected.
- No implementation without explicit allowed files.
- No commit, push, or deploy without explicit approval.
- No backend/API/env/package/deploy edits unless the task explicitly allows them.
- No broad rewrites when a layer asks for scoped implementation.
- No component-library output accepted without reference validation.

## Output Artifacts Per Stage

| Stage | Required Artifact |
| --- | --- |
| Brief | Business brief, audience, offer, assets, constraints, integrations, approval rules |
| Relume Sitemap / Wireframe | Sitemap, page order, section list, section job, rough content blocks |
| Refero / LazyWeb Pattern Search | Reference table with source/tool, screenshot/page URL if available, what to take, what to reject |
| MCP / Component Pattern Selection | Ranked pattern candidates, scores, implementation notes, recommended winner |
| Next.js / Codex Implementation | Exact allowed files, scoped diff, preserved behavior notes |
| AI / CRM / Telegram Integrations | Lead route map, provider list, environment needs, tested success/error behavior |
| Preview QA | Build/typecheck/diff-check result, responsive screenshots or notes, form/analytics checks |
| Gate | Pass/fail decision, risks, blocked items, approval status |
| Commit / Deploy | Commit hash, preview URL, production URL only when approved |

## Workflow Details

### Brief

The brief defines the business outcome. It must answer:

- What is being sold?
- Who is the buyer?
- What action should the visitor take?
- What proof is available?
- What assets exist?
- What integrations are required?
- What files and systems are off-limits?

### Relume Sitemap / Wireframe

Relume is an accelerator, not a final design authority. If Relume is unavailable, Codex should create the same structural artifact manually.

The structure must define section purpose before visual style:

- hero;
- problem or opportunity;
- method/system;
- proof;
- offer/pricing;
- FAQ;
- final CTA/form;
- legal/footer.

### Refero / LazyWeb Pattern Search

Search references before components. LazyWeb provides live website patterns. Refero Pro provides curated premium references after subscription. Local docs fill gaps when tools are unavailable.

Every reference must be tagged with:

- why it is useful;
- what not to copy;
- whether it supports structure, visual mood, motion, conversion, or mobile compression.

### MCP / Component Pattern Selection

Use shadcn MCP for production primitives and 21st.dev Magic MCP for inspiration. Magic UI, Aceternity, Tailark, and Kibo can be checked when they support the chosen pattern.

The output is a ranked candidate table, not code. Implementation starts only after one winner is selected.

### Next.js / Codex Implementation

Codex implementation must follow an explicit file scope. It should use existing tokens, shadcn/ui primitives, TypeScript, Tailwind, and restrained Motion where useful.

The implementation should preserve lead flow, analytics, backend behavior, legal pages, and environment configuration unless the task explicitly includes those systems.

### AI / CRM / Telegram Integrations

Integrations turn a website into a ClientFlow system. Depending on the project, this stage can include:

- lead forms;
- AI qualification;
- audit generation;
- Telegram notification;
- AmoCRM handoff;
- email via Resend;
- n8n/Webhook routing;
- Supabase storage;
- Upstash rate limiting or queues;
- analytics events.

### Preview QA

QA must check more than compilation:

- desktop layout;
- mobile compression;
- text fit;
- CTA visibility;
- form states;
- event tracking;
- lead delivery;
- performance;
- accessibility;
- no rejected patterns.

Documentation-only tasks run:

```powershell
git diff --check
```

Implementation tasks normally run:

```powershell
npm.cmd run build
npx.cmd tsc --noEmit
git diff --check
```

## Personal Site As First Factory Case

The Delaem Digital personal site is the first factory case. Its role is to prove the process on the founder's own ClientFlow system before applying it to client websites.

Current factory case direction:

- positioning: "Собираю бизнесу управляемую систему привлечения клиентов";
- model: founder-led ClientFlow System;
- stack: Next.js-first, integration-ready, analytics-ready;
- references: LazyWeb, local Refero-derived docs, design bible, hero art-direction lock;
- pattern selection: Founder-Led Editorial Control Room for the hero;
- implementation rule: no hand-drawn office scene, no dashboard widgets, no prompt bar, no chip cloud, no huge custom CSS illustration.

Future sections of the personal site should each go through the same factory sequence before implementation.
