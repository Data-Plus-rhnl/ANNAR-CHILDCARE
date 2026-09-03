import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  MapPin,
  Users,
  Sparkles,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Utensils,
  Palette,
  Waves,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { summerCampData } from "@/data/summerCampData";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Summer Break Camp 2026 | Annar Childcare in Port Moody, BC",
  description:
    "Join Annar Childcare Summer Camp 2026 in Port Moody, BC. For Kindergarten to Grade 5 children. Fine arts, clay ceramic workshops, outdoor park adventures, swimming fun, and daily nutritious meals.",
  alternates: {
    canonical: "https://annarchildcare.ca/events/summer-camp",
  },
  openGraph: {
    title: "Summer Break Camp 2026 | Annar Childcare Port Moody",
    description:
      "A summer full of adventure, fine arts creativity, and nutritious meals for children aged 5-12 in Port Moody, BC.",
    url: "https://annarchildcare.ca/events/summer-camp",
    images: [
      {
        url: "/images/SUMMER-CAMP.webp",
        width: 1200,
        height: 630,
        alt: "Annar Childcare Summer Camp",
      },
    ],
  },
};

export default function SummerCampPage() {
  const { hero, fees, highlights, cta } = summerCampData;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        title={hero.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events and Parties", href: "/events/summer-camp" },
          { label: "Summer Camp 2026" },
        ]}
        bgImage={hero.bgImage}
      />

      {/* 2. Overview Hero Section */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200/80 relative overflow-hidden">
        {/* Playful Floating Doodles */}
        <div className="absolute top-8 left-10 w-16 h-16 opacity-30 pointer-events-none hidden sm:block animate-bounce">
          <Image src="/images/icons/anim-icon-1.png" alt="" width={64} height={64} />
        </div>
        <div className="absolute bottom-10 right-10 w-20 h-20 opacity-30 pointer-events-none hidden sm:block">
          <Image src="/images/icons/anim-icon-2.png" alt="" width={80} height={80} />
        </div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-black uppercase tracking-wider">
                  <Sun className="w-4 h-4 text-amber-500 fill-amber-500" />
                  {hero.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#830201] text-xs sm:text-sm font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#ff7162]" />
                  Port Moody, BC
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#2b3c6b] tracking-tight leading-tight sm:leading-[1.16]">
                {hero.subtitle}
              </h1>

              {/* Age Group Bar */}
              <div className="inline-flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white border border-stone-200/80 shadow-sm text-xs sm:text-[14.5px] font-bold text-[#2b3c6b]">
                <Users className="w-4 h-4 text-[#ff7162] shrink-0" />
                <span>{hero.ageGroupText}</span>
              </div>

              {/* Description */}
              <div className="space-y-4 text-stone-600 text-base sm:text-[16.5px] font-normal leading-relaxed">
                <p>{hero.description}</p>
                <p>{hero.subDescription}</p>
              </div>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: Palette, text: "Fine Arts & Clay" },
                  { icon: Waves, text: "Swimming Pool Days" },
                  { icon: Utensils, text: "Nutritious Meals Daily" },
                ].map((chip, idx) => {
                  const IconComponent = chip.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-xl bg-white border border-stone-200/70 shadow-sm text-xs sm:text-sm font-bold text-stone-800"
                    >
                      <IconComponent className="w-4 h-4 text-[#ff7162] shrink-0" />
                      <span>{chip.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#830201] hover:bg-[#680100] text-white font-black text-sm sm:text-base shadow-[0_10px_25px_rgba(131,2,1,0.25)] transition-all hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Reserve a Summer Spot</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-[#2b3c6b] font-bold text-sm sm:text-base border border-stone-200 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#ff7162]" />
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Layered Photo Card with Pastel Yellow Offset Box */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative inline-block group my-6 sm:my-8">
                {/* Offset Pastel Shape */}
                <div className="absolute -top-10 -right-10 sm:-top-14 sm:-right-14 w-56 sm:w-68 h-56 sm:h-68 bg-[#ffe39b] rounded-[24px] z-0 transition-transform duration-500 group-hover:scale-105" />

                {/* White Framed Card */}
                <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[24px] shadow-[0_25px_50px_rgba(0,0,0,0.09)] border border-stone-100/80">
                  <div className="relative w-[280px] sm:w-[390px] aspect-[4/4.5] rounded-[18px] overflow-hidden">
                    <Image
                      src="/images/resource/about-annar-childcare-art-class.jpg"
                      alt="Children engaged in summer camp fine arts painting at Annar Childcare"
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Camp Highlights (4 Authentic Flaticon Cards) */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#830201] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7162]" />
              <span>{highlights.subtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
              {highlights.title}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
              {highlights.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
            {highlights.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-[#faf8f5] hover:bg-white p-6 sm:p-8 rounded-[24px] border border-stone-200/70 hover:border-stone-200 shadow-sm hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Flaticon with Rotating Blob Backdrop */}
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center">
                    <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:rotate-25 group-hover:scale-110 pointer-events-none">
                      <Image
                        src={item.blobImage}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <i
                      className={`${item.iconClass} text-[46px] sm:text-[52px] relative z-10 leading-none transition-transform duration-300 group-hover:scale-110`}
                      style={{ color: item.iconColor }}
                    />
                  </div>

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-black text-[#2b3c6b] group-hover:text-[#830201] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[14px] text-stone-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing & Provincial Fee Reduction (Interactive Pricing Table) */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-t border-b border-stone-200/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff7162] block">
              Transparent & Affordable Care
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
              {fees.title}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
              {fees.subtitle}
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {fees.plans.map((plan, pIdx) => (
              <div
                key={pIdx}
                className="group relative bg-white rounded-[26px] p-8 sm:p-10 border border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgba(131,2,1,0.12)] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between text-left"
              >
                {/* Savings Badge */}
                {plan.badge && (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider mb-4 self-start">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#2b3c6b]">
                      {plan.category}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-stone-500 pt-0.5">
                      {plan.ageGroup}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-[#830201]">
                        ${plan.finalPrice}
                      </span>
                      <span className="text-sm font-bold text-stone-500">/ month</span>
                      <span className="text-sm font-bold text-stone-400 line-through ml-auto">
                        ${plan.originalPrice}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-emerald-700">
                      Includes provincial reduction of ${plan.discount}/month
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#2b3c6b] group-hover:bg-[#830201] text-white font-black text-sm tracking-wide transition-all shadow-md"
                  >
                    <span>{pIdx === 0 ? "Reserve Spot for Kindergarten" : "Reserve Spot for Grades 1–5"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* All-Inclusive Guarantee Callout */}
          <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-left flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-amber-950">
              <strong className="font-black text-amber-900 block">
                All-Inclusive Guarantee
              </strong>
              <p className="font-normal text-amber-900/90 leading-relaxed">
                {fees.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Reservation CTA Section (Floating Deep Navy Card on Clean Background) */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#243460] via-[#2b3c6b] to-[#1c2748] text-white p-8 sm:p-14 lg:p-16 shadow-[0_25px_60px_rgba(43,60,107,0.22)] border border-blue-900/30 text-center space-y-7">
            {/* Background Ambient Glow & Floating Shapes */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-6 left-8 w-14 h-14 opacity-20 pointer-events-none hidden sm:block animate-bounce">
              <Image src="/images/icons/anim-icon-1.png" alt="" width={56} height={56} />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider relative z-10">
              <Sun className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Limited Summer Enrolment • Ages 5 to 12</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-wider leading-tight text-white drop-shadow-sm max-w-3xl mx-auto relative z-10">
              {cta.title}
            </h2>

            <p className="text-stone-200 text-sm sm:text-[16.5px] font-normal max-w-2xl mx-auto leading-relaxed relative z-10">
              {cta.description}
            </p>

            <div className="pt-3 flex flex-wrap justify-center items-center gap-4 relative z-10">
              <Link
                href={cta.buttonHref}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7162] hover:bg-[#ff5a47] text-white font-black text-sm sm:text-base shadow-[0_10px_25px_rgba(255,113,98,0.35)] transition-all hover:scale-105 active:scale-95"
              >
                <span>{cta.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/25 backdrop-blur-sm transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call {siteConfig.contact.phone}</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-stone-300 font-medium relative z-10 border-t border-white/10 mt-6">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                3013 Spring Street, Port Moody, BC
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-300" />
                annaracademy@yahoo.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
