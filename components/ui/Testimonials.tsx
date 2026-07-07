"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Business Owner, Bengaluru",
      avatar: "AS",
      color: "from-blue-500 to-indigo-600",
      stars: 5,
      review: "Excellent claim support! They helped me get my commercial vehicle claim processed in less than 3 days when I was completely lost. Their relationship manager was holding my hand through the entire documentation.",
    },
    {
      name: "Priya Nair",
      role: "IT Professional, Kochi",
      avatar: "PN",
      color: "from-emerald-500 to-teal-600",
      stars: 5,
      review: "I secured term and health cover for my elderly parents here. The advisor was extremely patient, detailed out every single exclusion, and recommended a plan with the lowest premium yet zero room for surprises.",
    },
    {
      name: "Vikram Rathore",
      role: "Restaurateur, Mumbai",
      avatar: "VR",
      color: "from-amber-500 to-orange-600",
      stars: 5,
      review: "My business and fire insurance policies were expiring, and I needed an immediate renewal. SecureShield got them active within hours. Unbelievably fast policy issuance and extremely professional response.",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-widest">
            Client Stories
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            What Our Customers Say
          </p>
          <p className="text-lg text-slate-600 dark:text-gray-400">
            Over 5,000 Indian families and business owners trust us for their protection.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          
          <div className="relative min-h-[320px] md:min-h-[260px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-12 rounded-3xl shadow-xs relative"
              >
                <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/10 dark:text-slate-700/30" />

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${testimonials[activeIndex].color} text-white font-extrabold flex items-center justify-center text-xl shadow-md shrink-0 select-none`}>
                    {testimonials[activeIndex].avatar}
                  </div>

                  {/* Rating & Author */}
                  <div className="space-y-1">
                    <div className="flex gap-1">
                      {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>

                </div>

                {/* Review text */}
                <p className="mt-6 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed italic">
                  "{testimonials[activeIndex].review}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx ? "w-8 bg-primary" : "w-2 bg-slate-200 dark:bg-slate-800"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 shadow-xs transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 shadow-xs transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
