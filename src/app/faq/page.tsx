import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import FaqAccordionSection from "@/components/sections/FaqAccordionSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "FAQs | Annar Childcare in Port Moody, BC",
  description:
    "Find answers to frequently asked questions about Annar Child Care's licensed programs, Reggio & Montessori philosophy, teacher-child ratios, safety protocols, meals, and CCFRI subsidies in Port Moody, BC.",
  keywords: [
    "Annar Child Care FAQ",
    "daycare questions Port Moody",
    "childcare ratios BC",
    "CCFRI subsidy Port Moody",
    "licensed daycare safety Port Moody",
    "preschool questions Tri-Cities",
  ],
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: "FAQs | Annar Child Care - Port Moody",
    description:
      "Frequently asked questions about our licensed childcare programs, fine arts curriculum, safety standards, and CCFRI subsidies.",
    url: `${siteConfig.url}/faq`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/resource/about-annar-childcare-2.jpg`,
        width: 1200,
        height: 630,
        alt: "Annar Child Care FAQs",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Page Header with Breadcrumbs & Animated Doodles */}
      <PageHeader
        title="FAQ’S Related to Annar Daycare"
        badge="Parent Guide & Answers"
        subtitle="Transparent and detailed information to help you make the best early learning decision for your family in Port Moody, BC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Frequently Asked Questions" },
        ]}
        bgImage="/images/background/faq-bg.jpg"
      />

      {/* 2. Interactive Categorized FAQ Section with Live Search */}
      <FaqAccordionSection />
    </main>
  );
}
