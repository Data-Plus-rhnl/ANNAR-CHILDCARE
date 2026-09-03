"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export interface ProgramFeatureBlock {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  infrastructureTitle?: string;
  infrastructureSubtitle?: string;
  infrastructure?: {
    title: string;
    desc: string;
  }[];
}

export interface ActivityCard {
  title: string;
  desc: string;
  iconClass?: string;
  iconColor?: string;
  blobImage?: string;
}

export interface ActivitySectionData {
  subtitle: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  cards: ActivityCard[];
}

export interface AuthenticProgramData {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  bgImage: string;
  breadcrumbs: { label: string; href?: string }[];
  overviewSubtitle: string;
  overviewTitle: string;
  overviewText: string;
  featureBlock?: ProgramFeatureBlock;
  activitySections: ActivitySectionData[];
}

interface ProgramAuthenticSectionProps {
  data: AuthenticProgramData;
}

export default function ProgramAuthenticSection({ data }: ProgramAuthenticSectionProps) {
  const [isInfraHovered, setIsInfraHovered] = React.useState(false);

  return (
    <div className="program-authentic-wrapper select-none bg-white">
      {/* ================= 1. MAIN OVERVIEW SECTION (about-style-two) ================= */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200/80 relative overflow-hidden text-center">
        {/* Playful Floating Doodles in Background */}
        <div className="absolute top-8 left-12 w-16 h-16 opacity-30 pointer-events-none hidden sm:block animate-bounce">
          <Image src="/images/icons/anim-icon-1.png" alt="" width={64} height={64} />
        </div>
        <div className="absolute bottom-10 right-14 w-20 h-20 opacity-30 pointer-events-none hidden sm:block">
          <Image src="/images/icons/anim-icon-2.png" alt="" width={80} height={80} />
        </div>

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#830201] text-xs sm:text-sm font-black tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-[#ff7162]" />
            <span>{data.overviewSubtitle}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-[#2b3c6b] tracking-tight leading-tight sm:leading-[1.18] whitespace-pre-line">
            {data.overviewTitle}
          </h2>

          <p className="text-[15px] sm:text-[17px] text-stone-600 font-normal leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {data.overviewText}
          </p>
        </div>
      </section>

      {/* ================= 2. PROGRAM DETAILS & INFRASTRUCTURE (EXACT ORIGINAL HOVER EFFECT) ================= */}
      {data.featureBlock && (
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            {/* Centered / Framed Image */}
            <div className="relative inline-block w-full max-w-3xl mx-auto group">
              <div className="absolute -top-5 -right-5 sm:-top-7 sm:-right-7 w-48 sm:w-72 h-48 sm:h-72 bg-[#ffe39b] rounded-[26px] z-0 transition-transform duration-500 group-hover:scale-105" />
              <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[26px] shadow-[0_25px_50px_rgba(0,0,0,0.10)] border border-stone-100 overflow-hidden">
                <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden">
                  <Image
                    src={data.featureBlock.image}
                    alt={data.featureBlock.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Program Details Title & Description */}
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
                {data.featureBlock.title}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line">
                {data.featureBlock.description}
              </p>
            </div>

            {/* Exceptional Infrastructure Facilities - Pricing Table with Sliding Crimson Fill on Hover */}
            {data.featureBlock.infrastructure && data.featureBlock.infrastructure.length > 0 && (
              <div className="pt-4 text-left max-w-3xl mx-auto">
                <div className="infra-pricing-box rounded-[26px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-stone-200/80 cursor-default group/table">
                  {/* Table Header with Crimson Background & Globe Watermark */}
                  <div className="infra-header relative bg-[#830201] p-8 sm:p-12 text-white overflow-hidden border-b border-[#700201]">
                    {/* Globe Outline Icon Watermark (style.css:5200) */}
                    <div className="absolute top-8 right-8 sm:top-10 sm:right-12 text-white/30 pointer-events-none transition-transform duration-700 group-hover/table:rotate-12 group-hover/table:scale-110">
                      <i className="flaticon-earth-globe text-6xl sm:text-7xl block leading-none" />
                    </div>

                    <div className="space-y-3 max-w-xl relative z-10">
                      <h3 className="text-2xl sm:text-[34px] font-black uppercase tracking-wider leading-tight text-white drop-shadow-sm">
                        {data.featureBlock.infrastructureTitle || "Exceptional Infrastructure Facilities"}
                      </h3>

                      {data.featureBlock.infrastructureSubtitle && (
                        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90">
                          {data.featureBlock.infrastructureSubtitle}
                        </p>
                      )}

                      <div className="border-t border-dashed border-white/40 pt-4 mt-4">
                        <p className="text-xs sm:text-[14.5px] text-white/95 font-normal leading-relaxed">
                          Our facilities are crafted to enhance your child&apos;s after-school experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Table Content List with Hover Color Inversion */}
                  <div className="infra-content-area p-6 sm:p-10 space-y-0">
                    <ul className="space-y-0">
                      {data.featureBlock.infrastructure.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className={`py-4 sm:py-5 first:pt-0 last:pb-0 text-xs sm:text-[15px] leading-relaxed infra-dashed-line ${
                            iIdx !== (data.featureBlock?.infrastructure?.length ?? 0) - 1
                              ? "border-b border-dashed"
                              : ""
                          }`}
                        >
                          <strong className="infra-item-title font-black mr-1.5">
                            {item.title}:
                          </strong>
                          <span className="infra-item-desc font-normal">
                            {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= 3. AUTHENTIC ACTIVITIES SECTION (activities-section) ================= */}
      {data.activitySections.map((group, gIdx) => {
        const isImageLeft = group.imagePosition === "left";

        return (
          <section
            key={gIdx}
            className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden"
          >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Photo Column with Offset Shape Background */}
                <div
                  className={`lg:col-span-5 flex justify-center items-center ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative inline-block group my-6 sm:my-8">
                    {/* Iconic soft blue offset backdrop from original codebase (style.css:3428) */}
                    <div
                      className={`absolute -top-10 -right-10 sm:-top-14 sm:-right-14 w-56 sm:w-68 h-56 sm:h-68 bg-[#9be9ff] rounded-[24px] z-0 transition-transform duration-500 group-hover:scale-105`}
                    />

                    {/* Image Card with White Padding & Soft Shadow */}
                    <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[24px] shadow-[0_25px_50px_rgba(0,0,0,0.09)] border border-stone-100/80">
                      <div className="relative w-[280px] sm:w-[390px] aspect-[4/4.5] rounded-[18px] overflow-hidden">
                        <Image
                          src={group.image}
                          alt={group.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column (Title + 4 Flaticon Single-Items) */}
                <div
                  className={`lg:col-span-7 space-y-8 text-left ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Title Box matching original design */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[#ff7162] font-black text-xs sm:text-sm uppercase tracking-widest">
                      <span className="inline-block w-6 h-[2.5px] bg-[#ff7162] rounded-full" />
                      <span>{group.subtitle}</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#2b3c6b] tracking-tight leading-tight">
                      {group.title}
                    </h2>

                    {group.intro && (
                      <p className="text-sm sm:text-base text-stone-500 font-normal leading-relaxed pt-1">
                        {group.intro}
                      </p>
                    )}
                  </div>

                  {/* 2x2 Feature Grid with Authentic Flaticons & Blobs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-2">
                    {group.cards.map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="space-y-3 group/item text-left transition-transform duration-300 hover:-translate-y-1"
                      >
                        {/* Playful Icon Box with Rotating Blob Background (style.css:3341-3408) */}
                        <div className="relative inline-block">
                          {/* Blob backdrop image from /images/icons/icon-*.png */}
                          <div className="absolute -right-5 -top-1.5 w-14 h-14 pointer-events-none transition-transform duration-500 group-hover/item:rotate-[25deg] group-hover/item:scale-110">
                            <Image
                              src={card.blobImage || "/images/icons/icon-3.png"}
                              alt=""
                              fill
                              className="object-contain"
                            />
                          </div>

                          {/* Flaticon glyph */}
                          <i
                            className={`${card.iconClass || "flaticon-abc-block"} relative z-10 text-[50px] sm:text-[56px] leading-none block`}
                            style={{ color: card.iconColor || "#fbb419" }}
                          />
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-1.5">
                          <h3 className="text-lg sm:text-[20px] font-black text-[#2b3c6b] group-hover/item:text-[#ff7162] transition-colors leading-snug">
                            {card.title}
                          </h3>
                          <p className="text-stone-500 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
