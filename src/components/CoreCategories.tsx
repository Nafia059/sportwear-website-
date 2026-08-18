"use client";

import Link from "next/link";
import { categories } from "@/lib/navigation-data";

const categoryGradients: Record<string, string> = {
  snowflake: "from-cyan-500 to-blue-600",
  shirt: "from-purple-500 to-pink-600",
  trophy: "from-orange-500 to-red-600",
  briefcase: "from-green-500 to-emerald-600",
};

export default function CoreCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[var(--color-primary)] text-sm font-semibold mb-4">
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
            const gradient = categoryGradients[category.icon] || "from-gray-500 to-gray-600";
            return (
              <Link
                key={idx}
                href={category.href}
                className="category-card group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[var(--color-primary)]/30"
              >
                {/* Image Placeholder */}
                <div className={`relative h-56 bg-gradient-to-br ${gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs opacity-80">{category.title}</p>
                    </div>
                  </div>
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
