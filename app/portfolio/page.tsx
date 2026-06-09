import React, { Suspense } from "react";
import { getCaseStudies } from "@/sanity/lib/client";
import PortfolioClient from "./PortfolioClient";

import { Metadata } from "next";

export const revalidate = 60; // ISR revalidation (60s)

export const metadata: Metadata = {
  title: "Case Studies | Codex Neural",
  description: "A selection of custom enterprise platforms, data pipelines, and intelligent products we have engineered.",
  alternates: {
    canonical: "https://codexneural.com/portfolio",
  },
  openGraph: {
    title: "Case Studies | Codex Neural",
    description: "A selection of custom enterprise platforms, data pipelines, and intelligent products we have engineered.",
    url: "https://codexneural.com/portfolio",
    type: "website",
  },
};

export default async function Portfolio() {
  const cases = await getCaseStudies();

  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans relative z-10">
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
                "name": "Portfolio",
                "item": "https://codexneural.com/portfolio"
              }
            ]
          })
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex-grow w-full">
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-muted leading-relaxed font-sans">
            A selection of custom enterprise platforms, data pipelines, and intelligent products we have engineered.
          </p>
        </div>

        {/* Suspense wrapper for client-side search query syncing */}
        <Suspense fallback={<div className="text-sm font-mono text-muted animate-pulse">Loading cases...</div>}>
          <PortfolioClient cases={cases} />
        </Suspense>
      </div>
    </main>
  );
}
