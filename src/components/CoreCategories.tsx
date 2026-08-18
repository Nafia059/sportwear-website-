"use client";

import Link from "next/link";
import { categories } from "@/lib/navigation-data";

const categoryImages: Record<string, { gradient: string; emoji: string }> = {
  snowflake: { gradient: "from-cyan-400 to-blue-600", emoji: "🎿" },
  shirt: { gradient: "from-purple-400 to-pink-600", emoji: "👕" },
  trophy: { gradient: "from-orange-400 to-red-600", emoji: "⚽" },
  briefcase: { gradient: "from-green-400 to-emerald-600", emoji: "🎒" },
};

export default function CoreCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-[var(--color-primary)] text-sm font-semibold mb-4">
            Our Core Categories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Manufacture
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From high-performance ski wear to trendy streetwear, we deliver quality
            sportswear tailored to your brand&apos;s needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => {
            const catStyle = categoryImages[category.icon] || categoryImages.trophy;
            return (
              <Link
                key={idx}
                href={category.href}
                className="category-card group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[var(--color-primary)]/30"
              >
                {/* Product Image */}
                <div className={`relative h-56 bg-gradient-to-br ${catStyle.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                      {catStyle.emoji}
                    </span>
                  </div>
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors uppercase">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <span className="text-[var(--color-primary)] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Category
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
