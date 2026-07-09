import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import FloatingCall from "@/components/layout/FloatingCall";
import StructuredData from "@/components/seo/StructuredData";
import { siteUrl } from "@/lib/data";

/* Matches the rounded, bold geometric sans used across fast.com.ph —
   one consistent family for both headings and body copy, differentiated
   by weight (and italic for hero-style emphasis). */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YVES Trucking Services | Reliable Trucking Across Palawan",
    template: "%s | YVES Trucking Services",
  },
  description:
    "YVES Trucking Services provides reliable trucking and cargo transportation across the entire province of Palawan, Philippines — from Puerto Princesa to El Nido, Coron, Brooke's Point, and beyond.",
  keywords: [
    "trucking Palawan",
    "cargo transport Palawan",
    "Puerto Princesa trucking",
    "Palawan logistics",
    "hauling services Palawan",
  ],
  openGraph: {
    title: "YVES Trucking Services",
    description:
      "Reliable trucking and cargo transportation across the entire province of Palawan.",
    type: "website",
    locale: "en_PH",
    siteName: "YVES Trucking Services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YVES Trucking Services — Reliable trucking across Palawan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YVES Trucking Services",
    description:
      "Reliable trucking and cargo transportation across the entire province of Palawan.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <StructuredData />
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingCall />
      </body>
    </html>
  );
}
