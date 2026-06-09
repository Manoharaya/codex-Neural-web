"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full border-t border-gray-200 bg-surface z-10 relative pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        
        {/* Column 1: Branding & Description */}
        <div className="col-span-2 md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-2 group select-none w-fit">
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
          <p className="text-xs text-muted leading-relaxed max-w-[240px]">
            Building software that lasts. We engineer durable digital infrastructure for global business scales.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Manoharaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-muted hover:text-primary transition-colors font-mono"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/codexneural"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-muted hover:text-primary transition-colors font-mono"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">Navigation</h4>
          <ul className="space-y-2 text-xs text-muted font-sans">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-primary transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-primary transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Engineering Domains */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">Capabilities</h4>
          <ul className="space-y-2 text-xs text-muted font-sans">
            <li>
              <Link href="/services/ai-ml" className="hover:text-primary transition-colors">
                AI & Machine Learning
              </Link>
            </li>
            <li>
              <Link href="/services/web-development" className="hover:text-primary transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/app-development" className="hover:text-primary transition-colors">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/services/system-software" className="hover:text-primary transition-colors">
                Systems Software
              </Link>
            </li>
            <li>
              <Link href="/services/ui-ux" className="hover:text-primary transition-colors">
                UI/UX Design Studio
              </Link>
            </li>
            <li>
              <Link href="/services/web3-blockchain" className="hover:text-primary transition-colors">
                Blockchain & Web3
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Contact */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">Newsletter</h4>
          {subscribed ? (
            <div className="p-3 bg-tint border border-primary/20 text-primary text-[10px] font-semibold rounded-lg">
              🎉 Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Join the newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-background border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-foreground"
              />
              <button
                type="submit"
                className="w-full py-2 bg-primary text-white text-[10px] font-bold rounded-lg hover:bg-[#0c5953] transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
          <div className="pt-2 text-xs text-muted font-mono leading-relaxed space-y-1">
            <p>📍 Maitidevi, Kathmandu, Nepal</p>
            <p>📧 contact@codexneural.com</p>
            <p>
              <Link href="/privacy" className="text-[10px] underline hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Footer Credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-muted">
        <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
        <p>BUILT WITH RESILIENCE // GLOBAL ENGINEERING SHIFT</p>
      </div>
    </footer>
  );
}
