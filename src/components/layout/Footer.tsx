"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Parallax from "parallax-js";
import { siteConfig } from "@/data/siteConfig";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  ArrowUp,
  Heart,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/layout/HeaderTop";

export default function Footer() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize interactive mouse-parallax on the 7 doodle layers
  useEffect(() => {
    let parallaxInstance: Parallax | null = null;
    if (sceneRef.current) {
      parallaxInstance = new Parallax(sceneRef.current, {
        relativeInput: true,
        hoverOnly: true,
        inputElement: sceneRef.current.parentElement as HTMLElement,
        scalarX: 20,
        scalarY: 20,
        frictionX: 0.1,
        frictionY: 0.1,
      });
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (parallaxInstance) parallaxInstance.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="main-footer relative select-none overflow-hidden bg-gradient-to-b from-[#690100] via-[#830201] to-[#590100] text-white">
      {/* ================= 1. REUSED PARALLAX DOODLE SCENE (ICONS 1 TO 7) ================= */}
      <div
        ref={sceneRef}
        className="parallax-scene parallax-scene-4 parallax-icon pointer-events-none absolute inset-0 overflow-hidden opacity-35"
      >
        <span data-depth="0.40" className="parallax-layer icon icon-1" />
        <span data-depth="0.50" className="parallax-layer icon icon-2" />
        <span data-depth="0.30" className="parallax-layer icon icon-3" />
        <span data-depth="0.40" className="parallax-layer icon icon-4" />
        <span data-depth="0.50" className="parallax-layer icon icon-5" />
        <span data-depth="0.30" className="parallax-layer icon icon-6" />
        <span data-depth="0.40" className="parallax-layer icon icon-7" />
      </div>

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ================= 2. MAIN WIDGET SECTION ================= */}
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* ================= COL 1: ABOUT ANNAR CHILDCARE & BADGES ================= */}
          <div className="md:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-amber-400" />
                <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
                  Licensed Fine Arts Academy
                </h4>
              </div>
              <h3 className="text-2xl sm:text-[26px] font-black text-white tracking-tight">
                About Annar ChildCare
              </h3>
            </div>

            <div className="space-y-3.5 text-[14px] sm:text-[15px] text-stone-200 leading-[26px] font-normal">
              <p>
                Welcome to Annar ChildCare, nestled in the heart of Port Moody, BC. We prioritize each child&apos;s individual journey, fostering creativity, exploration, and independence in a secure and inclusive setting.
              </p>
              <p>
                Our specialized Fine Arts Program ensures your child thrives creatively, developing their artistic skills and self-expression in a supportive environment.
              </p>
            </div>

            {/* Quality Accreditation Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>Fraser Health Licensed</span>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>CCFRI & ACCB Approved</span>
              </div>
            </div>
          </div>

          {/* ================= COL 2: USEFUL LINKS ================= */}
          <div className="md:col-span-3 space-y-5 pl-0 md:pl-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-amber-400" />
                <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
                  Navigation
                </h4>
              </div>
              <h3 className="text-xl sm:text-[22px] font-black text-white tracking-tight">
                Useful Links
              </h3>
            </div>

            <ul className="space-y-3 text-[14px] sm:text-[15px] text-stone-100 font-semibold">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "ChildCare Programs", href: "/programs" },
                { label: "Summer Camps & Events", href: "/events/summer-camp" },
                { label: "Book a Party!", href: "/events/birthday-parties" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Guidelines & Policies", href: "/resources/policies-procedures" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-amber-300 hover:translate-x-1.5 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400/80 group-hover:text-amber-300 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COL 3: GET IN TOUCH ================= */}
          <div className="md:col-span-4 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-amber-400" />
                <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
                  Connect With Us
                </h4>
              </div>
              <h3 className="text-xl sm:text-[22px] font-black text-white tracking-tight">
                Get in Touch
              </h3>
            </div>

            <p className="text-[14px] text-stone-200 font-medium">
              We&apos;re excited to hear from you! Reach out for tours, enrollment, or questions.
            </p>

            {/* Contact Details List */}
            <div className="space-y-3.5 text-[14px] sm:text-[15px] text-stone-100 font-medium pt-1">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/15">
                  <MapPin className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <p className="font-bold text-white">Our Facility</p>
                  <p className="text-xs sm:text-sm text-stone-300">3013 Spring Street, Port Moody, BC</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/15">
                  <Clock className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <p className="font-bold text-white">Hours of Operation</p>
                  <p className="text-xs sm:text-sm text-stone-300">Mon – Fri: 7:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                  <Phone className="w-4 h-4 text-amber-300" />
                </div>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-amber-300 font-bold transition-colors"
                >
                  (778) 822-7120
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                  <Mail className="w-4 h-4 text-amber-300" />
                </div>
                <a
                  href={siteConfig.contact.emailHref}
                  className="hover:text-amber-300 font-bold transition-colors"
                >
                  annaracademy@yahoo.com
                </a>
              </div>
            </div>

            {/* Social Buttons Pills */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 backdrop-blur-md bg-white/10 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-full text-xs font-bold text-white transition-all hover:scale-105 shadow-sm"
              >
                <InstagramIcon className="w-4 h-4 text-amber-300" />
                <span>Instagram</span>
              </a>

              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 backdrop-blur-md bg-white/10 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-full text-xs font-bold text-white transition-all hover:scale-105 shadow-sm"
              >
                <FacebookIcon className="w-4 h-4 text-amber-300" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. AUTHENTIC CLOUD SHAPE AT BOTTOM SEAM (logo-shap-2.png) ================= */}
      <div className="relative w-full flex justify-center -mb-[1px] z-30 pointer-events-none">
        <div className="relative w-[216px] h-[57px]">
          <Image
            src="/images/icons/logo-shap-2.png"
            alt="Cloud Shape Accent"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* ================= 4. ELEVATED TOP-TIER FOOTER BOTTOM BAR ================= */}
      <div className="bg-white text-stone-700 py-7 px-4 sm:px-8 border-t border-stone-200 relative z-30 shadow-[0_-5px_25px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1260px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright & Developer Details */}
          <div className="text-[12.5px] sm:text-[13.5px] text-stone-600 font-medium text-center md:text-left space-y-1">
            <p className="flex flex-wrap items-center justify-center md:justify-start gap-1 sm:gap-1.5">
              <span>Copyright © {new Date().getFullYear()}</span>
              <span className="font-extrabold text-[#830201]">Annar ChildCare</span>
              <span>• All Rights Reserved.</span>
              <span className="text-stone-300 hidden sm:inline">|</span>
              <span className="text-stone-500">Port Moody, BC</span>
            </p>
            <p className="text-[11.5px] text-stone-400 flex items-center justify-center md:justify-start gap-1">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-[#ff7162] fill-[#ff7162]" />
              <span>by</span>
              <a
                href="https://data-plus.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#830201] font-bold text-stone-600 underline underline-offset-2 transition-colors"
              >
                Data Plus Systems Ltd.
              </a>
            </p>
          </div>

          {/* Center / Right: Brand Crest Logo & Quick Legal Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8">
            <div className="flex items-center gap-4 text-xs font-bold text-stone-500">
              <Link
                href="/resources/policies-procedures"
                className="hover:text-[#830201] transition-colors"
              >
                Guidelines & Policies
              </Link>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              <Link
                href="/contact-us"
                className="hover:text-[#830201] transition-colors"
              >
                Inquiries & Tours
              </Link>
            </div>

            {/* High-Resolution Brand Crest */}
            <Link
              href="/"
              className="relative w-12 h-12 inline-block transition-transform duration-300 hover:scale-110 shrink-0"
              aria-label="Annar Child Care Home"
            >
              <Image
                src="/images/annar-footer-logo.png"
                alt="Annar ChildCare Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= FLOATING LUXURY BACK-TO-TOP BUTTON ================= */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-[#830201] to-[#a30302] hover:from-[#650100] hover:to-[#830201] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(131,2,1,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </footer>
  );
}
