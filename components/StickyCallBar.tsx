import React from "react";
import Link from "next/link";
import { Phone, Calendar, Flame } from "lucide-react";
import { COMPANY } from "@/lib/data";

export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${COMPANY.phone}`}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-amber-500 text-slate-950 font-black rounded-xl text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call Now</span>
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-3 px-3 bg-sky-600 text-white font-bold rounded-xl text-sm active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Free Quote</span>
        </Link>
      </div>
    </div>
  );
}
