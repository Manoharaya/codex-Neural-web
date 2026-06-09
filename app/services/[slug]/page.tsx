"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

interface ServiceDetail {
  title: string;
  desc: string;
  capabilities: string[];
  outcomes: string;
}

const serviceDetailsMap: Record<string, ServiceDetail> = {
  "ai-ml": {
    title: "AI & Machine Learning Services",
    desc: "Deploying custom machine learning solutions for modern enterprise operations. We specialize in deep LLM customization, custom data adapters, vector database engineering, and computer vision pipelines.",
    capabilities: ["Fine-tuning Open-Source Models (Llama, Mistral)", "Vector Embeddings & Semantic Search Pipelines", "Predictive Analytics & Forecasting Models", "Classification & OCR Systems"],
    outcomes: "Integrated automated pipelines reducing data ingestion costs by up to 45% while enabling semantic intelligence across millions of documents."
  },
  "web-development": {
    title: "Enterprise Web Development",
    desc: "Highly-scalable Next.js frontend architectures mapped to serverless or decoupled CMS environments. We prioritize core web vitals, speed, security, and deliberate frontend constraint.",
    capabilities: ["Next.js App Router Architecture", "Headless CMS Integrations (Sanity, Contentful)", "Decoupled Serverless Frontends", "Performance Audits & Core Web Vitals Optimization"],
    outcomes: "Sub-second load times resulting in up to 30% increase in user session durations and improved organic search indexing."
  },
  "app-development": {
    title: "Mobile App Development",
    desc: "Native and hybrid mobile applications built using React Native, providing high performance, polished custom interactions, and strict compliance with store guidelines.",
    capabilities: ["React Native Cross-Platform Engineering", "Custom Native Bridge Plugins (Swift/Java)", "Offline-First Synchronization Engines", "OAuth & Secure Token Keyring Storage"],
    outcomes: "Highly rated mobile products deployed successfully, with reliable offline sync and state synchronization."
  },
  "system-software": {
    title: "Systems & Custom Software",
    desc: "Backend engineering designed for low-latency and heavy throughput. We construct reliable microservice architectures using Go, Rust, or Node.js, combined with strict API contracts.",
    capabilities: ["High-Throughput API Gateways", "Go & Node.js Microservices", "Message Broker Integration (RabbitMQ, Kafka)", "Database Sharding & Query Optimization"],
    outcomes: "Low-latency API layers handling thousands of requests per second with 99.99% operational uptime."
  },
  "ui-ux": {
    title: "UI/UX Design Studio",
    desc: "Constructing high-fidelity mockups, premium interactive prototypes, and unified design tokens that developers can drop-in and build immediately.",
    capabilities: ["Design Systems & Component Tokenizing", "Interactive High-Fidelity Prototyping", "User Journey Mapping & Usability Scopes", "Figma-to-Code Asset Export Pipelines"],
    outcomes: "Clear visual guidelines that speed up frontend development by 40% while preserving brand integrity."
  },
  "seo": {
    title: "SEO & Growth Engine",
    desc: "Taking a technical, code-first approach to search engine visibility. We audit page speed, structured data, semantic heading trees, and crawlability metrics.",
    capabilities: ["Technical SEO & Lighthouse Audits", "Structured JSON-LD Schema Injectors", "Semantic Content Strategies", "Search Console & Crawl Optimizations"],
    outcomes: "Substantial growth in search result impressions and organic click-through conversions."
  },
  "web3-blockchain": {
    title: "Blockchain & Web3",
    desc: "Hardening smart contracts and building decentralized interface integrations. We focus on gas-optimized Solidity code, secure Web3 library hookups, and DeFi protocols.",
    capabilities: ["Solidity Smart Contracts Engineering", "Hardhat & Foundry Test Scopes", "Web3 React Context Hooks", "Token Lockups & Staking Mechanisms"],
    outcomes: "Exploit-proof smart contracts deployed securely with minimized gas fees."
  }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetailsMap[params.slug];
  
  if (!service) {
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
            <Link href="/services" className="text-foreground font-semibold">Services</Link>
            <Link href="/portfolio" className="hover:text-foreground transition-colors duration-300">Work</Link>
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
        <Link href="/services" className="text-primary font-mono text-xs font-semibold tracking-wider hover:underline mb-4 inline-block">
          &larr; BACK TO CAPABILITIES
        </Link>
        
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Core Capabilities */}
        <section className="mb-12 max-w-3xl">
          <h2 className="text-xl font-bold text-foreground mb-6">Core Capabilities</h2>
          <ul className="space-y-4">
            {service.capabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-3 text-muted text-sm md:text-base">
                <span className="text-primary font-bold mt-0.5">&bull;</span>
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Outcomes */}
        <section className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm max-w-3xl mb-16">
          <h3 className="text-sm font-mono font-bold tracking-wider text-primary uppercase mb-2">Proven Outcomes</h3>
          <p className="text-muted leading-relaxed text-sm md:text-base">
            {service.outcomes}
          </p>
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
