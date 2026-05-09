import type { ArticleContent } from "@/lib/content/types";

export const articles: ArticleContent[] = [];

export function getPublishedArticles() {
  return articles.filter((item) => item.status === "published");
}

export function getPublishedArticleSlugs() {
  return getPublishedArticles().map((item) => item.slug);
}

export function getArticleBySlug(slug: string) {
  return getPublishedArticles().find((item) => item.slug === slug);
}
