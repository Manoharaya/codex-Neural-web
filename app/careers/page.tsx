import React, { Suspense } from "react";
import { getJobOpenings } from "@/sanity/lib/client";
import CareersClient from "./CareersClient";

export const revalidate = 60; // ISR revalidation (60s)

export const metadata = {
  title: "Careers | Codex Neural",
  description: "Join Nepal's leading AI systems development studio. Explore open roles in systems architecture, deep model training, and frontend design.",
};

export default async function Careers() {
  const openings = await getJobOpenings();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans z-10">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex-grow w-full">
        
        {/* Culture Hero */}
        <section className="max-w-3xl mb-20">
          <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">Join the Network</p>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-foreground mb-6 leading-tight">
            Node Admittance
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed font-sans">
            We are a highly specialized distributed collective of systems engineers, compilers, and interface designers. We prioritize deep focus, architectural integrity, and healthy developer operations.
          </p>
        </section>

        {/* Suspense Wrapper for career search parameters */}
        <Suspense fallback={<div className="text-sm font-mono text-muted animate-pulse">Loading active job listings...</div>}>
          <CareersClient openings={openings} />
        </Suspense>
      </div>

    </main>
  );
}
