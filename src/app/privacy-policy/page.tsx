import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { privacyPolicyContent } from "@/content/privacy-policy";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Review the privacy practices and user rights for the ${siteConfig.name} watch marketplace platform.`,
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      data={privacyPolicyContent}
    />
  );
}
