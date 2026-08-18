"use client";

import { useSEO } from "./SEOProvider";

export default function SEOControlPanel() {
  const {
    config,
    toggleOnPage,
    toggleOffPage,
    toggleOnPageMaster,
    toggleOffPageMaster,
    updateTitle,
    updateDescription,
  } = useSEO();

  return (
    <div className="fixed bottom-24 right-5 z-40">
      <details className="group">
        <summary className="cursor-pointer bg-[var(--color-primary)] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--color-primary-dark)] transition-colors list-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </summary>

        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-[var(--color-secondary)] text-white p-4">
            <h3 className="font-bold text-lg">SEO Control Panel</h3>
            <p className="text-sm text-gray-300">Toggle on-page & off-page SEO</p>
          </div>

          <div className="p-4 max-h-96 overflow-y-auto">
            {/* On-Page SEO */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  On-Page SEO
                </h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.onPage.enabled}
                    onChange={(e) => toggleOnPageMaster(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]" />
                </label>
              </div>

              {config.onPage.enabled && (
                <div className="space-y-3 pl-4 border-l-2 border-gray-100">
                  {/* Title Input */}
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">Page Title</label>
                    <input
                      type="text"
                      value={config.onPage.title}
                      onChange={(e) => updateTitle(e.target.value)}
                      className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>

                  {/* Description Input */}
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">Meta Description</label>
                    <textarea
                      value={config.onPage.description}
                      onChange={(e) => updateDescription(e.target.value)}
                      rows={2}
                      className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>

                  {/* Toggle Items */}
                  {(
                    [
                      ["structuredData", "Structured Data (JSON-LD)"],
                      ["headingHierarchy", "Heading Hierarchy (H1-H6)"],
                      ["internalLinks", "Internal Linking"],
                      ["imageAltTags", "Image Alt Tags"],
                      ["cleanUrls", "Clean URL Structure"],
                      ["breadcrumbs", "Breadcrumbs Navigation"],
                    ] as const
                  ).map(([key, label]) => (
                    <ToggleItem
                      key={key}
                      label={label}
                      checked={config.onPage[key]}
                      onChange={() => toggleOnPage(key)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Off-Page SEO */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Off-Page SEO
                </h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.offPage.enabled}
                    onChange={(e) => toggleOffPageMaster(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]" />
                </label>
              </div>

              {config.offPage.enabled && (
                <div className="space-y-3 pl-4 border-l-2 border-gray-100">
                  {(
                    [
                      ["sitemap", "XML Sitemap"],
                      ["robotsTxt", "Robots.txt"],
                      ["canonicalTag", "Canonical URL Tag"],
                      ["openGraph", "Open Graph (Facebook/LinkedIn)"],
                      ["twitterCards", "Twitter Cards"],
                      ["schemaMarkup", "Schema.org Markup"],
                      ["hreflang", "Hreflang Tags (Multi-language)"],
                      ["authorMeta", "Author Meta Tag"],
                      ["publishDate", "Publish Date Meta"],
                    ] as const
                  ).map(([key, label]) => (
                    <ToggleItem
                      key={key}
                      label={label}
                      checked={config.offPage[key]}
                      onChange={() => toggleOffPage(key)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Preview Info */}
          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Changes apply in real-time. Toggle features on/off to control SEO output.
            </p>
          </div>
        </div>
      </details>
    </div>
  );
}

function ToggleItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span className="text-sm text-gray-700 group-hover:text-gray-900">{label}</span>
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--color-primary)]" />
      </div>
    </label>
  );
}
