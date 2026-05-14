# Factory Visual Gate v1

## Purpose

This gate defines the acceptance standard for visual implementation in the Delaem Digital factory. Do not commit a visual implementation until the gate passes.

## Scoring System

Score each category from 1 to 10. Use decimal scores if needed.

- 10 = market-ready, aligned, and clean.
- 8.5+ = final-pass quality.
- 8.0-8.4 = acceptable only if the specific category is not the critical risk.
- Below 8.0 = not final for critical categories.

## Gate Rules

- Hero below 8.5/10 is not final.
- Mobile below 8/10 is not final.
- Homepage below 8.5/10 is not market-ready.
- If any critical integration breaks, the gate fails.
- If the page reads like a template or a fake dashboard, the gate fails.

## Desktop Gate

Must pass on a 1440x900-style viewport:

- first viewport is premium and legible;
- H1, subtitle, and primary CTA are visible immediately;
- portrait or main visual anchor is integrated, not framed like a card;
- section hierarchy reads as one system, not separate unrelated blocks;
- there is no obvious text-left/photo-right template feeling;
- section rhythm feels intentional;
- typography feels controlled, not rough;
- no horizontal overflow;
- no clipped Russian text;
- no fake dashboard or prompt-bar hero;
- no generic purple/cyber treatment.

## Mobile Gate

Must pass on a standard phone viewport:

- H1 and CTA appear early;
- portrait or founder signal does not push the offer too low;
- no horizontal overflow;
- no clipped text;
- buttons remain tap-friendly;
- route and section logic compress cleanly;
- no endless tower of dark cards;
- form and consent remain usable;
- cookie or legal UI does not block the first action.

## Hero Gate

- Founder or primary authority anchor is obvious.
- Hero feels integrated, not card-based.
- CTA is decisive and visible.
- ClientFlow signal is subordinate and meaningful.
- No dashboard widgets, fake metrics, prompt bars, or chip clouds.
- Typography is premium and readable.
- The hero communicates the offer in under five seconds.

## Section Rhythm Gate

- Each section answers a different question.
- The page does not repeat the same card treatment across every block.
- The rhythm alternates density and breathing room.
- Section transitions feel architectural.
- Mobile does not collapse into a monotone stack.

## Typography Gate

- Fonts match the locked system.
- Headings feel premium, not rough.
- Russian text does not wrap awkwardly.
- Buttons and labels do not break their container.
- Letter spacing does not become decorative noise.

## Conversion Gate

- Primary CTA is clear.
- Secondary CTA is quieter.
- Lead flow is intact.
- Form behavior is preserved.
- Analytics attributes are preserved.
- Contact, Telegram, and CRM expectations remain intact.

## Integration Safety Gate

- Lead behavior is unchanged unless explicitly approved.
- No backend/API/env/package/deploy modifications are introduced by visual work.
- Analytics naming remains stable.
- Legal links remain present and functional.
- No fake success states are introduced.

## Performance Gate

- Build passes.
- Typecheck passes.
- Diff check passes.
- No obvious layout jank is introduced.
- Motion remains restrained and purposeful.

## Rejection Examples

Reject the implementation if it looks like:

- a generic SaaS landing page;
- a fake analytics dashboard;
- a prompt/search bar hero;
- a chip cloud;
- a violet/purple AI page;
- a cyberpunk page;
- a 2015 static banner;
- a huge CSS illustration scene;
- too many equal-weight cards;
- a text-left/photo-right template with a pasted portrait card.

