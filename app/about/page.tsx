"use client";

import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans z-10">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex-grow w-full">
        
        {/* Mission Hero */}
        <section className="max-w-3xl mb-20">
          <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">About Codex Neural</p>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-foreground mb-6 leading-tight">
            High-Performance <br />
            Digital Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed font-sans">
            We are a Nepal-based systems development and AI studio. We bridge the gap between complex artificial intelligence engineering, low-latency microservice architectures, and modern web application frontends.
          </p>
        </section>

        {/* 3-Pillar Value System */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Core Philosophy</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">Our Three Pillars</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
              <span className="text-2xl mb-4 block">🏛️</span>
              <h3 className="text-lg font-bold text-foreground mb-3">Architecture-First</h3>
              <p className="text-xs text-muted leading-relaxed font-sans">
                We believe code durability starts with deliberate, constraints-driven systems planning. We structure databases, balance payloads, and isolate domains before typing the first line of syntax.
              </p>
            </div>
            <div className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
              <span className="text-2xl mb-4 block">⚡</span>
              <h3 className="text-lg font-bold text-foreground mb-3">Full-Stack Integrity</h3>
              <p className="text-xs text-muted leading-relaxed font-sans">
                A system is only as strong as its weakest endpoint. We engineering highly optimized data pipelines running on scalable Go/Python backends that map perfectly to edge-rendered, responsive React frontends.
              </p>
            </div>
            <div className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
              <span className="text-2xl mb-4 block">🤝</span>
              <h3 className="text-lg font-bold text-foreground mb-3">Long-Term Value</h3>
              <p className="text-xs text-muted leading-relaxed font-sans">
                We build long-lasting technology for business entities aiming to scale. Our platforms avoid proprietary vendor-locks, utilizing open-source frameworks to keep operational expenses low and ownership complete.
              </p>
            </div>
          </div>
        </section>

        {/* Founding Story Timeline */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Our History</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">The Journey</h2>
          </div>
          <div className="relative border-l border-gray-200 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12">
            {/* 2022 */}
            <div className="relative">
              <span className="absolute -left-[31px] md:-left-[47px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-primary">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <div>
                <span className="text-xs font-mono font-black text-primary block mb-1">2022 // INCEPTION</span>
                <h4 className="text-base font-bold text-foreground mb-2">Kathmandu Systems Collective</h4>
                <p className="text-xs text-muted leading-relaxed max-w-2xl font-sans">
                  Codex Neural is formed in Kathmandu, Nepal as an agile engineering consultancy, optimizing database indexes and resolving API bottlenecks for scaling domestic service startups.
                </p>
              </div>
            </div>
            {/* 2023 */}
            <div className="relative">
              <span className="absolute -left-[31px] md:-left-[47px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-primary">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <div>
                <span className="text-xs font-mono font-black text-primary block mb-1">2023 // GLOBAL EXPANSION</span>
                <h4 className="text-base font-bold text-foreground mb-2">Decoupled Architectures & Web3 Nodes</h4>
                <p className="text-xs text-muted leading-relaxed max-w-2xl font-sans">
                  We secure our first international enterprise partners, building decentralized staking contracts in Solidity and migrating legacy health dashboards to blazing-fast Edge architectures.
                </p>
              </div>
            </div>
            {/* 2024 */}
            <div className="relative">
              <span className="absolute -left-[31px] md:-left-[47px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-primary">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <div>
                <span className="text-xs font-mono font-black text-primary block mb-1">2024 // THE AI PIVOT</span>
                <h4 className="text-base font-bold text-foreground mb-2">Applied Intelligence Pipelines</h4>
                <p className="text-xs text-muted leading-relaxed max-w-2xl font-sans">
                  We integrate localized intelligence layers, helping e-commerce logicians, retail suppliers, and software suites ingest unstructured data payloads and fine-tune open-source models.
                </p>
              </div>
            </div>
            {/* 2026 */}
            <div className="relative">
              <span className="absolute -left-[31px] md:-left-[47px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-primary">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <div>
                <span className="text-xs font-mono font-black text-primary block mb-1">2026 // BEYOND</span>
                <h4 className="text-base font-bold text-foreground mb-2">Nepal&apos;s Engineering Frontier</h4>
                <p className="text-xs text-muted leading-relaxed max-w-2xl font-sans">
                  Expanding our Kathmandu operations center with senior engineers and UX developers, delivering clean and robust digital platforms globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team CTA */}
        <section className="mb-24 p-8 bg-surface border border-gray-200 rounded-2xl shadow-sm max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider block mb-1">Our Roster</span>
            <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Meet the Network</h3>
            <p className="text-xs text-muted leading-relaxed font-sans">
              We are a team of 8 backend architects, frontend specialists, data analysts, and designers collaborating in Kathmandu. Meet our engineers and advisors.
            </p>
          </div>
          <Link
            href="/team"
            className="px-6 py-3 bg-primary hover:bg-[#0c5953] text-white font-bold text-xs rounded-lg transition-colors font-mono tracking-wider flex-shrink-0"
          >
            VIEW TEAM MEMBERS &rarr;
          </Link>
        </section>

        {/* Location Block */}
        <section className="p-8 md:p-12 bg-surface border border-gray-200 rounded-xl shadow-sm mb-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Our Headquarters</span>
            <h3 className="text-2xl font-heading font-extrabold text-foreground mb-4">Kathmandu, Nepal</h3>
            <p className="text-xs text-muted leading-relaxed mb-4 font-sans">
              Our engineering office sits in the capital city of Kathmandu, surrounded by the Himalayas. From this high-integrity cultural hub, our team designs global software grids under stable, collaborative workplace paradigms.
            </p>
            <div className="text-xs font-mono text-muted space-y-1">
              <p>📍 Maitidevi, Kathmandu, Nepal</p>
              <p>⏰ Monday – Friday, 9:00 AM – 6:00 PM NPT</p>
              <p>📧 contact@codexneural.com</p>
            </div>
          </div>
          <div className="h-64 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
            {/* Placeholder graphic representing a neural globe or map */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="w-16 h-16 bg-tint rounded-full blur-xl absolute" />
            <div className="relative font-mono text-[10px] text-primary/80 font-bold p-6 text-center">
              CODEX NEURAL LABS<br />
              [27.7172° N, 85.3240° E]<br />
              KATHMANDU, NP
            </div>
          </div>
        </section>

        {/* Dual Bottom CTAs */}
        <section className="p-10 md:p-16 bg-gradient-to-r from-primary to-accent rounded-xl text-white shadow-lg text-center relative overflow-hidden group">
          <div className="absolute right-0 bottom-0 opacity-5 font-mono text-9xl font-black select-none pointer-events-none translate-x-12 translate-y-12">
            BUILD
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">Let&apos;s Build Something Durable</h2>
          <p className="text-sm text-tint max-w-xl mx-auto mb-10 font-sans">
            Ready to design a new software platform or join our growing collective of systems developers in Kathmandu? Select a path below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-primary font-bold text-sm rounded-lg hover:bg-tint transition-all duration-300"
            >
              Start a Project &rarr;
            </Link>
            <Link 
              href="/careers" 
              className="px-8 py-4 border-2 border-white text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Join the Team
            </Link>
          </div>
        </section>
      </div>

    </main>
  );
}
