import type { Metadata } from "next";
import { Baloo_2, Nunito_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CouponPopup from "@/components/CouponPopup";

const baloo = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const nunito = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SurfingLeads — Landing Pages & Websites for Entrepreneurs",
  description:
    "I design and build landing pages and marketing websites for entrepreneurs — starting at $399. No e-commerce, no bloat, just a site built to catch every lead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-foam text-ink">
        <SmoothScroll>{children}</SmoothScroll>
        <CouponPopup />
      </body>
    </html>
  );
}
