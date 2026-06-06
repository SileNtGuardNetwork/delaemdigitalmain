import { siteConfig } from "@/lib/site-config";
import { headerCta, headerNavigation } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-[var(--dd-border-steel)] bg-[rgba(5,7,10,0.92)] font-[family-name:var(--dd-font-primary)] backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[var(--container)] items-center justify-between gap-6 px-6 md:px-[60px]">
        <a
          href="#top"
          className="shrink-0 text-[15px] font-medium tracking-[0.06em] text-[var(--dd-text-primary)] transition-colors hover:text-[var(--dd-action-copper)]"
          aria-label={siteConfig.name}
        >
          делаем диджитал
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-8 lg:flex"
          aria-label="Основная навигация"
        >
          {headerNavigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] text-[var(--dd-text-secondary)] transition-colors hover:text-[var(--dd-text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={headerCta.href}
          className="shrink-0 rounded-[10px] border border-[var(--dd-action-copper)] bg-transparent px-5 py-2.5 text-[14px] font-semibold text-[var(--dd-action-copper)] transition-colors hover:bg-[rgba(184,121,75,0.08)] hover:text-[var(--dd-action-copper-hover)]"
          data-analytics-event="cta_primary_click"
          data-analytics-label="header_v2_primary_cta"
          data-analytics-value={headerCta.href}
        >
          {headerCta.label}
        </a>
      </div>
    </header>
  );
}
