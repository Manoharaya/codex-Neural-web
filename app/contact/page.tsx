"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    budget: "$10k - $25k",
    brief: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-mono text-xl font-black tracking-tighter text-foreground uppercase">
            CODEX<span className="text-primary font-light">NEURAL</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
            <Link href="/services" className="hover:text-foreground transition-colors duration-300">Services</Link>
            <Link href="/portfolio" className="hover:text-foreground transition-colors duration-300">Work</Link>
            <Link href="/about" className="hover:text-foreground transition-colors duration-300">About</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Context & Scheduler */}
        <div>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Initiate Connection</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Let&apos;s Build Together
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-10">
            Have a project in mind? Fill out the scoping form, or book a 15-minute consultation directly with our engineering team.
          </p>

          {/* Cal.com Placeholder */}
          <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm mb-8">
            <h3 className="text-md font-bold text-foreground mb-2">Secondary Option: Scoping Call</h3>
            <p className="text-sm text-muted mb-4">Book a slot on our calendar to discuss architecture and requirements.</p>
            <a
              href="https://cal.com/codexneural/scoping"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary text-sm font-semibold rounded-lg hover:bg-tint/30 transition-all"
            >
              Open Scheduler
            </a>
          </div>

          {/* Corporate Details */}
          <div className="text-sm font-mono text-muted space-y-2">
            <p><strong>GLOBAL HQ:</strong> Kathmandu, Nepal</p>
            <p><strong>EMAIL:</strong> connect@codexneural.com</p>
            <p><strong>WHATSAPP:</strong> +977 9840327185</p>
          </div>
        </div>

        {/* Right Column: Multi-Step Scoping Form */}
        <div className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-6">Inbound Scoping Form</h2>
          {submitted ? (
            <div className="p-4 bg-tint/20 border border-primary/20 text-primary rounded-lg text-sm font-medium">
              Thank you! Your inquiry has been received. Our team will get back to you within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary text-foreground"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary text-foreground"
                  placeholder="e.g. john@organization.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Organization</label>
                <input
                  type="text"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary text-foreground"
                  placeholder="e.g. Acme Corp"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary text-foreground"
                >
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Project Brief</label>
                <textarea
                  required
                  rows={4}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary text-foreground resize-none"
                  placeholder="Describe your goals, tech stack, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-[#0d645e] transition-colors shadow-sm"
              >
                Submit Scoping Request
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
        <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
        <p>ESTABLISHED IN NEPAL // GLOBAL OPERATIONS</p>
      </footer>
    </main>
  );
}
