import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/checkout/", "/cart/", "/my-account/"],
      },
    ],
    sitemap: "https://coresportswears.com/sitemap.xml",
  };
}
