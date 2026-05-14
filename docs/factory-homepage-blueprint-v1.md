# Factory Homepage Blueprint v1

## Purpose

This is the default homepage blueprint for Delaem Digital and other ClientFlow-style sites. It defines the recommended section order, the job of each section, and the copy / visual / conversion / technical goals that each section must satisfy.

## Recommended Section Order

1. Hero
2. Problem / Diagnostic
3. ClientFlow System
4. Audit / Qualification
5. Products / Service Ladder
6. Proof / Cases
7. Pricing / Offer Ladder
8. FAQ / Objections
9. Final CTA / Lead Form
10. Footer / Legal

## Section Jobs

### 1. Hero

- Copy objective: explain who this is for, what is being built, and the next step.
- Visual objective: premium first impression, founder-led, strong hierarchy, no clutter.
- Conversion objective: make the primary CTA obvious within the first viewport.
- Technical notes: keep CTA hrefs, analytics, and portrait behavior stable.

### 2. Problem / Diagnostic

- Copy objective: show what breaks when the system is absent.
- Visual objective: controlled diagnostic tone, not fear theater.
- Conversion objective: make the current pain legible enough to justify exploration.
- Technical notes: do not turn it into a fake dashboard or red alarm wall.

### 3. ClientFlow System

- Copy objective: show the route from traffic to qualified lead.
- Visual objective: blueprint, route line, staged architecture, restrained labels.
- Conversion objective: make the method feel concrete and operational.
- Technical notes: group stages; avoid equal-weight card spam.

### 4. Audit / Qualification

- Copy objective: frame the audit as a diagnostic outcome, not a quiz gimmick.
- Visual objective: compact status surfaces, controlled diagnostics, calm hierarchy.
- Conversion objective: invite the user into a lower-friction next step.
- Technical notes: keep form logic and lead flow unchanged.

### 5. Products / Service Ladder

- Copy objective: explain what can be bought and in what order.
- Visual objective: ladder, stack, or tiered offer system; not generic pricing cards.
- Conversion objective: help the user self-select the right path.
- Technical notes: preserve pricing logic and CTA destinations.

### 6. Proof / Cases

- Copy objective: prove the offer works in a credible context.
- Visual objective: selective evidence, not a gallery of random logos.
- Conversion objective: reduce trust friction.
- Technical notes: use real proof only; never invent cases or metrics.

### 7. Pricing / Offer Ladder

- Copy objective: show value, scope, and preferred path.
- Visual objective: premium high-ticket trust, copper accent for the recommended path.
- Conversion objective: move the visitor from interest to decision.
- Technical notes: keep pricing and package meaning stable unless separately approved.

### 8. FAQ / Objections

- Copy objective: answer the final blockers directly.
- Visual objective: readable accordion or compact objection blocks.
- Conversion objective: neutralize hesitation without adding noise.
- Technical notes: avoid overlong answers and nested marketing prose.

### 9. Final CTA / Lead Form

- Copy objective: make the action obvious and low-friction.
- Visual objective: serious intake surface, calm, readable, premium.
- Conversion objective: capture the lead.
- Technical notes: preserve validation, consent, telemetry, and route behavior.

### 10. Footer / Legal

- Copy objective: provide trust, compliance, and navigation.
- Visual objective: quiet support layer, not another campaign section.
- Conversion objective: remove legal friction and reinforce credibility.
- Technical notes: keep policy links and cookie behavior stable.

## Special Section For The Current Delaem Digital Personal Site

The Delaem Digital personal site is the first factory case and must follow the blueprint with a founder-led emphasis:

- hero must present the founder as the authority anchor;
- the system explanation must feel like a ClientFlow command center, not a generic service page;
- audit and service ladder must make the route from traffic to lead visible;
- pricing and final CTA must keep copper as the decisive action cue;
- the page must remain premium on mobile, not collapse into a long dark-card stack.

## Technical And Integration Notes

- Next.js is the core implementation target.
- Use existing content and live lead flow unless a task explicitly changes them.
- Use analytics events consistently and keep names stable.
- Do not introduce fake dashboards or fake metrics.
- Do not use a section if it cannot support a real business action.
- Do not let visual polish override the route to a lead.

