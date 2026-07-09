"use client";

import React from "react";
import {
  Shield,
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";

export default function Footer() {
  const handleWhatsAppClick = () => {
    // Fire-and-forget: send notification email in the background
    fetch("/api/notify-whatsapp", { method: "POST" }).catch(() => {
      // Silently ignore errors — never block the user
    });
  };

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
    { name: "Get Quote", href: "#quote-form" },
  ];

  const services = [
    { name: "Vehicle Insurance", href: "#services" },
    { name: "Health Insurance", href: "#services" },
    { name: "Life Insurance", href: "#services" },
    { name: "Term Insurance", href: "#services" },
    { name: "Business Insurance", href: "#services" },
    { name: "Commercial Vehicle", href: "#services" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-20 pb-28 md:pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Logo & About */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="p-2 rounded-xl bg-primary text-white">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Ensure<span className="text-secondary">Vei</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Ensure Vei Insurance India is a premier, IRDAI-registered insurance advisory firm. We are committed to securing Indian families, vehicles, and businesses with unbiased comparisons and dedicated 24x7 claim-settlement support.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com/Ensure-Vei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-colors text-slate-400"
                aria-label="Facebook"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/Ensure-Vei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-colors text-slate-400"
                aria-label="Twitter"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/Ensure-Vei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-colors text-slate-400"
                aria-label="Instagram"
              >
                <svg className="h-4.5 w-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/Ensure-Vei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-colors text-slate-400"
                aria-label="LinkedIn"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {services.map((svc) => (
                <li key={svc.name}>
                  <a href={svc.href} className="hover:text-white transition-colors">
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Our Location
            </h4>
            
            <div className="space-y-3 text-sm font-medium">
              <a href="tel:+919876543210" className="flex items-start gap-3 hover:text-white transition-colors">
                <PhoneCall className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors"
                // onClick={handleWhatsAppClick}
              >
                <MessageSquare className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>WhatsApp: +91 98765 43210</span>
              </a>
              <a href="mailto:info@Ensure-Veiinsurance.in" className="flex items-start gap-3 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>info@Ensure-Veiinsurance.in</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>102, Premium Plaza, M.G. Road, Bengaluru, Karnataka - 560001</span>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-32 rounded-2xl overflow-hidden relative border border-slate-800">
              <iframe
                title="Ensure Vei Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9751092823616!2d77.5922!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c0000001%3A0x6e9f65ad0c0b9bb8!2sM.G.%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Bottom Grid */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs font-semibold gap-4">
          <p>© {new Date().getFullYear()} Ensure Vei Insurance India. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
