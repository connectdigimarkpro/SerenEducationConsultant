"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Which countries do you support?",
      a: "We support studies and relocation in Canada, Australia, the United Kingdom, the United States, Germany, Ireland, New Zealand, and Singapore. Our consultants handle university selection, admissions, scholarships, and visas for all of these destinations."
    },
    {
      q: "What is your visa success rate?",
      a: "We maintain a 95% visa success rate. This high rate is due to our rigorous profile assessment process, document verification policies, and personalized mock visa interviews conducted by registered advisors."
    },
    {
      q: "Do you provide IELTS coaching?",
      a: "Yes! We offer comprehensive coaching for IELTS and PTE (Academic). Our training includes certified instructors, personalized speaking mock tests, extensive study material, and weekly computer-based test assessments."
    },
    {
      q: "Can you help with scholarships?",
      a: "Absolutely. We match eligible students with academic, merit-based, and country-specific scholarships. Our team helps you write compelling Statement of Purpose (SOP) drafts to maximize your funding chances."
    },
    {
      q: "How long does the visa process take?",
      a: "Processing times vary by destination. Typically, UK student visas take 2-3 weeks, Canada study permits under SDS take 4-8 weeks, and Australia visas average 4-6 weeks. We recommend starting the process 4-6 months before your intakes."
    },
    {
      q: "Do you provide PR consultation?",
      a: "Yes, we offer post-landing guidance and consultation for Permanent Residency. We advise on Express Entry systems, Provincial Nominee Programs (PNP) in Canada, and skilled relocation green lists in Australia and New Zealand."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-card-border/10 border-y border-card-border/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
            FAQ Panel
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
            Frequently Answered Questions
          </h2>
          <p className="text-muted-text text-sm sm:text-base">
            Find quick answers to common queries about global university entries, visas, and documentation timelines.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-heading font-extrabold text-sm sm:text-base text-foreground">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-text flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-text leading-relaxed border-t border-card-border/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
