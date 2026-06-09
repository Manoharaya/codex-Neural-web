import React, { Suspense } from "react";
import { getJobOpenings } from "@/sanity/lib/client";
import CareersClient from "./CareersClient";

import { Metadata } from "next";

export const revalidate = 60; // ISR revalidation (60s)

export const metadata: Metadata = {
  title: "Careers | Codex Neural",
  description: "Join Nepal's leading AI systems development studio. Explore open roles in systems architecture, deep model training, and frontend design.",
  alternates: {
    canonical: "https://codexneural.com/careers",
  },
  openGraph: {
    title: "Careers | Codex Neural",
    description: "Join Nepal's leading AI systems development studio. Explore open roles in systems architecture, deep model training, and frontend design.",
    url: "https://codexneural.com/careers",
    type: "website",
  },
};

export default async function Careers() {
  const openings = await getJobOpenings();

  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans z-10">
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
                "name": "Careers",
                "item": "https://codexneural.com/careers"
              }
            ]
          })
        }}
      />
      
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

        {/* Culture statement */}
        <section className="mb-24 max-w-4xl">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Our Workplace</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">Why Work at Codex Neural?</h2>
          </div>
          <div className="text-sm md:text-base text-muted leading-relaxed space-y-6 font-sans">
            <p>
              At Codex Neural, we are building a world-class systems collective based in the historic capital of Kathmandu, Nepal, operating on a global scale. We believe that top-tier engineering talent deserves an environment focused on deep work, continuous intellectual growth, and high operational trust.
            </p>
            <p>
              We are a remote-first company, giving you the freedom to design your optimal workspace. But we are also deeply connected to the vibrant Kathmandu technology scene, hosting regular engineering syncs, whiteboard sessions, and collaborative hackathons. Our culture rejects micro-management and busywork. Instead, we measure engineering excellence by the durability, security, and performance of the code bases we deliver.
            </p>
            <p>
              When you join our team, you receive a dedicated learning budget for books, technical courses, and conference tickets. You will work alongside experienced mentors who specialize in low-latency Go microservices, Solidity contract audits, and advanced machine learning modeling. Here, you won&apos;t build throwaway prototypes; you will engineer resilient systems that power real-world operations for enterprise global clients.
            </p>
          </div>
        </section>

        {/* Suspense Wrapper for career search parameters */}
        <Suspense fallback={<div className="text-sm font-mono text-muted animate-pulse">Loading active job listings...</div>}>
          <CareersClient openings={openings} />
        </Suspense>
      </div>

    </main>
  );
}
