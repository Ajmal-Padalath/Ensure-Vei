"use client";

import React from "react";
import { Phone, MessageSquare, FileText } from "lucide-react";

export default function MobileStickyBar() {
  const telLink = "tel:+919876543210";
  const whatsappUrl = "https://wa.me/919876543210?text=Hello,%20I'd%20like%20to%20get%20an%20insurance%20quote.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg px-4 py-3">
      <div className="grid grid-cols-3 gap-3">
        {/* Call Now */}
        <a
          href={telLink}
          className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
        >
          <Phone className="h-5 w-5 text-primary" />
          <span className="text-[10px] font-black uppercase tracking-wider">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors border border-emerald-500/10"
        >
          <MessageSquare className="h-5 w-5 text-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Get Quote */}
        <a
          href="#quote-form"
          className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white transition-colors shadow-xs"
        >
          <FileText className="h-5 w-5 text-accent" />
          <span className="text-[10px] font-black uppercase tracking-wider">Get Quote</span>
        </a>
      </div>
    </div>
  );
}
