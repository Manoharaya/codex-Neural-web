"use client";

import React from "react";
import Link from "next/link";

interface Service {
  slug: string;
  title: string;
  desc: string;
  icon: string;
}

const services: Service[] = [
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    desc: "Deploying production-grade machine learning pipelines, LLM customization, predictive modeling, and analytics.",
    icon: "🧠"
  },
  {
    slug: "web-app-development",
    title: "Web & App Development",
    desc: "Engineered for speed and scale. Building decoupled Next.js web applications and hybrid iOS/Android React Native apps.",
    icon: "💻"
  },
  {
    slug: "system-software",
    title: "Systems & Software Development",
    desc: "Designing high-throughput backend services, custom APIs, database optimizations, and microservice topologies.",
    icon: "⚙️"
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design Studio",
    desc: "Pixel-perfect visual experiences, design systems, interface animation, and wireframe prototypes.",
    icon: "🎨"
  },
  {
    slug: "web3-blockchain",
    title: "Blockchain & Web3",
    desc: "Solidity smart contracts engineering, decentralized applications, security reviews, and custom protocol design.",
    icon: "🔗"
  },
  {
    slug: "digital-growth",
    title: "Digital Growth",
    desc: "Technical SEO audits, search presence optimization, social media management, content strategy, and conversion rate optimization.",
    icon: "📈"
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans relative z-10">
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex-grow w-full">
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">Capabilities</p>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground mb-6">
            Engineering Domains
          </h1>
          <p className="text-lg text-muted leading-relaxed font-sans">
            We focus on core digital areas requiring high-integrity architecture. From machine learning logic to deep systems scaling, explore our services.
          </p>
        </div>

        {/* Services Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div 
              key={service.slug} 
              className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl mb-6 block select-none">{service.icon}</span>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-8 font-sans">{service.desc}</p>
              </div>
              <Link 
                href={`/services/${service.slug}`} 
                className="text-primary font-bold text-sm hover:text-[#0c5953] transition-colors flex items-center gap-1 font-mono tracking-wider"
              >
                EXPLORE DOMAIN &rarr;
              </Link>
            </div>
          ))}
        </section>
      </div>

    </main>
  );
}
