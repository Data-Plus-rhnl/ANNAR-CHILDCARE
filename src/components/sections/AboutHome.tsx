"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutHome() {
  return (
    <section className="about-section relative bg-gradient-to-b from-white via-[#faf8f5] to-white pt-[140px] pb-[160px] select-none overflow-hidden">
      {/* ================= EXACT ORIGINAL ANIM-ICON CANVAS (max-w-[1920px]) ================= */}
      <div className="pointer-events-none absolute inset-0 max-w-[1920px] mx-auto z-10">
        {/* Animated Flying Kite (style.css:1469-1476: left: 60px, top: 40px, 210px x 275px, float-bob-x) */}
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

        {/* Static Yellow Swirling Ribbon (style.css:1478-1485: right: 110px, top: 70px, 188px x 192px) */}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ================= LEFT COLUMN: DUAL PHOTOS WITH CYAN CIRCLE ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative mb-28 lg:mb-0 mr-0 lg:mr-2">
              {/* Animated Cyan Circle (style.css:1406-1417: #9be9ff, 215px x 215px, left: -120px, top: 95px, zoom-fade) */}
              <div
                className="absolute rounded-full bg-[#9be9ff] zoom-fade pointer-events-none z-0 hidden sm:block"
                style={{
                  width: "215px",
                  height: "215px",
                  left: "-120px",
                  top: "95px",
                }}
              />

              {/* Primary Background Image (370px x 370px) */}
              <div className="relative w-[300px] sm:w-[370px] h-[300px] sm:h-[370px] rounded-[30px] overflow-hidden shadow-[0_30px_50px_rgba(8,13,62,0.12)] z-10 bg-white group">
                <Image
                  src="/images/resource/about-annar-childcare-1.jpg"
                  alt="Child's hand holding a toy at Annar Child Care"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlapping Foreground Image (340px x 340px, left: -75px, bottom: -115px, 15px white border) */}
              <div
                className="absolute w-[270px] sm:w-[340px] h-[270px] sm:h-[340px] rounded-[30px] border-[12px] sm:border-[15px] border-white shadow-[0_30px_50px_rgba(8,13,62,0.12)] overflow-hidden z-20 bg-white group"
                style={{
                  left: "-75px",
                  bottom: "-115px",
                }}
              >
                <Image
                  src="/images/resource/about-annar-childcare-2.jpg"
                  alt="Child painting on canvas in Annar Child Care"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Glassmorphic Quality Badge */}
              <div className="absolute -right-4 -bottom-8 z-30 hidden sm:block">
                <div className="backdrop-blur-md bg-white/95 text-[#2b3c6b] px-4 py-2 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100/80 text-[#830201] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#ff7162]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[12px] font-black leading-tight text-[#2b3c6b]">Fine Arts Focused</p>
                    <p className="text-[10px] text-stone-500 font-semibold">Port Moody, BC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONTENT BOX ================= */}
          <div className="lg:col-span-6 pl-0 lg:pl-2">
            <div className="space-y-4 text-left max-w-[500px]">
              {/* Subtitle with Red Dash */}
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[2px] bg-[#ff7162]" />
                <h5 className="text-[16px] sm:text-[17px] font-black text-[#ff7162] tracking-normal">
                  The Best ChildCare in Coquitlam, BC
                </h5>
              </div>

              {/* Headline with exact #2b3c6b color */}
              <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-black text-[#2b3c6b] leading-[48px] tracking-tight">
                Welcome to Annar Child
                <br className="hidden sm:inline" />
                Care - Daycare Center in
                <br className="hidden sm:inline" />
                Port Moody, BC
              </h1>

              {/* Stylized Bold Tagline with Coral Border */}
              <div className="border-l-4 border-[#ff7162] pl-3.5 py-1 bg-red-50/50 rounded-r-xl">
                <p className="text-[16px] sm:text-[17px] font-bold text-[#3d3d3d] leading-[24px]">
                  A childcare that celebrates creativity with a focus on fine arts.
                </p>
              </div>

              {/* Narrative Paragraph */}
              <p className="text-[14.5px] sm:text-[15px] text-[#666666] leading-[27px] font-normal pt-0.5">
                Located in the heart of Port Moody, BC, Annar Childcare offers a vibrant and nurturing environment for children from newborns to school-aged kids. Our specialized fine arts program is designed to inspire creativity and self-expression, fostering a love for the arts at every age. We provide tailored group experiences for infants and toddlers, engaging activities for 3-5-year-olds, and enriching after-school programs that cater to school-aged children. With a focus on artistic exploration and developmental growth, our dedicated educators ensure that every child feels supported and encouraged on their unique journey.
              </p>

              {/* 4 Feature Value Pills */}
              <div className="grid grid-cols-2 gap-2 pt-1 pb-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Infant & Toddler Care</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Ages 3–5 Daycare</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Fine Arts Curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>After-School Programs</span>
                </div>
              </div>

              {/* Solid Deep Red Button */}
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#830201] hover:bg-[#650100] text-white px-9 py-3.5 rounded-full font-bold text-[14px] tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl group"
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
