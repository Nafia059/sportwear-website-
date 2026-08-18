export interface SEOConfig {
  onPage: {
    enabled: boolean;
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
    ogImage: string;
    ogType: string;
    twitterCard: string;
    twitterSite: string;
    twitterCreator: string;
    structuredData: boolean;
    headingHierarchy: boolean;
    internalLinks: boolean;
    imageAltTags: boolean;
    cleanUrls: boolean;
    breadcrumbs: boolean;
  };
  offPage: {
    enabled: boolean;
    sitemap: boolean;
    robotsTxt: boolean;
    canonicalTag: boolean;
    openGraph: boolean;
    twitterCards: boolean;
    schemaMarkup: boolean;
    hreflang: boolean;
    authorMeta: boolean;
    publishDate: boolean;
  };
}

export const defaultSEOConfig: SEOConfig = {
  onPage: {
    enabled: true,
    title: "Best Sportswear Manufacturers In Pakistan | Core Sportswears",
    description:
      "Leading sportswear manufacturers in Pakistan offering custom activewear, teamwear & sports apparel with quality fabrics, fast turnaround & bulk pricing.",
    keywords: [
      "sportswear manufacturer pakistan",
      "custom sportswear",
      "sportswear supplier",
      "private label sportswear",
      "sialkot sportswear",
      "custom activewear",
      "teamwear manufacturer",
      "sports apparel exporter",
    ],
    canonicalUrl: "https://coresportswears.com",
    ogImage: "/og-image.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterSite: "@coresportswears",
    twitterCreator: "@coresportswears",
    structuredData: true,
    headingHierarchy: true,
    internalLinks: true,
    imageAltTags: true,
    cleanUrls: true,
    breadcrumbs: true,
  },
  offPage: {
    enabled: true,
    sitemap: true,
    robotsTxt: true,
    canonicalTag: true,
    openGraph: true,
    twitterCards: true,
    schemaMarkup: true,
    hreflang: true,
    authorMeta: true,
    publishDate: true,
  },
};

// Schema.org structured data for the organization
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://coresportswears.com/#organization",
        name: "CORE SPORTSWEARS",
        url: "https://coresportswears.com",
        logo: {
          "@type": "ImageObject",
          url: "https://coresportswears.com/logo.png",
        },
        sameAs: [
          "https://www.facebook.com/coresportswear/",
          "https://twitter.com/coresportswears",
          "https://www.instagram.com/core_sportswears/",
          "https://www.linkedin.com/in/abid-nisar-39270429",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://coresportswears.com/#website",
        url: "https://coresportswears.com",
        name: "Core Sportswears",
        publisher: { "@id": "https://coresportswears.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://coresportswears.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://coresportswears.com/#webpage",
        url: "https://coresportswears.com/",
        name: "Best Sportswear Manufacturers In Pakistan | Core Sportswears",
        isPartOf: { "@id": "https://coresportswears.com/#website" },
        about: { "@id": "https://coresportswears.com/#organization" },
      },
    ],
  };
}

// BreadcrumbList schema
export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://coresportswears.com/",
      },
    ],
  };
}

// Product/Service schema
export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Sportswear Manufacturing",
    provider: {
      "@type": "Organization",
      name: "Core Sportswears",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sportswear Products",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Ski & Snow Wear",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ski Jackets" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Snowboard Pants" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Streetwear",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hoodies" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "T-Shirts" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Sportswear",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Basketball Jerseys" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Soccer Jerseys" } },
          ],
        },
      ],
    },
  };
}
