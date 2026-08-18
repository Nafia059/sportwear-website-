export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="text-[var(--color-primary)] text-sm font-semibold mb-4">
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

          {/* Right - Placeholder for Factory Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 h-[450px] flex items-center justify-center">
              {/* 
                PLACEHOLDER: Replace with your factory image
                Upload to public/ folder and use:
                <Image src="/factory.webp" alt="Factory" fill className="object-cover" />
              */}
              <div className="text-center text-gray-400">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium text-gray-500">Factory Image Placeholder</p>
                <p className="text-xs mt-1 text-gray-400">Upload to public/ folder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
