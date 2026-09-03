"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  HelpCircle,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { faqs, faqCategories } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";

const borderColors = [
  "border-[#43b3d9]", // Cyan
  "border-[#ff7162]", // Coral
  "border-[#fbb419]", // Yellow
  "border-[#b350ff]", // Purple
  "border-[#830201]", // Maroon
  "border-[#10b981]", // Emerald
];

const activeColors = [
  "text-[#43b3d9]",
  "text-[#ff7162]",
  "text-[#fbb419]",
  "text-[#b350ff]",
  "text-[#830201]",
  "text-[#10b981]",
];

export default function FaqAccordionSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([faqs[0].id]));

  // Filter FAQs based on active category & search query
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <section className="faq-page-section relative bg-gradient-to-b from-white via-[#faf8f5] to-white py-16 sm:py-24 lg:py-32 select-none overflow-hidden">
      {/* Animated Floating Mascot on Bottom Right */}
      <div
        className="absolute float-bob-y pointer-events-none z-10 hidden 2xl:block opacity-85"
        style={{
          right: "40px",
          bottom: "-40px",
          width: "220px",
          height: "340px",
        }}
      >
        <Image
          src="/images/icons/anim-icon-13.png"
          alt="Annar Mascot"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* ================= SECTION TITLE & INTRO ================= */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#830201] text-xs sm:text-sm font-black tracking-wide uppercase">
            <HelpCircle className="w-4 h-4 text-[#ff7162]" />
            <span>Faq’s Related to Our Programs & Facilities</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#2b3c6b] tracking-tight leading-tight sm:leading-[1.18]">
            Frequently Asked Questions
          </h2>

          <p className="text-[14px] sm:text-[15.5px] text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto">
            At Annar Child Care, we are dedicated to creating a nurturing, educational, and fun environment for your child&apos;s early years. Explore answers to common questions about our philosophy, ratios, and daily life.
          </p>
        </div>

        {/* ================= SEARCH & CATEGORY FILTER BAR ================= */}
        <div className="max-w-4xl mx-auto space-y-5 mb-10 sm:mb-12">
          {/* Live Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. ratio, meals, subsidies, philosophy)..."
              className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-white border-2 border-stone-200 focus:border-[#ff7162] focus:outline-none shadow-sm text-stone-800 text-sm sm:text-base transition-all placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-700 bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded-full cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-2.5">
            {faqCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-black tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#830201] text-white shadow-md scale-105"
                      : "bg-white text-[#2b3c6b] hover:bg-stone-100 border border-stone-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Actions (Count + Expand/Collapse) */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-stone-500 font-bold px-2">
            <span>
              Showing {filteredFaqs.length} of {faqs.length} questions
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={expandAll}
                className="text-[#830201] hover:underline cursor-pointer"
              >
                Expand All
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={collapseAll}
                className="text-stone-500 hover:text-stone-800 hover:underline cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* ================= MAIN ACCORDION GRID + SIDEBAR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* FAQ Accordion List (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-stone-200 space-y-3 shadow-sm">
                <HelpCircle className="w-12 h-12 text-stone-300 mx-auto" />
                <h3 className="text-lg font-bold text-[#2b3c6b]">
                  No matching questions found
                </h3>
                <p className="text-sm text-stone-500">
                  Try adjusting your search terms or select &quot;All&quot; categories.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="inline-block mt-2 text-xs font-bold text-[#830201] bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIds.has(faq.id);
                const borderClass = borderColors[index % borderColors.length];
                const activeTextClass = activeColors[index % activeColors.length];

                return (
                  <div
                    key={faq.id}
                    className={`rounded-[20px] sm:rounded-[24px] border-2 ${borderClass} overflow-hidden transition-all duration-300 bg-white ${
                      isOpen ? "shadow-md" : "shadow-xs hover:shadow-sm"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-5 sm:px-7 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-bold text-[15px] sm:text-[17px] text-[#2b3c6b] cursor-pointer transition-colors duration-200"
                    >
                      <span className={isOpen ? activeTextClass : "text-[#2b3c6b]"}>
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                          isOpen
                            ? `rotate-180 ${activeTextClass} bg-stone-50`
                            : "text-[#2b3c6b] bg-stone-100"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-1 text-[13.5px] sm:text-[15px] text-[#444444] leading-relaxed border-t border-stone-100 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Quick Help & Inquiries Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Quick Contact Box */}
            <div className="bg-[#830201] text-white rounded-[26px] p-6 sm:p-8 shadow-xl space-y-5 relative overflow-hidden text-left">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-2 relative z-10">
                <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-amber-200 bg-white/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  Have More Questions?
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  We&apos;re Here to Help!
                </h3>
                <p className="text-xs sm:text-[13.5px] text-stone-200 leading-relaxed font-normal">
                  Our friendly staff is happy to answer any questions about our curriculum, subsidies, schedules, and enrollment availability.
                </p>
              </div>

              <div className="space-y-3 pt-2 relative z-10">
                {/* Phone Call Button */}
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 bg-white hover:bg-stone-100 text-[#830201] px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-[14px] transition-all duration-300 hover:scale-[1.02] shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#ff7162] shrink-0" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>

                {/* Email Button */}
                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3 backdrop-blur-md bg-white/15 hover:bg-white/25 border border-white/20 text-white px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-[14px] transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="truncate">{siteConfig.contact.email}</span>
                </a>

                {/* Contact Us Link */}
                <Link
                  href="/contact-us"
                  className="flex items-center justify-between bg-gradient-to-r from-[#ff7162] to-[#ff523d] hover:from-[#fa5b4a] hover:to-[#e63f2b] text-white px-5 py-3.5 rounded-2xl font-black text-xs sm:text-[13px] uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-md group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Quick Hours Card */}
            <div className="bg-white rounded-[24px] p-6 border border-stone-200 shadow-sm space-y-3 text-left">
              <h4 className="text-sm sm:text-base font-black text-[#2b3c6b]">
                Operating Hours & Location
              </h4>
              <div className="space-y-1.5 text-xs sm:text-[13px] text-stone-600">
                <p>
                  <strong>Mon – Fri:</strong> 7:00 AM – 6:00 PM
                </p>
                <p>
                  <strong>Sat – Sun:</strong> Closed
                </p>
                <p className="pt-1 text-stone-500">
                  {siteConfig.contact.address.full}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
