import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { seoConfig } from "@/lib/seo";
import { getPublishedArticles } from "@/lib/content";

const articlesTitle = "Статьи";
const articlesDescription = "Фонд будущих материалов о ClientFlow System, сайтах, трафике, Telegram, AI и управляемой системе привлечения клиентов.";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  title: articlesTitle,
  description: articlesDescription,
  alternates: {
    canonical: "/articles"
  },
  openGraph: {
    title: articlesTitle,
    description: articlesDescription,
    url: `${seoConfig.baseUrl}/articles`
  }
};

export default function ArticlesPage() {
  const publishedArticles = getPublishedArticles();

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container">
          <div className="section-eyebrow">Статьи</div>
          <h1>ClientFlow статьи и будущие материалы</h1>

          {publishedArticles.length === 0 ? (
            <div className="legal-card card">
              <p>
                Раздел статей готовится. Здесь будут материалы о ClientFlow System, сайтах, трафике, Telegram, AI и управляемой системе привлечения клиентов.
              </p>
              <p>
                Пока можно перейти к контакту и обсудить текущий маршрут привлечения клиентов.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/#contacts" data-analytics-event="cta_primary_click" data-analytics-label="articles_to_contacts" data-analytics-value="/#contacts">
                  Перейти к контакту
                </Link>
                <Link className="button button-secondary" href="/cases" data-analytics-event="cta_secondary_click" data-analytics-label="articles_to_cases" data-analytics-value="/cases">
                  К кейсам
                </Link>
              </div>
            </div>
          ) : (
            <div className="pricing-grid">
              {publishedArticles.map((item) => (
                <article className="price-card card" key={item.slug}>
                  <div className="price-badge">Статья</div>
                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>
                  <div className="hero-actions">
                    <Link className="button button-primary" href={`/articles/${item.slug}`} data-analytics-event="cta_primary_click" data-analytics-label={`article_${item.slug}`} data-analytics-value={`/articles/${item.slug}`}>
                      Читать
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
