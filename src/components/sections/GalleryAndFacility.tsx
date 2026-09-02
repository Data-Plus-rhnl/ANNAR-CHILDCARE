"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Palette,
  Sun,
  Eye,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "all" | "classrooms" | "arts" | "facility";
  tag: string;
}

export default function GalleryAndFacility() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Visually verified 10-photo facility showcase with 100% authentic labels
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/images/gallery/1.jpg",
      title: "Montessori Early Learning Classroom",
      category: "classrooms",
      tag: "Classroom",
    },
    {
      id: 2,
      src: "/images/gallery/2.jpg",
      title: "Main Activity Hall & Cubbies",
      category: "classrooms",
      tag: "Activity Hall",
    },
    {
      id: 3,
      src: "/images/gallery/3.jpg",
      title: "Art Prep & Clean-Up Station",
      category: "arts",
      tag: "Art Station",
    },
    {
      id: 4,
      src: "/images/gallery/4.jpg",
      title: "Toddler Play & Activity Center",
      category: "classrooms",
      tag: "Toddler Space",
    },
    {
      id: 5,
      src: "/images/gallery/5.jpg",
      title: "Child-Sized Hygiene & Restrooms",
      category: "facility",
      tag: "Hygiene & Care",
    },
    {
      id: 6,
      src: "/images/gallery/6.jpg",
      title: "Branded Nap Blankets & Rest Sets",
      category: "facility",
      tag: "Rest & Comfort",
    },
    {
      id: 7,
      src: "/images/gallery/7.jpg",
      title: "Interactive Train Table & Play Hallway",
      category: "classrooms",
      tag: "Play Hallway",
    },
    {
      id: 8,
      src: "/images/gallery/8.jpg",
      title: "Multi-Purpose Art Studio & Workshop",
      category: "arts",
      tag: "Art Atelier",
    },
    {
      id: 9,
      src: "/images/gallery/9.jpg",
      title: "Creative Play & Circle Space",
      category: "classrooms",
      tag: "Play Center",
    },
    {
      id: 10,
      src: "/images/gallery/10.jpg",
      title: "Secure Outdoor Turf Playground",
      category: "facility",
      tag: "Outdoor Play",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Keyboard navigation for fullscreen lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section className="gallery-section bg-gradient-to-b from-[#f2eee9] via-[#f7f4ef] to-[#f2eee9] pt-[110px] pb-[140px] px-4 sm:px-8 lg:px-12 xl:px-16 relative select-none overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#ff7162]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#830201]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1780px] mx-auto space-y-24 relative z-10">
        {/* ================= 1. PHOTO GALLERY HEADER & FILTERS ================= */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-[#ff7162]" />
              <h5 className="text-[15px] sm:text-[16px] font-black uppercase tracking-widest text-[#ff7162]">
                Our Campus & Environments
              </h5>
              <span className="w-8 h-[2px] bg-[#ff7162]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#2b3c6b] tracking-tight">
              Photo Gallery
            </h2>

            <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
              Take a visual tour inside our purpose-built classrooms, fine arts atelier, child-sized amenities, and outdoor turf playground in Port Moody, BC.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {[
              { id: "all", label: "All Spaces" },
              { id: "classrooms", label: "Classrooms & Play" },
              { id: "arts", label: "Fine Arts Studio" },
              { id: "facility", label: "Amenities & Playground" },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  type="button"
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#830201] text-white shadow-lg shadow-red-900/20 scale-105"
                      : "bg-white/80 hover:bg-white text-stone-700 hover:text-[#830201] border border-stone-200 shadow-sm"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Luxury Carousel Presentation */}
          <div className="gallery-carousel-wrapper pt-4">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
                1440: { slidesPerView: 5, spaceBetween: 28 },
              }}
              className="gallery-carousel"
            >
              {filteredItems.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div
                    onClick={() => setLightboxIndex(index)}
                    className="gallery-block group relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(43,60,107,0.18)] cursor-pointer bg-stone-200 border-2 border-white/80 transition-all duration-500 hover:-translate-y-1.5"
                  >
                    {/* Image with smooth zoom */}
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Corner Tag Glass Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <div className="backdrop-blur-md bg-white/90 text-[#2b3c6b] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-white/50 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff7162]" />
                        <span>{item.tag}</span>
                      </div>
                    </div>

                    {/* Full Top-Tier Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b2544]/90 via-[#212f54]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-5 z-20">
                      <div className="flex justify-end">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-[#ff7162] text-white flex items-center justify-center shadow-2xl mb-2 mx-auto sm:mx-0">
                          <Plus className="w-6 h-6 stroke-[3]" />
                        </div>
                        <p className="text-white font-black text-sm leading-snug drop-shadow">
                          {item.title}
                        </p>
                        <p className="text-white/80 text-[11px] font-medium flex items-center gap-1">
                          <Eye className="w-3 h-3 text-[#ff7162]" /> Click to view full size
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ================= 2. FACILITY VIRTUAL TOUR SHOWCASE ================= */}
        <div className="pt-4 space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#830201]/10 text-[#830201] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7162]" />
              <span>Video Walkthrough</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#2b3c6b] tracking-tight">
              Take a Look at Our Facility!
            </h2>

            <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto font-normal">
              Step inside our bright, welcoming learning environments designed specifically for toddlers and preschool artists.
            </p>
          </div>

          {/* Luxury Video Frame with Ambient Glow */}
          <div className="flex justify-center items-center px-2 relative">
            {/* Ambient Aura */}
            <div className="absolute w-full max-w-[854px] h-[480px] bg-gradient-to-r from-red-600/15 via-[#ff7162]/15 to-amber-500/15 blur-3xl -z-10 rounded-full" />

            <div className="w-full max-w-[880px] aspect-video rounded-[30px] overflow-hidden shadow-[0_25px_60px_rgba(43,60,107,0.2)] border-4 sm:border-8 border-white bg-black relative group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/OhDBe6C93J0"
                title="Take a Look at Our Facility! - Annar Childcare"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Facility Highlights Badges */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 text-center border border-stone-100 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-6 h-6 text-[#830201] mx-auto" />
              <p className="text-xs sm:text-[13px] font-black text-[#2b3c6b]">Licensed by Fraser Health</p>
              <p className="text-[11px] text-stone-500">Provincial standards</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 text-center border border-stone-100 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
              <Palette className="w-6 h-6 text-[#ff7162] mx-auto" />
              <p className="text-xs sm:text-[13px] font-black text-[#2b3c6b]">Dedicated Fine Arts Atelier</p>
              <p className="text-[11px] text-stone-500">Daily creative programs</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 text-center border border-stone-100 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
              <Sun className="w-6 h-6 text-amber-500 mx-auto" />
              <p className="text-xs sm:text-[13px] font-black text-[#2b3c6b]">Natural Daylight Spaces</p>
              <p className="text-[11px] text-stone-500">Floor-to-ceiling glass</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 text-center border border-stone-100 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
              <Sparkles className="w-6 h-6 text-emerald-600 mx-auto" />
              <p className="text-xs sm:text-[13px] font-black text-[#2b3c6b]">Secure Keycard Access</p>
              <p className="text-[11px] text-stone-500">Child safety first</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TOP-TIER FULLSCREEN LIGHTBOX MODAL ================= */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all hover:scale-110 cursor-pointer"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left / Right Nav Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
              );
            }}
            className="absolute left-4 sm:left-8 z-50 p-3.5 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
            }}
            className="absolute right-4 sm:right-8 z-50 p-3.5 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all hover:scale-110 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Modal Container */}
          <div
            className="relative w-full max-w-5xl h-[80vh] flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[85%] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black/40">
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>

            {/* Bottom Caption */}
            <div className="mt-4 text-center text-white space-y-1">
              <p className="text-lg font-black tracking-wide">
                {filteredItems[lightboxIndex].title}
              </p>
              <p className="text-xs text-stone-400 font-medium">
                Photo {lightboxIndex + 1} of {filteredItems.length} • Annar Child Care Facility
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
