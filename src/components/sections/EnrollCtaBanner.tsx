"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

export default function EnrollCtaBanner() {
  return (
    <section className="cta-section relative z-20 select-none overflow-visible py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#690100] via-[#830201] to-[#590100] text-white shadow-inner">
      {/* ================= AMBIENT LIGHTING & GLOWS (Contained) ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,113,98,0.18)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
      </div>

      {/* ================= 1. TOP-LEFT: 3D YELLOW PYRAMID & PINK SPHERE (anim-icon-9) ON FRONT OF LAYERS ================= */}
      <div
        className="absolute float-bob-x pointer-events-none z-40 hidden xl:block"
        style={{
          left: "80px",
          top: "-45px",
          width: "160px",
          height: "120px",
        }}
      >
        <Image
          src="/images/icons/anim-icon-9.png"
          alt="3D Yellow Pyramid & Pink Ball"
          fill
          priority
          className="object-contain drop-shadow-2xl"
        />
      </div>

      {/* ================= 2. MIDDLE-RIGHT: TEAL SATURN PLANET (anim-icon-10: rotate-me) ON FRONT OF LAYERS ================= */}
      <div
        className="absolute rotate-me pointer-events-none z-40 hidden xl:block"
        style={{
          right: "160px",
          top: "16%",
          width: "140px",
          height: "100px",
        }}
      >
        <Image
          src="/images/icons/anim-icon-10.png"
          alt="Teal Saturn Planet"
          fill
          priority
          className="object-contain drop-shadow-2xl"
        />
      </div>

      {/* ================= 3. BOTTOM-RIGHT: ORANGE ALARM CLOCK (anim-icon-8: zoom-fade) ON FRONT OF LAYERS ================= */}
      <div
        className="absolute zoom-fade pointer-events-none z-40 hidden xl:block"
        style={{
          right: "60px",
          bottom: "-70px",
          width: "245px",
          height: "275px",
        }}
      >
        <Image
          src="/images/icons/anim-icon-8.png"
          alt="Orange Alarm Clock"
          fill
          priority
          className="object-contain drop-shadow-2xl"
        />
      </div>

      {/* ================= CENTER CONTENT CONTAINER ================= */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-20 text-center space-y-6 sm:space-y-7">
        {/* Micro-Badge */}
        <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/15 border border-white/20 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-[13px] font-black uppercase tracking-wider text-amber-100">
            Accepting Enrollments • Ages 0–12
          </span>
        </div>

        {/* Subtitle & Main Title */}
        <div className="space-y-2 sm:space-y-3">
          <h4 className="text-base sm:text-xl font-extrabold text-amber-200 tracking-wide">
            Join Our Family
          </h4>

          <h2 className="text-2xl sm:text-4xl lg:text-[50px] font-black text-white leading-tight sm:leading-[1.12] tracking-tight max-w-4xl mx-auto">
            Enrol Your Child at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-orange-200">
              Annar Child Care
            </span>
          </h2>
        </div>

        {/* Supporting Narrative */}
        <p className="text-sm sm:text-lg text-stone-200 font-medium max-w-2xl mx-auto leading-relaxed px-2">
          Experience a nurturing, licensed community where your child&apos;s artistic creativity, confidence, and developmental growth is our highest joy!
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-md mx-auto sm:max-w-none">
          {/* Primary Coral CTA Button */}
          <Link
            href="/contact-us"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-[#ff7162] to-[#ff523d] hover:from-[#fa5b4a] hover:to-[#e63f2b] text-white px-8 py-3.5 sm:px-9 sm:py-4 rounded-full font-black text-xs sm:text-[15px] tracking-wider uppercase shadow-[0_8px_30px_rgba(255,113,98,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Secondary Quick Call Button */}
          <a
            href="tel:+17788227120"
            className="flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/25 text-white px-6 py-3.5 sm:px-7 sm:py-4 rounded-full font-extrabold text-xs sm:text-[15px] tracking-wide transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call (778) 822-7120</span>
          </a>
        </div>

        {/* Bottom Trust & Feature Pills */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-stone-200/90 font-bold border-t border-white/10 max-w-3xl mx-auto mt-6 sm:mt-8">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Fraser Health Licensed</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Fine Arts Curriculum</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Certified Early Educators</span>
          </div>
        </div>
      </div>
    </section>
  );
}
