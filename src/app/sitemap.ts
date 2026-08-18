import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coresportswears.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/catalogue`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/faqs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const categories = [
    "ski-snow-wear",
    "custom-streetwear",
    "custom-sportswear",
    "custom-bags",
    "sports-accessories",
    "design-customization",
    "head-wears",
  ];

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/product-category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages];
}
