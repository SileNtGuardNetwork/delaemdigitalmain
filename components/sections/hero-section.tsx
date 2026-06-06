"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import styles from "@/components/sections/hero-section.module.css";

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
            Виталий Тимошенко · digital-архитектор · Делаем Диджитал
          </p>

          <h1
            className={`${styles.fadeUp} ${styles.delay1} m-0 max-w-[600px] text-[clamp(32px,7vw,44px)] font-extrabold leading-[1.06] tracking-[-0.035em] md:text-[clamp(40px,3.8vw,56px)]`}
          >
            <span className="block text-[#F5F7FB]">Premium digital that looks expensive</span>
            <span className="block text-[#5F8ED8]">and brings leads</span>
          </h1>

          <p
            className={`${styles.fadeUp} ${styles.delay2} m-0 max-w-[520px] text-base font-normal leading-[1.6] text-[#B8C1CE]`}
          >
            Проектирую сайты и digital-системы для бизнеса, которому нужен не просто дизайн, а управляемый вход в
            продажи: сайт, заявки, AI, Telegram и аналитика.
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

          <p
            className={`${styles.fadeUp} ${styles.delay4} m-0 max-w-[480px] text-[13px] leading-[1.55] text-[#7F8B9C]`}
          >
            Лично отвечаю за архитектуру, визуальный уровень и связку сайта с обработкой заявок.
          </p>
        </div>

        {/* Right grid cell — photo sits behind (absolute) */}
        <div className="hidden min-h-[1px] md:block" aria-hidden />
      </div>
    </section>
  );
}
