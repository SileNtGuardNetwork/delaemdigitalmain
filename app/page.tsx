import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ContextSection } from "@/components/sections/context-section";
import { SystemSection } from "@/components/sections/system-section";
import { AssemblySection } from "@/components/sections/assembly-section";
import { AuditSection } from "@/components/sections/audit-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WhySection } from "@/components/sections/why-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { LeadsSection } from "@/components/sections/leads-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FounderSection } from "@/components/sections/founder-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { CookieBanner } from "@/components/ui-custom/cookie-banner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ContextSection />
        <SystemSection />
        <AssemblySection />
        <AuditSection />
        <ServicesSection />
        <ProcessSection />
        <WhySection />
        <AudienceSection />
        <LeadsSection />
        <PricingSection />
        <FounderSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
