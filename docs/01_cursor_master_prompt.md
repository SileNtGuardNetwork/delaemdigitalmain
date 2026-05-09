# Cursor Master Prompt — Делаем Диджитал Personal Site v1

Ты — Senior Frontend Architect, Senior Product Designer и Conversion UX Architect.

Задача: собрать production-ready личный сайт Виталия Тимошенко / «Делаем Диджитал».

Сайт сам является демонстрационным кейсом ClientFlow System: показывает, как оффер, доверие, диагностика, продукты, форма и юридическая чистота собираются в управляемый маршрут от первого касания до заявки.

Главный оффер не менять:

**Собираю бизнесу управляемую систему привлечения клиентов**

Стек: Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide Icons, Vercel-ready.

Страницы: `/`, `/privacy`, `/consent`, `/cookies`.

Навигация: Система → `#system`, ClientFlow Аудит → `#audit`, Тарифы → `#pricing`, Контакты → `#contacts`.

Header: wordmark «Делаем Диджитал», CTA «Связаться», без VT/DT.

Главная: Header, HeroSection, LossMapSection, ClientFlowSystemSection, AuditSection, PricingSection, FinalCTASection, Footer, CookieBanner.

Hero: eyebrow «Виталий Тимошенко · основатель Делаем Диджитал», headline без изменений, highlight только «управляемую систему», CTA «Разбор системы», «Telegram-канал», trust cards: 8 лет в digital / 140+ проектов / 5 человек команда, image `/public/images/vitaly-hero-dark.webp`.

Запреты: кейсы, портфолио, блог, «Делаем Заявки», lorem ipsum, fake claims, stock people.

Footer: Telegram https://t.me/delaemdigital, контакт https://t.me/vitalycreator, email delaemdigital@gmail.com, links /privacy /consent /cookies.

Legal: форма с unchecked consent checkbox, submit disabled until consent, cookie banner with localStorage.
