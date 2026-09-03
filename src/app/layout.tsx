import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/layout/HeaderTop";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Annar Child Care - Daycare & Early Learning Center in Port Moody, BC",
    template: "%s | Annar Child Care",
  },
  description:
    "Premier licensed childcare and daycare center in Port Moody, BC. Offering Infant & Toddler Care, 3-5 Daycare, Before/After School Care, and Fine Arts Curriculum.",
  keywords: siteConfig.seo.keywords,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/annar-small-logo.png",
  },
  openGraph: {
    title: "Annar Child Care | Port Moody, BC",
    description:
      "Licensed early learning and childcare center celebrating creativity through fine arts.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annar Child Care - Daycare & Early Learning in Port Moody, BC",
    description:
      "Licensed childcare, infant/toddler care, and fine arts academy in Port Moody, BC.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  image: siteConfig.ogImage,
  url: siteConfig.url,
  telephone: siteConfig.contact.phoneHref,
  email: siteConfig.contact.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.province,
    postalCode: siteConfig.contact.address.postalCode,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.contact.geo.latitude,
    longitude: siteConfig.contact.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  sameAs: [siteConfig.socials.instagram, siteConfig.socials.facebook],
  areaServed: [
    { "@type": "City", name: "Port Moody" },
    { "@type": "City", name: "Coquitlam" },
    { "@type": "City", name: "Port Coquitlam" },
    { "@type": "AdministrativeArea", name: "Tri-Cities, BC" },
  ],
  description: siteConfig.description,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-stone-800 min-h-screen flex flex-col">
        <HeaderTop />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
