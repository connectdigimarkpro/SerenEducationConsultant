"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, CheckCircle, ZoomIn, X, Users, Globe, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

export default function SuccessStories() {
  const testimonials = [
    {
      name: "Sidharath",
      country: "United Kingdom",
      flag: "🇬🇧",
      program: "UK Study Visa (Approved in 10 Days)",
      review: "Getting my UK Study Permit was incredibly fast and stress-free. Seren's documentation process is unmatched. I highly recommend them to all students aiming for the UK!",
      poster: "/Images/WhatsApp Image 2026-06-13 at 18.00.51 (4).jpeg",
      rawPhoto: "/Images/WhatsApp Image 2026-06-13 at 18.07.47 (1).jpeg",
      badge: "UK Study Visa Approved"
    },
    {
      name: "Aniket Kumar",
      country: "Germany",
      flag: "🇩🇪",
      program: "Germany Student Visa",
      review: "Applying to German public universities can be overwhelming with blocking accounts and registrations. Seren Consultants guided me on every single step with complete transparency.",
      poster: "/Images/WhatsApp Image 2026-06-13 at 18.00.51 (2).jpeg",
      rawPhoto: "/Images/WhatsApp Image 2026-06-13 at 18.07.47.jpeg",
      badge: "Germany Study Visa"
    },
    {
      name: "Mahi Sandhu",
      country: "United Kingdom",
      flag: "🇬🇧",
      program: "UK Tourist Visa (Fast Track)",
      review: "I was planning a visit to the UK with my family. The consultants prepared our travel itinerary and financial declarations thoroughly. Delighted with their professional service!",
      poster: "/Images/WhatsApp Image 2026-06-13 at 18.00.51.jpeg",
      rawPhoto: "/Images/WhatsApp Image 2026-06-13 at 18.07.48 (1).jpeg",
      badge: "UK Visitor Visa Issued"
    },
    {
      name: "Jasika",
      country: "Malta",
      flag: "🇲🇹",
      program: "Malta Study Visa (Schengen)",
      review: "Securing an admit in Malta opened up Schengen opportunities for me. The interview preparation provided by Seren helped me clear my embassy visa interview on the first try.",
      poster: "/Images/WhatsApp Image 2026-06-13 at 18.03.18.jpeg",
      rawPhoto: "/Images/WhatsApp Image 2026-06-13 at 18.07.48.jpeg",
      badge: "Malta Study Permit"
    },
    {
      name: "Rishika",
      country: "United Kingdom",
      flag: "🇬🇧",
      program: "UK Study Visa (Admissions & Visa)",
      review: "The entire admission to visa journey was seamless. They proofread my Statement of Purpose and held mock interviews that made me confident about the actual visa filing.",
      poster: "/Images/WhatsApp Image 2026-06-13 at 18.04.26.jpeg",
      rawPhoto: "/Images/WhatsApp Image 2026-06-13 at 18.07.48.jpeg",
      badge: "UK Study Visa Approved"
    },
    {
      name: "Ramneek",
      country: "Europe",
      flag: "🇪🇺",
      program: "Europe Tourist Visa",
      review: "Secured my Europe Visitor Visa through Seren Consultants! The counselors made sure every document was perfectly in place to prevent any delays.",
      poster: "/Images/WhatsApp Image 2026-06-13 at 18.00.51 (1).jpeg",
      rawPhoto: "/Images/WhatsApp Image 2026-06-13 at 18.07.47 (2).jpeg",
      badge: "Europe Visa Stamp"
    }
  ];

  const stats = [
    { label: "Visa Approvals", value: "95%+", icon: ShieldCheck, desc: "Highest industry rate" },
    { label: "Clients Helped", value: "5,000+", icon: Users, desc: "Global relocations" },
    { label: "Countries Served", value: "10+", icon: Globe, desc: "Global Study pathways" },
    { label: "Expert Advisory", value: "12+", icon: Award, desc: "Certified Consultants" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isZoomed, setIsZoomed] = useState(false);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const active = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-card-border/10 border-y border-card-border/50 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
            Success Stories
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
            Trusted by Thousands of Global Achievers
          </h2>
          <p className="text-muted-text text-sm sm:text-base">
            Review the real-world visa approvals and testimonials from clients who successfully relocation to Canada, UK, Germany, and beyond.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="bg-card border border-card-border rounded-2xl p-5 text-center shadow-premium-sm hover:shadow-premium transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-foreground mb-0.5">{stat.value}</h3>
                <p className="text-xs font-bold text-foreground/80 mb-1">{stat.label}</p>
                <p className="text-[10px] text-muted-text">{stat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonial Box */}
        <div className="relative min-h-[420px] flex items-center justify-center max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full bg-card border border-card-border rounded-3xl p-6 sm:p-10 shadow-xl relative"
            >
              {/* Responsive Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Poster Display Column */}
                <div className="md:col-span-5 relative flex flex-col items-center">
                  <div 
                    className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-card-border shadow-md cursor-zoom-in group bg-muted-bg"
                    onClick={() => setIsZoomed(true)}
                  >
                    <Image
                      src={active.poster}
                      alt={`${active.name}'s Visa Poster`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/95 text-foreground px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <ZoomIn className="w-3.5 h-3.5 text-primary" />
                        <span>Inspect Visa</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-text mt-2.5 font-semibold flex items-center gap-1 select-none">
                    🔍 Click poster to inspect official stamp
                  </span>
                </div>

                {/* Testimonial & Review Column */}
                <div className="md:col-span-7 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    {/* Visa Status Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{active.badge}</span>
                    </div>

                    {/* Review text */}
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-4 w-10 h-10 text-primary/5 -z-0" />
                      <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed italic relative z-10">
                        &ldquo;{active.review}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Student profile details */}
                  <div className="flex items-center justify-between gap-4 pt-5 border-t border-card-border/60">
                    <div className="flex items-center gap-3">
                      {/* Raw Photo of student holding visa */}
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm bg-muted-bg">
                        <Image
                          src={active.rawPhoto}
                          alt={active.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h4 className="font-heading font-extrabold text-sm text-foreground">{active.name}</h4>
                        <p className="text-[10.5px] text-muted-text font-bold">
                          {active.program}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-foreground/85 font-bold bg-muted-bg py-1.5 px-3 rounded-xl border border-card-border/50">
                      <span className="text-lg">{active.flag}</span>
                      <span>{active.country}</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-16">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-card border border-card-border hover:bg-primary hover:text-white transition-all shadow-md cursor-pointer hover:border-primary"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-16">
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full bg-card border border-card-border hover:bg-primary hover:text-white transition-all shadow-md cursor-pointer hover:border-primary"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "w-6 bg-primary" : "w-2 bg-muted-bg border border-card-border"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* High-Fidelity Poster Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setIsZoomed(false)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-full max-h-full w-auto h-auto max-w-lg overflow-hidden rounded-3xl bg-card border border-card-border shadow-2xl p-2 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-all z-20 cursor-pointer border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/5] w-[90vw] max-w-[440px] rounded-2xl overflow-hidden bg-muted-bg">
                <Image
                  src={active.poster}
                  alt={`${active.name}'s Visa Approval Stamp`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 440px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
