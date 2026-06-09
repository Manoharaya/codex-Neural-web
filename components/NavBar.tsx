"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenu(false);
    setServicesDropdown(false);
    setCompanyDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-gray-200 py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group select-none">
          <svg
            className="w-8 h-8 text-primary transition-transform duration-500 group-hover:rotate-180"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 16L16 10L22 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 10V22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M10 16L22 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="16" cy="10" r="3" fill="#14B8A6" stroke="currentColor" strokeWidth="2" />
            <circle cx="10" cy="16" r="3" fill="#F8FAFC" stroke="currentColor" strokeWidth="2" />
            <circle cx="22" cy="16" r="3" fill="#F8FAFC" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="22" r="3" fill="#F8FAFC" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-mono text-xl font-black tracking-tighter text-foreground uppercase">
            CODEX<span className="text-primary font-light">NEURAL</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button className="hover:text-foreground transition-colors duration-300 py-2 flex items-center gap-1">
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesDropdown && (
              <div className="absolute top-full left-0 w-64 bg-surface border border-gray-200 rounded-xl shadow-lg p-4 grid gap-2 z-50 animate-fade-in-up">
                <Link
                  href="/services/ai-ml"
                  className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors"
                >
                  🧠 AI & Machine Learning
                </Link>
                <Link
                  href="/services/web-development"
                  className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors"
                >
                  💻 Web Development
                </Link>
                <Link
                  href="/services/app-development"
                  className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors"
                >
                  📱 Mobile App Development
                </Link>
                <Link
                  href="/services/system-software"
                  className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors"
                >
                  ⚙️ Systems & Software
                </Link>
                <Link
                  href="/services/ui-ux"
                  className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors"
                >
                  🎨 UI/UX Design Studio
                </Link>
                <Link
                  href="/services/web3-blockchain"
                  className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors"
                >
                  🔗 Blockchain & Web3
                </Link>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyDropdown(true)}
            onMouseLeave={() => setCompanyDropdown(false)}
          >
            <button className="hover:text-foreground transition-colors duration-300 py-2 flex items-center gap-1">
              Company
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  companyDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {companyDropdown && (
              <div className="absolute top-full left-0 w-48 bg-surface border border-gray-200 rounded-xl shadow-lg p-4 grid gap-2 z-50 animate-fade-in-up">
                <Link
                  href="/about"
                  className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/privacy"
                  className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            className={`hover:text-foreground transition-colors duration-300 py-2 ${
              pathname.startsWith("/portfolio") ? "text-foreground font-semibold" : ""
            }`}
          >
            Work
          </Link>
          <Link
            href="/blog"
            className={`hover:text-foreground transition-colors duration-300 py-2 ${
              pathname.startsWith("/blog") ? "text-foreground font-semibold" : ""
            }`}
          >
            Insights
          </Link>
        </nav>

        {/* Action Button CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-[#0c5953] transition-all duration-300 shadow-sm hover:shadow-premium min-h-[44px]"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile menu hamburger toggle button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden p-2 text-foreground focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenu && (
        <div className="fixed inset-0 top-[73px] bg-background/95 backdrop-blur-md z-40 flex flex-col p-6 animate-fade-in-up md:hidden border-t border-gray-100">
          <nav className="flex flex-col gap-6 text-lg font-bold text-foreground mb-8">
            <Link href="/services" onClick={() => setMobileMenu(false)} className="hover:text-primary">
              Services
            </Link>
            <Link href="/portfolio" onClick={() => setMobileMenu(false)} className="hover:text-primary">
              Work
            </Link>
            <Link href="/about" onClick={() => setMobileMenu(false)} className="hover:text-primary">
              About Us
            </Link>
            <Link href="/careers" onClick={() => setMobileMenu(false)} className="hover:text-primary">
              Careers
            </Link>
            <Link href="/blog" onClick={() => setMobileMenu(false)} className="hover:text-primary">
              Insights
            </Link>
            <Link href="/privacy" onClick={() => setMobileMenu(false)} className="hover:text-primary">
              Privacy Policy
            </Link>
          </nav>
          <Link
            href="/contact"
            onClick={() => setMobileMenu(false)}
            className="w-full py-4 bg-primary text-white text-center font-bold rounded-lg hover:bg-[#0c5953] transition-all min-h-[48px] flex items-center justify-center"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
