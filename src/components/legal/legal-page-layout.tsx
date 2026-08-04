import Link from "next/link";
import { ArrowLeft, Mail, Phone, Calendar } from "lucide-react";
import { LegalPageContent } from "@/types/content";
import { siteConfig } from "@/config/site";

interface LegalPageLayoutProps {
  data: LegalPageContent;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  data,
}) => {
  return (
    <div className="bg-background min-h-screen py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4.5 w-4.5" />
            Back to Home
          </Link>
        </div>

        {/* Title Header */}
        <div className="space-y-4 border-b border-border pb-8 mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-sans">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-amber-500" />
            <span>Effective Date: {data.effectiveDate}</span>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Table of Contents (Sticky Sidebar) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 max-h-[calc(100vh-160px)] overflow-y-auto pr-4 hidden lg:block border-r border-border">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-6">
              Table of Contents
            </h2>
            <nav className="space-y-3.5">
              {data.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-muted-foreground hover:text-accent font-medium leading-normal transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Detailed Legal Content */}
          <main className="lg:col-span-8 max-w-3xl space-y-12">

            {/* Render Sections */}
            {data.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 space-y-4"
              >
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground border-b border-border/50 pb-2">
                  {section.title}
                </h2>
                
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {section.listItems && (
                  <ul className="pl-6 list-disc space-y-2 text-muted-foreground text-sm sm:text-base">
                    {section.listItems.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Bottom Contact card inside content */}
            <section className="mt-16 pt-8 border-t border-border space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Questions or Concerns?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you have questions regarding our legal documents, user rights, or transaction security, contact the WatchBox compliance desk directly:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-amber-500/30 transition-colors"
                >
                  <Mail className="h-5 w-5 text-amber-500" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Compliance Email</p>
                    <p className="text-sm font-semibold text-foreground">{siteConfig.supportEmail}</p>
                  </div>
                </a>
                <a
                  href={`tel:${siteConfig.supportPhone}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-amber-500/30 transition-colors"
                >
                  <Phone className="h-5 w-5 text-amber-500" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Phone Helpline</p>
                    <p className="text-sm font-semibold text-foreground">
                      +1 ({siteConfig.supportPhone.slice(0, 3)}) {siteConfig.supportPhone.slice(3, 6)}-{siteConfig.supportPhone.slice(6)}
                    </p>
                  </div>
                </a>
              </div>
            </section>
          </main>

        </div>
      </div>
    </div>
  );
};
