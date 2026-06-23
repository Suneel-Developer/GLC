"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/why", label: "Why Ashford Hale" },
    { href: "/analytics", label: "Analytics" },
    { href: "/payroll", label: "Payroll" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? "rgba(247, 245, 255, 0.72)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.3)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-300 flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-base sm:text-lg font-bold tracking-tight"
        >
        Ashford Hale
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm transition-all hover:text-[#2b2b2b] ${
                isActive(item.href) ? "font-semibold" : "text-soft"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-[#2b2b2b]/40" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/book-a-demo"
            className="rounded-full border border-foreground/30 px-6 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          menuOpen
            ? "max-h-100 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
        style={{
          background: "rgba(247, 245, 255, 0.85)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="px-8 pb-6 pt-2 space-y-4">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-sm py-1 transition-colors ${
                  isActive(item.href)
                    ? "text-[#2b2b2b] font-semibold"
                    : "text-muted hover:text-[#2b2b2b]"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}

          <div className="pt-2">
            <Link
              href="/book-a-demo"
              onClick={() => setMenuOpen(false)}
              className="block text-center rounded-full bg-[#2b2b2b] px-5 py-2.5 text-sm font-medium text-white/90"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
