"use client";

import { stats } from "@/lib/navigation-data";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              PRIVATE LABEL &bull; SIALKOT PAKISTAN
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Custom Sports Apparel Manufacturer for Global Brands
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Custom ski & snow wear, sportswear, streetwear and bags for brands, teams,
              wholesalers and private label buyers. In-house production, premium quality
              control, and export-ready service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/contact-us" className="btn-primary text-base px-8 py-3">
                Request A Quote
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=923328624992&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-8 py-3"
              >
                WhatsApp Us
              </a>
            </div>

            <p className="text-gray-400 text-sm mb-8">
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
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">✓</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Placeholder for Product Images */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[450px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
              {/* 
                PLACEHOLDER: Replace this div with your product images
                Upload images to public/ folder and use:
                <Image src="/your-image.webp" alt="Description" fill className="object-cover rounded-2xl" />
              */}
              <div className="text-center text-white/50">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Product Images Placeholder</p>
                <p className="text-xs mt-1">Upload to public/ folder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/20 hover:bg-white/20 transition-all"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-300 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="w-full h-auto">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
