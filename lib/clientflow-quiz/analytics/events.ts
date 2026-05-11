export const clientFlowQuizEventNames = [
  "quiz_viewed",
  "quiz_started",
  "question_answered",
  "question_back_clicked",
  "quiz_abandoned",
  "contact_gate_shown",
  "contact_submitted",
  "consent_accepted",
  "quiz_completed",
  "lead_scored",
  "segment_assigned",
  "offer_routed",
  "ai_result_generated",
  "ai_result_failed",
  "reward_delivered",
  "telegram_notification_sent",
  "telegram_notification_failed",
  "crm_webhook_sent",
  "crm_webhook_failed",
  "result_viewed",
  "cta_clicked"
] as const;

export type ClientFlowQuizEventName = (typeof clientFlowQuizEventNames)[number];

export function isClientFlowQuizEventName(value: string): value is ClientFlowQuizEventName {
  return clientFlowQuizEventNames.includes(value as ClientFlowQuizEventName);
}
