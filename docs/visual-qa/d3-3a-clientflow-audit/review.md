# D3.3a ClientFlow / Audit Visual QA Review

## Scope

Reviewed local source for the homepage ClientFlow and Audit visual system.

Files inspected:

- `app/page.tsx`
- `components/sections/loss-map-section.tsx`
- `components/sections/clientflow-system-section.tsx`
- `components/sections/audit-section.tsx`
- `components/sections/homepage-structure-sections.tsx`
- `lib/homepage-content.ts`
- `app/globals.css`
- `docs/delaem-digital-design-bible-v1.md`
- `docs/delaem-digital-visual-qa-rubric-v1.md`
- `docs/delaem-digital-design-tokens-v1.md`
- `docs/rejected-visual-patterns-v1.md`
- `docs/codex-visual-implementation-template-v1.md`

## Current Section Score

**6.8/10**

The sections are structurally relevant and already use route/system language, but they still rely on repeated dark cards and dense stage grids. They do not yet feel like a premium ClientFlow architecture following the rebuilt cinematic hero.

## What Currently Works

- The content model is strong: loss map -> ClientFlow System -> assembly -> audit.
- ClientFlow System already names the real route: input, offer, site/quiz, traffic, qualification, CRM/Telegram, follow-up, analytics.
- Audit section has useful diagnostic concepts: route, signals, priority, format.
- CTAs are clear and already wired with analytics.
- Existing D1 CSS has moved away from fully generic cards toward line-based route structures.
- Mobile CSS already tries to collapse routes vertically and avoid horizontal overflow.

## What Feels Generic / Weak

- The ClientFlow System still reads as a core card plus an 8-step row/grid, which can feel like a system diagram made of boxes rather than controlled architecture.
- The Audit panel is closer to a compact dashboard card than a premium diagnostic artifact.
- Copper is visually prominent in places where cool blue/steel system signals would better match the new hero.
- The route stages have many equal-weight cells, which weakens hierarchy.
- The sections do not yet inherit enough cinematic blue depth from the hero.
- The transition from hero to loss map/system is functional but not yet a designed continuation of one ClientFlow world.

## Card Spam / Dark-Box Repetition

Risk areas:

- `loss-grid` creates five route cards immediately after hero.
- `d1-architecture-route` creates eight stage cards in the ClientFlow System.
- `assembly-grid` creates seven more module cards after the system section.
- `audit-status-grid`, `audit-route`, and four `audit-step` rows stack several diagnostic objects inside one panel.

The problem is not the content count itself; it is the repeated visual treatment. Too many dark boxes make each signal feel equally important.

## Connection After New Hero

The new hero direction is cinematic, founder-led, and atmospheric. The ClientFlow/Audit area should continue that language by using:

- broad dark graphite/obsidian section depth;
- steel-blue architectural route lines;
- fewer premium surfaces;
- compact diagnostic surfaces;
- copper only for decisive CTA/action;
- real route logic, not card-grid decoration.

The transition should feel like moving from founder control room into the system blueprint, not from hero into a generic list of feature cards.

## Must Not Change

- Lead flow and contact form behavior.
- API, Supabase, Telegram/email, env, package files, deployment config.
- CTA hrefs and analytics attributes.
- Section IDs: `#system`, `#audit`, `#contacts`.
- Core meaning of ClientFlow: traffic/source, offer, site/quiz, qualification, handoff, storage/analytics readiness.
- Legal pages, pricing, quiz runtime, and unrelated homepage sections unless separately approved.

## Exact Visual Problems

1. ClientFlow architecture uses eight equal stages, making the route feel dense rather than premium.
2. The system core card is visually heavy and competes with the route instead of anchoring it.
3. The loss map, system route, and assembly modules repeat similar dark-card thinking.
4. Audit diagnostic panel has useful content but reads like a small dashboard surface.
5. Cool blue system intelligence is underused relative to copper.
6. Mobile collapse reduces overflow but can become a long vertical list of boxes.
7. The sections need stronger visual hierarchy: primary route, secondary details, and CTA.

## Acceptance Criteria For Future Implementation

- ClientFlow System feels like controlled architecture, not a card grid.
- Audit feels like a premium diagnostic artifact, not fake dashboard UI.
- Cool blue / steel system signals are visible and meaningful.
- Copper is reserved for decisive actions.
- Repeated dark boxes are reduced or visually differentiated.
- Mobile does not become an endless stack of cards.
- CTAs remain clear and behaviorally unchanged.
- No backend, lead flow, form, analytics, env, package, or deploy changes.
- Build, typecheck, and `git diff --check` pass during implementation.
