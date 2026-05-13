# Factory Stack v1

## Core Principle

Delaem Digital builds **Next.js ClientFlow systems**, not static design-only sites.

The factory output should be a working business system: positioning, page structure, proven references, selected component patterns, conversion UI, lead capture, AI/CRM/Telegram routing, analytics, deployment, and QA. The site can look premium, but the production model is not "draw a beautiful page by hand." It is:

```text
brief -> structure -> references -> pattern selection -> component implementation -> integrations -> preview QA -> Gate
```

Figma, Framer, and Photoshop are optional support tools. They are not the core factory.

## Stack Categories

| Category | Tools | Required | Free Now | Paid Later | Role |
| --- | --- | --- | --- | --- | --- |
| Intake | ChatGPT / Claude, client brief, discovery questions | Required | Yes | Optional paid AI plans | Capture niche, audience, offer, conversion goal, assets, constraints, integrations, and approval rules. |
| Strategy / Copy | ChatGPT / Claude, local positioning docs, offer frameworks | Required | Yes | Optional paid AI plans | Turn the brief into positioning, section narrative, CTA logic, proof needs, and conversion strategy. |
| Structure | Relume, ChatGPT / Claude, Codex docs | Required | Manual structure is free | Relume paid features optional | Produce sitemap, wireframe logic, page sections, section jobs, and content hierarchy before references or code. |
| References | LazyWeb, Refero Pro, local docs, web research | Required | LazyWeb works now; local docs free | Refero Pro after subscription | Find real website patterns and premium visual behaviors before selecting components. |
| Component Factory | shadcn MCP, 21st.dev Magic MCP, Magic UI, Aceternity, Tailark, Kibo | Required | shadcn MCP and magic21 work now; some libraries have free examples | Paid/pro libraries optional | Select primitives and component patterns that can implement the chosen reference behavior. |
| Frontend | Next.js, TypeScript, Tailwind, shadcn/ui, Motion | Required | Yes | No, unless paid UI libraries are chosen | Build maintainable responsive pages with scoped components, accessible UI, restrained motion, and real production structure. |
| Backend / AI Funnels | Next.js route handlers/server actions, Supabase, OpenAI / Anthropic / OpenRouter, Upstash | Required for ClientFlow systems | Frameworks/free tiers possible | AI/provider/database usage may be paid | Support lead forms, qualification, audit generation, AI routing, storage, rate limits, and future backend logic. |
| Integrations | Telegram Bot API, AmoCRM, n8n / Webhooks, Resend, Supabase | Required when project needs lead ops | Partly | CRM/email/automation/API usage may be paid | Move leads from website to business operations: Telegram, CRM, email, automation, and handoff flows. |
| Analytics | Yandex Metrika, PostHog, Vercel Analytics, Sentry | Required | Free tiers available | Paid tiers later | Track conversion events, errors, UTM attribution, funnel behavior, and production health. |
| Deploy | GitHub, Vercel, Cloudflare | Required | Free tiers available | Paid hosting/CDN/security later | Version, preview, deploy, protect domains, manage environments, and ship production sites. |
| QA Gate | Lighthouse, Playwright, Manual Gate, build/typecheck/diff checks | Required | Yes | Paid visual testing optional | Prevent layout, performance, accessibility, form, analytics, mobile, and integration regressions before commit/deploy. |

## Tool Roles

