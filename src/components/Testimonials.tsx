"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/lib/navigation-data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="py-20 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            What They Say About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-12 text-center relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-8 text-6xl text-[var(--color-primary)] opacity-30 font-serif">
                      &ldquo;
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                        <div className="w-full h-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] font-bold text-xl">
                          {testimonial.author[0]}
                        </div>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-all hidden md:flex"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-all hidden md:flex"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === idx
                    ? "bg-[var(--color-primary)] w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
