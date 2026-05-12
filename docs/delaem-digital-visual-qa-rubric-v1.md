# Delaem Digital Visual QA Rubric v1

## 1. Purpose

This rubric turns visual taste into repeatable QA criteria for Delaem Digital. It is used after preview screenshots or scroll videos to score the site, identify precise visual problems, and produce Codex-ready implementation prompts.

The source of truth is `docs/delaem-digital-design-bible-v1.md`. The target visual direction is a **Founder-led ClientFlow Command Center**: premium dark, strategic, architectural, controlled, high-ticket B2B, system-aware, and conversion-oriented.

The rubric is not a redesign brief by itself. It is a review tool that helps decide what to change, what to protect, and how to write the next controlled implementation prompt.

## 2. Global Scoring System

Score each category from 0 to 10.

| Score | Meaning |
| --- | --- |
| 0-2 | Broken, confusing, off-brand, or visibly unprofessional. |
| 3-4 | Functional but weak; major mismatch with the design bible. |
| 5-6 | Acceptable baseline; some correct direction but not premium enough. |
| 7-8 | Strong; mostly aligned with the design bible, with specific issues left. |
| 9-10 | Launch-quality premium execution; clear, controlled, distinctive, and conversion-safe. |

### Categories

- **First impression:** Does the first viewport immediately feel premium, focused, and high-ticket?
- **Founder authority:** Does the founder presence feel intentional, credible, and integrated into the offer?
- **Hero composition:** Does the hero balance copy, CTA, portrait, and system signals without clutter?
- **Typography hierarchy:** Are headings, labels, body text, and buttons readable, confident, and not cramped?
- **Spacing / breathing room:** Is the page calm and architectural, or crowded and template-like?
- **Surface quality:** Do panels, cards, borders, glass, and shadows feel refined rather than plastic?
- **CTA clarity:** Is the primary action obvious, early, and visually decisive?
- **ClientFlow/system intelligence:** Do visuals communicate a managed route from traffic to qualified lead?
- **Mobile compression:** Does mobile preserve premium feeling without endless stacks or clipped text?
- **Premium feel:** Does the whole view feel high-ticket B2B rather than generic SaaS or info-product?
- **Conversion clarity:** Can a serious buyer quickly understand what to do next?

## 3. Hero-Specific Checklist

The hero must preserve the fixed offer copy:

> "Собираю бизнесу управляемую систему привлечения клиентов"

Checklist:

- The fixed offer copy is unchanged in visible text and accessible label.
- Primary CTA is visible early and clearly more important than secondary actions.
- Primary CTA still points to the contact/form route and preserves analytics attributes.
- Secondary Telegram CTA still points to the Telegram channel and preserves analytics attributes.
- Founder is the human anchor, not a detached stock-like portrait card.
- Founder image and ClientFlow/system visuals feel connected.
- ClientFlow route feels meaningful, not decorative.
- System signals imply real capabilities: offer, site/quiz, traffic, lead, intake, qualification, notification, storage, analytics readiness.
- Hero does not become a generic SaaS dashboard.
- Hero does not use fake metrics, meaningless charts, or decorative panels that imply functionality without purpose.
- No card spam, chip spam, or equal-weight UI objects.
- No portrait-as-random-card effect.
- Russian typography is not compressed, clipped, or over-tracked.
- Mobile first screen still feels premium and shows offer plus CTA early.
- Mobile portrait does not push the offer and CTA too far down.
- Mobile route/system signal compresses into a few strong elements.

## 4. Section-Specific Checklist

### ClientFlow System

- Shows ClientFlow as a managed route, not a loose list of services.
- Route stages map to real offer capabilities.
- Visual structure feels architectural and controlled.
- Diagnostic/route elements are readable and not overloaded.
- Avoids decorative process diagrams with no meaning.

### Audit Section

- Feels like a serious diagnostic, not a gimmick.
- Uses status, readiness, and route language clearly.
- Diagnostic blue is used for system intelligence, not as the primary brand color.
- Success green and danger red are used only for status/validation.
- No finance/trading dashboard drift.

### Pricing

- Offer hierarchy is immediately understandable.
- Recommended path is clear but not shouty.
- Copper/warm action supports high-ticket confidence.
- Cards are comparable, readable, and not overly friendly SaaS.
- Mobile pricing does not become a heavy endless stack.

### Final CTA / Form

- Form feels like a serious intake console.
- Fields are readable, comfortable, and stable.
- Consent text remains visible and understandable.
- Success/error states remain clear.
- Visual improvements do not alter lead behavior.

### Legal / Footer Pages

- Legal pages are quiet, readable, and trustworthy.
- Footer supports navigation and trust without becoming another marketing block.
- Cookie banner remains compact and understandable.
- No cinematic hero treatment is needed for legal pages.

