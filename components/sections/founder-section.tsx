import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { DdLabel, SectionFrame, SectionIndex } from "@/components/sections/dd-ui";

const metrics = [
  { v: "10+", l: "проектов собрано" },
  { v: "4", l: "ниши экспертизы" },
  { v: "2 / квартал", l: "новых клиента" }
] as const;

export function FounderSection() {
  return (
    <SectionFrame id="founder" bg="#080C12" fadeTo="#05070A" style={{ minHeight: 1000 }}>
      <div className="grid min-h-[1000px] grid-cols-1 lg:grid-cols-[45%_55%]">
        <div className="relative min-h-[360px] overflow-hidden bg-[#0b0e14] lg:min-h-[1000px]">
          <Image
            src="/images/vitaly-founder-light.webp"
            alt="Виталий Тимошенко"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority={false}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,12,18,.18) 0%, rgba(8,12,18,0) 30%, rgba(8,12,18,.45) 100%)",
              mixBlendMode: "multiply"
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(to right, transparent 70%, #080C12 100%)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(8,12,18,.35) 0%, transparent 22%)" }}
            aria-hidden
          />
          <div className="absolute bottom-10 left-10 z-[2] flex flex-col gap-1.5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--dd-text-muted)]">
              Frame 12 / 13 · founder
            </p>
            <p className="text-sm text-[var(--dd-text-secondary)]">Студия · 2026</p>
          </div>
          <p className="absolute right-14 top-10 z-[2] text-right font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
            Σ · ClientFlow System
          </p>
        </div>

        <div className="flex max-w-[780px] flex-col gap-8 px-6 pb-20 pt-24 md:px-20 lg:px-20 lg:pb-20 lg:pt-[300px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[22px] bg-[var(--dd-action-copper)]" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-copper)]">
              Основатель · § 12
            </span>
            <span className="flex-1" />
            <SectionIndex n={12} />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-[clamp(48px,5vw,64px)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[var(--dd-text-primary)]">
              Виталий
              <br />
              Тимошенко.
            </h2>
            <p className="mt-2 text-base text-[var(--dd-text-secondary)]">
              Основатель «Делаем&nbsp;Диджитал» · ведёт каждый проект лично.
            </p>
          </div>

          <blockquote className="m-0 max-w-[560px] border-l-2 border-[var(--dd-action-copper)] pl-[22px] text-[22px] font-medium leading-[1.35] tracking-[-0.015em] text-[var(--dd-text-primary)]">
            «Клиенты теряются не в инструментах — а между ними. Моя задача: собрать маршрут, который довозит человека
            до заявки, а не просто создаёт трафик.»
          </blockquote>

          <p className="max-w-[560px] text-base leading-[1.7] text-[var(--dd-text-secondary)]">
            До «Делаем Диджитал» — опыт в digital-маркетинге и IT-продуктах. Специализация: B2B-сегмент, услуги с
            высоким чеком, сложные ниши. Методология ClientFlow System — собственная разработка на основе реальных
            проектов.
          </p>

          <div className="grid max-w-[560px] grid-cols-1 gap-8 border-y border-[var(--dd-border-steel)] py-6 sm:grid-cols-3">
            {metrics.map((s) => (
              <div key={s.l} className="flex flex-col gap-1">
                <span className="text-[28px] font-bold tracking-[-0.025em] text-[var(--dd-text-primary)]">{s.v}</span>
                <DdLabel className="normal-case tracking-[0.04em]">{s.l}</DdLabel>
              </div>
            ))}
          </div>

          <div className="flex max-w-[560px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="flex flex-col gap-1">
              <DdLabel className="tracking-[0.14em]">написать лично</DdLabel>
              <a
                href={`mailto:${siteConfig.email}`}
                className="border-b border-[var(--dd-action-copper)] pb-0.5 text-base font-medium text-[var(--dd-text-primary)] no-underline"
                data-analytics-event="email_contact_click"
                data-analytics-label="founder_email"
                data-analytics-value={siteConfig.email}
              >
                {siteConfig.email}
              </a>
            </div>
            <svg width="120" height="48" viewBox="0 0 120 48" className="opacity-70" aria-hidden>
              <path
                d="M4 32 C 12 8, 22 8, 28 28 C 32 38, 40 36, 42 22 C 44 10, 52 8, 56 22 S 70 38, 78 22 C 82 14, 92 12, 100 24 L 116 24"
                stroke="var(--dd-action-copper)"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M88 36 L 104 36" stroke="var(--dd-action-copper)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
