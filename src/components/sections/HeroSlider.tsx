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
    <section className="relative h-[560px] sm:h-[620px] lg:h-[680px] w-full overflow-hidden bg-stone-900">
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

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />

            {/* Slide Content */}
            <div className="max-w-7xl mx-auto h-full px-6 sm:px-12 flex items-center relative z-20 pb-16 sm:pb-24">
              <div className="max-w-2xl space-y-4">
                {/* Orange/Peach Tagline */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ff6b57] drop-shadow-md">
                  {slide.tag}
                </h3>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] drop-shadow-lg whitespace-pre-line">
                  {slide.title}
                </h1>

                {/* Optional CTA Button */}
                {slide.buttonText && slide.buttonHref && (
                  <div className="pt-2">
                    <Link
                      href={slide.buttonHref}
                      className="inline-block bg-[#830201] hover:bg-[#a10e0c] text-white px-8 py-3.5 rounded-full font-bold text-base shadow-xl transition-transform hover:scale-105"
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

      {/* Right Side Orange Arrow Navigation Buttons */}
      <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        <button
          type="button"
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-[#ff6b57] hover:bg-[#ff5138] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3]" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-[#ff6b57] hover:bg-[#ff5138] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 stroke-[3]" />
        </button>
      </div>

      {/* Bottom Wave Cutout */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-bottom bg-cover z-20 pointer-events-none"
        style={{
          backgroundImage: "url(/images/icons/slider-shap.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      />
    </section>
  );
}
