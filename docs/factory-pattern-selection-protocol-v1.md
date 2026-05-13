# Factory Pattern Selection Protocol v1

## Purpose

This protocol defines how Delaem Digital selects website patterns for any niche, expert, or business before implementation. It replaces subjective hand-design with evidence-based pattern selection.

## Pattern Selection Process

1. Define the business: niche, offer, buyer, price level, objections, proof, conversion goal, and required integrations.
2. Define the site type: expert, founder-led service, agency, productized service, SaaS, local business, ecommerce, education, AI funnel, marketplace, portfolio, or hybrid.
3. Read local constraints and prior rejections.
4. Search references with LazyWeb and Refero when available.
5. Group references into pattern families.
6. Search component sources only after references establish direction.
7. Score each candidate.
8. Reject weak or unsafe patterns.
9. Select one winner.
10. Write an implementation prompt with exact allowed files and QA checks.

## How To Use Sources

### LazyWeb

Use LazyWeb for live website reference search.

Search by:

- niche: `premium B2B consultant hero`;
- business type: `productized service landing page`;
- section: `dark pricing section agency`;
- conversion model: `contact sales form B2B`;
- mobile behavior: `mobile hero portrait CTA`;
- rejection filter: `no dashboard`, `minimal`, `editorial`, `no prompt bar`.

Record:

- company/source;
- page URL or screenshot id when available;
- platform: desktop/mobile;
- what the pattern proves;
- what not to copy;
- whether it helps structure, visual mood, motion, conversion, or mobile.

### Refero

Use Refero for curated premium pattern discovery when Pro/search access is available.

Current rule:

- if Refero discovery is blocked by subscription, state that clearly;
- use local Refero-derived docs as fallback;
- do not claim fresh Refero search results unless the search was actually available.

After subscription, use Refero to validate:

- premium composition;
- founder/editorial authority;
- luxury or high-ticket restraint;
- CTA hierarchy;
- typography;
- motion rhythm;
- surface discipline;
- section sequencing.

### magic21

Use magic21 / 21st.dev Magic MCP for component inspiration, builder, and refiner exploration.

Rules:

- Use it after reference direction is known.
- Treat snippets as inspiration, not default implementation.
- Extract useful layout, animation, primitive, or interaction ideas.
- Reject output that introduces banned hero patterns, heavy dependencies, generic AI styling, or fake UI.

### shadcn

Use shadcn MCP and shadcn/ui for production primitives.

Good uses:

- `Button`;
- `NavigationMenu`;
- `Form`;
- `Field`;
- `Input`;
- `Textarea`;
- `Select`;
- `Tabs`;
- `Accordion`;
- `Dialog`;
- `Drawer`;
- `Tooltip`;
- `Separator`;
- `AspectRatio`;
- `Card` only when semantically needed.

Bad uses:

- turning every section into cards;
- treating registry examples as final design;
- adding primitives with no role in the selected pattern;
- using charts or dashboards without real data.

### Local Docs

Use local docs as hard constraints and accumulated memory.

For Delaem Digital, read relevant docs before pattern selection:

- `docs/delaem-digital-design-bible-v1.md`;
- `docs/delaem-digital-design-tokens-v1.md`;
- `docs/rejected-visual-patterns-v1.md`;
- `docs/delaem-digital-hero-art-direction-lock-v1.md`;
- `docs/block-specs/hero-signature-composition-spec-v1.md`;
- `docs/lazyweb-research/hero-actual-findings-v1.md`.

Local rejections override fresh inspiration unless the user explicitly approves revisiting a rejected direction.

## Pattern Scoring

Score each candidate from 1 to 10. For mobile risk, 1 means low risk and 10 means high risk.

| Criterion | Meaning | High Score Means |
| --- | --- | --- |
| Brand fit | Match with category, audience, price level, tone, and visual direction | The pattern feels native to the business. |
| Conversion clarity | Visitor understands offer, next action, and why to act | CTA hierarchy and message are clear. |
| Implementation complexity | Practical effort and risk to implement cleanly | Lower complexity is preferable when quality is equal. |
| Mobile risk | Risk that the pattern collapses poorly on mobile | Lower risk is better; high risk can veto a candidate. |
| Motion potential | Motion can improve comprehension or premium feel | Motion supports meaning without becoming spectacle. |
| Component availability | Existing primitives and libraries can implement the pattern | shadcn/custom minimal CSS can build it without heavy dependencies. |
| Integration readiness | Pattern can support forms, analytics, AI/CRM/Telegram flow, and future backend logic | The layout does not block real ClientFlow behavior. |

