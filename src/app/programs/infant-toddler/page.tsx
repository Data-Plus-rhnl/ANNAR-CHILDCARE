import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProgramAuthenticSection from "@/components/sections/ProgramAuthenticSection";
import { infantToddlerProgramData } from "@/data/programsData";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Infant and Toddler Care Program at Annar Daycare | Port Moody, BC",
  description:
    "The Infants and Toddler Care Program at Annar Child Care offers an enriching start to your child's educational journey for ages 0-3 years in Port Moody, BC.",
  keywords: [
    "Infant and Toddler Care Program Annar Daycare",
    "Toddler daycare Port Moody",
    "Infant care Port Moody BC",
    "Nurturing the First Steps childcare",
  ],
  alternates: {
    canonical: `${siteConfig.url}/programs/infant-toddler`,
  },
  openGraph: {
    title: "Infant and Toddler Care Program at Annar Daycare",
    description:
      "Nurturing early development through sensory exploration, emotional bonding, and foundational learning.",
    url: `${siteConfig.url}/programs/infant-toddler`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/resource/annar-childcare-activities-2.jpg`,
        width: 1200,
        height: 630,
        alt: "Annar Daycare Infant and Toddler Care Program",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function InfantToddlerPage() {
  const data = infantToddlerProgramData;

  return (
    <main className="min-h-screen">
      {/* 1. Page Header with Breadcrumbs & Background */}
      <PageHeader
        title={data.heroTitle}
        badge={data.heroBadge}
        subtitle={data.heroSubtitle}
        breadcrumbs={data.breadcrumbs}
        bgImage={data.bgImage}
      />

      {/* 2. Exact Authentic Program Structure */}
      <ProgramAuthenticSection data={data} />
    </main>
  );
}
