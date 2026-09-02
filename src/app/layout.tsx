import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Annar Child Care - Daycare & Early Learning Center in Port Moody, BC",
  description:
    "Premier licensed childcare and daycare center in Port Moody, BC. Offering Infant & Toddler Care, 3-5 Daycare, Before/After School Care, and Fine Arts Curriculum.",
  keywords: siteConfig.seo.keywords,
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="font-sans antialiased bg-white text-stone-800 min-h-screen flex flex-col">
        <HeaderTop />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
