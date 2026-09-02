"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Baby,
  GraduationCap,
  Calendar,
  BookOpen,
  ShoppingBag,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about-us",
      dropdown: [
        {
          name: "About Annar ChildCare",
          href: "/about-us",
          desc: "Our story, vision & fine arts philosophy",
          icon: Sparkles,
        },
        {
          name: "Frequently Asked Questions",
          href: "/faq",
          desc: "Answers to common parent questions",
          icon: BookOpen,
        },
        {
          name: "Facility & Photo Gallery",
          href: "/gallery",
          desc: "Explore our classroom spaces",
          icon: GraduationCap,
        },
      ],
    },
    {
      name: "Programs",
      href: "/programs",
      dropdown: [
        {
          name: "Toddler & Infant Care",
          href: "/programs/infant-toddler",
          desc: "Ages 18m - 3y • Nurturing early milestones",
          icon: Baby,
        },
        {
          name: "Ages 3-5 Program",
          href: "/programs/daycare-3-to-5",
          desc: "Preschool readiness & fine arts integration",
          icon: GraduationCap,
        },
        {
          name: "Before/After School Care",
          href: "/programs/before-after-school",
          desc: "Moody Elementary • Kindergarten to Grade 5",
          icon: BookOpen,
        },
      ],
    },
    {
      name: "Events And Parties",
      href: "/events/summer-camp",
      dropdown: [
        {
          name: "Summer Camp 2025",
          href: "/events/summer-camp",
          desc: "Creative summer adventures & outdoor fun",
          icon: Calendar,
        },
        {
          name: "Spring Break Camp",
          href: "/events/spring-break",
          desc: "Fine arts exploration during spring recess",
          icon: Calendar,
        },
        {
          name: "Book a Party!",
          href: "/events/birthday-parties",
          desc: "Private weekend venue rentals & themes",
          icon: Sparkles,
        },
      ],
    },
    {
      name: "Resources",
      href: "/resources/policies-procedures",
      dropdown: [
        {
          name: "Policies & Procedures",
          href: "/resources/policies-procedures",
          desc: "Health, safety & parent guidelines",
          icon: BookOpen,
        },
        {
          name: "Pick Up & Drop Off",
          href: "/resources/pick-up-drop-off",
          desc: "Facility access & security protocols",
          icon: GraduationCap,
        },
      ],
    },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b border-stone-200/80 py-2.5"
          : "bg-white border-b border-stone-100 py-3.5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ================= BRAND LOGO & TITLE ================= */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/annar-small-logo.png"
                alt="Annar Childcare Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] sm:text-[22px] font-black tracking-tight text-[#2b3c6b] group-hover:text-[#830201] transition-colors leading-none">
                ANNAR <span className="text-[#830201]">CHILDCARE</span>
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ff7162] mt-1">
                Port Moody, BC
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION LINKS ================= */}
          <nav className="hidden xl:flex items-center gap-7 font-bold text-[15px]">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative py-3 group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "text-[#830201]"
                          : "text-[#2b3c6b] hover:text-[#830201]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 text-[#ff7162] transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Animated Mega Dropdown */}
                    <div className="absolute top-full left-0 w-80 pt-2 opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-stone-100 p-2.5 space-y-1">
                        {item.dropdown.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50/80 transition-all duration-200 group/sub"
                            >
                              <div className="w-8 h-8 rounded-lg bg-red-100/60 text-[#830201] flex items-center justify-center shrink-0 mt-0.5 group-hover/sub:bg-[#830201] group-hover/sub:text-white transition-colors">
                                <SubIcon className="w-4 h-4" />
                              </div>
                              <div className="space-y-0.5">
                                <p className="text-[14px] font-bold text-[#2b3c6b] group-hover/sub:text-[#830201] transition-colors leading-snug">
                                  {sub.name}
                                </p>
                                <p className="text-[12px] text-stone-500 font-normal leading-tight">
                                  {sub.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-3 transition-colors ${
                    isActive
                      ? "text-[#830201] font-black"
                      : "text-[#2b3c6b] hover:text-[#830201]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#830201] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Emphasized Order Uniform Action Button */}
            <a
              href="https://www.cambridgeuniforms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-gradient-to-r from-[#830201] to-[#a30302] hover:from-[#690100] hover:to-[#830201] text-white px-5 py-2.5 rounded-full font-black text-[13px] tracking-wider uppercase shadow-[0_4px_15px_rgba(131,2,1,0.25)] hover:shadow-[0_6px_20px_rgba(131,2,1,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 border border-red-500/20 group"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <span className="text-white">Order Uniform</span>
            </a>
          </nav>

          {/* ================= MOBILE HAMBURGER TOGGLE ================= */}
          <div className="flex xl:hidden items-center gap-3">
            <a
              href="https://www.cambridgeuniforms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#830201] text-white px-3.5 py-1.5 rounded-full font-bold text-xs uppercase"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
              <span>Uniform</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-stone-100 text-[#2b3c6b] hover:text-[#830201] hover:bg-red-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE SLIDE-DOWN DRAWER ================= */}
      {mobileOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-2xl border-t border-stone-200 px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto shadow-2xl">
          <div className="space-y-1">
            {navItems.map((item) => {
              if (item.dropdown) {
                const isOpen = activeDropdown === item.name;
                return (
                  <div key={item.name} className="border-b border-stone-100 pb-2">
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(isOpen ? null : item.name)}
                      className="w-full flex items-center justify-between py-2.5 font-bold text-[#2b3c6b] text-base text-left"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#ff7162] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pl-3 space-y-2 pt-1 pb-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block py-1.5 text-sm font-semibold text-stone-600 hover:text-[#830201]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2.5 font-bold text-[#2b3c6b] hover:text-[#830201] text-base border-b border-stone-100"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3">
            <a
              href="https://www.cambridgeuniforms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-[#830201] to-[#a30302] text-white font-bold text-sm uppercase shadow-lg"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              <span>Order Uniform</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
