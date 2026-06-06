# DD-V2-4 — Internal Proof + Product Ladder QA

**Pass:** V2-4 company-led polish  
**Date:** 2026-05-19  
**Baseline:** V2-3 (`6360b2e`)  
**Components:** `internal-proof-section.tsx`, `product-ladder-v2-section.tsx`

---

## Internal Proof (#proof)

| Field | Spec | Implemented |
| --- | --- | :---: |
| Kicker | Сначала собираем себе | ✓ |
| H2 | ClientFlow-система (one medium mention) | ✓ |
| Subheadline | Не витрина «на потом»… | ✓ |
| 4 evidence blocks | Per spec | ✓ |
| Company voice | Required | ✓ |
| No fake metrics/clients | Required | ✓ |
| No founder vanity | Required | ✓ |
| CTA products | #products | ✓ |
| CTA разбор | #contacts | ✓ |

---

## Product Ladder (#products)

| Field | Spec | Implemented |
| --- | --- | :---: |
| Kicker | Продукты Делаем Диджитал | ✓ |
| H2 | Можно начать с сайта… | ✓ |
| Subheadline | Подбираем уровень… | ✓ |
| 3 products | From `lib/pricing.ts` | ✓ |
| Section CTAs | Разбор + Как выбрать → #process | ✓ |

---

## Pricing source check

| Product | Title source | Price source | Items source |
| --- | --- | --- | --- |
| Делаем Сайт | `pricing.ts` | от 150 000 ₽ | slice(0,4) from pricing |
| Делаем Трафик | `pricing.ts` | от 250 000 ₽ | slice(0,4) from pricing |
| Делаем Систему | `pricing.ts` | от 350 000 ₽ | slice(0,4) from pricing |

**No hardcoded price overrides.** `lib/pricing.ts` untouched.

---

## No fake proof check

| Check | Result |
| --- | --- |
| Invented client logos | None |
| Fake revenue/conversion numbers | None |
| Fake case metrics | None |
| Evidence board = process claims only | Pass |

---

## Offer consistency with hero

| Check | Result |
| --- | --- |
| Company «мы» voice | Pass |
| System/route language | Pass |
| Build §2 link → #products works | Pass |
| ClientFlow only in proof H2 (medium) | Pass |

---

## Desktop 1440

| Check | §4 Proof | §5 Products |
| --- | :---: | :---: |
| FlagshipContainer | ✓ | ✓ |
| 2×2 / 3-col grid | ✓ | ✓ |
| Premium card styling | ✓ | ✓ |
| Featured system card emphasis | — | ✓ |
| No pricing-table aesthetic | — | ✓ |
| Copper on primary CTAs only | ✓ | ✓ |

---

## Mobile 390 / 430

| Check | Result |
| --- | --- |
| Single column stacks | Pass |
| Prices readable (22px bold) | Pass |
| Card CTAs full-width on small screens | Pass (ProductLadderCard) |
| Evidence blocks readable 14px+ | Pass |

---

## Visual risks

| Risk | Level | Note |
| --- | --- | --- |
| ClientFlow in proof H2 | Low | One allowed medium mention |
| Evidence board feels schematic | Low | 4 blocks, not route map |
| System card dominates ladder | Low | Featured border; others still premium |

---

## Motion

Static; no new libraries. V2-7 optional.

---

## Score

| Criterion | /100 |
| --- | ---: |
| Copy accuracy | 93 |
| Pricing integrity | 100 |
| No fake proof | 98 |
| Visual premium | 87 |
| Mobile | 88 |
| Hero/company alignment | 90 |
| **Overall** | **89** |

---

## Verdict

**PASS** — 89/100 (target 85+).
