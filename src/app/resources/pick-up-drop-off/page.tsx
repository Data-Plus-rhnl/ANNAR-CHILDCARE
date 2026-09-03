import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Bus,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  School,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { pickupDropoffData } from "@/data/pickupDropoffData";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Pick-up & Drop-Off Facility | Annar Childcare Port Moody",
  description:
    "Safe and convenient pick-up and drop-off transportation services for after-school children at Annar Childcare in Port Moody, BC. Serving Moody Elementary & Pinetree Way Elementary.",
  alternates: {
    canonical: "https://annarchildcare.ca/resources/pick-up-drop-off",
  },
  openGraph: {
    title: "Pick-up & Drop-Off Facility | Annar Childcare Port Moody",
    description:
      "Reliable and safe afterschool transit for children attending Moody Elementary & Pinetree Way Elementary.",
    url: "https://annarchildcare.ca/resources/pick-up-drop-off",
    images: [
      {
        url: "/images/resource/daycare-bus.jpg",
        width: 1200,
        height: 630,
        alt: "Annar Childcare Transportation Bus",
      },
    ],
  },
};

export default function PickupDropoffPage() {
  const { hero, services, guidelines, commitment } = pickupDropoffData;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header (Exact Match to pick-up-drop-off-facility.html) */}
      <PageHeader
        title="Pick-up & Drop-Off Facility | Afterschool at Annar Childcare"
        subtitle="Pick Up and Drop Off Facility"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/policies-procedures" },
          { label: "Pick Up & Drop Off Facility" },
        ]}
        bgImage="/images/background/dropoff-bg.jpg"
      />

      {/* 2. Overview Section with Daycare Bus Photo */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200/80 relative overflow-hidden">
        {/* Playful Floating Doodles */}
        <div className="absolute top-8 left-10 w-16 h-16 opacity-30 pointer-events-none hidden sm:block animate-bounce">
          <Image src="/images/icons/anim-icon-1.png" alt="" width={64} height={64} />
        </div>
        <div className="absolute bottom-10 right-10 w-20 h-20 opacity-30 pointer-events-none hidden sm:block">
          <Image src="/images/icons/anim-icon-2.png" alt="" width={80} height={80} />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-black uppercase tracking-wider">
              <Bus className="w-4 h-4 text-amber-600" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#2b3c6b] tracking-tight leading-tight sm:leading-[1.16]">
              Pick Up and Drop Off Facility <br className="hidden sm:inline" />
              at Annar ChildCare
            </h1>

            <p className="text-stone-600 text-base sm:text-lg font-normal leading-relaxed">
              {hero.description}
            </p>

            {/* School Service Callout */}
            <div className="inline-flex items-center gap-2.5 p-3.5 sm:px-6 sm:py-3 rounded-2xl bg-white border border-stone-200 shadow-sm text-xs sm:text-[14.5px] font-bold text-[#2b3c6b] text-left">
              <School className="w-5 h-5 text-[#ff7162] shrink-0" />
              <span>{hero.schoolsNote}</span>
            </div>
          </div>

          {/* Hero Featured Bus Image Card */}
          <div className="relative rounded-[28px] overflow-hidden bg-white p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-stone-200/90 max-w-4xl mx-auto group">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-[20px] overflow-hidden">
              <Image
                src="/images/resource/daycare-bus.jpg"
                alt="Annar Childcare dedicated safe transportation bus"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Transportation Services */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: 2 Flaticon Feature Cards */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#ff7162]">
                  Safe Transit Fleet
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
                  Comprehensive Transportation Services
                </h2>
              </div>

              <div className="space-y-5 pt-2">
                {services.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-[24px] bg-[#faf8f5] border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-5"
                  >
                    {/* Flaticon with Rotating Blob Backdrop */}
                    <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                      <div className="absolute inset-0 pointer-events-none">
                        <Image
                          src={item.blobImage}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <i
                        className={`${item.iconClass} text-[36px] relative z-10 leading-none`}
                        style={{ color: item.iconColor }}
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-[#2b3c6b]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Layered Transportation Photo Card */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative inline-block group my-6 sm:my-8">
                {/* Offset Pastel Shape */}
                <div className="absolute -top-10 -right-10 sm:-top-14 sm:-right-14 w-56 sm:w-68 h-56 sm:h-68 bg-[#9be9ff] rounded-[24px] z-0 transition-transform duration-500 group-hover:scale-105" />

                {/* White Framed Card */}
                <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[24px] shadow-[0_25px_50px_rgba(0,0,0,0.09)] border border-stone-100/80">
                  <div className="relative w-[280px] sm:w-[390px] aspect-[4/4.5] rounded-[18px] overflow-hidden">
                    <Image
                      src="/images/resource/transportation.jpg"
                      alt="Children safely arriving at Annar Childcare with instructor supervision"
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Guidelines and Policies for Parents (Exceptional Infrastructure Box with Sliding Curtain Hover Effect) */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-t border-b border-stone-200/80">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff7162] block">
              Transit Safety Protocols
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
              Guidelines and Policies for Parents
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
              To ensure the smooth operation of our transportation services and the safety of all children, we maintain the following transit protocols:
            </p>
          </div>

          {/* Authentic Infrastructure Card with Sliding Hover Effect (EXACT MATCH to ProgramAuthenticSection) */}
          <div className="text-left max-w-3xl mx-auto">
            <div className="infra-pricing-box rounded-[26px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-stone-200/80 cursor-default group/table">
              {/* Table Header with Crimson Background & Globe Watermark */}
              <div className="infra-header relative bg-[#830201] p-8 sm:p-12 text-white overflow-hidden border-b border-[#700201]">
                {/* Globe Outline Icon Watermark */}
                <div className="absolute top-8 right-8 sm:top-10 sm:right-12 text-white/30 pointer-events-none transition-transform duration-700 group-hover/table:rotate-12 group-hover/table:scale-110">
                  <i className="flaticon-earth-globe text-6xl sm:text-7xl block leading-none" />
                </div>

                <div className="space-y-3 max-w-xl relative z-10">
                  <h3 className="text-2xl sm:text-[34px] font-black uppercase tracking-wider leading-tight text-white drop-shadow-sm">
                    Transportation<br />& Passenger Guidelines
                  </h3>

                  <div className="border-t border-dashed border-white/40 pt-4 mt-4">
                    <p className="text-xs sm:text-[14.5px] text-white/95 font-normal leading-relaxed">
                      Comprehensive security and punctuality standards for daily pick-up and drop-off routines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Table Content List with Hover Color Inversion */}
              <div className="infra-content-area p-6 sm:p-10 space-y-0">
                <ul className="space-y-0">
                  {guidelines.map((rule, idx) => (
                    <li
                      key={idx}
                      className={`py-4 sm:py-5 first:pt-0 last:pb-0 text-xs sm:text-[15px] leading-relaxed infra-dashed-line ${
                        idx !== guidelines.length - 1
                          ? "border-b border-dashed"
                          : ""
                      }`}
                    >
                      <strong className="infra-item-title font-black mr-1.5">
                        {rule.title}:
                      </strong>
                      <span className="infra-item-desc font-normal">
                        {rule.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Bottom Support CTA Section (Floating Deep Navy Card on Clean Background) */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#243460] via-[#2b3c6b] to-[#1c2748] text-white p-8 sm:p-14 lg:p-16 shadow-[0_25px_60px_rgba(43,60,107,0.22)] border border-blue-900/30 text-center space-y-7">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider relative z-10">
              <Bus className="w-4 h-4 text-amber-300" />
              <span>After-School Route Enrolment</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-wider leading-tight text-white drop-shadow-sm max-w-3xl mx-auto relative z-10">
              {commitment.title}
            </h2>

            <p className="text-stone-200 text-sm sm:text-[16.5px] font-normal max-w-2xl mx-auto leading-relaxed relative z-10">
              {commitment.description}
            </p>

            <div className="pt-3 flex flex-wrap justify-center items-center gap-4 relative z-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7162] hover:bg-[#ff5a47] text-white font-black text-sm sm:text-base shadow-[0_10px_25px_rgba(255,113,98,0.35)] transition-all hover:scale-105 active:scale-95"
              >
                <span>Register for Transportation</span>
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
