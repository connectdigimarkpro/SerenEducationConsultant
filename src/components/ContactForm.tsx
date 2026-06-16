"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, Globe, MessageSquare, CheckCircle, MapPin } from "lucide-react";

interface ContactFormProps {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

export default function ContactForm({ selectedCountry, setSelectedCountry }: ContactFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: ""
  });

  // Sync selectedCountry from parent component
  useEffect(() => {
    if (selectedCountry) {
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, country: selectedCountry }));
      }, 0);
    }
  }, [selectedCountry]);

  const countries = [
    "Canada",
    "Australia",
    "United Kingdom",
    "United States",
    "Germany",
    "New Zealand",
    "Ireland",
    "Singapore",
    "Other"
  ];

  const services = [
    "Study Abroad",
    "Student Visa Assistance",
    "Immigration & PR",
    "Career Counseling",
    "IELTS / PTE Coaching",
    "Post Landing Services"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.country || !formData.service) {
      alert("Please fill in all required fields.");
      return;
    }
    const subject = encodeURIComponent(`New consultation request from ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Country: ${formData.country}`,
        `Service: ${formData.service}`,
        `Message: ${formData.message || "-"}`
      ].join("\n")
    );
    const mailtoLink = `mailto:info@sereneducation.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-card-border/10 border-y border-card-border/50 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Panel: Contact Information & Google Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
                Connect With Us
              </div>
              <h2 className="font-heading font-extrabold text-3xl text-foreground leading-tight">
                Visit Our Office or Get in Touch
              </h2>
              <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                Connect with our certified visa counselors and regulatory advisors at our Jalandhar headquarters for a detailed profile assessment.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-3.5 pt-4 border-t border-card-border/60">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Our Headquarters</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    12 B, Jyoti Nagar, near Hotel Imperia Suites, Jalandhar, Punjab 144001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Phone Call Support</h4>
                  <p className="text-xs text-muted-text">
                    <a href="tel:+919056290628" className="hover:text-primary transition-colors">+91 90562 90628</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Official Email</h4>
                  <p className="text-xs text-muted-text">
                    <a href="mailto:info@sereneducation.com" className="hover:text-primary transition-colors">info@sereneducation.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-card-border shadow-sm relative">
              <iframe
                title="Seren Education Office Location"
                src="https://www.google.com/maps?q=12+B%2C+Jyoti+Nagar%2C+near+Hotel+Imperia+Suites%2C+Jalandhar%2C+Punjab+144001&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-105"
              />
            </div>

            <div className="p-4 bg-muted-bg border border-card-border rounded-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-[11px] text-foreground/80 font-bold">
                12 Consultants active and online for live reviews.
              </p>
            </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-card-border rounded-3xl p-6 sm:p-10 shadow-xl relative min-h-115 flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80 flex items-center gap-1.5">
                          <User className="w-4 h-4 text-primary" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full bg-muted-bg text-foreground placeholder:text-muted-text border border-card-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80 flex items-center gap-1.5">
                          <Mail className="w-4 h-4 text-primary" />
                          <span>Email Address *</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="johndoe@email.com"
                          className="w-full bg-muted-bg text-foreground placeholder:text-muted-text border border-card-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80 flex items-center gap-1.5">
                          <Phone className="w-4 h-4 text-primary" />
                          <span>Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 98765 43210"
                          className="w-full bg-muted-bg text-foreground placeholder:text-muted-text border border-card-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>

                      {/* Country Select */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80 flex items-center gap-1.5">
                          <Globe className="w-4 h-4 text-primary" />
                          <span>Interested Country *</span>
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full bg-muted-bg text-foreground border border-card-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                        >
                          <option value="" disabled>Select Country</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>

                    </div>

                    {/* Service Required */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground/80 flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-primary" />
                        <span>Service Required *</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted-bg text-foreground border border-card-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      >
                        <option value="" disabled>Select Service Type</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground/80 flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        <span>Details / Notes (Optional)</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Share qualifications, test scores, work history, or any specific details..."
                        className="w-full bg-muted-bg text-foreground placeholder:text-muted-text border border-card-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-2xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer mt-4"
                    >
                      <span>Book Your Free Consultation</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-6 py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner border border-emerald-500/20">
                      <CheckCircle className="w-10 h-10 animate-bounce" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-extrabold text-2xl text-foreground">
                        Consultation Requested!
                      </h3>
                      <p className="text-sm text-muted-text max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-foreground">{formData.name}</span>. Your email draft has been prepared with your request details (<span className="font-bold text-foreground">{formData.country} - {formData.service}</span>). Please send it from your mail app.
                      </p>
                    </div>
                    <div className="p-4 bg-muted-bg rounded-2xl border border-card-border inline-block text-[11px] font-semibold text-muted-text uppercase tracking-widest">
                      Estimated Callback: 2 Hours
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setSelectedCountry("");
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            country: "",
                            service: "",
                            message: ""
                          });
                        }}
                        className="text-xs text-primary font-bold hover:underline cursor-pointer"
                      >
                        Submit another request
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
