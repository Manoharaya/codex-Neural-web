"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

interface Author {
  name: string;
  role: string;
  avatar: string; // fallback initials
  bio: string;
}

interface BlogDetail {
  title: string;
  publishedAt: string;
  readTime: string;
  category: string;
  author: Author;
  body: string[];
}

const authors: Record<string, Author> = {
  "manohar": {
    name: "Manohar",
    role: "Founder & Lead Architect",
    avatar: "M",
    bio: "Manohar builds high-throughput frontend and cloud infrastructure for global enterprise companies."
  },
  "aman": {
    name: "Aman Yadav",
    role: "Lead AI Engineer",
    avatar: "AY",
    bio: "Aman specializes in fine-tuning open-source LLMs and configuring custom RAG search engines."
  },
  "anuj": {
    name: "Anuj",
    role: "Smart Contract Auditor",
    avatar: "A",
    bio: "Anuj conducts security reviews on EVM systems and optimizes bytecode execution on Ethereum."
  }
};

const blogDetailsMap: Record<string, BlogDetail> = {
  "future-ai-enterprise": {
    title: "The Future of AI in Enterprise Infrastructure",
    publishedAt: "June 8, 2026",
    readTime: "5 min read",
    category: "Applied Intelligence",
    author: authors.aman,
    body: [
      "As artificial intelligence transitions from a novelty to a core system requirements component, global enterprises face a critical fork in the road: lease proprietary cloud API interfaces or host local open-source LLM model weights.",
      "Leasing proprietary models exposes enterprise systems to data sovereignty risks and high transactional costs. On the other hand, running local open-source models (such as Llama 3 or Mistral) on dedicated GPU containers offers complete control, privacy compliance, and predictability in IT infrastructure costs.",
      "To deploy AI locally with high-performance metrics, engineers must implement efficient context vector retrieval (RAG pipelines), prune redundant model layers, and partition databases so intelligence acts as a secure, local neural network.",
      "Ultimately, the competitive advantage will lie with companies that own their neural data pipelines rather than renting generic brains from massive monopolistic APIs. The future of corporate IT architecture is distributed, localized, and open-source."
    ]
  },
  "nextjs14-best-practices": {
    title: "Next.js 14 App Router: Production Best Practices",
    publishedAt: "May 24, 2026",
    readTime: "4 min read",
    category: "Web Engineering",
    author: authors.manohar,
    body: [
      "Next.js 14 introduces foundational features for writing performant react applications, notably dynamic Server Actions and streaming layout structures.",
      "In high-traffic systems, it is recommended to keep page shells static by default. Use loading boundaries for heavy database fetches, and keep your interactive event handlers encapsulated inside client-side components using the 'use client' directive.",
      "Additionally, leveraging absolute import mapping (@/*) avoids long, confusing relative path directories, keeping imports clean and developer operations streamlined.",
      "Optimizing initial bundles using lightweight library alternatives, auditing custom fonts, and lazy loading heavy media elements guarantees that your project consistently clocks sub-second FCP speeds worldwide."
    ]
  },
  "web3-security-standards": {
    title: "Web3 Security: Hardening Smart Contracts",
    publishedAt: "April 15, 2026",
    readTime: "6 min read",
    category: "Blockchain & Web3",
    author: authors.anuj,
    body: [
      "Deploying Solidity code onto public ledgers demands rigorous engineering scrutiny. Unlike traditional backends, smart contract bugs can lead to direct, irreversible financial loss.",
      "Engineers should run comprehensive unit tests using Foundry, verify contract states using invariant testing, and optimize gas fees by avoiding redundant storage writes and utilizing optimized assembly blocks when safe.",
      "Always ensure that ownership transfer utilities and contract access levels are thoroughly locked down before mainnet deployment.",
      "By adhering to standard security checklists like the Checks-Effects-Interactions pattern and using reputable libraries like OpenZeppelin, development teams can launch new staking and swap nodes with complete confidence."
    ]
  }
};

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogDetailsMap[params.slug];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  if (!post) {
    notFound();
  }

  // Scroll Progress logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form handle
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  // Get related articles
  const allSlugs = Object.keys(blogDetailsMap);
  const relatedSlugs = allSlugs.filter((s) => s !== params.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Content */}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full">
        <Link href="/blog" className="text-primary font-mono text-xs font-semibold tracking-wider hover:underline mb-6 inline-block">
          &larr; BACK TO INSIGHTS
        </Link>
        
        {/* Article Header */}
        <div className="mb-10 max-w-4xl">
          <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3 block">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-heading font-black tracking-tight text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Author & Info Row */}
          <div className="flex flex-wrap items-center gap-4 py-4 border-t border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-tint rounded-full flex items-center justify-center font-mono font-bold text-primary">
                {post.author.avatar}
              </div>
              <div>
                <span className="text-sm font-bold text-foreground block leading-none">{post.author.name}</span>
                <span className="text-xs text-muted font-sans mt-0.5 block">{post.author.role}</span>
              </div>
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-3 text-xs font-mono text-muted">
              <span>{post.publishedAt}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-7xl">
          {/* Article Body */}
          <div className="lg:col-span-2">
            <article className="prose prose-slate text-muted leading-relaxed space-y-6 text-sm md:text-base font-sans">
              {post.body.map((para, idx) => (
                <p key={idx} className="first-of-type:text-foreground first-of-type:text-base first-of-type:font-medium">
                  {para}
                </p>
              ))}
            </article>

            {/* Author Biography Card */}
            <div className="mt-12 p-6 bg-surface border border-gray-200 rounded-xl flex items-start gap-4">
              <div className="w-12 h-12 bg-tint rounded-full flex items-center justify-center font-mono font-bold text-primary text-lg flex-shrink-0">
                {post.author.avatar}
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Written by {post.author.name}</h4>
                <p className="text-xs text-muted leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28">
            {/* Newsletter CTA */}
            <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-base font-heading font-bold text-foreground mb-2">Subscribe to Insights</h3>
              <p className="text-xs text-muted leading-relaxed mb-4">
                Get high-fidelity software engineering and AI system insights delivered straight to your inbox.
              </p>
              {subscribed ? (
                <div className="p-4 bg-tint/30 border border-primary/20 rounded-lg text-center text-xs font-semibold text-primary">
                  🎉 Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-[#0d645e] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Quick Share Widget */}
            <div className="p-6 bg-surface/50 border border-gray-200 rounded-xl">
              <h4 className="text-xs font-mono font-bold text-muted uppercase tracking-wider mb-3">Share this article</h4>
              <div className="flex gap-2">
                <button 
                  onClick={() => alert("Copied page link to clipboard.")}
                  className="px-3 py-1.5 bg-surface border border-gray-200 rounded-lg text-xs font-mono font-semibold text-foreground hover:bg-gray-50 flex items-center gap-1.5"
                >
                  <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 10.742l4.636-2.318m0 0a3 3 0 100-4.243 3 3 0 000 4.243zm0 5.636l-4.636-2.318m0 0a3 3 0 110-4.243 3 3 0 010 4.243z" />
                  </svg>
                  Copy Link
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        <section className="mt-20 pt-10 border-t border-gray-200 max-w-7xl">
          <h3 className="text-xl font-heading font-extrabold text-foreground mb-8">Related Insights</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedSlugs.map((slug) => {
              const rPost = blogDetailsMap[slug];
              return (
                <div key={slug} className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary uppercase block mb-2">{rPost.category}</span>
                    <h4 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{rPost.title}</h4>
                    <p className="text-xs text-muted mb-4 font-mono">{rPost.publishedAt} &bull; {rPost.readTime}</p>
                  </div>
                  <Link href={`/blog/${slug}`} className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1">
                    Read Article &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>

    </main>
  );
}
