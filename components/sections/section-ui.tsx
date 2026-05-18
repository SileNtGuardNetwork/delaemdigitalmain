export function SectionKicker({ children }: { children: string }) {
  return (
    <div className="mb-4 inline-flex items-center gap-3">
      <span className="h-px w-[22px] bg-[var(--dd-action-copper)]" aria-hidden />
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--dd-action-copper)]">
        {children}
      </span>
    </div>
  );
}

export function CopperCheck({ className = "mt-0.5 shrink-0" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden className={className}>
      <path
        d="M2.5 7.2L5.4 10.1L11.5 3.9"
        stroke="var(--dd-action-copper)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SteelDot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--dd-action-steel-blue)]" aria-hidden />;
}