| Tool | Core / Optional | Current Cost Status | Factory Role |
| --- | --- | --- | --- |
| ChatGPT / Claude | Core | Free/paid options | Strategy, copy, structure, research synthesis, implementation planning. |
| Relume | Optional accelerator | Free/paid depending on usage | Sitemap and wireframe acceleration; can be replaced by manual structure docs. |
| Refero Pro | Core after subscription for premium references | Paid later | Curated visual references and premium pattern discovery. |
| LazyWeb | Core | Works now | Live website reference search across desktop/mobile patterns. |
| shadcn MCP | Core | Works now | Registry search and production primitive discovery. |
| 21st.dev Magic MCP | Core inspiration tool | Works now | Component inspiration, builder/refiner exploration, pattern scanning. |
| Magic UI | Optional component source | Free/pro mix | Motion and component inspiration when it matches the selected pattern. |
| Aceternity | Optional component source | Free/pro mix | Advanced visual components; use carefully to avoid overdone effects. |
| Tailark | Optional component source | Free/pro mix | Landing-page block inspiration and production shortcuts. |
| Kibo | Optional component source | Free/pro mix | Additional component patterns when shadcn primitives are not enough. |
| Next.js | Core | Free | Production app framework and backend route surface. |
| TypeScript | Core | Free | Type safety and maintainable implementation. |
| Tailwind | Core | Free | Utility styling tied to project tokens and scoped layouts. |
| shadcn/ui | Core | Free | Accessible primitives for forms, buttons, nav, dialogs, tabs, accordions, and layout helpers. |
| Motion | Optional but useful | Free/open-source depending on library | Route reveals, CTA shine, restrained transitions, and state movement. |
| Supabase | Optional/core for data-heavy funnels | Free/paid tiers | Lead storage, auth, database, edge logic if needed. |
| OpenAI / Anthropic / OpenRouter | Optional/core for AI funnels | Paid usage likely | AI qualification, audits, lead summaries, enrichment, and funnel intelligence. |
| Telegram Bot API | Core for Telegram handoff | Free | Lead notifications and operator workflow. |
| AmoCRM | Optional/core by client | Paid | CRM pipeline handoff. |
| n8n / Webhooks | Optional/core by integration scope | Free/self-hosted or paid | Automation layer between site, CRM, email, and internal tools. |
| Resend | Optional/core for email | Free/paid tiers | Transactional email and lead notifications. |
| Upstash | Optional | Free/paid tiers | Rate limiting, queues, lightweight state, Redis workflows. |
| Yandex Metrika | Core for Russian-market analytics | Free | Traffic and conversion analytics. |
| PostHog | Optional/core for product analytics | Free/paid tiers | Events, funnels, session analysis, feature flags if needed. |
| Vercel Analytics | Optional | Free/paid tiers | Deployment-native traffic and performance analytics. |
| Sentry | Optional/core for production systems | Free/paid tiers | Error monitoring and runtime diagnostics. |
| GitHub | Core | Free/paid tiers | Version control, review, issues, and deployment integration. |
| Vercel | Core | Free/paid tiers | Preview and production deployment for Next.js. |
| Cloudflare | Optional/core for domain/security | Free/paid tiers | DNS, CDN, security, redirects, and domain protection. |
| Lighthouse | Core QA | Free | Performance, accessibility, SEO, and best-practice checks. |
| Playwright | Core QA when UI changes are significant | Free | Desktop/mobile screenshots, interaction checks, visual regression support. |
| Manual Gate | Core | Free | Final human review against brand, conversion, mobile, and integration rules. |
| Figma | Optional | Free/paid tiers | Mockups and design approval when needed. |
| Framer | Optional | Free/paid tiers | Static marketing prototypes or simple sites without ClientFlow backend needs. |
| Photoshop | Optional | Paid | Asset cleanup, portrait treatments, and image preparation. |

## Refero Pro Role After Subscription

After Refero Pro/search discovery is available, Refero becomes the curated premium reference layer:

- search high-quality reference patterns by niche, section, mood, and conversion model;
- validate premium hero, pricing, form, diagnostic, founder, and productized-service patterns;
- extract behavior rather than copying brands: spacing, composition, surface hierarchy, CTA logic, motion restraint, and typography rhythm;
- cross-check LazyWeb results against a more curated visual set;
- support pattern selection before component implementation.

Refero Pro does not replace LazyWeb. LazyWeb remains the broad live-market reference search layer.

## Why Next.js Is Core

Next.js is core because Delaem Digital sites must behave like ClientFlow systems:

- lead capture and validation;
- AI qualification and audit funnels;
- Telegram/email/CRM routing;
- UTM and attribution handling;
- server-side API routes;
- secure environment variables;
- analytics and event tracking;
- future dashboards or portals when real data exists;
- SEO, metadata, redirects, preview deployments, and production deployment.

A static site builder can present content, but it cannot reliably own the full lead system without workarounds.

## Why Framer, Figma, And Photoshop Are Optional

Figma is optional because the factory can select patterns and implement directly in Next.js when the target is a working funnel. Use it for stakeholder approval, multi-page systems, or high-risk visual decisions.

Framer is optional because it is useful for prototypes and simple static pages, but it is not the default for AI funnels, backend logic, CRM handoff, analytics, and custom lead routing.

Photoshop is optional because asset polish can support the visual layer, but it is not a website factory. It should prepare assets, not define the system.

## Operating Rule

The factory should never start from "make it beautiful." It starts from business goal, structure, references, pattern winner, implementation scope, integrations, and QA.
