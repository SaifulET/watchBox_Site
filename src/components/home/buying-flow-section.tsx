import React from "react";
import { companyContent } from "@/content/company";
import { ShoppingBag, Globe, Info } from "lucide-react";

export const BuyingFlowSection: React.FC = () => {
  const { buying } = companyContent.flows;

  return (
    <section id="buying-flow" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
            Acquisitions
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Two Streamlined Buying Flows
          </h3>
          <p className="text-lg text-muted-foreground">
            Whether purchasing a watch hosted directly by us or from our integrated third-party catalog, transactions are smooth and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {buying.map((flow, index) => {
            const isExternal = index === 1;

            return (
              <div
                key={index}
                className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-8">
                  {/* Flow Header */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                      {isExternal ? <Globe className="h-5 w-5" /> : <ShoppingBag className="h-5 w-5" />}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {flow.title}
                    </h3>
                  </div>

                  {/* Flow Steps List */}
                  <div className="relative pl-6 space-y-6">
                    {/* Vertical Connector Line */}
                    <div className="absolute left-2 top-3 bottom-3 w-0.5 bg-border" />

                    {flow.steps.map((step, sIdx) => (
                      <div key={sIdx} className="relative flex gap-4">
                        {/* Step Marker */}
                        <div className="absolute -left-6 top-1 h-4.5 w-4.5 rounded-full bg-card border-2 border-amber-500 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-foreground tracking-tight">
                            {step.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flow Footer Notice */}
                {flow.notice && (
                  <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs text-amber-600 dark:text-amber-400 flex items-start gap-2.5">
                    <Info className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{flow.notice}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
