import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";
import { seoConfig } from "@/lib/seo";
import { getPublishedCases, getPublishedArticles } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  title: "Delaem Digital — ClientFlow System for Client Acquisition",
  description:
    "I build controlled client acquisition systems for businesses: website, traffic, Telegram, AI, CRM and follow-up in one route from first touch to qualified lead.",
  alternates: {
    canonical: "/en",
    languages: {
      ru: "/",
      en: "/en"
    }
  },
  openGraph: {
    title: "Delaem Digital — ClientFlow System for Client Acquisition",
    description:
      "I build controlled client acquisition systems for businesses: website, traffic, Telegram, AI, CRM and follow-up in one route from first touch to qualified lead.",
    url: `${seoConfig.baseUrl}/en`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Delaem Digital — ClientFlow System for Client Acquisition",
    description:
      "I build controlled client acquisition systems for businesses: website, traffic, Telegram, AI, CRM and follow-up in one route from first touch to qualified lead."
  }
};

const serviceLadder = [
  {
    title: "Delaem Website",
    price: "from 150 000 ₽",
    text: "A site that explains value, leads to inquiry and becomes the entry point into the acquisition system."
  },
  {
    title: "Delaem Traffic",
    price: "from 250 000 ₽",
    text: "A managed acquisition flow: offers, traffic channels, click logic and contact handoff."
  },
  {
    title: "Delaem System",
    price: "from 350 000 ₽",
    text: "A full ClientFlow route: site, traffic, Telegram, AI, CRM and follow-up working as one chain."
  }
] as const;

const processSteps = [
  ["01", "Diagnose", "map the current acquisition route and the points where leads are lost"],
  ["02", "Architecture", "define the system logic, channels and conversion hierarchy"],
  ["03", "Build", "design the website, flows and supporting communication structure"],
  ["04", "Launch", "check the route from first touch to inquiry"],
  ["05", "Improve", "tighten weak points using real traffic and response data"]
] as const;

const lossPoints = [
  ["01", "Ad", "the offer is not clear"],
  ["02", "Site", "there is no obvious next step"],
  ["03", "Trust", "the visitor does not feel confident"],
  ["04", "Inquiry", "the form is not completed"],
  ["05", "Reply", "the lead does not get a fast answer"],
  ["06", "Follow-up", "the lead does not return after first contact"]
] as const;

