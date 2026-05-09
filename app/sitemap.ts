import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo";
import { getPublishedArticleSlugs, getPublishedCaseSlugs } from "@/lib/content";

const routes = ["", "/privacy", "/consent", "/cookies", "/cases", "/articles"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicRoutes = [
    ...getPublishedCaseSlugs().map((slug) => `/cases/${slug}`),
    ...getPublishedArticleSlugs().map((slug) => `/articles/${slug}`)
  ] as const;

  return [...routes, ...dynamicRoutes].map((route) => ({
    url: `${seoConfig.baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/cases" || route === "/articles" ? 0.4 : 0.3
  }));
}
