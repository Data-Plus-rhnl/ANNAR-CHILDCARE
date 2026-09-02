"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Star, Quote } from "lucide-react";

export default function TestimonialsAndFaq() {
  const testimonials = [
    {
      id: 0,
      author: "David",
      role: "Father of Sara",
      quote:
        "Sara's social skills have blossomed incredibly at Annar. The inclusive environment is truly remarkable.",
      avatar: "/images/resource/testimonial-2.png",
    },
    {
      id: 1,
      author: "Emily",
      role: "Mother of Noah",
      quote:
        "Annar Child Care has been a haven of creativity and growth for Noah. Exceptional care and an innovative curriculum!",
      avatar: "/images/resource/testimonial-1.png",
    },
    {
      id: 2,
      author: "Angela",
      role: "Mother of Ethan",
      quote:
        "Ethan's development, both academically and socially, has been astounding. Annar is more than a daycare; it's a community.",
      avatar: "/images/resource/testimonial-3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotating timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  // Compute Left, Center, and Right rotating slots
  const leftIndex = (activeIndex + 2) % 3;
  const centerIndex = activeIndex;
  const rightIndex = (activeIndex + 1) % 3;

  const currentTestimonial = testimonials[centerIndex];

  const faqs = [
    {
      id: 1,
      q: "Q. Are you a licensed facility?",
      a: "Located in the heart of Port Moody, BC, Annar Childcare is a licensed multi-age center that offers a vibrant and nurturing environment for children from newborns to school-aged kids. We provide childcare as well as the before and after school program for older children.",
      borderColor: "border-[#43b3d9]",
      activeColor: "text-[#43b3d9]",
    },
    {
      id: 2,
      q: "Q. Do you accept government subsidies?",
      a: "Yes! We accept both the BC Child Care Fee Reduction Initiative (CCFRI), which automatically lowers monthly tuition fees for eligible families, and the Affordable Child Care Benefit (ACCB).",
      borderColor: "border-[#fbb419]",
      activeColor: "text-[#fbb419]",
    },
    {
      id: 3,
      q: "Q. Are meals provided by Annar childcare?",
      a: "We provide wholesome, nutritious morning and afternoon snacks along with fresh water and milk. Parents provide lunch packed to their child's dietary preferences.",
      borderColor: "border-[#ff7162]",
      activeColor: "text-[#ff7162]",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <section className="testimonial-faq bg-white pt-[110px] pb-[130px] px-4 sm:px-6 lg:px-8 relative select-none overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: ROTATING 3-SLOT TESTIMONIALS ================= */}
          <div
            className="testimonial-column space-y-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Header */}
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[2px] bg-[#ff7162]" />
                <h5 className="text-[15px] sm:text-[16px] font-black text-[#ff7162] uppercase tracking-wide">
                  Testimonials
                </h5>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#2b3c6b] tracking-tight">
                Happy Parents Say
              </h2>
            </div>

            {/* Testimonial Speech Card */}
            <div className="relative pt-2">
              <div className="bg-[#830201] text-white p-8 sm:p-10 rounded-[24px] shadow-2xl relative overflow-hidden space-y-4 min-h-[220px] flex flex-col justify-center">
                {/* Large Background Quote Icon */}
                <Quote className="absolute top-4 left-6 w-20 h-20 text-white/10 pointer-events-none stroke-[1.5]" />

                {/* Author Name & Relationship */}
                <div className="relative z-10">
                  <h4 className="text-[19px] sm:text-[21px] font-black text-[#ff7162] tracking-tight">
                    {currentTestimonial.author}
                    <span className="text-white text-[15px] font-normal pl-1.5">
                      / {currentTestimonial.role}
                    </span>
                  </h4>

                  {/* 5 Golden Stars */}
                  <div className="flex items-center gap-1 text-[#fbb419] pt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fbb419] stroke-none" />
                    ))}
                  </div>
                </div>

                {/* Quote Text with smooth fade in */}
                <p className="text-[16px] sm:text-[18px] font-bold text-white leading-relaxed relative z-10">
                  {currentTestimonial.quote}
                </p>
              </div>

              {/* Diamond Speech Pointer Tail */}
              <div className="w-7 h-7 bg-[#830201] rounded-[4px] rotate-45 mx-auto -mt-3.5 shadow-lg relative z-20" />
            </div>

            {/* ROTATING 3-SLOT AVATAR CAROUSEL (Left, Center, Right) */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 pt-4">
              {/* 1. Left Avatar (Click to rotate into center) */}
              <button
                type="button"
                onClick={() => setActiveIndex(leftIndex)}
                className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden opacity-65 hover:opacity-100 grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-500 shadow-md cursor-pointer"
                aria-label={`View testimonial by ${testimonials[leftIndex].author}`}
              >
                <Image
                  src={testimonials[leftIndex].avatar}
                  alt={testimonials[leftIndex].author}
                  fill
                  className="object-cover"
                />
              </button>

              {/* 2. Center Avatar (Currently Active & Highlighted) */}
              <button
                type="button"
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-[#830201] scale-110 shadow-2xl z-10 -translate-y-2 transition-all duration-500 cursor-default"
                aria-label={`Active testimonial by ${currentTestimonial.author}`}
              >
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  fill
                  className="object-cover"
                />
              </button>

              {/* 3. Right Avatar (Click to rotate into center) */}
              <button
                type="button"
                onClick={() => setActiveIndex(rightIndex)}
                className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden opacity-65 hover:opacity-100 grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-500 shadow-md cursor-pointer"
                aria-label={`View testimonial by ${testimonials[rightIndex].author}`}
              >
                <Image
                  src={testimonials[rightIndex].avatar}
                  alt={testimonials[rightIndex].author}
                  fill
                  className="object-cover"
                />
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: FAQS ACCORDION ================= */}
          <div className="faq-column space-y-7">
            {/* Header */}
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[2px] bg-[#ff7162]" />
                <h5 className="text-[15px] sm:text-[16px] font-black text-[#ff7162] uppercase tracking-wide">
                  Faq&apos;s
                </h5>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#2b3c6b] tracking-tight">
                Frequently Ask Questions
              </h2>
            </div>

            {/* Accordion Container with Multi-Colored Borders */}
            <div className="space-y-5 pt-2">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-[22px] border-2 ${
                      faq.borderColor
                    } overflow-hidden transition-all duration-300 bg-white ${
                      isOpen ? "shadow-lg" : "shadow-sm hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[16px] sm:text-[18px] text-[#2b3c6b] cursor-pointer transition-colors duration-200"
                    >
                      <span className={isOpen ? faq.activeColor : "text-[#2b3c6b]"}>
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isOpen
                            ? `rotate-180 ${faq.activeColor}`
                            : "text-[#2b3c6b]"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-[14.5px] sm:text-[15px] text-[#2b3c6b]/85 leading-relaxed border-t border-stone-200 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
