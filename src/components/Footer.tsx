"use client";

import React from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
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
    <footer className="relative bg-card border-t border-card-border pt-16 pb-8 text-foreground/90 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-md">
                <Logo className="scale-[0.55] origin-center" />
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight flex flex-col">
                <span className="text-foreground">SEREN</span>
                <span className="text-[9px] uppercase font-sans tracking-widest text-muted-text -mt-1">
                  Education Consultants
                </span>
              </span>
            </div>
            <p className="text-sm text-muted-text leading-relaxed">
              Helping students and professionals achieve their dreams of studying, working, and settling abroad with expert guidance, verified pathways, and proven success.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { 
                  name: "Facebook", 
                  href: "https://facebook.com", 
                  className: "bg-[#1877F2] text-white border-[#1877F2]/40 hover:bg-[#145dc8] hover:border-[#145dc8]",
                  svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> 
                },
                { 
                  name: "Twitter", 
                  href: "https://twitter.com", 
                  className: "bg-[#1DA1F2] text-white border-[#1DA1F2]/40 hover:bg-[#0f8de0] hover:border-[#0f8de0]",
                  svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg> 
                },
                { 
                    name: "Instagram", 
                    href: "https://www.instagram.com/sereneducation/", 
                  className: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white border-transparent hover:opacity-95",
                  svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> 
                },
                { 
                  name: "LinkedIn", 
                  href: "https://linkedin.com", 
                  className: "bg-[#0A66C2] text-white border-[#0A66C2]/40 hover:bg-[#084f97] hover:border-[#084f97]",
                  svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
                }
              ].map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${social.className}`}
                    aria-label={social.name}
                  >
                    {social.svg}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest text-foreground uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Company", href: "#about" },
                { name: "Our Services", href: "#services" },
                { name: "Destinations", href: "#countries" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Eligibility tools", href: "#tools" },
                { name: "Blogs & News", href: "#blog" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-muted-text hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest text-foreground uppercase mb-5">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Study Abroad Counseling",
                "University Admissions",
                "SOP & Essay Guidance",
                "Student Visa Assistance",
                "Immigration & PR Consultation",
                "IELTS & PTE Coaching",
              ].map((service, index) => (
                <li key={index} className="text-muted-text hover:text-primary transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Maps */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-widest text-foreground uppercase mb-5">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-text">
                  12 B, Jyoti Nagar, near Hotel Imperia Suites, Jalandhar, Punjab 144001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919056290628" className="text-muted-text hover:text-primary transition-colors">
                  +91 90562 90628
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@sereneducation.com" className="text-muted-text hover:text-primary transition-colors">
                  info@sereneducation.com
                </a>
              </li>
            </ul>

            {/* Google Maps Embed Placeholder */}
            <div className="w-full h-32 rounded-xl overflow-hidden border border-card-border relative mt-4">
              <iframe
                title="Seren Education Office Location"
                src="https://www.google.com/maps?q=12+B%2C+Jyoti+Nagar%2C+near+Hotel+Imperia+Suites%2C+Jalandhar%2C+Punjab+144001&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-125 dark:invert dark:opacity-85"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-card-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-text text-center sm:text-left">
            &copy; {currentYear} Seren Education Consultants. All rights reserved. 
            Designed for trust, built for success.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-text">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-muted-bg hover:bg-primary hover:text-white border border-card-border hover:border-primary transition-all duration-300 flex items-center gap-1 group cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span className="font-semibold text-[10px] uppercase tracking-wider">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
