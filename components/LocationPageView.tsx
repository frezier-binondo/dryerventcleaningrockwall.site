import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  Check,
  ArrowRight,
  Flame,
  Clock,
  Sparkles,
  MapPin,
  HelpCircle,
  Star,
  Home,
  AlertTriangle,
} from "lucide-react";
import { COMPANY, LocationItem, SERVICES } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { ContentLink } from "@/components/ContentLink";

interface LocationPageViewProps {
  location: LocationItem;
}

export function LocationPageView({ location }: LocationPageViewProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${COMPANY.name} - ${location.city}`,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: location.city,
      addressRegion: "TX",
      postalCode: location.zipCodes[0],
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: location.city,
    },
    url: `https://dryerventcleaningrockwall.site/${location.slug}`,
    image: location.image,
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: "Service Areas", url: "/service-areas" },
          { name: `${location.city}, TX`, url: `/${location.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Local Experts in {location.city}, TX ({location.zipCodes.join(", ")})</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {location.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {location.intro}
              </p>

              {/* Neighborhoods tags */}
              <div className="pt-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Serving Key {location.city} Neighborhoods:
                </span>
                <div className="flex flex-wrap gap-2">
                  {location.neighborhoods.map((n, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-base flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Call {COMPANY.phoneFormatted}</span>
                </a>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-base flex items-center gap-2 transition-transform hover:scale-105"
                >
                  <span>Free {location.city} Estimate</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Local {location.city} Crew</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Same-Day Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>No Mess Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                <Image
                  src={location.image}
                  alt={`Dryer vent cleaning in ${location.city} TX`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Longform Localized Content (Comprehensive 2,000+ words target) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Longform Copy */}
            <div className="lg:col-span-8 space-y-10 prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
              {/* Dynamic City Content Sections */}
              {location.contentSections.map((sec, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="mb-4">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Local Housing Architecture & Common Issues */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Housing Characteristics &amp; Duct Layouts in {location.city}, TX
                </h2>
                <p>{location.housingCharacteristics}</p>
                <div className="mt-6 p-6 rounded-3xl bg-amber-50/70 border border-amber-200 not-prose">
                  <h4 className="font-bold text-amber-900 text-base mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <span>Common Dryer Vent Challenges We Solve in {location.city}:</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {location.commonIssues.map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Extended Deep-Dive Local Authority Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Why Routine Dryer Vent Care Is Crucial for {location.city} Residents
                </h2>
                <p>
                  Whether your home sits near the waterfront, in a peaceful master-planned neighborhood, or on an expansive country lot, the mechanics of dryer exhaust remain fundamentally identical. Operating your clothes dryer generates up to a gallon of water vapor per load, which must be swept outward through a 4-inch exhaust pipe at speeds exceeding 1,200 feet per minute.
                </p>
                <p className="mt-4">
                  When passing lint encounters static friction from long horizontal attic runs, corrugated transitions, or stuck exterior backdraft dampers, exhaust speed drops precipitously. Once air velocity falls below critical thresholds, heavy lint particles settle out of suspension, accumulating along pipe bottoms and within elbows.
                </p>
                <p className="mt-4">
                  According to official safety reports from the{" "}
                  <ContentLink href={location.externalLink.url} isExternal>
                    {location.externalLink.text}
                  </ContentLink>, failure to clean lint from dryer ducts is responsible for one out of every three residential clothes dryer fires. Don&apos;t wait for a burning smell or an appliance shutoff to take action.
                </p>
              </div>

              {/* Why Local Homeowners Choose Us */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Why {location.city} Homeowners Choose Our Certified Team
                </h2>
                <div className="space-y-3 not-prose">
                  {location.whyChooseUs.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required 5 Internal Anchor Links & 1 External Link */}
              <div className="p-6 bg-sky-50/70 rounded-3xl border border-sky-200 not-prose">
                <h3 className="font-bold text-sky-950 text-lg mb-2">Explore Related Services &amp; Resources</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Learn more about our complete service silos and nearby service areas:
                </p>
                <div className="flex flex-wrap gap-3">
                  {location.internalLinks.map((link, idx) => (
                    <ContentLink key={idx} href={link.url} className="text-sm">
                      {link.text}
                    </ContentLink>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-sky-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">National Safety Guideline:</span>
                  <ContentLink href={location.externalLink.url} isExternal className="text-xs">
                    {location.externalLink.text}
                  </ContentLink>
                </div>
              </div>

              {/* Localized City FAQs */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions in {location.city}, TX
                </h2>
                <div className="space-y-4 not-prose">
                  {location.faqs.map((f, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-sky-600 shrink-0 mt-1" />
                        <span>{f.q}</span>
                      </h4>
                      <p className="text-sm text-slate-600 pl-6 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                <LeadForm
                  compact
                  title={`Book in ${location.city}`}
                  subtitle={`Fast same-day service in ${location.zipCodes[0]}.`}
                />

                {/* Local Phone Call CTA */}
                <div className="p-6 bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-3xl border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Direct Local Line</span>
                  </div>
                  <h4 className="text-xl font-black mb-2">Speak to a Technician</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Have questions about your {location.city} home&apos;s roof vent or an unusual burning smell? Call us now!
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-center block text-sm shadow-lg transition-transform hover:scale-105"
                  >
                    {COMPANY.phoneFormatted}
                  </a>
                </div>

                {/* Other Services in Area */}
                <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                    Available in {location.city}
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {SERVICES.slice(0, 6).map((s) => (
                      <li key={s.slug}>
                        <Link href={`/${s.slug}`} className="hover:text-sky-600 flex items-center justify-between">
                          <span>{s.title}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
