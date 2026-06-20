import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seren Education Consultants | Gateway to Global Education & Immigration",
  description: "Expert overseas education consultancy. Helping students and professionals achieve dreams of studying and settling abroad with personalized guidance and 95% visa success rate.",
  icons: {
    icon: "/Images/Logo.png",
    shortcut: "/Images/Logo.png",
    apple: "/Images/Logo.png",
  },
  keywords: [
    "study abroad",
    "immigration consultancy",
    "overseas education",
    "student visa experts",
    "Canada PR consultants",
    "IELTS PTE coaching",
    "counseling",
    "Seren Education"
  ],
  authors: [{ name: "Seren Education Consultants" }],
  openGraph: {
    title: "Seren Education Consultants | Gateway to Global Success",
    description: "Get personalized counseling, admission assistance, and visa processing for Canada, UK, Australia, USA, Germany, and more.",
    url: "https://sereneducation.com",
    siteName: "Seren Education Consultants",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seren Education Consultants | Study Abroad & Visa Experts",
    description: "Professional study abroad counseling and immigration services with 95% success rate.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
