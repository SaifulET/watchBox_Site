import React from "react";
import { companyContent } from "@/content/company";
import * as Icons from "lucide-react";

export const TrustSection: React.FC = () => {
  const { trust } = companyContent;

  return (
    <section id="trust" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
            Values
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Trust & Transparency First
          </h3>
          <p className="text-lg text-muted-foreground">
            We hold ourselves to a premium standard of integrity, safety, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trust.map((item, index) => {
            const IconComponent = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[item.iconName] || Icons.Shield;

            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-amber-500/20 hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/15 shrink-0">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-foreground text-base tracking-tight leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
