"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Canada Express Entry: CRS Score Drops in Latest Category Draws",
      category: "Canada PR",
      date: "June 12, 2026",
      readTime: "4 min read",
      excerpt: "IRCC has released draw statistics for healthcare and STEM categories, showing a significant drop in required scores.",
      content: "Immigration, Refugees and Citizenship Canada (IRCC) conducted new draws focusing on target categories. The healthcare occupations draw saw scores dip to 432, making this an ideal window for professionals who have registered their profiles in the Express Entry pool. We analyze the trend for general STEM draws, trade occupations, and provincial nominee nominations (PNP) to guide you on how to optimize your Comprehensive Ranking System (CRS) score through spouse credentials, bilingualism, and secondary job offers."
    },
    {
      id: "2",
      title: "New UK Student & Graduate Visa Policies: What You Need to Know",
      category: "UK Visa",
      date: "June 08, 2026",
      readTime: "5 min read",
      excerpt: "The UK Home Office has clarified guidelines regarding the Graduate Route visa. Read the official update details.",
      content: "The UK Government recently reviewed the Graduate Route (PSW) visa pathway, confirming it remains open for international graduates to work or look for work for up to two years (three years for doctoral graduates). However, key changes regarding dependent sponsorship and maintenance fund thresholds have been updated. Learn about the new bank deposit specifications, approved financial institutions, and guidelines for switching to Skilled Worker sponsorships."
    },
    {
      id: "3",
      title: "Australia SkillSelect Invites: High Demands for IT & Healthcare",
      category: "Australia Skilled",
      date: "May 29, 2026",
      readTime: "3 min read",
      excerpt: "The latest SkillSelect round issued high nomination volumes. Check the points scores for key occupations.",
      content: "Australia's Department of Home Affairs issued invitations in its latest federal SkillSelect round. Strong invitations were recorded for engineering, software development, secondary school teachers, and registered nurses. Point scores for Subclass 189 and Subclass 190 state nominations have normalized around 85 points. This article breaks down how to gain regional points, obtain positive skills assessments from ACS/EA, and structure your state sponsorship files."
    }
  ];

  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
            Immigration Updates
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
            Latest News & Immigration Advisory
          </h2>
          <p className="text-muted-text text-sm sm:text-base">
            Stay ahead of regulatory updates, visa rules, university intakes, and point grid adjustments.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group bg-card border border-card-border hover:border-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-muted-text">
                  <span className="text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-muted-text leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Action link */}
              <div className="mt-6 pt-4 border-t border-card-border/60 flex items-center justify-between text-xs text-foreground/80 font-bold group-hover:text-primary transition-colors">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>{post.readTime}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Follow Instagram */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-rose-600/5 dark:from-primary/10 dark:to-red-950/10 border border-card-border rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-primary uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-bounce" />
              <span>Social Media Advisory Channel</span>
            </span>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-foreground">
              Follow Seren Education for Daily Immigration & Study Abroad Updates
            </h3>
            <p className="text-xs text-muted-text max-w-xl">
              Get real-time visa success reports, student arrival vlogs, country policies updates, and IELTS preparation tips.
            </p>
          </div>
          <a
            href="https://www.instagram.com/sereneducation/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {activePost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setActivePost(null)}
              />

              {/* Modal box */}
              <div
                className="bg-card border border-card-border rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 flex flex-col p-6 sm:p-8"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-card-border/60">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-full">
                      {activePost.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground leading-snug">
                      {activePost.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-muted-text font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {activePost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {activePost.readTime}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActivePost(null)}
                    className="p-1.5 rounded-xl border border-card-border bg-card hover:bg-muted-bg text-foreground transition-all flex-shrink-0 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 py-6 space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal overflow-y-auto">
                  <p className="font-bold text-foreground leading-relaxed">
                    {activePost.excerpt}
                  </p>
                  <p className="whitespace-pre-wrap">{activePost.content}</p>
                </div>

                {/* Footer close */}
                <div className="pt-4 border-t border-card-border/60 mt-auto flex justify-end">
                  <button
                    onClick={() => setActivePost(null)}
                    className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