Selection priority:

1. Brand fit.
2. Conversion clarity.
3. Mobile risk.
4. Integration readiness.
5. Component availability.
6. Implementation complexity.
7. Motion potential.

Motion cannot rescue a weak business pattern.

## What To Reject

Reject patterns that look like:

- generic SaaS dashboard hero;
- fake metrics;
- prompt/search bar hero when the product is not prompt-first;
- chip cloud;
- violet/purple AI glow;
- cyberpunk;
- static 2015 landing banner;
- huge custom CSS illustration;
- weak personal brand template;
- crypto/Web3 cliche;
- dashboard UI without real product data;
- text-left/photo-right template with no authored composition;
- too many equal-weight cards;
- photo-card portrait framing when a founder should be integrated into a scene;
- mobile tower that delays the offer, CTA, or main visual anchor.

For Delaem Digital, also reject anything listed in `docs/rejected-visual-patterns-v1.md`.

## Recommended Candidate Table

Use this format for pattern selection output:

| Rank | Pattern name | Source/tool used | Short description | Why it fits | Structure | Media/portrait insertion | Components/libraries | Motion ideas | Brand fit | Conversion clarity | Implementation complexity | Mobile risk | Motion potential | Component availability | Integration readiness | Why better than rejected alternatives |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | ---: | ---: | --- | ---: | ---: | ---: | ---: | --- |
| 1 |  | LazyWeb / Refero / magic21 / shadcn / local docs |  |  | nav / copy / media / CTA / system cue / motion |  | shadcn / Magic UI / Aceternity / Tailark / Kibo / custom CSS |  |  |  | low / medium / high |  |  |  |  |  |

For hero patterns, always include:

- nav;
- left or primary copy;
- portrait/media;
- CTA;
- system cue;
- motion layer;
- desktop strength;
- mobile risk;
- implementation complexity;
- integration readiness.

## Winner Selection Rules

Select one winner only after scoring and rejection checks.

The winner must:

- match the business and brand direction;
- make the offer and CTA clear;
- avoid hard rejection patterns;
- work on mobile without a long broken stack;
- be implementable with available primitives and scoped CSS;
- support required integrations and analytics;
- preserve required assets, copy, forms, lead flow, and legal behavior;
- have a clear implementation prompt with exact allowed files.

Do not choose a winner because:

- it is trendy;
- it has impressive animation;
- a component library returned it first;
- it hides weak positioning behind visuals;
- it requires a huge custom CSS illustration;
- it depends on fake metrics, fake dashboards, or fake product UI.

## Implementation Prompt Template

```text
Task:
{Layer/task name} implementation.

Mode:
Controlled implementation only.

Goal:
Implement the selected pattern: {pattern name}.

Use:
- Factory stack: docs/factory-stack-v1.md
- Factory workflow: docs/factory-workflow-v1.md
- Pattern protocol: docs/factory-pattern-selection-protocol-v1.md
- Reference findings: {research docs}
- Design/tokens: {design docs}

Allowed files:
- {exact file}
- {exact file}

Do not touch:
- backend/API unless explicitly allowed
- env files
- package/deploy config
- unrelated components
- lead flow, forms, analytics, legal pages unless included

Pattern structure:
- Nav: {description}
- Copy: {description}
- Media/portrait: {description}
- CTA: {description}
- System cue: {description}
- Motion: {description}
- Integrations: {form/analytics/AI/CRM/Telegram expectations}

Implementation rules:
- Use existing components and tokens first.
- Use shadcn/ui primitives where appropriate.
- Use magic21/21st.dev, Magic UI, Aceternity, Tailark, or Kibo only when they support the selected pattern.
- Keep CSS scoped and minimal.
- Do not create fake dashboards, prompt bars, chip clouds, or huge custom CSS illustrations.
- Preserve required copy, links, analytics attributes, assets, and lead behavior.

QA:
- Run npm.cmd run build
- Run npx.cmd tsc --noEmit
- Run git diff --check
- Check desktop and mobile layout for text fit, CTA visibility, motion restraint, integration readiness, and no rejected patterns.
```

## Delaem Digital Current Factory Case

The personal Delaem Digital site is the first factory case.

Current selected hero pattern:

**Founder-Led Editorial Control Room**

Rules:

- founder portrait is the human authority anchor;
- ClientFlow is communicated through route logic and restrained labels;
- CTA is decisive and early;
- no dashboard widgets;
- no prompt bar;
- no chip cloud;
- no huge custom CSS office or realistic illustration;
- mobile compresses into one strong first-screen sequence.

This protocol does not authorize implementation by itself.
