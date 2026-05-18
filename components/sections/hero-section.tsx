"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const steps = [
  "Трафик",
  "Сайт",
  "AI-квалификация",
  "Заявка",
  "Обработка",
  "Аналитика",
  "Улучшение"
] as const;

const activeIndex = 2;

const primaryBtnStyle: CSSProperties = {
  background: "var(--dd-action-copper)",
  color: "#F5F7FB",
  border: "none",
  borderRadius: 12,
  padding: "14px 28px",
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none"
};

const secondaryBtnStyle: CSSProperties = {
  background: "transparent",
  color: "var(--dd-action-steel-blue)",
  border: "1.5px solid var(--dd-action-steel-blue)",
  borderRadius: 12,
  padding: "14px 26px",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  textDecoration: "none"
};

export function HeroSection() {
  return (
    <section
      id="top"
      style={{ position: "relative", background: "#05070A", minHeight: 900, overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          right: -260,
          top: -220,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(92,132,180,0.18) 0%, transparent 70%)",
          pointerEvents: "none"
        }}
        aria-hidden
      />
      <div
        style={{
          position: "absolute",
          left: -340,
          bottom: -300,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(92,132,180,0.11) 0%, transparent 70%)",
          pointerEvents: "none",
          opacity: 0.6
        }}
        aria-hidden
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "56%",
          overflow: "hidden",
          zIndex: 1
        }}
        className="relative"
      >
        <Image
          src="/images/vitaly-hero-cinematic.webp"
          alt="Виталий Тимошенко"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
          sizes="56vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,12,18,.22) 0%, rgba(8,12,18,.05) 32%, rgba(8,12,18,.55) 100%)",
            mixBlendMode: "multiply",
            pointerEvents: "none"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #05070A 0%, #05070A 12%, rgba(5,7,10,.85) 32%, rgba(5,7,10,.4) 56%, transparent 90%)",
            pointerEvents: "none"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(5,7,10,.55) 0%, transparent 22%, transparent 78%, rgba(5,7,10,.85) 100%)",
            pointerEvents: "none"
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1360,
          margin: "0 auto",
          padding: "168px 60px 72px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          minHeight: 900
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 36, justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 22, height: 1, background: "var(--dd-action-copper)", display: "block" }} />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--dd-action-copper)"
                }}
              >
                Виталий Тимошенко · основатель Делаем Диджитал
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 3.8vw, 58px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                maxWidth: 560,
                margin: 0
              }}
            >
              <span style={{ color: "#F5F7FB", display: "block" }}>Собираю бизнесу управляемую систему</span>
              <span style={{ color: "#5F8ED8", display: "block" }}>привлечения клиентов.</span>
            </h1>

            <p
              style={{
                fontSize: 17,
                color: "var(--dd-text-secondary)",
                maxWidth: 480,
                lineHeight: 1.6,
                margin: 0
              }}
            >
              Для предпринимателей, которым нужен не набор digital-инструментов, а понятный маршрут от первого
              касания до заявки.
            </p>

            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <a
                href="#contacts"
                style={primaryBtnStyle}
                data-analytics-event="cta_primary_click"
                data-analytics-label="hero_primary"
                data-analytics-value="#contacts"
              >
                Разбор системы
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href={siteConfig.telegramChannelUrl}
                target="_blank"
                rel="noreferrer"
                style={secondaryBtnStyle}
                data-analytics-event="telegram_channel_click"
                data-analytics-label="hero_telegram_channel"
                data-analytics-value={siteConfig.telegramChannelUrl}
              >
                Telegram-канал
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 24, color: "var(--dd-text-muted)", fontSize: 13 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--dd-success)",
                    display: "block"
                  }}
                />
                Принимаем 2 проекта в квартал
              </span>
              <span style={{ width: 1, height: 14, background: "var(--dd-border-steel)", display: "block" }} />
              <span>Методология ClientFlow System</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--dd-text-muted)"
              }}
            >
              Замкнутый маршрут
            </div>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0, rowGap: 10 }}>
              {steps.map((step, i) => (
                <span key={step} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      color: i <= activeIndex ? "#F5F7FB" : "var(--dd-text-muted)"
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: i <= activeIndex ? "var(--dd-action-copper)" : "var(--dd-text-muted)",
                        display: "block"
                      }}
                    />
                    {step}
                  </span>
                  {i < steps.length - 1 ? (
                    <span
                      style={{
                        width: 24,
                        height: 1,
                        background: i < activeIndex ? "var(--dd-action-copper)" : "rgba(148,163,184,0.2)",
                        display: "block",
                        margin: "0 6px"
                      }}
                    />
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 8,
              fontSize: 11,
              color: "var(--dd-text-muted)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "monospace"
            }}
          >
            SYS · 01 / 13 · HERO
          </div>
          <div style={{ position: "absolute", right: 0, bottom: 8, textAlign: "right" }}>
            <div style={{ fontSize: 14, color: "var(--dd-text-primary)", fontWeight: 600 }}>Виталий Тимошенко</div>
            <div style={{ fontSize: 12, color: "var(--dd-text-muted)" }}>Архитектор цифровых систем</div>
          </div>
        </div>
      </div>
    </section>
  );
}
