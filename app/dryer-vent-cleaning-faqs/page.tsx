import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  Phone,
  Flame,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { COMPANY, FAQS_LIST, SERVICES, LOCATIONS } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { ContentLink } from "@/components/ContentLink";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning FAQs | Rockwall TX Answers",
  description:
    "Answers to common dryer vent cleaning questions in Rockwall, TX: cost, frequency, fire risk, warning signs and what to expect. Ask us anything.",
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_LIST.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ name: "FAQs", url: "/dryer-vent-cleaning-faqs" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-4 border border-amber-500/30">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Expert Dryer Vent Answers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Dryer Vent Cleaning <span className="text-sky-400">FAQs</span>
            </h1>
            <p className="text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Have questions about dryer vent cleaning costs, frequency, safety hazards, or our rotary brush process in Rockwall, TX? Find detailed, honest answers from our certified technicians below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & FAQs List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* FAQ List */}
            <div className="lg:col-span-8 space-y-8 prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Everything You Need to Know About Dryer Vent Care
                </h2>
                <p>
                  Lint buildup inside laundry exhaust ducts is one of the most underestimated home hazards in North Texas. Routine maintenance not only safeguards your home against thermal fires, but also protects your appliance components and saves substantial electricity every month.
                </p>
                <p className="mt-4">
                  Learn more about our core{" "}
                  <ContentLink href="/dryer-vent-cleaning">
                    Dryer vent cleaning
                  </ContentLink>{" "}
                  and{" "}
                  <ContentLink href="/dryer-vent-inspection">
                    Dryer vent inspection
                  </ContentLink>{" "}
                  procedures, or read our pricing breakdown on{" "}
                  <ContentLink href="/blog/dryer-vent-cleaning-cost-rockwall-tx">
                    Dryer vent cleaning cost
                  </ContentLink>.
                </p>
              </div>

              {/* 10+ Detailed FAQ items */}
              <div className="space-y-6 not-prose pt-4">
                {FAQS_LIST.map((faq, idx) => (
                  <div
                    key={faq.id}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold">
                        {faq.category}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">Question #{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Required Links Box */}
              <div className="p-6 bg-slate-100/80 rounded-3xl border border-slate-200 not-prose my-8">
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  Official Safety Guidelines &amp; Direct Assistance
                </h4>
                <p className="text-xs text-slate-600 mb-4">
                  Review safety documentation from respected authorities or speak with our Rockwall team:
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <ContentLink href="/contact">
                    Contact Our Team
                  </ContentLink>
                  <ContentLink href="https://www.usfa.fema.gov" isExternal>
                    U.S. Fire Administration clothes dryer fire safety
                  </ContentLink>
                  <ContentLink href="https://www.cpsc.gov" isExternal>
                    CPSC clothes dryer safety
                  </ContentLink>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <LeadForm
                  compact
                  title="Ask Our Rockwall Experts"
                  subtitle="Have a unique duct setup? Request a free quote."
                />

                <div className="p-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl text-white shadow-xl">
                  <h4 className="text-lg font-black mb-2">Prefer to Talk on the Phone?</h4>
                  <p className="text-xs text-amber-100 leading-relaxed mb-4">
                    Our certified technicians can diagnose common symptoms and provide transparent estimates over the phone.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="w-full py-3 bg-slate-950 hover:bg-slate-900 text-white font-extrabold rounded-xl text-center block text-sm transition-colors"
                  >
                    Call {COMPANY.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
