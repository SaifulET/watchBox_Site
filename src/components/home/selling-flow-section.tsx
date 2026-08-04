import React from "react";
import { companyContent } from "@/content/company";
import { ArrowRight, AlertTriangle } from "lucide-react";

export const SellingFlowSection: React.FC = () => {
  const { selling } = companyContent.flows;

  return (
    <section id="selling-flow" className="py-20 bg-stone-50 dark:bg-stone-900/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
            Dispersals
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {selling.title}
          </h3>
          <p className="text-lg text-muted-foreground">
            Turn your fine watch assets into capital through our simple premium seller workflow.
          </p>
        </div>

        {/* Dynamic Process Stepper */}
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {selling.steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 relative group">
                {/* Step Circle & Line */}
                <div className="flex items-center w-full justify-center md:justify-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 flex items-center justify-center border border-border group-hover:border-amber-500 transition-colors font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < 5 && (
                    <ArrowRight className="hidden lg:block h-4 w-4 text-border absolute right-[-10%] top-3 pointer-events-none" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-foreground tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stepper Footer Warning Notice */}
          <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/50 border border-border text-xs text-muted-foreground flex items-start gap-2.5">
            <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
            <span>{selling.notice}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
