import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getCaseBySlug, getPublishedCaseSlugs } from "@/lib/content";
import { seoConfig } from "@/lib/seo";

type PageParams = { slug: string };

export function generateStaticParams() {
  return getPublishedCaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: PageParams }): Metadata {
  const item = getCaseBySlug(params.slug);

  if (!item) {
    return {
      metadataBase: new URL(seoConfig.baseUrl),
      title: "Кейс не найден",
      description: "Запрошенный кейс не опубликован."
    };
  }

  const canonicalPath = item.seo?.canonicalPath ?? `/cases/${item.slug}`;
  const title = item.seo?.title ?? item.title;
  const description = item.seo?.description ?? item.excerpt;

  return {
    metadataBase: new URL(seoConfig.baseUrl),
    title,
    description,
    keywords: item.seo?.keywords,
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      title,
      description,
      url: `${seoConfig.baseUrl}${canonicalPath}`
    }
  };
}

export default function CasePage({ params }: { params: PageParams }) {
  const item = getCaseBySlug(params.slug);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container">
          <div className="section-eyebrow">Кейс</div>
          <h1>{item.title}</h1>
          <div className="legal-card card">
            <p>{item.description ?? item.excerpt}</p>
            {item.body?.map((block, index) => {
              if (block.type === "heading") return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
              if (block.type === "paragraph") return <p key={`${block.type}-${index}`}>{block.text}</p>;
              if (block.type === "list") return <ul key={`${block.type}-${index}`}>{block.items.map((line) => <li key={line}>{line}</li>)}</ul>;
              if (block.type === "quote") return <blockquote key={`${block.type}-${index}`}>{block.text}</blockquote>;
              if (block.type === "callout") return <p key={`${block.type}-${index}`}>{block.text}</p>;
              if (block.type === "image") return <p key={`${block.type}-${index}`}>{block.alt}</p>;
              return null;
            })}
            <div className="hero-actions">
              <Link className="button button-primary" href="/#contacts" data-analytics-event="cta_primary_click" data-analytics-label={`case_${item.slug}_contacts`} data-analytics-value="/#contacts">
                Обсудить маршрут
              </Link>
              <Link className="button button-secondary" href="/cases" data-analytics-event="cta_secondary_click" data-analytics-label="case_back_to_cases" data-analytics-value="/cases">
                К списку кейсов
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
