"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Columns, Award, CheckCircle, Star } from "lucide-react";

type ActiveTab = "visa" | "compare" | "scholarship";

export default function InteractiveTools() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("visa");

  // --- 1. Visa Eligibility Checker State ---
  const [visaAge, setVisaAge] = useState("25");
  const [visaEdu, setVisaEdu] = useState("masters");
  const [visaLang, setVisaLang] = useState("7.5");
  const [visaExp, setVisaExp] = useState("3");
  const [visaChecked, setVisaChecked] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(0);

  const calculateVisaEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    let score = 0;
    // Age score
    const age = parseInt(visaAge);
    if (age >= 18 && age <= 30) score += 30;
    else if (age > 30 && age <= 40) score += 20;
    else score += 10;

    // Education score
    if (visaEdu === "phd") score += 35;
    else if (visaEdu === "masters") score += 30;
    else if (visaEdu === "bachelors") score += 22;
    else score += 15;

    // Language score
    const lang = parseFloat(visaLang);
    if (lang >= 8.0) score += 25;
    else if (lang >= 7.0) score += 20;
    else if (lang >= 6.0) score += 15;
    else score += 5;

    // Experience score
    const exp = parseInt(visaExp);
    if (exp >= 5) score += 15;
    else if (exp >= 3) score += 10;
    else if (exp >= 1) score += 5;

    setCalculatedScore(score);
    setVisaChecked(true);
  };

  // --- 2. Country Comparison State ---
  const [country1, setCountry1] = useState("Canada");
  const [country2, setCountry2] = useState("Australia");

  const comparisonDb: Record<string, {
    tuition: string;
    living: string;
    visaSpeed: string;
    pswLength: string;
    prRoute: string;
    flag: string;
  }> = {
    Canada: { tuition: "$18,000 - $35,000 CAD/yr", living: "$12,000 - $18,000 CAD/yr", visaSpeed: "4 - 8 Weeks", pswLength: "Up to 3 Years (PGWP)", prRoute: "Express Entry & PNP (Highly Feasible)", flag: "🇨🇦" },
    Australia: { tuition: "$22,000 - $45,000 AUD/yr", living: "$15,000 - $22,000 AUD/yr", visaSpeed: "4 - 6 Weeks", pswLength: "2 - 4 Years (Subclass 485)", prRoute: "Subclass 189/190/491 (Moderate)", flag: "🇦🇺" },
    "United Kingdom": { tuition: "£14,000 - £28,000/yr", living: "£10,000 - £15,000/yr", visaSpeed: "2 - 3 Weeks", pswLength: "2 Years (Graduate Route)", prRoute: "Skilled Worker Sponsorship (High threshold)", flag: "🇬🇧" },
    "United States": { tuition: "$25,000 - $55,000 USD/yr", living: "$15,000 - $25,000 USD/yr", visaSpeed: "3 - 5 Weeks", pswLength: "1 Year (STEM OPT up to 3 yrs)", prRoute: "H1B Sponsorship to EB2/EB3 (Difficult)", flag: "🇺🇸" },
    Germany: { tuition: "Free (€0 - €3,000/yr pub)", living: "€10,000 - €12,000/yr", visaSpeed: "6 - 12 Weeks", pswLength: "18 Months Job Seeker", prRoute: "EU Blue Card (Feasible with jobs)", flag: "🇩🇪" },
    "New Zealand": { tuition: "$25,000 - $40,000 NZD/yr", living: "$18,000 - $22,000 NZD/yr", visaSpeed: "4 - 8 Weeks", pswLength: "1 - 3 Years", prRoute: "Green List Residency (Straight to PR)", flag: "🇳🇿" },
    Ireland: { tuition: "€12,000 - €25,000/yr", living: "€10,000 - €15,000/yr", visaSpeed: "4 - 6 Weeks", pswLength: "2 Years Third Level Scheme", prRoute: "Critical Skills Employment Permit", flag: "🇮🇪" },
    Singapore: { tuition: "$20,000 - $40,000 SGD/yr", living: "$12,000 - $18,000 SGD/yr", visaSpeed: "3 - 4 Weeks", pswLength: "1 - 3 Years", prRoute: "Work Pass to PR (Difficult/Competitive)", flag: "🇸🇬" }
  };

  // --- 3. Scholarship Finder State ---
  const [scholarshipCountry, setScholarshipCountry] = useState("Canada");
  const [studentGpa, setStudentGpa] = useState("3.8");
  const [scholarshipList, setScholarshipList] = useState<{ name: string; amount: string; deadline: string }[]>([]);
  const [scholarshipSearched, setScholarshipSearched] = useState(false);

  const scholarshipsDb: Record<string, { name: string; minGpa: number; amount: string; deadline: string }[]> = {
    Canada: [
      { name: "Vanier Canada Graduate Scholarships", minGpa: 3.7, amount: "$50,000 CAD / yr", deadline: "November 1 annually" },
      { name: "Ontario Graduate Scholarship (OGS)", minGpa: 3.5, amount: "$15,000 CAD / yr", deadline: "Varies by department" },
      { name: "University of Waterloo International Entrance Award", minGpa: 3.2, amount: "$10,000 CAD (One-time)", deadline: "Auto-considered" }
    ],
    Australia: [
      { name: "Destination Australia Scholarship", minGpa: 3.0, amount: "$15,000 AUD / yr", deadline: "June 15" },
      { name: "University of Sydney International Scholarship", minGpa: 3.6, amount: "$40,000 AUD / yr", deadline: "October 1" },
      { name: "Melbourne Research Scholarships", minGpa: 3.8, amount: "Full tuition + $34,400 stipend", deadline: "Auto-considered" }
    ],
    "United Kingdom": [
      { name: "Chevening Scholarships (Govt Funded)", minGpa: 3.4, amount: "100% Tuition + Living expenses", deadline: "November 7" },
      { name: "GREAT Scholarships", minGpa: 3.2, amount: "£10,000 min tuition waiver", deadline: "May 31" },
      { name: "Rhodes Scholarships Oxford", minGpa: 3.9, amount: "Full fees + living stipend", deadline: "September 30" }
    ],
    "United States": [
      { name: "Fulbright Foreign Student Program", minGpa: 3.5, amount: "Full tuition + health cover + flights", deadline: "Varies by country" },
      { name: "Hubert Humphrey Fellowship Program", minGpa: 3.2, amount: "Full funding + allowance", deadline: "October 1" }
    ]
  };

  const findScholarships = (e: React.FormEvent) => {
    e.preventDefault();
    const gpa = parseFloat(studentGpa);
    const database = scholarshipsDb[scholarshipCountry] || [];
    const matched = database.filter((sch) => gpa >= sch.minGpa);
    setScholarshipList(matched);
    setScholarshipSearched(true);
  };

  return (
    <section id="tools" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
            Interactive Portal
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
            Plan With Smart Planning Tools
          </h2>
          <p className="text-muted-text text-sm sm:text-base">
            Instantly evaluate visa eligibility points, compare costs, match scholarships, and reserve direct guidance sessions.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 border-b border-card-border/60 pb-6">
          {[
            { id: "visa", name: "Visa Checker", icon: Calculator },
            { id: "compare", name: "Compare Countries", icon: Columns },
            { id: "scholarship", name: "Scholarship Finder", icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ActiveTab)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-card text-foreground/80 border-card-border hover:bg-muted-bg hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="bg-card border border-card-border rounded-3xl p-6 sm:p-10 shadow-xl min-h-100 flex flex-col justify-center max-w-4xl mx-auto relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            
            {/* 1. Visa Checker Tab */}
            {activeTab === "visa" && (
              <motion.div
                key="visa-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {!visaChecked ? (
                  <form onSubmit={calculateVisaEligibility} className="space-y-5">
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-foreground flex items-center gap-2">
                      <Calculator className="text-primary w-5 h-5" />
                      <span>Visa Eligibility & CRS Estimator</span>
                    </h3>
                    <p className="text-xs text-muted-text">
                      Estimate your score based on critical parameters for Canada Express Entry & Skilled Migration pathways.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Age */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80">Age Bracket</label>
                        <select
                          value={visaAge}
                          onChange={(e) => setVisaAge(e.target.value)}
                          className="w-full bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none"
                        >
                          <option value="25">18 - 30 Years (Max points)</option>
                          <option value="35">31 - 40 Years</option>
                          <option value="45">41+ Years</option>
                        </select>
                      </div>

                      {/* Education */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80">Highest Degree</label>
                        <select
                          value={visaEdu}
                          onChange={(e) => setVisaEdu(e.target.value)}
                          className="w-full bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none"
                        >
                          <option value="phd">Doctorate (Ph.D.)</option>
                          <option value="masters">Master&apos;s Degree / Post-Grad</option>
                          <option value="bachelors">Bachelor&apos;s Degree (3-4 Yrs)</option>
                          <option value="diploma">Undergrad Diploma (2 Yrs)</option>
                        </select>
                      </div>

                      {/* Language */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80">IELTS / PTE Equivalent Score</label>
                        <select
                          value={visaLang}
                          onChange={(e) => setVisaLang(e.target.value)}
                          className="w-full bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none"
                        >
                          <option value="8.0">CLB 9+ (IELTS 8.0 L, 7.0 R,W,S)</option>
                          <option value="7.5">CLB 8 (IELTS 7.5 L, 6.5 R,W,S)</option>
                          <option value="6.5">CLB 7 (IELTS 6.0 each)</option>
                          <option value="5.5">CLB 6 or lower (IELTS 5.5)</option>
                        </select>
                      </div>

                      {/* Work Exp */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80">Skilled Work Experience (Years)</label>
                        <select
                          value={visaExp}
                          onChange={(e) => setVisaExp(e.target.value)}
                          className="w-full bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none"
                        >
                          <option value="5">5+ Years</option>
                          <option value="3">3 - 4 Years</option>
                          <option value="1">1 - 2 Years</option>
                          <option value="0">Less than 1 Year</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-primary/10 cursor-pointer"
                    >
                      <span>Calculate Points &rarr;</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center space-y-6 py-6">
                    <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-primary/20 text-primary flex items-center justify-center mx-auto shadow-inner">
                      <span className="font-heading font-extrabold text-3xl">{calculatedScore}</span>
                      <span className="text-[10px] font-bold text-muted-text -ml-0.5">/105</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-heading font-extrabold text-lg text-foreground">
                        Your Estimated Score: {calculatedScore} Points
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-text max-w-md mx-auto leading-relaxed">
                        {calculatedScore >= 75
                          ? "Stellar! Your profile is highly competitive for skilled pathways. We recommend immediate Express Entry/PNP lodgment."
                          : calculatedScore >= 55
                          ? "Good potential! You are eligible, but we can improve your score by optimizing language papers or filing job sponsors."
                          : "Basic score. We suggest checking specific provincial tracks (PNP) or seeking student visa paths to secure regional points."}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <button
                        onClick={() => setVisaChecked(false)}
                        className="text-xs font-bold border border-card-border bg-card text-foreground px-5 py-2.5 rounded-xl hover:bg-muted-bg cursor-pointer transition-colors w-full sm:w-auto"
                      >
                        Recalculate Points
                      </button>
                      <button
                        onClick={() => {
                          const element = document.querySelector("#contact");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="text-xs font-bold bg-primary text-white px-5 py-2.5 rounded-xl hover:bg-primary-hover shadow-md cursor-pointer transition-all w-full sm:w-auto"
                      >
                        Get Free Detailed Assessment
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* 2. Country Comparison Tab */}
            {activeTab === "compare" && (
              <motion.div
                key="compare-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-foreground flex items-center gap-2">
                  <Columns className="text-primary w-5 h-5" />
                  <span>Country Comparison Matrix</span>
                </h3>
                <p className="text-xs text-muted-text">
                  Compare two global destinations side-by-side on finances, timelines, and immigration outcomes.
                </p>

                {/* Country Selectors */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-muted-text">Country A</label>
                    <select
                      value={country1}
                      onChange={(e) => setCountry1(e.target.value)}
                      className="w-full bg-muted-bg border border-card-border rounded-xl px-3 py-2 text-xs sm:text-sm text-foreground focus:outline-none"
                    >
                      {Object.keys(comparisonDb).map((name) => (
                        <option key={name} value={name} disabled={name === country2}>
                          {comparisonDb[name].flag} {name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-muted-text">Country B</label>
                    <select
                      value={country2}
                      onChange={(e) => setCountry2(e.target.value)}
                      className="w-full bg-muted-bg border border-card-border rounded-xl px-3 py-2 text-xs sm:text-sm text-foreground focus:outline-none"
                    >
                      {Object.keys(comparisonDb).map((name) => (
                        <option key={name} value={name} disabled={name === country1}>
                          {comparisonDb[name].flag} {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Side-by-Side Comparison Table */}
                <div className="border border-card-border rounded-2xl overflow-hidden mt-4 bg-muted-bg/30 text-xs">
                  <div className="grid grid-cols-3 bg-card border-b border-card-border p-3.5 font-bold text-foreground">
                    <div>Attribute</div>
                    <div>{comparisonDb[country1].flag} {country1}</div>
                    <div>{comparisonDb[country2].flag} {country2}</div>
                  </div>

                  {[
                    { label: "Tuition Fees", key: "tuition" },
                    { label: "Living Expenses", key: "living" },
                    { label: "Visa Processing", key: "visaSpeed" },
                    { label: "Work Rights (PSW)", key: "pswLength" },
                    { label: "PR Pathways", key: "prRoute" }
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-3 p-3.5 border-b border-card-border/60 hover:bg-card/50 text-foreground/80 font-medium last:border-0"
                    >
                      <div className="font-bold text-foreground/90">{row.label}</div>
                      <div>{comparisonDb[country1][row.key as keyof typeof comparisonDb[string]]}</div>
                      <div>{comparisonDb[country2][row.key as keyof typeof comparisonDb[string]]}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 3. Scholarship Finder Tab */}
            {activeTab === "scholarship" && (
              <motion.div
                key="scholarship-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {!scholarshipSearched ? (
                  <form onSubmit={findScholarships} className="space-y-5">
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-foreground flex items-center gap-2">
                      <Award className="text-primary w-5 h-5" />
                      <span>Scholarship & Grants Matching Finder</span>
                    </h3>
                    <p className="text-xs text-muted-text">
                      Search university entrance waivers and national scholarships based on your target country and GPA.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Country */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80">Target Destination</label>
                        <select
                          value={scholarshipCountry}
                          onChange={(e) => setScholarshipCountry(e.target.value)}
                          className="w-full bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none"
                        >
                          <option value="Canada">Canada 🇨🇦</option>
                          <option value="Australia">Australia 🇦🇺</option>
                          <option value="United Kingdom">United Kingdom 🇬🇧</option>
                          <option value="United States">United States 🇺🇸</option>
                        </select>
                      </div>

                      {/* GPA */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground/80">Your Academic GPA (out of 4.0)</label>
                        <select
                          value={studentGpa}
                          onChange={(e) => setStudentGpa(e.target.value)}
                          className="w-full bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none"
                        >
                          <option value="3.9">3.9+ GPA (Excellent - A+ equivalent)</option>
                          <option value="3.7">3.7 - 3.8 GPA (A equivalent)</option>
                          <option value="3.4">3.3 - 3.6 GPA (B+ equivalent)</option>
                          <option value="3.0">3.0 - 3.2 GPA (B equivalent)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-primary/10 cursor-pointer"
                    >
                      <span>Find Matching Scholarships &rarr;</span>
                    </button>
                  </form>
                ) : (
                  <div className="space-y-5">
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-foreground flex items-center justify-between">
                      <span>Matched Scholarships in {scholarshipCountry}</span>
                      <button
                        onClick={() => setScholarshipSearched(false)}
                        className="text-xs text-primary font-bold hover:underline cursor-pointer"
                      >
                        Reset Search
                      </button>
                    </h3>

                    {scholarshipList.length > 0 ? (
                      <div className="space-y-3.5">
                        {scholarshipList.map((sch, idx) => (
                          <div
                            key={idx}
                            className="bg-muted-bg/30 border border-card-border rounded-xl p-4 sm:p-5 flex items-start justify-between gap-4"
                          >
                            <div className="space-y-1">
                              <h4 className="font-heading font-extrabold text-xs sm:text-sm text-foreground flex items-center gap-1">
                                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                <span>{sch.name}</span>
                              </h4>
                              <p className="text-[11px] text-muted-text">
                                Deadline: {sch.deadline}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="inline-block bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-[10px] sm:text-xs py-1 px-3 rounded-full">
                                {sch.amount}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 bg-muted-bg/30 border border-card-border rounded-2xl">
                        <p className="text-xs text-muted-text">
                          No direct national scholarships found for GPA under {studentGpa} in {scholarshipCountry}.
                        </p>
                        <p className="text-[11px] text-muted-text mt-1">
                          Our counselors can help look up university-specific bursaries and tuition waivers!
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
