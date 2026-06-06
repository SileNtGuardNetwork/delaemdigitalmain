# DD-V2-2 — Company-Led Hero QA

**Pass:** V2-2 hero finalization  
**Date:** 2026-05-19  
**Blueprint:** `DD_SITE_V2_BLUEPRINT.md` §4 (company-led lock)  
**Component:** `hero-section.tsx` + `hero-section.module.css`

---

## Copy verification

| Field | Canonical | Implemented |
| --- | --- | :---: |
| Kicker | Делаем Диджитал · сайты, заявки, AI-интеграции | ✓ |
| H1 | Собираем для бизнеса / управляемую систему / привлечения клиентов | ✓ |
| Verb | Собираем (not Соберём) | ✓ |
| Subheadline | Соединяем сайт, оффер, заявки… | ✓ |
| Primary CTA | Разбор системы → `#contacts` | ✓ |
| Secondary CTA | Как это работает → `#build` | ✓ |
| Flow strip | Трафик → Сайт → AI-квалификация → Заявка → Обработка | ✓ |
| No Vitaly kicker/portrait | Required | ✓ |
| No EN H1 | Required | ✓ |
| No «premium digital» H1 | Required | ✓ |

---

## Desktop 1440 review

| Check | Result |
| --- | --- |
| Two-column grid: copy left, artifact right | Pass |
| H1 readable at ~54px clamp | Pass |
| Primary CTA above fold | Pass |
| Command panel restrained (~5 modules, no fake KPIs) | Pass |
| Copper on CTA/kicker only; blue on H1 highlight + system cues | Pass |
| No horizontal overflow | Pass |
| Max width 1360px | Pass |

---

## Mobile 390 review

| Check | Result |
| --- | --- |
| Copy stack first | Pass |
| CTAs visible without deep scroll | Pass |
| Flow strip wraps (flex-wrap) | Pass |
| Command panel below copy, simplified | Pass |
| No portrait background bleed | Pass |
| `min-h-[min(100vh,900px)]` — not absurdly tall | Pass |
| Text ≥11px on modules; body 15px | Pass |

---

## Mobile 430 review

| Check | Result |
| --- | --- |
| Same as 390; slightly more horizontal room for flow strip | Pass |
| Artifact full width within padding | Pass |
| No overflow-x | Pass |

---

## First 5-second clarity check

**Question:** What does this company offer?

**Expected answer:** Управляемая система привлечения клиентов — сайт, заявки, AI, интеграции.

**Result:** **Pass** — company voice, system outcome clear; no founder distraction.

---

## CTA visibility check

| CTA | Visible 390 | Visible 1440 |
| --- | :---: | :---: |
| Разбор системы | ✓ | ✓ |
| Как это работает | ✓ | ✓ |

---

## Typography check

| Element | Rule | Result |
| --- | --- | --- |
| H1 | Onest 800, clamp, -0.035em tracking | Pass |
| Kicker | 13px uppercase copper | Pass |
| Sub | 15–16px, #B8C1CE, 1.65 lh | Pass |
| Buttons | 10px radius, not pill | Pass |
| H1 highlight | Line 2 blue (#5F8ED8) | Pass |

---

## Hero visual risks

| Risk | Level | Mitigation |
| --- | --- | --- |
| Command panel feels SaaS-dashboard | Low | No numeric KPIs; text labels only |
| Flow strip + panel redundancy | Low | Strip = journey; panel = system layers |
| Mobile artifact adds scroll length | Low | Capped min-height; compact panel |
| `aria-hidden` on panel | Note | Decorative; copy carries meaning |

---

## Motion

- CSS `fadeUp` stagger retained
- `prefers-reduced-motion` disables animation
- No new libraries

---

## Score breakdown

| Criterion | /100 |
| --- | ---: |
| Copy accuracy (company-led) | 95 |
| Visual direction (command, no portrait) | 88 |
| Typography & tokens | 90 |
| Mobile 390/430 | 86 |
| CTA clarity | 92 |
| Accessibility basics | 85 |
| Forbidden patterns avoided | 95 |
| **Overall** | **88** |

---

## Verdict

**PASS** — score 88/100 (target 85+).

---

## Build / typecheck

Recorded in commit report after `npm run build` and `npm run typecheck`.
