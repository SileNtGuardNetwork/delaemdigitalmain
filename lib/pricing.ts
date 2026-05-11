export const pricing = [
  {
    title: "Делаем Сайт",
    intent: "delaem-site",
    path: "Entry / посадочная",
    price: "от 150 000 ₽",
    description:
      "Премиальная посадочная архитектура под рекламу: оффер, доверие, заявка и готовность к первому трафику.",
    items: ["Премиальная посадка", "AI-логика заявки", "Готовность к трафику", "Форма и legal-база"],
    cta: "Начать с сайта",
    recommended: false
  },
  {
    title: "Делаем Трафик",
    intent: "delaem-traffic",
    path: "Traffic launch / заявки",
    price: "от 250 000 ₽",
    description:
      "Быстрый запуск заявок: квиз, рекламный вход, квалификация и передача лидов в рабочий канал.",
    items: ["Премиальный квиз", "Трафик через eLama", "Запуск заявок", "Бюджет отдельно"],
    cta: "Запустить заявки",
    recommended: false
  },
  {
    title: "Делаем Систему",
    intent: "delaem-system",
    path: "Главный ClientFlow продукт",
    price: "от 350 000 ₽",
    description:
      "Полная ClientFlow-система под трафик: сайт/квиз, AI-квалификация, CRM/Telegram, прогрев и аналитика.",
    items: [
      "ClientFlow Audit до старта",
      "Карта гипотез",
      "Цели аналитики",
      "Telegram-уведомления",
      "7 дней наблюдения после запуска",
      "Loom-разбор после первых заявок"
    ],
    cta: "Собрать ClientFlow",
    recommended: true
  }
] as const;
