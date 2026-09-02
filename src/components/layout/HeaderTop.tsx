"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Mail, Clock } from "lucide-react";

export function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function HeaderTop() {
  return (
    <div className="bg-[#830201] text-white text-[13px] py-2 px-3 sm:px-6 lg:px-8 font-medium border-b border-red-950/40 select-none relative z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Operating Hours */}
        <div className="hidden md:flex items-center gap-2 text-white/90 text-xs font-semibold">
          <Clock className="w-3.5 h-3.5 text-[#ff7162] shrink-0" />
          <span>Mon – Fri: 7:00 AM – 6:00 PM • Licensed ChildCare</span>
        </div>

        {/* Right / Full width on mobile: Phone, Email, Instagram, Facebook */}
        <div className="flex items-center justify-between md:justify-end gap-2.5 sm:gap-4 lg:gap-6 w-full md:w-auto text-xs sm:text-[13px] text-white font-medium">
          {/* Phone */}
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-1.5 sm:gap-2 text-white hover:text-[#ff7162] transition-colors py-0.5"
            aria-label="Call Annar Childcare"
          >
            <Phone className="w-3.5 h-3.5 fill-current text-[#ff7162] shrink-0" />
            <span className="font-bold text-xs sm:text-[13px] tracking-tight">778-822-7120</span>
          </a>

          <span className="h-3.5 w-px border-r border-dashed border-red-300/30 inline-block" />

          {/* Email */}
          <a
            href={siteConfig.contact.emailHref}
            className="hidden sm:flex items-center gap-2 text-white hover:text-[#ff7162] transition-colors py-0.5"
            aria-label="Email Annar Childcare"
          >
            <Mail className="w-3.5 h-3.5 text-[#ff7162] shrink-0" />
            <span className="truncate max-w-[190px] lg:max-w-none">annaracademy@yahoo.com</span>
          </a>

          <span className="h-3.5 w-px border-r border-dashed border-red-300/30 hidden sm:inline-block" />

          {/* Socials Group */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Instagram */}
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <div className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <InstagramIcon className="w-3.5 h-3.5 text-[#ffb0a7]" />
              </div>
              <span className="hidden lg:inline text-xs font-semibold">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <div className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <FacebookIcon className="w-3.5 h-3.5 text-[#ffb0a7]" />
              </div>
              <span className="hidden lg:inline text-xs font-semibold">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
