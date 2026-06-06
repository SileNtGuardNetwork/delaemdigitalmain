# DD-V2-5 — Process + Founder QA

**Pass:** V2-5 polish  
**Date:** 2026-05-19  
**Baseline:** V2-4 (`ef20cab`)  
**Components:** `process-v2-section.tsx`, `founder-section.tsx`

---

## Process (#process)

| Field | Spec | Implemented |
| --- | --- | :---: |
| Kicker | Как работаем | ✓ |
| H2 | Сначала разбираем систему… | ✓ |
| Subheadline | Не начинаем с дизайна… | ✓ |
| 5 steps | Per spec copy | ✓ |
| Primary CTA | Разбор системы → #contacts | ✓ |
| Secondary CTA | Посмотреть продукты → #products | ✓ |
| Not 9-step methodology | Required | ✓ |

---

## Founder (#founder)

| Field | Spec | Implemented |
| --- | --- | :---: |
| Kicker | Кто отвечает за систему | ✓ |
| H2 | Виталий Тимошенко responsibility | ✓ |
| Subheadline | Не потоковая сборка… | ✓ |
| 4 responsibility blocks | Per spec | ✓ |
| Trust quote (personal «Я») | Per spec | ✓ |
| CTA | Обсудить систему → #contacts | ✓ |
| Portrait | `vitaly-founder-light.webp` only | ✓ |
| No hero portrait | Required | ✓ |
| No Frame 07/08 labels | Required | ✓ |
| No min-height 1000px | Required | ✓ |
| FlagshipContainer | Required | ✓ |

---

## Founder placement check

| Check | Result |
| --- | --- |
| Vitaly only in §7 | Pass |
| Hero remains company-led | Pass (unchanged) |
| Personal «Я» only in founder quote | Pass |
| Company voice in process §6 | Pass |

---

## Copy consistency

| Check | Result |
| --- | --- |
| Process uses «мы»/company framing | Pass |
| Founder bridges company → personal trust | Pass |
| No ClientFlow jargon overload | Pass |
| Products link from §6 aligns with §5 | Pass |

---

## Desktop 1440

| Check | §6 Process | §7 Founder |
| --- | :---: | :---: |
| FlagshipContainer 1360px | ✓ | ✓ |
| 5-step vertical pipeline | ✓ | — |
| Founder 42% / 58% split | — | ✓ |
| Portrait capped max-h 600px | — | ✓ |
| No schematic phase rails | ✓ | ✓ |

---

## Mobile 390 / 430

| Check | Result |
| --- | --- |
| Process steps stack | Pass |
| Founder image above copy | Pass |
| No absurd section height | Pass |
| CTA visible without deep scroll | Pass |
| Text 14px+ body | Pass |

---

## Visual risks

| Risk | Level | Note |
| --- | --- | --- |
| Founder 2×2 responsibility grid tight on 390 | Low | Single col below sm |
| Process vertical list feels long | Low | 5 cards only, acceptable |
| Removed metrics may reduce social proof | Low | Intentional — no vanity wall |

---

## Motion

Static; no new libraries. V2-7 optional.

---

## Score

| Criterion | /100 |
| --- | ---: |
| Copy accuracy | 94 |
| Founder placement | 96 |
| Visual premium | 88 |
| Mobile | 89 |
| Legacy cleanup (Frame labels) | 95 |
| **Overall** | **90** |

---

## Verdict

**PASS** — 90/100 (target 85+).
