"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/main-slider/annar-childcare-slider-2.webp",
      tag: "Annar Childcare - New Location!",
      title: "Join us at our new\nlocation in Port\nMoody, BC!",
      buttonText: null,
      buttonHref: null,
    },
    {
      id: 2,
      image: "/images/main-slider/annar-childcare-slider-1.webp",
      tag: "Summer Break Camp 2026",
      title: "Join us for a summer full\nof fun, creativity, and\nnew friendships!",
      buttonText: "Learn More",
      buttonHref: "/events/summer-camp",
    },
    {
      id: 3,
      image: "/images/main-slider/annar-childcare-slider-3.webp",
      tag: "We create a safe space",
      title: "Where your child can\nexplore, grow, and\nthrive!",
      buttonText: "Know More",
      buttonHref: "/about-us",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[560px] sm:h-[620px] lg:h-[680px] w-full overflow-hidden bg-stone-900 select-none">
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.tag}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />

            {/* Dark gradient overlay for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 sm:from-black/60 sm:to-transparent" />

            {/* Slide Content */}
            <div className="max-w-7xl mx-auto h-full px-5 sm:px-12 flex items-center relative z-20 pb-20 sm:pb-24">
              <div className="max-w-xl sm:max-w-2xl space-y-3 sm:space-y-4 pr-4 sm:pr-0">
                {/* Orange/Peach Tagline */}
                <div className="inline-block">
                  <span className="text-xs sm:text-xl lg:text-2xl font-extrabold text-[#ff7162] drop-shadow-md tracking-wide uppercase sm:normal-case">
                    {slide.tag}
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.18] sm:leading-[1.12] drop-shadow-lg whitespace-pre-line">
                  {slide.title}
                </h1>

                {/* Optional CTA Button */}
                {slide.buttonText && slide.buttonHref && (
                  <div className="pt-2 sm:pt-3">
                    <Link
                      href={slide.buttonHref}
                      className="inline-block bg-[#830201] hover:bg-[#a10e0c] text-white px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full font-bold text-xs sm:text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-red-500/20"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls: Desktop / Tablet Floating Stack */}
      <div className="hidden sm:flex absolute right-4 sm:right-8 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
        <button
          type="button"
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ff7162] hover:bg-[#ff5138] text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ff7162] hover:bg-[#ff5138] text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </button>
      </div>

      {/* Mobile Slide Navigation & Indicators (safely positioned well above the bottom wave) */}
      <div className="sm:hidden absolute bottom-12 left-5 right-5 z-30 flex items-center justify-between pointer-events-auto">
        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#ff7162]" : "w-2 bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Compact Mobile Prev/Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="w-9 h-9 rounded-full bg-[#ff7162] text-white shadow-lg flex items-center justify-center active:scale-90 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 stroke-[3]" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="w-9 h-9 rounded-full bg-[#ff7162] text-white shadow-lg flex items-center justify-center active:scale-90 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Bottom Wave Cutout */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10 sm:h-20 lg:h-28 bg-bottom bg-cover z-20 pointer-events-none"
        style={{
          backgroundImage: "url(/images/icons/slider-shap.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      />
    </section>
  );
}