export default function EnglishPage() {
  const publishedCases = getPublishedCases();
  const publishedArticles = getPublishedArticles();

  return (
    <>
      <main>
        <div className="container" style={{ paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <div className="wordmark">Delaem Digital</div>
          <div className="footer-links" style={{ gap: 10 }}>
            <Link href="/" data-analytics-event="legal_link_click" data-analytics-label="en_topbar_ru" data-analytics-value="/">
              RU
            </Link>
            <a href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_channel_click" data-analytics-label="en_topbar_telegram" data-analytics-value={siteConfig.telegramChannelUrl}>
              Telegram
            </a>
          </div>
        </div>
        <section className="hero">
          <div className="container" style={{ display: "flex", justifyContent: "flex-end", marginBottom: 18 }}>
            <Link className="hero-kicker" href="/" aria-label="Russian version" data-analytics-event="legal_link_click" data-analytics-label="en_to_ru" data-analytics-value="/">
              RU · Russian version
            </Link>
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="status-dot" />
                Vitaly Timoshenko · Founder of Delaem Digital
              </div>
              <h1>I build controlled client acquisition systems for businesses</h1>
              <p className="hero-subtitle">
                For business owners and experts who need more than a set of digital tools — a clear route from first touch to qualified lead.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="/#contacts" data-analytics-event="cta_primary_click" data-analytics-label="en_hero_primary" data-analytics-value="/#contacts">
                  Request a system audit
                </a>
                <a className="button button-secondary" href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_channel_click" data-analytics-label="en_hero_telegram_channel" data-analytics-value={siteConfig.telegramChannelUrl}>
                  Telegram channel
                </a>
              </div>
              <div className="trust-grid" aria-label="Key facts">
                <div className="trust-card card"><strong>8 years</strong><span>in digital</span></div>
                <div className="trust-card card"><strong>140+</strong><span>projects</span></div>
                <div className="trust-card card"><strong>5</strong><span>people team</span></div>
              </div>
            </div>
            <div className="hero-stage">
              <div className="hero-stage-field" aria-hidden="true" />
              <div className="hero-glass-rail" aria-hidden="true" />
              <div className="hero-route-rail" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <figure className="hero-founder">
                <img
                  src="/images/vitaly-hero-dark.webp"
                  alt="Vitaly Timoshenko, founder of Delaem Digital"
                  width={960}
                  height={1200}
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section section-graphite">
          <div className="container">
            <div className="section-eyebrow">ClientFlow System</div>
            <h2 className="section-title">A route, not a stack of disconnected tools</h2>
            <p className="section-text">
              Website, traffic, Telegram, AI, CRM and follow-up should work as one acquisition route. The point is not to add more tools, but to make the path from first touch to inquiry clear.
            </p>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container">
            <div className="section-eyebrow">Where leads are lost</div>
            <h2 className="section-title">The lead usually disappears between touches, not in one place</h2>
            <div className="loss-grid">
              {lossPoints.map(([index, title, text]) => (
                <div className="route-card card" key={title}>
                  <div className="route-index">{index}</div>
                  <div className="route-title">{title}</div>
                  <div className="route-loss">Loss: {text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container">
            <div className="section-eyebrow">ClientFlow Audit</div>
            <h2 className="section-title">Start with a route audit</h2>
            <p className="section-text">
              I will show where the current acquisition route loses attention and which point should be strengthened first.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/#contacts" data-analytics-event="cta_primary_click" data-analytics-label="en_audit_primary" data-analytics-value="/#contacts">
                Request audit
              </a>
              <Link className="button button-secondary" href="/cases" data-analytics-event="cta_secondary_click" data-analytics-label="en_audit_cases" data-analytics-value="/cases">
                Cases
              </Link>
            </div>
          </div>
        </section>

        <section className="section pricing-section">
          <div className="container">
            <div className="section-eyebrow">Service ladder</div>
            <h2 className="section-title">Build one module or the full system</h2>
            <div className="pricing-grid">
              {serviceLadder.map((item) => (
                <article className="price-card card" key={item.title}>
                  <h3>{item.title}</h3>
                  <div className="price">{item.price}</div>
                  <p>{item.text}</p>
                  <div className="hero-actions">
                    <a className="button button-primary" href="/#contacts" data-analytics-event="pricing_cta_click" data-analytics-label={item.title} data-analytics-value={item.price}>
                      Discuss
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container">
            <div className="section-eyebrow">Process</div>
            <h2 className="section-title">Work is a build sequence, not a task pile</h2>
            <div className="process-map">
              {processSteps.map(([index, title, text]) => (
                <article className="process-step" key={title}>
                  <span>{index}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section final-cta-section">
          <div className="container">
            <div className="section-eyebrow">Contact</div>
            <h2 className="section-title">Let’s review the route where your system is losing leads</h2>
            <p className="section-text">
              Submit a request and I will review the current acquisition route and suggest the most logical next step.
            </p>
            <div className="contact-grid">
              <aside className="contact-aside card">
                <h3>Quick route</h3>
                <p>
                  You leave a request, I review the site and current lead path, then we define the next step.
                </p>
                <div className="contact-route" aria-label="Lead route">
                  <span>Request</span>
                  <span>Diagnosis</span>
                  <span>Next step</span>
                </div>
                <div className="contact-links">
                  <a className="contact-link" href={siteConfig.telegramContactUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_contact_click" data-analytics-label="en_final_telegram_contact" data-analytics-value={siteConfig.telegramContactUrl}>Telegram: @vitalycreator</a>
                  <a className="contact-link" href={siteConfig.telegramChannelUrl} target="_blank" rel="noreferrer" data-analytics-event="telegram_channel_click" data-analytics-label="en_final_telegram_channel" data-analytics-value={siteConfig.telegramChannelUrl}>Channel: @delaemdigital</a>
                  <a className="contact-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </aside>
              <div className="card legal-card">
                <p>
                  The full contact form remains on the Russian homepage. This English route is the foundation for bilingual expansion and can point there for submission until the English form is introduced.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="/#contacts" data-analytics-event="cta_primary_click" data-analytics-label="en_to_russian_form" data-analytics-value="/#contacts">
                    Open contact form
                  </a>
                  <Link className="button button-secondary" href="/articles" data-analytics-event="cta_secondary_click" data-analytics-label="en_articles" data-analytics-value="/articles">
                    Articles
                  </Link>
                </div>
                <p style={{ marginTop: 18 }}>
                  Published cases: {publishedCases.length}. Published articles: {publishedArticles.length}.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
