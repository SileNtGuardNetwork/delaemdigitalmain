import type { ClientFlowAnswers, ClientFlowQuizConfig, ClientFlowScoreMap } from "@/lib/clientflow-quiz/types";

export const emptyScores: ClientFlowScoreMap = {
  intentScore: 0,
  budgetScore: 0,
  urgencyScore: 0,
  fitScore: 0,
  trustScore: 0,
  complexityScore: 0
};

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function addScores(current: ClientFlowScoreMap, addition?: Partial<ClientFlowScoreMap>) {
  if (!addition) return current;
  return {
    intentScore: current.intentScore + (addition.intentScore ?? 0),
    budgetScore: current.budgetScore + (addition.budgetScore ?? 0),
    urgencyScore: current.urgencyScore + (addition.urgencyScore ?? 0),
    fitScore: current.fitScore + (addition.fitScore ?? 0),
    trustScore: current.trustScore + (addition.trustScore ?? 0),
    complexityScore: current.complexityScore + (addition.complexityScore ?? 0)
  };
}

export function calculateClientFlowScores(config: ClientFlowQuizConfig, answers: ClientFlowAnswers) {
  let scores = { ...emptyScores };

  for (const question of config.questions) {
    const answer = answers[question.id];
    if (!answer || !question.options?.length) continue;

    const answerIds = Array.isArray(answer) ? answer : [answer];
    for (const option of question.options) {
      if (answerIds.includes(option.id)) {
        scores = addScores(scores, option.score);
      }
    }
  }

  const normalized = {
    intentScore: clampScore(scores.intentScore),
    budgetScore: clampScore(scores.budgetScore),
    urgencyScore: clampScore(scores.urgencyScore),
    fitScore: clampScore(scores.fitScore),
    trustScore: clampScore(scores.trustScore),
    complexityScore: clampScore(scores.complexityScore)
  };

  const weightTotal = Object.values(config.scoring.weights).reduce((sum, value) => sum + value, 0);
  const leadValue = clampScore(
    Object.entries(normalized).reduce((sum, [key, value]) => {
      const weight = config.scoring.weights[key as keyof ClientFlowScoreMap];
      return sum + value * (weight / weightTotal);
    }, 0)
  );

  return { ...normalized, leadValue };
}
