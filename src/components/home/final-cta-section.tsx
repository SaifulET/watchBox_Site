import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Shield } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Decorative Gold Radial Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
          Find Your Next Watch or
          <span className="block text-amber-400 mt-1">List One of Your Own</span>
        </h2>
        <p className="max-w-xl mx-auto text-stone-400 text-sm sm:text-base leading-relaxed">
          Unlock a digital universe of timepieces. Access professional watch listings, analytical evaluation reports, and simple seller workflows.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={siteConfig.marketplaceUrl}
            className="w-full sm:w-auto"
            aria-label="Explore Marketplace"
          >
            <Button variant="gold" size="lg" className="w-full sm:w-auto gap-2">
              Explore Marketplace
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>
          <Link href="/privacy-policy" className="w-full sm:w-auto" aria-label="Read Our Policies">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-stone-800 text-stone-300 hover:bg-stone-900 hover:text-white gap-2">
              <Shield className="h-4 w-4 text-amber-500" />
              Read Our Policies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
