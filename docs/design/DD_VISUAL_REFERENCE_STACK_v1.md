# DD Visual Reference Stack v1

**Purpose:** Define where to look for pattern inspiration during the Delaem Digital visual rebuild.  
**Rule:** Extract patterns only — **do not copy sites wholesale.**

## Reference categories

| Source | Use for |
| --- | --- |
| [curated.design](https://www.curated.design) | Premium composition, visual rhythm, dark B2B restraint |
| [landing.love](https://www.landing.love) | Landing structure, section pacing, CTA flow |
| [saaspo.com](https://saaspo.com) | Product architecture layouts (adapt to founder-led, not SaaS clone) |
| [cta.gallery](https://cta.gallery) | CTA hierarchy, contrast, placement |
| [component.gallery](https://component.gallery) | Component discipline, form/nav patterns |
| [appmotion.design](https://appmotion.design) | Motion timing, scroll reveal restraint |
| [navbar.gallery](https://navbar.gallery) | Sticky nav, anchor nav, mobile collapse |
| [mobbin.com](https://mobbin.com) | Mobile UX 390/430, thumb zones, readable hero stacks |
| [rebrand.gallery](https://rebrand.gallery) | Brand restraint, typography systems |

## Local sources (repo)

| Asset | Path |
| --- | --- |
| Design tokens | `docs/delaem-digital-design-tokens-v1.md` |
| Hero copy lock | `docs/delaem-digital/hero-factory-brief-v1.md` |
| Site structure | `docs/delaem-digital/site-blueprint-v1.md` |
| Claude design JSX | `design-reference/claude_design_sections.jsx` |
| Hero reference PNG | `public/images/hero-visual-lock-reference.png` |
| Token decision | `docs/design/CANONICAL_TOKENS_DECISION_v1.md` |
| Reference pack | `docs/design/reference-packs/delaem-digital/REFERENCE_PACK_v1.md` |

## Workflow per section rebuild

1. Read blueprint screen goal + copy lock  
2. Pick 1–2 external references (category above)  
3. Sketch pattern intent in reference pack notes  
4. Implement in scoped files only  
5. Run `DD_VISUAL_QA_GATE_v1.md` checklist  
6. `npm run build` + `npm run typecheck`

## Out of scope (all visual passes until explicit approval)

- n8n, server infra, Mem0, S3  
- Database schema changes  
- Backend integration wiring (leads API exists; form wiring is separate step)  
- Production deploy without owner request  
- New npm motion libraries
