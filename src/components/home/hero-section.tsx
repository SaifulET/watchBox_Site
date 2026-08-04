import React from "react";
import Image from "next/image";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { companyContent } from "@/content/company";

export const HeroSection: React.FC = () => {
  const { hero } = companyContent;

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Decorative Gradient Rings */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-600/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="h-3.5 w-3.5" />
              Trusted Luxury Watch Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] font-sans">
              {hero.heading.split(", ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                  {i < 3 && <span className="text-amber-500">.</span>}
                </span>
              ))}
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed text-muted-foreground">
              {hero.subheading}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#how-it-works" aria-label={hero.ctaSecondary}>
                <Button variant="gold" size="lg" className="w-full sm:w-auto gap-2 group">
                  {hero.ctaSecondary}
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-border grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p className="text-xs text-muted-foreground">Watches Listed</p>
              </div>
              <div className="border-x border-border px-4">
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Verified Sellers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">eBay</p>
                <p className="text-xs text-muted-foreground">Integrated Sourcing</p>
              </div>
            </div>
          </div>

          {/* Luxury Product Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-6 bg-card border border-border shadow-xl hover:border-amber-500/20 transition-all duration-500 group gold-glow">
              {/* Outer Golden Glow Circle */}
              <div className="absolute inset-0 rounded-3xl bg-radial from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 flex items-center justify-center">
                {/* Floating dial lines */}
                <div className="absolute inset-4 rounded-full border border-stone-800 pointer-events-none" />
                <div className="absolute inset-12 rounded-full border border-stone-800/60 border-dashed pointer-events-none" />
                
                <Image
                  src="/images/watches/hero-watch.png"
                  alt="Luxury Gold Chronograph Watch"
                  width={340}
                  height={340}
                  className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Decorative Tag */}
              <div className="absolute -bottom-4 -left-4 bg-stone-950 text-white border border-stone-800 rounded-2xl px-5 py-3 shadow-lg z-20 flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-left">
                  <p className="text-xs text-stone-400">Available listings</p>
                  <p className="text-sm font-semibold">WatchBox Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
