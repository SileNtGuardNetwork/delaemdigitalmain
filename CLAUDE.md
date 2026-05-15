# CLAUDE.md — Delaem Digital / ClientFlow System

## Проект
Личный сайт Виталия Тимошенко / Делаем Диджитал.
Эталонный showcase Website Factory и ClientFlow System.
Репозиторий: SileNtGuardNetwork/delaemdigitalmain

## Стек
- Next.js 15 App Router
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui
- Framer Motion / Lenis (motion pass)
- Supabase (lead storage)
- PostHog (analytics)
- Telegram Bot API (lead cards)
- Vercel (deploy)

## Структура
```
app/
  page.tsx          — главная (13 секций)
  /clientflow       — методология
  /products         — продукты
  /cases            — кейсы
  /about            — об основателе
  /contact          — контакты
  /diagnostic       — ClientFlow Аудит
  /privacy          — 152-ФЗ
components/
  hero/
  sections/
  ui/
docs/
  delaem-digital/
    site-blueprint-v1.md
    hero-factory-brief-v1.md
    copy-doc-v1.md
    design-constitution-v1.md
  website-factory/
    00_MASTER_WORKFLOW.md
```

## Design Constitution
См. docs/delaem-digital/design-constitution-v1.md

Коротко:
- Фон: #07070d (near-black, НЕ #000)
- Surface: #0f0f1a
- Accent Blue: #5266eb (CTA, flow dots, highlights)
- Accent Copper: #c97a50 (kicker, primary button, micro-accent ТОЛЬКО)
- Text: #ededf3 / #8a8f98 / #3a3a52
- Шрифт: Onest (Google Fonts) — 300/400/500/700/800
- H1 highlight: последняя строка в #5b8cff
- Кнопки: copper fill (#c97a50) + copper outline, border-radius: 10px (НЕ pill)
- Cards: border-radius: 14px, border: 1px solid #18182a

## Копирайтинг (Hero)
Kicker: Виталий Тимошенко · основатель Делаем Диджитал
H1: Собираю бизнесу / управляемую систему / привлечения клиентов
Sub: Для владельцев бизнеса и экспертов, которым нужен не набор digital-инструментов, а понятный маршрут от первого касания до заявки.
CTA1: Разбор системы
CTA2: Telegram-канал
Nav: Подход / Услуги / Кейсы / Обо мне / Контакты
Nav CTA: Обсудить проект

## Строгие правила (ВСЕГДА соблюдать)

### ЗАПРЕЩЕНО:
- Framer (только Next.js)
- Генерировать изображения
- Трогать env/secrets
- Запускать production deploy (только preview)
- Менять позиционирование без явного запроса
- Fake dashboards и random декоративные карточки
- Neon/cyberpunk стилистика
- AI-растровый текст в изображениях
- Тени box-shadow для elevation (только color shifts)

### ОБЯЗАТЕЛЬНО после каждого изменения:
```bash
npm run build
npx tsc --noEmit
```

### При запросе preview:
```bash
npx vercel@latest
```

### Репорт после каждого изменения:
- Какие файлы изменены
- Что именно изменено
- Результат build
- Результат typecheck
- Preview URL (если создан)
- Риски/блокеры

## Конверсионная логика
Основной путь: Hero → ClientFlow Map → Products → Diagnostic CTA → Telegram/Form → AI Lead Qualification → Owner Telegram Card

Events PostHog:
- dd_hero_viewed
- dd_hero_primary_cta_clicked
- dd_hero_secondary_cta_clicked
- dd_[section]_viewed
- dd_[section]_cta_clicked

## 152-ФЗ
- Consent checkbox на всех формах (не pre-checked)
- Cookie banner с категориями
- Логирование согласий (дата, IP, версия текста)
- Legal pages: /privacy, /consent, /cookies
- Хостинг данных: проверить перед production

## Цены (НЕ менять без явного запроса)
- Делаем Сайт: от 150 000 ₽
- Делаем Трафик: от 250 000 ₽
- Делаем Систему: от 350 000 ₽
