import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";

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
    desc: "Deploying custom machine learning models, vector database configurations, and predictive intelligence pipelines to automate workflows.",
    included: [
      "Fine-tuning Open-Source LLMs (Llama 3, Mistral)",
      "Vector Embeddings & Semantic Search (RAG Pipelines)",
      "Predictive Analytics & Time-Series Forecasting Models",
      "Natural Language Processing (NLP) & Classification Systems",
      "Computer Vision & Image OCR Processing Pipelines"
    ],
    approach: "We approach AI as a fundamental architectural layer, not a temporary plugin. We focus on optimizing context windows, local model serving, and database performance to minimize API costs and latency.",
    tech: ["Python", "FastAPI", "PyTorch", "HuggingFace", "PostgreSQL (pgvector)", "Pinecone"],
    caseStudyTitle: "AI Scoping & Automation Engine (Vektor Retail)",
    caseStudySlug: "ai-automation",
    faqs: [
      { q: "Do you use open-source or proprietary models?", a: "We support both. We recommend open-source models (like Llama 3) for strict privacy and lower long-term cost. For rapid testing, we integrate proprietary APIs like OpenAI and Claude." },
      { q: "How do you protect our training data privacy?", a: "We deploy open-source models inside your secure cloud VPC (AWS or GCP). This prevents data from leaking to external public APIs or third-party training pools." },
      { q: "What is Retrieval-Augmented Generation (RAG)?", a: "RAG connects an LLM to your internal database. The model queries your documents in real-time, giving accurate answers without hallucinating." },
      { q: "How do you estimate running costs for AI models?", a: "We benchmark token usage, hosting costs, and caching strategies. By using semantic caching and smaller fine-tuned models, we can reduce run costs by up to 70%." },
      { q: "Can we run models completely on-premise?", a: "Yes. We configure containerized inference engines using Ollama or vLLM that can run on your private GPU servers." }
    ]
  },
  "web-app-development": {
    title: "Web & App Development",
    desc: "Building performance-first frontend systems and hybrid mobile applications. We deliver responsive web portals and native-quality mobile apps that scale under heavy consumer demand.",
    included: [
      "Next.js App Router & Decoupled Frontend Architectures",
      "React Native Cross-Platform iOS & Android Engineering",
      "Headless CMS Integration (Sanity.io, Contentful)",
      "Core Web Vitals & Loading Speed Optimization",
      "Offline-First Data Storage & Synchronization Engines"
    ],
    approach: "We structure web and mobile platforms with maximum decoupling. By deploying frontend builds to edge nodes and utilizing local offline-first stores for mobile, we guarantee instant transitions and crash-free states.",
    tech: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    caseStudyTitle: "Enterprise SaaS Migration (Optima Health)",
    caseStudySlug: "enterprise-saas",
    faqs: [
      { q: "Why do you prefer Next.js for web projects?", a: "Next.js provides hybrid static/server rendering, resulting in perfect Lighthouse scores, search indexing safety, and instant initial page loads." },
      { q: "How do you achieve cross-platform consistency for mobile?", a: "We leverage React Native, sharing up to 90% of the codebase between iOS and Android, while writing custom native bridge modules for hardware-specific actions." },
      { q: "What is a headless CMS setup?", a: "A headless CMS separates your content editing dashboard from the frontend code. This makes the public site immune to traffic spikes and database breaches." },
      { q: "How do you optimize mobile apps for slow networks?", a: "We implement local databases (SQLite/WatermelonDB) to cache data and queue user actions, syncing them automatically when network connectivity is restored." },
      { q: "Do you handle App Store and Play Store submissions?", a: "Yes. We manage the entire deployment pipeline, including store configuration, internal TestFlight groups, and compliance review processes." }
    ]
  },
  "system-software": {
    title: "Systems & Software Development",
    desc: "Constructing high-throughput backend APIs, microservice clusters, and real-time data pipelines. We build scalable structures designed for low-latency operations.",
    included: [
      "Microservice nodes written in Go and Rust",
      "API gateway design and route throttling",
      "Asynchronous message brokers (RabbitMQ, Kafka)",
      "ACID database schema design & sharding configs",
      "Low-latency WebSocket servers for real-time messaging"
    ],
    approach: "We practice strict architectural normalization. We isolate processing workloads via decoupled message queues, use static types to block execution bugs, and enforce database constraints to guarantee integrity.",
    tech: ["Go", "Rust", "Node.js", "Docker", "RabbitMQ", "PostgreSQL"],
    caseStudyTitle: "Enterprise SaaS Migration (Optima Health)",
    caseStudySlug: "enterprise-saas",
    faqs: [
      { q: "Why do you use Go for backend APIs?", a: "Go compiles to native machine code, providing sub-millisecond runtimes, low RAM usage, and native concurrency structures perfect for high-traffic environments." },
      { q: "How do you secure server endpoints?", a: "We deploy rate limiting, CORS configuration, rigid JWT verification, and run static security audits (SAST) on every push." },
      { q: "When should we migrate from a monolith to microservices?", a: "When individual features require separate scaling limits, or when engineering teams grow large enough to require decoupled code ownership." },
      { q: "How do you handle system logs and monitoring?", a: "We integrate structured logging (Zap/Slog) and pipe metrics to monitoring boards (Prometheus/Grafana) to alert developers before errors affect users." },
      { q: "What databases do you recommend?", a: "We recommend PostgreSQL for relational transactions, Redis for key-value caching, and MongoDB for flexible document logging." }
    ]
  },
  "ui-ux": {
    title: "UI/UX Design",
    desc: "Translating product strategies into premium interactive design systems. We run user research, draft interactive wireframes, and export clean components mapped to CSS tokens.",
    included: [
      "User Research & Interaction Frameworks",
      "Interactive High-Fidelity Figma Prototypes",
      "Modular Design Systems & Style Guides",
      "Responsive Layouts & Mobile Target Scoping",
      "Structured Handoff Sheets with Tailwind Code Tokens"
    ],
    approach: "We view design as the visual blueprint of the technical stack. We structure all mockups around reusable flex grids, atomic component trees, and CSS tokens to ensure that what we design is what we build.",
    tech: ["Figma", "Tailwind CSS", "Framer Motion", "Storybook", "Adobe Illustrator"],
    caseStudyTitle: "AI Scoping & Automation Engine (Vektor Retail)",
    caseStudySlug: "ai-automation",
    faqs: [
      { q: "What steps are involved in your design process?", a: "Our process follows five steps: user research and flows, interactive low-fi wireframing, high-fi UI design, interactive prototyping, and structured handoff." },
      { q: "Do we receive original design files?", a: "Yes. We hand over fully organized Figma files with auto-layouts, dark/light modes, and component libraries." },
      { q: "How do you bridge the gap between design and code?", a: "We extract design variables (colors, fonts, sizes) into CSS/Tailwind tokens and document interactive states in Storybook for developers." },
      { q: "Are your designs accessible (WCAG)?", a: "Yes. We audit color contrasts, check font size scales, and design touch targets to meet WCAG AA guidelines." },
      { q: "How do you handle design iterations?", a: "We run weekly review sessions to demo prototypes, gather feedback, and adjust visual paths before engineering begins." }
    ]
  },
  "web3-blockchain": {
    title: "Blockchain & Web3",
    desc: "Engineering secure smart contracts and decentralized protocols. We write gas-optimized code, build secure Web3 frontend interfaces, and structure staking platforms.",
    included: [
      "Solidity Smart Contract Development",
      "Foundry & Hardhat Unit Testing Suites",
      "Decentralized Frontend Hooks (Wagmi, Ethers)",
      "DeFi Staking & Token Distribution Engines",
      "DAO Governance & NFT Minting Protocols"
    ],
    approach: "Security is the ultimate metric for Web3. We write simple, checks-effects-interactions code, enforce invariant test scopes, optimize gas usage, and prepare protocols for third-party audits.",
    tech: ["Solidity", "Foundry", "Ethers.js", "Hardhat", "Wagmi", "Web3.js"],
    caseStudyTitle: "DeFi Wallet Protocol (Aether Labs)",
    caseStudySlug: "web3-dex",
    faqs: [
      { q: "How do you test smart contracts?", a: "We build fuzzing tests and invariant verification suites using Foundry, checking thousands of edge cases to verify security." },
      { q: "How do you reduce gas fees?", a: "We optimize variable packing, bypass storage writes where possible, and avoid expensive array loops to minimize execution costs." },
      { q: "Do you perform audits?", a: "We run static analysis checks and write invariant tests. For public launches, we work alongside external audit firms to address findings." },
      { q: "What is your approach to front-end Web3 integration?", a: "We integrate Wagmi and RainbowKit to handle wallet connection flows, transaction signatures, and state synchronization." },
      { q: "How do you prevent reentrancy attacks?", a: "We apply the Checks-Effects-Interactions pattern, utilize OpenZeppelin ReentrancyGuard modifiers, and isolate external calls." }
    ]
  },
  "digital-growth": {
    title: "Digital Growth",
    desc: "Data-driven marketing and technical search engine optimization. We combine structural site audits, content indexing systems, social media management, and custom visual design to accelerate user acquisition.",
    included: [
      "Technical SEO, Schema Markup, and Speed Optimization",
      "Social Media Management (SMM) & Brand Design",
      "Data-Driven Content Strategies & SEO Writing",
      "Conversion Rate Optimization (CRO) & User Flow Audits",
      "Analytics Integration & Event Funnel Tracking"
    ],
    approach: "We build organic growth channels through technical excellence. By optimizing page load speeds, structuring schemas, aligning social branding, and tracing customer flows, we turn organic clicks into paying customers.",
    tech: ["Google Analytics", "Google Search Console", "Screaming Frog", "Lighthouse", "Semrush"],
    caseStudyTitle: "AI Scoping & Automation Engine (Vektor Retail)",
    caseStudySlug: "ai-automation",
    faqs: [
      { q: "What is included in a Technical SEO audit?", a: "We audit indexation blocks, crawl issues, structured JSON-LD schemas, mobile-friendliness, and Core Web Vitals performance." },
      { q: "How do you track conversions?", a: "We set up tracking triggers (clicks, forms, checkouts) using Google Tag Manager and pipe them to GA4 to build funnel reports." },
      { q: "How does page speed affect search rankings?", a: "Google uses Core Web Vitals as a ranking factor. Faster pages get indexed quicker, lower bounce rates, and rank higher in search results." },
      { q: "Do you manage social media accounts?", a: "Yes. We create graphic designs, schedule posts, write copy, and track engagement to grow your brand presence across channels." },
      { q: "What is Conversion Rate Optimization (CRO)?", a: "CRO focuses on redesigning layout flows, button placements, and typography hierarchy to increase the percentage of site visitors who take action." }
    ]
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = serviceDetailsMap[params.slug];
  if (!service) return {};

  return {
    title: `${service.title} | Codex Neural`,
    description: service.desc,
    alternates: {
      canonical: `https://codexneural.com/services/${params.slug}`
    },
    openGraph: {
      title: `${service.title} | Codex Neural`,
      description: service.desc,
      url: `https://codexneural.com/services/${params.slug}`,
      images: [
        {
          url: "https://codexneural.com/og-image.png",
          width: 1200,
          height: 630,
          alt: service.title
        }
      ]
    }
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetailsMap[params.slug];

  if (!service) {
    notFound();
  }

  // Inject BreadcrumbList & Service Schemas
  const breadcrumbSchema = {
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
        "name": "Services",
        "item": "https://codexneural.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://codexneural.com/services/${params.slug}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.desc,
    "provider": {
      "@type": "Organization",
      "name": "Codex Neural",
      "url": "https://codexneural.com"
    },
    "areaServed": "Global"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
