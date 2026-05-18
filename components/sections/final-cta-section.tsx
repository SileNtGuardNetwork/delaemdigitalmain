"use client";

import { FormEvent } from "react";
import { SectionKicker } from "@/components/sections/section-ui";

const inputClass =
  "w-full rounded-xl border border-[var(--dd-border-steel)] bg-[rgba(8,12,18,0.8)] px-4 py-3 text-sm text-[var(--dd-text-primary)] placeholder:text-[var(--dd-text-muted)] focus:border-[var(--dd-action-copper)] focus:outline-none";

export function FinalCtaSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("lead form stub", Object.fromEntries(formData.entries()));
  }

  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-[#030507] px-6 py-[120px] text-center font-[family-name:var(--dd-font-primary)] md:px-[60px]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 700px 500px at 50% 0%, rgba(184,121,75,0.08) 0%, transparent 70%)"
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(184,121,75,0.35)] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[720px]">
        <SectionKicker>Следующий шаг</SectionKicker>
        <h2 className="text-[clamp(40px,4.5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--dd-text-primary)]">
          Соберите digital в систему,
          <br />
          которая ведёт клиента <span className="text-[#5f8ed8]">к заявке.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.6] text-[var(--dd-text-secondary)]">
          Начните с консультации, если уже готовы обсуждать проект. Или пройдите ClientFlow Аудит — увидите слабые
          места вашей системы.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contacts"
            className="rounded-xl bg-[var(--dd-action-copper)] px-7 py-3.5 text-sm font-bold text-[#F5F7FB] no-underline transition-colors hover:bg-[var(--dd-action-copper-hover)]"
            data-analytics-event="cta_primary_click"
            data-analytics-label="final_cta_primary"
            data-analytics-value="#contacts"
          >
            Разбор системы →
          </a>
          <a
            href="#audit"
            className="rounded-xl border-[1.5px] border-[var(--dd-action-copper)] px-7 py-3.5 text-sm font-semibold text-[var(--dd-action-copper)] no-underline transition-colors hover:bg-[rgba(184,121,75,0.08)]"
            data-analytics-event="cta_secondary_click"
            data-analytics-label="final_cta_audit"
            data-analytics-value="#audit"
          >
            ClientFlow Аудит
          </a>
        </div>

        <p className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[var(--dd-text-muted)]">
          <span>Принимаем 2 проекта в квартал</span>
          <span aria-hidden>·</span>
          <span>Ответим в течение рабочего дня</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 flex max-w-[480px] flex-col gap-4 rounded-[20px] border border-[var(--dd-border-cool)] bg-[rgba(12,17,25,0.7)] p-8 text-left"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dd-text-muted)]">
            форма заявки
          </p>
          <input className={inputClass} type="text" name="name" placeholder="Имя" required />
          <input className={inputClass} type="tel" name="phone" placeholder="Телефон" required />
          <input className={inputClass} type="url" name="website" placeholder="Сайт компании (опционально)" />
          <select className={inputClass} name="interest" defaultValue="" required>
            <option value="" disabled>
              Что интересует
            </option>
            <option value="audit">Аудит ClientFlow</option>
            <option value="site">Делаем Сайт</option>
            <option value="traffic">Делаем Трафик</option>
            <option value="system">Делаем Систему</option>
          </select>
          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--dd-action-copper)] py-[15px] text-sm font-bold text-[#F5F7FB] transition-colors hover:bg-[var(--dd-action-copper-hover)]"
          >
            Отправить заявку →
          </button>
          <p className="text-center text-[11px] text-[var(--dd-text-muted)]">
            Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных
          </p>
        </form>
      </div>
    </section>
  );
}
