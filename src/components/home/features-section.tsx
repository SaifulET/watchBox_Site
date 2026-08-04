import React from "react";
import * as Icons from "lucide-react";
import { companyContent } from "@/content/company";

export const FeaturesSection: React.FC = () => {
  const { features } = companyContent;

  return (
    <section id="features" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
            Platform Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Complete Suite of Watch Features
          </h3>
          <p className="text-lg text-muted-foreground">
            WatchBox brings everything a collector needs under a single, unified digital experience.
          </p>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            // Dynamically resolve lucide icons
            const IconComponent = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[feature.iconName] || Icons.HelpCircle;

            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-amber-500/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 flex items-center justify-center border border-border group-hover:bg-amber-500/10 group-hover:text-amber-500 group-hover:border-amber-500/20 transition-all duration-300">
                    <IconComponent className="h-5 w-5 shrink-0" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-foreground text-base leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
