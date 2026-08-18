"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationData, NavItem } from "@/lib/navigation-data";

function MegaMenuDropdown({ item }: { item: NavItem }) {
  return (
    <div className="mega-menu absolute top-full left-0 w-full bg-white shadow-2xl border-t-2 border-[var(--color-primary)] z-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-8">
          {item.children?.map((child, idx) => (
            <div key={idx}>
              <Link
                href={child.href}
                className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide hover:text-[var(--color-primary)] transition-colors"
              >
                {child.label}
              </Link>
              {child.children && (
                <ul className="space-y-2">
                  {child.children.map((subChild, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        href={subChild.href}
                        className="text-sm text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                      >
                        {subChild.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[var(--color-secondary)] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>📞 +92 339 8624992</span>
            <span>✉️ coresportswears@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span>📍 Sialkot, Pakistan</span>
            <span>|</span>
            <span>🌐 English</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-[var(--color-primary)]">CORE</span>
                <span className="text-[var(--color-secondary)]"> SPORTSWEARS</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationData.map((item, idx) => (
                <div key={idx} className="nav-item relative group">
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    {item.children && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.children && <MegaMenuDropdown item={item} />}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`overlay fixed inset-0 bg-black/50 z-50 lg:hidden ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`mobile-menu fixed top-0 left-0 w-80 h-full bg-white z-50 overflow-y-auto lg:hidden ${mobileOpen ? "open" : ""}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold">
              <span className="text-[var(--color-primary)]">CORE</span>
              <span className="text-[var(--color-secondary)]"> SPORTS</span>
            </div>
            <button onClick={() => setMobileOpen(false)} className="p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-1">
            {navigationData.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 rounded-lg flex-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setExpandedItem(expandedItem === idx ? null : idx)}
                      className="p-2"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${expandedItem === idx ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && expandedItem === idx && (
                  <div className="pl-6 py-2 space-y-1">
                    {item.children.map((child, childIdx) => (
                      <Link
                        key={childIdx}
                        href={child.href}
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-[var(--color-primary)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
