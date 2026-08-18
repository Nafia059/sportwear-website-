"use client";

import { howItWorksSteps } from "@/lib/navigation-data";

const stepColors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[var(--color-primary)] text-sm font-semibold mb-4 uppercase tracking-wider">
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
              className="relative bg-gray-50 rounded-2xl p-8 pt-12 border border-gray-100 hover:border-gray-200 transition-all group"
            >
              {/* Step Number Badge */}
              <div className={`absolute top-4 left-4 w-12 h-12 ${stepColors[idx]} text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg`}>
                {step.step}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
