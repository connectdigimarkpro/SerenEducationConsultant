"use client";

import React from "react";
import { Trophy, Globe, BookOpen } from "lucide-react";

export default function Universities() {
  const universities = [
    {
      name: "University of Toronto",
      country: "Canada",
      flag: "🇨🇦",
      ranking: "QS World Rank #21",
      courses: ["Computer Science", "Engineering", "Commerce"],
      badge: "Top Public Research"
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      flag: "🇦🇺",
      ranking: "QS World Rank #14",
      courses: ["MBA & Finance", "Data Science", "Biomedicine"],
      badge: "Group of Eight Lead"
    },
    {
      name: "Imperial College London",
      country: "United Kingdom",
      flag: "🇬🇧",
      ranking: "QS World Rank #6",
      courses: ["Mechanical Eng", "AI & Robotics", "Business Analytics"],
      badge: "STEM Powerhouse"
    },
    {
      name: "University of Sydney",
      country: "Australia",
      flag: "🇦🇺",
      ranking: "QS World Rank #19",
      courses: ["Management", "Software Engineering", "Nursing"],
      badge: "Stellar Employability"
    },
    {
      name: "University of British Columbia",
      country: "Canada",
      flag: "🇨🇦",
      ranking: "QS World Rank #34",
      courses: ["Forestry", "Information Systems", "Economics"],
      badge: "Scenic Campus Rank"
    },
    {
      name: "University of Auckland",
      country: "New Zealand",
      flag: "🇳🇿",
      ranking: "QS World Rank #68",
      courses: ["Civil Engineering", "Project Management", "AgTech"],
      badge: "NZ's Leading School"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
            Premium Partners
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
            Study at Top-Tier Global Universities
          </h2>
          <p className="text-muted-text text-sm sm:text-base">
            We guide you to secure admission at world-renowned institutions with excellent academic records and career prospects.
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, idx) => (
            <div
              key={idx}
              className="relative bg-card border border-card-border hover:border-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Decorative accent blob inside card */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full filter blur-xl group-hover:bg-primary/10 transition-colors duration-300" />

              <div className="space-y-4 relative">
                {/* Header Flag & Ranking */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl" role="img" aria-label={`${uni.country} flag`}>
                    {uni.flag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>{uni.ranking}</span>
                  </div>
                </div>

                {/* Name & Badge */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest font-extrabold text-primary">
                    {uni.badge}
                  </span>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                    {uni.name}
                  </h3>
                </div>

                {/* Popular Courses */}
                <div className="pt-4 border-t border-card-border/60 space-y-2">
                  <span className="text-[10px] uppercase font-extrabold text-muted-text tracking-wide flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    <span>Flagship Courses</span>
                  </span>
                  <ul className="grid grid-cols-1 gap-1">
                    {uni.courses.map((course, cidx) => (
                      <li key={cidx} className="text-xs text-foreground/80 font-medium flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-card-border/50 mt-6 flex items-center justify-between text-xs">
                <span className="text-muted-text font-medium flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  <span>{uni.country}</span>
                </span>
                <span className="font-bold text-primary group-hover:underline cursor-pointer">
                  Learn Entry Requirements &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
