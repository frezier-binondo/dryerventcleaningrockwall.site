"use client";

import React, { useState } from "react";
import { Phone, Calendar, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { COMPANY } from "@/lib/data";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export function LeadForm({
  title = "Get a Free Fast Quote & Inspection",
  subtitle = "Lock in your same-day or priority slot across Rockwall County.",
  compact = false,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Rockwall",
    service: "Dryer Vent Cleaning",
    propertyType: "Single-Family Home",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden ${compact ? "p-6" : "p-8"}`}>
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You, {formData.name || "Neighbor"}!</h3>
          <p className="text-slate-600 mb-6">
            We received your request for dryer vent service in <span className="font-semibold text-sky-700">{formData.city}, TX</span>. A technician will call you shortly to confirm your time slot.
          </p>
          <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 inline-block text-left w-full max-w-sm">
            <p className="text-xs uppercase tracking-wider text-sky-800 font-bold mb-1">Need Immediate Assistance?</p>
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-lg font-bold text-sky-900 hover:text-amber-600 flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-amber-500" />
              Call Now: {COMPANY.phoneFormatted}
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-3">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Fast 60-Minute Response Guarantee</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h3>
            <p className="text-slate-600 text-sm mt-1">{subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Michael Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(469) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your City / Area *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm bg-white"
                >
                  <option value="Rockwall">Rockwall, TX (75087, 75032)</option>
                  <option value="Heath">Heath, TX (75032)</option>
                  <option value="Fate">Fate, TX (75087, 75132)</option>
                  <option value="Royse City">Royse City, TX (75189)</option>
                  <option value="Rowlett">Rowlett, TX (75088, 75089)</option>
                  <option value="Wylie">Wylie, TX (75098)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Service Needed *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm bg-white"
                >
                  <option value="Dryer Vent Cleaning">Dryer Vent Cleaning (Full Sweep)</option>
                  <option value="Dryer Vent Inspection">Camera Inspection & Airflow Test</option>
                  <option value="Dryer Vent Repair">Repair Damaged / Leaking Duct</option>
                  <option value="Dryer Vent Installation">New Vent Line Installation</option>
                  <option value="Dryer Vent Replacement">Upgrade to Rigid Metal Pipe</option>
                  <option value="Dryer Vent Unclogging">Emergency Blockage Clearance</option>
                  <option value="Bird Nest Removal">Bird Nest / Animal Guard Install</option>
                  <option value="Commercial Dryer Vent">Commercial / Laundromat Service</option>
                  <option value="Apartment Multi-Family">Apartment / Multi-Unit Complex</option>
                  <option value="Annual Maintenance Plan">Annual Maintenance Checkup</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Property Structure
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm bg-white"
                >
                  <option value="Single-Family Home">Single-Family 1-Story</option>
                  <option value="Two-Story (Roof Vent)">Two-Story (Roof Exhaust)</option>
                  <option value="Townhome / Condo">Townhome / Condominium</option>
                  <option value="Apartment Complex">Apartment Complex</option>
                  <option value="Commercial Facility">Commercial / Industrial Facility</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Any specific symptoms? (e.g. 2 cycles to dry, burning odor)
              </label>
              <textarea
                rows={compact ? 2 : 3}
                placeholder="Tell us if you suspect bird nests, roof vent issues, or appliance error codes..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Claim Free Quote & Schedule Service</span>
            </button>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Upfront Pricing
              </span>
              <span>•</span>
              <span>No Obligation</span>
              <span>•</span>
              <span>Local Techs</span>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
