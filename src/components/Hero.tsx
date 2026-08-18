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

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              PRIVATE LABEL &bull; SIALKOT PAKISTAN
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Custom Sports Apparel{" "}
              <span className="text-[var(--color-primary)]">Manufacturer</span>{" "}
              for Global Brands
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Custom ski & snow wear, sportswear, streetwear and bags for brands, teams,
              wholesalers and private label buyers. In-house production, premium quality
              control, and export-ready service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="/contact-us" className="btn-primary text-lg">
                Request A Quote
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=923328624992&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-lg"
              >
                WhatsApp Us
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              Send your tech pack, logo, artwork, measurement sheet, or reference image
            </p>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
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
