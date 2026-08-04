import React from "react";
import { companyContent } from "@/content/company";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import { ShieldCheck, Gem } from "lucide-react";

export const SubscriptionSection: React.FC = () => {
  const { subscription } = companyContent;

  return (
    <section id="subscription" className="py-20 bg-stone-50 dark:bg-stone-900/30 border-y border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-stone-950 text-white p-8 sm:p-12 md:p-16 border border-stone-800 shadow-2xl flex flex-col md:flex-row items-center gap-10 md:justify-between gold-glow">
          {/* Background Decorative Mesh */}
          <div className="absolute top-[-50%] right-[-20%] w-[300px] h-[300px] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

          {/* Left Block */}
          <div className="space-y-6 max-w-xl text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Gem className="h-3 w-3" />
              WatchBox Premium Membership
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Unlock Advanced Collector Tools
            </h3>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              {subscription.description}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6 text-xs text-stone-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-500" /> Cancel anytime
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-500" /> Premium support
              </span>
            </div>
          </div>

          {/* Right Button */}
          <div className="shrink-0 relative z-10 w-full md:w-auto text-center">
            <a
              href={siteConfig.marketplaceUrl}
              className="inline-block w-full sm:w-auto"
              aria-label={subscription.cta}
            >
              <Button variant="gold" size="lg" className="w-full sm:w-auto whitespace-nowrap shadow-lg shadow-amber-500/20 hover:scale-105">
                {subscription.cta}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
