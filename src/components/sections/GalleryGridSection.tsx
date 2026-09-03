"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Palette,
} from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { GalleryItem } from "@/types";

export default function GalleryGridSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  // Lock body scroll when Lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section className="gallery-page-section relative bg-gradient-to-b from-white via-[#faf8f5] to-white py-14 sm:py-20 lg:py-28 select-none overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#830201] text-xs sm:text-sm font-black tracking-wide uppercase">
            <Palette className="w-4 h-4 text-[#ff7162]" />
            <span>Campus, Classrooms & Fine Arts Gallery</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#2b3c6b] tracking-tight leading-tight sm:leading-[1.18]">
            Explore Our Learning Environment
          </h2>

          <p className="text-[14px] sm:text-[15.5px] text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Take a visual tour inside our purpose-built early learning center in Port Moody, BC. Discover our fine arts atelier creations, bright classrooms, play facilities, and engaging daily activities.
          </p>
        </div>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {galleryCategories.map((cat) => {
            const count =
              cat === "All"
                ? galleryItems.length
                : galleryItems.filter((item) => item.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-black tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#830201] text-white shadow-lg scale-105"
                    : "bg-white text-[#2b3c6b] hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= RESPONSIVE GALLERY GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-block group relative rounded-[22px] overflow-hidden bg-stone-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1 cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              {/* Photo Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Exact Legacy Curtain-Wipe Overlay (style.css:2660-2689) */}
              <div className="overlay-box flex flex-col justify-between p-6 text-left">
                {/* Top: Category Tag */}
                <div className="self-start">
                  <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/25">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    {item.category}
                  </span>
                </div>

                {/* Center / Action Zoom Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white text-[#830201] flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Bottom: Title & Caption */}
                <div className="relative z-10 space-y-1">
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200/90 line-clamp-1">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FULL-SCREEN LIGHTBOX MODAL ================= */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between text-white z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-0.5 text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#ff7162] bg-white/10 px-2.5 py-1 rounded-full">
                {currentItem.category}
              </span>
              <p className="text-xs text-stone-400 pt-1 font-semibold">
                Photo {lightboxIndex! + 1} of {filteredItems.length}
              </p>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Left / Prev Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer z-50 hover:scale-105"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Center Image Container */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[72vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="pt-3 text-center text-white space-y-1">
              <h4 className="text-base sm:text-xl font-bold tracking-tight">
                {currentItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto">
                {currentItem.alt}
              </p>
            </div>
          </div>

          {/* Right / Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer z-50 hover:scale-105"
            aria-label="Next photo"
          >
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </button>
        </div>
      )}
    </section>
  );
}
