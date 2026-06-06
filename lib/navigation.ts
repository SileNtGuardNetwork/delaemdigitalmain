/**
 * Canonical header navigation — hero-factory-brief-v1.md §1.
 * Anchor map and mismatches: docs/design/CANONICAL_TOKENS_DECISION_v1.md (nav table).
 */
export const headerNavigation = [
  { label: "Подход", href: "#system" },
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "/cases" },
  { label: "Обо мне", href: "#founder" },
  { label: "Контакты", href: "#contacts" }
] as const;

export const headerCta = {
  label: "Обсудить проект",
  href: "#contacts"
} as const;

/** @deprecated Use headerNavigation. Kept for header-controls.tsx until that module is removed. */
export const navigation = [
  { label: "Система", href: "#system" },
  { label: "ClientFlow Аудит", href: "#audit" },
  { label: "Продукты", href: "#pricing" },
  { label: "Контакты", href: "#contacts" }
] as const;
