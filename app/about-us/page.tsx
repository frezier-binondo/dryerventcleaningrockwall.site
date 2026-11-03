import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Clock,
  Flame,
  Phone,
  ArrowRight,
} from "lucide-react";
import { COMPANY } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { ContentLink } from "@/components/ContentLink";

export const metadata: Metadata = {
  title: "About Us | Dryer Vent Cleaning Company Rockwall TX",
  description:
    "Meet your local Rockwall, TX dryer vent cleaning team. Learn about our experience, equipment and commitment to safe, clean, efficient dryers.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ name: "About Us", url: "/about-us" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-4 border border-amber-500/30">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Certified Local Specialists</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              About Our Rockwall <span className="text-sky-400">Dryer Vent Cleaning Company</span>
            </h1>
            <p className="text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Dedicated to residential fire safety, appliance efficiency, and community protection throughout Rockwall County and Lake Ray Hubbard.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Story (800+ Words) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8 prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Our Mission: Preventing Dryer Fires and Saving Energy
                </h2>
                <p>
                  Dryer Vent Cleaning Rockwall was founded on a simple, uncompromising principle: every family deserves a home protected against preventable mechanical fires. While many homeowners diligently replace air conditioning filters and test smoke alarms, dryer exhaust vents are frequently out of sight and out of mind until an appliance breaks down or a scary burning odor occurs.
                </p>
                <p className="mt-4">
                  Our company was established specifically to bridge this safety gap in Rockwall and surrounding communities. Unlike general handyman outfits or carpet cleaning companies that perform dryer vent sweeps as an afterthought, dryer exhaust airflow dynamics is our singular, dedicated specialty. We invest in high-torque rotary brush whip systems, industrial-grade HEPA negative air containment vacuums, and calibrated digital airflow anemometers to deliver verified results every single time.
                </p>
              </div>

              {/* Image Banner */}
              <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200 my-8">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
                  alt="Certified Dryer Vent Cleaning Technician in Rockwall TX"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Our Team, Training &amp; Safety Standards
                </h3>
                <p>
                  Every technician representing Dryer Vent Cleaning Rockwall undergoes rigorous background checks and extensive classroom and field training. We train our crew on the International Residential Code (IRC M1502), National Fire Protection Association (NFPA 211) exhaust standards, and OSHA ladder safety regulations for multi-story roofline access.
                </p>
                <p className="mt-4">
                  When our technician arrives at your home, they wear clean protective shoe covers, lay down clean drop cloths in your laundry room, and handle your appliances with utmost care. We treat your residence with the respect it deserves, ensuring zero dust, lint, or debris escapes into your living areas.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Transparent Pricing &amp; Our Customer Promise
                </h3>
                <p>
                  We operate with 100% upfront flat-rate pricing. You will never encounter unexpected trip charges, surprise fuel surcharges, or aggressive sales tactics. Before any work begins, we inspect your duct setup and provide a clear, written quote.
                </p>
                <p className="mt-4">
                  Discover more about{" "}
                  <ContentLink href="/dryer-vent-cleaning-services">
                    Our services
                  </ContentLink>, explore our dedicated page for{" "}
                  <ContentLink href="/dryer-vent-cleaning-rockwall-tx">
                    Dryer vent cleaning in Rockwall
                  </ContentLink>, check our comprehensive{" "}
                  <ContentLink href="/service-areas">
                    Service areas
                  </ContentLink>, or simply{" "}
                  <ContentLink href="/contact">
                    Contact us
                  </ContentLink>{" "}
                  today to schedule your appointment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <LeadForm compact title="Schedule With Our Team" subtitle="Speak with a certified technician." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
