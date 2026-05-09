import type { Metadata } from "next";
import { Manrope, Onest } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { seoConfig } from "@/lib/seo";
import { YandexMetrica } from "@/components/analytics/yandex-metrica";
import { AnalyticsClickListener } from "@/components/analytics/analytics-click-listener";

const manrope = Manrope({ subsets: ["cyrillic", "latin"], variable: "--font-manrope", display: "swap" });
const onest = Onest({ subsets: ["cyrillic", "latin"], variable: "--font-onest", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  title: {
    default: seoConfig.title,
    template: `%s — ${siteConfig.name}`
  },
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      en: "/en"
    }
  },
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.baseUrl,
    siteName: siteConfig.name,
    images: [{ url: seoConfig.ogImage, width: 1200, height: 630, alt: "Делаем Диджитал — ClientFlow System" }],
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [seoConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${onest.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <YandexMetrica />
        <AnalyticsClickListener />
      </body>
    </html>
  );
}
