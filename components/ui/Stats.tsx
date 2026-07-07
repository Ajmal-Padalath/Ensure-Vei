"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const CountUp: React.FC<CounterProps> = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalFrames = Math.min(Math.floor(duration / 16), 120); // capping frames around 60-120
    const increment = end / totalFrames;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      start += increment;
      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-extrabold tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function Stats() {
  const stats = [
    { target: 5000, suffix: "+", label: "Happy Customers" },
    { target: 10000, suffix: "+", label: "Policies Issued" },
    { target: 98, suffix: "%", label: "Claim Support Success" },
    { target: 10, suffix: "+", label: "Years of Experience" },
  ];

  return (
    <section className="py-20 bg-primary dark:bg-slate-900 border-y border-white/10 relative overflow-hidden">
      {/* Decorative light overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-emerald-500/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </div>
              <p className="text-sm sm:text-base font-semibold text-sky-200 dark:text-sky-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
