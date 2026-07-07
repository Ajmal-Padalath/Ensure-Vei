"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, AlertCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name: string;
  phone: string;
  email: string;
  insuranceType: string;
  city: string;
  message: string;
};

const INSURANCE_TYPES = [
  "Vehicle Insurance",
  "Life Insurance",
  "Term Insurance",
  "Health Insurance",
  "Bike Insurance",
  "Travel Insurance",
  "Home Insurance",
  "Business Insurance",
  "Commercial Vehicle Insurance",
  "Fire Insurance",
  "Marine Insurance",
  "Personal Accident Insurance",
];

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmittedData(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="quote-form" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/60 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Form Pitch (Left Side on Desktop) */}
          <div className="md:col-span-5 bg-primary text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Background design */}
            <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-emerald-800/40 opacity-80" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secondary/15 blur-2xl" />

            <div className="relative space-y-6">
              <div className="p-3 bg-white/10 w-fit rounded-xl">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold tracking-tight">
                  Get Your Free Quote
                </h3>
                <p className="text-sm text-sky-100 leading-relaxed font-light">
                  Complete our simple 2-minute request and our expert insurance advisors will prepare customized policies that save you up to 30% on premiums.
                </p>
              </div>
            </div>

            <div className="relative pt-8 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-secondary animate-ping" />
                <span className="text-xs font-semibold text-sky-200 uppercase tracking-widest">
                  Active Support
                </span>
              </div>
              <p className="text-xs text-sky-200">
                Quotes sourced from top Indian insurers like ICICI, HDFC, Tata AIG, SBI & Star Health.
              </p>
            </div>
          </div>

          {/* Form / Success Screen (Right Side) */}
          <div className="md:col-span-7 p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Request Details
                  </h4>

                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Verma"
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 3, message: "Name must be at least 3 characters" },
                      })}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none transition-colors focus:border-primary ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter a valid 10-digit Indian phone number",
                          },
                        })}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none transition-colors focus:border-primary ${
                          errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700"
                        }`}
                      />
                      {errors.phone && (
                        <span className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@gmail.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Enter a valid email address",
                          },
                        })}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none transition-colors focus:border-primary ${
                          errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700"
                        }`}
                      />
                      {errors.email && (
                        <span className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Insurance Type */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Insurance Type
                      </label>
                      <select
                        defaultValue=""
                        {...register("insuranceType", { required: "Please select an insurance type" })}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none transition-colors focus:border-primary appearance-none cursor-pointer ${
                          errors.insuranceType ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700"
                        }`}
                      >
                        <option value="" disabled>Select Insurance</option>
                        {INSURANCE_TYPES.map((type) => (
                          <option key={type} value={type} className="dark:bg-slate-800">
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.insuranceType && (
                        <span className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.insuranceType.message}
                        </span>
                      )}
                    </div>

                    {/* City */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Delhi"
                        {...register("city", { required: "City name is required" })}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none transition-colors focus:border-primary ${
                          errors.city ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700"
                        }`}
                      />
                      {errors.city && (
                        <span className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.city.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details like existing policy expiry date or custom requests..."
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none transition-colors focus:border-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-1px] transition-all disabled:opacity-50 text-center flex items-center justify-center cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Calculating Premium...
                      </span>
                    ) : (
                      "Get My Quote"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center items-center text-center py-10 space-y-6"
                >
                  <div className="p-4 bg-emerald-100 dark:bg-emerald-950/50 rounded-full text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="h-16 w-16" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                      Quote Request Submitted!
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm">
                      Thank you, <strong className="font-semibold text-slate-800 dark:text-slate-200">{submittedData?.name}</strong>. Our relationship manager will call you within the next 15 minutes.
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl w-full max-w-sm border border-slate-100 dark:border-slate-800 text-left text-xs space-y-2 text-slate-600 dark:text-slate-400">
                    <p><strong>Insurance Type:</strong> {submittedData?.insuranceType}</p>
                    <p><strong>Phone:</strong> {submittedData?.phone}</p>
                    <p><strong>City:</strong> {submittedData?.city}</p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Request another quote
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
