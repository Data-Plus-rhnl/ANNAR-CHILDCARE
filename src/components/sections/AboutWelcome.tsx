"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutWelcome() {
  return (
    <section className="about-section relative bg-gradient-to-b from-white via-[#faf8f5] to-white pt-14 sm:pt-24 lg:pt-[110px] pb-16 sm:pb-28 lg:pb-[130px] select-none overflow-hidden">
      {/* ================= ANIMATED FLOATING SHAPES CANVAS ================= */}
      <div className="pointer-events-none absolute inset-0 max-w-[1920px] mx-auto z-10">
        {/* Animated Flying Kite */}
        <div
          className="absolute float-bob-x hidden xl:block opacity-80"
          style={{
            left: "40px",
            top: "40px",
            width: "200px",
            height: "260px",
          }}
        >
          <Image
            src="/images/icons/anim-icon-1.png"
            alt="Flying Kite"
            fill
            className="object-contain"
          />
        </div>

        {/* Static Yellow Swirling Ribbon */}
        <div
          className="absolute hidden xl:block opacity-75"
          style={{
            right: "80px",
            top: "80px",
            width: "180px",
            height: "185px",
          }}
        >
          <Image
            src="/images/icons/anim-icon-2.png"
            alt="Yellow Swirling Ribbon"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* ================= CONTAINER ================= */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* ================= LEFT COLUMN: DUAL OVERLAPPING PHOTOS ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative mb-14 sm:mb-20 lg:mb-0 max-w-full">
              {/* Animated Cyan Circle */}
              <div
                className="absolute rounded-full bg-[#9be9ff] zoom-fade pointer-events-none z-0 hidden sm:block"
                style={{
                  width: "210px",
                  height: "210px",
                  left: "-60px",
                  top: "60px",
                }}
              />

              {/* Primary Background Image: Water Play / Outdoor Activity */}
              <div className="relative w-[270px] sm:w-[370px] h-[270px] sm:h-[370px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_45px_rgba(8,13,62,0.12)] z-10 bg-white group ml-8 sm:ml-4">
                <Image
                  src="/images/resource/about-annar-childcare-center.jpg"
                  alt="Children playing with water and sensory activities at Annar Child Care Center"
                  fill
                  priority
                  sizes="(max-width: 768px) 270px, 370px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlapping Foreground Image: Arts & Crafts */}
              <div
                className="absolute w-[210px] sm:w-[310px] h-[210px] sm:h-[310px] rounded-[22px] sm:rounded-[30px] border-[8px] sm:border-[12px] border-white shadow-[0_25px_50px_rgba(8,13,62,0.18)] overflow-hidden z-20 bg-white group -left-4 sm:-left-12 lg:-left-14 -bottom-10 sm:-bottom-16"
              >
                <Image
                  src="/images/resource/about-annar-daycare-center.jpg"
                  alt="Child exploring fine arts, crafts and painting at Annar Daycare"
                  fill
                  priority
                  sizes="(max-width: 768px) 210px, 310px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -right-2 sm:-right-6 -bottom-6 sm:-bottom-8 z-30">
                <div className="backdrop-blur-md bg-white/95 text-[#2b3c6b] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-red-100/80 text-[#830201] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#ff7162]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[12px] sm:text-[13px] font-black leading-tight text-[#2b3c6b]">Licensed Multi-Age</p>
                    <p className="text-[10px] sm:text-[11px] text-stone-500 font-semibold">Port Moody, BC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: NARRATIVE CONTENT ================= */}
          <div className="lg:col-span-6 pl-0 lg:pl-4">
            <div className="space-y-4 sm:space-y-5 text-left max-w-[560px] mx-auto lg:mx-0">
              {/* Subtitle with Coral Dash */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 sm:w-8 h-[2px] bg-[#ff7162]" />
                <h5 className="text-[14px] sm:text-[16px] font-black text-[#ff7162] tracking-normal uppercase">
                  About Annar Child Care
                </h5>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#2b3c6b] leading-tight sm:leading-[1.22] tracking-tight">
                Welcome to Our Family!
              </h2>

              {/* Stylized Bold Tagline with Coral Border */}
              <div className="border-l-4 border-[#ff7162] pl-4 py-1.5 bg-red-50/60 rounded-r-xl">
                <p className="text-[15px] sm:text-[16.5px] font-bold text-[#830201] leading-snug">
                  Promoting creativity, social skills, and emotional growth.
                </p>
              </div>

              {/* Narrative Paragraphs (Faithful to Legacy Text) */}
              <div className="space-y-3 text-[14px] sm:text-[15px] text-[#555555] leading-relaxed sm:leading-[27px] font-normal">
                <p>
                  Welcome to <strong>Annar Childcare in Port Moody, BC</strong>, where creativity and early learning come together! We specialize in providing high-quality childcare for infants, toddlers, preschoolers, and school-aged children. Our unique daily Fine Arts classes engage children of all ages, fostering creativity and self-expression in a safe, nurturing environment.
                </p>
                <p>
                  At Annar Childcare, we prioritize your child&apos;s growth and development through play-based learning and artistic exploration. Our dedicated and experienced team is committed to cultivating a love of learning, promoting social skills, and enhancing emotional well-being.
                </p>
                <p>
                  We believe in strong communication with families, ensuring that you are actively involved in your child&apos;s educational journey. Discover how Annar Childcare can provide your child with a vibrant and enriching experience that prepares them for a bright future!
                </p>
              </div>

              {/* Feature Value Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 pb-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Infant & Toddler Care (18m–3y)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Preschool & Daycare (Ages 3–5)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Fine Arts & Music Curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2b3c6b]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>Before & After School Program</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#830201] hover:bg-[#650100] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-[14px] tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-[#2b3c6b] px-6 py-3.5 rounded-full font-bold text-xs sm:text-[14px] tracking-wider uppercase transition-all duration-300 hover:scale-105"
                >
                  <span>Our Programs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
