"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Parallax from "parallax-js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function ProgramsShowcase() {
  const cards = [
    {
      id: "infant-toddler",
      title: "Toddler & \nInfant Care",
      image: "/images/resource/class-1.jpg",
      href: "/programs/infant-toddler",
      btnBg: "bg-[#ff7162]", // Coral
      prices: [{ label: "CCFRI Approved:", amount: "$1070 per month" }],
      hasExtraSpacing: true,
      fullAmount: "$1970 per month",
      ageText: "18m -3y",
      sizeText: "12 Seats",
    },
    {
      id: "daycare",
      title: "Ages\n3-5",
      image: "/images/resource/class-2.jpg",
      href: "/programs/daycare-3-to-5",
      btnBg: "bg-[#43b3d9]", // Cyan
      prices: [{ label: "CCFRI Approved:", amount: "$886 per month" }],
      hasExtraSpacing: true,
      fullAmount: "$1431 per month",
      ageText: "3-5 Years",
      sizeText: "18 Seats",
    },
    {
      id: "before-after",
      title: "Before/After School\n (Moody Elementary)",
      image: "/images/resource/class-3.jpg",
      href: "/programs/before-after-school",
      btnBg: "bg-[#fbb419]", // Yellow
      prices: [
        { label: "CCFRI Approved Kindergarten:", amount: "$311 per month" },
        { label: "CCFRI Approved Grade 1-5:", amount: "$516 per month" },
      ],
      hasExtraSpacing: false,
      fullAmount: "$631",
      ageText: "K-Gr 5",
      sizeText: "12 Seats",
    },
    {
      id: "summer-camp",
      title: "Summer\n Camp",
      image: "/images/resource/class-summer.jpg",
      href: "/events/summer-camp",
      btnBg: "bg-[#ff7162]", // Coral
      prices: [
        { label: "CCFRI Approved Kindergarten:", amount: "$880 per month" },
        { label: "CCFRI Approved Grade 1-5:", amount: "$1085 per month" },
      ],
      hasExtraSpacing: false,
      fullAmount: "$1200",
      ageText: "K-Gr 5",
      sizeText: "12 Seats",
    },
  ];

  const sceneRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Parallax Initialization
  useEffect(() => {
    let parallaxInstance: Parallax | null = null;
    if (sceneRef.current) {
      parallaxInstance = new Parallax(sceneRef.current, {
        relativeInput: true,
        hoverOnly: true,
        inputElement: sceneRef.current.parentElement as HTMLElement,
        scalarX: 25,
        scalarY: 25,
        frictionX: 0.1,
        frictionY: 0.1,
      });
    }
    return () => {
      if (parallaxInstance) parallaxInstance.destroy();
    };
  }, []);

  return (
    <section className="classes-section relative bg-[#830201] text-white py-[150px] min-h-[960px] select-none flex flex-col justify-center">
      {/* ================= EXACT ORIGINAL PARALLAX SCENE (ICONS 1 TO 7) ================= */}
      <div
        ref={sceneRef}
        className="parallax-scene parallax-scene-1 parallax-icon pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span data-depth="0.40" className="parallax-layer icon icon-1"></span>
        <span data-depth="0.50" className="parallax-layer icon icon-2"></span>
        <span data-depth="0.30" className="parallax-layer icon icon-3"></span>
        <span data-depth="0.40" className="parallax-layer icon icon-4"></span>
        <span data-depth="0.50" className="parallax-layer icon icon-5"></span>
        <span data-depth="0.30" className="parallax-layer icon icon-6"></span>
        <span data-depth="0.40" className="parallax-layer icon icon-7"></span>
      </div>

      {/* ================= TOP RIGHT ABC BLOCKS (anim-icon-3.png) ================= */}
      <div
        className="absolute zoom-fade pointer-events-none z-30 hidden sm:block"
        style={{
          right: "150px",
          top: "-90px",
          width: "102px",
          height: "198px",
        }}
      >
        <Image
          src="/images/icons/anim-icon-3.png"
          alt="ABC Blocks"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* ================= DIVISION 1: MASCOT GIRL (anim-icon-13.png) ON FAR-LEFT ================= */}
      <div
        className="absolute float-bob-y pointer-events-none z-30 hidden md:block"
        style={{
          left: "45px",
          bottom: "-70px",
          width: "270px",
          height: "400px",
        }}
      >
        <Image
          src="/images/icons/anim-icon-13.png"
          alt="Mascot Girl"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-14">
          {/* ================= DIVISION 2: PROGRAMS OFFERED TEXT ================= */}
          <div className="w-full lg:w-[420px] xl:w-[460px] shrink-0 space-y-7 relative pb-32 lg:pb-36 pl-0 lg:pl-32 xl:pl-36">
            <div className="space-y-4">
              {/* Exact Original Subtitle with lines */}
              <div className="relative inline-flex items-center gap-4">
                <span className="w-10 h-[2px] bg-[#ff7162]" />
                <h5 className="text-[16px] sm:text-[17px] font-black text-[#ff7162] text-center leading-[24px]">
                  Programs Offered by Annar
                  <br />
                  ChildCare
                </h5>
                <span className="w-10 h-[2px] bg-[#ff7162]" />
              </div>

              {/* Exact Original Title with #2b3c6b color */}
              <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-black text-[#2b3c6b] leading-[54px] tracking-tight">
                ChildCare
                <br />
                Programs
              </h2>
            </div>

            {/* Exact Original Narrative Text */}
            <p className="text-[15px] sm:text-[16px] text-white leading-[28px] font-normal max-w-md">
              Discover a world of art and learning at Annar ChildCare! Our programs blend creativity, academic foundatiion and critical thinking to provide a well-rounded experience for every age group of children aged 0-12 years.
            </p>

            {/* Exact Original Navigation Buttons (< >) */}
            <div className="flex items-center gap-4 pt-3">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-[60px] h-[60px] rounded-full bg-[#ff7162] hover:bg-white text-white hover:text-[#2b3c6b] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer text-xl font-bold z-30"
                aria-label="Previous Program"
              >
                <ChevronLeft className="w-7 h-7 stroke-[3]" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="w-[60px] h-[60px] rounded-full bg-[#ff7162] hover:bg-white text-white hover:text-[#2b3c6b] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer text-xl font-bold z-30"
                aria-label="Next Program"
              >
                <ChevronRight className="w-7 h-7 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* ================= DIVISION 3: CARDS INFINITE CAROUSEL ================= */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              speed={500}
              spaceBetween={28}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
                1440: { slidesPerView: 3, spaceBetween: 28 },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="w-full cursor-grab active:cursor-grabbing"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id} className="!h-auto flex">
                  <div className="w-full min-h-[660px] bg-white rounded-[20px] overflow-hidden flex flex-col justify-between group transition-all duration-300 select-none">
                    {/* Clean Pure White Photo Box */}
                    <div className="relative h-72 w-full bg-white overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-500"
                      />
                    </div>

                    {/* Lower Content */}
                    <div className="relative px-8 pt-9 pb-6 flex-1 flex flex-col justify-between bg-white text-left">
                      {/* 68px Circular Action Arrow Button (link-btn) */}
                      <Link
                        href={card.href}
                        className={`absolute -top-8 right-7 w-[68px] h-[68px] rounded-full ${card.btnBg} text-white flex items-center justify-center transition-all duration-500 group-hover:rotate-180 group-hover:scale-105`}
                        aria-label="View Program"
                      >
                        <ArrowRight className="w-7 h-7 stroke-[3]" />
                      </Link>

                      <div className="space-y-3.5">
                        {/* Program Title */}
                        <h3 className="text-[23px] sm:text-[24px] font-black text-[#2b3c6b] leading-tight min-h-[58px] whitespace-pre-line">
                          <Link href={card.href} className="hover:text-[#ff7162] transition-colors">
                            {card.title}
                          </Link>
                        </h3>

                        {/* Pricing Breakdown */}
                        <div className="space-y-1 pt-1">
                          {card.prices.map((p, pIdx) => (
                            <div key={pIdx} className="space-y-0.5">
                              <p className="text-[13px] text-stone-600 font-medium">{p.label}</p>
                              <p className="text-[20px] font-black text-[#ff7162]">{p.amount}</p>
                            </div>
                          ))}

                          {/* Generous Vertical Spacer for Single-price cards */}
                          {card.hasExtraSpacing && <div className="h-10" />}

                          <p className="text-[13px] text-stone-700 pt-2 font-semibold">
                            <strong>Full Amount: </strong> {card.fullAmount}
                          </p>
                        </div>
                      </div>

                      {/* Exact SVG Curvy Badge (icon-4.svg) with exact padding & zero extra margin */}
                      <div
                        className="w-full h-[68px] flex items-center justify-center text-white text-[12px] font-bold tracking-wider uppercase px-4 mt-4"
                        style={{
                          backgroundImage: "url(/images/icons/icon-4.svg)",
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="flex items-center justify-center gap-5 w-full">
                          <span>
                            AGE: <span className="text-white font-black">{card.ageText}</span>
                          </span>
                          <span className="h-5 w-px border-r border-dashed border-red-300/40" />
                          <span>
                            SIZE: <span className="text-white font-black">{card.sizeText}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
