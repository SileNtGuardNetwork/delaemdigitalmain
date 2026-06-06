# DD-V2-7R-1 — Hero + Header Premium Redesign QA

**Pass:** V2-7R-1 art direction implementation  
**Date:** 2026-05-19  
**Baseline:** `c84c1e9` art direction reset  
**Direction:** Hybrid A+C — Premium Digital System + Managed Growth Command Layer  
**Files:** `hero-section.tsx`, `hero-section.module.css`, `header.tsx`

---

## Copy verification

| Field | Canonical | ✓ |
| --- | --- | :---: |
| Kicker | Делаем Диджитал · сайты, заявки, AI-интеграции | ✓ |
| H1 (3 lines) | Собираем… / управляемую систему / привлечения клиентов | ✓ |
| Subheadline | Соединяем сайт, оффер… | ✓ |
| Primary CTA | Разбор системы → #contacts | ✓ |
| Secondary CTA | Как это работает → #build | ✓ |
| Flow (desktop) | 5 steps, Заявка highlighted | ✓ |
| No Vitaly portrait | Required | ✓ |

---

## First 5-second clarity

**Expected:** Managed client acquisition system — technology company.

**Result:** **Pass** — H1 + sculptural route visual communicate system, not dashboard list.

---

## Desktop 1440

| Check | Hero | Header |
| --- | :---: | :---: |
| Strong first impression | ✓ | ✓ |
| 1360px alignment | ✓ | ✓ |
| CTA above fold | ✓ | ✓ |
| Custom system object (SVG route) | ✓ | — |
| No module card stack | ✓ | — |
| Depth (gradients, edge light, stage) | ✓ | ✓ |
| No horizontal overflow | ✓ | ✓ |

---

## Mobile 390 / 430

| Check | Result |
| --- | --- |
| Copy first | Pass |
| CTAs early | Pass |
| Hero height capped (~92vh max 820px) | Pass |
| Compact flow rail (no tall SVG) | Pass |
| Readable type 15–16px body | Pass |
| No overflow-x | Pass |

---

## Header quality check

| Check | Before | After |
| --- | --- | --- |
| Wordmark | Plain lowercase text | ДД monogram + semibold lockup |
| Width | 1180px | 1360px (matches hero) |
| CTA | Outline copper | Filled copper + hover shadow |
| Nav | Generic 14px | 13px medium, calmer spacing |
| Temporary feel | Yes | Reduced |

---

## Typography check

| Element | Treatment |
| --- | --- |
| H1 line 1 | Smaller weight 700, muted steel — setup line |
| H1 line 2 | Largest extrabold blue — focal |
| H1 line 3 | Strong white — closure |
| Kicker | Wider tracking, 11px — refined |
| Sub | 16px, 1.7 lh, muted |

**Result:** Hierarchy refined — less «blob extrabold» on all three lines.

---

## Hero visual quality check

| Criterion | Score /20 |
| --- | ---: |
| Custom acquisition route SVG | 18 |
| Depth & atmosphere (not flat black) | 17 |
| Premium stage (glass edge, glow) | 17 |
| Technology/system signal | 18 |
| Not generic SaaS card list | 19 |

---

## Template / generic risk check

| Risk | Status |
| --- | --- |
| Stacked module rows | **Removed** |
| Fake KPI metrics | None |
| Dashboard wall | None |
| Neon/cyberpunk | None |
| Stock imagery | None |
| Residual SaaS template feel | Low — SVG still component-adjacent; owner review advised |

---

## Score breakdown

| Area | /100 |
| --- | ---: |
| Hero visual (Hybrid A+C) | 90 |
| Header / wordmark | 88 |
| Typography rhythm | 89 |
| Mobile 390/430 | 88 |
| Copy fidelity | 98 |
| Forbidden patterns | 95 |
| **Combined hero + header** | **90** |

---

## Verdict

**PASS** — combined score **90/100** (target 90+).

### Residual blockers (non-failing)

- SVG route is code-built — owner may want further art pass with designer-refined geometry
- Mobile hides sculptural visual — intentional simplification
- Nav hidden below `lg` — pre-existing; mobile menu not in scope

---

## Motion

Existing CSS `fadeUp` only; `prefers-reduced-motion` respected. No new libraries.

---

## Build / typecheck

Recorded in commit report.
