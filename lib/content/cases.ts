import type { CaseContent } from "@/lib/content/types";

export const cases: CaseContent[] = [];

export function getPublishedCases() {
  return cases.filter((item) => item.status === "published");
}

export function getPublishedCaseSlugs() {
  return getPublishedCases().map((item) => item.slug);
}

export function getCaseBySlug(slug: string) {
  return getPublishedCases().find((item) => item.slug === slug);
}
