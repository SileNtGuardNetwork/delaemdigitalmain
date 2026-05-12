# ClientFlow / Audit Block Spec v1

## Purpose

This spec defines the future visual direction for upgrading the ClientFlow System and Audit sections. It should be used with:

- `docs/delaem-digital-design-bible-v1.md`
- `docs/delaem-digital-visual-qa-rubric-v1.md`
- `docs/delaem-digital-design-tokens-v1.md`
- `docs/rejected-visual-patterns-v1.md`
- `docs/visual-qa/d3-3a-clientflow-audit/review.md`

## Visual Thesis

The ClientFlow/Audit area should feel like a controlled system blueprint and diagnostic artifact. It should not feel like generic dark cards, fake SaaS dashboard UI, or a dense route-card grid.

The user should understand:

- where leads are lost;
- how ClientFlow connects the route;
- what audit checks;
- what action to take next.

## Desktop Layout Direction

### ClientFlow System

- Keep a strong architectural route, but reduce equal-weight stage clutter.
- Prefer grouped route zones over eight visually equal mini-cards.
- Let the main route feel horizontal, precise, and controlled.
- Use one premium anchor surface for the system core, but avoid a heavy card competing with the route.
- Use cool blue / steel route lines for system intelligence.
- Use copper only for the action button or one decisive emphasis.

Possible grouping:

- Source / traffic;
- Landing / offer;
- Lead / qualification;
- Handoff / follow-up / analytics.

### Audit Section

- Should feel like a diagnostic report or readiness artifact.
- Keep compact status rows and route states meaningful.
- Make the outcome clear: site, traffic, or full system.
- Avoid making the diagnostic side look like a fake dashboard.
- Use a smaller number of stronger diagnostic groups.

### Transition From Hero

- Loss map and ClientFlow should inherit the hero's cool blue atmosphere.
- Section boundary should feel intentional and architectural.
- Avoid abruptly switching from cinematic hero to plain card grid.

## Mobile Layout Direction

- Avoid endless card stacks.
- Collapse routes into compact grouped stages.
- Prefer line/rail + short text over repeated boxed cards.
- Keep CTA visible and comfortable.
- Audit diagnostic content should use priority order: headline, outcome, CTA, compact diagnostics.
- Text must not clip or squeeze Russian labels.

## Allowed Visual Elements

- Thin route lines.
- Steel-blue architectural rails.
- Compact diagnostic rows.
- Small status labels.
- Grouped route zones.
- Subtle cool-blue ambient backgrounds.
- One or two premium surfaces with clear purpose.
- Copper CTA/action emphasis.
- Hairline borders using `dd-border-steel` or `dd-border-cool`.

## Forbidden Visual Elements

- Generic dark card grid.
- Fake dashboard widgets.
- Fake metrics or decorative numbers.
- Chart decorations without real data.
- Excessive route-card clutter.
- Equal-weight card spam.
- Heavy glassmorphism.
- Violet primary.
- Neon lime.
- Crypto/cyber/security cliches.
- Broad unrelated homepage redesign.

## Token Usage

Use values from `docs/delaem-digital-design-tokens-v1.md`.

Recommended:

- Base: `dd-canvas-graphite` `#05070A`
- Obsidian: `dd-canvas-obsidian` `#080C12`
- Elevated surface: `dd-surface-obsidian` `rgba(12, 17, 25, 0.82)`
- Control surface: `dd-surface-control` `rgba(14, 22, 34, 0.72)`
- Border: `dd-border-steel` `rgba(148, 163, 184, 0.16)`
- Cool border: `dd-border-cool` `rgba(113, 151, 198, 0.18)`
- Text: `dd-text-primary`, `dd-text-secondary`, `dd-text-muted`
- Action: `dd-action-copper`, `dd-action-copper-hover`
- System: `dd-action-steel-blue`, `dd-atmosphere-blue`, `dd-diagnostic-blue`

Use radius:

- `dd-radius-sm` or `dd-radius-md` for diagnostic rows.
- `dd-radius-lg` for major panels.
- Avoid `dd-radius-scene` unless creating a major atmospheric scene.

Use shadows:

- `dd-shadow-subtle` for compact elevation.
- `dd-shadow-panel` for one major panel.
- Avoid dramatic shadows on repeated items.

## Files Likely Allowed For Future Implementation

- `components/sections/loss-map-section.tsx`
- `components/sections/clientflow-system-section.tsx`
- `components/sections/audit-section.tsx`
- `components/sections/homepage-structure-sections.tsx` only if the transition/assembly relationship requires it.
- `app/globals.css`
- `lib/homepage-content.ts` only if copy grouping requires structured content changes.

## Files Forbidden For Future Implementation

- `app/api/*`
- `lib/leads/*`
- `components/ui-custom/contact-form.tsx`
- Supabase/storage logic
- Telegram/email notifications
- analytics behavior
- legal pages
- quiz runtime
- package files
- env files
- deploy config

## Must Preserve

- Lead flow.
- Form behavior.
- Analytics attributes.
- CTA hrefs.
- Section anchors: `#system`, `#audit`, `#contacts`.
- Current meaning of ClientFlow and Audit.
- Runtime behavior.

## Acceptance Criteria

- ClientFlow System score reaches at least 8/10.
- Audit section score reaches at least 8/10.
- Section transition after hero feels intentional and premium.
- Card spam is reduced.
- Diagnostic surfaces are compact and meaningful.
- No fake dashboard or fake metrics.
- Mobile does not become an endless card stack.
- Copper remains action-only.
- Cool blue / steel system signals are visible but restrained.
- Build, typecheck, and `git diff --check` pass in implementation.
