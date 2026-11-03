"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Menu, X, Flame, Shield, MapPin, Clock } from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS } from "@/lib/data";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-sm">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-600/90 text-white font-bold tracking-wide uppercase text-[10px]">
              <Flame className="w-3 h-3 animate-pulse" /> Same-Day Service
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-sky-400" /> Rockwall, Heath, Fate, Royse City, Rowlett & Wylie, TX
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-amber-400" /> Mon-Sat 7am-7pm • 24/7 Dispatch
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-300 hidden sm:inline">Call Our Certified Techs:</span>
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-amber-400 font-extrabold hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{COMPANY.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 via-sky-700 to-slate-900 flex items-center justify-center text-white shadow-md shadow-sky-600/30 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-sky-700 transition-colors">
                Dryer Vent Cleaning <span className="text-sky-600">Rockwall</span>
              </div>
              <div className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1">
                <span>Certified Lint Removal & Safety</span>
                <span className="text-emerald-500">★ 4.9 (240+ Reviews)</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/dryer-vent-cleaning-services"
                className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 mb-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Our Dryer Vent Silo</p>
                    <Link
                      href="/dryer-vent-cleaning-services"
                      className="text-xs font-bold text-sky-600 hover:underline"
                    >
                      View All Services Overview →
                    </Link>
                  </div>
                  <div className="max-h-[380px] overflow-y-auto py-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="px-4 py-2.5 hover:bg-sky-50 text-slate-700 hover:text-sky-700 flex flex-col transition-colors group"
                      >
                        <span className="text-sm font-semibold group-hover:translate-x-1 transition-transform">{s.title}</span>
                        <span className="text-xs text-slate-500 line-clamp-1">{s.shortDesc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <Link
                href="/service-areas"
                className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>Service Areas</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {locationsDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 mb-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Rockwall County & Nearby</p>
                    <Link
                      href="/service-areas"
                      className="text-xs font-bold text-sky-600 hover:underline"
                    >
                      View All Service Hub →
                    </Link>
                  </div>
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/${loc.slug}`}
                      className="px-4 py-2.5 hover:bg-sky-50 text-slate-700 hover:text-sky-700 flex items-center justify-between transition-colors group"
                    >
                      <span className="text-sm font-semibold group-hover:translate-x-1 transition-transform">{loc.city}, TX</span>
                      <span className="text-xs text-slate-400">{loc.zipCodes[0]}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/dryer-vent-cleaning-faqs"
              className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="px-4 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 font-extrabold rounded-xl text-sm flex items-center gap-2 border border-sky-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{COMPANY.phoneFormatted}</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold rounded-xl text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY.phone}`}
              className="p-2.5 bg-amber-500 text-white rounded-xl shadow-md sm:hidden"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:bg-sky-50 hover:text-sky-600"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 px-3">
              <div className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Our Services</div>
              <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-sky-100">
                <Link
                  href="/dryer-vent-cleaning-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm font-bold text-sky-700"
                >
                  All Services Hub →
                </Link>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 text-sm text-slate-700 hover:text-sky-600"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 pb-1 px-3">
              <div className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Service Areas</div>
              <div className="grid grid-cols-2 gap-1.5 pl-2 border-l-2 border-sky-100">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/${loc.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 text-sm text-slate-700 hover:text-sky-600"
                  >
                    {loc.city}, TX
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:bg-sky-50 hover:text-sky-600"
            >
              Blog
            </Link>

            <Link
              href="/dryer-vent-cleaning-faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:bg-sky-50 hover:text-sky-600"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:bg-sky-50 hover:text-sky-600"
            >
              Contact Us
            </Link>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY.phone}`}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {COMPANY.phoneFormatted}</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-center"
              >
                Request Free Inspection & Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
