"use client";

import { FormEvent, useState } from "react";
import {
  BtnArrow,
  DdContainer,
  DdLabel,
  DdSub,
  PrimaryBtn,
  RimLight,
  SecondaryBtn,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

const interestChips = [
  { l: "Аудит ClientFlow", value: "audit" },
  { l: "Посадочная", value: "site" },
  { l: "Поток заявок", value: "traffic" },
  { l: "Система", value: "system" }
] as const;

const inputClass =
  "w-full rounded-[var(--dd-radius-sm)] border border-[var(--dd-border-steel)] bg-[rgba(8,12,18,.5)] px-3.5 py-2.5 text-sm text-[var(--dd-text-primary)] placeholder:text-[var(--dd-text-muted)] focus:border-[var(--dd-action-copper)] focus:outline-none";

export function FinalCtaSection() {
  const [interest, setInterest] = useState<string>("audit");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("lead form stub", Object.fromEntries(formData.entries()));
  }

  return (
    <SectionFrame id="contacts" bg="#05070A" style={{ minHeight: 820 }}>
      <RimLight style={{ left: "50%", top: "40%", transform: "translate(-50%, -50%)", opacity: 0.55 }} />

      <DdContainer className="relative pb-12 pt-[120px]">
        <div className="grid min-h-[460px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-px w-[18px] bg-[var(--dd-action-copper)]" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-copper)]">
                Следующий шаг · § 13
              </span>
            </div>

            <h2 className="max-w-[700px] text-[clamp(40px,4.5vw,60px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[var(--dd-text-primary)]">
              Соберите digital в систему,
              <br />
              которая{" "}
              <span className="text-[var(--dd-diagnostic-blue)]">ведёт клиента к заявке</span>.
            </h2>

            <DdSub className="max-w-[560px]">
              Начните с консультации, если уже готовы обсуждать проект. Или пройдите ClientFlow Аудит, если хотите
              сначала увидеть слабые места вашей системы.
            </DdSub>

            <div className="mt-2 flex flex-wrap items-center gap-3.5">
              <PrimaryBtn
                href="#contacts"
                className="px-8 py-4 text-base"
                data-analytics-event="cta_primary_click"
                data-analytics-label="final_cta_primary"
                data-analytics-value="#contacts"
              >
                Разбор системы
                <BtnArrow />
              </PrimaryBtn>
              <SecondaryBtn
                href="#audit"
                className="px-[26px] py-[15px]"
                data-analytics-event="cta_secondary_click"
                data-analytics-label="final_cta_audit"
                data-analytics-value="#audit"
              >
                ClientFlow Аудит
              </SecondaryBtn>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-[18px] text-[13px] text-[var(--dd-text-muted)]">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--dd-success)]" aria-hidden />
                Принимаем 2 проекта в квартал
              </span>
              <span className="h-3.5 w-px bg-[var(--dd-border-steel)]" aria-hidden />
              <span>Ответим в течение рабочего дня</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[18px] rounded-[var(--dd-radius-md)] border border-[var(--dd-border-cool)] p-7"
            style={{
              background: "var(--dd-surface-control)",
              boxShadow: "var(--dd-shadow-panel)"
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-steel-blue)]">
                ↳ форма заявки
              </span>
              <span className="font-mono text-[11px] tracking-[0.12em] text-[var(--dd-text-muted)]">30 сек.</span>
            </div>

            <hr className="border-0 border-t border-[var(--dd-border-steel)]" />

            <label className="flex flex-col gap-1.5">
              <DdLabel className="tracking-[0.14em]">Имя</DdLabel>
              <input className={inputClass} type="text" name="name" placeholder="Алексей" required />
            </label>
            <label className="flex flex-col gap-1.5">
              <DdLabel className="tracking-[0.14em]">Email</DdLabel>
              <input className={inputClass} type="email" name="email" placeholder="a.petrov@company.ru" required />
            </label>
            <label className="flex flex-col gap-1.5">
              <DdLabel className="tracking-[0.14em]">Сайт компании (опционально)</DdLabel>
              <input className={inputClass} type="url" name="website" placeholder="delaem.digital" />
            </label>

            <div className="flex flex-col gap-2">
              <DdLabel className="tracking-[0.14em]">Что интересует</DdLabel>
              <div className="flex flex-wrap gap-2">
                {interestChips.map((chip) => {
                  const active = interest === chip.value;
                  return (
                    <button
                      key={chip.value}
                      type="button"
                      onClick={() => setInterest(chip.value)}
                      className="rounded-full px-3 py-1.5 text-xs font-semibold transition-colors"
                      style={{
                        border: active ? "1px solid rgba(184,121,75,.5)" : "1px solid var(--dd-border-steel)",
                        background: active ? "rgba(184,121,75,.1)" : "rgba(8,12,18,.5)",
                        color: active ? "var(--dd-action-copper)" : "var(--dd-text-secondary)"
                      }}
                    >
                      {chip.l}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="interest" value={interest} />
            </div>

            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-[12px] bg-[var(--dd-action-copper)] py-3.5 text-[15px] font-bold text-[#F5F7FB] transition-colors hover:bg-[var(--dd-action-copper-hover)]"
            >
              Отправить заявку
              <BtnArrow />
            </button>
            <p className="text-center text-[11px] leading-[1.5] text-[var(--dd-text-muted)]">
              Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.
            </p>
          </form>
        </div>

        <div className="absolute right-6 top-[120px] hidden lg:block">
          <SectionIndex n={13} />
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
