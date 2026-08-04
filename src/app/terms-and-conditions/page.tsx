import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { termsAndConditionsContent } from "@/content/terms-and-conditions";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${siteConfig.name}`,
  description: `Review the terms and conditions of use for the ${siteConfig.name} watch marketplace platform.`,
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      data={termsAndConditionsContent}
    />
  );
}
