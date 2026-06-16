"use client";

import React from "react";
import { GraduationCap, Briefcase, Compass, ShieldCheck, Building2, Heart, CheckCircle2 } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Study Visa",
      icon: GraduationCap,
      description: "Obtain admission and study permits for top-ranked global universities in Canada, UK, USA, Australia, and Europe.",
      details: ["University Seat Booking", "Admission Essays & SOP", "GIC & Blocked Account Setup", "Visa Interview Preparation"]
    },
    {
      title: "Work Visa",
      icon: Briefcase,
      description: "Secure employment authorization, skilled worker permits, and employer-sponsored work visas worldwide.",
      details: ["Job Offer Validation", "LMIA & Employer Sponsorship", "Intra-Company Transfers", "Skilled Migration Filings"]
    },
    {
      title: "Tourist Visa",
      icon: Compass,
      description: "Fast-track visitor visa applications for vacations, family visits, or business exploration tours.",
      details: ["Travel Itinerary Design", "Financial Asset Assessment", "Sponsor Letter Writing", "Visa Filings & Biometrics"]
    },
    {
      title: "Permanent Residency",
      icon: ShieldCheck,
      description: "Legal representation for direct immigration pathways, express entry profiles, and provincial nomination programs.",
      details: ["Express Entry CRS Optimization", "Provincial Nominee Programs (PNP)", "Point Calculator Evaluation", "Permanent Resident Card Setup"]
    },
    {
      title: "Business Immigration",
      icon: Building2,
      description: "Tailored immigration programs for investors, business buyers, start-up founders, and self-employed professionals.",
      details: ["Start-up Visa Pathways", "Entrepreneur Class Relocation", "Net Worth Audit Guidance", "Business Plan Drafting"]
    },
    {
      title: "Family Sponsorship",
      icon: Heart,
      description: "Reunite with your loved ones abroad through spouse sponsorship, parent & grandparent visas, and dependency claims.",
      details: ["Spouse Open Work Permits", "Family Reunification Filings", "Super Visa Applications", "Financial Sponsorship Audits"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
            Our Offerings
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
            End-To-End Global Transition Services
          </h2>
          <p className="text-muted-text text-sm sm:text-base">
            From classroom training to university selection, and legal immigration filings to post-landing settlements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative bg-card border border-card-border hover:border-primary/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-lg text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-text leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Details Bullet List */}
                  <ul className="space-y-2 pt-4 border-t border-card-border/60">
                    {service.details.map((bullet, idx2) => (
                      <li key={idx2} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
