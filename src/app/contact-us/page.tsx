"use client";

import React from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { siteConfig } from "@/data/siteConfig";

export default function ContactUsPage() {

  const contactCards = [
    {
      icon: Phone,
      iconColor: "#ff7162",
      iconBg: "bg-red-50",
      title: "Phone Number",
      value: siteConfig.contact.phoneDisplay,
      href: siteConfig.contact.phoneHref,
      linkLabel: "Call Now",
    },
    {
      icon: MapPin,
      iconColor: "#830201",
      iconBg: "bg-red-50",
      title: "Our Address",
      value: `${siteConfig.contact.address.street}\n${siteConfig.contact.address.city}, ${siteConfig.contact.address.province} ${siteConfig.contact.address.postalCode}`,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address.full)}`,
      linkLabel: "Get Directions",
    },
    {
      icon: Mail,
      iconColor: "#2b3c6b",
      iconBg: "bg-blue-50",
      title: "Email Address",
      value: siteConfig.contact.email,
      href: siteConfig.contact.emailHref,
      linkLabel: "Send Email",
    },
  ];

  const subjectOptions = [
    "General Inquiry",
    "Enrollment & Registration",
    "Program Information",
    "Tour / Visit Request",
    "Transportation Services",
    "Summer / Spring Break Camp",
    "Birthday Party Booking",
    "Feedback & Suggestions",
    "Other",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        title="Contact Us at Annar Childcare"
        subtitle="Get In Touch"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        bgImage="/images/background/contact-title.jpg"
      />

      {/* 2. Contact Info Cards */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-b border-stone-200/80 relative overflow-hidden">
        {/* Playful Floating Doodles */}
        <div className="absolute top-8 left-10 w-16 h-16 opacity-30 pointer-events-none hidden sm:block animate-bounce">
          <Image src="/images/icons/anim-icon-1.png" alt="" width={64} height={64} />
        </div>
        <div className="absolute bottom-10 right-10 w-20 h-20 opacity-30 pointer-events-none hidden sm:block">
          <Image src="/images/icons/anim-icon-2.png" alt="" width={80} height={80} />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#830201] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7162]" />
              <span>Contact Annar ChildCare</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#2b3c6b] tracking-tight leading-tight">
              Get In Touch
            </h1>
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
              We&apos;re excited to hear from you! Reach out for program inquiries, tour bookings, enrollment questions, or any information about our childcare services.
            </p>
          </div>

          {/* 3 Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {contactCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <a
                  key={idx}
                  href={card.href}
                  target={card.icon === MapPin ? "_blank" : undefined}
                  rel={card.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="group p-6 sm:p-8 rounded-[24px] bg-white border border-stone-200/80 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 text-center space-y-4 hover:-translate-y-1"
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl ${card.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent
                      className="w-7 h-7"
                      style={{ color: card.iconColor }}
                    />
                  </div>

                  <h3 className="text-lg font-black text-[#2b3c6b]">
                    {card.title}
                  </h3>

                  <p className="text-stone-600 text-sm font-medium whitespace-pre-line leading-relaxed">
                    {card.value}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[#ff7162] text-xs font-black uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    <span>{card.linkLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Contact Form + Business Hours & Social Sidebar */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Direct Contact Methods (No form — no backend) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#ff7162]">
                  Reach Out Directly
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="text-stone-500 text-sm sm:text-base font-normal leading-relaxed max-w-lg">
                  Whether you have questions about enrollment, programs, or want to schedule a facility tour — our team is ready to help. Reach us by phone or email below.
                </p>
              </div>

              {/* Primary Contact Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Card */}
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Inquiry%20from%20Annar%20Childcare%20Website`}
                  className="group p-6 rounded-[24px] bg-[#faf8f5] border border-stone-200/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-[#2b3c6b]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-[#2b3c6b] group-hover:text-[#ff7162] transition-colors">
                      Send Us an Email
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      For enrollment inquiries, program details, or general questions
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#2b3c6b]">
                    <span>{siteConfig.contact.email}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff7162] group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href={siteConfig.contact.phoneHref}
                  className="group p-6 rounded-[24px] bg-[#faf8f5] border border-stone-200/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-[#ff7162]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-[#2b3c6b] group-hover:text-[#ff7162] transition-colors">
                      Call Us Directly
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Speak with our team Monday–Friday, 7:00 AM – 6:00 PM
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#2b3c6b]">
                    <span>{siteConfig.contact.phoneDisplay}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff7162] group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>

              {/* Visit Us Card */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-[24px] bg-[#faf8f5] border border-stone-200/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="text-lg font-black text-[#2b3c6b] group-hover:text-[#ff7162] transition-colors">
                    Visit Our Facility
                  </h3>
                  <p className="text-sm text-stone-600 font-medium">
                    {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.province} {siteConfig.contact.address.postalCode}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#ff7162] uppercase tracking-wider">
                    Get Directions <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>

              {/* Tour Request Note */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong>Want to schedule a tour?</strong> Call us at{" "}
                  <a href={siteConfig.contact.phoneHref} className="font-bold underline hover:text-[#830201] transition-colors">
                    {siteConfig.contact.phone}
                  </a>{" "}
                  or email{" "}
                  <a href={siteConfig.contact.emailHref} className="font-bold underline hover:text-[#830201] transition-colors">
                    {siteConfig.contact.email}
                  </a>{" "}
                  to book a convenient time to visit our facility and meet our educators.
                </p>
              </div>
            </div>


            {/* Right Column: Business Hours, Social Links, & Quick Contact */}
            <div className="lg:col-span-5 space-y-6">
              {/* Business Hours Card */}
              <div className="rounded-[24px] bg-[#faf8f5] border border-stone-200/80 p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-black text-[#2b3c6b]">
                    Business Hours
                  </h3>
                </div>

                <div className="space-y-3">
                  {siteConfig.contact.hours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between py-3 ${
                        idx !== siteConfig.contact.hours.length - 1
                          ? "border-b border-dashed border-stone-200"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-bold text-stone-700">
                        {schedule.days}
                      </span>
                      <span
                        className={`text-sm font-black ${
                          schedule.time === "Closed"
                            ? "text-red-500"
                            : "text-[#2b3c6b]"
                        }`}
                      >
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 font-medium flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    Licensed ChildCare • Open year-round with scheduled holiday closures
                  </span>
                </div>
              </div>

              {/* Social Connect Card */}
              <div className="rounded-[24px] bg-[#faf8f5] border border-stone-200/80 p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#2b3c6b]" />
                  </div>
                  <h3 className="text-lg font-black text-[#2b3c6b]">
                    Connect With Us
                  </h3>
                </div>

                <div className="space-y-3">
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#2b3c6b] group-hover:text-[#ff7162] transition-colors">
                        Instagram
                      </p>
                      <p className="text-xs text-stone-500">
                        @annar_artacademy
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 ml-auto group-hover:text-[#ff7162] transition-colors" />
                  </a>

                  <a
                    href={siteConfig.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#2b3c6b] group-hover:text-[#ff7162] transition-colors">
                        Facebook
                      </p>
                      <p className="text-xs text-stone-500">
                        Annar Child Care
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 ml-auto group-hover:text-[#ff7162] transition-colors" />
                  </a>
                </div>
              </div>

              {/* Quick Call Card */}
              <div className="rounded-[24px] bg-gradient-to-br from-[#243460] via-[#2b3c6b] to-[#1c2748] p-6 sm:p-8 text-white space-y-4 relative overflow-hidden shadow-[0_15px_40px_rgba(43,60,107,0.25)]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <h3 className="text-lg font-black">
                    Need Immediate Help?
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm font-normal leading-relaxed">
                    Our team is available Monday through Friday during business hours for any urgent questions or enrollment inquiries.
                  </p>

                  <a
                    href={siteConfig.contact.phoneHref}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ff7162] hover:bg-[#ff5a47] text-white font-black text-sm shadow-[0_8px_20px_rgba(255,113,98,0.35)] transition-all hover:scale-105 active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {siteConfig.contact.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Maps Embed */}
      <section className="bg-[#faf8f5] border-t border-stone-200/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff7162]">
              Our Location
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#2b3c6b] tracking-tight">
              Find Us in Port Moody
            </h2>
            <p className="text-stone-500 text-sm font-normal max-w-lg mx-auto">
              Located on Spring Street in the heart of Port Moody, BC — easily accessible from Moody Centre, Coquitlam, and surrounding Tri-Cities areas.
            </p>
          </div>

          <div className="rounded-[24px] overflow-hidden border border-stone-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.4!2d-122.8465!3d49.2783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE2JzQxLjkiTiAxMjLCsDUwJzQ3LjQiVw!5e0!3m2!1sen!2sca!4v1700922721229!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Annar Childcare Location - 3013 Spring Street, Port Moody, BC"
              className="w-full"
            />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-stone-500 font-medium pt-2">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff7162]" />
              {siteConfig.contact.address.full}
            </span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#2b3c6b] hover:text-[#ff7162] transition-colors font-bold"
            >
              <span>Open in Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
