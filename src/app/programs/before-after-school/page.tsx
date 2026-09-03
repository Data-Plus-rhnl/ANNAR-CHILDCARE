import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProgramAuthenticSection from "@/components/sections/ProgramAuthenticSection";
import { beforeAfterSchoolProgramData } from "@/data/programsData";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Before/After School Program at Annar Childcare in Port Moody, BC",
  description:
    "Annar ChildCare's Before/After School Program, designed for children aged 5-12 years offers comprehensive solution for busy parents with Moody Elementary transport.",
  keywords: [
    "Before/After School Program at Annar Childcare",
    "Moody Elementary school childcare",
    "Personalized Attention on After-School Hours",
    "Before after school care Port Moody BC",
  ],
  alternates: {
    canonical: `${siteConfig.url}/programs/before-after-school`,
  },
  openGraph: {
    title: "Before/After School Program at Annar Childcare in Port Moody, BC",
    description:
      "Moody Elementary pickup & drop-off, dedicated homework club, Pro-D Days coverage, and outdoor play.",
    url: `${siteConfig.url}/programs/before-after-school`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/resource/about-15.jpg`,
        width: 1200,
        height: 630,
        alt: "Annar Childcare Before and After School Program",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function BeforeAfterSchoolPage() {
  const data = beforeAfterSchoolProgramData;

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
