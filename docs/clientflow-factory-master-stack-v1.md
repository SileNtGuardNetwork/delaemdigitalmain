# Delaem Digital / ClientFlow Factory — Master Production Stack v1

Дата фиксации: 17 мая 2026  
Статус: базовый стратегический документ для сайта, агентства и продуктовой фабрики

## 1. Главная формула фабрики

Делаем Диджитал — продуктовая IT/Growth-фабрика для сборки ClientFlow-систем под ключ.

ClientFlow System = стратегия + оффер + прототип + дизайн + разработка + адаптив + backend + интеграции + Telegram-боты + AI + CRM + аналитика + трафик + сопровождение.

Мы продаём не сайты, не ботов и не «прикрутим ИИ». Мы продаём управляемый маршрут клиента: от первого касания до заявки, обработки, follow-up, аналитики и роста.

## 2. Базовый production-контур

- GPT Business
- Claude / Claude Code
- Cursor Pro+
- Codex
- GitHub
- Vercel
- Supabase
- Timeweb Cloud
- OpenAI API
- Anthropic API
- OpenRouter
- n8n
- Figma
- Refero
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Telegram Bot API
- Яндекс.Метрика
- PostHog
- Sentry
- Яндекс Директ
- VK Ads
- Telegram Ads
- Avito
- SEO stack
- Calltracking
- ЮKassa / Prodamus / CloudPayments
- Cloudflare
- Playwright
- Lighthouse

## 3. Управление, стратегия, документация

- GPT Business
- Claude / Claude Code
- Cursor Pro+
- GitHub
- Notion
- Google Drive / Docs
- FigJam / Miro
- Everything Claude Code как донор методологий
- Собственный Delaem Digital AI Engineering OS
- ClientFlow Prompt Library

Задачи слоя:
- стратегия проекта;
- ClientFlow Blueprint;
- ТЗ;
- карта пути клиента;
- продуктовая архитектура;
- scope of work;
- проектная документация;
- handoff клиенту;
- QA-чеклисты;
- стандарты разработки.

## 4. Прототипы, структура, UX

- GPT Business
- Claude
- Relume
- FigJam
- Figma
- Refero
- Mobbin
- Godly
- Land-book
- Awwwards
- Lapa Ninja
- Whimsical / Miro

## 5. Копирайтинг, офферы, маркетинг

- GPT Business
- Claude
- Perplexity / веб-поиск
- Яндекс Wordstat
- Keys.so
- Serpstat
- Similarweb
- Notion
- Google Docs
- ChatGPT Projects под ниши
- ClientFlow Prompt Library

## 6. Дизайн, UI, визуальная система

- Figma
- Refero
- Mobbin
- Relume
- shadcn/ui
- Magic UI
- Aceternity UI
- Kibo UI
- Tailark
- Framer Motion / Motion
- 21st.dev / Magic MCP
- Adobe Express
- Photoshop
- Canva
- Midjourney / GPT Image / Gemini image tools — только для визуалов, не для критичных портретов

## 7. Frontend / верстка / веб-продукты

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion / Motion
- React Hook Form
- Zod
- TanStack Query
- Zustand
- Recharts
- Lucide Icons
- Next/Image
- Metadata API / SEO
- Playwright
- Lighthouse

## 8. Backend / API / бизнес-логика

- Node.js
- Next.js API Routes / Route Handlers
- Supabase
- PostgreSQL
- Prisma или Drizzle
- Redis
- RabbitMQ / очереди при необходимости
- Webhooks
- Cron jobs
- REST API
- GraphQL при необходимости
- OpenAPI / Swagger
- Zod validation

## 9. Базы данных, storage, auth

- Supabase Postgres
- Supabase Auth
- Supabase Storage
- Supabase Edge Functions
- Supabase Realtime
- Supabase pgvector
- Timeweb DBaaS
- Timeweb S3
- Redis
- PostgreSQL backups
- RLS policies
- SQL migrations

Роли:
- Supabase — быстрый backend-platform слой: Postgres, Auth, Storage, RLS, Realtime, Edge Functions, pgvector.
- Timeweb — инфраструктурный слой: VDS, DBaaS, S3, Docker, self-hosted сервисы.

## 10. Hosting / cloud / deployment

