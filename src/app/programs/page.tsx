import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Baby,
  GraduationCap,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ProgramsShowcase from "@/components/sections/ProgramsShowcase";
import EnrollCtaBanner from "@/components/sections/EnrollCtaBanner";
import { programs, signatureServices } from "@/data/programs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Childcare Programs | Annar Childcare Center in Port Moody, BC",
  description:
    "Explore licensed early learning childcare programs at Annar Child Care in Port Moody, BC. Toddler & Infant Care (18m–3y), Ages 3–5 Preschool Daycare, and Moody Elementary Before/After School Care.",
  keywords: [
    "Childcare programs Port Moody",
    "Daycare programs Port Moody",
    "Infant toddler care Port Moody",
    "Preschool ages 3-5 Port Moody",
    "Before after school care Moody Elementary",
    "CCFRI approved childcare Port Moody",
  ],
  alternates: {
    canonical: `${siteConfig.url}/programs`,
  },
  openGraph: {
    title: "Childcare Programs | Annar Childcare - Port Moody",
    description:
      "Licensed early childhood care, fine arts curriculum, French basics, and school transportation for ages 0–12.",
    url: `${siteConfig.url}/programs`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/resource/class-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Annar Childcare Programs",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function ProgramsOverviewPage() {
  return (
    <main className="min-h-screen select-none bg-[#faf8f5]">
      {/* 1. Page Header with Breadcrumbs & Animated Doodles */}
      <PageHeader
        title="Child Care Program Details"
        badge="Complete Early Learning Programs"
        subtitle="Explore our licensed programs for infants, toddlers, preschoolers, and school-age children in Port Moody, BC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
        bgImage="/images/background/page-title-programs.jpg"
      />

      {/* 2. Program Showcase Carousel (Reusing existing component from homepage) */}
      <ProgramsShowcase />

      {/* 3. Three Core Programs Deep Dive Grid */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-y border-stone-200/80">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#830201] text-xs sm:text-sm font-black tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-[#ff7162]" />
              <span>Tailored Educational Journey</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#2b3c6b] tracking-tight leading-tight">
              Explore Our 3 Core Programs
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto">
              From first milestones to kindergarten readiness and after-school enrichment, select a program to discover our detailed schedules, curriculum, and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog) => {
              const iconObj =
                prog.id === "infant-toddler"
                  ? Baby
                  : prog.id === "daycare-3-5"
                  ? GraduationCap
                  : BookOpen;
              const IconComp = iconObj;

              return (
                <div
                  key={prog.id}
                  className="bg-[#faf8f5] rounded-[30px] overflow-hidden border border-stone-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 text-left"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#830201] text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                      {prog.badge}
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-[#2b3c6b] px-3 py-1 rounded-full text-xs font-black shadow">
                      {prog.seats}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#ff7162]">
                        <IconComp className="w-4 h-4" />
                        <span>{prog.shortTitle}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-[#2b3c6b] group-hover:text-[#830201] transition-colors leading-snug">
                        {prog.title}
                      </h3>

                      <p className="text-xs sm:text-[13.5px] text-stone-600 leading-relaxed font-normal line-clamp-3">
                        {prog.summary}
                      </p>
                    </div>

                    {/* Pricing Badge */}
                    <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 block">
                          CCFRI Starting Fee
                        </span>
                        <span className="text-lg sm:text-xl font-black text-[#830201]">
                          {prog.ccfriPrice}
                        </span>
                      </div>

                      <Link
                        href={prog.route}
                        className="inline-flex items-center gap-1.5 bg-[#830201] hover:bg-[#650100] text-white px-4 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow hover:scale-105 group-hover:bg-[#ff7162]"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Signature Services ("Best Services for Kids") */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#faf8f5]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-black tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Why Families Choose Annar</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
              Best Services & Facilities for Kids
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Our unique services, dedicated transport, and inspiring facilities set Annar Child Care apart as Port Moody&apos;s premier early learning academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-[28px] overflow-hidden border border-stone-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-400 text-stone-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow">
                    {svc.badge}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-[#2b3c6b]">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-stone-600 leading-relaxed font-normal">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#830201] hover:text-[#ff7162] transition-colors uppercase tracking-wider"
                    >
                      <span>Learn More About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Enroll CTA */}
      <EnrollCtaBanner />
    </main>
  );
}
