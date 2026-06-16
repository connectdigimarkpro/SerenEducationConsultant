"use client";

import React from "react";
import { MessageSquare, BarChart3, FileText, Send, Plane } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Connect with our certified experts to share your goals and explore potential visa and immigration tracks.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Eligibility Assessment",
      desc: "We conduct a thorough evaluation of your academic records, language test scores, career experience, and finances.",
      icon: BarChart3
    },
    {
      step: "03",
      title: "Documentation",
      desc: "Collect and organize all required papers, draft SOPs/LORs, manage block accounts, and build a pristine application portfolio.",
      icon: FileText
    },
    {
      step: "04",
      title: "Application Submission",
      desc: "Our dedicated immigration and legal desk packages your file and submits it to university portals or embassy systems.",
      icon: Send
    },
    {
      step: "05",
      title: "Approval & Relocation",
      desc: "Receive your approved visa stamp, attend pre-departure orientations, coordinate airport pickup, and relocate seamlessly.",
      icon: Plane
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
            Our Blueprint
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
            Your Structured Roadmap to Success
          </h2>
          <p className="text-muted-text text-sm sm:text-base">
            We follow a streamlined, client-first process that keeps you informed at every single checkpoint of your transition.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical central bar (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-card-border/80 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left/Right Card (staggered) */}
                  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:px-12">
                    <div
                      className={`w-full max-w-lg bg-card border border-card-border p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4 ${
                        isEven ? "lg:text-left" : "lg:text-right"
                      }`}
                    >
                      <div className={`flex items-center gap-3 ${!isEven && "lg:flex-row-reverse"}`}>
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                            Step {item.step}
                          </span>
                          <h3 className="font-heading font-extrabold text-lg text-foreground">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="relative flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-primary border-4 border-background text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-md shadow-primary/20">
                      {item.step}
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout balancing */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
