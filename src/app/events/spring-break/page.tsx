import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Users,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Utensils,
  Palette,
  Waves,
  Calendar,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { springBreakData } from "@/data/springBreakData";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Spring Break Camp 2026 | Annar Childcare in Port Moody, BC",
  description:
    "Join Annar Childcare Spring Break Camp 2026 in Port Moody, BC. Open to Kindergarten to Grade 5. Outdoor adventures, clay ceramic art, swimming pool fun, and daily nutritious meals.",
  alternates: {
    canonical: "https://annarchildcare.ca/events/spring-break",
  },
  openGraph: {
    title: "Spring Break Camp 2026 | Annar Childcare Port Moody",
    description:
      "A spring break filled with adventure, fine arts creativity, and nutritious meals for children in Kindergarten to Grade 5.",
    url: "https://annarchildcare.ca/events/spring-break",
    images: [
      {
        url: "/images/background/page-title-programs-spring-break.jpg",
        width: 1200,
        height: 630,
        alt: "Annar Childcare Spring Break Camp",
      },
    ],
  },
};

export default function SpringBreakPage() {
  const { hero, details, highlights, cta } = springBreakData;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header (Exact Match to spring-break.html) */}
      <PageHeader
        title={hero.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events and Parties", href: "/events/spring-break" },
          { label: "Spring Break Camp 2026" },
        ]}
        bgImage={hero.bgImage}
      />

      {/* 2. Hero Overview Section */}
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
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-black uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
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

              {/* Schedule and Age Group Quick Pills */}
              <div className="flex flex-wrap gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-stone-200/80 shadow-sm text-xs sm:text-[13.5px] font-bold text-[#2b3c6b]">
                  <Users className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>{hero.ageGroupText}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-stone-200/80 shadow-sm text-xs sm:text-[13.5px] font-bold text-[#2b3c6b]">
                  <Clock className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>{hero.hoursText}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-stone-600 text-base sm:text-[16.5px] font-normal leading-relaxed">
                <p>
                  Looking for a fun, engaging, and worry-free spring break for your child?{" "}
                  <strong className="text-stone-800 font-bold">
                    Annar Childcare is offering an exciting Spring Camp filled with adventure, creativity, and nutritious meals provided daily.
                  </strong>
                </p>
                <p>{hero.subDescription}</p>
              </div>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: Palette, text: "Clay & Ceramic Art" },
                  { icon: Waves, text: "Swimming Pool Fun" },
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
                  <span>Reserve a Spring Spot</span>
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

            {/* Right Column: Layered Photo Card with Pastel Mint Offset Box */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative inline-block group my-6 sm:my-8">
                {/* Offset Pastel Shape */}
                <div className="absolute -top-10 -right-10 sm:-top-14 sm:-right-14 w-56 sm:w-68 h-56 sm:h-68 bg-[#cbf3d2] rounded-[24px] z-0 transition-transform duration-500 group-hover:scale-105" />

                {/* White Framed Card */}
                <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[24px] shadow-[0_25px_50px_rgba(0,0,0,0.09)] border border-stone-100/80">
                  <div className="relative w-[280px] sm:w-[390px] aspect-[4/4.5] rounded-[18px] overflow-hidden">
                    <Image
                      src="/images/resource/annar-childcare-activities-2.jpg"
                      alt="Children engaged in spring break creative activities at Annar Childcare"
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

      {/* 4. Schedule & Tuition Breakdown (Interactive All-Inclusive Card) */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-t border-b border-stone-200/80">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff7162] block">
              Transparent Spring Break Rates
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
              All-Inclusive Spring Tuition & Schedule
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
              Complete care with all nutritious meals, snacks, ceramic materials, and outdoor activities included.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Weekly Rate Showcase */}
            <div className="lg:col-span-6 bg-white rounded-[26px] p-8 sm:p-10 border border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>All-Inclusive Weekly Tuition</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#830201]">
                    ${hero.weeklyRate}
                  </span>
                  <span className="text-base font-bold text-stone-500">/ week</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Open to children in Kindergarten through Grade 5. Daily hot lunches, morning/afternoon snacks, and all art project supplies are provided at no extra cost.
                </p>

                <ul className="space-y-3 pt-2">
                  {details.feeIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact-us"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#2b3c6b] hover:bg-[#830201] text-white font-black text-sm tracking-wide transition-all shadow-md hover:scale-[1.01]"
                >
                  <span>Reserve Spring Break Spot</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Schedule & Program Details */}
            <div className="lg:col-span-6 bg-white rounded-[26px] p-8 sm:p-10 border border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col justify-between text-left space-y-6">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#2b3c6b]">Camp Logistics</h3>
                    <p className="text-xs text-stone-500 font-semibold">Drop-off & pick-up times</p>
                  </div>
                </div>

                <div className="divide-y divide-stone-100 space-y-4">
                  {details.schedule.map((item, sIdx) => (
                    <div key={sIdx} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <span className="text-xs sm:text-sm font-bold text-stone-500">{item.label}</span>
                      <span className="text-xs sm:text-sm font-black text-[#2b3c6b]">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-left flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-900 leading-relaxed font-normal">
                    <strong>Limited Availability:</strong> Class cohorts are kept small to maintain safe, high-ratio supervision and individualized fine arts instruction.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-stone-50 hover:bg-stone-100 text-[#2b3c6b] font-bold text-sm border border-stone-200 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#ff7162]" />
                  <span>Call to Inquire: {siteConfig.contact.phone}</span>
                </a>
              </div>
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
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-6 left-8 w-14 h-14 opacity-20 pointer-events-none hidden sm:block animate-bounce">
              <Image src="/images/icons/anim-icon-1.png" alt="" width={56} height={56} />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider relative z-10">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Limited Enrolment • Kindergarten to Grade 5</span>
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
