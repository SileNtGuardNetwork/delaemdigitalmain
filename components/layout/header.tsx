"use client";

import { useState } from "react";

const navLinks = [
  { label: "ClientFlow", href: "#system" },
  { label: "Продукты", href: "#pricing" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Web3", href: "#contacts" },
  { label: "Контакты", href: "#contacts" }
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-[rgba(148,163,184,0.08)] bg-[rgba(5,7,10,0.92)] backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1360px] items-center justify-between px-6 md:px-[60px]">
        <a
          href="#top"
          className="text-[15px] font-medium tracking-[0.06em] text-[var(--dd-text-primary)] transition-colors duration-200 hover:text-[var(--dd-action-copper)]"
          aria-label="делаем диджитал"
        >
          делаем диджитал
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-normal text-[var(--dd-text-secondary)] transition-colors duration-200 hover:text-[var(--dd-text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacts"
            className="hidden rounded-[10px] border-[1.5px] border-[var(--dd-action-copper)] px-6 py-2.5 text-[13px] font-semibold text-[var(--dd-action-copper)] transition-colors duration-200 hover:bg-[rgba(184,121,75,0.08)] md:inline-flex"
            data-analytics-event="cta_primary_click"
            data-analytics-label="header_primary"
            data-analytics-value="#contacts"
          >
            Разбор системы
          </a>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            <span className="h-px w-5 bg-[var(--dd-text-muted)]" />
            <span className="h-px w-5 bg-[var(--dd-text-muted)]" />
            <span className="h-px w-5 bg-[var(--dd-text-muted)]" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[rgba(148,163,184,0.08)] bg-[rgba(5,7,10,0.98)] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Мобильная навигация">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--dd-text-secondary)] transition-colors hover:text-[var(--dd-text-primary)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-[10px] border-[1.5px] border-[var(--dd-action-copper)] px-6 py-2.5 text-center text-[13px] font-semibold text-[var(--dd-action-copper)]"
              data-analytics-event="cta_primary_click"
              data-analytics-label="mobile_header_primary"
              data-analytics-value="#contacts"
            >
              Разбор системы
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
