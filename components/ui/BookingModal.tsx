"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { X, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
};

const TIME_SLOTS = [
  "10:00 AM - 10:15 AM",
  "11:30 AM - 11:45 AM",
  "02:00 PM - 02:15 PM",
  "04:30 PM - 04:45 PM",
  "06:00 PM - 06:15 PM",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isBooked, setIsBooked] = useState(false);
  const [bookedDetails, setBookedDetails] = useState<BookingFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setBookedDetails(data);
    setIsBooked(true);
    reset();
  };

  const handleClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/60 shadow-2xl p-8 overflow-hidden z-10"
          >
            {/* Top decorative bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary to-primary" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Book Free 15-Min Review
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Select a date and time slot. Our expert will call you to review your current insurance plans.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Rahul Verma"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 3, message: "Name must be at least 3 characters" },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none focus:border-primary transition-all ${
                      errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-700"
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
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Enter a valid 10-digit phone number",
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none focus:border-primary transition-all ${
                        errors.phone ? "border-red-500" : "border-slate-200 dark:border-slate-700"
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
                      placeholder="rahul@gmail.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Enter a valid email address",
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none focus:border-primary transition-all ${
                        errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-700"
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
                  {/* Date selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-secondary" />
                      Select Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      {...register("date", { required: "Please pick a date" })}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none focus:border-primary transition-all cursor-pointer ${
                        errors.date ? "border-red-500" : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {errors.date && (
                      <span className="flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.date.message}
                      </span>
                    )}
                  </div>

                  {/* Time slot selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      Select Time Slot
                    </label>
                    <select
                      defaultValue=""
                      {...register("timeSlot", { required: "Please pick a slot" })}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none focus:border-primary transition-all appearance-none cursor-pointer ${
                        errors.timeSlot ? "border-red-500" : "border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      <option value="" disabled>Choose Slot</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot} className="dark:bg-slate-800">
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.timeSlot && (
                      <span className="flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.timeSlot.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Booking */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Securing Your Slot..." : "Confirm Free Call Booking"}
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="mx-auto p-4 bg-emerald-100 dark:bg-emerald-950/50 rounded-full text-emerald-600 dark:text-emerald-400 w-fit">
                  <CheckCircle className="h-16 w-16" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Review Booked!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto">
                    Excellent, <strong className="font-semibold text-slate-800 dark:text-slate-200">{bookedDetails?.name}</strong>. Your 15-minute insurance review is scheduled. We will ring you on:
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 text-left text-sm max-w-xs mx-auto space-y-2 text-slate-600 dark:text-slate-400">
                  <p><strong>Date:</strong> {bookedDetails?.date}</p>
                  <p><strong>Time Slot:</strong> {bookedDetails?.timeSlot}</p>
                  <p><strong>Method:</strong> Direct Call Support</p>
                </div>
                <button
                  onClick={handleClose}
                  className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-bold py-3 px-8 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
