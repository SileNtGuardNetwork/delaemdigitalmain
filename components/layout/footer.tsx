import { siteConfig } from "@/lib/site-config";
import { headerNavigation } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[var(--dd-border-steel)] bg-[var(--dd-canvas-obsidian)] px-6 py-10 font-[family-name:var(--dd-font-primary)] md:px-[60px]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#top"
          className="text-sm font-medium tracking-[0.06em] text-[var(--dd-text-muted)] transition-colors hover:text-[var(--dd-text-primary)]"
        >
          делаем диджитал
        </a>
        <nav className="flex flex-wrap gap-6" aria-label="Навигация в подвале">
          {headerNavigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] text-[var(--dd-text-muted)] transition-colors hover:text-[var(--dd-text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-[var(--dd-border-steel)] pt-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs text-[var(--dd-text-muted)]">{siteConfig.operator.legalName}</p>
          <p className="mt-1 text-[11px] text-[var(--dd-text-muted)] opacity-60">
            ИНН: {siteConfig.operator.inn} · ОГРНИП: {siteConfig.operator.ogrnip}
          </p>
        </div>
        <p className="text-xs text-[var(--dd-text-muted)]">© 2026 Делаем Диджитал. Все права защищены.</p>
      </div>
    </footer>
  );
}
