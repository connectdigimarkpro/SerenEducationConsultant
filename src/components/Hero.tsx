"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Compass, ShieldCheck, Users, Globe, Award, Sparkles } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const stats = [
    { label: "Students Guided", value: "5000+", icon: Users, desc: "Successful career trajectories" },
    { label: "Visa Success Rate", value: "95%", icon: ShieldCheck, desc: "Highest in the industry" },
    { label: "Global Destinations", value: "10+", icon: Globe, desc: "Canada, UK, Australia & more" },
    { label: "Years Experience", value: "8+", icon: Award, desc: "Certified immigration experts" },
  ];

  const handleScrollToDestinations = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#countries");
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

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-background">
      {/* Background Gradients & Ambient Lights */}
      <div className="absolute top-1/4 -left-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-primary/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-light text-primary dark:bg-primary/10 dark:text-red-400 font-semibold text-xs uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Study & Immigration Consultants</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight"
            >
              Your Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600 dark:to-red-400">
                Global Education
              </span>{" "}
              & Immigration Success
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-text max-w-2xl leading-relaxed font-normal"
            >
              Helping students and professionals achieve their dreams of studying, working, and settling abroad with expert guidance, simplified visa applications, and proven success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={onOpenBooking}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
              </button>

              <button
                onClick={handleScrollToDestinations}
                className="bg-card hover:bg-muted-bg border border-card-border hover:border-muted px-8 py-4 rounded-2xl font-bold text-base text-foreground/80 hover:text-foreground flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Compass className="w-5 h-5" />
                <span>Explore Destinations</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Visual Block */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full aspect-[4/5] max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-card-border/80 group"
            >
              {/* Main Student Image */}
              <Image
                src="/Images/WhatsApp%20Image%202026-06-13%20at%2018.07.47.jpeg"
                alt="Immigration & Study Success"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Success Pill */}
              <div className="absolute top-4 left-4 glass-premium px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg border border-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-foreground">95% Success Rate</span>
              </div>

              {/* Floating Card: Visa Issued */}
              <div className="absolute bottom-4 left-4 right-4 glass-premium p-4 rounded-2xl border border-white/60 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇨🇦</span>
                    <div>
                      <h4 className="text-xs font-extrabold text-foreground">Canada Study Permit</h4>
                      <p className="text-[10px] text-muted-text">Approved in 12 Days</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl border border-card-border/80 glass shadow-lg"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5 p-4 rounded-2xl hover:bg-muted-bg/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold text-foreground/80">{stat.label}</p>
                  <p className="text-[10px] text-muted-text font-medium hidden sm:block">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
