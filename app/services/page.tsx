"use client";

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
    slug: "web-development",
    title: "Enterprise Web Development",
    desc: "Engineered for speed and scale. Building headless web solutions using modern frameworks (Next.js) and custom integrations.",
    icon: "💻"
  },
  {
    slug: "app-development",
    title: "Mobile App Development",
    desc: "Premium native and cross-platform mobile app development tailored for global consumer bases.",
    icon: "📱"
  },
  {
    slug: "system-software",
    title: "Systems & Custom Software",
    desc: "Designing high-throughput backend services, custom APIs, database optimizations, and microservice topologies.",
    icon: "⚙️"
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design Studio",
    desc: "Pixel-perfect visual experiences, design systems, interface animation, and scoping prototyping.",
    icon: "🎨"
  },
  {
    slug: "seo",
    title: "SEO & Growth",
    desc: "Technical SEO audits, search presence optimization, page speed consulting, and organic growth frameworks.",
    icon: "📈"
  },
  {
    slug: "web3-blockchain",
    title: "Blockchain & Web3",
    desc: "Solidity smart contracts engineering, decentralized applications, security reviews, and custom protocol design.",
    icon: "🔗"
  }
];

export default function Services() {
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
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Capabilities</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Engineering Domains
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            We focus on core digital areas requiring high-integrity architecture. From machine learning logic to deep systems scaling, explore our services.
          </p>
        </div>

        {/* Services Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.slug} className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-8">{service.desc}</p>
              </div>
              <Link href={`/services/${service.slug}`} className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
                Explore Domain &rarr;
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
