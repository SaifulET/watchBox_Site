import React from "react";
import { companyContent } from "@/content/company";

export const HowItWorksSection: React.FC = () => {
  const { howItWorks } = companyContent;

  return (
    <section id="how-it-works" className="py-20 bg-stone-50 dark:bg-stone-900/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
            Workflow
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            How WatchBox Works
          </h3>
          <p className="text-lg text-muted-foreground">
            Follow our straightforward, secure process to discover luxury watches or list your own assets.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-1/2 left-1/8 right-1/8 h-0.5 bg-border -translate-y-12 hidden lg:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {howItWorks.map((step) => (
              <div key={step.number} className="text-center space-y-6 group">
                {/* Circle Number */}
                <div className="mx-auto h-16 w-16 rounded-full bg-card border border-border group-hover:border-amber-500 flex items-center justify-center text-xl font-bold text-foreground transition-all duration-300 relative shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500/10">
                  <span className="text-amber-500">0</span>
                  {step.number}
                  
                  {/* Outer circle accent */}
                  <div className="absolute -inset-1.5 rounded-full border border-amber-500/0 group-hover:border-amber-500/20 transition-all duration-300" />
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-foreground tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
