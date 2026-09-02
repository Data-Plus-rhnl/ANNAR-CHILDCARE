"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutHome() {
  return (
    <section className="about-section relative bg-gradient-to-b from-white via-[#faf8f5] to-white pt-12 sm:pt-24 lg:pt-[120px] pb-16 sm:pb-28 lg:pb-[140px] select-none overflow-hidden">
      {/* ================= ANIMATED FLOATING SHAPES CANVAS ================= */}
      <div className="pointer-events-none absolute inset-0 max-w-[1920px] mx-auto z-10">
        {/* Animated Flying Kite */}
        <div
          className="absolute float-bob-x hidden xl:block"
          style={{
            left: "50px",
            top: "30px",
            width: "210px",
            height: "275px",
          }}
        >
          <Image
            src="/images/icons/anim-icon-1.png"
            alt="Flying Kite"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Static Yellow Swirling Ribbon */}
        <div
          className="absolute hidden xl:block"
          style={{
            right: "100px",
            top: "60px",
            width: "188px",
            height: "192px",
          }}
        >
          <Image
            src="/images/icons/anim-icon-2.png"
            alt="Yellow Swirling Ribbon"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* ================= COMPACT 1140PX BOOTSTRAP CONTAINER ================= */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* ================= LEFT COLUMN: DUAL PHOTOS WITH CYAN CIRCLE ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative mb-16 sm:mb-24 lg:mb-0 mr-0 lg:mr-2 max-w-full">
              {/* Animated Cyan Circle */}
              <div
                className="absolute rounded-full bg-[#9be9ff] zoom-fade pointer-events-none z-0 hidden sm:block"
                style={{
                  width: "215px",
                  height: "215px",
                  left: "-100px",
                  top: "80px",
                }}
              />

              {/* Primary Background Image */}
              <div className="relative w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0_20px_45px_rgba(8,13,62,0.1)] z-10 bg-white group ml-8 sm:ml-0">
                <Image
                  src="/images/resource/about-annar-childcare-1.jpg"
                  alt="Child's hand holding a toy at Annar Child Care"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlapping Foreground Image (Safely constrained for mobile screens) */}
              <div
                className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-[22px] sm:rounded-[30px] border-[8px] sm:border-[14px] border-white shadow-[0_25px_50px_rgba(8,13,62,0.15)] overflow-hidden z-20 bg-white group -left-4 sm:-left-16 lg:-left-20 -bottom-10 sm:-bottom-20"
              >
                <Image
                  src="/images/resource/about-annar-childcare-2.jpg"
                  alt="Child painting on canvas in Annar Child Care"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -right-2 sm:-right-4 -bottom-6 sm:-bottom-8 z-30">
                <div className="backdrop-blur-md bg-white/95 text-[#2b3c6b] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-100/80 text-[#830201] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff7162]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] sm:text-[12px] font-black leading-tight text-[#2b3c6b]">Fine Arts Focused</p>
                    <p className="text-[9px] sm:text-[10px] text-stone-500 font-semibold">Port Moody, BC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONTENT BOX ================= */}
          <div className="lg:col-span-6 pl-0 lg:pl-4">
            <div className="space-y-4 text-left max-w-[540px] mx-auto lg:mx-0">
              {/* Subtitle with Red Dash */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 sm:w-8 h-[2px] bg-[#ff7162]" />
                <h5 className="text-[14px] sm:text-[16px] font-black text-[#ff7162] tracking-normal">
                  The Best ChildCare in Coquitlam, BC
                </h5>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#2b3c6b] leading-snug sm:leading-[1.25] tracking-tight">
                Welcome to Annar Child Care – Daycare Center in Port Moody, BC
              </h2>

              {/* Stylized Bold Tagline with Coral Border */}
              <div className="border-l-4 border-[#ff7162] pl-3.5 py-1 bg-red-50/50 rounded-r-xl">
                <p className="text-[15px] sm:text-[16px] font-bold text-[#3d3d3d] leading-normal">
                  A childcare that celebrates creativity with a focus on fine arts.
                </p>
              </div>

              {/* Narrative Paragraph */}
              <p className="text-[14px] sm:text-[15px] text-[#666666] leading-relaxed sm:leading-[27px] font-normal pt-0.5">
                Located in the heart of Port Moody, BC, Annar Childcare offers a vibrant and nurturing environment for children from newborns to school-aged kids. Our specialized fine arts program is designed to inspire creativity and self-expression, fostering a love for the arts at every age. We provide tailored group experiences for infants and toddlers, engaging activities for 3-5-year-olds, and enriching after-school programs that cater to school-aged children.
              </p>

              {/* 4 Feature Value Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 pb-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Infant & Toddler Care</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Ages 3–5 Daycare</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Fine Arts Curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>After-School Programs</span>
                </div>
              </div>

              {/* Solid Deep Red Button */}
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#830201] hover:bg-[#650100] text-white px-8 py-3 sm:px-9 sm:py-3.5 rounded-full font-bold text-xs sm:text-[14px] tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl group"
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
