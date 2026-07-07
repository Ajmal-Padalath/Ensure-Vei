"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hello,%20I'd%20like%20to%20get%20an%20insurance%20quote.";

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-lg hover:bg-emerald-600 transition-colors group cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        {/* Radar Ring pulse */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 text-white fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.485.002 9.948-4.41 9.951-9.878.001-2.65-1.026-5.141-2.89-7.009C16.517 1.85 14.027.822 11.4.822 5.922.822 1.463 5.234 1.461 10.702c-.001 1.637.442 3.23 1.282 4.646L1.751 22.22l7.07-1.854.004-.002z" />
          <path d="M12.004 3.013c-4.242 0-7.695 3.424-7.697 7.632-.001 1.547.472 3.033 1.365 4.316l.1.144-.808 2.955 3.049-.792.14.093c1.233.823 2.68 1.258 4.15 1.259 4.244.001 7.698-3.424 7.7-7.633 0-2.039-.797-3.956-2.247-5.395a7.585 7.585 0 0 0-5.397-2.235-.005.005 0 0 0-.005 0zm4.566 10.155c-.25-.124-1.479-.724-1.708-.807-.229-.083-.396-.124-.562.124-.167.248-.646.807-.791.972-.146.166-.292.186-.542.062-.25-.124-1.055-.386-2.01-1.23-.742-.656-1.243-1.467-1.389-1.715-.146-.248-.015-.383.11-.506.112-.111.25-.29.375-.434.125-.145.167-.248.25-.414.083-.166.042-.31-.021-.434-.062-.124-.562-1.343-.771-1.838-.203-.487-.41-.422-.562-.43-.146-.007-.312-.008-.479-.008a.925.925 0 0 0-.667.31c-.229.248-.875.847-.875 2.066 0 1.22.896 2.396.996 2.53.1.134 1.763 2.67 4.27 3.738.596.254 1.061.405 1.424.52.599.189 1.145.162 1.577.098.481-.072 1.479-.599 1.687-1.178.208-.578.208-1.074.146-1.178-.063-.103-.229-.165-.479-.289z" />
        </svg>

        {/* Hover Label */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-slate-900 text-white text-xs font-bold py-2 px-4 rounded-xl shadow-md whitespace-nowrap transition-transform origin-right">
          Chat with Us
        </span>
      </motion.a>
    </div>
  );
}
