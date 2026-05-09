import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo";

const routes = ["", "/privacy", "/consent", "/cookies"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${seoConfig.baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.3
  }));
}
