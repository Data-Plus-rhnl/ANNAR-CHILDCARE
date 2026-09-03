"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, Sparkles } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  title: string;
  badge?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageHeader({
  title,
  badge,
  subtitle,
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ],
  bgImage = "/images/background/page-title-about-us-annar-childcare-center.webp",
}: PageHeaderProps) {
  return (
    <section className="page-title relative w-full pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 lg:pb-32 overflow-hidden select-none bg-stone-900">
      {/* Background Image with Parallax-feel & Scale */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.7] contrast-[1.05]"
        />
        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#830201]/40 via-transparent to-[#2b3c6b]/30 z-10" />
      </div>

      {/* Floating Animated Doodle Icons (Exact Legacy Brand Accents) */}
      <div className="pointer-events-none absolute inset-0 max-w-[1920px] mx-auto z-20 overflow-hidden">
        {/* Animated Flying Kite on Top-Left */}
        <div
          className="absolute float-bob-x hidden md:block opacity-75"
          style={{
            left: "40px",
            top: "20px",
            width: "160px",
            height: "210px",
          }}
        >
          <Image
            src="/images/icons/anim-icon-1.png"
            alt="Decorative Flying Kite"
            fill
            className="object-contain"
          />
        </div>

        {/* Animated Swirling Ribbon on Bottom-Right */}
        <div
          className="absolute zoom-fade hidden md:block opacity-70"
          style={{
            right: "50px",
            bottom: "20px",
            width: "150px",
            height: "155px",
          }}
        >
          <Image
            src="/images/icons/anim-icon-2.png"
            alt="Decorative Swirl"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Content Box */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-30 text-center">
        <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto">
          {/* Optional Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/15 border border-white/25 px-4 py-1.5 rounded-full shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-wider text-amber-100">
                {badge}
              </span>
            </div>
          )}

          {/* Main Page Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white leading-tight sm:leading-[1.15] tracking-tight drop-shadow-md">
            {title}
          </h1>

          {/* Optional Subtitle */}
          {subtitle && (
            <p className="text-sm sm:text-lg text-stone-200 font-medium max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="pt-2">
            <ol className="inline-flex items-center flex-wrap justify-center gap-2 text-xs sm:text-sm font-bold">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={idx} className="inline-flex items-center gap-2">
                    {idx === 0 && (
                      <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/70" />
                    )}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="text-white/80 hover:text-[#ff7162] transition-colors duration-200"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-[#ff7162] font-black">{crumb.label}</span>
                    )}
                    {!isLast && (
                      <ChevronRight className="w-3.5 h-3.5 text-white/50 stroke-[2.5]" />
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>

      {/* Decorative Bottom Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 bg-gradient-to-t from-white to-transparent pointer-events-none z-30" />
    </section>
  );
}
