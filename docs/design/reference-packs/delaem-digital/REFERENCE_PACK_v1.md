# Delaem Digital — Reference Pack v1

**Pack ID:** `delaem-digital`  
**Status:** Active for first visual rebuild wave  
**Do not copy sites** — extract composition, rhythm, hierarchy, and motion patterns only.

## Approved direction

| Field | Value |
| --- | --- |
| Positioning | Founder-led ClientFlow Architecture |
| Offer | Managed ClientFlow System (site → AI → Telegram/CRM → analytics → lead) |
| Primary CTA | Разбор системы |
| Header CTA | Обсудить проект |
| Visual | Premium dark B2B, architectural, restrained |
| Anti-patterns | Neon, cyberpunk, fake dashboards, floating cards, generic SaaS |

## First visual pass scope

| In scope | Out of scope |
| --- | --- |
| Hero (frozen after latest commit until next hero task) | n8n / server / Mem0 / S3 |
| ClientFlow Map (System + Context route visuals) | Database migrations |
| Product Cards preview (Services / Pricing rhythm) | Backend integration wiring |
| Mobile 390 / 430 layouts | Production deploy |
| Motion plan (CSS-first) | New motion npm packages |

## Reference categories to use

| Category | Sites | Extract |
| --- | --- | --- |
| Premium composition | curated.design | Spacing, type scale, dark band rhythm |
| Landing structure | landing.love | Section order feel, CTA placement |
| Product architecture | saaspo.com | Card grid discipline (not SaaS branding) |
| CTA hierarchy | cta.gallery | Primary vs secondary weight |
| Components | component.gallery | Form, nav, card patterns |
| Motion | appmotion.design | Stagger, duration, easing |
| Navigation | navbar.gallery | Sticky header, anchor nav |
| Mobile | mobbin.com | 390/430 hero collapse, tap targets |
| Brand restraint | rebrand.gallery | Limited accent palette |

## Pattern intents (first wave)

### Hero — LOCKED (Step 1)

- Founder portrait right, copy left, flow path proof row  
- Copy per `hero-factory-brief-v1.md`  
- File: `components/sections/hero-section.tsx`

### ClientFlow Map (Step 2 candidate)

- Blueprint screens: Context + System + Assembly  
- Reference: curated.design dark editorial splits + landing.love route storytelling  
- Avoid: fake live dashboards; use route dots / stages only

### Product Cards preview (Step 2 candidate)

- Services + Pricing tiers  
- Reference: saaspo.com card hierarchy + component.gallery pricing rows  
- Prices from `lib/pricing.ts` only

### Mobile 390 / 430

- Reference: mobbin.com B2B landing mobile  
- Hero: portrait as faint background; text first; CTA visible above fold

### Motion plan

- CSS `fadeUp` 0.5s ease, stagger 0–0.45s  
- No GSAP / Framer / Lenis in Step 1–2 unless approved  
- Reference: appmotion.design for subtle entrance only

## Local implementation anchors

```
docs/design/DD_VISUAL_SYSTEM_v1.md
docs/design/DD_VISUAL_REFERENCE_STACK_v1.md
docs/design/DD_VISUAL_QA_GATE_v1.md
docs/design/CANONICAL_TOKENS_DECISION_v1.md
design-reference/claude_design_sections.jsx
public/images/vitaly-hero-cinematic.webp
public/images/vitaly-founder-light.webp
```

## QA before merge

Run gate: `docs/design/DD_VISUAL_QA_GATE_v1.md`  
Commands: `npm run build`, `npm run typecheck`
