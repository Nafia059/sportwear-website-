"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/lib/navigation-data";

const iconMap: Record<string, React.ReactNode> = {
  snowflake: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20m5-17l-5 5-5-5m10 7l-5 5-5-5" />
    </svg>
  ),
  shirt: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10l1-7h2a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h2l1 7z" />
    </svg>
  ),
  trophy: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 9H4.5a2.5 2.5 0 010-5H6m12 5h1.5a2.5 2.5 0 000-5H18M9 22V12m6 10V12M9 12h6a2 2 0 002-2V4H7v6a2 2 0 002 2z" />
    </svg>
  ),
  briefcase: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function CoreCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold px-4 py-2 rounded-full mb-4">
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
          {categories.map((category, idx) => (
            <Link
              key={idx}
              href={category.href}
              className="category-card group bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-[var(--color-primary)]/30"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                {iconMap[category.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {category.description}
              </p>
              <span className="text-[var(--color-primary)] font-semibold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                Explore Category
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
