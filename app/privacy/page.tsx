"use client";

import Link from "next/link";

export default function Privacy() {
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
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 flex-grow">
        <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Compliance & Disclosures</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate max-w-none text-muted leading-relaxed space-y-6 text-sm md:text-base">
          <p><em>Last updated: June 10, 2026</em></p>
          
          <h2 className="text-xl font-bold text-foreground mt-8">1. Information Collection</h2>
          <p>
            We collect information you provide directly to us, such as when you submit a project scoping inquiry, request services, or send us communications. This may include your name, email, company, and project details.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">2. Use of Information</h2>
          <p>
            We use collected data solely to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Process and reply to your inbound inquiries.</li>
            <li>Maintain, analyze, and optimize our website experience.</li>
            <li>Deliver corporate newsletters and insights if you explicitly opt-in.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">3. Data Sharing</h2>
          <p>
            We do not share, sell, or rent your personal information to third parties. We only share details with trusted infrastructure providers (such as hosting nodes) required to run the website services.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">4. Cookie Policy</h2>
          <p>
            This website utilizes minimal session cookies for basic security controls and analytical operations.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">5. Inquiries</h2>
          <p>
            For any privacy inquiries or request to wipe personal form records, please contact us at: <strong>connect@codexneural.com</strong>.
          </p>
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
