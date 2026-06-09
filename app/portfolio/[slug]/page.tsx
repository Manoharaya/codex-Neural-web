"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

interface CaseStudyDetail {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  outcomes: string;
  tech: string[];
}

const caseDetailsMap: Record<string, CaseStudyDetail> = {
  "enterprise-saas": {
    title: "Enterprise SaaS Migration",
    client: "Optima Health",
    challenge: "The client possessed a legacy healthcare portal suffering from latency spikes, slow page load times, and poor SEO crawl indexes due to monolithic, client-rendered structures.",
    solution: "We decoupled their frontend into a modern Next.js 14 App Router layout hosted on a serverless architecture, pulling patient data via secure API microservices.",
    outcomes: "First Contentful Paint (FCP) dropped by 60% (from 2.4s to 0.9s), leading to a 35% increase in user retention and better search indexes.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Go Microservices", "Amazon Web Services (AWS)"]
  },
  "ai-automation": {
    title: "AI Scoping & Automation Engine",
    client: "Vektor Retail",
    challenge: "Processing customer intent and routing tickets manually took hours, decreasing customer satisfaction metrics.",
    solution: "We designed a custom machine learning pipeline using Python (FastAPI) to categorize incoming customer requests, injecting vectorized context into open-source LLM instances (Llama 3) for quick automated scoping drafts.",
    outcomes: "Ticket response latency dropped by 80%, reducing customer support operations costs by 45%.",
    tech: ["Python", "PyTorch", "FastAPI", "Sanity CMS", "PostgreSQL", "Llama 3 Model"]
  },
  "web3-dex": {
    title: "DeFi Wallet Protocol",
    client: "Aether Labs",
    challenge: "The team needed to deploy secure, gas-optimized staking smart contracts to manage ERC-20 token distributions with low transaction costs.",
    solution: "We engineered Solidity staking contracts, verified using Foundry test harnesses, and built a custom React Web3 frontend utilizing RainbowKit and Wagmi context libraries.",
    outcomes: "Successfully deployed smart contracts with 25% lower gas costs compared to typical competitor staking contracts.",
    tech: ["Solidity", "Foundry", "React.js", "Tailwind CSS", "Wagmi & Ethers.js"]
  }
};

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const project = caseDetailsMap[params.slug];
  
  if (!project) {
    notFound();
  }

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
            <Link href="/portfolio" className="text-foreground font-semibold">Work</Link>
            <Link href="/about" className="hover:text-foreground transition-colors duration-300">About</Link>
          </nav>
        </div>
        <div>
          <Link href="/contact" className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-[#0d645e] transition-all duration-300">
            Start a project
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow">
        <Link href="/portfolio" className="text-primary font-mono text-xs font-semibold tracking-wider hover:underline mb-4 inline-block">
          &larr; BACK TO CASE STUDIES
        </Link>
        
        <div className="max-w-3xl mb-12">
          <p className="text-primary font-semibold text-xs tracking-wider uppercase mb-2">Client: {project.client}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {project.title}
          </h1>
        </div>

        {/* Challenge & Solution */}
        <section className="grid lg:grid-cols-2 gap-12 mb-16 max-w-5xl">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-muted leading-relaxed text-sm md:text-base">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Our Solution</h2>
            <p className="text-muted leading-relaxed text-sm md:text-base">{project.solution}</p>
          </div>
        </section>

        {/* Outcomes */}
        <section className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm max-w-5xl mb-12">
          <h3 className="text-sm font-mono font-bold tracking-wider text-primary uppercase mb-2">Proven Outcomes</h3>
          <p className="text-muted leading-relaxed text-sm md:text-base">{project.outcomes}</p>
        </section>

        {/* Tech Stack Used */}
        <section className="max-w-5xl mb-16">
          <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-4">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-gray-100 border border-gray-200 text-foreground text-xs rounded-full font-medium">
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
        <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
        <p>ESTABLISHED IN NEPAL // GLOBAL OPERATIONS</p>
      </footer>
    </main>
  );
}
