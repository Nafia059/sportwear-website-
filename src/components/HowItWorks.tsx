"use client";

import { howItWorksSteps } from "@/lib/navigation-data";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Idea To Bulk Production
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures your custom sportswear is manufactured
            to perfection, from concept to delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howItWorksSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[var(--color-primary)]/30 transition-all group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--color-primary)] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                {step.step}
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {idx < howItWorksSteps.length - 1 && idx % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[var(--color-primary)]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
