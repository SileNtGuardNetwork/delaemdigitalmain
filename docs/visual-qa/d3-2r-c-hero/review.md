# D3.2R-c Hero Visual QA Review

## Current Hero Score

**~8/10**

The current hero has moved out of the rejected route-card/dashboard direction and now reads as a cleaner Cinematic Founder Control Room. It is close to the desired system, but the portrait asset and final mobile polish still need another pass.

## What Works

- Cinematic blue atmosphere is visibly back.
- H1 is strong, readable, and remains the main message.
- CTA hierarchy is clear: primary action is decisive, Telegram is secondary.
- Route-card grid has been removed.
- Operator panel over portrait has been removed.
- ClientFlow signal is minimal and no longer a dashboard/card system.
- Founder/right-side composition is more integrated than the earlier photo-card approach.

## What Is Not Final

- Portrait can still be more integrated with the scene.
- Current public hero portrait source should be upgraded through a controlled asset pass.
- Mobile still needs final signature polish so it does not feel like dark background + text + buttons + photo.
- Cookie banner can interfere with the mobile first impression.
- Blue atmosphere should remain premium and restrained; it should not drift into cyber/cosmic effects.

## Must Preserve

- Hero H1 text: `Собираю бизнесу управляемую систему привлечения клиентов`
- Primary CTA href: `#contacts`
- Primary CTA analytics attributes.
- Telegram CTA href, target, rel, and analytics attributes.
- Current hero direction: cinematic founder control room.
- Minimal ClientFlow signal.
- No route-card grid regression.
- No dashboard/widget regression.
- No lead flow, form, API, analytics, env, package, or deploy changes.

## Next Target

**D3.2R-g — Hero Portrait Asset Integration**

The next hero layer should focus on portrait source quality and integration, not a new UI system. Use `docs/portrait-source-lock-v1.md` as the asset source lock.

## Acceptance Criteria

- Hero score reaches at least 8.5/10 on desktop.
- Mobile hero reaches at least 8/10.
- Founder portrait feels like the human authority anchor.
- Portrait no longer reads as a simple framed card.
- Blue atmosphere remains premium, not cyber.
- CTA remains visible and decisive.
- ClientFlow is felt through atmosphere/linework, not cards or widgets.
- Cookie banner impact is reviewed during mobile QA.
- Build/typecheck pass during implementation.
