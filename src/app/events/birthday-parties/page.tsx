import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, ArrowRight, Clock, MapPin, Mail, PartyPopper } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Book A Birthday Party | Annar Childcare in Port Moody, BC",
  description:
    "Book a birthday party at Annar Childcare in Port Moody, BC. Private weekend celebrations and fine arts party packages. Details coming soon.",
  alternates: {
    canonical: "https://annarchildcare.ca/events/birthday-parties",
  },
};

export default function BirthdayPartiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header (Exact Match to party.html) */}
      <PageHeader
        title="Book A Birthday Party at Annar!"
        subtitle="Details Coming Soon"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events and Parties", href: "/events/birthday-parties" },
          { label: "Book a Party!" },
        ]}
        bgImage="/images/background/page-title-childcare.jpg"
      />

      {/* 2. Centered "Details Coming Soon" Showcase */}
      <section className="py-20 sm:py-28 bg-[#faf8f5] relative overflow-hidden flex items-center justify-center min-h-[520px]">
        {/* Playful Floating Doodles */}
        <div className="absolute top-10 left-12 w-16 h-16 opacity-30 pointer-events-none hidden sm:block animate-bounce">
          <Image src="/images/icons/anim-icon-1.png" alt="" width={64} height={64} />
        </div>
        <div className="absolute bottom-12 right-12 w-20 h-20 opacity-30 pointer-events-none hidden sm:block">
          <Image src="/images/icons/anim-icon-2.png" alt="" width={80} height={80} />
        </div>

        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-black uppercase tracking-wider">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Details Coming Soon</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-[#2b3c6b] tracking-tight leading-tight">
              Book A Birthday Party at Annar!
            </h1>
            <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
              We are putting the finishing touches on our exciting fine arts birthday party packages and weekend facility rentals. Stay tuned for full details and package options!
            </p>
          </div>

          {/* Early Inquiries Callout Box */}
          <div className="p-6 sm:p-8 rounded-[24px] bg-white border border-stone-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.05)] text-left space-y-4 max-w-lg mx-auto">
            <div className="flex items-center gap-3 text-[#2b3c6b]">
              <PartyPopper className="w-5 h-5 text-[#ff7162]" />
              <strong className="text-base font-black">Need an early booking inquiry?</strong>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              If you are planning an upcoming celebration and would like to inquire about private weekend date availability, feel free to contact us directly.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#830201] hover:bg-[#680100] text-white font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-stone-50 hover:bg-stone-100 text-[#2b3c6b] font-bold text-xs sm:text-sm border border-stone-200 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff7162]" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Location & Contact Meta */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-stone-500 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff7162]" />
              3013 Spring Street, Port Moody, BC
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#ff7162]" />
              annaracademy@yahoo.com
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
