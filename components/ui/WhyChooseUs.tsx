"use client";

import React from "react";
import {
  Award,
  GitCompare,
  TrendingDown,
  Zap,
  Bell,
  Wallet,
  UserCheck,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Expert Insurance Advice",
      icon: Award,
      desc: "Our advisors help you decode policy jargon and recommend the absolute best fit for your financial goals.",
    },
    {
      title: "Compare Multiple Companies",
      icon: GitCompare,
      desc: "Get quotes from 20+ top-rated insurance providers in one place to pick the plan that suits you best.",
    },
    {
      title: "Lowest Premium Options",
      icon: TrendingDown,
      desc: "We negotiate directly with insurance partners to offer exclusive rates and highly competitive premiums.",
    },
    {
      title: "Fast Policy Issuance",
      icon: Zap,
      desc: "Instant digital policy generation with minimum paperwork so you can be insured in just a few minutes.",
    },
    {
      title: "Renewal Reminder",
      icon: Bell,
      desc: "Never risk driving or living without active cover. We send proactive, friendly renewal reminders.",
    },
    {
      title: "Cashless Claims Support",
      icon: Wallet,
      desc: "Access cashless repairs and medical services at partner centers across the country seamlessly.",
    },
    {
      title: "Dedicated Relationship Manager",
      icon: UserCheck,
      desc: "Get a single human point of contact who acts as your personal advocate during claims and disputes.",
    },
    {
      title: "24×7 Customer Assistance",
      icon: Headphones,
      desc: "Day or night, our support desk is active to assist with emergency roadside claims or medical updates.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-secondary/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-widest">
            Why Partner With Us
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Unmatched Service & Trust
          </p>
          <p className="text-lg text-slate-600 dark:text-gray-400">
            We are more than just agents. We stand by you from choosing the right coverage to settling the hardest claims.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg hover:border-primary/10 transition-all"
              >
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl w-fit shadow-xs group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-5">
                  <Icon className="h-6 w-6 text-primary dark:text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
