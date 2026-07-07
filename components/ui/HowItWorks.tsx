"use client";

import React from "react";
import { FileText, GitCompare, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      stepNum: "01",
      title: "Tell us your requirement",
      desc: "Fill in our quick 2-minute form or jump on a call to share what type of protection you need.",
      icon: FileText,
      color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    },
    {
      stepNum: "02",
      title: "We compare top policies",
      desc: "We analyze quotes and benefits from India's leading insurance firms to isolate optimal choices.",
      icon: GitCompare,
      color: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
    },
    {
      stepNum: "03",
      title: "Choose and get insured",
      desc: "Select the policy that fits your budget and protection goals, complete a secure payment, and you're covered!",
      icon: ShieldCheck,
      color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold text-secondary uppercase tracking-widest">
            The Process
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get Protected in 3 Easy Steps
          </p>
          <p className="text-lg text-slate-600 dark:text-gray-400">
            Getting covered shouldn't take all day. We've streamlined the entire workflow.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.stepNum}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700/60 shadow-xs flex flex-col items-center text-center group hover:shadow-md transition-shadow"
                >
                  {/* Step Bubble badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-black w-10 h-10 rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-slate-900 shadow-sm">
                    {step.stepNum}
                  </div>

                  <div className={`p-4 rounded-2xl w-fit ${step.color} mt-4 mb-6`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Arrow Connector (Desktop) */}
                {idx < 2 && (
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center text-slate-400 dark:text-slate-600"
                    style={{ left: `${(idx + 1) * 33.33 - 1.5}%` }}
                  >
                    <ArrowRight className="h-6 w-6 animate-pulse" />
                  </div>
                )}

                {/* Arrow Connector (Mobile) */}
                {idx < 2 && (
                  <div className="flex lg:hidden justify-center text-slate-400 dark:text-slate-600 my-2">
                    <ArrowDown className="h-6 w-6 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
