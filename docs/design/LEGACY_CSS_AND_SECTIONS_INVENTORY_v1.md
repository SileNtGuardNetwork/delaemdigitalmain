# Legacy CSS and Sections Inventory v1

**Method:** grep-based audit (DD-STEP-1, updated DD-STEP-2-A)  
**Action:** Document only — **do not delete** orphan files until dedicated cleanup pass.

## Orphan section components (not imported by `app/page.tsx`)

| File | Notes |
| --- | --- |
| `components/sections/loss-map-section.tsx` | Legacy Screen 2 “Loss Map”; uses `.section`, `.button-primary` |
| `components/sections/clientflow-system-section.tsx` | Duplicate of system concept; `id="system"` conflicts if ever mounted twice |
| `components/sections/homepage-structure-sections.tsx` | Old monolithic sections export; legacy CSS classes |
| `components/layout/header-controls.tsx` | Theme toggle + mobile panel; imports deprecated `navigation` from `lib/navigation.ts` |

**Safe to remove:** After Step 2 confirms no imports (currently zero TS/TSX imports).

## Active section files (homepage)

All imported from `app/page.tsx`. Rebuild planned Step 2+; do not delete.

`hero-section.tsx`, `context-section.tsx`, `system-section.tsx`, `assembly-section.tsx`, `audit-section.tsx`, `services-section.tsx`, `process-section.tsx`, `why-section.tsx`, `audience-section.tsx`, `leads-section.tsx`, `pricing-section.tsx`, `founder-section.tsx`, `final-cta-section.tsx`

Shared: `dd-ui.tsx`, `section-ui.tsx` (partial overlap — `section-ui` lightly used)

## Legacy CSS in `app/globals.css`

Approximate grep hits for legacy class roots:

| Pattern | ~Matches | Still used by |
| --- | ---: | --- |
| `.header` | 64+ rules | **Not** current `header.tsx` (Tailwind-only). Orphan rules for old header |
| `.button` / `.button-primary` / `.button-secondary` | Many | `cookie-banner.tsx`, `contact-form.tsx`, orphan `header-controls`, orphan legacy sections |
| `.hero` | Present | **Not** current hero (inline/module CSS) |
| `.pricing-section` / `.price` | Present | Partially superseded by `pricing-section.tsx` Tailwind |
| `.form` | Present | `contact-form.tsx` legacy classes |
| `[data-theme="light"]` | Present | Theme toggle in unused `header-controls` |

**Dual token blocks in `:root`:**

- Modern: `--dd-*` (canonical)
- Legacy: `--bg`, `--surface`, `--copper`, `--container`, etc.

Body background still uses legacy `--bg` / `--bg-2` gradients + grid noise (`body::before`, `body::after`).

## Styling system split (risk)

| Area | System |
| --- | --- |
| Hero | Inline styles + `hero-section.module.css` |
| Header | Tailwind + `--dd-*` |
| Sections 2–13 | `dd-ui` + Tailwind |
| Cookie / contact form | Legacy `.button` classes |
| globals.css | Tailwind import + 4000+ lines legacy |

## Visual rebuild (DD-STEP-2-B — partial)

| Section | Status |
| --- | --- |
| `context-section.tsx` | **Rebuilt + QA** — FlagshipContainer, comparison layout, FlowPath `stackOnMobile` |
| `system-section.tsx` | **Rebuilt + QA** — route map, `xl` horizontal grid, mobile timeline |
| `dd-ui.tsx` | `FlagshipContainer` → `--dd-container-flagship`, `FlowPath` stackOnMobile, `RouteStageCard` mobile padding |
| `app/globals.css` | `--dd-container-flagship: 1360px` token (DD-STEP-2-B.1) |

| `assembly-section.tsx` | **Rebuilt (2-C)** — FlagshipContainer, 6-module 3×2 grid |
| `audit-section.tsx` | **Rebuilt (2-C)** — diagnostic sample report, no fake dashboard |

| `services-section.tsx` | **Rebuilt (2-D)** — FlagshipContainer, `ProductLadderCard`, `lib/pricing.ts` |

| `process-section.tsx` | **Rebuilt (2-E)** — FlagshipContainer, 9-step `PhaseBand` pipeline |

| `why-section.tsx` | **Rebuilt (2-F)** — FlagshipContainer, `ComparisonColumn` differentiation |

Sections 9–13 remain on legacy `DdContainer` (1180px) until their rebuild pass.

## Shell consistency (DD-STEP-2-A — done)

| Item | Status |
| --- | --- |
| `id="founder"` on `founder-section.tsx` | **Done** — header/footer «Обо мне» anchor works |
| Footer nav synced with `headerNavigation` | **Done** — `footer.tsx` imports `lib/navigation.ts` |
| Container width decision documented | **Done** — flagship `1360px`; legacy `--container` 1180px unchanged |

## Recommended cleanup order (Step 2-B+)

1. ~~Add `id="founder"` to founder section~~ (done Step 2-A)  
2. Wire `ContactForm` to final CTA (separate task)  
3. Remove orphan section files after grep confirms zero imports  
4. Strip unused `.hero` / `.header` blocks from `globals.css` in small PRs  
5. Introduce `--dd-container-flagship: 1360px` and migrate rebuilt sections (after visual pass)  
6. ~~Sync footer nav with `lib/navigation.ts`~~ (done Step 2-A)  
7. Delete `header-controls.tsx` when theme toggle decision is made

## Grep commands used

```bash
# Orphan imports (expect: docs only for loss-map, clientflow-system, homepage-structure)
rg "loss-map-section|homepage-structure|clientflow-system-section|header-controls" --glob "*.{tsx,ts}"

# Legacy class usage in components
rg "className=\"(hero|header|button)" components/

# navigation consumers
rg "from \"@/lib/navigation\"" 
```
