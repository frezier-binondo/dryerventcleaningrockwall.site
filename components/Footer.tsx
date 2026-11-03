import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Flame, ExternalLink, Award, Sparkles } from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency CTA Strip */}
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-amber-950 rounded-3xl p-8 sm:p-10 mb-16 border border-sky-800/40 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold mb-3 border border-amber-500/30">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Fast Local Response Across Rockwall County</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Don&apos;t Let a Choked Vent Put Your Home at Risk
              </h3>
              <p className="text-slate-300 text-base max-w-2xl mt-2">
                Restore full dryer airflow, cut drying cycles in half, and protect your loved ones with our certified rotary brush cleaning.
              </p>
            </div>
            <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex-1 sm:flex-none px-5 sm:px-8 py-3.5 sm:py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-2xl text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-xl shadow-amber-500/20 hover:scale-105 transition-all whitespace-nowrap shrink-0"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" />
                <span className="whitespace-nowrap">{COMPANY.phoneFormatted}</span>
              </a>
              <Link
                href="/contact"
                className="flex-1 sm:flex-none px-5 sm:px-8 py-3.5 sm:py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl text-base sm:text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Book Free Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* REQUIRED: VISIBLE FOOTER MAP */}
        <div className="mb-16 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                <span>Our Rockwall Service Dispatch Headquarters</span>
              </div>
              <h4 className="text-2xl font-black text-white">Interactive Service Area Map</h4>
              <p className="text-sm text-slate-400 mt-1">
                Serving Rockwall, Heath, Fate, Royse City, Rowlett, and Wylie, TX.
              </p>
            </div>
            <a
              href={COMPANY.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/30 text-sm font-bold transition-colors w-fit"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-700 shadow-inner relative">
            <iframe
              src={COMPANY.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dryer Vent Cleaning Rockwall TX Service Area Map"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="p-3 bg-slate-800/60 hover:bg-slate-800 rounded-xl border border-slate-700/50 text-center transition-colors group"
              >
                <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                  {loc.city}, TX
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Zip {loc.zipCodes[0]}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white shadow-md">
                <Flame className="w-5 h-5 text-amber-300" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Dryer Vent Cleaning <span className="text-sky-400">Rockwall</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              North Texas&apos; trusted dryer exhaust safety specialists. Dedicated to residential and commercial fire prevention, airflow optimization, and energy efficiency throughout Rockwall, Lake Ray Hubbard, and surrounding communities.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="font-bold text-white hover:text-amber-400">
                  {COMPANY.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-slate-300 hover:text-white">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY.hours}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-sky-500 pl-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/dryer-vent-cleaning-services" className="font-bold text-sky-400 hover:underline">
                  All Services Hub →
                </Link>
              </li>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/service-areas" className="font-bold text-amber-400 hover:underline">
                  Service Areas Hub →
                </Link>
              </li>
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/${loc.slug}`} className="hover:text-amber-400 transition-colors">
                    {loc.city}, TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Safety Authorities */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Safety & Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 mb-6">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Safety Tips
                </Link>
              </li>
              <li>
                <Link href="/dryer-vent-cleaning-faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Free Inspection
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                  XML Sitemap
                </Link>
              </li>
            </ul>

            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-xs">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified & Insured</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Adhering strictly to NFPA 211, IRC M1502, and OSHA safety codes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} Dryer Vent Cleaning Rockwall. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/dryer-vent-cleaning" className="hover:text-slate-400">
              Dryer Vent Cleaning
            </Link>
            <Link href="/dryer-vent-cleaning-rockwall-tx" className="hover:text-slate-400">
              Rockwall, TX
            </Link>
            <Link href="/contact" className="hover:text-slate-400">
              Contact
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
