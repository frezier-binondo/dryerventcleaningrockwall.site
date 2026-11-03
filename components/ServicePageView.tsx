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
} from "lucide-react";
import { COMPANY, ServiceItem, LOCATIONS } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { ContentLink } from "@/components/ContentLink";

interface ServicePageViewProps {
  service: ServiceItem;
}

export function ServicePageView({ service }: ServicePageViewProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address,
        addressLocality: COMPANY.city,
        addressRegion: COMPANY.state,
        postalCode: COMPANY.zip,
      },
    },
    areaServed: LOCATIONS.map((loc) => ({
      "@type": "City",
      name: loc.city,
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: "Services", url: "/dryer-vent-cleaning-services" },
          { name: service.title, url: `/${service.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Rockwall County Professional Service</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {service.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {service.shortDesc}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
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
                  <span>Book Free Quote</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Certified Techs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>Zero Indoor Mess</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10 prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
              {/* Content Sections from Data */}
              {service.contentSections.map((sec, idx) => (
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

              {/* Step-by-Step Process */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Our Step-by-Step Process for {service.title}
                </h2>
                <div className="space-y-4 not-prose">
                  {service.processSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="w-10 h-10 rounded-xl bg-sky-600 text-white font-extrabold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Key Benefits for Your Household
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-sky-50/60 border border-sky-100 text-sm text-slate-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required 5+ Internal Links & 1 External Link */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 not-prose">
                <h3 className="font-bold text-slate-900 text-lg mb-3">Related Services, Guides &amp; Locations</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Explore other specialized solutions and local coverage in Rockwall County:
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.internalLinks.map((link, idx) => (
                    <ContentLink key={idx} href={link.url} className="text-sm">
                      {link.text}
                    </ContentLink>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">Fire Safety Standards Authority:</span>
                  <ContentLink href={service.externalLink.url} isExternal className="text-xs">
                    {service.externalLink.text}
                  </ContentLink>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4 not-prose">
                  {service.faqs.map((f, idx) => (
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
                  title={`Book ${service.title}`}
                  subtitle="Get your free written quote today."
                />

                <div className="p-6 bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-3xl border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Serving 6 Nearby Markets</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3">Available Throughout:</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {LOCATIONS.map((loc) => (
                      <li key={loc.slug}>
                        <Link href={`/${loc.slug}`} className="hover:text-amber-400 flex items-center justify-between">
                          <span>{loc.city}, TX</span>
                          <ArrowRight className="w-3 h-3 text-slate-500" />
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
