# Hero Signature Composition Spec v1

## Purpose

This spec translates the D3X.3 actual MCP hero research into a future implementation direction for the Delaem Digital homepage hero.

This is documentation only. Do not edit production code from this file without a separate implementation task.

Use with:

- `docs/lazyweb-research/hero-actual-findings-v1.md`
- `docs/delaem-digital-design-bible-v1.md`
- `docs/delaem-digital-hero-art-direction-lock-v1.md`
- `docs/portrait-source-lock-v1.md`
- `docs/delaem-digital-design-tokens-v1.md`
- `docs/rejected-visual-patterns-v1.md`
- `docs/delaem-digital-visual-qa-rubric-v1.md`

## Signature Direction

**Founder-Led Editorial Control Room**

The hero should feel like one controlled cinematic scene where the founder is the operator of the ClientFlow system. It must move beyond a generic "text left + portrait right + dark background" layout through composition, lighting, linework, and spatial integration, not through more UI widgets.

The visual hierarchy remains:

1. H1 and primary CTA.
2. Founder portrait as human authority anchor.
3. ClientFlow signal as restrained system intelligence.

## Fixed Content Rules

The H1 remains unchanged from `docs/delaem-digital-hero-art-direction-lock-v1.md`.

Preserve:

- primary CTA route to `#contacts`;
- Telegram CTA route and attributes;
- analytics attributes;
- lead flow and form behavior;
- existing founder identity and source lock.

## Desktop Composition

### Left Conversion Stack

The left side should stay quiet and decisive:

- small kicker or authority label;
- fixed H1;
- compact subtitle;
- primary copper CTA;
- secondary Telegram action.

Do not add panels, chips, badges, stats, or extra proof blocks into the left stack unless there is a specific conversion reason.

### Right Founder Scene

The portrait should read as a scene object, not a rectangular photo card.

Allowed treatment:

- larger integrated portrait crop;
- soft mask or edge fade;
- cool blue rim/depth light;
- obsidian shadow depth;
- subtle architectural edge marks;
- linework that passes around the portrait scene, never over the face/body;
- slight overlap between atmosphere and the center grid.

Forbidden treatment:

- photo-card frame;
- operator panel over portrait;
- dashboard widgets over portrait;
- fake command center UI;
- heavy glass surface around the portrait;
- AI-generated replacement portrait.

### System Signal

ClientFlow should be felt through ambient route logic:

- one thin route line or rail;
- 3-4 small labels maximum;
- understated sequence such as source -> landing -> lead -> handoff;
- cool blue or steel-blue only;
- no fake numbers, charts, or dashboard UI.

System labels must stay subordinate to the H1, CTA, and founder.

## Mobile Composition

Mobile should compress into one strong first-screen experience:

- H1 and primary CTA appear early;
- founder signal appears soon after the CTA, not after a route tower;
- system cue becomes one compact line, small label row, or atmospheric mark;
- no route panel before portrait;
- no stacked cards/chips;
- no clipped Russian text;
- Telegram CTA remains secondary and does not crowd the primary action.

Preferred mobile order:

1. Kicker.
2. H1.
3. Subtitle.
4. CTA group.
5. Founder scene with compact route cue.

The founder scene may visually begin in the first viewport if spacing allows, but it must not push the H1/CTA below the fold.

## Color And Token Direction

Use existing token direction from `docs/delaem-digital-design-tokens-v1.md`:

- base: `dd-canvas-graphite` / `#05070A`;
- obsidian depth: `dd-canvas-obsidian` / `#080C12`;
- text: `dd-text-primary`, `dd-text-secondary`, `dd-text-muted`;
- action: `dd-action-copper`, `dd-action-copper-hover`;
- system: `dd-action-steel-blue`, `dd-atmosphere-blue`, `dd-diagnostic-blue`;
- borders: `dd-border-steel`, `dd-border-cool`.

Rules:

- copper belongs to the primary action or one decisive accent;
- cool blue is atmosphere/system intelligence only;
- no violet, neon, crypto, cyber, or generic SaaS-blue identity;
- no one-off decorative palette.

## Surface Rules

Allowed:

- scene-level background depth;
- hairline borders;
- subtle route lines;
- minimal elevated treatment only where needed.

Avoid:

- large route panel;
- product mockup panel;
- dashboard surface;
- nested cards;
- glassmorphism as the main visual idea.

## Typography Rules

- H1 remains the dominant object.
- Russian line breaks must feel intentional.
- Avoid over-compressed tracking.
- Technical labels must be small and subordinate.
- CTA labels must not wrap awkwardly on mobile.

## Likely Files For Future Implementation

Future implementation, if approved separately, is likely limited to:

- `components/sections/hero-section.tsx`
- `app/globals.css`
- `public/images/vitaly-hero-cinematic.webp` only if an approved asset task allows final portrait export.

Do not touch:

- `app/api/*`
- Supabase/storage logic
- Telegram/email notification logic
- lead API and lead processing
- contact form behavior
- analytics behavior
- legal pages
- package files
- env files
- deploy config

## Acceptance Criteria

- Desktop hero score reaches at least 8.5/10.
- Mobile hero score reaches at least 8/10.
- H1 and primary CTA are the conversion center.
- Founder reads as human authority anchor, not a photo card.
- ClientFlow is visible through linework/atmosphere, not dashboard widgets.
- No fake dashboards, fake metrics, charts, chip spam, or card spam.
- No operator panels over the portrait.
- Copper remains the primary action/accent.
- Cool blue remains atmosphere/system intelligence.
- Mobile does not become a long messy stack.
- CTA hrefs and analytics attributes are preserved.
- No production behavior changes.

## Future Implementation Prompt Seed

Task:
D3X.3 follow-up hero signature composition implementation.

Mode:
Controlled implementation only. Use this spec and the existing hero art-direction lock. Do not redesign unrelated sections.

Goal:
Create a founder-led editorial control-room hero that moves beyond generic text-left/portrait-right by integrating the founder scene, restrained route linework, and premium dark atmosphere while preserving H1, CTA behavior, analytics, portrait identity, and lead flow.
