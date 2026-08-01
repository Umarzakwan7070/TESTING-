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
  metadataBase: new URL("https://surfingleads.vercel.app"),
  title: {
    default: "SurfingLeads — Landing Pages & Websites for Entrepreneurs",
    template: "%s | SurfingLeads",
  },
  description:
    "I design and build landing pages and marketing websites for entrepreneurs — starting at $399. No e-commerce, no bloat, just a site built to catch every lead.",
  openGraph: {
    title: "SurfingLeads — Landing Pages & Websites for Entrepreneurs",
    description:
      "Conversion-focused landing pages and marketing websites for service businesses — built to explain your value clearly and turn visitors into enquiries.",
    url: "https://surfingleads.vercel.app",
    siteName: "SurfingLeads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SurfingLeads — Landing Pages & Websites for Entrepreneurs",
    description:
      "Conversion-focused landing pages and marketing websites for service businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-foam text-ink">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "SurfingLeads",
            description:
              "Landing pages and marketing websites for entrepreneurs and service businesses.",
            url: "https://surfingleads.vercel.app",
            email: "hello@surfingleads.co",
            priceRange: "$399-$1499",
          })}
        </script>
        <SmoothScroll>{children}</SmoothScroll>
        <CouponPopup />
      </body>
    </html>
  );
}
