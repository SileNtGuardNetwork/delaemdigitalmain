# DD-V2-3 — What I Build + Why It Works QA

**Pass:** V2-3 company-led alignment  
**Date:** 2026-05-19  
**Baseline:** Hero V2-2 (`09ef4ca`)  
**Components:** `what-i-build-section.tsx`, `why-it-works-section.tsx`

---

## Copy verification — What I Build (#build)

| Field | Spec | Implemented |
| --- | --- | :---: |
| Kicker | Что собираем | ✓ |
| H2 | Не просто сайт. Систему… | ✓ |
| Subheadline | Сайт — только один из элементов… | ✓ |
| Card 1 | Сайт, который продаёт доверие | ✓ |
| Card 2 | Маршрут, где заявки не теряются | ✓ |
| Card 3 | Контур, которым можно управлять | ✓ |
| Company voice (мы/собираем) | Required | ✓ |
| No «я» / founder-led | Required | ✓ |
| Micro-link products | #products | ✓ |
| Micro-link system | #why | ✓ |

---

## Copy verification — Why It Works (#why)

| Field | Spec | Implemented |
| --- | --- | :---: |
| Kicker | Почему это работает | ✓ |
| H2 | Мы связываем дизайн… | ✓ |
| Subheadline | Красивый сайт сам по себе… | ✓ |
| 4 pillars | Per prototype | ✓ |
| Bottom accent | Управляемая последовательность | ✓ |
| CTA | Разбор системы → #contacts | ✓ |
| No ClientFlow jargon | Required | ✓ |
| No «premium digital» offer | Required | ✓ |

---

## Offer consistency with hero

| Check | Result |
| --- | --- |
| Company «мы» voice in §2–3 | Pass |
| System/route language matches hero H1 | Pass |
| No Vitaly/founder in §2–3 | Pass |
| Hero secondary «Как это работает» → #build lands correctly | Pass |
| Build link «Как работает система» → #why | Pass |

---

## Desktop 1440 review

| Check | §2 Build | §3 Why |
| --- | :---: | :---: |
| FlagshipContainer 1360px | ✓ | ✓ |
| 3-col / 2×2 grid | ✓ | ✓ |
| Readable H2 clamp | ✓ | ✓ |
| Blue system cues (indices, categories) | ✓ | ✓ |
| Copper on CTA only | ✓ | ✓ |
| No fake dashboard | ✓ | ✓ |
| No horizontal overflow | ✓ | ✓ |

---

## Mobile 390 review

| Check | §2 | §3 |
| --- | :---: | :---: |
| Single column stack | ✓ | ✓ |
| Body text ≥14px | ✓ | ✓ |
| CTAs tappable | ✓ | ✓ |
| Cards full width within padding | ✓ | ✓ |
| Accent block readable | — | ✓ |

---

## Mobile 430 review

| Check | Result |
| --- | --- |
| §2 three cards stack cleanly | Pass |
| §3 2-col at sm breakpoint | Pass at ≥640px; 1-col at 430 |
| Link row wraps | Pass |

---

## CTA check

| CTA | Location | Target | Analytics |
| --- | --- | --- | :---: |
| Посмотреть продукты | §2 | #products | ✓ |
| Как работает система → | §2 | #why | ✓ |
| Разбор системы | §3 | #contacts | ✓ |

---

## Visual risks

| Risk | Level | Note |
| --- | --- | --- |
| Pillar numbers feel schematic | Low | Restrained 2×2, not route map |
| §2/§3 similar card styling | Low | Build = category+title; Why = numbered pillars |
| Density vs hero simplicity | Low | Within 3+4 blocks limit |

---

## Motion

- No new libraries
- No section animation added (static)
- Future V2-7: optional CSS fade on scroll if hero pattern extended

---

## Score breakdown

| Criterion | /100 |
| --- | ---: |
| Copy accuracy | 94 |
| Company voice alignment | 92 |
| Visual premium / not feature spam | 87 |
| Mobile 390/430 | 88 |
| CTA / anchor integrity | 90 |
| Forbidden patterns avoided | 95 |
| **Overall** | **89** |

---

## Verdict

**PASS** — score 89/100 (target 85+).
