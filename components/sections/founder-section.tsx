import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { SectionKicker } from "@/components/sections/section-ui";

const metrics = [
  { value: "10+", label: "проектов собрано" },
  { value: "4", label: "ниши экспертизы" },
  { value: "2 / квартал", label: "новых клиента" }
] as const;

export function FounderSection() {
  return (
    <section className="grid min-h-[600px] grid-cols-1 bg-[var(--dd-canvas-obsidian)] font-[family-name:var(--dd-font-primary)] lg:grid-cols-[45%_55%]">
      <div className="relative min-h-[320px] overflow-hidden lg:min-h-[600px]">
        <Image
          src="/images/vitaly-founder-light.webp"
          alt="Виталий Тимошенко — основатель Делаем Диджитал"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--dd-canvas-obsidian)]"
          style={{ background: "linear-gradient(to right, transparent 60%, var(--dd-canvas-obsidian) 100%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(8,12,18,0.6) 100%)" }}
          aria-hidden
        />
        <p className="absolute bottom-6 left-6 font-mono text-[11px] uppercase tracking-[0.12em] text-white/35">
          В. Тимошенко · Студия · 2026
        </p>
      </div>

      <div className="flex flex-col justify-center px-6 py-16 md:px-[60px] md:py-20">
        <SectionKicker>Основатель · §12</SectionKicker>
        <h2 className="text-[clamp(40px,4vw,56px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--dd-text-primary)]">
          Виталий
          <br />
          Тимошенко.
        </h2>
        <p className="mt-4 text-base text-[var(--dd-text-secondary)]">
          Основатель «Делаем Диджитал» · ведёт каждый проект лично.
        </p>

        <blockquote className="mt-8 border-l-[3px] border-[var(--dd-action-copper)] pl-5 text-[17px] italic leading-[1.6] text-[var(--dd-text-primary)]">
          «Клиенты теряются не в инструментах — а между ними. Моя задача: собрать маршрут, который довозит
          человека до заявки, а не просто создаёт трафик.»
        </blockquote>

        <p className="mt-6 text-[15px] leading-[1.6] text-[var(--dd-text-secondary)]">
          До «Делаем Диджитал» — опыт в digital-маркетинге и IT-продуктах. Специализация: B2B-сегмент, услуги с
          высоким чеком, сложные ниши. Методология ClientFlow System — собственная разработка.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-[32px] font-extrabold text-[var(--dd-text-primary)]">{metric.value}</p>
              <p className="mt-1 text-xs text-[var(--dd-text-muted)]">{metric.label}</p>
            </div>
          ))}
        </div>

        <a
          href={siteConfig.telegramContactUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block text-sm text-[var(--dd-action-steel-blue)] no-underline transition-colors duration-200 hover:text-[var(--dd-text-primary)]"
          data-analytics-event="telegram_contact_click"
          data-analytics-label="founder_contact"
          data-analytics-value={siteConfig.telegramContactUrl}
        >
          написать лично →
        </a>
      </div>
    </section>
  );
}
