"use client";

import { useState } from "react";
import {
  CopperCheckIcon,
  DdContainer,
  DdH2,
  DdLabel,
  DdSub,
  PrimaryBtn,
  SectionFrame,
  SectionIndex,
  SteelCheckIcon
} from "@/components/sections/dd-ui";

type TierId = "site" | "flow" | "system";

const tiers = [
  {
    id: "site" as const,
    kicker: "Уровень 01",
    title: "Делаем Сайт",
    subtitle: "Одна посадочная под одну задачу",
    time: "3–4 недели",
    from: "от 150 000 ₽",
    includes: ["Оффер и структура", "Дизайн + вёрстка", "Базовая аналитика", "Тест на 1–2 каналах"],
    fit: "Когда нужна быстрая точка приземления для одной кампании.",
    cta: "Обсудить сайт",
    href: "?service=delaem-site&source=services#contacts"
  },
  {
    id: "flow" as const,
    kicker: "Уровень 02 · Чаще выбирают",
    title: "Делаем Трафик",
    subtitle: "Связка трафик → сайт → CRM",
    time: "6–8 недель",
    from: "от 250 000 ₽",
    includes: [
      "Всё из «Посадочной»",
      "Три канала трафика",
      "Квалификация и CRM-маршрут",
      "Сквозная аналитика",
      "Серии дожима"
    ],
    fit: "Когда нужен предсказуемый объём заявок месяц-в-месяц.",
    cta: "Обсудить трафик",
    href: "?service=delaem-traffic&source=services#contacts"
  },
  {
    id: "system" as const,
    kicker: "Уровень 03",
    title: "Делаем Систему",
    subtitle: "Все семь компонентов под ключ",
    time: "10–14 недель",
    from: "от 350 000 ₽",
    includes: [
      "Всё из «Потока»",
      "AI-квалификация заявок",
      "Регламенты и обучение продаж",
      "Спринт-цикл оптимизации",
      "Сопровождение 6 мес."
    ],
    fit: "Когда выручка зависит от системы привлечения целиком.",
    cta: "Собрать систему",
    href: "?service=delaem-system&source=services#contacts"
  }
] as const;

export function ServicesSection() {
  const [picked, setPicked] = useState<TierId>("flow");
  const selected = tiers.find((t) => t.id === picked) ?? tiers[1];

  return (
    <SectionFrame id="services" bg="#080C12" style={{ height: 880 }}>
      <DdContainer className="py-24">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex max-w-[760px] flex-col gap-[18px]">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-px w-[18px] bg-[var(--dd-action-copper)]" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-text-muted)]">
                Услуги · § 06
              </span>
            </div>
            <DdH2>
              Три масштаба.
              <br />
              Один подход.
            </DdH2>
            <DdSub className="max-w-[620px]">
              Заходим в проект ровно на тот объём, который сейчас закрывает узкое место. Расти можно поэтапно —
              без переделок и без скрытых доплат.
            </DdSub>
          </div>
          <SectionIndex n={6} />
        </div>

        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {tiers.map((tier) => {
            const active = picked === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setPicked(tier.id)}
                className="flex min-h-[540px] cursor-pointer flex-col gap-[22px] rounded-[var(--dd-radius-lg)] p-7 text-left font-[family-name:var(--dd-font-primary)] transition-[transform,background,border-color,box-shadow] duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dd-action-copper)]"
                style={{
                  background: active ? "rgba(14,22,34,.85)" : "var(--dd-surface-obsidian)",
                  border: active ? "1px solid rgba(184,121,75,.55)" : "1px solid var(--dd-border-steel)",
                  boxShadow: active ? "0 16px 42px rgba(184,121,75,.18)" : "var(--dd-shadow-subtle)"
                }}
                aria-pressed={active}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: active ? "var(--dd-action-copper)" : "var(--dd-text-muted)" }}
                  >
                    {tier.kicker}
                  </span>
                  <span
                    className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full"
                    style={{
                      border: active
                        ? "1.5px solid var(--dd-action-copper)"
                        : "1.5px solid var(--dd-border-steel)"
                    }}
                    aria-hidden
                  >
                    {active ? (
                      <span className="h-2 w-2 rounded-full bg-[var(--dd-action-copper)]" />
                    ) : null}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[30px] font-bold tracking-[-0.025em] text-[var(--dd-text-primary)]">
                    {tier.title}
                  </div>
                  <p className="text-[15px] text-[var(--dd-text-secondary)]">{tier.subtitle}</p>
                </div>

                <div
                  className="grid grid-cols-2 gap-3.5 border-y border-[var(--dd-border-steel)] py-3.5"
                >
                  <div className="flex flex-col gap-1">
                    <DdLabel className="tracking-[0.14em]">срок</DdLabel>
                    <span className="text-lg font-semibold text-[var(--dd-text-primary)]">{tier.time}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <DdLabel className="tracking-[0.14em]">стоимость</DdLabel>
                    <span className="text-lg font-semibold text-[var(--dd-text-primary)]">{tier.from}</span>
                  </div>
                </div>

                <ul className="flex flex-1 flex-col gap-2.5">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[var(--dd-text-secondary)]"
                    >
                      {active ? <CopperCheckIcon /> : <SteelCheckIcon />}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-steel)] p-3 text-xs leading-normal text-[var(--dd-text-muted)]"
                  style={{ background: "rgba(8,12,18,.55)" }}
                >
                  {tier.fit}
                </div>
              </button>
            );
          })}
        </div>

        <div
          className="mt-7 flex flex-col items-start justify-between gap-4 rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-steel)] px-5 py-3.5 sm:flex-row sm:items-center"
          style={{ background: "rgba(8,12,18,.5)" }}
        >
          <p className="text-[13px] text-[var(--dd-text-muted)]">
            <span className="text-[var(--dd-text-secondary)]">Выбрано:</span>{" "}
            <span className="font-semibold text-[var(--dd-action-copper)]">{selected.title}</span> — первый созвон
            бесплатный, 40 минут.
          </p>
          <PrimaryBtn
            href={selected.href}
            className="shrink-0 px-6 py-3 text-sm"
            data-analytics-event="services_cta_click"
            data-analytics-label={selected.title}
            data-analytics-value={selected.from}
          >
            {selected.cta}
          </PrimaryBtn>
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
