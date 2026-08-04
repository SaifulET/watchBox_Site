import { FeatureItem, HowItWorksStep, MarketplaceSource, BuySellFlow } from "../types/content";

export const companyContent = {
  hero: {
    heading: "Discover, Analyze, Buy, and Sell Exceptional Watches",
    subheading: "Explore watches from our own marketplace and trusted third-party platforms such as eBay. Compare listings, review detailed information, analyze watch data, and find the right timepiece from one convenient platform.",
    ctaPrimary: "Explore Watches",
    ctaSecondary: "Learn How It Works",
  },
  
  description: {
    heading: "A Modern Vision for Watch Enthusiasts",
    intro: "Our company provides a modern online marketplace for discovering, analyzing, buying, and selling watches. The platform displays watches listed directly through our application as well as watch listings provided through integrated third-party marketplaces such as eBay.",
    paragraphs: [
      "Users can search for watches, browse available listings, view product images, review detailed watch information, compare relevant data, and access listing analysis from one platform.",
      "When a user chooses to purchase a watch listed by a third-party marketplace such as eBay, the user is redirected to the relevant marketplace website to complete the transaction. Third-party purchase events may be received and processed by our platform through supported tracking or webhook integrations.",
      "Watches listed directly through our marketplace can be purchased within our application using the available checkout and payment process.",
      "Certain marketplace features require an active subscription. Subscribed users may access supported watch discovery features, search across available marketplace listings, review detailed information and analysis, and create their own watch listings.",
      "A subscribed user can add a watch to the marketplace, provide its information, images, price, condition, and other relevant details. Other users may then discover and purchase that watch through the platform.",
      "Our goal is to create a convenient and trusted watch marketplace where users can discover watches from multiple sources, understand available listings, list their own watches, and connect with potential buyers."
    ]
  },

  sources: [
    {
      title: "Own Marketplace",
      badge: "WatchBox Direct",
      description: "Direct sales and listings managed end-to-end within the WatchBox ecosystem.",
      isExternal: false,
      details: [
        { title: "Direct Listings", items: ["Watches listed by the company", "Watches listed by subscribed users"] },
        { title: "Transactions", items: ["Purchases completed inside the application", "Listing management and purchase history"] },
        { title: "Product Assets", items: ["Product images, details, condition, and pricing"] }
      ]
    },
    {
      title: "Third-Party Marketplace",
      badge: "Partner Integrations",
      description: "Imported listings displaying watches from external platforms such as eBay.",
      isExternal: true,
      details: [
        { title: "Platform Sourced", items: ["Listings imported or displayed from marketplaces such as eBay", "Product details and images displayed inside the platform"] },
        { title: "Transactions", items: ["Users redirected to the original marketplace for purchase", "Transactions are governed by the third-party marketplace"] },
        { title: "Pricing & Stock", items: ["Third-party availability and pricing may change dynamically"] }
      ]
    }
  ] as MarketplaceSource[],

  howItWorks: [
    {
      number: 1,
      title: "Subscribe",
      description: "Users activate a subscription to access supported marketplace features."
    },
    {
      number: 2,
      title: "Search and Discover",
      description: "Users search and browse watches from the internal marketplace and integrated third-party sources."
    },
    {
      number: 3,
      title: "Review and Analyze",
      description: "Users view images, specifications, seller details, condition, price, related information, and available listing analysis."
    },
    {
      number: 4,
      title: "Buy or Sell",
      description: "Users purchase internal listings through the application, follow third-party links for external listings, or create their own watch listing."
    }
  ] as HowItWorksStep[],

  features: [
    { title: "Advanced Watch Search", description: "Filter by brand, model, case size, movement type, year, and price range.", iconName: "Search" },
    { title: "Internal Marketplace Listings", description: "Browse and buy direct watches listed by our verified collectors and members.", iconName: "Layers" },
    { title: "eBay Marketplace Integration", description: "Seamlessly search and display watch listings aggregated directly from eBay.", iconName: "Globe" },
    { title: "Detailed Product Information", description: "Review complete watch specifications, condition reports, and seller details.", iconName: "FileText" },
    { title: "Multiple Product Images", description: "View watches from multiple angles through standard, high-resolution galleries.", iconName: "Image" },
    { title: "Watch Listing Analysis", description: "Compare price metrics and historical market listings to evaluate market values.", iconName: "TrendingUp" },
    { title: "Subscription-Based Access", description: "Unlock exclusive search, discovery, listing creation, and analytics tools.", iconName: "ShieldAlert" },
    { title: "User-Created Listings", description: "Subscribed users can list their own watches with simple forms and photos.", iconName: "PlusCircle" },
    { title: "Secure Internal Purchasing", description: "Complete transactions safely for internal listings through our checkout system.", iconName: "Lock" },
    { title: "Third-Party Redirection", description: "Easily navigate to external platforms with transparent purchase transfers.", iconName: "ArrowUpRight" },
    { title: "Seller Listing Management", description: "Track active listings, update descriptions, and manage asking prices.", iconName: "Sliders" },
    { title: "Purchase & Sales History", description: "Keep detailed receipts and records of past transactions in one place.", iconName: "Clock" }
  ] as FeatureItem[],

  subscription: {
    description: "An active subscription may be required to access advanced watch discovery, marketplace search, detailed listing information, analysis tools, and watch-selling features.",
    cta: "View Subscription Options"
  },

  flows: {
    buying: [
      {
        title: "Internal Watch Purchase",
        steps: [
          { title: "View watch", description: "Browse listings inside WatchBox" },
          { title: "Review details", description: "Check condition, size, and pictures" },
          { title: "Add to checkout", description: "Proceed to secure checkout" },
          { title: "Complete payment", description: "Finalize purchase directly inside the app" }
        ]
      },
      {
        title: "Third-Party Purchase (eBay)",
        steps: [
          { title: "View watch", description: "Discover the watch in our integrated search" },
          { title: "Review details", description: "Check seller and listing details on our platform" },
          { title: "Continue to marketplace", description: "Redirect transparently to eBay" },
          { title: "Complete purchase", description: "Check out on the third-party website" }
        ],
        notice: "External transactions are handled entirely by the relevant third-party provider."
      }
    ] as BuySellFlow[],
    
    selling: {
      title: "How to Sell Your Watch",
      steps: [
        { title: "Subscribe", description: "Activate your seller subscription plan" },
        { title: "Create a listing", description: "Click sell and fill in the watch details" },
        { title: "Add watch details & images", description: "Provide high-quality photos, condition and price" },
        { title: "Submit or publish", description: "Publish the listing directly to the marketplace" },
        { title: "Buyers discover", description: "Interested buyers find your watch through search" },
        { title: "Complete transaction", description: "Finalize payment and ship the timepiece" }
      ],
      notice: "Seller eligibility, listing approval, fees, and transaction rules may be governed by the platform's policies."
    }
  },

  trust: [
    { title: "Clear Listing Identification", description: "First-party and third-party eBay listings are clearly marked with distinctive badges.", iconName: "CheckCircle" },
    { title: "Transparent Redirection", description: "You are always notified before being redirected to external third-party sites for purchasing.", iconName: "ExternalLink" },
    { title: "Detailed Product Information", description: "We display comprehensive watch parameters to help you make informed decisions.", iconName: "Info" },
    { title: "Secure Account Access", description: "All profile details and membership settings are guarded using secure protocols.", iconName: "Lock" },
    { title: "Privacy-Focused Data Handling", description: "We protect your data and do not sell your personal details to advertising networks.", iconName: "EyeOff" },
    { title: "Clearly Accessible Legal Policies", description: "Our Terms and Privacy terms are always available and linked in the footer.", iconName: "FileCheck" }
  ]
};
