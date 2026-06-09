"use client";

import Link from "next/link";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

const team: TeamMember[] = [
  {
    name: "Manohar Singh",
    role: "Founder & CEO",
    bio: "Leading strategic vision and operational excellence. Orchestrating business development, client relations, and day-to-day operations.",
    linkedin: "https://www.linkedin.com/in/manohar-cn",
    github: "https://github.com/Manoharaya",
    twitter: "https://x.com/codexneural"
  },
  {
    name: "Anuj Pokhrel",
    role: "CTO & Backend Developer",
    bio: "Architecting scalable backend systems and leading technical strategy. Building robust server infrastructure with focus on security and reliability.",
    linkedin: "https://www.linkedin.com/in/anujpokharel2468",
    github: "https://github.com/Anuj12Pokharel",
    twitter: "https://x.com/codexneural"
  },
  {
    name: "Aman Yadav",
    role: "Advisor & Data Analysis Specialist",
    bio: "Providing strategic guidance and extracting actionable insights from complex datasets. Driving data-driven decision making and business intelligence.",
    linkedin: "https://www.linkedin.com/company/codexneural",
    github: "https://github.com/Manoharaya",
    twitter: "https://x.com/codexneural"
  },
  {
    name: "Rahul Sah",
    role: "Backend Developer",
    bio: "Specializing in the development of robust, scalable backend architectures. Ensuring high performance and seamless server-side integration.",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-sah-b77885148/",
    github: "https://github.com/rahul-4321/",
    twitter: "https://x.com/codexneural"
  },
  {
    name: "Anjali Singh",
    role: "Frontend Developer",
    bio: "Crafting responsive, performant user interfaces with modern frameworks. Designing intuitive user experiences and interactive implementations.",
    linkedin: "https://www.linkedin.com/in/anjali-singh-11138b271/",
    github: "https://github.com/Anjalisingh44",
    twitter: "https://x.com/codexneural"
  },
  {
    name: "Priti Gupta",
    role: "SEO Specialist",
    bio: "Optimizing digital presence and search visibility. Implementing data-driven SEO strategies to drive organic growth and improve rankings.",
    linkedin: "https://www.linkedin.com/in/priti-gupta-1b5a68217",
    github: "https://github.com/priteegupta",
    twitter: "https://x.com/codexneural"
  },
  {
    name: "Bibek Sah",
    role: "DevOps Engineer",
    bio: "Building intelligent automation pipelines and CI/CD workflows. Streamlining development processes through infrastructure as code.",
    linkedin: "https://www.linkedin.com/in/bibek-shah-8b460b2bb/",
    github: "https://github.com/bibekshah220",
    twitter: "https://x.com/codexneural"
  }
];

export default function About() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Sticky Header */}
      <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between relative">
          <div className="flex items-center gap-10">
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

        {/* Mobile menu overlay */}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full z-10">
        
        {/* Mission Hero */}
        <section className="max-w-3xl mb-20 animate-fade-in-up">
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

        {/* Team Grid */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Our People</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">Meet the Network</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 font-heading">{member.name}</h3>
                  <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-xs text-muted leading-relaxed mb-6 font-sans">{member.bio}</p>
                </div>
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted hover:text-primary transition-colors flex items-center gap-1">
                    LinkedIn
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted hover:text-primary transition-colors flex items-center gap-1">
                    GitHub
                  </a>
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted hover:text-primary transition-colors flex items-center gap-1">
                      Twitter
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
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
            <div className="w-16 h-16 bg-tint rounded-full blur-xl animate-pulse-glow absolute" />
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

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted relative z-10">
        <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
        <p>ESTABLISHED IN NEPAL // GLOBAL OPERATIONS</p>
      </footer>
    </main>
  );
}