- Vercel
- Supabase
- Timeweb Cloud
- GitHub
- Docker
- Docker Compose
- Nginx / Caddy / Traefik
- SSL / Let’s Encrypt
- Vercel Preview Deployments
- Vercel Production
- Timeweb VDS/VPS
- Timeweb App Platform
- Timeweb Kubernetes — позже, не на старте
- Terraform — позже, когда будет поток

Роли:
- Vercel — frontend, preview, production для Next.js.
- Supabase — backend/data/auth/storage.
- Timeweb — runtime для ботов, n8n, Docker, российская инфраструктура.

## 11. AI production stack

- GPT Business — рабочее пространство команды
- OpenAI API — production AI
- Anthropic API — reasoning, copy, analysis
- OpenRouter — fallback/router
- Timeweb AI Agents — простые клиентские AI-консультанты
- Supabase pgvector — RAG/knowledge base
- Langfuse — AI telemetry
- RAG pipeline
- Prompt versioning
- AI telemetry
- Structured outputs
- Fallback models
- Moderation / safety layer
- Knowledge base ingestion
- Document parsing

## 12. Telegram-боты / Mini Apps

- Telegram Bot API
- grammY
- @grammyjs/runner
- Telegraf — опционально
- Telegram Web Apps / Mini Apps
- Supabase
- Timeweb VDS
- Redis
- Webhook runtime
- Payment provider integration
- Admin commands
- Broadcast system
- Lead notifications
- AI bot bridge

## 13. Интеграции и автоматизация

- n8n self-hosted на Timeweb
- Make / Albato — быстрый no-code bridge
- amoCRM
- Bitrix24
- Google Sheets
- Notion
- Telegram
- WhatsApp Business / Wazzup / Pact
- Email
- SMS.ru / SMS Aero
- Webhooks
- Zapier — для зарубежных клиентов
- API-коннекторы под клиента

## 14. CRM / заявки / продажи

- amoCRM
- Bitrix24
- Supabase CRM Lite
- Google Sheets для дешёвых запусков
- Telegram lead-card
- n8n automation
- Calltouch / Callibri / Roistat — для клиентов с бюджетом
- UTM tracking
- Lead scoring
- Pipeline statuses
- Manager follow-up tasks
- ClientFlow Dashboard

Минимальный pipeline: форма / квиз / бот → валидация → база → Telegram lead-card → CRM → статус → follow-up → аналитика.

## 15. Аналитика, события, качество лидов

- Яндекс.Метрика
- Google Analytics
- PostHog
- Sentry
- Vercel Analytics
- Supabase logs
- Server-side lead events
- UTM generator
- Lighthouse
- PageSpeed Insights
- Calltracking
- CRM status analytics
- Dashboard по заявкам
- Weekly reports

## 16. Трафик / performance marketing

- Яндекс Директ
- РСЯ
- VK Ads
- Telegram Ads
- Telegram-посевы
- Avito
- Яндекс Бизнес
- 2ГИС
- SEO
- Яндекс Wordstat
- Keys.so
- Serpstat
- Similarweb
- Calltouch / Callibri / Roistat
- UTM
- Ретаргетинг
- A/B-тесты
- Креативы
- Лендинги под гипотезы

Принцип: трафик не продаётся отдельно в вакууме. Трафик подключается к маршруту: канал → посадочная → квиз/форма → CRM/Telegram → менеджер → аналитика → оптимизация.

## 17. Контент, соцсети, прогрев

- GPT Business
- Claude
- Notion content calendar
- Telegram
- Threads
- VK
- Дзен
- YouTube Shorts
- CapCut
- Canva
- Adobe Express
- Figma
- Buffer / отложенный постинг при необходимости
- Лид-магниты
- Прогревочные цепочки
- Контент-воронки

## 18. Платежи

- ЮKassa
- Prodamus
- CloudPayments
- Robokassa
- Т-Банк эквайринг
- Telegram Stars
- Crypto payments: Cryptomus / NOWPayments
- Manual payment fallback
- Payment intents
- Webhooks
- Subscriptions
- Invoices
- Receipts / legal flow

## 19. Безопасность, мониторинг, DevOps

- Sentry
- UptimeRobot / Better Stack
- Logtail / Better Stack Logs
- Supabase logs
- Vercel logs
- Timeweb monitoring
- Backups
- GitHub branch protection
- GitHub Actions
- Dependabot
- npm audit
- Secret scanning
- RLS checks
- Rate limiting
- Anti-spam
- Captcha / Cloudflare Turnstile
- Cloudflare DNS / WAF / CDN

