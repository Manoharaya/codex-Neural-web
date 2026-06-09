"use client";

import Link from "next/link";
import { useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: "future-ai-enterprise",
    title: "The Future of AI in Enterprise Infrastructure",
    publishedAt: "June 8, 2026",
    excerpt: "Exploring how global enterprises are adopting local, open-source large language models (LLMs) to preserve data sovereignty and reduce operational cloud spend.",
    category: "Applied Intelligence"
  },
  {
    slug: "nextjs14-best-practices",
    title: "Next.js 14 App Router: Production Best Practices",
    publishedAt: "May 24, 2026",
    excerpt: "A compilation of core patterns for structuring Next.js 14 codebases, dealing with Server Actions, layout composition, and caching optimizations in high-traffic applications.",
    category: "Web Engineering"
  },
  {
    slug: "web3-security-standards",
    title: "Web3 Security: Hardening Smart Contracts",
    publishedAt: "April 15, 2026",
    excerpt: "An in-depth review of smart contract vulnerabilities, gas-saving assembly patterns, and strict Foundry testing guidelines for secure blockchain deployments.",
    category: "Blockchain & Web3"
  }
];

export default function Blog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

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
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow grid lg:grid-cols-[1fr_320px] gap-12 items-start">
        {/* Left Column: Articles list */}
        <div>
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Insights</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
              The Neural Loop
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Engineering notes, industry studies, and design principles compiled by our distributed team.
            </p>
          </div>

          <div className="space-y-10 mb-20">
            {posts.map((post) => (
              <article key={post.slug} className="group pb-8 border-b border-gray-200">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{post.category}</span>
                <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-xs font-mono text-muted mb-4">{post.publishedAt}</p>
                <p className="text-sm text-muted leading-relaxed mb-6">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary font-semibold text-sm hover:underline">
                  Read Article &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Newsletter Subscription */}
        <aside className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm lg:sticky lg:top-8">
          <h3 className="text-md font-bold text-foreground mb-2">Tertiary Option: Newsletter</h3>
          <p className="text-xs text-muted mb-4 leading-relaxed">
            Subscribe to our newsletter to receive our monthly notes on systems architecture, AI deployment, and Web3 security.
          </p>
          {subscribed ? (
            <div className="p-3 bg-tint/20 border border-primary/20 text-primary text-xs font-medium rounded-lg">
              Successfully subscribed!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. you@domain.com"
                className="w-full px-3 py-2 text-xs bg-background border border-gray-200 rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-[#0d645e] transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </aside>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
        <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
        <p>ESTABLISHED IN NEPAL // GLOBAL OPERATIONS</p>
      </footer>
    </main>
  );
}
