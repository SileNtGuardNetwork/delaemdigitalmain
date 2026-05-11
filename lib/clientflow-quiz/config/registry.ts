import { notFound } from "next/navigation";
import { delaemDigitalTrafficReadinessQuiz } from "@/lib/clientflow-quiz/config/delaem-digital";
import { quizConfigSchema } from "@/lib/clientflow-quiz/schema";
import type { ClientFlowQuizConfig } from "@/lib/clientflow-quiz/types";

const quizConfigs = [delaemDigitalTrafficReadinessQuiz].map((config) => quizConfigSchema.parse(config));

export function getClientFlowQuizConfig(slug: string): ClientFlowQuizConfig | null {
  return quizConfigs.find((config) => config.slug === slug && config.status !== "archived") ?? null;
}

export function requireClientFlowQuizConfig(slug: string): ClientFlowQuizConfig {
  const config = getClientFlowQuizConfig(slug);
  if (!config) notFound();
  return config;
}

export function getClientFlowQuizSlugs() {
  return quizConfigs.filter((config) => config.status !== "archived").map((config) => ({ slug: config.slug }));
}
