# Delaem Digital Hero Art Direction Lock v1

## 1. Hero Thesis

**Cinematic Founder Control Room**

The hero is one cinematic scene, not a collection of interface blocks. The founder is the main visual anchor: a credible operator responsible for the ClientFlow system. The ClientFlow system should be felt through atmosphere, route logic, architectural lines, and restrained labels, not through a dashboard or a card grid.

The first viewport must feel premium, dark, controlled, and high-ticket B2B. It should communicate that Delaem Digital builds a managed route from attention to qualified lead, while preserving calm and conversion clarity.

The fixed hero offer must remain exactly:

> "Собираю бизнесу управляемую систему привлечения клиентов"

The hero must not feel like SaaS, a dashboard, a card stack, an info-product landing page, crypto/cyber design, or a literal command-center UI.

## 2. Composition Lock — Desktop

- Left column contains only the core conversion stack: kicker, fixed H1, subtitle, and CTA group.
- Right side is the founder portrait integrated into a cinematic scene.
- System signals live around or beside the portrait as thin route lines, tiny labels, edge markings, subtle grid cues, or atmospheric diagnostics.
- The first screen should feel designed as one scene, not separate blocks placed beside each other.
- No large route panel below the CTA.
- No dense command cards.
- No dashboard-like widgets.
- No large operator widget over the portrait.
- Preserve above-the-fold calm: the CTA must be visually decisive, and the system signal must support it rather than compete with it.
- The visual weight hierarchy is: H1 and CTA first, founder second, ClientFlow signal third.

## 3. Composition Lock — Mobile

- H1 and primary CTA must appear early.
- Telegram CTA stays secondary.
- The founder signal should appear sooner and feel integrated, not delayed after a tower of UI blocks.
- No large route panel before the portrait.
- The system route compresses into one compact line, 3-4 tiny labels, or an ambient visual cue.
- Do not use a route card grid on mobile.
- Avoid the rejected tower: offer -> CTA -> route panel -> operator panel -> portrait.
- Avoid endless dark boxes.
- Mobile must not clip Russian text or create horizontal overflow.
- Cookie banner must remain compact enough that it does not destroy the first impression.

## 4. Founder Portrait Role

- The portrait is the human authority anchor.
- The image must not be distorted, replaced, or AI-generated.
- The source portrait remains the existing founder asset unless separately approved.
- Framing should be cinematic and integrated with the scene.
- Avoid a photo-card look: the portrait should not feel like a rectangular card pasted next to text.
- Avoid overlay panels on top of the face or body.
- Use subtle masks, lighting, edge lines, atmospheric shadows, and route-line cues to connect the founder to the system.
- The founder should feel like the operator of the ClientFlow system, not an illustration beside it.

## 5. ClientFlow System Signal

Show ClientFlow without cards.

Allowed signal language:

- Thin route line.
- Small labels.
- Subtle architectural grid.
- Minimal sequence: source -> landing -> lead -> handoff.
- Ambient diagnostic signal.
- Edge markings, small coordinates, or understated system labels around the founder scene.

The signal can imply:

- Traffic source.
- Landing page or quiz.
- Lead capture and qualification.
- Handoff to Telegram/email.
- Storage, UTM, and analytics readiness.

Hard limits:

- No fake metrics.
- No charts.
- No dashboard panels.
- No large route cards.
- No equal-weight chip/card system.
- No literal "command center" interface.

## 6. CTA Rules

Behavior to preserve:

- Primary CTA points to `#contacts`.
- Secondary CTA points to the Telegram channel.
- Analytics attributes remain unchanged.

Visual rules:

- Primary CTA must be visually decisive and visible early.
- Secondary CTA must be quieter.
- Buttons must not be swallowed by the decorative environment.
- CTA group should sit in the calm conversion stack, not inside a busy system panel.
- Decorative route lines must never pass through or obscure buttons.

## 7. Typography Rules

- Keep the H1 copy exactly:

> "Собираю бизнесу управляемую систему привлечения клиентов"

- Russian text must breathe.
- Avoid over-compressed tracking.
- Line breaks must look intentional on desktop and mobile.
- Hero typography should carry authority without screaming.
- The H1 should remain the dominant message.
- Avoid tiny technical text as the main design element.
- Labels can be technical, but they must stay subordinate to the offer and CTA.

## 8. Color / Surface Rules

- Base: dark graphite / obsidian.
- Primary action: copper / warm premium accent.
- System signal: quiet steel-blue only.
- Text: off-white and muted steel.
- Use glass sparingly, if at all.
- No violet primary.
- No neon lime.
- No random blue as brand color.
- No heavy glass everywhere.
- No large route card surface.
- No bright sci-fi glow, particles, or cosmic/cyber atmosphere.

## 9. Forbidden Patterns

Hard bans:

- Route-card grid under CTA.
- Fake dashboard.
- Metrics with no data.
- Operator widget over portrait.
- Card spam.
- Chip spam.
- Glassmorphism overload.
- Cosmic/cyber effects.
- Crypto/security cliches.
- Literal command center UI.
- Mobile route tower.
- Large route block before portrait on mobile.
- Dashboard-like widgets.
- Many equal-weight UI objects.
- Changing hero copy.
- Touching lead flow.
- Touching form behavior.
- Touching analytics behavior.

## 10. Implementation Instructions For Future Codex Pass

Likely allowed files:

- `components/sections/hero-section.tsx`
- `app/globals.css`

Future implementation must:

- Start from the current clean hero, not from `docs/d3-2-rejected-hero-experiment.patch`.
- Treat the rejected patch as a warning, not a source to reuse.
- Be CSS-light compared to the rejected attempt.
- Prefer removing blocks over adding blocks.
- Use fewer, stronger visual elements.
- Build one scene, not many panels.
- Keep the left conversion stack simple.
- Integrate system signals around the founder scene as linework/labels/atmosphere.
- Preserve CTA hrefs and analytics attributes.
- Preserve portrait source.
- Preserve runtime behavior.
- Avoid broad global CSS changes.
- Avoid backend, form, lead flow, API, Supabase, env, package, and deployment changes.

## 11. Acceptance Criteria

Hero is acceptable only if:

- Desktop hero score is at least 8.5/10.
- Mobile hero score is at least 8/10.
- First impression is premium.
- Founder appears as the authority anchor.
- ClientFlow system is felt without a route-card grid.
- CTA is visible early and decisive.
- Mobile is not a long stack.
- Russian typography is readable and not compressed.
- No backend/form regressions.
- No analytics regressions.
- Build and typecheck pass during implementation.

## 12. Final Implementation Direction

Recommended next implementation layer:

**D3.2R-b — Hero Rebuild From Art Direction Lock**

This should be a rebuild of the hero composition from this art-direction lock, not another cleanup of the rejected approach. The next pass should remove the rejected mental model of "command center equals boxes" and replace it with one cinematic founder-led scene where ClientFlow is communicated through route logic, atmosphere, restraint, and conversion clarity.
