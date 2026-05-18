import { siteConfig } from "@/lib/site-config";
import { SectionKicker } from "@/components/sections/section-ui";

const leadCards = [
  {
    featured: true,
    icon: "audit",
    label: "Аудит системы",
    title: "ClientFlow Аудит",
    desc: "AI задаст 7 вопросов о вашем маршруте привлечения клиентов и покажет, где теряется больше всего заявок.",
    result: "→ ClientFlow Score + главная точка потери",
    resultClass: "border-[rgba(184,121,75,0.4)] bg-[rgba(184,121,75,0.06)]",
    cta: "Пройти Аудит →",
    href: "#audit",
    primary: true
  },
  {
    featured: false,
    icon: "calendar",
    label: "Консультация",
    title: "Разбор на 30 минут",
    desc: "Созвон с Виталием. Разбираем вашу ситуацию — без шаблонных советов и обязательств заранее.",
    result: "→ Разбор ситуации без обязательств",
    resultClass: "border-[rgba(127,166,214,0.3)] bg-[rgba(127,166,214,0.06)]",
    cta: "Записаться →",
    href: "#contacts",
    primary: false
  },
  {
    featured: false,
    icon: "telegram",
    label: "Контент",
    title: "Telegram-канал",
    desc: "Разборы систем, кейсы, инструменты. Подписка — и вы видите, как работает ClientFlow System изнутри.",
    result: "→ Разборы, кейсы, инструменты каждую неделю",
    resultClass: "border-[rgba(127,166,214,0.3)] bg-[rgba(127,166,214,0.06)]",
    cta: "Перейти в канал →",
    href: siteConfig.telegramChannelUrl,
    primary: false,
    external: true
  }
] as const;

function LeadIcon({ type }: { type: string }) {
  if (type === "audit") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--dd-action-copper)]">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "telegram") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--dd-action-steel-blue)]">
        <path d="M4 12l16-7-3 14-5-4-4 6-4-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--dd-action-steel-blue)]">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 10h16M9 5v4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function LeadsSection() {
  return (
    <section className="relative overflow-hidden bg-[#100A04] px-6 py-24 font-[family-name:var(--dd-font-primary)] md:px-[60px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 800px 600px at 50% 50%, rgba(184,121,75,0.09) 0%, transparent 70%)"
        }}
        aria-hidden
      />

      <div className="relative mx-auto mb-14 max-w-[680px] text-center">
        <SectionKicker>Бесплатный старт</SectionKicker>
        <h2 className="text-[clamp(40px,4vw,60px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--dd-text-primary)]">
          Узнайте, где ваш бизнес
          <br />
          <span className="text-[var(--dd-action-copper)]">теряет клиентов</span>
          <br />
          прямо сейчас.
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.6] text-[var(--dd-text-secondary)]">
          Выберите, с чего удобнее начать. Всё бесплатно, всё в Telegram — без звонков и предложений до того, как
          вы сами захотите.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-3">
        {leadCards.map((card) => (
          <article
            key={card.title}
            className={
              card.featured
                ? "relative flex flex-col gap-4 rounded-[20px] border-2 border-[var(--dd-action-copper)] bg-[rgba(18,12,5,0.85)] p-8 shadow-[0_0_48px_rgba(184,121,75,0.14)]"
                : "flex flex-col gap-4 rounded-[20px] border border-[rgba(184,121,75,0.2)] bg-[rgba(12,17,25,0.7)] p-8"
            }
          >
            {card.featured ? (
              <span className="absolute -top-3 left-6 rounded-[20px] bg-[var(--dd-action-copper)] px-3.5 py-1 text-[11px] font-bold text-[#F5F7FB]">
                Рекомендуем
              </span>
            ) : null}
            <LeadIcon type={card.icon} />
            <span
              className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
                card.featured ? "text-[var(--dd-action-copper)]" : "text-[var(--dd-action-steel-blue)]"
              }`}
            >
              {card.label}
            </span>
            <h3 className="text-[22px] font-bold text-[var(--dd-text-primary)]">{card.title}</h3>
            <p className="text-sm leading-[1.6] text-[var(--dd-text-secondary)]">{card.desc}</p>
            <p className={`mt-auto rounded-lg border px-3.5 py-2 text-xs text-[var(--dd-text-muted)] ${card.resultClass}`}>
              {card.result}
            </p>
            <a
              href={card.href}
              target={"external" in card && card.external ? "_blank" : undefined}
              rel={"external" in card && card.external ? "noreferrer" : undefined}
              className={
                card.primary
                  ? "mt-2 block w-full rounded-xl bg-[var(--dd-action-copper)] py-3.5 text-center text-sm font-bold text-[#F5F7FB] no-underline transition-colors hover:bg-[var(--dd-action-copper-hover)]"
                  : "mt-2 block w-full rounded-xl border-[1.5px] border-[var(--dd-action-copper)] py-3.5 text-center text-sm font-semibold text-[var(--dd-action-copper)] no-underline transition-colors hover:bg-[rgba(184,121,75,0.08)]"
              }
            >
              {card.cta}
            </a>
          </article>
        ))}
      </div>

      <p className="relative mt-10 rounded-2xl border border-[rgba(184,121,75,0.15)] bg-[rgba(30,18,8,0.6)] px-7 py-5 text-center text-sm text-[var(--dd-text-muted)]">
        Все три пути ведут в одно место — в Telegram, где начинается разговор о вашей системе.
        <span className="opacity-60"> · Без регистраций и обязательств.</span>
      </p>
    </section>
  );
}
