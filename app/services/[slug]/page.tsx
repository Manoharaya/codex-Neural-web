"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

interface ServiceDetail {
  title: string;
  desc: string;
  included: string[];
  approach: string;
  tech: string[];
  caseStudyTitle: string;
  caseStudySlug: string;
  faqs: { q: string; a: string }[];
}

const serviceDetailsMap: Record<string, ServiceDetail> = {
  "ai-ml": {
    title: "AI & Machine Learning Services",
    desc: "Deploying custom machine learning solutions for modern enterprise operations. We specialize in deep LLM customization, custom data adapters, vector database engineering, and computer vision pipelines.",
    included: [
      "Fine-tuning Open-Source Models (Llama, Mistral)",
      "Vector Embeddings & Semantic Search (RAG Pipelines)",
      "Predictive Analytics & Forecasting Models",
      "Classification & OCR Systems"
    ],
    approach: "We approach AI not as a standalone overlay, but as an integrated architectural layer. We focus on optimizing model context lengths, limiting API tokens, and local hosting to ensure compliance and security.",
    tech: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "Llama 3 Model"],
    caseStudyTitle: "AI Scoping & Automation Engine (Vektor Retail)",
    caseStudySlug: "ai-automation",
    faqs: [
      { q: "Do you use open-source or proprietary models?", a: "We support both. For strict data privacy and lower operational costs, we recommend fine-tuning open-source models like Llama and Mistral. For rapid prototyping, we integrate OpenAI/Claude API models." },
      { q: "How do you protect our proprietary training data?", a: "By deploying open-source models inside your secure cloud infrastructure (AWS/GCP), ensuring no data leaks to external APIs or third-party training pools." }
    ]
  },
  "web-development": {
    title: "Enterprise Web Development",
    desc: "Highly-scalable Next.js frontend architectures mapped to serverless or decoupled CMS environments. We prioritize core web vitals, speed, security, and deliberate frontend constraint.",
    included: [
      "Next.js App Router Architecture",
      "Headless CMS Integrations (Sanity, Contentful)",
      "Decoupled Serverless Frontends",
      "Performance Audits & Core Web Vitals Optimization"
    ],
    approach: "We utilize serverless architectures and headless CMS integration to make web frontends immune to heavy traffic spikes, preserving sub-second initial load times globally.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel", "Sanity CMS"],
    caseStudyTitle: "Enterprise SaaS Migration (Optima Health)",
    caseStudySlug: "enterprise-saas",
    faqs: [
      { q: "Why do you recommend headless CMS setups?", a: "Decoupling the frontend from the CMS editor means the public site loads via global edge nodes. It is secure, virtually crash-proof, and loads instantly." },
      { q: "How do you guarantee good Core Web Vitals scores?", a: "We write clean, semantic HTML, implement strict image compression, lazy load assets, and avoid heavy third-party tracking scripts." }
    ]
  },
  "app-development": {
    title: "Mobile App Development",
    desc: "Native and hybrid mobile applications built using React Native, providing high performance, polished custom interactions, and strict compliance with store guidelines.",
    included: [
      "React Native Cross-Platform Engineering",
      "Custom Native Bridge Plugins (Swift/Java)",
      "Offline-First Synchronization Engines",
      "OAuth & Secure Token Keyring Storage"
    ],
    approach: "We build offline-first applications that preserve responsive states regardless of connection speeds, utilizing secure keyrings to store credentials locally.",
    tech: ["React Native", "TypeScript", "Swift", "Java", "Node.js"],
    caseStudyTitle: "DeFi Wallet Protocol (Aether Labs)",
    caseStudySlug: "web3-dex",
    faqs: [
      { q: "Do you build native or cross-platform apps?", a: "We primary use React Native to build cross-platform apps sharing 90% of the codebase, which speeds up time-to-market. For specialized hardware features, we build native bridge plugins." },
      { q: "How do you handle offline synchronization?", a: "We implement local databases (SQLite/WatermelonDB) to cache offline actions and queue sync payloads to resolve once connection restores." }
    ]
  },
  "system-software": {
    title: "Systems & Custom Software",
    desc: "Backend engineering designed for low-latency and heavy throughput. We construct reliable microservice architectures using Go, Rust, or Node.js, combined with strict API contracts.",
    included: [
      "High-Throughput API Gateways",
      "Go & Node.js Microservices",
      "Message Broker Integration (RabbitMQ, Kafka)",
      "Database Sharding & Query Optimization"
    ],
    approach: "We design with structural safety in mind: database schemas are strictly normalized, endpoints are throttled via API gateways, and logs are piped to secure monitoring loops.",
    tech: ["Go", "Node.js", "Docker", "RabbitMQ", "PostgreSQL"],
    caseStudyTitle: "Enterprise SaaS Migration (Optima Health)",
    caseStudySlug: "enterprise-saas",
    faqs: [
      { q: "What is your backend framework preference?", a: "We prefer Go for high-throughput APIs due to its low memory footprint and concurrency patterns. We use Node.js for smaller microservices or custom middleware." },
      { q: "How do you handle API security?", a: "We configure CORS policies, throttle requests via API gateways, enforce JWT scoping, and run automated static analysis on all backend pull requests." }
    ]
  },
  "ui-ux": {
    title: "UI/UX Design Studio",
    desc: "Constructing high-fidelity mockups, premium interactive prototypes, and unified design tokens that developers can drop-in and build immediately.",
    included: [
      "Design Systems & Component Tokenizing",
      "Interactive High-Fidelity Prototyping",
      "User Journey Mapping & Usability Scopes",
      "Figma-to-Code Asset Export Pipelines"
    ],
    approach: "We translate user experience scoping into structured tokens (spacing, fonts, colors) mapping directly to Tailwind configurations, ensuring design consistency.",
    tech: ["Figma", "Tailwind CSS", "Framer Motion", "Storybook"],
    caseStudyTitle: "AI Scoping & Automation Engine (Vektor Retail)",
    caseStudySlug: "ai-automation",
    faqs: [
      { q: "Do you provide Figma files as deliverables?", a: "Yes. All design handoffs include structured Figma files with component auto-layouts, dark/light variants, and fully configured style tokens." },
      { q: "How do you handle design-to-development handoffs?", a: "We document component states in Storybook and map styles to Tailwind configs so frontend developers can drop components directly into the app router." }
    ]
  },
  "seo": {
    title: "SEO & Growth Engine",
    desc: "Taking a technical, code-first approach to search engine visibility. We audit page speed, structured data, semantic heading trees, and crawlability metrics.",
    included: [
      "Technical SEO & Lighthouse Audits",
      "Structured JSON-LD Schema Injectors",
      "Semantic Content Strategies",
      "Search Console & Crawl Optimizations"
    ],
    approach: "We avoid boilerplate SEO packages. Instead, we audit semantic DOM structures, fix loading latencies, inject JSON-LD schemas, and construct dynamic sitemaps.",
    tech: ["Google Search Console", "Google Analytics", "Screaming Frog", "Lighthouse"],
    caseStudyTitle: "AI Scoping & Automation Engine (Vektor Retail)",
    caseStudySlug: "ai-automation",
    faqs: [
      { q: "What is a Technical SEO audit?", a: "A technical audit analyzes crawl errors, server response codes (301/404), sitemap mappings, JSON-LD schema correctness, and mobile responsiveness." },
      { q: "How long until we see organic ranking growth?", a: "Technical optimizations (speeding up page load, fixing heading hierarchies) often show indexing improvements within 2 to 4 weeks." }
    ]
  },
  "web3-blockchain": {
    title: "Blockchain & Web3",
    desc: "Hardening smart contracts and building decentralized interface integrations. We focus on gas-optimized Solidity code, secure Web3 library hookups, and DeFi protocols.",
    included: [
      "Solidity Smart Contracts Engineering",
      "Hardhat & Foundry Test Scopes",
      "Web3 React Context Hooks",
      "Token Lockups & Staking Mechanisms"
    ],
    approach: "Security is non-negotiable in smart contracts. We implement invariant test suites using Foundry, optimize loop patterns to save gas fees, and run static analysis auditors.",
    tech: ["Solidity", "Foundry", "Ethers.js", "Hardhat", "Wagmi"],
    caseStudyTitle: "DeFi Wallet Protocol (Aether Labs)",
    caseStudySlug: "web3-dex",
    faqs: [
      { q: "Do you audit smart contracts?", a: "We provide preliminary smart contract security reviews and invariant test coverage. For major public launches, we recommend and coordinate with external third-party audit firms." },
      { q: "How do you prevent reentrancy exploits?", a: "We enforce the Checks-Effects-Interactions pattern strictly, leverage ReentrancyGuard custom modifiers, and write comprehensive assertions in Foundry." }
    ]
  }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetailsMap[params.slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  if (!service) {
    notFound();
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full">
        <Link href="/services" className="text-primary font-mono text-xs font-semibold tracking-wider hover:underline mb-4 inline-block">
          &larr; BACK TO CAPABILITIES
        </Link>
        
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* What's Included */}
        <section className="mb-16 max-w-3xl">
          <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-gray-200">What&apos;s Included</h2>
          <ul className="space-y-4">
            {service.included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted text-sm md:text-base">
                <span className="text-primary font-bold mt-0.5">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Our Approach */}
        <section className="mb-16 max-w-3xl">
          <h2 className="text-xl font-bold text-foreground mb-4">Our Approach</h2>
          <p className="text-muted leading-relaxed text-sm md:text-base">
            {service.approach}
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-16 max-w-3xl">
          <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {service.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-gray-100 border border-gray-200 text-foreground text-xs rounded-full font-medium">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Related Case Study */}
        <section className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm max-w-3xl mb-16">
          <h3 className="text-xs font-mono font-bold tracking-wider text-primary uppercase mb-2">Related Case Study</h3>
          <Link href={`/portfolio/${service.caseStudySlug}`} className="text-lg font-bold text-foreground hover:text-primary transition-colors block mb-2">
            {service.caseStudyTitle}
          </Link>
          <p className="text-xs text-muted">Click to read about how we deployed these capabilities in production.</p>
        </section>

        {/* FAQ Accordion */}
        <section className="mb-20 max-w-3xl">
          <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-surface shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-bold text-foreground">{faq.q}</span>
                  <svg className={`w-4 h-4 text-muted transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-xs text-muted leading-relaxed border-t border-gray-100 bg-background/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

    </main>
  );
}
