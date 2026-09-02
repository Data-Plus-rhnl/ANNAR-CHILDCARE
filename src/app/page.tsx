import React from "react";
import HeroSlider from "@/components/sections/HeroSlider";
import ThreePillars from "@/components/sections/ThreePillars";
import AboutHome from "@/components/sections/AboutHome";
import ProgramsShowcase from "@/components/sections/ProgramsShowcase";
import GalleryAndFacility from "@/components/sections/GalleryAndFacility";
import EnrollCtaBanner from "@/components/sections/EnrollCtaBanner";
import TestimonialsAndFaq from "@/components/sections/TestimonialsAndFaq";

export default function Home() {
  return (
    <main>
      {/* 1. Hero Slider with Curvy Bottom Wave */}
      <HeroSlider />

      {/* 2. Three Floating Pillars with Floating Kite & Swirl Doodles */}
      <ThreePillars />

      {/* 3. Welcome / About Annar Section with Dual Overlapping Photos & Cyan Blob */}
      <AboutHome />

      {/* 4. Signature Deep Maroon Programs Section with Waving Girl Mascot & CCFRI Cards */}
      <ProgramsShowcase />

      {/* 5. Photo Gallery & Facility Video Section */}
      <GalleryAndFacility />

      {/* 6. Deep Maroon "Join Our Family" Enroll Banner with Doodles */}
      <EnrollCtaBanner />

      {/* 7. Parent Testimonial Speech Card & Frequently Asked Questions */}
      <TestimonialsAndFaq />
    </main>
  );
}
