"use client";

import React from "react";
import { Plane, Award } from "lucide-react";
import Image from "next/image";

interface CountriesProps {
  onSelectCountry: (countryName: string) => void;
}

export default function Countries({ onSelectCountry }: CountriesProps) {
  const countriesData = [
    {
      name: "Canada",
      flag: "🇨🇦",
      image: "/Countries/canada.png",
      desc: "Top destination for PG Diplomas and Master degrees. Known for PGWP and PR pathways.",
      programs: ["Computer Science", "Business Analytics", "Engineering Management"],
      badge: "Express Visa Available",
      landmark: "CN Tower, Toronto"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      image: "/Countries/australia.png",
      desc: "Warm climate, beautiful beaches, and high-ranking universities. Offers up to 4-year post-study work rights.",
      programs: ["Information Technology", "Health & Nursing", "MBA & Accounting"],
      badge: "No GRE Required",
      landmark: "Sydney Opera House"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      image: "/Countries/unitedKingdom.png",
      desc: "One-year Masters options that save time and tuition fees. Offers a 2-year Graduate Route visa.",
      programs: ["Data Science", "Finance & Economics", "Public Health"],
      badge: "Fast-Track Processing",
      landmark: "Big Ben, London"
    },
    {
      name: "United States",
      flag: "🇺🇸",
      image: "/Countries/USA.png",
      desc: "Global leader in research and tech. STEM courses provide up to 3 years of OPT work authorization.",
      programs: ["AI & Machine Learning", "Biotechnology", "Business Administration"],
      badge: "Highest ROI",
      landmark: "Statue of Liberty, NY"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      image: "/Countries/germany.png",
      desc: "Public universities offer tuition-free education. Safe, stable, and strong industrial job market.",
      programs: ["Automotive Engineering", "Data Analytics", "Sustainable Energy"],
      badge: "Tuition-Free Options",
      landmark: "Brandenburg Gate, Berlin"
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      image: "/Countries/newzeland.png",
      desc: "Stunning nature, excellent quality of life, and work opportunities under the Green List pathways.",
      programs: ["Agricultural Science", "Construction Management", "Cybersecurity"],
      badge: "Pathways to Residency",
      landmark: "Milford Sound"
    },
    {
      name: "Ireland",
      flag: "🇮🇪",
      image: "/Countries/ireland.png",
      desc: "European technology hub housing headquarters of Google, Apple, and Meta. Offers 2-year post-study work.",
      programs: ["Software Engineering", "Pharmaceutics", "Digital Marketing"],
      badge: "Tech Hub Placement",
      landmark: "Cliffs of Moher"
    },
    {
      name: "Singapore",
      flag: "🇸🇬",
      image: "/Countries/Singapore.png",
      desc: "Global financial powerhouse with close proximity to Asia. Safe, clean, and top-tier global business schools.",
      programs: ["Logistics & Supply Chain", "Global Business", "Hospitality Management"],
      badge: "Financial Hub Advantage",
      landmark: "Marina Bay Sands"
    }
  ];

  return (
    <section id="countries" className="py-24 bg-card-border/10 border-y border-card-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
            Global Destinations
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
            Explore Study & Relocation Destinations
          </h2>
          <p className="text-muted-text text-sm sm:text-base">
            Select your target country to learn about popular courses, post-study work rights, and direct entry rules.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countriesData.map((country, idx) => (
            <div
              key={idx}
              className="group bg-card border border-card-border hover:border-primary/45 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 overflow-hidden shadow-sm"
            >
              {/* Landmark Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={country.image}
                  alt={`${country.name} - ${country.landmark}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)" }}
                />
                
                {/* Floating Flag & Name */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="text-2xl shadow-sm" role="img" aria-label={`${country.name} Flag`}>
                    {country.flag}
                  </span>
                  <h3 className="font-heading font-extrabold text-white text-base drop-shadow-sm">
                    {country.name}
                  </h3>
                </div>

                {/* Floating Badge (Top Right) */}
                <span className="absolute top-3 right-4 text-[9px] font-bold text-white bg-primary py-1 px-2.5 rounded-full shadow-md">
                  {country.badge}
                </span>

                {/* Landmark Label */}
                <span className="absolute top-3 left-4 text-[8px] font-bold text-white/90 bg-black/45 backdrop-blur-xs py-0.5 px-2 rounded-md">
                  {country.landmark}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <p className="text-xs text-muted-text leading-relaxed">
                    {country.desc}
                  </p>

                  {/* Popular Programs */}
                  <div className="space-y-2 pt-3 border-t border-card-border/50">
                    <span className="text-[9px] uppercase font-extrabold tracking-wider text-foreground/70 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-primary" />
                      <span>Popular Programs</span>
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {country.programs.map((prog, pidx) => (
                        <span
                          key={pidx}
                          className="text-[9px] bg-muted-bg text-muted-text py-0.5 px-2 rounded font-medium border border-card-border/40"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => onSelectCountry(country.name)}
                  className="w-full py-3 bg-muted-bg group-hover:bg-primary text-foreground/80 group-hover:text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer border border-card-border group-hover:border-primary shadow-sm hover:shadow-md"
                >
                  <Plane className="w-3.5 h-3.5" />
                  <span>Inquire About {country.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

