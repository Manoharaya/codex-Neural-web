"use client";

import Link from "next/link";

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  desc: string;
}

const cases: CaseStudy[] = [
  {
    slug: "enterprise-saas",
    title: "Enterprise SaaS Migration",
    client: "Optima Health",
    category: "Web Engineering",
    desc: "Migrating legacy health portals to a decoupled Next.js & microservices stack, improving page load speeds by 60%."
  },
  {
    slug: "ai-automation",
    title: "AI Scoping & Automation Engine",
    client: "Vektor Retail",
    category: "AI & Machine Learning",
    desc: "Developing a custom predictive analysis pipeline and LLM context injector to automate customer intent routing."
  },
  {
    slug: "web3-dex",
    title: "DeFi Wallet Protocol",
    client: "Aether Labs",
    category: "Blockchain & Web3",
    desc: "Deploying secure, gas-optimized token staking smart contracts and integrating React Web3 frontends."
  }
];

export default function Portfolio() {
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
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            A selection of custom enterprise platforms, data pipelines, and intelligent products we have engineered.
          </p>
        </div>

        {/* Case Studies Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cases.map((project) => (
            <div key={project.slug} className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-xs text-muted mb-4">Client: {project.client}</p>
                <p className="text-sm text-muted leading-relaxed mb-8">{project.desc}</p>
              </div>
              <Link href={`/portfolio/${project.slug}`} className="text-primary font-semibold text-sm hover:underline">
                Read Case Study &rarr;
              </Link>
            </div>
          ))}
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
