"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ShieldCheck,
  HeartPulse,
  Users,
  Search,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { policiesData, PolicySection } from "@/data/policiesData";
import { siteConfig } from "@/data/siteConfig";

export default function PoliciesProceduresPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(
    policiesData[0]?.id || null
  );

  const categories = [
    { id: "all", label: "All Guidelines (10)", icon: BookOpen },
    { id: "safety", label: "Safety & Security", icon: ShieldCheck },
    { id: "health", label: "Health & Nutrition", icon: HeartPulse },
    { id: "communication", label: "Parent Partnership", icon: Users },
    { id: "conduct", label: "Guidance & Media", icon: Sparkles },
  ];

  const filteredPolicies = policiesData.filter((policy) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "safety" && policy.category === "safety") ||
      (activeCategory === "health" && policy.category === "health") ||
      (activeCategory === "communication" && policy.category === "communication") ||
      (activeCategory === "conduct" && policy.category === "conduct");

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      policy.title.toLowerCase().includes(query) ||
      policy.summary.toLowerCase().includes(query) ||
      policy.subsections.some(
        (sub) =>
          sub.title.toLowerCase().includes(query) ||
          (typeof sub.content === "string"
            ? sub.content.toLowerCase().includes(query)
            : sub.content.some((c) => c.toLowerCase().includes(query)))
      );

    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header (Exact Match to guidelines-and-policies.html) */}
      <PageHeader
        title="Guidelines and Policies in Annar Childcare"
        subtitle="Guidelines, Procedures and Policies"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/policies-procedures" },
          { label: "Policies & Procedures" },
        ]}
        bgImage="/images/background/guidelines-bg.jpg"
      />

      {/* 2. Overview & Interactive Filter Bar */}
      <section className="py-14 sm:py-20 bg-[#faf8f5] border-b border-stone-200/80 relative overflow-hidden">
        {/* Playful Floating Doodles */}
        <div className="absolute top-8 left-10 w-16 h-16 opacity-30 pointer-events-none hidden sm:block animate-bounce">
          <Image src="/images/icons/anim-icon-1.png" alt="" width={64} height={64} />
        </div>
        <div className="absolute bottom-10 right-10 w-20 h-20 opacity-30 pointer-events-none hidden sm:block">
          <Image src="/images/icons/anim-icon-2.png" alt="" width={80} height={80} />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#830201] text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff7162]" />
              <span>Annar ChildCare Standards of Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#2b3c6b] tracking-tight leading-tight">
              Guidelines, Procedures & Policies
            </h1>
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
              Transparent, professional guidelines designed to safeguard child well-being, support healthy development, and ensure open communication between families and educators.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search policies (e.g. sick child, medication, screen time, pickup, disaster)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2b3c6b]/30 focus:border-[#2b3c6b] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-700 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition-all"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-[#830201] text-white shadow-md scale-105"
                        : "bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/80 shadow-sm"
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? "text-amber-300" : "text-[#ff7162]"}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Accordion Policy List */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {filteredPolicies.length === 0 ? (
            <div className="text-center py-16 bg-[#faf8f5] rounded-3xl border border-stone-200 space-y-4">
              <HelpCircle className="w-12 h-12 text-stone-400 mx-auto" />
              <h3 className="text-xl font-bold text-[#2b3c6b]">No matching policies found</h3>
              <p className="text-stone-500 text-sm max-w-md mx-auto">
                We couldn&apos;t find any guidelines matching &quot;{searchQuery}&quot;. Try clearing your search or selecting a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2b3c6b] text-white text-xs font-bold transition-all hover:bg-[#830201]"
              >
                <span>Reset Filters</span>
              </button>
            </div>
          ) : (
            filteredPolicies.map((policy) => {
              const isOpen = openAccordionId === policy.id;
              return (
                <div
                  key={policy.id}
                  id={policy.id}
                  className={`rounded-[24px] border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-stone-300 shadow-[0_15px_40px_rgba(0,0,0,0.06)] ring-1 ring-[#830201]/10"
                      : "bg-[#faf8f5] hover:bg-white border-stone-200/80 shadow-sm"
                  }`}
                >
                  {/* Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(policy.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="space-y-1.5 pr-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-stone-100 text-[#830201] text-[11px] font-black uppercase tracking-wider">
                        <span>{policy.categoryLabel}</span>
                      </div>
                      <h2 className="text-lg sm:text-2xl font-black text-[#2b3c6b] leading-snug">
                        {policy.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-600 font-normal line-clamp-2">
                        {policy.summary}
                      </p>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#830201] text-white rotate-180 shadow-md"
                          : "bg-white border border-stone-200 text-stone-600 shadow-sm"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-stone-100 text-left space-y-6 animate-fadeIn">
                      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                          <strong>Summary Overview:</strong> {policy.summary}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        {policy.subsections.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-5 sm:p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/70 space-y-2.5"
                          >
                            <h3 className="text-sm sm:text-base font-black text-[#2b3c6b] flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#ff7162]" />
                              {sub.title}
                            </h3>

                            {sub.isList && Array.isArray(sub.content) ? (
                              <ul className="space-y-2 pt-1">
                                {sub.content.map((bullet, bIdx) => (
                                  <li
                                    key={bIdx}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                                {typeof sub.content === "string" ? sub.content : sub.content.join(" ")}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* 4. Bottom Support CTA Section (Floating Deep Navy Card on Clean Background) */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#243460] via-[#2b3c6b] to-[#1c2748] text-white p-8 sm:p-14 lg:p-16 shadow-[0_25px_60px_rgba(43,60,107,0.22)] border border-blue-900/30 text-center space-y-7">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider relative z-10">
              <HelpCircle className="w-4 h-4 text-amber-300" />
              <span>Family Support & Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-wider leading-tight text-white drop-shadow-sm max-w-3xl mx-auto relative z-10">
              Have Questions About Our Policies?
            </h2>

            <p className="text-stone-200 text-sm sm:text-[16.5px] font-normal max-w-2xl mx-auto leading-relaxed relative z-10">
              Our administration and certified educators are always happy to discuss specific family requirements, health accommodations, or emergency protocols.
            </p>

            <div className="pt-3 flex flex-wrap justify-center items-center gap-4 relative z-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7162] hover:bg-[#ff5a47] text-white font-black text-sm sm:text-base shadow-[0_10px_25px_rgba(255,113,98,0.35)] transition-all hover:scale-105 active:scale-95"
              >
                <span>Contact Our Admin Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/25 backdrop-blur-sm transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call {siteConfig.contact.phone}</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-stone-300 font-medium relative z-10 border-t border-white/10 mt-6">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                Licensed by Fraser Health Child Care Licensing
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-300" />
                annaracademy@yahoo.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
