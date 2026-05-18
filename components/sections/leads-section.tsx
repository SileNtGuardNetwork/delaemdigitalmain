import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";
import {
  BtnArrow,
  DdContainer,
  DdLabel,
  PrimaryBtn,
  SecondaryBtn,
  SectionFrame,
  SectionIndex
} from "@/components/sections/dd-ui";

function AuditIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="m17.5 17.5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="4" y="6" width="20" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 11h20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 4v4M19 4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="14" cy="17" r="2.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d="M3.2 13.4 24 4.5l-3.6 18.2c-.3 1.2-1 1.4-2 .9l-5.4-4-2.6 2.5c-.3.3-.5.5-1 .5l.4-5.4 9.6-8.6c.4-.4 0-.6-.6-.2L7.4 15.1l-5-1.5c-1.1-.3-1.1-1 .2-1.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0">
      <path
        d="M2 6h8M6 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type LMCardProps = {
  featured?: boolean;
  kicker: string;
  title: string;
  body: string;
  badge: string;
  cta: string;
  href: string;
  external?: boolean;
  primary?: boolean;
  icon: ReactNode;
};

function LMCard({ featured, kicker, title, body, badge, cta, href, external, primary, icon }: LMCardProps) {
  const ctaButton = primary ? (
    <PrimaryBtn href={href} className="mt-auto w-full justify-center">
      {cta}
      <BtnArrow />
    </PrimaryBtn>
  ) : (
    <SecondaryBtn
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="mt-auto w-full justify-center border-[rgba(184,121,75,0.55)] text-[var(--dd-action-copper)] hover:border-[var(--dd-action-copper)] hover:text-[var(--dd-action-copper)]"
    >
      {cta}
      <BtnArrow />
    </SecondaryBtn>
  );

  return (
    <article
      className={`relative flex min-h-[420px] flex-col gap-5 rounded-[var(--dd-radius-lg)] p-7 ${
        featured
          ? "border border-[rgba(184,121,75,0.55)] shadow-[0_24px_64px_rgba(184,121,75,0.18),0_22px_58px_rgba(0,0,0,0.32)]"
          : "border border-[rgba(184,121,75,0.3)] shadow-[var(--dd-shadow-subtle)]"
      }`}
      style={{
        background: featured
          ? "linear-gradient(180deg, rgba(28,18,10,0.88) 0%, rgba(20,14,9,0.78) 100%)"
          : "rgba(20,14,9,0.7)"
      }}
    >
      {featured ? (
        <span className="absolute -top-2.5 left-[26px] rounded-full bg-[var(--dd-action-copper)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0a0c10]">
          Рекомендуем
        </span>
      ) : null}

      <div className="flex items-center justify-between gap-4">
        <span
          className={`inline-flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-[rgba(184,121,75,0.32)] ${
            featured ? "bg-[rgba(184,121,75,0.18)] text-[#E8C9A6]" : "bg-[rgba(184,121,75,0.1)] text-[var(--dd-action-copper)]"
          }`}
        >
          {icon}
        </span>
        <DdLabel className="text-[var(--dd-action-copper)]">{kicker}</DdLabel>
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--dd-text-primary)]">{title}</h3>
        <p className="text-[15px] leading-[1.6] text-[rgba(232,220,206,0.78)]">{body}</p>
      </div>

      <div className="mt-auto flex items-center gap-2.5 rounded-[10px] border border-[rgba(184,121,75,0.28)] bg-[rgba(184,121,75,0.08)] px-3.5 py-2.5 text-xs tracking-[0.02em] text-[#E8C9A6]">
        <BadgeArrow />
        <span>{badge}</span>
      </div>

      {ctaButton}
    </article>
  );
}

export function LeadsSection() {
  return (
    <SectionFrame bg="#100A04" fadeTo="#05070A" style={{ minHeight: 900 }}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[280px] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(184,121,75,0.32) 0%, rgba(184,121,75,0.08) 28%, transparent 60%)"
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[22%] top-[34%] h-[3px] w-[3px] rounded-full bg-[rgba(208,154,110,0.5)]" />
        <span className="absolute left-[78%] top-[46%] h-0.5 w-0.5 rounded-full bg-[rgba(184,121,75,0.45)]" />
        <span className="absolute left-[64%] top-[72%] h-[2.5px] w-[2.5px] rounded-full bg-[rgba(208,154,110,0.4)]" />
      </div>

      <DdContainer className="relative py-[110px] pb-24">
        <div className="relative mb-10">
          <div className="mx-auto flex max-w-[880px] flex-col items-center gap-[22px] text-center">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-px w-[18px] bg-[var(--dd-action-copper)]" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dd-action-copper)]">
                Бесплатный старт · § 10
              </span>
              <span className="h-px w-[18px] bg-[var(--dd-action-copper)]" aria-hidden />
            </div>
            <h2 className="max-w-[820px] text-[clamp(40px,4vw,56px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-[var(--dd-text-primary)]">
              Узнайте, где ваш бизнес
              <br />
              <span className="font-normal text-[var(--dd-action-copper)]">теряет клиентов</span> прямо сейчас.
            </h2>
            <p className="max-w-[620px] text-[17px] leading-[1.65] text-[rgba(232,220,206,0.78)]">
              Выберите, с чего удобнее начать. Всё бесплатно, всё в Telegram — без звонков и предложений до того,
              как вы сами захотите.
            </p>
          </div>
          <div className="absolute right-0 top-0 hidden md:block">
            <SectionIndex n={10} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <LMCard
            featured
            kicker="Аудит системы"
            title="ClientFlow Аудит"
            body="AI задаст 7 вопросов о вашем маршруте привлечения клиентов и покажет, где теряется больше всего заявок."
            badge="ClientFlow Score + главная точка потери"
            cta="Пройти Аудит"
            href="#audit"
            primary
            icon={<AuditIcon />}
          />
          <LMCard
            kicker="Консультация"
            title="Разбор на 30 минут"
            body="Созвон с Виталием. Разбираем вашу ситуацию — без шаблонных советов и обязательств заранее."
            badge="Разбор ситуации без обязательств"
            cta="Записаться"
            href="#contacts"
            icon={<CalendarIcon />}
          />
          <LMCard
            kicker="Контент"
            title="Telegram-канал"
            body="Разборы систем, кейсы, инструменты. Подписка — и вы видите, как работает ClientFlow System изнутри."
            badge="Разборы, кейсы, инструменты каждую неделю"
            cta="Перейти в канал"
            href={siteConfig.telegramChannelUrl}
            external
            icon={<TelegramIcon />}
          />
        </div>

        <div
          className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[var(--dd-radius-md)] border border-[rgba(184,121,75,0.38)] px-7 py-[22px] sm:flex-row sm:items-center sm:gap-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(184,121,75,0.22) 0%, rgba(184,121,75,0.12) 50%, rgba(184,121,75,0.22) 100%)"
          }}
        >
          <div className="flex items-center gap-4">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-[var(--dd-action-copper)]"
              style={{ boxShadow: "0 0 0 4px rgba(184,121,75,0.22), 0 0 12px rgba(184,121,75,0.5)" }}
              aria-hidden
            />
            <p className="text-base font-medium tracking-[-0.005em] text-[var(--dd-text-primary)]">
              Все три пути ведут в одно место — в&nbsp;Telegram, где начинается разговор о&nbsp;вашей системе.
            </p>
          </div>
          <p className="text-[13px] text-[rgba(232,220,206,0.7)]">Без регистраций и коммерческих предложений.</p>
        </div>
      </DdContainer>
    </SectionFrame>
  );
}
