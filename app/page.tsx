import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  ShieldCheck,
  Flame,
  Wind,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  Star,
  AlertTriangle,
  Zap,
  Check,
  Building,
  HelpCircle,
} from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS, TESTIMONIALS } from "@/lib/data";
import { LeadForm } from "@/components/LeadForm";
import { ContentLink } from "@/components/ContentLink";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning Rockwall TX | Professional Service",
  description:
    "Keep your home safe and your dryer efficient with professional dryer vent cleaning in Rockwall, TX. Remove lint, improve airflow. Request service today.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION - PHONE-FIRST CALL-FOCUSED BANNER */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Warm Ambient Glow behind CTA */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: High-Urgency Call-First Messaging */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span>Fast Same-Day Dispatch Across Rockwall County</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Dryer Vent Cleaning in <span className="text-sky-400">Rockwall, TX</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
                Don&apos;t wait for a dangerous dryer fire. If your dryer is running hot or taking 2+ cycles to dry, our certified technicians are on call right now to restore full airflow and protect your home.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                  <Wind className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>100% Lint Removal</span>
                </div>
              </div>

              {/* PRIMARY CALL CTA BUTTON ONLY (Eye-Catching, High Conversion) */}
              <div className="pt-2 space-y-3">
                <a
                  href={`tel:${COMPANY.phone}`}
                  style={{ whiteSpace: "nowrap" }}
                  className="group relative inline-flex items-center justify-center gap-4 px-7 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-950 font-black rounded-2xl text-xl sm:text-2xl shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transform hover:-translate-y-1 active:translate-y-0 transition-all border-2 border-amber-300/60 w-full sm:w-auto"
                >
                  <span className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-slate-950 text-amber-400 shadow-md group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-6 h-6 fill-current animate-bounce" />
                  </span>
                  <div className="text-left">
                    <span className="block text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-slate-900/80">
                      Tap To Call · Direct Tech Line
                    </span>
                    <span className="block tracking-tight text-slate-950 font-black text-xl sm:text-2xl">
                      Call +1&#160;(469)&#160;402&#8209;9980
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 pt-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span>
                    <strong>Available Now:</strong> Speak directly with a technician · Free upfront phone quotes
                  </span>
                </div>
              </div>

              {/* Social Proof Snippet */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white">4.9 / 5.0 Rating</strong> based on 240+ verified Rockwall homeowners
                </span>
              </div>
            </div>

            {/* Right Column: Eye-Catching Visual Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/80 group">
                <div className="relative h-80 sm:h-[440px] w-full">
                  <Image
                    src="/images/hero-dryer-vent.jpg"
                    alt="Professional Dryer Vent Cleaning Technician in Rockwall TX"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Top Live Status Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 text-xs font-bold text-white flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>On Call in Rockwall</span>
                    </div>
                    <div className="bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-lg">
                      100% Guaranteed
                    </div>
                  </div>

                  {/* Bottom Action Card Overlay */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-slate-950/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-xl flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase font-black tracking-wider text-amber-400">
                          Rotary Power Sweeping
                        </p>
                        <p className="text-sm font-bold text-white mt-0.5">
                          Commercial HEPA Negative-Air Extraction
                        </p>
                      </div>
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105 shrink-0"
                      >
                        <Phone className="w-3.5 h-3.5 fill-current" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & METRICS STRIP */}
      <section className="bg-sky-900 text-white py-8 border-b border-sky-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">2,900+</div>
              <div className="text-xs sm:text-sm text-sky-200 mt-1">U.S. Dryer Fires Per Year</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-black text-white">50%</div>
              <div className="text-xs sm:text-sm text-sky-200 mt-1">Average Drying Time Reduction</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">\$240+</div>
              <div className="text-xs sm:text-sm text-sky-200 mt-1">Typical Annual Energy Savings</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
              <div className="text-xs sm:text-sm text-sky-200 mt-1">Guaranteed Airflow Clearance</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN LOCALIZED CONTENT SECTION (OVER 2,000 WORDS COMPREHENSIVE LOCAL AUTHORITY) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Longform Copy */}
            <div className="lg:col-span-8 space-y-10 prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                  Why Professional Dryer Vent Cleaning Matters in Rockwall, TX
                </h2>
                <p>
                  Every time you tumble laundry, millions of micro-fibers shed from towels, denim, bed linens, and clothing. While the removable mesh lint filter in your dryer traps approximately 75% of this material, the remaining 25% enters the internal blower wheel and exhausts into your home&apos;s vent ductwork. Over months of regular household usage, this fine lint clings to interior corrugated pipe walls, seams, and ninety-degree elbows, creating a thick, highly combustible insulation layer.
                </p>
                <p className="mt-4">
                  According to official data published by the{" "}
                  <ContentLink href="https://www.usfa.fema.gov" isExternal>
                    U.S. Fire Administration clothes dryer fire safety
                  </ContentLink>{" "}
                  division, failure to clean lint from dryer vents is the single leading factor contributing to clothes dryer fires in residential buildings nationwide. In Rockwall County and surrounding lakeside neighborhoods, dryer venting systems face unique regional demands. Many modern two-story homes built along Lake Ray Hubbard, from The Harbor to Caruth Lakes, feature second-story utility closets or centrally positioned laundry rooms. These architectural layouts require exhaust runs extending 25 to 40 feet vertically through attics before venting through roof caps, exponentially increasing lint buildup and backpressure hazards.
                </p>
              </div>

              {/* Visual Showcase Card */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative my-8">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/images/duct-brush-close-up.jpg"
                    alt="Commercial Rotary Brush Cleaning Inside Dryer Vent"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                    <div className="text-white">
                      <span className="text-xs uppercase font-extrabold tracking-wider bg-amber-500 text-slate-950 px-3 py-1 rounded-full mb-2 inline-block">
                        Precision Rotary Sweeping
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold">
                        Commercial HEPA Negative-Air Extraction Equipment
                      </h3>
                      <p className="text-sm text-slate-200 max-w-xl mt-1">
                        We scour the full duct length without scratching metal seams or introducing dust into your Rockwall home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  The Hidden Dangers of Lake Ray Hubbard Humidity &amp; North Texas Attics
                </h2>
                <p>
                  Homes located near the shores of Lake Ray Hubbard experience higher average relative humidity compared to inland Dallas suburbs. When warm, moisture-laden exhaust air traveling from your dryer meets the cooler attic temperatures during North Texas autumn and winter months, condensation readily forms on the inner metal surface of the vent line.
                </p>
                <p className="mt-4">
                  This moisture transforms dry, floating lint into a heavy, glue-like paste that sticks tenaciously to the duct interior. Over time, this &ldquo;wet lint dam&rdquo; creates severe bottlenecks. Furthermore, during scorching North Texas summers, unconditioned attic temperatures can soar above 135°F. A choked duct passing through an overheated attic experiences compounding thermal strain, frequently causing high-limit safety thermostats to trip and forcing appliances to shut down prematurely.
                </p>
                <p className="mt-4">
                  If your appliance is currently struggling to finish loads in one cycle, explore our dedicated{" "}
                  <ContentLink href="/dryer-vent-unclogging">
                    Dryer Vent Unclogging
                  </ContentLink>{" "}
                  service or review our comprehensive guide on{" "}
                  <ContentLink href="/blog/dryer-taking-two-cycles-to-dry">
                    Why Is My Dryer Taking Two or More Cycles to Dry Clothes?
                  </ContentLink>{" "}
                  to understand how airflow blockages stress your heating coils.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Our Comprehensive 6-Step Rotary Power Scrubbing Process
                </h2>
                <p>
                  At Dryer Vent Cleaning Rockwall, we never cut corners with superficial vacuuming. A genuine safety cleaning requires a systematic mechanical approach:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                      1
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Baseline Airflow Velocity Test</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We measure baseline exhaust velocity in CFM with a digital anemometer to benchmark resistance.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                      2
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Appliance Isolation &amp; Seal</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We slide out the dryer with protective sliders and attach a sealed HEPA vacuum collection shroud.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                      3
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Rotary Brush Scrubbing</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Spinning composite brush rods navigate all 90-degree elbows, scrubbing caked lint from inner walls.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                      4
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Exterior Roof &amp; Wall Terminal Check</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We inspect and clear exterior backdraft flappers, roof jacks, and ensure dampers swing fully open.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                      5
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Transition Hose Safety Audit</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We inspect the rear connection hose, replacing crushed or combustible foil with semi-rigid metal.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                      6
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Post-Service CFM Certification</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      A final velocity measurement confirms full factory exhaust specifications have been restored.
                    </p>
                  </div>
                </div>

                <p>
                  For homes with complex layouts or older ductwork, we also perform dedicated{" "}
                  <ContentLink href="/dryer-vent-inspection">
                    Dryer Vent Inspection
                  </ContentLink>{" "}
                  with high-definition video scoping to detect concealed structural joint separations inside walls.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Preventing Bird Nests and Wildlife Intrusion in Rockwall County
                </h2>
                <p>
                  Every spring, starlings, grackles, and house sparrows search Rockwall neighborhoods for warm, sheltered cavities to build nests. An exterior dryer vent hood—especially one without a protective guard or with a damaged damper—is a prime target.
                </p>
                <p className="mt-4">
                  Within 48 hours, birds can pack several feet of exhaust piping with flammable twigs, dry grass, feathers, and mud. Operating your dryer against a nest can ignite a fire within minutes. Our team provides specialized{" "}
                  <ContentLink href="/dryer-vent-bird-nest-removal">
                    Dryer Vent Bird Nest Removal
                  </ContentLink>{" "}
                  coupled with code-approved animal exclusion guards that prevent wildlife from entering while allowing lint to exhaust freely. Learn more about prevention in our guide on{" "}
                  <ContentLink href="/blog/prevent-bird-nests-dryer-vent">
                    How to Prevent Bird Nests in Your Dryer Vent
                  </ContentLink>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Energy Efficiency: Why a Clean Vent Pays for Itself
                </h2>
                <p>
                  An electric clothes dryer is one of the highest wattage appliances in any Texas residence, drawing between 3,000 and 5,000 watts during active drying cycles. When a duct is choked with lint, air cannot circulate freely, forcing the dryer to run two or three consecutive cycles to dry a single load of towels or denim.
                </p>
                <p className="mt-4">
                  Running double cycles wastes substantial electricity each month. In addition, the prolonged heat exposure degrades fabric fibers, causes garments to shrink, and wears out internal dryer components like the drum belt, blower wheel, and heating element. Scheduling annual service through our{" "}
                  <ContentLink href="/dryer-vent-maintenance">
                    Dryer Vent Maintenance
                  </ContentLink>{" "}
                  program keeps your appliance operating at optimal efficiency, saving your household hundreds of dollars every year.
                </p>
              </div>
            </div>

            {/* Right Sidebar Widget */}
            <div className="lg:col-span-4 space-y-8">
              {/* Emergency Call Box */}
              <div className="p-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white fill-current" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-2">Need Service Today?</h3>
                  <p className="text-amber-100 text-sm mb-6 leading-relaxed">
                    Our service vans are operating throughout Rockwall and nearby cities right now. Call for same-day dispatch!
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="w-full py-3.5 px-4 bg-slate-950 hover:bg-slate-900 text-white font-extrabold rounded-xl text-center flex items-center justify-center gap-2 text-base transition-colors shadow-lg"
                  >
                    <span>{COMPANY.phoneFormatted}</span>
                  </a>
                </div>
              </div>

              {/* Service Areas Quick Links */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
                <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sky-600" />
                  <span>Nearby Local Service Hubs</span>
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <ContentLink href="/dryer-vent-cleaning-rockwall-tx">
                      Dryer vent cleaning in Rockwall
                    </ContentLink>
                  </li>
                  <li>
                    <ContentLink href="/dryer-vent-cleaning-heath-tx">
                      Dryer vent cleaning in Heath
                    </ContentLink>
                  </li>
                  <li>
                    <ContentLink href="/dryer-vent-cleaning-fate-tx">
                      Dryer vent cleaning in Fate
                    </ContentLink>
                  </li>
                  <li>
                    <ContentLink href="/dryer-vent-cleaning-royse-city-tx">
                      Dryer vent cleaning in Royse City
                    </ContentLink>
                  </li>
                  <li>
                    <ContentLink href="/dryer-vent-cleaning-rowlett-tx">
                      Dryer vent cleaning in Rowlett
                    </ContentLink>
                  </li>
                  <li>
                    <ContentLink href="/dryer-vent-cleaning-wylie-tx">
                      Dryer vent cleaning in Wylie
                    </ContentLink>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <Link
                    href="/service-areas"
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                  >
                    <span>Explore All Service Areas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Recent Articles Card */}
              <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-4">Fire Safety &amp; Dryer Guides</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <ContentLink href="/blog/signs-your-dryer-vent-needs-cleaning">
                      7 Signs Your Dryer Vent Needs Professional Cleaning
                    </ContentLink>
                  </li>
                  <li>
                    <ContentLink href="/blog/dryer-vent-cleaning-home-fire-safety">
                      Why Dryer Vent Cleaning Is Important for Home Fire Safety
                    </ContentLink>
                  </li>
                  <li>
                    <ContentLink href="/blog/how-often-should-you-clean-your-dryer-vent-rockwall-tx">
                      How Often Should You Clean Your Dryer Vent in Rockwall, TX?
                    </ContentLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW GRID (LINKING TO ALL 10 SERVICE PILLARS) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              Comprehensive Duct Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3">
              Full-Spectrum Dryer Vent Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              From residential lint extraction to commercial laundromat manifolds, we solve every exhaust challenge across Rockwall County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-sky-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/${service.slug}`}
                    className="text-sm font-extrabold text-sky-600 group-hover:text-amber-600 flex items-center gap-1.5"
                  >
                    <span>Learn More &amp; Pricing</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/dryer-vent-cleaning-services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-2xl text-base shadow-lg transition-colors"
            >
              <span>Explore All 10 Services in Detail</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS STRIP (LINKING TO ALL 6 LOCAL CITIES) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-amber-600 font-extrabold uppercase tracking-wider text-xs">
                Local Service Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                Proudly Serving Rockwall &amp; Nearby Markets
              </h2>
            </div>
            <Link
              href="/service-areas"
              className="text-sky-600 hover:text-sky-800 font-bold text-sm flex items-center gap-1"
            >
              <span>View Service Areas Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={loc.image}
                    alt={`Dryer vent cleaning in ${loc.city} TX`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    {loc.city}, TX
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <Link href={`/${loc.slug}`} className="hover:text-sky-600">
                    {loc.h1}
                  </Link>
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {loc.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {loc.neighborhoods.slice(0, 3).map((n, i) => (
                    <span key={i} className="text-[11px] bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600">
                      {n}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/${loc.slug}`}
                  className="text-xs font-bold text-amber-600 group-hover:text-amber-700 flex items-center gap-1"
                >
                  <span>Explore {loc.city} Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL CUSTOMER REVIEWS / TESTIMONIALS */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What Rockwall County Homeowners Say
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Verified 5-star feedback from your neighbors across Rockwall, Heath, Fate, and Rowlett.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed mb-4">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-700/60">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-sky-400">{t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOMEPAGE FAQS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sky-600 font-bold uppercase tracking-wider text-xs">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Learn how our Rockwall dryer vent cleaning process protects your home and appliances.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                How often should I clean my dryer vent in Rockwall, TX?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most single-family homes require professional dryer vent cleaning once every 12 months. However, households with large families running daily laundry, shedding pets, or homes with long roof vent runs should schedule service every 6 to 9 months.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                How long does a professional dryer vent cleaning take?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Standard single-family residential cleaning usually takes 45 to 75 minutes. This includes pre- and post-cleaning digital airflow testing, rotary power brush sweeping, HEPA containment extraction, and exterior hood inspection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Can a clogged dryer vent really cause a house fire?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. Dryer lint is intensely combustible. When exhaust airflow is restricted, internal cabinet temperatures can exceed 250°F, directly igniting against heating coils and spreading into wall framing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                How much does dryer vent cleaning cost in Rockwall?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Standard residential cleanings typically range from \$119 to \$189 depending on duct length and whether exhaust terminates on a ground-level wall or a steep two-story roof pitch. Call +14694029980 for an upfront estimate.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/dryer-vent-cleaning-faqs"
              className="inline-flex items-center gap-2 font-bold text-sky-600 hover:text-sky-800 text-sm"
            >
              <span>View All 12 Dryer Vent FAQs &amp; Answers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ONLINE ESTIMATE & LEAD CAPTURE SECTION (Moved from Hero Banner) */}
      <section id="schedule-online" className="py-20 bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
                <Clock className="w-3.5 h-3.5" />
                <span>Prefer To Schedule Online?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Request Your Rockwall Inspection Estimate
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Prefer not to call right now? Submit your service details below. Our local Rockwall dispatch desk reviews requests throughout the day and will confirm your appointment with upfront, flat-rate pricing.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Fast 15-Minute Response Time</h3>
                    <p className="text-slate-400 text-sm mt-0.5">During service hours, we confirm appointments and provide instant answers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Upfront Flat-Rate Pricing</h3>
                    <p className="text-slate-400 text-sm mt-0.5">No surprise travel charges or hidden fees across Rockwall County.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Zero-Obligation Estimate</h3>
                    <p className="text-slate-400 text-sm mt-0.5">Full airflow and duct evaluation before any work begins.</p>
                  </div>
                </div>
              </div>

              {/* Emergency Call-First Reminder Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-sky-950/40 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                <div>
                  <p className="text-xs uppercase font-extrabold tracking-wider text-amber-400">Need Immediate Help?</p>
                  <p className="text-sm font-bold text-white mt-0.5">Our certified dispatchers are taking calls now.</p>
                </div>
                <a
                  href={`tel:${COMPANY.phone}`}
                  style={{ whiteSpace: "nowrap" }}
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 shrink-0 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 fill-current shrink-0" />
                  <span>Call {COMPANY.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900/90 p-2 sm:p-4 rounded-3xl border border-slate-800 shadow-2xl">
                <LeadForm
                  title="Schedule Your Inspection"
                  subtitle="Fast confirmation from our local Rockwall dispatch desk."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION SECTION */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Ready for a Safer, Faster-Drying Home in Rockwall?
          </h2>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto mb-8">
            Call our local technicians now for immediate dispatch or schedule your free airflow evaluation online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-2xl text-lg flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call {COMPANY.phoneFormatted}</span>
            </a>
            <Link
              href="#schedule-online"
              className="px-8 py-4 bg-white hover:bg-slate-100 text-sky-900 font-bold rounded-2xl text-lg transition-all hover:scale-105"
            >
              <span>Book Appointment Online</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
