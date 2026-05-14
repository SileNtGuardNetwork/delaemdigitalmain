# Factory Homepage Pattern Selection v1

## Executive Summary

The previous homepage preview failed for three linked reasons:

1. The hero still read as `text-left + photo-card-right`, so the founder was visible but not integrated.
2. The lower sections improved structurally, but they still did not feel premium enough for a high-ticket founder-led ClientFlow site.
3. Typography and route language still pulled the page toward rough, technical, and partly English-sounding system copy instead of a calm business-premium result.

The next implementation must avoid:

- framed portrait cards;
- generic SaaS dashboard language;
- fake metrics and fake product UI;
- prompt/search-bar heroes;
- chip clouds;
- violet / purple AI glow;
- cyberpunk or crypto/Web3 cliches;
- static 2015 landing banners;
- huge CSS illustration scenes;
- card spam and equal-weight dark boxes;
- visible English technical route copy in the page's business-facing narrative.

For this project, a market-ready homepage means:

- the founder reads as the operator of a real ClientFlow system;
- the offer is clear in the first viewport;
- the route from traffic to qualified lead is visible without becoming UI clutter;
- the page feels premium, dark, controlled, and conversion-led on desktop and mobile;
- the whole homepage works as one authored system, not as separate blocks pasted together.

## Three Homepage Pattern Candidates

### 1. Founder-Led Editorial Control Room

- Source/tools used: LazyWeb founder/service references, local hero research findings, magic21 pattern audit, shadcn primitive guidance, local design docs.
- Short description: a cinematic founder-first homepage where the hero opens as an editorial control scene and the rest of the page becomes a restrained ClientFlow narrative: diagnostic, system, audit, offer ladder, proof, and final CTA.
- Why it fits Delaem Digital: it matches the brand thesis exactly, keeps the founder central, and lets ClientFlow feel like a managed system rather than a product mockup.
- Recommended section order: Hero -> Problem / Diagnostic -> ClientFlow System -> Audit / Qualification -> Products / Service Ladder -> Proof / Cases -> Pricing / Offer Ladder -> FAQ / Objections -> Final CTA / Lead Form -> Footer / Legal.
- Hero behavior: large integrated portrait on the right, not a card; left conversion stack stays quiet and decisive; route cue is thin and subordinate; copper CTA remains dominant.
- Problem / diagnostic behavior: a compact loss map or diagnosis layer that explains what leaks when the system is absent.
- ClientFlow system behavior: a blueprint or route section with grouped stages, steel-blue rails, and no equal-weight card grid.
- Audit / product / pricing / final CTA behavior: audit feels like a diagnostic artifact, products become a ladder, pricing makes the recommended path obvious, and final CTA feels like a serious intake surface.
- How portrait should be used: as a scene anchor with atmospheric integration, rim light, edge treatment, and subtle linework around it, never as a framed photo card.
- Component/library candidates: `shadcn` Buttons / Accordions / Forms / Separators, `magic21` for layout inspiration only, `Magic UI` or `Aceternity` only if they support restrained motion, `Tailark` for block ideas if it stays clean, `custom minimal CSS` for the scene composition.
- Motion potential: route-line reveal, soft section reveals, CTA shine, subtle atmospheric drift.
- Mobile risk: medium-low.
- Implementation complexity: medium.
- Visual score estimate: 9.2/10.
- Conversion score estimate: 9.1/10.
- Reasons it could fail: if the portrait becomes too dominant, if the route cue gets too technical, or if section transitions drift back into card-template territory.

### 2. Premium Expert Authority Narrative

