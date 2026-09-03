import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import GalleryGridSection from "@/components/sections/GalleryGridSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Our Gallery | Annar Childcare Center in Port Moody, BC",
  description:
    "Explore Annar Child Care’s photo gallery in Port Moody, BC. View photos of our nurturing classrooms, fine arts atelier artwork, indoor/outdoor play areas, and modern facilities.",
  keywords: [
    "Annar Child Care gallery",
    "daycare photos Port Moody",
    "fine arts childcare BC",
    "childcare classroom gallery Port Moody",
    "early learning facility photos",
    "preschool playground Port Moody",
  ],
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
  openGraph: {
    title: "Our Gallery | Annar Child Care - Port Moody",
    description:
      "Explore photos of our bright classrooms, fine arts creations, play facilities, and engaging child development activities.",
    url: `${siteConfig.url}/gallery`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/gallery/1.jpg`,
        width: 1200,
        height: 630,
        alt: "Annar Child Care Gallery",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Page Header with Breadcrumbs & Animated Doodles */}
      <PageHeader
        title="Our Gallery - Annar Childcare"
        badge="Classrooms & Fine Arts Gallery"
        subtitle="Explore our vibrant early learning spaces, student fine arts masterpieces, play areas, and indoor/outdoor facilities in Port Moody, BC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Gallery" },
        ]}
        bgImage="/images/background/page-title-about-us.jpg"
      />

      {/* 2. Interactive Gallery Grid with Category Filters & Lightbox */}
      <GalleryGridSection />
    </main>
  );
}
