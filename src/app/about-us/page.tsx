import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutWelcome from "@/components/sections/AboutWelcome";
import AboutFineArts from "@/components/sections/AboutFineArts";
import ProgramsShowcase from "@/components/sections/ProgramsShowcase";
import EnrollCtaBanner from "@/components/sections/EnrollCtaBanner";
import TestimonialsAndFaq from "@/components/sections/TestimonialsAndFaq";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us | Annar Childcare Center in Port Moody, BC",
  description:
    "Learn about Annar Child Care in Port Moody, BC. We specialize in licensed infant and toddler care, 3-5 daycare, and school-age programs enriched by our signature daily Fine Arts curriculum.",
  keywords: [
    "about Annar Child Care",
    "daycare Port Moody",
    "childcare philosophy Port Moody",
    "fine arts preschool BC",
    "licensed multi-age daycare",
    "early childhood education Port Moody",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
  openGraph: {
    title: "About Us | Annar Childcare Center in Port Moody, BC",
    description:
      "Nurturing creativity, cognitive growth, and emotional development through daily fine arts classes and licensed early education.",
    url: `${siteConfig.url}/about-us`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/resource/about-annar-childcare-center.jpg`,
        width: 1200,
        height: 630,
        alt: "Children at Annar Child Care Center",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Page Header with Breadcrumb Navigation & Legacy Floating Doodles */}
      <PageHeader
        title="About Us | Annar Childcare Center"
        badge="Nurturing Young Minds"
        subtitle="A licensed multi-age childcare center celebrating creativity, play-based learning, and fine arts education in Port Moody, BC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        bgImage="/images/background/page-title-about-us-annar-childcare-center.webp"
      />

      {/* 2. Welcome & About Annar Section with Dual Overlapping Photos & Cyan Blob */}
      <AboutWelcome />

      {/* 3. Childcare Enriched by Fine Arts Education (Holistic Development & Dual Featured Photos) */}
      <AboutFineArts />

      {/* 4. Signature Deep Maroon Programs Section with CCFRI Pricing & Mascot Girl */}
      <ProgramsShowcase />

      {/* 5. Deep Maroon "Join Our Family" Enrollment Banner */}
      <EnrollCtaBanner />

      {/* 6. Parent Testimonials Speech Card & Frequently Asked Questions */}
      <TestimonialsAndFaq />
    </main>
  );
}
