"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ThreePillars() {
  const pillars = [
    {
      title: "Fine Arts Curriculum",
      flaticonClass: "flaticon-harvest",
      iconColor: "text-[#fbb419]",
      bgShape: "/images/icons/icon-3.png",
      shapeWidth: 65,
      shapeHeight: 70,
      text: "At Annar Childcare, we believe that the fine arts are essential for children's development. Our programs are designed to inspire young minds through engaging activities like painting, clay modeling, drawing, sketching, music, and dance. By fostering a love for creativity, we help children express themselves, build confidence, and develop critical thinking skills that will serve them throughout their lives.",
    },
    {
      title: "ABCs",
      flaticonClass: "flaticon-abc-block",
      iconColor: "text-[#43b3d9]",
      bgShape: "/images/icons/icon-2.png",
      shapeWidth: 64,
      shapeHeight: 70,
      text: "Preparing for Preschool and Kindergarten is a key focus of our curriculum. We provide a structured yet playful environment where children can learn their ABCs and 123s through interactive art projects and fun educational activities. Our skilled educators ensure that every child builds essential pre-reading and math skills while developing social readiness, so they feel confident and excited about their transition to the next stage of their education.",
    },
    {
      title: "Learning Together",
      flaticonClass: "flaticon-earth-globe",
      iconColor: "text-[#ff7162]",
      bgShape: "/images/icons/icon-1.png",
      shapeWidth: 56,
      shapeHeight: 71,
      text: "Building Lifelong Skills Through Collaboration is at the heart of our curriculum. In addition to fine arts, at Annar Childcare we emphasize teamwork and communication, allowing children to learn from one another and work together on creative projects. Our holistic approach not only enriches their artistic abilities but also equips them with valuable life skills that promote resilience and cooperation.",
    },
  ];

  return (
    <section className="relative -mt-8 xs:-mt-12 sm:-mt-20 lg:-mt-28 z-30 pb-12 sm:pb-16 select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[20px] p-6 xs:p-7 sm:p-10 pt-10 xs:pt-12 sm:pt-14 pb-8 sm:pb-12 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center justify-between"
            >
              {/* Top: 2-Layer Composite Icon (Foreground Vector Glyph + Rotating Pastel Background Shape) */}
              <div className="relative inline-block mb-6 sm:mb-7">
                {/* Foreground Vector Icon Glyph */}
                <i
                  className={`${item.flaticonClass} ${item.iconColor} text-[52px] sm:text-[64px] leading-none relative z-10 block transition-transform duration-300`}
                />

                {/* Rotating Pastel Background Shape */}
                <div
                  className="absolute -top-2 -right-4 sm:-top-2.5 sm:-right-5 pointer-events-none z-0 transition-transform duration-500 group-hover:rotate-[25deg]"
                  style={{
                    width: `${item.shapeWidth}px`,
                    height: `${item.shapeHeight}px`,
                  }}
                >
                  <Image
                    src={item.bgShape}
                    alt="Background Shape"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title with hover color change */}
              <h3 className="text-xl sm:text-[22px] font-black text-[#2b3c6b] group-hover:text-[#ff7162] transition-colors mb-3 sm:mb-5 leading-tight">
                <Link href="#">{item.title}</Link>
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-[15px] text-[#666666] leading-relaxed sm:leading-[26px] font-normal text-center flex-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
