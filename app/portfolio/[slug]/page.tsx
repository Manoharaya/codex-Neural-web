"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

interface Metric {
  value: string;
  label: string;
  desc: string;
}

interface CaseStudyDetail {
  title: string;
  client: string;
  sector: string;
  timeline: string;
  role: string;
  challenge: string;
  solution: string;
  outcomes: string;
  metrics: Metric[];
  tech: string[];
}

const caseDetailsMap: Record<string, CaseStudyDetail> = {
  "enterprise-saas": {
    title: "Enterprise SaaS Migration",
    client: "Optima Health",
    sector: "Healthcare & FinTech",
    timeline: "5 Months (2024)",
    role: "Cloud Architecture & Full-Stack Frontend",
    challenge: "Optima Health's legacy portal served over 50k active patients daily but suffered from severe latency spikes during peak hours. Client-rendered monolithic pages resulted in a poor Google Core Web Vitals score (FCP of 2.4s) and blocked search engines from indexing critical public health documentation.",
    solution: "We decoupled their web layout into a modern Next.js 14 App Router codebase hosted on Vercel Edge, caching public content at edge nodes. Dynamic patient data was queried via secure server-to-server Go microservices. We optimized image loaders, lazy-loaded offscreen components, and implemented rigorous bundle budgeting.",
    outcomes: "The new portal loads instantly worldwide. Mobile conversion rates spiked, server overhead dropped significantly, and administrative support cases regarding portal downtime fell to zero.",
    metrics: [
      { value: "0.9s", label: "First Contentful Paint", desc: "Reduced from 2.4s, putting the portal in the 99th percentile of speed." },
      { value: "+35%", label: "User Retention", desc: "A significant boost in recurring patient log-ins and platform engagement." },
      { value: "99.99%", label: "System Uptime", desc: "Achieved via decoupled serverless architecture on AWS and Vercel edge." }
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Go Microservices", "Amazon Web Services (AWS)", "Vercel Edge"]
  },
  "ai-automation": {
    title: "AI Scoping & Automation Engine",
    client: "Vektor Retail",
    sector: "E-Commerce Logistics",
    timeline: "4 Months (2024)",
    role: "AI Pipeline Engineering & RAG Design",
    challenge: "Vektor Retail handles over 10,000 inquiries daily across different departments. Manual ticket categorisation took up to 6 hours per ticket, leading to major delays and a decline in customer satisfaction scores. Existing auto-responders lacked semantic accuracy.",
    solution: "We built an intelligent intake pipeline using FastAPI. Incoming emails are embedded using OpenAI embeddings and checked against a Pinecone vector index. Relevant company context is injected into fine-tuned Llama 3 models, drafting a high-accuracy, personalized response and routing the ticket to the correct human queue.",
    outcomes: "The customer service department reduced ticket backlog to zero, allowing support agents to focus on complex, high-tier inquiries.",
    metrics: [
      { value: "-80%", label: "Response Latency", desc: "Average response/routing time dropped from 6 hours to under 30 seconds." },
      { value: "45%", label: "Support Cost Saved", desc: "Significant operational cost savings in customer support divisions." },
      { value: "94%", label: "Intention Accuracy", desc: "High semantic accuracy in classifying complex multi-topic inquiries." }
    ],
    tech: ["Python", "PyTorch", "FastAPI", "Pinecone DB", "PostgreSQL", "Llama 3 Model", "Sanity CMS"]
  },
  "web3-dex": {
    title: "DeFi Wallet Protocol",
    client: "Aether Labs",
    sector: "Decentralized Finance",
    timeline: "3 Months (2023)",
    role: "Smart Contract Engineering & Web3 Integration",
    challenge: "Aether Labs needed to deploy a high-yield ERC-20 staking contract managing over $10M in assets. High Ethereum gas prices threatened to eat into user yields, and smart contract security vulnerabilities were a major existential threat to the launch.",
    solution: "We engineered custom Solidity staking contracts using gas-optimized storage slots and loop optimizations. We wrote a rigorous testing suite in Foundry with 100% branch coverage and invariant testing, followed by building a sleek frontend with Wagmi and RainbowKit.",
    outcomes: "The platform launched with zero security incidents and industry-leading gas efficiency, driving rapid adoption within the first week of deployment.",
    metrics: [
      { value: "-25%", label: "Gas Transaction Fees", desc: "Optimized bytecode execution compared to standard ERC-20 staking contracts." },
      { value: "$12M+", label: "Total Value Locked", desc: "Reached within 14 days of smart contract mainnet deployment." },
      { value: "Zero", label: "Security Exploits", desc: "Verified via Foundry testing frameworks and certified smart contract audit." }
    ],
    tech: ["Solidity", "Foundry", "React.js", "Tailwind CSS", "Wagmi", "Ethers.js", "RainbowKit"]
  }
};

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const project = caseDetailsMap[params.slug];

  
  if (!project) {
    notFound();
  }

  // Get next project slug dynamically
  const slugs = Object.keys(caseDetailsMap);
  const currentIndex = slugs.indexOf(params.slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextProject = caseDetailsMap[nextSlug];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Decorative background grid and glowing blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Main Content */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full z-10">
        <Link href="/portfolio" className="text-primary font-mono text-xs font-semibold tracking-wider hover:underline mb-6 inline-block">
          &larr; BACK TO CASE STUDIES
        </Link>
        
        {/* Project Title and Client Hero */}
        <div className="max-w-4xl mb-12 animate-fade-in-up">
          <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">Case Study // {project.client}</p>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-foreground mb-6 leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Project Quick Facts / Stat Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-surface border border-gray-200 rounded-xl shadow-sm mb-16 max-w-5xl font-sans">
          <div>
            <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">Client</span>
            <span className="text-sm font-bold text-foreground">{project.client}</span>
          </div>
          <div>
            <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">Sector</span>
            <span className="text-sm font-bold text-foreground">{project.sector}</span>
          </div>
          <div>
            <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">Timeline</span>
            <span className="text-sm font-bold text-foreground">{project.timeline}</span>
          </div>
          <div>
            <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">Our Role</span>
            <span className="text-sm font-bold text-foreground">{project.role}</span>
          </div>
        </div>

        {/* Challenge & Solution Grid */}
        <section className="grid lg:grid-cols-2 gap-12 mb-16 max-w-5xl">
          <div className="p-8 bg-surface/50 border border-gray-200 rounded-xl">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              The Challenge
            </h2>
            <p className="text-muted leading-relaxed text-sm md:text-base">{project.challenge}</p>
          </div>
          <div className="p-8 bg-tint/10 border border-primary/20 rounded-xl">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full"></span>
              Our Solution
            </h2>
            <p className="text-muted leading-relaxed text-sm md:text-base">{project.solution}</p>
          </div>
        </section>

        {/* Outcomes & Metrics section */}
        <section className="mb-16 max-w-5xl">
          <h2 className="text-2xl font-heading font-extrabold text-foreground mb-8">Key Performance Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
                <span className="text-4xl md:text-5xl font-heading font-black text-primary block mb-2">{metric.value}</span>
                <span className="text-sm font-bold text-foreground block mb-2">{metric.label}</span>
                <p className="text-xs text-muted leading-relaxed">{metric.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Used */}
        <section className="max-w-5xl mb-20">
          <h3 className="text-xs font-mono font-bold text-muted uppercase tracking-wider mb-4">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-surface border border-gray-200 text-foreground text-xs rounded-full font-medium font-mono">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Next Project link banner */}
        <section className="max-w-5xl p-8 bg-gradient-to-r from-primary to-accent rounded-xl text-white shadow-lg relative overflow-hidden group">
          <div className="absolute right-0 bottom-0 opacity-10 font-mono text-9xl font-black select-none pointer-events-none translate-x-12 translate-y-12 transition-transform duration-500 group-hover:scale-110">
            NEXT
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-tint uppercase block mb-1">UP NEXT</span>
              <h4 className="text-2xl font-heading font-bold">{nextProject.title}</h4>
              <p className="text-xs text-tint/90 font-sans mt-1">Read how we deployed high-performance solutions for {nextProject.client}.</p>
            </div>
            <div>
              <Link 
                href={`/portfolio/${nextSlug}`} 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold text-sm rounded-lg hover:bg-tint transition-all duration-300"
              >
                Read Next Case Study &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
