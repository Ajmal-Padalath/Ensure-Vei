"use client";

import React from "react";
import Image from "next/image";
import heroBg from "../../public/hero-bg.png";
import { CheckCircle2, ChevronRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenConsultationModal?: () => void;
}

export default function Hero({ onOpenConsultationModal }: HeroProps) {
  const trustBadges = [
    "Trusted Advisor",
    "Fast Claim Support",
    "Multiple Insurance Partners",
    "Free Consultation",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Decorative ambient blobs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-sky-300 text-xs font-semibold tracking-wide uppercase"
            >
              🇮🇳 Dedicated to Protecting Indian Families
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
            >
              Protect What <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Matters Most.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Compare the best insurance plans from India's leading insurers. Get expert guidance for <strong className="font-semibold text-slate-800 dark:text-slate-200">Vehicle, Life, Health, Term, Travel, Home, and Business Insurance</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-bold px-8 py-4 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:translate-y-[-2px] transition-all"
              >
                Get Your Free Quote in 2 Min
                <ChevronRight className="h-5 w-5" />
              </a>
              <button
                onClick={onOpenConsultationModal}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-base font-semibold px-8 py-4 rounded-2xl shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all"
              >
                <Calendar className="h-5 w-5 text-secondary" />
                Book Free 15-Min Review
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto lg:mx-0 text-left"
            >
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {badge}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full aspect-square md:max-w-lg lg:max-w-none mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl blur-2xl -z-10" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass shadow-xl border border-white/20 dark:border-slate-800/40 p-4">
              <Image
                src={heroBg}
                alt="Ensure Vei - Vehicle, Life, Health, Family Protection Services India"
                fill
                priority
                className="object-cover rounded-2xl select-none"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
