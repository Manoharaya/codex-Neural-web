import React, { Suspense } from "react";
import { getCaseStudies } from "@/sanity/lib/client";
import PortfolioClient from "./PortfolioClient";

export const revalidate = 60; // ISR revalidation (60s)

export const metadata = {
  title: "Case Studies | Codex Neural",
  description: "A selection of custom enterprise platforms, data pipelines, and intelligent products we have engineered.",
};

export default async function Portfolio() {
  const cases = await getCaseStudies();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans relative z-10">
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
