import React from "react";

export const metadata = {
  title: "Privacy Policy | Codex Neural",
  description: "Disclosures regarding data collection, minimization, Minimal session cookies, and third-party analytical audits (GA4, Hotjar).",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans relative z-10">
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 flex-grow w-full">
        <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">Compliance & Disclosures</p>
        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate max-w-none text-muted leading-relaxed space-y-6 text-sm md:text-base font-sans">
          <p className="font-mono text-xs"><em>Last updated: June 10, 2026</em></p>
          
          <h2 className="text-xl font-bold font-heading text-foreground mt-8">1. Information Collection</h2>
          <p>
            We collect personal records you provide directly to our engineering workspace when submitting scoping requests, mailing lists, or applying for vacancies. This includes names, email IDs, company entities, estimated budgets, and project outlines.
          </p>

          <h2 className="text-xl font-bold font-heading text-foreground mt-8">2. Analytical Auditing</h2>
          <p>
            To evaluate website performance and UI constraints, we utilize third-party analytical suites:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Google Analytics (GA4):</strong> Aggregates traffic patterns, referral sources, and page hits without logging permanent IP addresses.</li>
            <li><strong>Hotjar:</strong> Records screen interactions and heatmaps anonymously to optimize button touch targets and readability.</li>
          </ul>

          <h2 className="text-xl font-bold font-heading text-foreground mt-8">3. Cookie Policy & GDPR</h2>
          <p>
            In compliance with GDPR constraints:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>We serve minimal session cookies for layout states, security authorization token headers, and analytical audit tracking.</li>
            <li>Users can decline non-essential tracking via our Cookie Banner options.</li>
            <li>Your personal details are stored inside secure encrypted databases, and are never shared, sold, or rented.</li>
          </ul>

          <h2 className="text-xl font-bold font-heading text-foreground mt-8">4. Data Erasure</h2>
          <p>
            You retain complete rights to view, correct, or request total erasure of your scoping form inputs or email details from our network servers.
          </p>
          <p>
            For any queries or data request actions, contact our compliance node directly at: <strong>connect@codexneural.com</strong>.
          </p>
        </div>
      </div>

    </main>
  );
}
