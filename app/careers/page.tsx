"use client";

import Link from "next/link";

interface JobOpening {
  title: string;
  dept: string;
  location: string;
  type: string;
}

const openings: JobOpening[] = [
  {
    title: "Senior AI/ML Engineer",
    dept: "Applied Intelligence",
    location: "Remote (Kathmandu, NP / Global)",
    type: "Full-time"
  },
  {
    title: "Full Stack Engineer (Next.js & Go)",
    dept: "Systems Engineering",
    location: "Remote (Kathmandu, NP / Global)",
    type: "Full-time"
  },
  {
    title: "Technical Writer & Product Marketer",
    dept: "Growth & Communications",
    location: "Remote (Global)",
    type: "Contract"
  }
];

export default function Careers() {
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
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Join the Network</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Node Admittance
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            We are a distributed collective. We value architectural integrity, engineering excellence, and deliberate constraint. Explore our active positions below.
          </p>
        </div>

        {/* Listings Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 pb-3 border-b border-gray-200">Active Openings</h2>
          <div className="space-y-6">
            {openings.map((job) => (
              <div key={job.title} className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{job.title}</h3>
                  <p className="text-sm text-muted mb-2 md:mb-0">{job.dept} &bull; {job.location}</p>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-tint text-primary text-xs font-semibold rounded-full mr-4">
                    {job.type}
                  </span>
                  <Link href="/contact" className="inline-block px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-[#0d645e] transition-all">
                    Apply Now &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
