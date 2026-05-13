# Homepage Visual Upgrade Roadmap v1

## Purpose

This roadmap sequences remaining homepage design work after the hero rebuild. Each layer should use local docs, visual QA, design tokens, rejected-pattern memory, and a block-specific spec before implementation.

## 1. Hero Final Portrait Integration

- **Current estimated score:** 8/10
- **Visual goal:** Cinematic founder authority with final portrait asset integration.
- **Required source docs:** design bible, visual QA rubric, hero art-direction lock, portrait source lock, D3.2R-c hero review.
- **Likely files:** `components/sections/hero-section.tsx`, `app/globals.css`, future generated/exported `public/images/vitaly-hero-cinematic.webp` only if asset task approves it.
- **Forbidden regressions:** route-card grid, operator widget, dashboard UI, changed H1, CTA/analytics changes.
- **Acceptance criteria:** desktop hero >= 8.5/10, mobile >= 8/10, portrait feels integrated and premium.

## 2. Loss Map

- **Current estimated score:** 6.8/10
- **Visual goal:** controlled lead-loss route, not five equal dark cards.
- **Required source docs:** design bible, design tokens, rejected patterns, ClientFlow/Audit review.
- **Likely files:** `components/sections/loss-map-section.tsx`, `app/globals.css`.
- **Forbidden regressions:** fear-heavy red styling, card spam, fake metrics, unrelated copy changes.
- **Acceptance criteria:** loss route feels like architectural diagnosis and transitions naturally after hero.

## 3. ClientFlow System

- **Current estimated score:** 6.8/10
- **Visual goal:** controlled ClientFlow architecture with grouped stages and steel-blue route logic.
- **Required source docs:** ClientFlow/Audit review, ClientFlow/Audit block spec, design tokens, rejected patterns.
- **Likely files:** `components/sections/clientflow-system-section.tsx`, `app/globals.css`, possibly `lib/homepage-content.ts`.
- **Forbidden regressions:** eight equal route-card clutter, fake dashboard, excessive metrics, CTA analytics changes.
- **Acceptance criteria:** system section >= 8/10, route is meaningful and premium, mobile not a card tower.

## 4. Audit

- **Current estimated score:** 6.8/10
- **Visual goal:** premium diagnostic artifact, compact and meaningful.
- **Required source docs:** ClientFlow/Audit review, ClientFlow/Audit block spec, design tokens.
- **Likely files:** `components/sections/audit-section.tsx`, `app/globals.css`.
- **Forbidden regressions:** fake dashboard, chart decoration, too many equal diagnostic boxes, CTA changes.
- **Acceptance criteria:** audit section >= 8/10, diagnostic surfaces are clear, compact, and actionable.

## 5. Products / Pricing

- **Current estimated score:** 7/10
- **Visual goal:** high-ticket offer clarity with copper as decisive action.
- **Required source docs:** design bible, visual QA rubric, design tokens, rejected patterns.
- **Likely files:** `components/sections/pricing-section.tsx`, `app/globals.css`, `lib/pricing.ts` only if structure/copy is approved.
- **Forbidden regressions:** bargain-market tone, card spam, unclear recommended path, pricing CTA behavior changes.
- **Acceptance criteria:** pricing hierarchy is immediately readable and mobile comparison remains clean.

## 6. Final CTA / Form Visual Polish

- **Current estimated score:** 7/10
- **Visual goal:** serious intake console with premium calm and preserved lead behavior.
- **Required source docs:** design bible, design tokens, legal/cookie alignment docs if copy appears, visual QA rubric.
- **Likely files:** `components/sections/final-cta-section.tsx`, `app/globals.css`.
- **Forbidden regressions:** contact form logic changes, UTM/lead flow changes, consent link changes, backend edits.
- **Acceptance criteria:** form is comfortable, premium, readable, and fully behavior-preserving.

## 7. Mobile Premium Pass

- **Current estimated score:** 7/10
- **Visual goal:** compressed but premium homepage without endless dark-card stacks.
- **Required source docs:** visual QA rubric, design tokens, rejected patterns, all completed block specs.
- **Likely files:** `app/globals.css`, section components only if markup compression is necessary.
- **Forbidden regressions:** horizontal overflow, clipped Russian text, hidden CTA, broken form usability.
- **Acceptance criteria:** mobile hero >= 8/10 and all major sections preserve hierarchy and scanning.

## 8. Global Visual QA Gate

- **Current estimated score:** pending after implementation layers.
- **Visual goal:** launch-quality visual coherence.
- **Required source docs:** design gate checklist, visual QA rubric, block reviews.
- **Likely files:** docs only unless QA uncovers implementation bugs.
- **Forbidden regressions:** backend/form/analytics changes during visual QA.
- **Acceptance criteria:** screenshots/videos reviewed, build/typecheck/diff-check pass, preview QA complete before commit.
