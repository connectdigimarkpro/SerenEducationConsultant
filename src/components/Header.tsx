"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Countries", href: "#countries" },
    { name: "Tools", href: "#tools" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass py-3 shadow-md"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="font-medium text-sm text-foreground/80 hover:text-primary transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Consultation CTA */}
              <button
                onClick={onOpenBooking}
                className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-300 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-3">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-card-border bg-card hover:bg-muted-bg text-foreground transition-all duration-200"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-45 glass border-b border-card-border shadow-lg md:hidden overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="block px-4 py-2.5 rounded-xl text-base font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-card-border/50 px-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