## 5. Anti-Pattern Dictionary

- **Generic dark SaaS hero:** dark gradient, large headline, two buttons, random UI card, no distinctive system logic.
- **Fake dashboard metrics:** impressive-looking numbers or charts that do not represent real ClientFlow meaning.
- **Too many chips/cards:** every concept becomes a pill, badge, or card, making all information equal.
- **Overdone glassmorphism:** every panel is frosted, glowing, blurred, and visually expensive.
- **Violet/cyber drift:** purple-blue sci-fi cues start replacing the Delaem Digital palette.
- **Neon lime:** Linear-like signal color becomes brand identity.
- **Crypto/security cliches:** locks, shields, grids, lasers, token-like surfaces, hacker/cyber mood.
- **CTA below fold:** user has to scroll before understanding how to act.
- **Founder image detached from system:** portrait looks pasted beside the offer rather than part of the command center.
- **Mobile endless card stack:** mobile becomes a long sequence of similar dark cards with no rhythm.
- **Russian text cramped or clipped:** tight tracking, oversized words, or narrow buttons damage readability.

## 6. Screenshot / Video Review Protocol

For a useful visual review, send:

- Desktop hero screenshot at a common laptop/desktop width.
- Mobile hero screenshot at a narrow mobile width.
- Short scroll video from hero through the first several sections.
- ClientFlow System section screenshot.
- Audit section screenshot.
- Pricing section screenshot.
- Final CTA/form screenshot.
- Cookie banner or legal/footer screenshot if visible or relevant.

Useful notes to include:

- Browser and viewport size if known.
- Whether this is local, preview, or production.
- Whether cookie banner is visible.
- Any specific feeling to test, such as "too SaaS", "not premium", "CTA buried", or "mobile too long."

## 7. Output Format For Future Reviews

Future assistant reviews should use this structure:

### Score Table

| Category | Score /10 | Note |
| --- | ---: | --- |
| First impression |  |  |
| Founder authority |  |  |
| Hero composition |  |  |
| Typography hierarchy |  |  |
| Spacing / breathing room |  |  |
| Surface quality |  |  |
| CTA clarity |  |  |
| ClientFlow/system intelligence |  |  |
| Mobile compression |  |  |
| Premium feel |  |  |
| Conversion clarity |  |  |

### Main Diagnosis

One concise paragraph explaining the strongest visual issue and what is working.

### What Must Not Change

List protected behavior, copy, routes, analytics, lead flow, forms, legal pages, or runtime areas.

### Exact Visual Fixes

Specific, scoped visual changes, ordered by impact.

### Codex Prompt

A controlled implementation prompt generated from the diagnosis.

### Acceptance Criteria

Clear visual and technical checks that define done.

## 8. Codex Prompt Grammar

Use this template when converting QA into an implementation prompt:

```markdown
Task:
[Layer name, for example D3.2b Hero Breakthrough Implementation]

Mode:
Controlled implementation only.
Do not redesign unrelated sections.
Do not commit, push, or deploy.

Current problem:
[Specific visual diagnosis from screenshots/video.]

Visual target:
Founder-led ClientFlow Command Center.
Use docs/delaem-digital-design-bible-v1.md and docs/delaem-digital-visual-qa-rubric-v1.md as source of truth.

Files allowed:
- [Exact files]

Files forbidden:
- [Exact no-touch files/areas]

Exact changes:
- [Concrete change 1]
- [Concrete change 2]
- [Concrete change 3]

Must preserve:
- Fixed hero offer copy
- CTA hrefs
- analytics data attributes
- lead flow
- form behavior
- existing runtime behavior

Acceptance criteria:
- [Visual criterion]
- [Mobile criterion]
- [No regression criterion]

Validation:
Run:
git status --short
git diff --stat
npm.cmd run build
npx.cmd tsc --noEmit
git diff --check
```

Prompt rules:

- Name exact files to touch.
- Use the design bible and this rubric as references, not external brand copying.
- Describe visual outcome, not vague taste.
- Protect runtime behavior explicitly.
- Include mobile acceptance criteria.
- Include validation commands.

## 9. D3 Visual Gate

D3 visual work passes only when:

- Hero score is at least 8.5/10.
- Mobile compression score is at least 8/10.
- Premium feel score is at least 8.5/10.
- CTA clarity score is at least 9/10.
- ClientFlow/system intelligence is clearly visible above and below the fold.
- No lead-flow regressions.
- No form behavior regressions.
- No analytics attribute regressions.
- No env, backend, Supabase, API, notification, or package changes unless separately approved.
- `npm.cmd run build` passes.
- `npx.cmd tsc --noEmit` passes.
- `git diff --check` passes.
