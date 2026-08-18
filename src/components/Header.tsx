"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +92 339 8624992
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              coresportswears@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Sialkot, Pakistan
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              English
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/Core-Sports-Logo.webp"
                alt="Core Sportswears - Manufacturer & exporter of Customised Sport Apparel"
                width={180}
                height={60}
                className="h-14 w-auto"
                priority
              />
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

            {/* Language + Search */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="p-2 text-gray-600 hover:text-[var(--color-primary)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>

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
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/Core-Sports-Logo.webp" alt="Core Sportswears" width={140} height={45} className="h-10 w-auto" />
            </Link>
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
