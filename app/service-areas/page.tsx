import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  ArrowRight,
  Flame,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { COMPANY, LOCATIONS, SERVICES } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { ContentLink } from "@/components/ContentLink";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning Near Rockwall TX",
  description:
    "We provide dryer vent cleaning in Rockwall, Heath, Fate, Royse City, Rowlett and Wylie, TX. See your city and request service today.",
};

export default function ServiceAreasHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ name: "Service Areas", url: "/service-areas" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-4 border border-amber-500/30">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Rockwall County &amp; Nearby Markets</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Dryer Vent Cleaning Service Areas Around <span className="text-sky-400">Rockwall, TX</span>
            </h1>
            <p className="text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Prompt, reliable dryer exhaust cleaning and fire safety services for homeowners, custom lakeside estates, townhome communities, and commercial laundries across Rockwall, Heath, Fate, Royse City, Rowlett, and Wylie, Texas.
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
                <span>Check Your City Schedule</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Copy Section (900+ words) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8 prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Dedicated Regional Dryer Exhaust Coverage Across North Texas
                </h2>
                <p>
                  As Rockwall County continues to experience rapid residential growth, the demand for certified dryer exhaust cleaning has reached unprecedented levels. Modern master-planned developments in Fate and Royse City, custom lakeside golf estates in Heath, and established neighborhoods in Rowlett and Wylie all feature unique architectural duct configurations that require specialized tools and local expertise.
                </p>
                <p className="mt-4">
                  Our service vans are centrally dispatched from Rockwall, allowing us to offer prompt response times, convenient 2-hour arrival windows, and emergency same-day service throughout every municipality in our territory.
                </p>
              </div>

              {/* City Breakdown Sections */}
              <div className="space-y-6 not-prose">
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <ContentLink href="/dryer-vent-cleaning-rockwall-tx">
                      Dryer vent cleaning in Rockwall (75087, 75032)
                    </ContentLink>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    From lakeside homes in Chandlers Landing and The Harbor to established neighborhoods like Caruth Lakes and Stone Creek, we clear complex vertical duct runs and inspect roof terminations throughout the city of Rockwall.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <ContentLink href="/dryer-vent-cleaning-heath-tx">
                      Dryer vent cleaning in Heath (75032)
                    </ContentLink>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Heath is distinguished by custom estates, Buffalo Creek golf course properties, and lakeside homes with extended 35-to-45-foot duct runs that require specialized ladder equipment and gentle rotary power sweeping.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <ContentLink href="/dryer-vent-cleaning-fate-tx">
                      Dryer vent cleaning in Fate (75087, 75132)
                    </ContentLink>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    In Fate&apos;s fast-growing subdivisions like Woodcreek and Williamsburg, our technicians eliminate construction debris, replace crushed builder foil flex hoses, and restore rapid drying times for active young families.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <ContentLink href="/dryer-vent-cleaning-royse-city-tx">
                      Dryer vent cleaning in Royse City (75189)
                    </ContentLink>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We serve both newer master-planned communities like Waters Edge and historic downtown Royse City residences, resolving heavy lint buildup in roof vents and upgrading crawlspace ducting to rigid metal.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <ContentLink href="/dryer-vent-cleaning-rowlett-tx">
                      Dryer vent cleaning in Rowlett (75088, 75089)
                    </ContentLink>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Serving Rowlett&apos;s Waterview golf community and neighborhoods along Lake Ray Hubbard&apos;s western shores, we resolve humidity-induced lint clogs, animal nest blockages, and disconnected attic ducts.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <ContentLink href="/dryer-vent-cleaning-wylie-tx">
                      Dryer vent cleaning in Wylie (75098)
                    </ContentLink>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Wylie family homes built over the past two decades often feature second-floor laundry rooms that vent through roofs. We restore proper exhaust airflow and install animal guards across Woodbridge and Twin Lakes.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  All Services Available in Every City
                </h3>
                <p>
                  No matter which of our service communities you reside in, our trucks carry full equipment for{" "}
                  <ContentLink href="/dryer-vent-cleaning-services">
                    All services
                  </ContentLink>, including cleaning, video camera scoping, duct repairs, animal guard installations, and commercial service. Have a question or ready to book?{" "}
                  <ContentLink href="/contact">
                    Contact
                  </ContentLink>{" "}
                  our team today or call{" "}
                  <a href={`tel:${COMPANY.phone}`} className="font-bold text-sky-700 underline">
                    {COMPANY.phoneFormatted}
                  </a>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <LeadForm compact title="Schedule in Your City" subtitle="Local Rockwall dispatch crew." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Location Cards */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Select Your Local Community
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Click below to view neighborhood-specific details, housing challenges, customer reviews, and local pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4">
                    <Image src={loc.image} alt={loc.city} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{loc.city}, TX</h3>
                  <p className="text-xs text-sky-700 font-semibold mb-3">
                    {loc.county} • Zip: {loc.zipCodes.join(", ")}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{loc.shortDesc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/${loc.slug}`}
                    className="text-xs font-extrabold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    <span>View {loc.city} Local Page</span>
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
