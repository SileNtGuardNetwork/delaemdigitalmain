import { siteConfig } from "@/lib/site-config";
import { headerCta, headerNavigation } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(24,32,48,0.85)] bg-[rgba(5,7,10,0.88)] font-[family-name:var(--dd-font-primary)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between gap-6 px-6 md:px-[60px]">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-3 no-underline"
          aria-label={siteConfig.name}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[rgba(95,142,216,0.28)] font-mono text-[11px] font-bold tracking-[-0.02em] text-[var(--dd-diagnostic-blue)] transition-colors group-hover:border-[rgba(95,142,216,0.45)]"
            style={{ background: "rgba(95,142,216,0.07)" }}
            aria-hidden
          >
            ДД
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--dd-text-primary)] transition-colors group-hover:text-[#E8ECF2]">
            Делаем Диджитал
          </span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 xl:gap-9 lg:flex" aria-label="Основная навигация">
          {headerNavigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium tracking-[0.01em] text-[var(--dd-text-secondary)] no-underline transition-colors hover:text-[var(--dd-text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={headerCta.href}
          className="shrink-0 rounded-[10px] bg-[var(--dd-action-copper)] px-5 py-2.5 text-[13px] font-bold text-[#F5F7FB] no-underline transition-[background,box-shadow,transform] hover:bg-[var(--dd-action-copper-hover)] hover:shadow-[0_8px_28px_rgba(184,121,75,0.28)] active:translate-y-px"
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
