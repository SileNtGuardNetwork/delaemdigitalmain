import type { ClientFlowQuizConfig } from "@/lib/clientflow-quiz/types";

export function assignClientFlowSegment(config: ClientFlowQuizConfig, leadValue: number) {
  const sortedSegments = [...config.segmentation.segments].sort((a, b) => b.minLeadValue - a.minLeadValue);
  return sortedSegments.find((segment) => leadValue >= segment.minLeadValue) ?? sortedSegments[sortedSegments.length - 1];
}
