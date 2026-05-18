import type { CSSProperties, ReactNode } from "react";

export const ddFont = "font-[family-name:var(--dd-font-primary)]";

export function SectionFrame({
  children,
  id,
  bg = "var(--dd-canvas-graphite)",
  fadeTo,
  className = "",
  style
}: {
  children: ReactNode;
  id?: string;
  bg?: string;
  fadeTo?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${ddFont} ${className}`}
      style={{ background: bg, ...style }}
    >
      {children}
      {fadeTo ? (
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-10"
          style={{ background: `linear-gradient(to bottom, transparent 0%, ${fadeTo} 100%)` }}
        />
      ) : null}
    </section>
  );
}

export function DdContainer({
  children,
  className = "",
  style
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[var(--container)] px-6 md:px-[60px] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function RimLight({ style }: { style?: CSSProperties }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute rounded-full"
      style={{
        width: 520,
        height: 520,
        background: "radial-gradient(circle, rgba(95, 142, 216, 0.14) 0%, transparent 68%)",
        ...style
      }}
    />
  );
}

export function SectionIndex({ n, total = 13 }: { n: number; total?: number }) {
  return (
    <div
      className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--dd-text-muted)]"
      aria-label={`Раздел ${n} из ${total}`}
    >
      § {String(n).padStart(2, "0")}{" "}
      <span className="mx-2 opacity-40">/</span> {total}
    </div>
  );
}

export function KickerLine({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="h-px w-[18px] bg-[var(--dd-action-copper)]" aria-hidden />
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-copper)]">
        {children}
      </span>
    </div>
  );
}

export function DdH2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[clamp(32px,3.2vw,44px)] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--dd-text-primary)] ${className}`}
    >
      {children}
    </h2>
  );
}

export function DdH3({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`text-[clamp(22px,2vw,28px)] font-bold tracking-[-0.02em] text-[var(--dd-text-primary)] ${className}`}>
      {children}
    </h3>
  );
}

export function DdSub({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <p className={`text-[17px] leading-[1.6] text-[var(--dd-text-secondary)] ${className}`} style={style}>
      {children}
    </p>
  );
}

export function DdLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-text-muted)] ${className}`}>
      {children}
    </span>
  );
}

export function FlowPath({
  steps,
  activeIndex = 2
}: {
  steps: readonly string[];
  activeIndex?: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2" style={{ rowGap: 10 }}>
      {steps.map((step, index) => {
        const isActive = index <= activeIndex;
        const lineActive = index < activeIndex;
        return (
          <span key={step} className="inline-flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 text-[13px] ${
                isActive ? "text-[var(--dd-text-primary)]" : "text-[var(--dd-text-muted)]"
              }`}
            >
              <span
                className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                style={{
                  background: isActive ? "var(--dd-action-copper)" : "var(--dd-border-steel)"
                }}
                aria-hidden
              />
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span
                aria-hidden
                className="inline-block h-px w-6 shrink-0"
                style={{
                  background: lineActive ? "var(--dd-action-copper)" : "var(--dd-border-steel)"
                }}
              />
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

export function PrimaryBtn({
  children,
  href,
  className = "",
  ...props
}: {
  children: ReactNode;
  href: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[12px] bg-[var(--dd-action-copper)] px-7 py-3.5 text-[15px] font-bold text-[#F5F7FB] no-underline transition-colors hover:bg-[var(--dd-action-copper-hover)] hover:shadow-[var(--dd-shadow-copper-action)] ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function SecondaryBtn({
  children,
  href,
  className = "",
  ...props
}: {
  children: ReactNode;
  href: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[12px] border-[1.5px] border-[var(--dd-action-steel-blue)] bg-transparent px-[26px] py-3.5 text-[15px] font-semibold text-[var(--dd-action-steel-blue)] no-underline transition-colors hover:border-[var(--dd-text-primary)] hover:text-[var(--dd-text-primary)] ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function BtnArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
      <path
        d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CopperCheckIcon({ className = "mt-1 shrink-0" }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden className={className}>
      <path
        d="M2.5 6.5 5 9 10.5 3.5"
        stroke="var(--dd-action-copper)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SteelCheckIcon({ className = "mt-1 shrink-0" }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden className={className}>
      <path
        d="M2.5 6.5 5 9 10.5 3.5"
        stroke="var(--dd-action-steel-blue)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PingDot() {
  return (
    <span className="relative flex h-1.5 w-1.5 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--dd-success)] opacity-75" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--dd-success)]" />
    </span>
  );
}
