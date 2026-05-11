import type { ClientFlowAnswers, ClientFlowContact } from "@/lib/clientflow-quiz/types";

export type AntiGarbageResult =
  | { ok: true }
  | { ok: false; code: "spam_detected" | "low_quality_input"; message: string };

export function runClientFlowAntiGarbageChecks(input: {
  answers: ClientFlowAnswers;
  contact: ClientFlowContact;
  honeypot?: string;
}): AntiGarbageResult {
  if (input.honeypot?.trim()) {
    return { ok: false, code: "spam_detected", message: "Submission was ignored." };
  }

  const answerText = Object.values(input.answers).flat().join(" ").trim();
  if (answerText.length > 0 && /(.)\1{18,}/.test(answerText)) {
    return { ok: false, code: "low_quality_input", message: "Please check your answers and try again." };
  }

  if (/https?:\/\//i.test(input.contact.name)) {
    return { ok: false, code: "spam_detected", message: "Please check your contact details and try again." };
  }

  return { ok: true };
}
