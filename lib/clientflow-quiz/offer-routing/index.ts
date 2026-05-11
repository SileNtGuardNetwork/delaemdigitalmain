import type { ClientFlowQuizConfig } from "@/lib/clientflow-quiz/types";

export function selectClientFlowOfferRoute(config: ClientFlowQuizConfig, leadValue: number) {
  const sortedRoutes = [...config.offerRouting.routes].sort((a, b) => b.minLeadValue - a.minLeadValue);
  return sortedRoutes.find((route) => leadValue >= route.minLeadValue) ?? sortedRoutes[sortedRoutes.length - 1];
}
