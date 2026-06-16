"use client";

import React from "react";
import { CheckCircle2, Award, Briefcase, GraduationCap, Scale } from "lucide-react";

export default function About() {
  const benefits = [
    {
      title: "Certified Consultants",
      description: "Our counselors are ICCRC members and certified education agents with years of legal training.",
      icon: Award
    },
    {
      title: "Personalized Guidance",
      description: "We review your academic background, finances, and preferences to draft a custom roadmap.",
      icon: GraduationCap
    },
    {
      title: "Transparent Process",
      description: "Zero hidden charges. Complete clarity on documentation fees, university tuition, and visa processing.",
      icon: Scale
    },
    {
      title: "End-to-End Support",
      description: "From shortlisting universities and SOP editing, to student visa lodgment and post-landing airport pick-ups.",
      icon: Briefcase
    }
  ];

  const team = [
    {
      name: "Baldish Singh",
      role: "Founder & Chief Counselor",
      bio: "Baldish has over 12 years of experience in higher education consulting and has personally mentored over 2,000 students."
    },
    {
      name: "Deep Kaur",
      role: "CEO & Head of Visa & Immigration",
      bio: "Deep specializes in student visas, express entry pathways, and work permits with a stellar 98.4% success record."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card-border/10 border-y border-card-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
              Who We Are
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
              Empowering Global Ambitions with Trust and Transparency
            </h2>
            <p className="text-muted-text text-base sm:text-lg leading-relaxed">
              At Seren Education Consultants, we believe global relocation is not just about changing locations—it&apos;s about expanding horizons. Founded on the values of integrity, quality, and thoroughness, we guide you through the maze of international education and immigration.
            </p>
            <p className="text-muted-text text-sm sm:text-base leading-relaxed">
              Our team consists of regulatory certified agents and industry veterans who ensure every application is treated with individual focus. We align your academic potential and career aspirations with the best possibilities worldwide.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-card border border-card-border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-muted-text leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Founder & Team Cards */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
              Meet the Leaders
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
              Our Certified Advisory Panel
            </h2>
            <p className="text-muted-text text-sm sm:text-base">
              Connect with highly trained counselors and registered immigration practitioners dedicated to your global transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="relative bg-card border border-card-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-rose-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="space-y-4">
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-heading font-extrabold text-2xl text-primary border border-primary/20 shadow-inner">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-heading font-extrabold text-lg text-foreground">
                      {member.name}
                    </h4>
                    <p className="text-xs font-bold text-primary">{member.role}</p>
                  </div>

                  <p className="text-xs text-muted-text leading-relaxed italic pt-2">
                    &ldquo;{member.bio}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-card-border/50 mt-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-foreground/80">
                    Consultant Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