Правила:
- не логировать PII;
- не хранить secrets в коде;
- не делать destructive migrations без отдельного решения;
- бэкапы для production;
- staging перед production;
- мониторинг форм, ботов, платежей и API.

## 20. QA / тестирование / production quality

- Playwright
- Lighthouse
- TypeScript
- ESLint
- Prettier
- Vitest
- React Testing Library
- Postman / Insomnia
- GitHub Actions
- Sentry
- Manual mobile QA
- Form submit QA
- Telegram delivery QA
- CRM delivery QA
- Payment webhook QA
- Analytics events QA
- Security checklist

Minimum quality gate:
- npm run build
- npx tsc --noEmit
- git diff --check
- mobile QA
- form submit QA
- Telegram delivery QA
- analytics QA
- no secrets / no PII logs

## 21. Юридический и операционный слой

- Договор / оферта
- Политика конфиденциальности
- Согласие на обработку персональных данных
- Cookie banner
- 152-ФЗ базовая упаковка
- SLA для сопровождения
- ТЗ / Scope of Work
- Акт / счёт / закрывающие документы
- Регламент поддержки
- Документация проекта
- Handoff-документ для клиента

## 22. Внутренние шаблоны фабрики

- clientflow-site-template
- clientflow-quiz-template
- clientflow-bot-template
- clientflow-ai-agent-template
- clientflow-crm-lite-template
- clientflow-dashboard-template
- traffic-launch-template
- integration-template
- supabase-template
- timeweb-docker-template
- vercel-next-template
- quality-gate-template
- client-handoff-template

## 23. Продуктовая линейка

- ClientFlow Site — сайт под трафик, заявку, аналитику и AI.
- ClientFlow Quiz — квиз с квалификацией лида и передачей в Telegram/CRM.
- ClientFlow Bot — Telegram-бот продаж, прогрева и заявок.
- ClientFlow AI Consultant — AI-консультант по базе знаний бизнеса.
- ClientFlow CRM Lite — простая CRM под заявки, статусы и менеджеров.
- ClientFlow Dashboard — аналитика заявок, источников и качества лидов.
- ClientFlow Traffic — трафик, ретаргетинг и оптимизация.
- ClientFlow Care — сопровождение, поддержка, развитие и инфраструктура.

## 24. Роли команды

### Виталий / Product & Growth Architect

- оффер;
- стратегия;
- архитектура;
- продажи;
- контроль качества;
- ClientFlow Blueprint;
- финальные решения по продукту.

### Разработчик 1 / Frontend & Product UI Engineer

- Next.js;
- UI;
- сайты;
- квизы;
- dashboards;
- админки;
- адаптив;
- motion.

### Разработчик 2 / Backend, AI & Integrations Engineer

- API;
- PostgreSQL/Supabase;
- Telegram;
- CRM;
- AI;
- webhooks;
- n8n;
- деплой;
- мониторинг.

## 25. Что фиксируем как стандарт

1. Мы закрываем всю фабрику под ключ.
2. Не продаём «разработку ради разработки».
3. Не продаём трафик без маршрута.
4. Не обещаем магию AI.
5. Строим систему: стратегия → дизайн → код → AI → интеграции → аналитика → трафик → сопровождение.
6. Сначала собираем эталон на себе: сайт и ClientFlow-система «Делаем Диджитал».
7. После этого превращаем стандарт в продуктовую линейку для клиентов.

## 26. Финальная формула стека

GPT Business + Claude + Cursor Pro+ + Codex + GitHub + Vercel + Supabase + Timeweb Cloud + Next.js + TypeScript + Tailwind + shadcn/ui + OpenAI/Anthropic/OpenRouter + Timeweb AI Agents + Telegram Bot API + n8n + CRM integrations + Яндекс.Метрика + PostHog + Sentry + Яндекс Директ + VK Ads + Telegram Ads + Avito + SEO + платежи + мониторинг + QA + юридический слой.

Это закрывает фабрику на 100%: прототипы, копирайтинг, дизайн, верстку, адаптив, backend, интеграции, боты, AI, трафик, аналитику, платежи, сопровождение и production-контроль.
