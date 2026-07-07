"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does it take to get a quote?",
      a: "For standard policies like Private Car, Two-Wheeler, and Health Insurance, you can get a quote in less than 2 minutes. Business, Commercial Fire, or Marine policies might take 1-2 hours because we evaluate complex variables to design optimal portfolios.",
    },
    {
      q: "Can I compare different insurance companies?",
      a: "Yes! We compare plans across 20+ top-rated insurance providers in India (including HDFC ERGO, ICICI Lombard, Tata AIG, Star Health, Bajaj Allianz, and SBI General) to help you get the most affordable premiums and complete features.",
    },
    {
      q: "Will you help during claims?",
      a: "Absolutely. This is our primary service pledge. We appoint a dedicated Relationship Manager to represent you. From documenting damage reports to negotiating settlement values with insurance claims divisions, we handle the stress.",
    },
    {
      q: "Is consultation free?",
      a: "Yes, our consultations are 100% free. We offer professional advice, premium quotes comparison, policy gap analysis, and claims support without charging you a single rupee.",
    },
    {
      q: "Can I renew my existing policy?",
      a: "Yes, you can renew any existing vehicle, health, or commercial policy. Simply upload your current policy schedule, and we will fetch renewal quotes from your current provider alongside alternatives to see if you can save more.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-widest">
            F.A.Q
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </p>
          <p className="text-lg text-slate-600 dark:text-gray-400">
            Got questions? We've got answers. Explore our quick guides below or reach out directly.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-primary dark:text-secondary" : "text-slate-400"}`} />
                    <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {faq.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
