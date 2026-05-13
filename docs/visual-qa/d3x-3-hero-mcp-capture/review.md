# D3X.3 Hero MCP Capture Review

## Layer

**D3X.3 - Actual Hero Design MCP Capture**

Mode: research and documentation only.

## Tools Used

- LazyWeb MCP: used for desktop and mobile screenshot database searches.
- Refero MCP: attempted, blocked by inactive subscription (`NO_SUBSCRIPTION`).
- Local Refero fallback: `docs/reference-indexes/refero-reference-index-v1.md`.
- magic21: used only through `21st_magic_component_inspiration` for inspiration audit.
- shadcn: not used; no registry audit was needed for this research-only pass.
- Shell: used to read local docs, create documentation directory, inspect status.

## Documents Created

- `docs/lazyweb-research/hero-actual-findings-v1.md`
- `docs/block-specs/hero-signature-composition-spec-v1.md`
- `docs/visual-qa/d3x-3-hero-mcp-capture/review.md`

## Production Code Touch

No production code was touched.

No components, CSS, package files, runtime files, API files, lead-flow files, deployment files, or assets were edited.

## Research Summary

The live references support the existing art-direction lock: the hero should not become a dashboard, product preview, route-card stack, or generic SaaS hero. The stronger direction is a signature editorial control-room composition with a human authority anchor and restrained system signals.

The most useful references were not exact visual templates. Their value was in composition behavior:

- founder/person integrated into a real scene;
- asymmetrical editorial balance;
- fewer objects with stronger hierarchy;
- one dominant CTA path;
- mobile compression through a single visual anchor rather than stacked panels.

## Key Composition Findings

### What To Take

- Large human/founder presence as a scene object.
- Editorial crop, lighting, and depth instead of a framed card.
- Negative space around the H1 and CTA.
- One restrained system cue that implies route/control.
- Cool blue atmosphere as system intelligence.
- Copper as the decisive conversion action.

### What To Avoid

- Product dashboard preview under or beside the H1.
- Fake metrics and decorative charts.
- Route-card grid below CTA.
- Operator panels over the portrait.
- Chip/pill clusters.
- Prompt bars and AI search inputs.
- Violet, neon, cyber, crypto, or generic AI homepage language.
- Mobile stack of offer -> CTA -> route panel -> operator panel -> portrait.

## Recommended Hero Direction

Proceed with **Founder-Led Editorial Control Room**:

- left side remains a quiet conversion stack;
- right side becomes an integrated founder scene, not a portrait card;
- ClientFlow appears as one thin route line or compact label sequence;
- H1 and primary copper CTA stay visually dominant;
- mobile keeps H1/CTA early and brings the founder signal forward without a route tower.

This direction should be implemented later only through a separate controlled implementation layer.

## Rejected Directions

- Dashboard hero.
- Fake command-center UI.
- AI prompt/search-bar hero.
- Product screenshot hero.
- Feature chip cloud.
- Metrics/proof strip without real source.
- Full glassmorphism hero.
- Portrait-as-card.
- UI panels over founder photo.
- Violet/neon/cyber atmosphere.

## Visual Risk Notes

- The hero can still become generic if the right side is only a clean portrait beside text. The future pass needs scene integration, not more UI.
- The system signal must be small enough to stay premium but clear enough to avoid becoming meaningless decoration.
- Mobile needs screenshot QA because the intended compression can fail quickly if labels, portrait, and CTA stack too tall.
- Cookie banner impact should be checked during any future mobile hero QA.

## Recommended Acceptance Gate For Future Implementation

- Desktop hero: at least 8.5/10.
- Mobile hero: at least 8/10.
- CTA clarity: at least 9/10.
- Founder authority: at least 8.5/10.
- No regression against `docs/rejected-visual-patterns-v1.md`.
- No production behavior changes.

## Git Status Expectation

Expected changed files after this research pass:

- `docs/lazyweb-research/hero-actual-findings-v1.md`
- `docs/block-specs/hero-signature-composition-spec-v1.md`
- `docs/visual-qa/d3x-3-hero-mcp-capture/review.md`

No production-code diffs are expected.
