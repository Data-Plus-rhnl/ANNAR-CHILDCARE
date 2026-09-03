"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  Calendar,
  Baby,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Trees,
  Bed,
  School,
  Palette,
  Bus,
  Moon,
  Apple,
  HeartPulse,
  HeartHandshake,
  Coffee,
  Users,
  Smile,
  Music,
  ArrowRight,
  Phone,
  DollarSign,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import { ProgramItem } from "@/types";
import { siteConfig } from "@/data/siteConfig";

interface ProgramDetailSectionProps {
  program: ProgramItem;
}

// Icon mapping helper
const iconMap: Record<string, LucideIcon> = {
  Baby,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Trees,
  Bed,
  School,
  Palette,
  Bus,
  Moon,
  Apple,
  HeartPulse,
  HeartHandshake,
  Coffee,
  Users,
  Smile,
  Music,
  Clock,
  Sparkles,
  Calendar,
};

export default function ProgramDetailSection({ program }: ProgramDetailSectionProps) {
  const [activeScheduleTab, setActiveScheduleTab] = useState<"all" | "morning" | "afternoon">("all");

  const filterSchedule = () => {
    if (!program.dailySchedule) return [];
    if (activeScheduleTab === "morning") {
      return program.dailySchedule.filter((item) => item.time.includes("AM"));
    }
    if (activeScheduleTab === "afternoon") {
      return program.dailySchedule.filter((item) => item.time.includes("PM"));
    }
    return program.dailySchedule;
  };

  const visibleSchedule = filterSchedule();

  return (
    <div className="program-detail-wrapper select-none bg-[#faf8f5]">
      {/* ================= 1. PROGRAM OVERVIEW & KEY METRICS ================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-stone-200/80 relative overflow-hidden">
        {/* Subtle Ambient Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Image with Floating Stats Badge */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Floating Age Badge */}
                <div className="absolute top-5 left-5 backdrop-blur-md bg-white/95 text-[#830201] border border-red-100 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff7162] animate-ping" />
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                    {program.badge}
                  </span>
                </div>

                {/* Floating Seats / License Badge */}
                <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-stone-900/80 text-white p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stone-300 font-semibold uppercase tracking-wider block">
                      Licensed Capacity
                    </span>
                    <span className="text-base sm:text-lg font-black text-amber-300">
                      {program.seats || "Licensed Fraser Health Facility"}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-stone-300 font-semibold uppercase tracking-wider block">
                      Operating Hours
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {program.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Key Highlights */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#830201] text-xs sm:text-sm font-black tracking-wide uppercase">
                  <Sparkles className="w-4 h-4 text-[#ff7162]" />
                  <span>Program Overview</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-[#2b3c6b] tracking-tight leading-tight">
                  {program.title}
                </h2>

                <p className="text-base sm:text-lg text-[#830201] font-bold leading-relaxed">
                  {program.tagline}
                </p>
              </div>

              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>{program.summary}</p>
                <p>{program.description}</p>
              </div>

              {/* Highlights Bullet List */}
              <div className="pt-2 space-y-2.5">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#2b3c6b]">
                  Key Program Pillars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {program.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#faf8f5] border border-stone-200/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#ff7162] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-[13px] text-stone-700 font-semibold leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#830201] hover:bg-[#650100] text-white px-7 py-3.5 rounded-full font-black text-xs sm:text-[14px] uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Inquire & Enroll</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-[#2b3c6b] px-6 py-3.5 rounded-full font-bold text-xs sm:text-[14px] transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-[#ff7162]" />
                  <span>Call (778) 822-7120</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. SUB-STREAMS / FOCUS STREAMS (IF ANY) ================= */}
      {program.subStreams && program.subStreams.length > 0 && (
        <section className="py-14 sm:py-20 bg-[#faf8f5] relative overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-black tracking-wide uppercase">
                <Baby className="w-4 h-4 text-amber-600" />
                <span>Tailored Age Streams</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
                Designed for Every Developmental Stage
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
                We provide individualized environments calibrated specifically to the social, emotional, and physical milestones of each age cohort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {program.subStreams.map((stream, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[28px] overflow-hidden shadow-xl border border-stone-200/80 transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={stream.image}
                      alt={stream.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#830201] text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                      {stream.age}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-black text-[#2b3c6b]">
                        {stream.title}
                      </h3>
                      <p className="text-stone-600 text-xs sm:text-[14px] leading-relaxed font-normal">
                        {stream.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#830201] block">
                        Included Stream Features:
                      </span>
                      <ul className="space-y-2">
                        {stream.amenities.map((amenity, aIdx) => (
                          <li
                            key={aIdx}
                            className="flex items-start gap-2 text-xs sm:text-[13px] text-stone-700 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 3. CURRICULUM MODULES ================= */}
      {program.curriculum && program.curriculum.length > 0 && (
        <section className="py-14 sm:py-20 bg-white border-y border-stone-200/80">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#830201] text-xs sm:text-sm font-black tracking-wide uppercase">
                <GraduationCap className="w-4 h-4 text-[#ff7162]" />
                <span>Curriculum & Learning Goals</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
                Holistic Early Learning Framework
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
                Our curriculum bridges creative arts, foundational academics, language exposure, and social-emotional growth in a fun, supportive setting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {program.curriculum.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#faf8f5] rounded-[26px] p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all text-left space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#830201] text-white flex items-center justify-center font-black text-lg shadow-md">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#2b3c6b]">
                    {item.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {item.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2 text-xs sm:text-[13.5px] text-stone-600 leading-relaxed font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff7162] mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 4. INFRASTRUCTURE & FACILITIES ================= */}
      {program.infrastructure && program.infrastructure.length > 0 && (
        <section className="py-14 sm:py-20 bg-[#faf8f5]">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-black tracking-wide uppercase">
                <School className="w-4 h-4 text-amber-600" />
                <span>Purpose-Built Environment</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
                Infrastructure & Facilities
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
                We take immense pride in our state-of-the-art infrastructure and safe outdoor facilities designed for comfort, security, and inspiration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {program.infrastructure.map((item, idx) => {
                const IconComponent = item.icon ? iconMap[item.icon] || School : School;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[24px] p-6 sm:p-7 border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 text-left space-y-4 group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#830201] flex items-center justify-center transition-all duration-300 group-hover:bg-[#830201] group-hover:text-white group-hover:scale-110">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-black text-[#2b3c6b]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= 5. DAILY SCHEDULE TIMETABLE ================= */}
      {program.dailySchedule && program.dailySchedule.length > 0 && (
        <section className="py-14 sm:py-20 bg-white border-y border-stone-200/80 relative">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#830201] text-xs sm:text-sm font-black tracking-wide uppercase">
                <Clock className="w-4 h-4 text-[#ff7162]" />
                <span>Daily Routine</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
                Daily Schedule & Flow
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
                A predictable yet flexible rhythm designed to meet children&apos;s natural energy cycles, feeding, naps, and creative peaks.
              </p>

              {/* Schedule Filter Tabs */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {[
                  { id: "all", label: "Full Day (All)" },
                  { id: "morning", label: "Morning Session" },
                  { id: "afternoon", label: "Afternoon Session" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveScheduleTab(tab.id as any)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeScheduleTab === tab.id
                        ? "bg-[#830201] text-white shadow-md"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Timetable List */}
            <div className="bg-[#faf8f5] rounded-[28px] p-4 sm:p-8 border border-stone-200/80 shadow-lg space-y-3">
              {visibleSchedule.map((entry, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl bg-white border border-stone-200/60 hover:border-red-200 hover:shadow-sm transition-all gap-2 sm:gap-6"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="w-8 h-8 rounded-full bg-red-50 border border-red-100 text-[#830201] flex items-center justify-center text-xs font-black">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-[13.5px] font-black text-[#830201] bg-red-50/60 px-3 py-1 rounded-full">
                      {entry.time}
                    </span>
                  </div>

                  <div className="flex-1 text-left">
                    <h4 className="text-sm sm:text-base font-black text-[#2b3c6b]">
                      {entry.activity}
                    </h4>
                    {entry.desc && (
                      <p className="text-xs text-stone-500 font-normal mt-0.5">
                        {entry.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 6. WELL-BEING & CERTIFIED EDUCATORS ================= */}
      {program.wellBeingPillars && program.wellBeingPillars.length > 0 && (
        <section className="py-14 sm:py-20 bg-[#faf8f5]">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-black tracking-wide uppercase">
                <HeartPulse className="w-4 h-4 text-emerald-600" />
                <span>Dedicated Care & Health</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
                Well-Being, Safety & Mentorship
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
                Certified Early Childhood Educators (ECE & ITE) committed to providing attentive, loving, and responsive guidance throughout every day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {program.wellBeingPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon ? iconMap[pillar.icon] || HeartHandshake : HeartHandshake;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[24px] p-6 sm:p-7 border border-stone-200/80 shadow-sm text-left space-y-4 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-black text-[#2b3c6b]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= 7. TUITION & GOVERNMENT FEE REDUCTIONS ================= */}
      <section className="py-14 sm:py-20 bg-white border-t border-stone-200/80">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#830201] via-[#690100] to-[#480000] text-white rounded-[32px] p-8 sm:p-12 shadow-2xl relative overflow-hidden text-left space-y-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-200 bg-white/10 px-3.5 py-1.5 rounded-full">
                  <DollarSign className="w-4 h-4 text-amber-300" />
                  Government Fee Reduction Included
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-tight">
                  Affordable Child Care in Port Moody
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal max-w-xl">
                  Annar Child Care participates in the <strong>Child Care Fee Reduction Initiative (CCFRI)</strong> and accepts the <strong>Affordable Child Care Benefit (ACCB)</strong>, significantly reducing monthly out-of-pocket costs for BC families.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-amber-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                    <span>Direct CCFRI Fee Subsidies Applied</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                    <span>ACCB Provincial Subsidies Welcomed</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center space-y-3">
                <span className="text-xs text-stone-300 font-bold uppercase tracking-wider block">
                  Parent Fee Starting At
                </span>
                <div className="text-3xl sm:text-4xl font-black text-amber-300">
                  {program.ccfriPrice || "$886 / mo"}
                </div>
                <span className="text-[11px] text-stone-300 font-medium block">
                  After Provincial CCFRI Reduction
                </span>

                <div className="pt-3">
                  <Link
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#ff7162] hover:bg-[#ff5542] text-white py-3 px-5 rounded-full font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
