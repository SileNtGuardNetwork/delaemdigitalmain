# Factory Section Pattern Library v1

## Purpose

This library describes reusable section patterns that Codex and future implementers can select from instead of designing by instinct.

For each pattern, use the pattern only when the business context matches the purpose and when the rejection rules do not apply.

## 1. Founder Editorial Hero

- When to use: founder-led, expert-led, high-ticket, service, or ClientFlow sites where trust and authority are central.
- Structure: nav, left conversion stack, founder portrait or visual anchor, CTA group, thin system cue, motion layer.
- Visual behavior: cinematic, dark, integrated portrait, restrained labels, not a photo card.
- Motion potential: route line reveal, subtle fade, atmospheric movement, CTA shine.
- Common mistakes: text-left/photo-right template, portrait card frame, dashboard widgets, too much copy.
- Component/library candidates: shadcn `Button`, `NavigationMenu`, `Separator`, custom minimal CSS, optional Motion.
- Rejection rules: reject generic SaaS hero, fake dashboard, purple glow, prompt bar, chip cloud, or heavy illustration.

## 2. Expert Authority Hero

- When to use: consultant, specialist, advisor, strategist, or audit-focused expert.
- Structure: statement of expertise, proof cue, CTA, supporting signal, minimal media.
- Visual behavior: calm, precise, premium, more editorial than promotional.
- Motion potential: small reveal, text emphasis, soft line cues.
- Common mistakes: too much biography, stock portrait framing, generic LinkedIn-like layout.
- Component/library candidates: shadcn buttons, `Card` only if semantically needed, custom minimal CSS.
- Rejection rules: reject weak personal brand template and mass-market landing banners.

## 3. Productized Service Hero

- When to use: the business sells a packaged service with clear scope and high-ticket conversion logic.
- Structure: offer statement, product ladder cue, CTA, proof cue, optional portrait or product anchor.
- Visual behavior: structured, confident, conversion-first, premium but practical.
- Motion potential: package highlight, route line, step reveal.
- Common mistakes: making it look like a SaaS dashboard or a generic agency banner.
- Component/library candidates: shadcn `Button`, `Tabs`, `Card`, `Separator`, Tailark ideas if they fit.
- Rejection rules: reject fake metrics, card spam, bargain-market styling, and vague offer language.

## 4. Diagnostic Problem Block

- When to use: the page needs to show why the current state is broken or costly.
- Structure: short diagnostic headline, symptom list, consequence, next-step CTA.
- Visual behavior: compact, controlled, diagnostic, not dramatic.
- Motion potential: subtle state reveal, line emphasis, staged list entry.
- Common mistakes: red fear wall, endless pain copy, oversized negative marketing.
- Component/library candidates: shadcn `Card`, `Separator`, `Accordion` if needed, custom minimal CSS.
- Rejection rules: reject fear theater and generic warning blocks.

## 5. Client Journey / Route Block

- When to use: the business must show traffic-to-lead logic clearly.
- Structure: source, landing, qualification, handoff, analytics.
- Visual behavior: line or rail first, labels second, cards last or not at all.
- Motion potential: route drawing, step reveal, subtle progress mark.
- Common mistakes: route-card grid, eight equal boxes, fake dashboard lanes.
- Component/library candidates: custom minimal CSS, shadcn `Separator`, `Tabs`, `Badge` only if subordinate.
- Rejection rules: reject chip clouds, prompt bars, or any visual that reads like software UI without data.

## 6. System Blueprint Block

- When to use: the site sells a managed system rather than a one-off page.
- Structure: grouped stages, route map, short explanatory copy, selected proof.
- Visual behavior: architecture, hierarchy, controlled spacing, subdued technical cues.
- Motion potential: section reveal, route line highlight, stage emphasis.
- Common mistakes: making every stage an equal card or turning the block into a faux control room.
- Component/library candidates: shadcn `Separator`, `Tabs`, `Card` only for meaningful grouping, custom minimal CSS.
- Rejection rules: reject fake dashboards and overly literal command-center UIs.

## 7. Audit / Diagnostic CTA Block

- When to use: the next step is an audit, qualification, or readiness check.
- Structure: what it checks, what the user gets, CTA, compact diagnostic states.
- Visual behavior: premium diagnostic artifact, not a quiz gimmick.
- Motion potential: result reveal, status indicator, CTA emphasis.
- Common mistakes: too many equal-status tiles, fake scores, noisy questionnaire styling.
- Component/library candidates: shadcn `Button`, `Form`, `Input`, `Textarea`, `Accordion`, `Dialog` if needed.
- Rejection rules: reject fake metrics, fake scoreboards, and dashboard-style cards.

## 8. Product Ladder

- When to use: there are several offers and the visitor needs a clear path.
- Structure: ordered offers, role in the route, CTA, optional recommended path.
- Visual behavior: clear hierarchy, not a catalog wall.
- Motion potential: recommended path emphasis, staged reveal.
- Common mistakes: equal-weight product cards, low-end marketplace feel.
- Component/library candidates: shadcn `Card`, `Badge`, `Button`, custom minimal CSS.
- Rejection rules: reject generic SaaS pricing clones and too many badges.

## 9. Pricing / Offer Ladder

- When to use: the visitor is already near decision and needs trust plus clarity.
- Structure: plan name, scope, price, what is included, CTA, recommended path.
- Visual behavior: premium, restrained, confidence-building.
- Motion potential: recommended tier emphasis, slight hover lift.
- Common mistakes: fake discount logic, loud pricing theatrics, unclear scope.
- Component/library candidates: shadcn `Card`, `Button`, `Separator`, `Tooltip` if needed.
- Rejection rules: reject bargain-market styling and aggressive scarcity.

## 10. Case Study / Proof Block

- When to use: real cases exist and can be shown without exaggeration.
- Structure: context, action, outcome, proof artifact, CTA or next step.
- Visual behavior: factual, edited, selective.
- Motion potential: reveal outcome, staged evidence.
- Common mistakes: invented claims, logo walls, testimonial wallpaper.
- Component/library candidates: shadcn `Card`, `Tabs`, `Accordion`, custom minimal CSS.
- Rejection rules: reject fake testimonials and unsupported metrics.

## 11. FAQ / Objections

- When to use: the visitor needs final reassurance.
- Structure: objection, answer, optional note.
- Visual behavior: compact, readable, restrained.
- Motion potential: accordion open/close or progressive reveal.
- Common mistakes: long marketing essays and redundant questions.
- Component/library candidates: shadcn `Accordion`, `Separator`.
- Rejection rules: reject walls of text and vague generic answers.

## 12. Final CTA / Contact Form

- When to use: the page is ending and the lead should convert.
- Structure: final proposition, form, consent, trust note, legal links.
- Visual behavior: serious intake surface, calm, premium.
- Motion potential: focus state, success state, subtle CTA shine.
- Common mistakes: too many fields, hidden consent, visual clutter, form weaker than CTA.
- Component/library candidates: shadcn `Form`, `Input`, `Textarea`, `Select`, `Button`, `Dialog` if confirmation is needed.
- Rejection rules: reject dark patterns, hidden consent, and exaggerated form decoration.

