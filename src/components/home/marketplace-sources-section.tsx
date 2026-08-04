import React from "react";
import { companyContent } from "@/content/company";
import { Badge } from "../ui/badge";
import { Check, Shield, ArrowUpRight, ShoppingBag, Globe } from "lucide-react";

export const MarketplaceSourcesSection: React.FC = () => {
  const { sources } = companyContent;

  return (
    <section id="marketplace-sources" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
            Marketplace Diversity
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Understand Our Marketplace Sources
          </h3>
          <p className="text-lg text-muted-foreground">
            We provide a blended marketplace experience, drawing timepieces from direct listings and verified global third parties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sources.map((source, index) => (
            <div
              key={index}
              className={`p-8 sm:p-12 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                source.isExternal
                  ? "bg-stone-900 border-stone-800 text-stone-100"
                  : "bg-card border-border shadow-xs text-foreground"
              }`}
            >
              {/* Top Accent Bar */}
              <div
                className={`absolute top-0 inset-x-8 h-1 rounded-b-full ${
                  source.isExternal ? "bg-amber-500/45" : "bg-stone-950"
                }`}
              />

              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    {source.isExternal ? (
                      <Globe className="h-6 w-6 text-amber-500" />
                    ) : (
                      <ShoppingBag className="h-6 w-6 text-amber-500" />
                    )}
                    <h3 className="text-2xl font-bold tracking-tight">{source.title}</h3>
                  </div>
                  <Badge variant={source.isExternal ? "gold" : "primary"}>
                    {source.badge}
                  </Badge>
                </div>

                <p className={`text-base ${source.isExternal ? "text-stone-400" : "text-muted-foreground"}`}>
                  {source.description}
                </p>

                <div className="h-px bg-border/20 my-6"></div>

                {/* Details list */}
                <div className="space-y-6">
                  {source.details.map((detail, dIndex) => (
                    <div key={dIndex} className="space-y-3">
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${
                        source.isExternal ? "text-amber-400" : "text-amber-600"
                      }`}>
                        {detail.title}
                      </h4>
                      <ul className="space-y-2">
                        {detail.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-2.5 text-sm leading-relaxed">
                            <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              source.isExternal ? "bg-amber-500/20 text-amber-400" : "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                            }`}>
                              {source.isExternal ? (
                                <ArrowUpRight className="h-2.5 w-2.5" />
                              ) : (
                                <Check className="h-3 w-3" />
                              )}
                            </span>
                            <span className={source.isExternal ? "text-stone-300" : "text-muted-foreground"}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-6 border-t border-border/10 flex items-center gap-2.5 text-xs">
                <Shield className="h-4 w-4 text-amber-500 shrink-0" />
                <span className={source.isExternal ? "text-stone-400" : "text-muted-foreground"}>
                  {source.isExternal
                    ? "Purchase takes place on eBay. Third-party rules apply."
                    : "Secure internal checkout. Covered by WatchBox policies."}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
