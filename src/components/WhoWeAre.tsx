export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block text-[var(--color-primary)] text-sm font-semibold mb-4">
              Who we are
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
              <p>
                You can be assured of receiving a superior level of service, quality
                workmanship, and fast turnaround times for all types of custom orders.
              </p>
              <p>
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

          {/* Right - Factory Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Factory/Workers Image Placeholder */}
              <div className="w-full h-[450px] bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">In-House Manufacturing Facility</p>
                    <p className="text-gray-400 text-sm">200+ Machines | Sialkot, Pakistan</p>
                  </div>
                </div>
                {/* Core badge overlay */}
                <div className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-xl font-bold">
                    <span className="text-[var(--color-primary)]">CORE</span>
                    <span className="text-gray-900 text-sm block">SPORTSWEARS</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
