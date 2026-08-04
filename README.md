# WatchBox - Premium Luxury Watch Marketplace Company Website

Welcome to the company website for **WatchBox**, a modern, responsive watch marketplace platform. WatchBox allows enthusiasts and collectors to discover, analyze, list, sell, and purchase luxury timepieces from our direct inventory and integrated third-party catalogs (such as eBay).

This project is built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS (v4)**.

---

## 🌟 Key Features

1. **Luxury Watch Aesthetic**: Polished, professional theme featuring slate depth, charcoal typography, and subtle gold/champagne accents.
2. **First-Party & Third-Party Identification**: Distinctive badge mappings separating direct WatchBox listings from external aggregations like eBay.
3. **Structured Homepage Layout**:
   - **Hero Section**: Strong brand-focused header featuring the luxury gold dial watch provided in the prompt.
   - **Company Description**: Organized info cards breaking down platform operations.
   - **Marketplace Sources**: Clear columns displaying own direct listings vs. eBay partner listings.
   - **Visual Steppers**: Stepper indicators for the How It Works flow, buying routes, and selling requirements.
   - **12 Feature Cards**: Clean grid showcasing search, aggregation, listing control, and account support.
   - **Trust & Transparency**: Privacy policies, secure protocols, and listing clarity.
4. **Interactive Navigation**: Sticky header with hover states and a custom mobile drawer.
5. **High-Readability Legal Layouts**: Shared template in `src/components/legal/legal-page-layout.tsx` hosting the **Privacy Policy** and **Terms and Conditions** pages with a sidebar table of contents, contact help lines, and a production placeholder warning card.
6. **Zero External Dependencies / DB Requirements**: Completely client-renderable using reusable TS data constants.

---

## 📂 Project Structure

```text
src/
  app/
    layout.tsx                  # Global fonts, metadata configurations, Navbar & Footer wrapping
    page.tsx                    # Composes Home Page sections
    privacy-policy/
      page.tsx                  # Privacy Policy page route and SEO metadata
    terms-and-conditions/
      page.tsx                  # Terms and Conditions page route and SEO metadata
    globals.css                 # Custom Tailwind v4 styling & luxury theme tokens

  components/
    layout/
      navbar.tsx                # Sticky top header and mobile drawer nav menu
      footer.tsx                # Bottom copyright, mail/phone contact lines, and eBay disclaimer
    home/
      hero-section.tsx          # Hero brand text and watch dial asset display
      company-description-section.tsx  # Dynamic grid block for company copy
      marketplace-sources-section.tsx   # Direct listings vs. third-party comparisons
      how-it-works-section.tsx  # Step-by-step collector workflow
      features-section.tsx      # Responsive 12-feature icon cards
      subscription-section.tsx  # Premium membership panel
      buying-flow-section.tsx   # Side-by-side transaction flows
      selling-flow-section.tsx  # Seller listing workflow
      trust-section.tsx         # Safety and security details
      final-cta-section.tsx     # Bottom redirection banner
    legal/
      legal-page-layout.tsx     # Reusable high-readability legal layout with sidebar table of contents
    ui/
      button.tsx                # Accessible luxury buttons
      badge.tsx                 # Mapped badges for platform sources

  content/
    company.ts                  # Reusable landing page content
    privacy-policy.ts           # Privacy Policy sections content
    terms-and-conditions.ts     # Terms & Conditions sections content

  config/
    site.ts                     # Global metadata: name, contact mail, and support phone

  types/
    content.ts                  # Shared TypeScript interfaces
```

---

## 🛠️ Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

3. **Verify lint rules**:
   ```bash
   npm run lint
   ```

4. **Compile production build**:
   ```bash
   npm run build
   ```

---

## 📄 Legal Policy Content Replacement

The legal terms (Privacy Policy & Terms and Conditions) are separated from the layout. To replace the placeholder legal text before deployment:
- Edit the content in [privacy-policy.ts](file:///c:/Saiful/modevin_frontend/src/content/privacy-policy.ts)
- Edit the content in [terms-and-conditions.ts](file:///c:/Saiful/modevin_frontend/src/content/terms-and-conditions.ts)

No JSX layout modifications are required.
