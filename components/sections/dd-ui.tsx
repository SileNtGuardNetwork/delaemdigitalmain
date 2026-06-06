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

/** Flagship width for rebuilt sections — uses --dd-container-flagship, not legacy --container. */
export function FlagshipContainer({
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
      className={`relative mx-auto w-full max-w-[var(--dd-container-flagship)] px-6 md:px-[60px] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function DdEyebrow({
  children,
  tone = "steel"
}: {
  children: ReactNode;
  tone?: "steel" | "copper" | "muted";
}) {
  const styles = {
    steel: {
      color: "var(--dd-action-steel-blue)",
      border: "1px solid rgba(113,151,198,.28)",
      background: "rgba(14,22,34,.5)"
    },
    copper: {
      color: "var(--dd-action-copper)",
      border: "1px solid rgba(184,121,75,.32)",
      background: "rgba(184,121,75,.06)"
    },
    muted: {
      color: "var(--dd-text-muted)",
      border: "1px solid var(--dd-border-steel)",
      background: "rgba(8,12,18,.45)"
    }
  }[tone];

  return (
    <span
      className="inline-flex items-center rounded-[10px] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
      style={styles}
    >
      {children}
    </span>
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
  activeIndex = 2,
  variant = "copper",
  stackOnMobile = false
}: {
  steps: readonly string[];
  activeIndex?: number;
  variant?: "copper" | "blue";
  /** Vertical list below md — clearer on 390/430 viewports */
  stackOnMobile?: boolean;
}) {
  const accent = variant === "blue" ? "var(--dd-diagnostic-blue)" : "var(--dd-action-copper)";

  const renderStep = (step: string, index: number, vertical?: boolean) => {
    const isActive = index <= activeIndex;
    const lineActive = index < activeIndex;

    return (
      <span key={step} className={vertical ? "flex items-center gap-2.5" : "inline-flex items-center gap-2"}>
        <span
          className={`inline-flex items-center gap-2 text-[13px] ${
            isActive ? "text-[var(--dd-text-primary)]" : "text-[var(--dd-text-muted)]"
          }`}
        >
          <span
            className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
            style={{
              background: isActive ? accent : "var(--dd-border-steel)"
            }}
            aria-hidden
          />
          {step}
        </span>
        {!vertical && index < steps.length - 1 ? (
          <span
            aria-hidden
            className="inline-block h-px w-6 shrink-0"
            style={{
              background: lineActive ? accent : "var(--dd-border-steel)"
            }}
          />
        ) : null}
      </span>
    );
  };

  if (stackOnMobile) {
    return (
      <>
        <ol className="flex flex-col gap-2 md:hidden">
          {steps.map((step, index) => (
            <li key={step}>{renderStep(step, index, true)}</li>
          ))}
        </ol>
        <div className="hidden flex-wrap items-center gap-2 md:flex" style={{ rowGap: 10 }}>
          {steps.map((step, index) => renderStep(step, index))}
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2" style={{ rowGap: 10 }}>
      {steps.map((step, index) => renderStep(step, index))}
    </div>
  );
}

export function RouteStageCard({
  index,
  title,
  description,
  tools,
  variant = "blue"
}: {
  index: number;
  title: string;
  description: string;
  tools?: string;
  variant?: "blue" | "copper";
}) {
  const marker = variant === "blue" ? "var(--dd-diagnostic-blue)" : "var(--dd-action-copper)";

  return (
    <article
      className="relative flex min-w-0 flex-col gap-2.5 rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-cool)] p-4 md:gap-3 md:p-5"
      style={{ background: "rgba(8,12,18,.55)" }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] font-mono text-[11px] font-semibold"
          style={{
            color: marker,
            border: `1px solid rgba(95,142,216,.35)`,
            background: "rgba(14,22,34,.65)"
          }}
          aria-hidden
        >
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="text-lg font-bold tracking-[-0.02em] text-[var(--dd-text-primary)]">{title}</h3>
      </div>
      <p className="text-[14px] leading-[1.6] text-[var(--dd-text-secondary)]">{description}</p>
      {tools ? (
        <p className="mt-auto border-t border-[rgba(148,163,184,0.08)] pt-3 font-mono text-[11px] tracking-[0.04em] text-[var(--dd-text-muted)]">
          {tools}
        </p>
      ) : null}
    </article>
  );
}

/** Assembly / contour module card — blue system accents */
export function ModuleCard({
  index,
  title,
  description
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <article
      className="flex min-w-0 flex-col gap-3 rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-cool)] p-4 transition-[border-color] duration-200 hover:border-[rgba(113,151,198,.32)] md:p-5"
      style={{ background: "rgba(8,12,18,.55)" }}
    >
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-steel-blue)]">
        module · {String(index).padStart(2, "0")}
      </span>
      <h3 className="text-[17px] font-bold leading-[1.25] tracking-[-0.02em] text-[var(--dd-text-primary)]">
        {title}
      </h3>
      <p className="text-[13px] leading-[1.6] text-[var(--dd-text-secondary)]">{description}</p>
    </article>
  );
}

/** Audit diagnostic preview row — sample report field */
export function DiagnosticReportRow({
  label,
  value,
  emphasis = false
}: {
  label: string;
  value: ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div className="border-b border-[rgba(148,163,184,.08)] py-3.5 last:border-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">{label}</p>
      <p
        className={`mt-1 text-[14px] leading-[1.55] ${
          emphasis ? "font-semibold text-[var(--dd-diagnostic-blue)]" : "text-[var(--dd-text-primary)]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

/** Good-fit audience card */
export function FitCard({
  index,
  title,
  description
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <article
      className="flex min-w-0 flex-col gap-3 rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-cool)] p-4 md:p-5"
      style={{ background: "rgba(8,12,18,.55)" }}
    >
      <div className="flex items-start gap-3">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] font-mono text-[11px] font-semibold text-[var(--dd-diagnostic-blue)]"
          style={{
            border: "1px solid rgba(95,142,216,.35)",
            background: "rgba(14,22,34,.65)"
          }}
          aria-hidden
        >
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="text-[15px] font-bold leading-[1.35] tracking-[-0.02em] text-[var(--dd-text-primary)] md:text-base">
          {title}
        </h3>
      </div>
      <p className="text-[13px] leading-[1.6] text-[var(--dd-text-secondary)]">{description}</p>
    </article>
  );
}

/** Compact not-fit filter panel */
export function FitFilterPanel({
  label,
  items
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <aside
      className="rounded-[var(--dd-radius-md)] border border-[var(--dd-border-steel)] p-5 md:p-6"
      style={{ background: "rgba(8,12,18,.45)" }}
    >
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
        {label}
      </p>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[13px] leading-[1.55] text-[var(--dd-text-secondary)]">
            <span
              className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--dd-text-muted)] opacity-60"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

/** Differentiation comparison column — why section */
export function ComparisonColumn({
  label,
  items,
  variant = "ordinary"
}: {
  label: string;
  items: readonly { title: string; description: string }[];
  variant?: "ordinary" | "clientflow";
}) {
  const isSystem = variant === "clientflow";

  return (
    <article
      className={`flex flex-col gap-5 rounded-[var(--dd-radius-lg)] border p-6 md:gap-6 md:p-8 ${
        isSystem ? "border-[rgba(113,151,198,.28)]" : "border-[var(--dd-border-steel)]"
      }`}
      style={{
        background: isSystem
          ? "linear-gradient(165deg, rgba(14,22,34,.72) 0%, rgba(8,12,18,.65) 100%)"
          : "rgba(8,12,18,.55)"
      }}
    >
      <DdEyebrow tone={isSystem ? "steel" : "muted"}>{label}</DdEyebrow>

      <ol className="flex flex-col gap-4">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 border-t border-[rgba(148,163,184,.08)] pt-4 first:border-0 first:pt-0"
          >
            <div className="flex items-start gap-3">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] font-mono text-[10px] font-semibold"
                style={{
                  color: isSystem ? "var(--dd-diagnostic-blue)" : "var(--dd-text-muted)",
                  border: isSystem
                    ? "1px solid rgba(95,142,216,.35)"
                    : "1px solid var(--dd-border-steel)",
                  background: "rgba(8,12,18,.45)"
                }}
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15px] font-bold leading-[1.35] tracking-[-0.02em] text-[var(--dd-text-primary)] md:text-base">
                {item.title}
              </h3>
            </div>
            <p className="pl-9 text-[13px] leading-[1.6] text-[var(--dd-text-secondary)]">{item.description}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}

/** Process pipeline step — production board */
export function ProcessStepCard({
  index,
  title,
  description
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <article
      className="flex min-w-0 flex-col gap-2.5 rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-cool)] p-4 md:gap-3 md:p-5"
      style={{ background: "rgba(8,12,18,.55)" }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] font-mono text-[11px] font-semibold text-[var(--dd-diagnostic-blue)]"
          style={{
            border: "1px solid rgba(95,142,216,.35)",
            background: "rgba(14,22,34,.65)"
          }}
          aria-hidden
        >
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="text-[15px] font-bold leading-[1.3] tracking-[-0.02em] text-[var(--dd-text-primary)] md:text-base">
          {title}
        </h3>
      </div>
      <p className="text-[13px] leading-[1.6] text-[var(--dd-text-secondary)]">{description}</p>
    </article>
  );
}

/** Process phase band label */
export function PhaseBand({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-steel-blue)]">
          {label}
        </span>
        <div className="h-px flex-1" style={{ background: "rgba(95,142,216,.22)" }} aria-hidden />
      </div>
      {children}
    </div>
  );
}

