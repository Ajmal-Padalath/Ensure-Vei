"use client";

import React, { useEffect, useState } from "react";
import { X, Gift, ShieldAlert, CheckCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExitIntentPopupProps {
  onOpenConsultationModal?: () => void;
}

export default function ExitIntentPopup({ onOpenConsultationModal }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // If we've already shown it in this session, don't bind event listeners
    const sessionShown = sessionStorage.getItem("exit_popup_shown");
    if (sessionShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect mouse leaving the top of the viewport (typical exit intent)
      if (e.clientY < 15 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exit_popup_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBook = () => {
    setIsVisible(false);
    if (onOpenConsultationModal) {
      onOpenConsultationModal();
    } else {
      const formEl = document.getElementById("quote-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/60 shadow-2xl p-8 overflow-hidden z-10"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="space-y-6 text-center">
              <div className="mx-auto p-4 bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 rounded-full w-fit">
                <Gift className="h-10 w-10 animate-bounce" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Wait! Before You Go...
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Is your family or business fully covered? Let our experts analyze your existing policies to spot hidden traps and save you cash.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 text-left space-y-3">
                <h4 className="text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-widest">
                  What you get in the free review:
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Identification of coverage gaps & exclusions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Premium cost audit (Save up to 30%)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Claim-settlement capability score check</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleBook}
                  className="flex-1 bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="h-5 w-5 text-accent" />
                  Book Free 15-Min Review
                </button>
                <button
                  onClick={handleClose}
                  className="py-4 px-6 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                >
                  No, thanks
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
