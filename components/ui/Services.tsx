"use client";

import React from "react";
import {
  Car,
  Users,
  Clock,
  Heart,
  Bike,
  Plane,
  Home,
  Briefcase,
  Truck,
  Flame,
  Ship,
  Activity,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Vehicle Insurance",
      icon: Car,
      color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
      description: "Comprehensive coverage for your car against accidents, theft, and third-party liabilities with zero depreciation add-ons.",
    },
    {
      title: "Life Insurance",
      icon: Users,
      color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
      description: "Secure your family's financial future and standard of living in your absence with guaranteed payouts.",
    },
    {
      title: "Term Insurance",
      icon: Clock,
      color: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
      description: "High cover life protection plans at extremely affordable premium rates. Secure massive coverage with minimal outlays.",
    },
    {
      title: "Health Insurance",
      icon: Heart,
      color: "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400",
      description: "Cashless hospitalisation across 10,000+ network hospitals in India. Coverage for critical illnesses, pre & post care.",
    },
    {
      title: "Bike Insurance",
      icon: Bike,
      color: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
      description: "Quick two-wheeler policy coverage starting at low premiums. Quick cashless repairs and claims settlement.",
    },
    {
      title: "Travel Insurance",
      icon: Plane,
      color: "bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400",
      description: "International and domestic travel policies securing your medical emergencies, baggage loss, and trip cancellations.",
    },
    {
      title: "Home Insurance",
      icon: Home,
      color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
      description: "Protect your home structure and valuable household contents against natural disasters, fire, and theft.",
    },
    {
      title: "Business Insurance",
      icon: Briefcase,
      color: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400",
      description: "Customized risk coverage plans for small and medium enterprises (SMEs), assets, liabilities, and employee benefits.",
    },
    {
      title: "Commercial Vehicle Insurance",
      icon: Truck,
      color: "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
      description: "Specially designed policies for commercial trucks, autos, and taxis to protect your logistics business.",
    },
    {
      title: "Fire Insurance",
      icon: Flame,
      color: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
      description: "Secure your commercial inventory, factories, and warehouses against damages caused by accidental fire outbreak.",
    },
    {
      title: "Marine Insurance",
      icon: Ship,
      color: "bg-blue-600/10 text-blue-700 dark:bg-blue-600/20 dark:text-blue-400",
      description: "Transit risk policies protecting cargos, ships, and freight values during inland or international water transits.",
    },
    {
      title: "Personal Accident Insurance",
      icon: Activity,
      color: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
      description: "Financial assistance, accidental medical reimbursement, and income protection in the event of major accidents.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-secondary uppercase tracking-widest">
            Our Offerings
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Comprehensive Insurance Solutions
          </p>
          <p className="text-lg text-slate-600 dark:text-gray-400">
            Compare plans from top-tier insurers and get customized advice tailormade for you, your family, or business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xs border border-slate-100 dark:border-slate-700/60 hover:shadow-xl hover:border-transparent hover:translate-y-[-4px] transition-all flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className={`p-4 rounded-2xl w-fit ${svc.color} mb-6 transition-transform group-hover:scale-110`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-secondary group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-16 text-center">
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-bold px-8 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            Looking for something else? Get Custom Advice
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
