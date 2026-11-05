import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  ShieldCheck,
  Check,
  ArrowRight,
  Flame,
  Wrench,
  Wind,
  Layers,
  Building2,
  CalendarCheck,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { ContentLink } from "@/components/ContentLink";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning Services Rockwall TX",
  description:
    "Explore dryer vent cleaning, inspection, repair, installation and more in Rockwall, TX. Residential and commercial service. Request a quote today.",
};

export default function ServicesHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ name: "Services", url: "/dryer-vent-cleaning-services" }]} />

      {/* Services Hub Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-4 border border-amber-500/30">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Full-Service Duct &amp; Exhaust Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Dryer Vent Cleaning Services in <span className="text-sky-400">Rockwall, TX</span>
            </h1>
            <p className="text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Whether you need routine annual lint removal, emergency clog extraction, video camera diagnostics, or a complete rigid duct replacement, our certified technicians provide precision residential and commercial solutions throughout Rockwall County.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-base flex items-center gap-2 shadow-lg transition-colors"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {COMPANY.phoneFormatted}</span>
              </a>
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-base flex items-center gap-2 transition-colors"
              >
                <span>Request Free Service Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Content & Silo Navigation (800+ Words) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8 prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Residential and Commercial Dryer Exhaust Safety in Rockwall
                </h2>
                <p>
                  A clothes dryer exhaust system is a critical ventilation pathway that expels hot air, heavy moisture, and microscopic fabric particles outside your home. When that pathway becomes restricted by dense lint mats, mechanical crushing, or animal nests, the entire appliance suffers. Drying times skyrocket, electrical and natural gas bills spike, and most critically, combustible lint is exposed to intense heating coil temperatures.
                </p>
                <p className="mt-4">
                  Our comprehensive suite of services covers every aspect of the exhaust circuit. As recommended by the{" "}
                  <ContentLink href="https://www.usfa.fema.gov" isExternal>
                    U.S. Fire Administration clothes dryer fire safety
                  </ContentLink>{" "}
                  division, routine cleaning and professional inspections prevent thousands of residential structure fires annually.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  How to Choose the Right Service for Your Property
                </h3>
                <p>
                  Not every dryer issue is identical. Many homeowners call assuming they only need a quick sweep, only to discover that their builder-grade vinyl hose has collapsed or that a European starling has constructed a nest in their roof jack. Here is how our specialized service silos address your exact needs:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                  <li>
                    <strong>Routine Cleaning:</strong> For annual maintenance, choose our core{" "}
                    <ContentLink href="/dryer-vent-cleaning">
                      Dryer Vent Cleaning
                    </ContentLink>{" "}
                    to clear lint throughout the entire duct run.
                  </li>
                  <li>
                    <strong>Diagnostics &amp; Real Estate:</strong> If you are purchasing a home or suspect hidden leaks, book a{" "}
                    <ContentLink href="/dryer-vent-inspection">
                      Dryer Vent Inspection
                    </ContentLink>{" "}
                    with full-color borescope video scoping.
                  </li>
                  <li>
                    <strong>Damaged or Disconnected Lines:</strong> If warm air or lint is leaking into your attic or utility closet, schedule{" "}
                    <ContentLink href="/dryer-vent-repair">
                      Dryer Vent Repair
                    </ContentLink>.
                  </li>
                  <li>
                    <strong>Remodels &amp; New Additions:</strong> When relocating appliances or building an addition, we provide engineered{" "}
                    <ContentLink href="/dryer-vent-installation">
                      Dryer Vent Installation
                    </ContentLink>.
                  </li>
                  <li>
                    <strong>Aging Foil Hoses:</strong> Replace combustible plastic or foil with 26-gauge rigid metal through our{" "}
                    <ContentLink href="/dryer-vent-replacement">
                      Dryer Vent Replacement
                    </ContentLink>{" "}
                    service.
                  </li>
                  <li>
                    <strong>Zero-Airflow Emergencies:</strong> When drying cycles stop completely, call for immediate{" "}
                    <ContentLink href="/dryer-vent-unclogging">
                      Dryer Vent Unclogging
                    </ContentLink>.
                  </li>
                  <li>
                    <strong>Wildlife Blockages:</strong> Protect your home against birds and rodents with humane{" "}
                    <ContentLink href="/dryer-vent-bird-nest-removal">
                      Dryer Vent Bird Nest Removal
                    </ContentLink>.
                  </li>
                  <li>
                    <strong>Commercial Facilities:</strong> We maintain high-capacity systems via{" "}
                    <ContentLink href="/commercial-dryer-vent-cleaning">
                      Commercial Dryer Vent Cleaning
                    </ContentLink>{" "}
                    and{" "}
                    <ContentLink href="/apartment-dryer-vent-cleaning">
                      Apartment Dryer Vent Cleaning
                    </ContentLink>.
                  </li>
                  <li>
                    <strong>Ongoing Prevention:</strong> Automate your home safety checkups with our annual{" "}
                    <ContentLink href="/dryer-vent-maintenance">
                      Dryer Vent Maintenance
                    </ContentLink>{" "}
                    plans.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Serving Every Neighborhood Across Rockwall County
                </h3>
                <p>
                  We dispatch certified technicians to all communities in the region, including{" "}
                  <ContentLink href="/dryer-vent-cleaning-rockwall-tx">
                    Dryer vent cleaning in Rockwall
                  </ContentLink>,{" "}
                  <ContentLink href="/dryer-vent-cleaning-heath-tx">
                    Dryer vent cleaning in Heath
                  </ContentLink>, and surrounding markets. Visit our{" "}
                  <ContentLink href="/service-areas">
                    Service areas
                  </ContentLink>{" "}
                  hub for localized information on your specific city.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <LeadForm compact title="Request Service Estimate" subtitle="Get an upfront quote in minutes." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Silo Cards */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Explore Our Individual Service Silos
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Select any service below to review detailed processes, pricing factors, and technical specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-sky-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{s.shortDesc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Target Word Count: {s.targetWordCount}+</span>
                  <Link
                    href={`/${s.slug}`}
                    className="text-xs font-extrabold text-sky-600 hover:text-amber-600 flex items-center gap-1"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
