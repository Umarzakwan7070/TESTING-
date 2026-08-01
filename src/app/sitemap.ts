import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://surfingleads.vercel.app";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/assessment`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
