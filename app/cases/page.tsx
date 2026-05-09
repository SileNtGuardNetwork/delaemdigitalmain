import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { seoConfig } from "@/lib/seo";
import { getPublishedCases } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  title: "Кейсы",
  description: "Фонд будущих кейсов ClientFlow System. Материалы будут опубликованы после финальной упаковки и проверки."
};

export default function CasesPage() {
  const publishedCases = getPublishedCases();

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container">
          <div className="section-eyebrow">Кейсы</div>
          <h1>ClientFlow кейсы и будущие разборы</h1>

          {publishedCases.length === 0 ? (
            <div className="legal-card card">
              <p>
                Кейсы будут опубликованы после финальной упаковки и проверки материалов. Этот сайт уже используется как демонстрация подхода ClientFlow System.
              </p>
              <p>
                Сейчас можно сразу перейти к разбору вашей системы и обсудить, с чего логичнее начать.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/#contacts" data-analytics-event="cta_primary_click" data-analytics-label="cases_to_contacts" data-analytics-value="/#contacts">
                  Перейти к контакту
                </Link>
                <Link className="button button-secondary" href="/articles" data-analytics-event="cta_secondary_click" data-analytics-label="cases_to_articles" data-analytics-value="/articles">
                  К статьям
                </Link>
              </div>
            </div>
          ) : (
            <div className="pricing-grid">
              {publishedCases.map((item) => (
                <article className="price-card card" key={item.slug}>
                  <div className="price-badge">Кейс</div>
                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>
                  <div className="hero-actions">
                    <Link className="button button-primary" href={`/cases/${item.slug}`} data-analytics-event="cta_primary_click" data-analytics-label={`case_${item.slug}`} data-analytics-value={`/cases/${item.slug}`}>
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
