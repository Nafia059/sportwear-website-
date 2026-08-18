"use client";

import { stats } from "@/lib/navigation-data";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--color-primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              PRIVATE LABEL &bull; SIALKOT PAKISTAN
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Custom Sports{" "}
              <br />
              Apparel{" "}
              <br />
              <span className="text-[var(--color-primary)]">Manufacturer</span>{" "}
              for{" "}
              <br />
              Global Brands
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
                { icon: "✓", text: "No MOQ for First Trial" },
                { icon: "✓", text: "Sample 5-7 Days" },
                { icon: "✓", text: "Bulk 15-25 Days" },
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  {tag.text}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-3">
              {["In-house Printing", "Embroidery", "Export Ready"].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Product Image Collage */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Main product image */}
              <div className="absolute top-0 right-0 w-72 h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-green-500/80 to-green-700/80 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="text-6xl mb-4">🎿</div>
                    <p className="font-bold text-lg">Ski & Snow Wear</p>
                    <p className="text-sm opacity-80">Premium Quality</p>
                  </div>
                </div>
              </div>
              {/* Secondary image */}
              <div className="absolute top-20 left-0 w-64 h-72 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/80 to-blue-700/80 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="text-6xl mb-4">👕</div>
                    <p className="font-bold text-lg">Sportswear</p>
                    <p className="text-sm opacity-80">Custom Designs</p>
                  </div>
                </div>
              </div>
              {/* Third image */}
              <div className="absolute bottom-10 right-10 w-56 h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/80 to-purple-700/80 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="text-6xl mb-4">🧥</div>
                    <p className="font-bold text-lg">Streetwear</p>
                    <p className="text-sm opacity-80">Private Label</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-0 left-10 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Private Label</p>
                    <p className="text-xs text-gray-500">Custom Manufacturing</p>
                    <p className="text-xs text-gray-500">Export Ready</p>
                  </div>
                </div>
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
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
