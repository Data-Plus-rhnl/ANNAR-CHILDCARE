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
  Phone,
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

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
          name: "Summer Camp 2026",
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
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b border-stone-200/80 py-2 sm:py-2.5"
            : "bg-white border-b border-stone-100 py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* ================= BRAND LOGO & TITLE ================= */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
              <div className="relative w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Image
                  src="/images/annar-small-logo.png"
                  alt="Annar Childcare Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] sm:text-[21px] lg:text-[22px] font-black tracking-tight text-[#2b3c6b] group-hover:text-[#830201] transition-colors leading-none">
                  ANNAR <span className="text-[#830201]">CHILDCARE</span>
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-extrabold uppercase tracking-widest text-[#ff7162] mt-0.5 sm:mt-1">
                  Port Moody, BC
                </span>
              </div>
            </Link>

            {/* ================= DESKTOP NAVIGATION LINKS (lg & up) ================= */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 font-bold text-[14px] xl:text-[15px]">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative py-2.5 group"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        type="button"
                        className={`flex items-center gap-1 font-bold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "text-[#830201]"
                            : "text-[#2b3c6b] hover:text-[#830201]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#ff7162] transition-transform duration-300 group-hover:rotate-180" />
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
                    className={`relative py-2.5 transition-colors ${
                      isActive
                        ? "text-[#830201] font-black"
                        : "text-[#2b3c6b] hover:text-[#830201]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#830201] rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* Emphasized Order Uniform Action Button */}
              <a
                href="https://www.cambridgeuniforms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#830201] to-[#a30302] hover:from-[#690100] hover:to-[#830201] text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-full font-black text-xs xl:text-[13px] tracking-wider uppercase shadow-[0_4px_15px_rgba(131,2,1,0.25)] hover:shadow-[0_6px_20px_rgba(131,2,1,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 border border-red-500/20 group shrink-0"
              >
                <div className="w-5 h-5 xl:w-6 xl:h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ShoppingBag className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-amber-300" />
                </div>
                <span className="text-white whitespace-nowrap">Order Uniform</span>
              </a>
            </nav>

            {/* ================= MOBILE / TABLET RIGHT ACTIONS (< lg) ================= */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              {/* Quick Uniform Pill Button (on tablets >= 640px) */}
              <a
                href="https://www.cambridgeuniforms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 bg-[#830201] hover:bg-[#6e0101] text-white px-3 py-1.5 rounded-full font-bold text-xs uppercase shadow-sm transition-all"
                aria-label="Order Uniform"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Uniform</span>
              </a>

              {/* Hamburger Menu Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 sm:p-2.5 rounded-xl bg-stone-100 text-[#2b3c6b] hover:text-[#830201] hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#830201]/30"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE SLIDE-OVER DRAWER WITH BACKDROP ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content panel */}
          <div className="fixed inset-y-0 right-0 w-[88vw] max-w-[340px] sm:max-w-[380px] bg-white h-full shadow-2xl z-[101] flex flex-col overflow-hidden border-l border-stone-100 transition-all duration-300">
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between bg-gradient-to-r from-red-50/50 via-white to-stone-50/50">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
                  <Image
                    src="/images/annar-small-logo.png"
                    alt="Annar Childcare Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] sm:text-[17px] font-black tracking-tight text-[#2b3c6b] leading-tight">
                    ANNAR <span className="text-[#830201]">CHILDCARE</span>
                  </span>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#ff7162]">
                    Port Moody, BC
                  </span>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-full text-stone-500 hover:text-[#830201] hover:bg-red-50 flex items-center justify-center transition-colors border border-stone-200/80"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Navigation Links Scrollable Area */}
            <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1.5 bg-white">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                if (item.dropdown) {
                  const isOpen = activeDropdown === item.name;
                  return (
                    <div key={item.name} className="rounded-xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(isOpen ? null : item.name)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] sm:text-[15px] transition-all ${
                          isOpen || isActive
                            ? "bg-red-50/80 text-[#830201]"
                            : "text-[#2b3c6b] hover:bg-stone-50"
                        }`}
                      >
                        <span className="tracking-tight">{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#ff7162] transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#830201]" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="ml-3 pl-3 my-1 space-y-1 border-l-2 border-red-200/60">
                          {item.dropdown.map((sub) => {
                            const SubIcon = sub.icon;
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-start gap-2.5 p-2 rounded-lg transition-colors ${
                                  isSubActive
                                    ? "bg-red-50 text-[#830201] font-bold"
                                    : "hover:bg-stone-50 text-stone-700"
                                }`}
                              >
                                <div className="w-6 h-6 rounded-md bg-red-100/80 text-[#830201] flex items-center justify-center shrink-0 mt-0.5">
                                  <SubIcon className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <p className="text-[13px] font-semibold leading-snug">
                                    {sub.name}
                                  </p>
                                  <p className="text-[11px] text-stone-500 line-clamp-1 leading-tight mt-0.5">
                                    {sub.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] sm:text-[15px] transition-all ${
                      isActive
                        ? "bg-red-50 text-[#830201] border-l-3 border-[#830201]"
                        : "text-[#2b3c6b] hover:bg-stone-50"
                    }`}
                  >
                    <span className="tracking-tight">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Quick Action & Contact Footer in Drawer */}
            <div className="p-3.5 border-t border-stone-100 bg-stone-50/90 space-y-2">
              <a
                href="https://www.cambridgeuniforms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#830201] to-[#a30302] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                <span>Order Uniform</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:7788227120"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white border border-stone-200 text-[#2b3c6b] font-bold text-xs hover:border-[#830201] hover:text-[#830201] transition-colors text-center shadow-xs"
                >
                  <Phone className="w-3 h-3 text-[#ff7162]" />
                  <span>Call Us</span>
                </a>
                <Link
                  href="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white border border-stone-200 text-[#2b3c6b] font-bold text-xs hover:border-[#830201] hover:text-[#830201] transition-colors text-center shadow-xs"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Book Tour</span>
                </Link>
              </div>

              <div className="text-center pt-1 text-[10px] text-stone-500 font-medium leading-tight">
                Mon – Fri: 7:00 AM – 6:00 PM • Port Moody, BC
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
