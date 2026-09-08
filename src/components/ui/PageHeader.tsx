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
  showBreadcrumbs?: boolean;
  bgImage?: string;
}

export default function PageHeader({
  title,
  badge,
  subtitle,
  breadcrumbs,
  showBreadcrumbs = false,
  bgImage = "/images/background/page-title-about-us-annar-childcare-center.webp",
}: PageHeaderProps) {
  return (
    <section className="page-title relative w-full pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 lg:pb-12 overflow-hidden select-none bg-stone-900">
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

      {/* Floating Animated Doodle Icons (Exact Legacy Brand Accents, scaled for compact banner) */}
      <div className="pointer-events-none absolute inset-0 max-w-[1920px] mx-auto z-20 overflow-hidden">
        {/* Animated Flying Kite on Top-Left */}
        <div
          className="absolute float-bob-x hidden lg:block opacity-65"
          style={{
            left: "30px",
            top: "10px",
            width: "110px",
            height: "140px",
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
          className="absolute zoom-fade hidden lg:block opacity-60"
          style={{
            right: "35px",
            bottom: "10px",
            width: "100px",
            height: "105px",
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
        <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto">
          {/* Optional Badge */}
          {badge && (
            <div className="inline-flex items-center gap-1.5 backdrop-blur-md bg-white/15 border border-white/25 px-3 py-1 rounded-full shadow-md">
              <Sparkles className="w-3 h-3 text-amber-300 animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-100">
                {badge}
              </span>
            </div>
          )}

          {/* Main Page Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight sm:leading-snug tracking-tight drop-shadow-md">
            {title}
          </h1>

          {/* Optional Subtitle */}
          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base text-stone-200 font-medium max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Optional Breadcrumbs Navigation (Hidden by default) */}
          {showBreadcrumbs && breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="pt-1">
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
          )}
        </div>
      </div>

      {/* Decorative Bottom Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 bg-gradient-to-t from-white to-transparent pointer-events-none z-30" />
    </section>
  );
}
