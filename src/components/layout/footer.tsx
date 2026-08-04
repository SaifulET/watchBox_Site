import React from "react";
import Link from "next/link";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Intro */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight text-white">
                WatchBox
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              A modern digital marketplace offering collectors and enthusiasts an elegant, single point of access to discover, analyze, list, buy, and sell luxury watches. Find your next timepiece directly from our catalog or verified third-party aggregations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.marketplaceUrl}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  Marketplace App <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.supportEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <a href={`tel:${siteConfig.supportPhone}`} className="hover:text-white transition-colors">
                  +1 ({siteConfig.supportPhone.slice(0,3)}) {siteConfig.supportPhone.slice(3,6)}-{siteConfig.supportPhone.slice(6)}
                </a>
              </li>
              <li className="text-xs pt-2">
                Mailing Address:
                <br />
                <span className="text-stone-500">Connecticut, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-16 pt-8 border-t border-stone-900 space-y-6">
          <div className="p-4 bg-stone-900/50 rounded-xl border border-stone-900">
            <p className="text-xs text-stone-500 leading-relaxed">
              <strong className="text-stone-400">Disclaimer:</strong> Certain watch listings may be provided by third-party marketplaces such as eBay. Product availability, price, condition, shipping, and transaction terms for those listings are controlled by the respective third-party marketplace.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>
              &copy; {currentYear} {siteConfig.copyrightName}. All rights reserved.
            </p>
            <p className="tracking-wide">
              DESIGNED FOR LUXURY COLLECTORS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
