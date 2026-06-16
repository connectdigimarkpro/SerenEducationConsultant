"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Layers, Image as ImageIcon, X, Award, MapPin, Sparkles, BadgeCheck } from "lucide-react";
import Image from "next/image";

interface CatalogItem {
  id: string;
  src: string;
  title: string;
  category: "poster" | "raw";
  country: string;
  details: string;
}

export default function ImageCatalog() {
  const items: CatalogItem[] = [
    {
      id: "1",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.00.51 (4).jpeg",
      title: "Sidharath - UK Study Permit",
      category: "poster",
      country: "United Kingdom 🇬🇧",
      details: "Official UK student visa approval congratulations poster."
    },
    {
      id: "2",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.00.51 (2).jpeg",
      title: "Aniket Kumar - Germany Study Visa",
      category: "poster",
      country: "Germany 🇩🇪",
      details: "Official German national study visa approval poster."
    },
    {
      id: "3",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.00.51.jpeg",
      title: "Mahi Sandhu - UK Tourist Visa",
      category: "poster",
      country: "United Kingdom 🇬🇧",
      details: "Official visitor visa approval poster."
    },
    {
      id: "4",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.03.18.jpeg",
      title: "Jasika - Malta Study Visa",
      category: "poster",
      country: "Malta 🇲🇹",
      details: "Official study permit congratulations poster."
    },
    {
      id: "5",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.04.26.jpeg",
      title: "Rishika - UK Study Visa",
      category: "poster",
      country: "United Kingdom 🇬🇧",
      details: "Official student visa congratulations poster."
    },
    {
      id: "6",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.00.51 (1).jpeg",
      title: "Ramneek - Europe Tourist Visa",
      category: "poster",
      country: "Europe 🇪🇺",
      details: "Official Schengen visitor visa poster."
    },
    {
      id: "7",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.07.47 (1).jpeg",
      title: "Sidharath Success Moment",
      category: "raw",
      country: "United Kingdom 🇬🇧",
      details: "Raw client photo holding visa credentials at the office."
    },
    {
      id: "8",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.07.47 (2).jpeg",
      title: "Ramneek Success Moment",
      category: "raw",
      country: "Europe 🇪🇺",
      details: "Client holding Europe visitor visa with Seren advisors."
    },
    {
      id: "9",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.07.47.jpeg",
      title: "Aniket Success Moment",
      category: "raw",
      country: "Germany 🇩🇪",
      details: "Client holding passport at the office lobby."
    },
    {
      id: "10",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.07.48 (1).jpeg",
      title: "Mahi Success Moment",
      category: "raw",
      country: "United Kingdom 🇬🇧",
      details: "Client celebrating UK tourist visa stamp with consultant."
    },
    {
      id: "11",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.07.48.jpeg",
      title: "Rishika Success Moment",
      category: "raw",
      country: "United Kingdom 🇬🇧",
      details: "Client celebrating study visa clearance at Seren."
    },
    {
      id: "12",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.07.48 (2).jpeg",
      title: "Student Success Moment",
      category: "raw",
      country: "Immigration ✈️",
      details: "Client holding visa copy in front of graduation board."
    },
    {
      id: "13",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.00.51 (3).jpeg",
      title: "Admissions Hand-off Moment",
      category: "raw",
      country: "Global 🌍",
      details: "Advisor handing off credentials folder to student."
    },
    {
      id: "14",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.00.51 (5).jpeg",
      title: "PR Pathway Celebration",
      category: "raw",
      country: "Relocation 🇨🇦",
      details: "Consultants celebrating with applicant."
    },
    {
      id: "15",
      src: "/Images/WhatsApp Image 2026-06-13 at 18.07.49.jpeg",
      title: "Visa Grant Hand-off",
      category: "raw",
      country: "International 🛫",
      details: "Advisor congratulating visa recipient."
    }
  ];

  const [activeTab, setActiveTab] = useState<"all" | "poster" | "raw">("all");
  const [previewItem, setPreviewItem] = useState<CatalogItem | null>(null);

  const filteredItems = items.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  const featuredItem = filteredItems[0];

  return (
    <section id="gallery" className="py-24 bg-linear-to-b from-card-border/5 via-card/40 to-card-border/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Proofs
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground max-w-2xl">
              Visa Approvals & Success Moment Catalog
            </h2>
            <p className="text-muted-text text-sm sm:text-base max-w-2xl">
              A modern showcase of approvals, hand-offs, and milestone moments from our office journey.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="bg-card border border-card-border rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-extrabold text-foreground">{filteredItems.length}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-text font-bold">Visible stories</div>
            </div>
            <div className="bg-card border border-card-border rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-extrabold text-foreground">3</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-text font-bold">Curated moods</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-12 border-b border-card-border/60 pb-6">
          {[
            { id: "all", label: "All Gallery", icon: Layers },
            { id: "poster", label: "Official Posters", icon: Award },
            { id: "raw", label: "Success Moments", icon: ImageIcon }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "all" | "poster" | "raw")}
                className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/15"
                    : "bg-card text-foreground/80 border-card-border hover:bg-muted-bg hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {featuredItem && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            <div className="lg:col-span-3 relative rounded-4xl overflow-hidden border border-card-border shadow-xl min-h-90 bg-card">
              <Image
                src={featuredItem.src}
                alt={featuredItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase font-extrabold tracking-[0.2em] bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-300" />
                  Featured story
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-2">
                  {featuredItem.title}
                </h3>
                <p className="text-sm sm:text-base text-white/85 max-w-2xl">
                  {featuredItem.details}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group bg-card border border-card-border rounded-[1.75rem] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div 
                  className="relative aspect-4/5 bg-muted-bg cursor-zoom-in overflow-hidden"
                  onClick={() => setPreviewItem(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Category overlay label */}
                  <span className={`absolute top-3 right-3 text-[9px] font-extrabold uppercase py-1 px-2.5 rounded-full shadow-md text-white ${
                    item.category === "poster" ? "bg-primary" : "bg-teal-600"
                  }`}>
                    {item.category === "poster" ? "Stamp Poster" : "Raw Moment"}
                  </span>
                  
                  {/* Hover icon */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 bg-white/95 rounded-full text-primary shadow-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-2 text-[10px] font-bold text-muted-text">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {item.country}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-muted-text leading-relaxed line-clamp-2">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}

          </AnimatePresence>

        </div>

      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {previewItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setPreviewItem(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-h-full w-auto h-auto max-w-lg overflow-hidden rounded-3xl bg-card border border-card-border shadow-2xl p-2 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setPreviewItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-all z-20 cursor-pointer border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-4/5 w-[90vw] max-w-110 rounded-2xl overflow-hidden bg-muted-bg">
                <Image
                  src={previewItem.src}
                  alt={previewItem.title}
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
