import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Flame,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { ContentLink } from "@/components/ContentLink";

export const metadata: Metadata = {
  title: "Contact Us | Dryer Vent Cleaning Rockwall TX",
  description:
    "Contact us to book dryer vent cleaning in Rockwall, TX and nearby cities. Call or send a request for a fast quote and scheduling.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ name: "Contact Us", url: "/contact" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-4 border border-amber-500/30">
              <Phone className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span>Direct Customer Support &amp; Dispatch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Contact Our <span className="text-sky-400">Rockwall</span> Team
            </h1>
            <p className="text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Book professional dryer vent cleaning, request an emergency airflow inspection, or get a free flat-rate estimate. Call us directly or fill out our online form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Info */}
            <div className="lg:col-span-6 space-y-8 prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  We Are Ready to Help You Today
                </h2>
                <p>
                  At Dryer Vent Cleaning Rockwall, we take pride in delivering fast, courteous, and honest service across Rockwall, Heath, Fate, Royse City, Rowlett, and Wylie. Whether your dryer is displaying a check-vent error, clothes take multiple cycles to dry, or you are proactive about fire prevention, our team has you covered.
                </p>
                <p className="mt-4">
                  Review our complete catalog of{" "}
                  <ContentLink href="/dryer-vent-cleaning-services">
                    Our services
                  </ContentLink>{" "}
                  or check availability in our{" "}
                  <ContentLink href="/service-areas">
                    Service areas
                  </ContentLink>.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4 not-prose">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">Direct Phone Dispatch</div>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-2xl font-black text-slate-900 hover:text-amber-600 transition-colors"
                    >
                      {COMPANY.phoneFormatted}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">24/7 Emergency Assistance Available</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">Email Correspondence</div>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Responses typically in under 30 minutes</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">Office &amp; Dispatch Center</div>
                    <p className="text-base font-bold text-slate-900">{COMPANY.address}</p>
                    <a
                      href={COMPANY.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-sky-600 hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      <span>Get Driving Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">Operating Hours</div>
                    <p className="text-base font-bold text-slate-900">{COMPANY.hours}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Flexible Saturday &amp; evening slots</p>
                  </div>
                </div>
              </div>

              {/* What to Expect FAQs */}
              <div className="not-prose pt-6 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">What to Expect When You Contact Us</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Immediate conversation with a certified exhaust technician, not an overseas call center.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Clear, transparent flat-rate estimate with zero unexpected trip fees or hidden surcharges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Exact 2-hour arrival window with a 30-minute advance courtesy text before arrival.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Lead Form on Right */}
            <div className="lg:col-span-6">
              <LeadForm title="Book Your Service Now" subtitle="Fast confirmation from our Rockwall dispatch desk." />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section on Contact Page */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-900">Our Rockwall Service Location</h3>
              <p className="text-sm text-slate-600">Centrally located to dispatch across all Lake Ray Hubbard communities.</p>
            </div>
            <a
              href={COMPANY.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow transition-colors"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-300 shadow-md">
            <iframe
              src={COMPANY.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rockwall TX Dryer Vent Cleaning Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
