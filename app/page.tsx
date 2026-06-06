import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { WhatIBuildSection } from "@/components/sections/what-i-build-section";
import { WhyItWorksSection } from "@/components/sections/why-it-works-section";
import { InternalProofSection } from "@/components/sections/internal-proof-section";
import { ProductLadderV2Section } from "@/components/sections/product-ladder-v2-section";
import { ProcessV2Section } from "@/components/sections/process-v2-section";
import { FounderSection } from "@/components/sections/founder-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { CookieBanner } from "@/components/ui-custom/cookie-banner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatIBuildSection />
        <WhyItWorksSection />
        <InternalProofSection />
        <ProductLadderV2Section />
        <ProcessV2Section />
        <FounderSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
