import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Codex Neural",
  description: "Terms governing website usage, software scoping agreements, and intellectual property limits under Nepal jurisdiction.",
  alternates: {
    canonical: "https://codexneural.com/terms",
  },
  openGraph: {
    title: "Terms of Service | Codex Neural",
    description: "Terms governing website usage, software scoping agreements, and intellectual property limits under Nepal jurisdiction.",
    url: "https://codexneural.com/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://codexneural.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Terms of Service",
                "item": "https://codexneural.com/terms"
              }
            ]
          })
        }}
      />

      <main id="main-content" className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans relative z-10">
        
        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 flex-grow w-full">
          <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">Legal Agreement</p>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-slate max-w-none text-muted leading-relaxed space-y-6 text-sm md:text-base font-sans">
            <p className="font-mono text-xs"><em>Last updated: June 10, 2026</em></p>
          
          <h2 className="text-xl font-bold font-heading text-foreground mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing the digital channels of Codex Neural Labs Private Limited (&quot;Codex Neural&quot;), you acknowledge complete compliance with these terms and conditions.
          </p>

          <h2 className="text-xl font-bold font-heading text-foreground mt-8">2. Intellectual Property</h2>
          <p>
            All custom components, network visualizers, style sheets, copy structures, and codebase properties rendered on this site are the sole intellectual property of Codex Neural. You may not distribute, reproduce, or modify our code components without explicit written licensing.
          </p>

          <h2 className="text-xl font-bold font-heading text-foreground mt-8">3. Limitation of Liability</h2>
          <p>
            We deliver the website properties and code diagnosis logs &quot;as is&quot; without explicit warranties. In no event shall Codex Neural be held liable for any loss of database records, server downtime, or transactional complications resulting from website usage or scoping form processing.
          </p>

          <h2 className="text-xl font-bold font-heading text-foreground mt-8">4. Scoping & Project Contracts</h2>
          <p>
            Submitting a project brief via the inbound form does not constitute a binding contract. Formal software engineering scopes, deliverables, timelines, and payment contracts are executed separately under signature-backed Master Service Agreements (MSAs).
          </p>

          <h2 className="text-xl font-bold font-heading text-foreground mt-8">5. Governing Law & Jurisdiction</h2>
          <p>
            These terms of service and any disputes regarding site operations are governed solely by the laws of <strong>Nepal</strong>. Any legal claims must be filed within courts located in Kathmandu, Nepal.
          </p>
        </div>
      </div>

    </main>
    </>
  );
}
