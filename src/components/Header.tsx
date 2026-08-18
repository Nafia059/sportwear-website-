"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationData, NavItem } from "@/lib/navigation-data";

function DropdownMenu({ item }: { item: NavItem }) {
  return (
    <div className="mega-menu absolute top-full left-0 bg-white shadow-2xl border-t-2 border-[var(--color-primary)] z-50 min-w-[220px]">
      <div className="py-3">
        {item.children?.map((child, idx) => (
          <div key={idx}>
            <Link
              href={child.href}
              className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors"
            >
              {child.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between h-[90px]">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 mr-8">
              <Image
                src="/Core-Sports-Logo.webp"
                alt="Core Sportswears"
                width={200}
                height={70}
                className="h-[70px] w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
              {navigationData.map((item, idx) => (
                <div key={idx} className="nav-item relative">
                  <Link
                    href={item.href}
                    className="text-[13px] font-semibold text-gray-800 hover:text-[var(--color-primary)] transition-colors flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"
                  >
                    {item.label}
                    {item.children && (
                      <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.children && <DropdownMenu item={item} />}
                </div>
              ))}
            </nav>

            {/* Search */}
            <div className="hidden lg:flex items-center ml-6">
              <button className="p-2 text-gray-500 hover:text-[var(--color-primary)]">
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
