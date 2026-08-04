import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CompanyDescriptionSection } from "@/components/home/company-description-section";
import { MarketplaceSourcesSection } from "@/components/home/marketplace-sources-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { FeaturesSection } from "@/components/home/features-section";
import { SubscriptionSection } from "@/components/home/subscription-section";
import { BuyingFlowSection } from "@/components/home/buying-flow-section";
import { SellingFlowSection } from "@/components/home/selling-flow-section";
import { TrustSection } from "@/components/home/trust-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Watch Marketplace`,
  description: "Discover, analyze, buy, and sell watches from our marketplace and integrated third-party platforms.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <CompanyDescriptionSection />
      <MarketplaceSourcesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <SubscriptionSection />
      <BuyingFlowSection />
      <SellingFlowSection />
      <TrustSection />
      <FinalCtaSection />
    </div>
  );
}
