"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import HowItWorks from "@/components/ui/HowItWorks";
import Stats from "@/components/ui/Stats";
import Testimonials from "@/components/ui/Testimonials";
import LeadForm from "@/components/ui/LeadForm";
import FAQ from "@/components/ui/FAQ";
import Footer from "@/components/ui/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import MobileStickyBar from "@/components/ui/MobileStickyBar";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import BookingModal from "@/components/ui/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => {
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenConsultationModal={openBooking} />

      {/* Statistics Section */}
      <Stats />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Lead Generation Form */}
      <LeadForm />

      {/* FAQ Accordion Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Interactive Global Elements */}
      <FloatingWhatsApp />
      <MobileStickyBar />
      <ExitIntentPopup onOpenConsultationModal={openBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
