/**
 * V2 homepage navigation — docs/design/DD_SITE_V2_BLUEPRINT.md
 * Used by header and footer.
 */
export const headerNavigation = [
  { label: "Что делаю", href: "#build" },
  { label: "Подход", href: "#why" },
  { label: "Продукты", href: "#products" },
  { label: "Обо мне", href: "#founder" },
  { label: "Контакты", href: "#contacts" }
] as const;

export const headerCta = {
  label: "Разбор системы",
  href: "#contacts"
} as const;

/** @deprecated Use headerNavigation. Kept for header-controls.tsx until that module is removed. */
export const navigation = [
  { label: "Система", href: "#system" },
  { label: "ClientFlow Аудит", href: "#audit" },
  { label: "Продукты", href: "#pricing" },
  { label: "Контакты", href: "#contacts" }
] as const;
