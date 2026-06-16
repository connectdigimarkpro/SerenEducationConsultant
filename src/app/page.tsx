"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Calendar, Clock, Laptop } from "lucide-react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Countries from "@/components/Countries";
import Universities from "@/components/Universities";
import InteractiveTools from "@/components/InteractiveTools";
import SuccessStories from "@/components/SuccessStories";
import ImageCatalog from "@/components/ImageCatalog";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const scrollToContactForm = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country);
    scrollToContactForm();
  };

  return (
    <>
      <Header onOpenBooking={scrollToContactForm} />
      <main className="flex-1">
        <Hero onOpenBooking={scrollToContactForm} />
        <About />
        <Services />
        <Countries onSelectCountry={handleSelectCountry} />
        <Universities />
        <InteractiveTools />
        <SuccessStories />
        <ImageCatalog />
        <Process />
        <Blog />
        <FAQ />
        <ContactForm
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </main>
      <Footer />

      {/* Floating Helpers */}
      <WhatsAppButton />
    </>
  );
}
