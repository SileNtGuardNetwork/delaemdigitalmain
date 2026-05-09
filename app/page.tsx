import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { LossMapSection } from "@/components/sections/loss-map-section";
import { ClientFlowSystemSection } from "@/components/sections/clientflow-system-section";
import { AuditSection } from "@/components/sections/audit-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import {
  AssemblySection,
  AudienceSection,
  FaqSection,
  FounderSection,
  ProcessSection,
  ServicesSection,
  WhyItWorksSection
} from "@/components/sections/homepage-structure-sections";
import { CookieBanner } from "@/components/ui-custom/cookie-banner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LossMapSection />
        <ClientFlowSystemSection />
        <AssemblySection />
        <AuditSection />
        <ServicesSection />
        <ProcessSection />
        <WhyItWorksSection />
        <AudienceSection />
        <PricingSection />
        <FounderSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
