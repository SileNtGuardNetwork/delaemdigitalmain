"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import styles from "@/components/sections/hero-section.module.css";

const flowSteps = ["Трафик", "Сайт", "AI-квалификация", "Заявка", "Аналитика"] as const;

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#05070A] font-[family-name:var(--font-onest),Onest,sans-serif]"
    >
      {/* Portrait — desktop: right column; mobile: faint background */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-[1] h-full w-[58%] max-md:opacity-[0.18] max-md:blur-[2px]"
        aria-hidden
      >
        <Image
          src="/images/vitaly-hero-cinematic.webp"
          alt=""
          fill
          className="object-cover object-[center_top]"
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #05070A 0%, #05070A 18%, rgba(5,7,10,.75) 52%, transparent 100%)"
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto flex min-h-screen max-w-[1360px] flex-col justify-center px-6 py-20 md:grid md:grid-cols-[45%_1fr] md:items-center md:gap-12 md:px-[60px] md:py-24">
        {/* Left column — copy + CTAs + flow */}
        <div className="flex flex-col gap-8 md:gap-10">
          <p
            className={`${styles.fadeUp} ${styles.delay0} m-0 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#B8794B]`}
          >
            Виталий Тимошенко · основатель Делаем Диджитал
          </p>

          <h1
            className={`${styles.fadeUp} ${styles.delay1} m-0 max-w-[560px] text-[clamp(36px,8vw,48px)] font-extrabold leading-[1.04] tracking-[-0.035em] md:text-[clamp(44px,4.2vw,68px)]`}
          >
            <span className="block text-[#F5F7FB]">Собираю бизнесу</span>
            <span className="block text-[#F5F7FB]">управляемую систему</span>
            <span className="block text-[#5F8ED8]">привлечения клиентов</span>
          </h1>

          <p
            className={`${styles.fadeUp} ${styles.delay2} m-0 max-w-[480px] text-base font-normal leading-[1.6] text-[#B8C1CE]`}
          >
            Для владельцев бизнеса и экспертов, которым нужен не набор digital-инструментов, а понятный маршрут от
            первого касания до заявки.
          </p>

          <div className={`${styles.fadeUp} ${styles.delay3} flex flex-wrap items-center gap-3.5`}>
            <a
              href="#contacts"
              className={`${styles.primaryBtn} inline-flex items-center justify-center rounded-xl bg-[#B8794B] px-7 py-3.5 text-[15px] font-bold text-[#F5F7FB] no-underline transition-colors`}
              data-analytics-event="cta_primary_click"
              data-analytics-label="hero_primary"
              data-analytics-value="#contacts"
            >
              Разбор системы
            </a>
            <a
              href={siteConfig.telegramChannelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-[1.5px] border-[#B8794B] bg-transparent px-[26px] py-3.5 text-[15px] font-semibold text-[#B8794B] no-underline transition-colors hover:bg-[rgba(184,121,75,0.08)]"
              data-analytics-event="telegram_channel_click"
              data-analytics-label="hero_telegram_channel"
              data-analytics-value={siteConfig.telegramChannelUrl}
            >
              Telegram-канал
            </a>
          </div>

          <div
            className={`${styles.fadeUp} ${styles.delay4} flex flex-wrap items-center gap-0`}
            aria-label="Маршрут: Трафик, Сайт, AI-квалификация, Заявка, Аналитика"
          >
            {flowSteps.map((label, index) => {
              const isActive = index === 0;

              return (
                <span key={label} className="inline-flex items-center">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="block h-2.5 w-2.5 shrink-0 rounded-full"
                      style={
                        isActive
                          ? {
                              background: "#5F8ED8",
                              boxShadow: "0 0 0 4px rgba(95,142,216,0.2)"
                            }
                          : {
                              background: "transparent",
                              border: "1.5px solid rgba(148,163,184,0.3)"
                            }
                      }
                      aria-hidden
                    />
                    <span className="text-xs text-[#7F8B9C]">{label}</span>
                  </span>
                  {index < flowSteps.length - 1 ? (
                    <span
                      className="mx-2 block h-px w-6 shrink-0 md:w-8"
                      style={{ background: "rgba(95,142,216,0.4)" }}
                      aria-hidden
                    />
                  ) : null}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right grid cell — photo sits behind (absolute) */}
        <div className="hidden min-h-[1px] md:block" aria-hidden />
      </div>
    </section>
  );
}
