# Hero Actual Findings v1

## Research Status

**Actual MCP capture completed.**

Source method:

- LazyWeb MCP desktop and mobile searches.
- Refero MCP attempted, but blocked by inactive subscription.
- Local Refero fallback: `docs/reference-indexes/refero-reference-index-v1.md`.
- magic21 used only as inspiration audit through `21st_magic_component_inspiration`; no code was used or integrated.

This file is research only. It does not authorize implementation by itself.

## Local Source Docs

- `docs/delaem-digital-design-bible-v1.md`
- `docs/delaem-digital-visual-qa-rubric-v1.md`
- `docs/delaem-digital-design-tokens-v1.md`
- `docs/rejected-visual-patterns-v1.md`
- `docs/delaem-digital-hero-art-direction-lock-v1.md`
- `docs/portrait-source-lock-v1.md`
- `docs/reference-indexes/refero-reference-index-v1.md`
- `docs/block-specs/homepage-visual-upgrade-roadmap-v1.md`
- `docs/design-gate-checklist-v1.md`

## Search Targets Used

- `premium dark founder led hero personal brand agency consultant cinematic portrait CTA desktop`
- `B2B product studio dark cinematic hero founder portrait service business conversion CTA desktop`
- `dark conversion focused service business hero editorial founder control room premium consultant desktop`
- `premium consultant personal brand mobile hero portrait CTA dark minimal founder`
- `dark B2B agency mobile hero founder CTA premium service business no dashboard`
- magic21 query: `dark hero`

## Useful Captured References

| Source | Platform | Why It Matters | What Not To Copy |
| --- | --- | --- | --- |
| Userpilot services, `https://userpilot.com/product/services/` | Desktop | Professional services page with headshot + overview. Useful as evidence that a service offer can use a human authority anchor without becoming a pure product UI. | Illustrated cards, star ratings, and generic service-profile structure. |
| Addepar company, `https://addepar.com/company` | Desktop | Strong corporate photo presence with a professional person in an office context. Useful for editorial authority and environmental credibility. | Green CTA identity, corporate company-page tone, and broad story structure. |
| Brightcove communications studio result, `https://www.brightcove.com/solutions/communications-studio` | Desktop | Studio-lit professional speaker image plus direct CTA. Useful for cinematic service-business authority and human scale. | Red theme, video-production literalism, and generic "power up" language. |
| LTX Studio agency solution, `https://ltx.studio/solution/advertising-agencies` | Desktop | Dark B2B creative/studio hero with concise headline and dual CTA. Useful for dark cinematic confidence and restrained conversion hierarchy. | Product/platform mockup drift, "AI creative tool" category language, and oversized product preview logic. |
| Moonvalley, `https://www.moonvalley.com/` | Desktop | Dark, minimal studio-grade hero with large typography and direct action. Useful for quiet confidence and reduced object count. | AI-video category mood, generic prompt-era hero, and blue/violet atmosphere if present. |
| Clay careers, `https://clay.earth/careers` | Desktop | Dark company/story surface with expressive but restrained brand atmosphere. Useful for "less UI, more authored identity." | Careers-page purpose, signature-like graphics, and any playful brand artifacts. |
| Blackmagic company, `https://www.blackmagicdesign.com/company` | Desktop | Large media/company hero and CEO/founder credibility pattern. Useful for editorial scale and founder/company authority. | Product-company scope, media-heavy scroll, and hardware brand cues. |
| Mobile Universe portfolio/editor screenshots | Mobile | Mobile hero/profile compression shows that name, portrait, bio, and CTA can fit early when visual elements are minimal. | Editor chrome, publish controls, floating add/settings buttons, and generic portfolio layout. |
| Mobile full-screen lifestyle hero patterns | Mobile | Full-bleed image-first mobile hero proves a human/visual anchor can appear early without stacking many cards. | Ecommerce/product-drop framing and shopping UI. |

## magic21 Inspiration Audit

magic21 returned dark hero component patterns with:

- centered headline + CTA + large product preview;
- pill announcement;
- background gradients;
- animated reveal utilities;
- AI prompt/search bar variants;
- suggestion chips;
- violet/purple AI styling in some examples.

Useful takeaway:

- Keep a simple conversion stack and restrained motion if implementation later needs motion.

Rejected from magic21:

- product screenshot hero;
- suggestion chip clusters;
- prompt bar as hero center;
- violet AI atmosphere;
- dependency/code import from returned snippets;
- "component template" composition.

## Strongest Composition Patterns

### 1. Human Authority As Scene, Not Card

The strongest founder/service references place the person inside the visual world of the page: office, studio, controlled lighting, or full-bleed editorial crop. The person is not treated as a small card or avatar.

Implication for Delaem Digital:

- keep the founder portrait as the right-side human authority anchor;
- integrate with scene-level shadows, rim light, edge lines, and controlled atmosphere;
- do not place operator panels or route cards over the portrait.

### 2. Editorial Asymmetry Beats Equal Columns

The useful references avoid the feeling of "two boxes side by side." They use offset image weight, crop tension, negative space, and one dominant text area.

Implication:

- keep H1 and CTA as the conversion center;
- let the founder scene overlap or visually lean into the hero field through atmosphere/linework;
- avoid a simple text-left / framed-photo-right template.

### 3. System Intelligence Should Be Ambient

Premium dark examples that feel serious use small signals: edge labels, subdued lines, controlled nav, restrained CTA states. The weaker examples use dashboard previews, fake analytics, or many chips.

Implication:

- ClientFlow should be visible as route logic, not as dashboard UI;
- use one compact sequence such as source -> landing -> lead -> handoff;
- use cool blue as system atmosphere, not brand color.

### 4. CTA Is The Conversion Anchor

Conversion-focused references keep one action visually dominant and make secondary actions quieter.

Implication:

- copper remains the primary action/accent;
- Telegram remains secondary;
- no decorative system line should pass through or compete with CTA.

### 5. Mobile Needs A Single Compressed Scene

Mobile references show that premium compression works when the page keeps only one visual anchor, one message, and one early action. It fails when desktop fragments become a vertical stack.

Implication:

- mobile order should keep H1 and primary CTA early;
- founder signal must appear before any route-card tower;
- ClientFlow compresses into one thin line, small label row, or ambient cue.

## Anti-Patterns Found

- dashboard/product preview as the main hero object;
- AI prompt bar as hero center;
- many suggestion chips or feature pills;
- large screenshot/card below the CTA;
- generic dark SaaS hero with no human authority;
- purple/violet AI glow;
- fake metrics and customer logos as filler;
- mobile upsell screens with feature lists and benefit grids.

## Recommended Research Translation

Use a **signature editorial control-room composition**:

- left conversion stack: kicker, fixed H1, subtitle, CTA group;
- right founder scene: large integrated portrait, not a card;
- background: obsidian/graphite with cool blue atmospheric depth;
- system layer: thin route line + 3-4 tiny labels around the scene edge;
- action layer: copper primary CTA only;
- mobile: H1 + CTA early, then founder scene with a compact route cue.

## Related Spec

Translate this research through:

- `docs/block-specs/hero-signature-composition-spec-v1.md`
- `docs/visual-qa/d3x-3-hero-mcp-capture/review.md`