- Source/tools used: LazyWeb consultant and founder pages, local visual QA notes, magic21 inspiration audit, local blueprint docs.
- Short description: a quieter founder-site direction where the page is structured as an expert narrative with proof, diagnostic, services, and contact, but with less explicit control-room framing than the winner.
- Why it fits Delaem Digital: it would preserve authority and simplicity while reducing the risk of over-designing the system language.
- Recommended section order: Hero -> Proof / Trust -> Problem / Diagnostic -> ClientFlow System -> Products / Services -> Pricing / Offer Ladder -> FAQ / Objections -> Final CTA / Lead Form -> Footer / Legal.
- Hero behavior: portrait integrated, but with more emphasis on biography, authority cues, and a calmer editorial statement.
- Problem / diagnostic behavior: short and sharp, but less architectural than the winner.
- ClientFlow system behavior: present as a method section rather than a visible control room.
- Audit / product / pricing / final CTA behavior: the audit becomes a trust-building expert entry, the offer ladder stays clean, and final CTA closes the story.
- How portrait should be used: editorial portrait, possibly larger in the hero, but with a more narrative than systems-led role.
- Component/library candidates: `shadcn` Buttons / Cards / Accordion / Forms, `Tailark`, `custom minimal CSS`, light `Magic UI` motion.
- Motion potential: moderate fades, simple reveal, subtle emphasis.
- Mobile risk: low.
- Implementation complexity: low-medium.
- Visual score estimate: 8.3/10.
- Conversion score estimate: 8.5/10.
- Reasons it could fail: it can slide into a founder bio page, lose the ClientFlow system thesis, and become too soft to feel like a managed productized service.

### 3. Dark Productized Service Blueprint

- Source/tools used: LazyWeb dark agency/productized-service references, local homepage roadmap, shadcn primitives, magic21 layout audit.
- Short description: a more structured, productized-service homepage that emphasizes system blocks, service ladder, pricing clarity, and diagnostic conversion logic.
- Why it fits Delaem Digital: it is strong for clarity and packaging, and it can make the ClientFlow stack feel operational.
- Recommended section order: Hero -> ClientFlow System -> Problem / Diagnostic -> Audit / Qualification -> Products / Service Ladder -> Pricing / Offer Ladder -> Proof / Cases -> FAQ / Objections -> Final CTA / Lead Form -> Footer / Legal.
- Hero behavior: strong, but the risk is that it becomes too product-like or too technical.
- Problem / diagnostic behavior: structured diagnostic blocks, not emotional storytelling.
- ClientFlow system behavior: more explicit and modular than the winner.
- Audit / product / pricing / final CTA behavior: each section reads like a productized path, with clean offer hierarchy.
- How portrait should be used: present, but more secondary than in the winner; the founder can become a credibility anchor rather than the main scene.
- Component/library candidates: `shadcn` Cards / Buttons / Accordion / Tabs / Forms, `custom minimal CSS`, selective `Magic UI`.
- Motion potential: staged reveals, route progress, offer emphasis.
- Mobile risk: medium.
- Implementation complexity: medium-high.
- Visual score estimate: 8.0/10.
- Conversion score estimate: 8.7/10.
- Reasons it could fail: it can drift into generic SaaS structure, reduce founder authority, and make the page feel too operational rather than premium-editorial.

## Candidate Scoring Table

| Rank | Pattern | Brand fit | Conversion clarity | Founder authority | Visual premium level | Implementation complexity | Mobile risk | Motion potential | Component availability | Integration readiness | Risk of generic look |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | Founder-Led Editorial Control Room | 10 | 10 | 10 | 9 | 6 | 3 | 8 | 9 | 10 | 1 |
| 2 | Premium Expert Authority Narrative | 8 | 8 | 8 | 8 | 4 | 2 | 6 | 9 | 9 | 3 |
| 3 | Dark Productized Service Blueprint | 8 | 9 | 7 | 8 | 7 | 5 | 7 | 9 | 10 | 4 |

## Recommended Winner

**Winner: Founder-Led Editorial Control Room**

This should be implemented next because it is the only candidate that keeps all of the following true at once:

- the founder is the authority anchor, not a side image;
- the ClientFlow system is visible without becoming a dashboard;
- the page stays premium and founder-led instead of generic productized-service markup;
- the layout can support the locked hero copy, route cue, CTA family, and current navigation without inventing a new brand language.

