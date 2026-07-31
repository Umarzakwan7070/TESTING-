import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Launchframe — Landing Pages & Websites for Entrepreneurs",
  description:
    "I design and build landing pages and marketing websites for entrepreneurs — starting at $399. No e-commerce, no bloat, just fast, clean sites built to convert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-label">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
