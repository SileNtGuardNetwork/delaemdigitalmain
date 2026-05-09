export type ContentLocale = "ru" | "en";
export type ContentStatus = "draft" | "published";

export type ContentBlock =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "callout"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type ContentSeo = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
};

export type ContentVisual = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  focalPoint?: string;
};

export type ContentBase = {
  slug: string;
  title: string;
  excerpt: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  status: ContentStatus;
  tags: string[];
  locale: ContentLocale;
  seo?: ContentSeo;
  visual?: ContentVisual;
  category?: string;
  service?: string;
  body?: ContentBlock[];
};

export type CaseContent = ContentBase & {
  kind: "case";
};

export type ArticleContent = ContentBase & {
  kind: "article";
};