It is stronger than F4 because it explicitly replaces the broken mental model of `text-left + photo-card-right` with a single authored scene. The founder portrait is integrated into the composition, while the ClientFlow signal becomes atmospheric route logic instead of a framed widget.

It avoids the photo-card hero by requiring:

- no rectangular portrait panel;
- no operator widget over the portrait;
- no large route panel under the CTA;
- no dashboard-like surfaces in the hero;
- no equal-weight split between text and image;
- no English technical route copy in the visible business narrative.

### Files Likely To Change During Implementation

- `components/sections/hero-section.tsx`
- `components/sections/homepage-structure-sections.tsx`
- `app/globals.css`
- `lib/navigation.ts`
- `app/page.tsx` only if section order or assembly needs adjustment

### Implementation Risks

- the portrait could still read as a framed object if the scene integration is too weak;
- the route cue could become cramped or too technical on desktop or mobile;
- lower sections can regress into card density if the premium rhythm is not carried through;
- typography can remain too rough if the heading scale and line-height are not tightened;
- the page can drift generic if the implementation uses component defaults without translation.

### Strict Acceptance Criteria

- Hero score at least 8.5/10.
- Mobile score at least 8/10.
- Homepage score at least 8.5/10.
- Founder reads as the operator of the system, not as a pasted portrait.
- No text-left/photo-card-right feeling.
- No fake dashboard, prompt bar, chip cloud, or violet/cyber atmosphere.
- Route cue is clear, subordinate, and business-readable.
- Typography feels premium and controlled in Russian.
- Build, typecheck, and diff check must pass.

## Implementation Prompt Seed

```text
Layer:
D3X-F6 — Homepage Pattern Implementation

Mode:
Controlled pattern-based implementation.

Goal:
Implement the winner pattern: Founder-Led Editorial Control Room.

Context:
- Delaem Digital is a founder-led ClientFlow system site, not a static design portfolio;
- previous F4 failed because the hero still felt like text-left + photo-card-right;
- the homepage must now feel premium, dark, business-led, and market-ready;
- use existing copy, assets, analytics, and lead flow;
- do not invent new visual categories.

Allowed files:
- {exact files approved for the homepage pass}

Do not touch:
- backend/API/env/package/deploy
- lead flow or analytics attributes
- assets unless explicitly allowed
- unrelated sections outside the selected scope

Pattern structure:
- Hero: left conversion stack, integrated founder portrait, thin route cue, copper CTA, steel-blue secondary action
- Problem / Diagnostic: compact loss map or diagnostic block
- ClientFlow System: grouped route blueprint, no card grid
- Audit / Qualification: premium diagnostic artifact
- Products / Service Ladder: ladder or ordered offer logic
- Pricing / Offer Ladder: clear recommended path, copper emphasis
- Final CTA / Lead Form: serious intake surface, calm and premium

Visual target:
- premium dark graphite / obsidian base;
- copper primary action;
- steel-blue system intelligence;
- Manrope headings, Onest body/nav/buttons;
- no framed portrait card;
- no dashboard UI;
- no prompt bar;
- no card spam;
- mobile compresses into a single strong scene.

Checks:
- npm.cmd run build
- npx.cmd tsc --noEmit
- git diff --check

Report:
- files changed
- section-level changes
- hero changes
- navigation changes
- checks result
- git status
```

## MCP / Source Notes

- LazyWeb research and local LazyWeb findings support the winner by showing that strong founder/service pages rely on editorial asymmetry and integrated human authority, not card-based heroes.
- magic21 inspiration audits were useful as a rejection filter because they repeatedly surfaced prompt bars, chip clusters, and AI-dashboard visuals that do not fit this site.
- shadcn primitives remain the implementation baseline for production UI.
- Refero discovery was not available in this pass, so the selection relies on local Refero-derived fallback docs and the existing research pack.

