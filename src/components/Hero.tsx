"use client";

import { stats } from "@/lib/navigation-data";

export default function Hero() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight uppercase">
              Custom Sports Apparel Manufacturer for Global Brands
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Custom ski & snow wear, sportswear, streetwear and bags for brands, teams,
              wholesalers and private label buyers. In-house production, premium quality
              control, and export-ready service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <a href="/contact-us" className="bg-green-600 hover:bg-green-700 text-white text-base font-semibold px-8 py-3 rounded-lg transition-colors">
                Request A Quote
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=923328624992&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold text-base"
              >
                WhatsApp Us
              </a>
            </div>

            <p className="text-gray-500 text-sm mb-8">
              Send your tech pack, logo, artwork, measurement sheet, or reference image
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "No MOQ for First Trial",
                "Sample 5-7 Days",
                "Bulk 15-25 Days",
                "In-house Printing",
                "Embroidery",
                "Export Ready",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-full border border-gray-200"
                >
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">✓</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Placeholder for Product Images */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[450px] bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center">
              {/* 
                PLACEHOLDER: Replace with your product images
                Upload to public/ folder and use:
                <Image src="/hero-products.webp" alt="Products" fill className="object-contain" />
              */}
              <div className="text-center text-gray-400">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium text-gray-500">Product Images Placeholder</p>
                <p className="text-xs mt-1 text-gray-400">Upload to public/ folder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
