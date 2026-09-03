import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProgramAuthenticSection from "@/components/sections/ProgramAuthenticSection";
import { daycare3To5ProgramData } from "@/data/programsData";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Annar Childcare Program For Children Ages 3-5 | Port Moody, BC",
  description:
    "At Annar Childcare, our program for 3-5 year olds is designed to foster creativity and foundational skills through engaging Fine Arts education in Port Moody, BC.",
  keywords: [
    "Annar Childcare Program For Children Ages 3-5",
    "DayCare Program Port Moody",
    "Childcare and Fine Arts Education",
    "Preschool program Port Moody BC",
  ],
  alternates: {
    canonical: `${siteConfig.url}/programs/daycare-3-to-5`,
  },
  openGraph: {
    title: "Annar Childcare Program For Children Ages 3-5",
    description:
      "Fine Arts education, ABCs, numeracy, French classes, and movement activities supporting holistic growth.",
    url: `${siteConfig.url}/programs/daycare-3-to-5`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/resource/annar-activities-5.jpg`,
        width: 1200,
        height: 630,
        alt: "Annar Childcare Program For Children Ages 3-5",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function Daycare3To5Page() {
  const data = daycare3To5ProgramData;

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
