"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Decorative Grid & Glowing blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tint/20 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.015)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Sticky Header */}
      <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between relative">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="font-mono text-xl font-black tracking-tighter text-foreground uppercase">
              CODEX<span className="text-primary font-light">NEURAL</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button className="hover:text-foreground transition-colors duration-300 py-2 flex items-center gap-1">
                  Services
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-surface border border-gray-200 rounded-xl shadow-lg p-4 grid gap-2 z-50 animate-fade-in-up">
                    <Link href="/services/ai-ml" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">🧠 AI & Machine Learning</Link>
                    <Link href="/services/web-development" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">💻 Web Development</Link>
                    <Link href="/services/app-development" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">📱 Mobile App Development</Link>
                    <Link href="/services/system-software" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">⚙️ Systems & Software</Link>
                    <Link href="/services/ui-ux" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">🎨 UI/UX Design Studio</Link>
                    <Link href="/services/web3-blockchain" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">🔗 Blockchain & Web3</Link>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCompanyDropdown(true)}
                onMouseLeave={() => setCompanyDropdown(false)}
              >
                <button className="hover:text-foreground transition-colors duration-300 py-2 flex items-center gap-1">
                  Company
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${companyDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {companyDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-surface border border-gray-200 rounded-xl shadow-lg p-4 grid gap-2 z-50 animate-fade-in-up">
                    <Link href="/about" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">About Us</Link>
                    <Link href="/careers" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">Careers</Link>
                    <Link href="/privacy" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">Privacy Policy</Link>
                  </div>
                )}
              </div>

              <Link href="/portfolio" className="hover:text-foreground transition-colors duration-300 py-2">
                Work
              </Link>
              <Link href="/blog" className="hover:text-foreground transition-colors duration-300 py-2">
                Insights
              </Link>
            </nav>
          </div>

          {/* Scoping CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/contact" className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-[#0d645e] transition-all duration-300 shadow-sm">
              Start a project
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Full-Screen Overlay Menu */}
        {mobileMenu && (
          <div className="fixed inset-0 top-[73px] bg-background/95 backdrop-blur-md z-40 flex flex-col p-6 animate-fade-in-up md:hidden border-t border-gray-100">
            <nav className="flex flex-col gap-6 text-lg font-bold text-foreground mb-8">
              <Link href="/services" onClick={() => setMobileMenu(false)} className="hover:text-primary">Services</Link>
              <Link href="/portfolio" onClick={() => setMobileMenu(false)} className="hover:text-primary">Work</Link>
              <Link href="/about" onClick={() => setMobileMenu(false)} className="hover:text-primary">About Us</Link>
              <Link href="/careers" onClick={() => setMobileMenu(false)} className="hover:text-primary">Careers</Link>
              <Link href="/blog" onClick={() => setMobileMenu(false)} className="hover:text-primary">Insights</Link>
              <Link href="/privacy" onClick={() => setMobileMenu(false)} className="hover:text-primary">Privacy Policy</Link>
            </nav>
            <Link 
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="w-full py-4 bg-primary text-white text-center font-bold rounded-lg hover:bg-[#0d645e] transition-all"
            >
              Start a Project
            </Link>
          </div>
        )}
      </header>

      {/* 1. Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 flex flex-col items-start z-10 min-h-[75vh] justify-center">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Nepal&apos;s AI &amp; Engineering Studio
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
            We Build Software <br />
            That Lasts<span className="text-primary">.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            From AI systems to enterprise infrastructure — we engineer durable, high-performance digital products for global clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-[#0d645e] transition-all duration-300 shadow-lg shadow-primary/10">
              Start a Project &rarr;
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center px-7 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-tint/40 transition-all duration-300">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="w-full pt-10 border-t border-gray-200">
          <p className="text-xs font-mono font-bold tracking-widest text-muted uppercase mb-6">TRUSTED BY LEADING TEAMS AND ENTERPRISES</p>
          <div className="flex flex-wrap gap-8 md:gap-16 items-center opacity-60">
            <span className="font-mono text-sm font-bold text-muted tracking-widest">CEDAR GATE</span>
            <span className="font-mono text-sm font-bold text-muted tracking-widest">DEERHOLD</span>
            <span className="font-mono text-sm font-bold text-muted tracking-widest">COTIVITI</span>
            <span className="font-mono text-sm font-bold text-muted tracking-widest">LOGPOINT</span>
            <span className="font-mono text-sm font-bold text-muted tracking-widest">EPAM</span>
          </div>
        </div>
      </section>

      {/* 2. Services Section (6 Cards) */}
      <section id="services" className="w-full bg-surface border-t border-b border-gray-200 py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">Engineering Domains</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">High-performance custom stacks configured to meet strict technical objectives.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { slug: "ai-ml", title: "AI & Machine Learning", desc: "Deploying custom models, vector DB embeddings, and predictive intelligence pipelines.", icon: "🧠" },
              { slug: "web-development", title: "Enterprise Web Development", desc: "Performance-focused, decoupled frontends designed with Next.js and serverless setups.", icon: "💻" },
              { slug: "app-development", title: "Mobile App Development", desc: "Premium hybrid React Native solutions optimized for consumer markets.", icon: "📱" },
              { slug: "system-software", title: "Systems & Custom Software", desc: "Scalable backends, low-latency APIs, and microservice nodes in Go and Rust.", icon: "⚙️" },
              { slug: "ui-ux", title: "UI/UX Design Studio", desc: "Component design systems, interactive prototypes, and pixel-perfect assets.", icon: "🎨" },
              { slug: "web3-blockchain", title: "Blockchain & Web3", desc: "Gas-optimized smart contracts, DeFi routing, and security code reviews.", icon: "🔗" }
            ].map((service) => (
              <div key={service.slug} className="p-8 bg-background border border-gray-200 rounded-xl shadow-sm hover:shadow-premium hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-xs text-muted leading-relaxed mb-6">{service.desc}</p>
                </div>
                <Link href={`/services/${service.slug}`} className="text-primary text-xs font-semibold hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Work Section (3 Cards) */}
      <section id="work" className="w-full py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">Case Studies</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">Proven solutions delivered to scaling global client partners.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { slug: "enterprise-saas", title: "Enterprise SaaS Migration", client: "Optima Health", category: "Web Dev", metric: "60% Load Speed Drop", color: "from-[#0F766E] to-[#14B8A6]" },
              { slug: "ai-automation", title: "AI Scoping & Automation Engine", client: "Vektor Retail", category: "AI/ML", metric: "45% Support Cost Save", color: "from-[#14B8A6] to-[#CCFBF1]" },
              { slug: "web3-dex", title: "DeFi Wallet Protocol", client: "Aether Labs", category: "Web3", metric: "25% Gas Cost Savings", color: "from-[#0F766E] to-[#CCFBF1]" }
            ].map((project) => (
              <div key={project.slug} className="group bg-surface border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
                {/* Visual Thumbnail Placeholder using premium gradients */}
                <div className={`h-48 w-full bg-gradient-to-tr ${project.color} opacity-85 group-hover:opacity-100 transition-opacity`} />
                <div className="p-6">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2 block">{project.category} &bull; {project.client}</span>
                  <h3 className="text-base font-bold text-foreground mb-2">{project.title}</h3>
                  <div className="p-3 bg-background rounded-lg border border-gray-100 text-xs font-semibold text-primary mb-6">
                    {project.metric}
                  </div>
                  <Link href={`/portfolio/${project.slug}`} className="text-primary text-xs font-semibold hover:underline">
                    Read Case Study &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Codex Neural Section */}
      <section className="w-full bg-surface border-t border-b border-gray-200 py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Core Pillars</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">Why Codex Neural?</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">Our execution is guided by deliberate structural standards, avoiding short-term shortcuts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Architecture-First", desc: "We structure databases, API nodes, and components to scale seamlessly, ensuring long-term code maintainability.", icon: "🏗️" },
              { title: "Full-Stack Ownership", desc: "Our engineers own features end-to-end: writing gas-optimized smart contracts, database shaders, and pixel-perfect layouts.", icon: "⚓" },
              { title: "Long-Term Alignment", desc: "We act as dedicated technical co-founders, focusing on client ROI, stable delivery, and transparent scopes.", icon: "🤝" }
            ].map((pillar) => (
              <div key={pillar.title} className="p-6">
                <span className="text-3xl mb-4 block">{pillar.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries Section */}
      <section className="w-full py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Sectors</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">Target Industries</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">Specialized engineering workflows configured to handle sector-specific constraints.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Enterprise & SaaS", bullet1: "Scalable cloud infrastructures", bullet2: "Microservice modular nodes", bullet3: "Decoupled Next.js portals", icon: "🏢" },
              { title: "Fintech & Payments", bullet1: "Secure payment flow capture", bullet2: "Multi-layered encryption pipelines", bullet3: "Ledger transaction auditing", icon: "💳" },
              { title: "Healthcare & Biotech", bullet1: "HIPAA compliance standards", bullet2: "Secure patient portals", bullet3: "Biometric and clinical inputs", icon: "🏥" },
              { title: "E-Commerce & Retail", bullet1: "Serverless storefront setups", bullet2: "Predictive recommendation feeds", bullet3: "Real-time inventory sync", icon: "🛒" },
              { title: "Education & EdTech", bullet1: "LMS plugin integrations", bullet2: "Student progress trackers", bullet3: "Virtual dashboard charts", icon: "🎓" },
              { title: "Logistics & Transport", bullet1: "Geofencing fleet trackers", bullet2: "Real-time dispatch pipelines", bullet3: "Dynamic routing optimization", icon: "🚚" }
            ].map((ind) => (
              <div key={ind.title} className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-2xl mb-3 block">{ind.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-4">{ind.title}</h3>
                <ul className="space-y-2 text-xs text-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">&bull;</span> {ind.bullet1}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">&bull;</span> {ind.bullet2}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">&bull;</span> {ind.bullet3}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Tech Stack Section */}
      <section className="w-full bg-surface border-t border-b border-gray-200 py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Toolsets</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">Engineering Stack</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">Chosen for runtime speed, developer velocity, and long-term codebase safety.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { cat: "Languages", items: ["TypeScript", "Go", "Python", "Solidity"], desc: "Ensures type safety, low latency, and model flexibility." },
              { cat: "Frameworks", items: ["Next.js", "React Native", "FastAPI", "Tailwind CSS"], desc: "Enables fast rendering, native bridges, and clean styling." },
              { cat: "Infrastructure", items: ["AWS", "Docker", "Vercel", "GitHub Actions"], desc: "Guarantees secure deployments, microservice containers, and auto pipelines." },
              { cat: "Databases", items: ["PostgreSQL", "Redis", "Sanity CMS", "MongoDB"], desc: "Ensures ACID reliability, key-value caching, and headless CMS support." }
            ].map((stack) => (
              <div key={stack.cat} className="p-6 bg-background border border-gray-100 rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">{stack.cat}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {stack.items.map((item) => (
                      <span key={item} className="px-2 py-0.5 bg-tint text-[#0d645e] text-[10px] font-semibold rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-muted leading-relaxed">{stack.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Process Section */}
      <section className="w-full py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Workflow</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">Development Process</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">Our step-by-step pipeline ensuring transparent milestones and solid execution.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Discovery", desc: "Scoping business objectives and API specifications." },
              { num: "02", title: "Architecture", desc: "Designing database models, schemas, and layouts." },
              { num: "03", title: "POC Development", desc: "Deploying core mock pipelines to reduce architectural risk." },
              { num: "04", title: "Build & Ship", desc: "Continuous integration, tests, and production code freeze." },
              { num: "05", title: "Support & Scale", desc: "Monitoring performance limits, runs, and SEO rankings." }
            ].map((step) => (
              <div key={step.num} className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm flex flex-col justify-between">
                <span className="text-3xl font-black text-primary/25 font-mono mb-6">{step.num}</span>
                <div>
                  <h3 className="text-xs font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-[11px] text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="w-full bg-surface border-t border-b border-gray-200 py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">Client Feedback</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">Direct quotes from our global client project stakeholders.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Codex Neural migrated our legacy portal in record time. Page load speeds improved by 60%.", name: "Dr. Amit Shah", title: "CTO, Optima Health" },
              { quote: "Their AI automation pipeline saved our customer support ops hours of manual routing.", name: "Sarah Carter", title: "VP Operations, Vektor Retail" },
              { quote: "The gas optimizations they built for our staking contract saved our users thousands.", name: "Marcus Vance", title: "Founder, Aether Labs" }
            ].map((test, idx) => (
              <div key={idx} className="p-8 bg-background border border-gray-100 rounded-xl shadow-sm flex flex-col justify-between">
                <p className="text-xs text-muted leading-relaxed italic mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs font-bold text-foreground">{test.name}</h4>
                  <p className="text-[10px] text-primary font-semibold uppercase tracking-wider">{test.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Banner Section */}
      <section className="w-full py-24 z-10 relative">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="w-full bg-gradient-to-r from-primary to-[#0d645e] p-10 md:p-16 rounded-2xl shadow-xl text-center text-white relative overflow-hidden">
            {/* Glow backdrop inside card */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,184,166,0.35),transparent_60%)]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                Ready to Build <br className="md:hidden" /> Something Exceptional?
              </h2>
              <p className="text-sm md:text-base text-teal-100 max-w-xl mx-auto leading-relaxed mb-8">
                Connect with our systems architects today to scope your database migration, backend microservices, or custom AI models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-teal-50 transition-colors shadow-md">
                  Start a Project
                </Link>
                <a href="https://cal.com/codexneural/scoping" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary border border-teal-400/30 text-white font-bold rounded-lg hover:bg-[#0c5953] transition-colors">
                  Book Scoping Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer Section */}
      <footer className="w-full border-t border-gray-200 bg-surface z-10 relative pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Column 1: Branding */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <span className="font-mono text-lg font-black tracking-tighter text-foreground uppercase">
              CODEX<span className="text-primary font-light">NEURAL</span>
            </span>
            <p className="text-xs text-muted leading-relaxed">
              Building software that lasts. We engineer durable digital infrastructure for global business scales.
            </p>
            {/* Social Anchors */}
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/Manoharaya" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-muted hover:text-primary transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/company/codexneural" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-muted hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-muted">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary">Work</Link></li>
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs text-muted">
              <li><Link href="/services/ai-ml" className="hover:text-primary">AI & Machine Learning</Link></li>
              <li><Link href="/services/web-development" className="hover:text-primary">Web Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-primary">Mobile Apps</Link></li>
              <li><Link href="/services/system-software" className="hover:text-primary">Systems Software</Link></li>
              <li><Link href="/services/ui-ux" className="hover:text-primary">UI/UX Design</Link></li>
              <li><Link href="/services/web3-blockchain" className="hover:text-primary">Blockchain & Web3</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-xs text-muted font-mono">
              <li>connect@codexneural.com</li>
              <li>Kathmandu, Nepal</li>
              <li className="pt-2"><Link href="/privacy" className="text-[10px] text-muted hover:text-primary underline">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-muted">
          <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH RESILIENCE // GLOBAL ENGINEERING SHIFT</p>
        </div>
      </footer>
    </main>
  );
}
