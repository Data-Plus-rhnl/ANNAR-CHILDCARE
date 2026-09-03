"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  Brain,
  BookOpen,
  Heart,
  ArrowRight,
  Leaf,
  Brush,
} from "lucide-react";

export default function AboutFineArts() {
  const benefits = [
    {
      icon: Brain,
      iconColor: "text-[#43b3d9]",
      bgBadge: "bg-sky-50 text-[#43b3d9]",
      title: "Cognitive & Critical Thinking",
      desc: "Artistic exercises stimulate problem-solving, spatial awareness, and divergent thinking, giving children an early intellectual edge.",
    },
    {
      icon: Brush,
      iconColor: "text-[#ff7162]",
      bgBadge: "bg-red-50 text-[#ff7162]",
      title: "Fine Motor Mastery",
      desc: "Handling brushes, clay sculpting, and precise sketching develops hand-eye coordination and the dexterity required for early writing.",
    },
    {
      icon: BookOpen,
      iconColor: "text-[#fbb419]",
      bgBadge: "bg-amber-50 text-[#fbb419]",
      title: "Literacy & Numeracy Readiness",
      desc: "Our curriculum blends the alphabet, numbers, and structured homework tasks into creative projects for seamless school readiness.",
    },
    {
      icon: Heart,
      iconColor: "text-[#830201]",
      bgBadge: "bg-rose-50 text-[#830201]",
      title: "Emotional Self-Expression",
      desc: "A nurturing atmosphere where children feel safe expressing complex feelings, building empathy, self-confidence, and social harmony.",
    },
  ];

  return (
    <section className="about-fine-arts relative bg-white py-16 sm:py-24 lg:py-32 select-none overflow-hidden border-t border-stone-100">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Animated Floating Doodle Icon */}
      <div
        className="absolute zoom-fade pointer-events-none z-10 hidden xl:block"
        style={{
          right: "60px",
          top: "40%",
          width: "160px",
          height: "165px",
        }}
      >
        <Image
          src="/images/icons/anim-icon-2.png"
          alt="Decorative Swirl Ribbon"
          fill
          className="object-contain opacity-60"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#830201] text-xs sm:text-sm font-black tracking-wide uppercase">
            <Palette className="w-4 h-4 text-[#ff7162]" />
            <span>Signature Educational Philosophy</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#2b3c6b] tracking-tight leading-tight sm:leading-[1.18]">
            Childcare Enriched by Fine Arts Education
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-medium max-w-2xl mx-auto">
            Discover how integrating creative arts with academic foundations unlocks your child&apos;s full cognitive and emotional potential.
          </p>
        </div>

        {/* ================= DUAL FEATURED PHOTO SHOWCASE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Card 1: Nature & Outdoor Lesson */}
          <div className="group relative rounded-[26px] sm:rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] bg-stone-100 aspect-[4/3] sm:aspect-[16/11]">
            <Image
              src="/images/resource/about-annar-childcare-nature.jpg"
              alt="Nature Lesson and Outdoor Discovery at Annar Child Care Center in Port Moody, BC"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Shade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent z-10" />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between">
              <div className="space-y-0.5 text-left">
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider text-emerald-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                  <Leaf className="w-3.5 h-3.5" />
                  Nature & Outdoor Learning
                </span>
                <h3 className="text-base sm:text-xl font-black text-white drop-shadow-md">
                  Hands-On Environmental Exploration
                </h3>
              </div>
            </div>
          </div>

          {/* Card 2: Arts Lesson */}
          <div className="group relative rounded-[26px] sm:rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] bg-stone-100 aspect-[4/3] sm:aspect-[16/11]">
            <Image
              src="/images/resource/about-annar-childcare-art-class.jpg"
              alt="Fine Arts lesson and painting at Annar Daycare Center in Port Moody, BC"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Shade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent z-10" />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between">
              <div className="space-y-0.5 text-left">
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider text-amber-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                  <Brush className="w-3.5 h-3.5" />
                  Daily Fine Arts Studio
                </span>
                <h3 className="text-base sm:text-xl font-black text-white drop-shadow-md">
                  Creative Canvas, Sculpting & Expression
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* ================= NARRATIVE TEXT BOX ================= */}
        <div className="max-w-[900px] mx-auto bg-stone-50/80 rounded-[28px] p-6 sm:p-10 border border-stone-200/80 text-center space-y-6 mb-14 sm:mb-16">
          <p className="text-[14.5px] sm:text-[16.5px] text-[#444444] leading-relaxed sm:leading-[30px] font-medium">
            At <strong>Annar Childcare</strong>, our daily Fine Arts classes are not just about creativity; they play a crucial role in <strong>holistic child development</strong>. Engaging in artistic activities helps enhance cognitive skills, fine motor development, and critical thinking, laying a strong foundation for academic success.
          </p>
          <p className="text-[14.5px] sm:text-[16.5px] text-[#444444] leading-relaxed sm:leading-[30px] font-medium">
            In addition to fostering creativity, we prioritize academic growth by teaching essential skills such as alphabet and numeracy skills. Our curriculum includes age-appropriate assignments that reinforce learning and encourage a sense of responsibility. We also focus on emotional development, providing a supportive environment where children can express their feelings and build social skills. By integrating Fine Arts with academic and emotional learning, we prepare children for a well-rounded future.
          </p>
        </div>

        {/* ================= 4 BENEFIT PILLARS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[22px] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-stone-100 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl ${item.bgBadge} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#2b3c6b] group-hover:text-[#830201] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-stone-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="text-center pt-12 sm:pt-16">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[#830201] hover:bg-[#650100] text-white px-9 py-4 rounded-full font-bold text-xs sm:text-[14px] tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
