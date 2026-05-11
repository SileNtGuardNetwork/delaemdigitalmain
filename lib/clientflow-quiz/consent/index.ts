import type { ClientFlowConsent, ClientFlowQuizConfig } from "@/lib/clientflow-quiz/types";

export function validateClientFlowConsent(config: ClientFlowQuizConfig, consent: ClientFlowConsent) {
  return consent.personalData === true && consent.consentVersion === config.legal.consentVersion;
}
