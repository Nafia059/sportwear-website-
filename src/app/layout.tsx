import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  ],
  openGraph: {
    title: "Best Sportswear Manufacturers In Pakistan | Core Sportswears",
    description:
      "Leading sportswear manufacturers in Pakistan offering custom activewear, teamwear & sports apparel with quality fabrics, fast turnaround & bulk pricing.",
    url: "https://coresportswears.com",
    siteName: "Core Sportswears",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sportswear Manufacturers In Pakistan | Core Sportswears",
    description:
      "Leading sportswear manufacturers in Pakistan offering custom activewear, teamwear & sports apparel with quality fabrics, fast turnaround & bulk pricing.",
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
  alternates: {
    canonical: "https://coresportswears.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
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
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
