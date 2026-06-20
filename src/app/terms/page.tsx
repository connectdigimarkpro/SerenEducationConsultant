"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Scale, AlertTriangle, FileText, CheckCircle2 } from "lucide-react";
import Logo from "@/components/Logo";

export default function TermsOfService() {
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
              <Scale className="w-3.5 h-3.5" />
              <span>Legal Terms</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Terms & Conditions
            </h1>
            <p className="text-muted-text text-sm sm:text-base">
              Last Updated: June 20, 2026. Please read these terms carefully before utilizing our global transition and advisory services.
            </p>
          </div>

          {/* Alert Disclaimers */}
          <div className="p-6 bg-rose-500/5 border border-rose-500/20 rounded-3xl flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-foreground">Important Immigration Disclaimers</h4>
              <ul className="list-disc pl-4 text-xs text-muted-text space-y-1.5">
                <li>We are an educational and student-settlement consultancy. We do <strong>NOT</strong> provide job placements, employment recruitment, or direct work visa sponsorship applications.</li>
                <li>Visa approval is at the <strong>sole discretion</strong> of the respective government embassies. Seren Education Consultants does not guarantee visa approvals.</li>
              </ul>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-muted-text font-normal">
            
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-xl text-foreground flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span>1. Nature of Our Services</span>
              </h2>
              <p>
                Seren Education Consultants provides admissions assistance, career counseling, language preparation, and visa documentation guidance for international studies and residency tracks. By using our website and services, you agree that:
              </p>
              <ul className="list-none space-y-2.5 pl-2 mt-2">
                {[
                  "Our guidance is purely advisory and based on current regulatory pathways.",
                  "We do not represent any foreign government or embassy directly.",
                  "We do not work on, process, or file direct employer-sponsored Work Visas.",
                  "Our post-landing services are limited to logistical settlement and orientation support."
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
                2. No Guarantee of Admission or Visa Approvals
              </h2>
              <p>
                While we maintain a high success record, admission to universities and study permit/visa approvals are decided exclusively by the admissions boards of the respective educational institutions and the visa officers of the corresponding country's embassy (e.g., IRCC Canada, UKVI, Australian Department of Home Affairs). 
              </p>
              <p>
                Seren Education Consultants is not liable for any losses, delays, or rejections that occur during university screening or embassy visa evaluations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-xl text-foreground">
                3. Client Liability & Document Authenticity
              </h2>
              <p>
                Clients are solely responsible for ensuring that all documents provided (including financial statements, bank certificates, academic transcripts, language scores, and identity files) are genuine, accurate, and legal. 
              </p>
              <p className="font-bold text-foreground">
                Submission of any forged, altered, or fraudulent document is strictly prohibited. Seren Education Consultants reserves the right to immediately terminate consultation agreements and report such actions to appropriate regulatory or legal bodies if document fraud is detected.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-xl text-foreground">
                4. Third-Party Payments and Refund Disclaimers
              </h2>
              <p>
                Any fees paid directly to third parties, including but not limited to university application fees, international tuition deposits, student health insurance, and embassy visa filing fees, are processed by those entities. 
              </p>
              <p>
                Seren Education Consultants is not responsible for refunding, retrieving, or managing these third-party payments. In the event of a visa refusal, refunds for tuition deposits must be claimed directly from the respective university according to their international refund policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-xl text-foreground">
                5. Modification of Terms
              </h2>
              <p>
                We reserve the right to modify these terms and conditions at any time to reflect changing immigration laws or corporate policies. Continued use of our consultation services indicates acceptance of the updated terms. For inquiries regarding our terms, reach us at <a href="mailto:info@sereneducation.com" className="text-primary hover:underline font-bold">info@sereneducation.com</a>.
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
