export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Motto: <span className="text-[var(--color-primary)]">&ldquo;Quality Is Everything&rdquo;</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We are manufacturers and exporters of high-quality sportswear and streetwear
                product ranges. Our company produces custom designs and sizes according to
                customer requirements. We provide a full range of services, including sample
                making, marking, grading, stitching, and shipping. No order is too big or too small.
              </p>
              <p>
                We understand that each customer&apos;s needs are unique. We take the time to
                understand your requirements and ensure that the products we design for you
                meet your expectations. We have a skilled stitching and development team,
                along with over 200 machines, including flatlock, overlock, single-needle,
                bar tack, trimming, cutting, embroidery, and sublimation printing machines.
              </p>
              <p>
                We have in-house screen printing, sublimation printing, computerized
                embroidery, artwork design, and digitizing facilities. We also offer custom
                labels and tags, leather patches, custom-printed poly bags, PVC and rubber
                logos, tag cards, and custom fabrics.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-gray-700">
                For more information, please email us at{" "}
                <a
                  href="mailto:coresportswears@gmail.com"
                  className="text-[var(--color-primary)] font-semibold hover:underline"
                >
                  coresportswears@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🏭", title: "In-House Production", desc: "200+ machines for complete manufacturing" },
              { icon: "🎨", title: "Custom Design", desc: "Tech packs, logos, artwork & sample details" },
              { icon: "✅", title: "Quality Control", desc: "Premium standards at every stage" },
              { icon: "🌍", title: "Export Ready", desc: "Global shipping with proper documentation" },
              { icon: "🧵", title: "Full Service", desc: "Sample making to final delivery" },
              { icon: "⚡", title: "Fast Turnaround", desc: "Samples in 5-7 days, bulk in 15-25 days" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:bg-[var(--color-primary)]/5 transition-colors border border-gray-100"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
