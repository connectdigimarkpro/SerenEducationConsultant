"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2 } from "lucide-react";
import Logo from "@/components/Logo";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Header */}
      <header className="sticky top-0 z-50 glass py-4 border-b border-card-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-bold text-muted-text hover:text-primary transition-colors px-4 py-2 border border-card-border rounded-xl bg-card hover:bg-muted-bg"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Page Title */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Trust & Privacy</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Privacy Policy
            </h1>
            <p className="text-muted-text text-sm sm:text-base">
              Last Updated: June 20, 2026. Learn how Seren Education Consultants securely handles and protects your personal and immigration documentation.
            </p>
          </div>

          {/* Privacy Notice Box */}
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl flex items-start gap-4">
            <Lock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-foreground">Immigration Document Security Notice</h4>
              <p className="text-xs text-muted-text leading-relaxed">
                As a leading educational and immigration advisory, we collect highly sensitive documents (passports, financial statements, transcripts). We adhere to strict data-protection laws, ensuring your personal identity and financial details are kept confidential and secure at all times.
              </p>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-muted-text font-normal">
            
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-xl text-foreground flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span>1. Personal Data and Documents We Collect</span>
              </h2>
              <p>
                In order to process university admissions, study permits, and legal permanent residency files, we require specific personal information and documentation, including:
              </p>
              <ul className="list-none space-y-2.5 pl-2 mt-2">
                {[
                  "Identification papers (Passport copies, National IDs, Birth Certificates).",
                  "Academic credentials (Transcripts, Degrees, SOPs, and Letters of Recommendation).",
                  "Language proficiency reports (IELTS, PTE, TOEFL certificate scores).",
                  "Financial viability evidence (GIC certificates, bank statements, sponsor details, tax filings).",
                  "Employment history records (Work experience letters, salary slips, resume files)."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-xl text-foreground">
                2. How We Use Your Immigration Data
              </h2>
              <p>
                Your data is exclusively processed to evaluate immigration points (CRS scores), verify entry requirements, and apply for overseas opportunities. Specifically, we use it to:
              </p>
              <p>
                Evaluate your eligibility for various student visas and Permanent Residency (PR) pathways; assist you with drafting Statement of Purpose (SOP) files; arrange block accounts and fee transfers; prepare applications for official submission to international colleges, universities, and government visa portals. We will never sell or rent your personal documents to advertising boards or third-party marketing companies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-xl text-foreground">
                3. Secure Document Handling & Storage
              </h2>
              <p>
                Seren Education Consultants implements high-security protocols (including secure cloud servers, end-to-end encrypted messaging, and restricted local file access) to ensure that scanned credentials and files are safe from unauthorized access, loss, or leakage. Local paper copies are processed in locked storage and shredded after official lodgment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-xl text-foreground">
                4. Disclosure to Universities and Authorities
              </h2>
              <p>
                For visa processing and university enrollment, your data is shared with authorized third parties, specifically:
              </p>
              <p>
                International educational institutions for admission checks; banking institutions for financial asset lodgments; and government immigration departments (such as IRCC Canada, UKVI, Australian Department of Home Affairs, and European Embassies) during the official visa application lodgment. This data sharing is executed only with your explicit consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-xl text-foreground">
                5. Your Legal Rights & Data Access
              </h2>
              <p>
                You maintain the right to view, modify, or request the deletion of any personal documents from our consultation databases at any time. To request a record update or profile deletion, contact our privacy desk directly at <a href="mailto:info@sereneducation.com" className="text-primary hover:underline font-bold">info@sereneducation.com</a>.
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-card-border py-8 text-center text-xs text-muted-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p>&copy; {currentYear} Seren Education Consultants. All rights reserved.</p>
          <p className="text-[10px] text-muted-text/80">
            Powered by <a href="https://digimarkpro.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DigiMark Pro</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