/** Product ladder card — services section */
export function ProductLadderCard({
  level,
  title,
  price,
  outcome,
  includes,
  fit,
  cta,
  href,
  featured = false,
  ctaVariant = "secondary",
  analyticsLabel,
  analyticsValue
}: {
  level: string;
  title: string;
  price: string;
  outcome: string;
  includes: readonly string[];
  fit: string;
  cta: string;
  href: string;
  featured?: boolean;
  ctaVariant?: "primary" | "secondary";
  analyticsLabel?: string;
  analyticsValue?: string;
}) {
  const Cta = ctaVariant === "primary" ? PrimaryBtn : SecondaryBtn;

  return (
    <article
      className={`flex min-w-0 flex-col gap-5 rounded-[var(--dd-radius-lg)] border p-5 md:gap-6 md:p-6 ${
        featured ? "border-[rgba(95,142,216,.38)]" : "border-[var(--dd-border-cool)]"
      }`}
      style={{
        background: featured
          ? "linear-gradient(165deg, rgba(14,22,34,.78) 0%, rgba(8,12,18,.65) 100%)"
          : "rgba(8,12,18,.55)"
      }}
    >
      <div className="flex flex-col gap-3">
        <span
          className={`font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${
            featured ? "text-[var(--dd-diagnostic-blue)]" : "text-[var(--dd-action-steel-blue)]"
          }`}
        >
          {level}
        </span>
        <h3 className="text-[clamp(22px,2.2vw,28px)] font-bold tracking-[-0.025em] text-[var(--dd-text-primary)]">
          {title}
        </h3>
        <p className="text-[22px] font-bold tracking-[-0.02em] text-[var(--dd-text-primary)]">{price}</p>
        <p className="text-[14px] leading-[1.6] text-[var(--dd-text-secondary)]">{outcome}</p>
      </div>

      <ul className="flex flex-col gap-2 border-t border-[rgba(148,163,184,.08)] pt-4">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[13px] text-[var(--dd-text-secondary)]">
            <span
              className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--dd-action-steel-blue)]"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>

      <p
        className="rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-steel)] p-3 text-[12px] leading-[1.55] text-[var(--dd-text-muted)]"
        style={{ background: "rgba(8,12,18,.45)" }}
      >
        {fit}
      </p>

      <Cta
        href={href}
        className="mt-auto w-full justify-center px-5 py-3 text-[14px] sm:w-auto sm:self-start"
        data-analytics-event="services_cta_click"
        data-analytics-label={analyticsLabel ?? title}
        data-analytics-value={analyticsValue ?? price}
      >
        {cta}
      </Cta>
    </article>
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
