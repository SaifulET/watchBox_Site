export interface LegalSection {
  id: string;
  title: string;
  content: string[];
  listItems?: string[];
}

export interface LegalPageContent {
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

export interface SourceDetail {
  title: string;
  items: string[];
}

export interface MarketplaceSource {
  title: string;
  badge: string;
  description: string;
  details: SourceDetail[];
  isExternal: boolean;
}

export interface FlowStep {
  title: string;
  description: string;
}

export interface BuySellFlow {
  title: string;
  steps: FlowStep[];
  notice?: string;
}
