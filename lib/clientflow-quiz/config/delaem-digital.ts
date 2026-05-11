import type { ClientFlowQuizConfig } from "@/lib/clientflow-quiz/types";

export const delaemDigitalTrafficReadinessQuiz: ClientFlowQuizConfig = {
  slug: "delaem-digital-traffic-readiness",
  version: "1.0.0-preview",
  status: "preview",
  meta: {
    title: "Диагностика готовности к трафику",
    description: "Короткий ClientFlow-квиз для оценки готовности сайта, оффера и обработки заявок к платному трафику.",
    language: "ru"
  },
  brand: {
    name: "Делаем Диджитал",
    domain: "delaemdigital.com"
  },
  designPack: {
    theme: "diagnostic-dark",
    accent: "#c7845c"
  },
  startScreen: {
    eyebrow: "ClientFlow AI Quiz",
    title: "Проверьте, готова ли ваша система к платному трафику",
    description:
      "Ответьте на несколько вопросов. В конце вы получите базовый статус готовности и следующий шаг без универсальных советов.",
    buttonLabel: "Начать диагностику"
  },
  questions: [
    {
      id: "traffic_goal",
      type: "single_choice",
      title: "Что вы хотите получить от трафика в ближайший месяц?",
      required: true,
      options: [
        {
          id: "qualified_leads",
          label: "Стабильные квалифицированные заявки",
          score: { intentScore: 28, fitScore: 20, trustScore: 12 }
        },
        {
          id: "test_offer",
          label: "Проверить новый оффер",
          score: { intentScore: 20, urgencyScore: 12, complexityScore: 10 }
        },
        {
          id: "more_visits",
          label: "Просто больше посетителей",
          score: { intentScore: 8, fitScore: 6 }
        }
      ]
    },
    {
      id: "current_system",
      type: "multiple_choice",
      title: "Что уже собрано в вашей системе привлечения?",
      description: "Выберите все подходящие пункты.",
      required: true,
      options: [
        { id: "clear_offer", label: "Понятный оффер", score: { fitScore: 18, trustScore: 10 } },
        { id: "landing", label: "Посадочная страница или сайт", score: { fitScore: 16, complexityScore: 8 } },
        { id: "analytics", label: "Аналитика и цели", score: { trustScore: 18, complexityScore: 8 } },
        { id: "lead_process", label: "Понятный процесс обработки заявок", score: { trustScore: 18, urgencyScore: 8 } },
        { id: "none", label: "Пока ничего из этого", score: { complexityScore: 22 } }
      ]
    },
    {
      id: "monthly_budget",
      type: "single_choice",
      title: "Какой рекламный бюджет вы готовы тестировать?",
      required: true,
      options: [
        { id: "under_50", label: "До 50 000 ₽", score: { budgetScore: 8 } },
        { id: "50_150", label: "50 000-150 000 ₽", score: { budgetScore: 20, fitScore: 10 } },
        { id: "150_plus", label: "150 000 ₽ и выше", score: { budgetScore: 30, urgencyScore: 12, fitScore: 12 } },
        { id: "unknown", label: "Пока не понимаю", score: { budgetScore: 6, complexityScore: 12 } }
      ]
    },
    {
      id: "timeline",
      type: "single_choice",
      title: "Когда хотите запускаться?",
      required: true,
      options: [
        { id: "now", label: "В течение 1-2 недель", score: { urgencyScore: 30, intentScore: 14 } },
        { id: "month", label: "В течение месяца", score: { urgencyScore: 22, intentScore: 10 } },
        { id: "later", label: "Позже, сначала нужен разбор", score: { urgencyScore: 10, trustScore: 8 } }
      ]
    },
    {
      id: "main_blocker",
      type: "textarea",
      title: "Что сейчас больше всего мешает запуску или росту заявок?",
      required: false,
      placeholder: "Например: непонятно, что менять на сайте; заявки некачественные; нет аналитики...",
      maxLength: 700
    }
  ],
  scoring: {
    weights: {
      intentScore: 22,
      budgetScore: 18,
      urgencyScore: 18,
      fitScore: 18,
      trustScore: 14,
      complexityScore: 10
    }
  },
  segmentation: {
    segments: [
      {
        id: "hot",
        title: "Горячая готовность",
        minLeadValue: 72,
        description: "Есть понятная задача, бюджет и близкий горизонт запуска."
      },
      {
        id: "warm",
        title: "Нужно усилить систему",
        minLeadValue: 46,
        description: "Потенциал есть, но перед трафиком нужно закрыть несколько слабых мест."
      },
      {
        id: "cold",
        title: "Ранний этап",
        minLeadValue: 20,
        description: "Сначала стоит собрать основу: оффер, посадку, аналитику и обработку заявок."
      },
      {
        id: "unqualified",
        title: "Недостаточно данных",
        minLeadValue: 0,
        description: "Ответов пока мало для уверенной рекомендации."
      }
    ]
  },
  offerRouting: {
    routes: [
      {
        id: "traffic_launch",
        title: "ClientFlow запуск трафика",
        cta: "Обсудить запуск",
        salesAngle: "Фокус на быстром запуске с контролем качества заявок.",
        leadMagnet: "Карта готовности к трафику",
        minLeadValue: 72
      },
      {
        id: "system_audit",
        title: "ClientFlow аудит",
        cta: "Разобрать систему",
        salesAngle: "Сначала найти слабые места в маршруте от клика до заявки.",
        leadMagnet: "Список точек потерь",
        minLeadValue: 46
      },
      {
        id: "foundation_pack",
        title: "ClientFlow база",
        cta: "Собрать основу",
        salesAngle: "Подготовить оффер, страницу и измерение перед рекламным бюджетом.",
        minLeadValue: 0
      }
    ]
  },
  contactGate: {
    title: "Куда отправить результат диагностики?",
    description:
      "Оставьте контакт. В Phase 1 результат показывается сразу, внешние интеграции работают как безопасные no-op.",
    submitLabel: "Получить результат"
  },
  legal: {
    privacyPolicyUrl: "/privacy",
    consentUrl: "/consent",
    consentText: "Согласен на обработку персональных данных для получения результата диагностики.",
    marketingConsentText: "Согласен получать полезные материалы и предложения по ClientFlow.",
    consentVersion: "clientflow-quiz-v1-preview",
    cookieMode: "notice"
  }
};
