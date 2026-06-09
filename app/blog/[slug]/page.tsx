"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogDetail {
  title: string;
  publishedAt: string;
  category: string;
  body: string[];
}

const blogDetailsMap: Record<string, BlogDetail> = {
  "future-ai-enterprise": {
    title: "The Future of AI in Enterprise Infrastructure",
    publishedAt: "June 8, 2026",
    category: "Applied Intelligence",
    body: [
      "As artificial intelligence transitions from a novelty to a core system requirements component, global enterprises face a critical fork in the road: lease proprietary cloud API interfaces or host local open-source LLM model weights.",
      "Leasing proprietary models exposes enterprise systems to data sovereignty risks and high transactional costs. On the other hand, running local open-source models (such as Llama 3 or Mistral) on dedicated GPU containers offers complete control, privacy compliance, and predictability in IT infrastructure costs.",
      "To deploy AI locally with high-performance metrics, engineers must implement efficient context vector retrieval (RAG pipelines), prune redundant model layers, and partition databases so intelligence acts as a secure, local neural network."
    ]
  },
  "nextjs14-best-practices": {
    title: "Next.js 14 App Router: Production Best Practices",
    publishedAt: "May 24, 2026",
    category: "Web Engineering",
    body: [
      "Next.js 14 introduces foundational features for writing performant react applications, notably dynamic Server Actions and streaming layout structures.",
      "In high-traffic systems, it is recommended to keep page shells static by default. Use loading boundaries for heavy database fetches, and keep your interactive event handlers encapsulated inside client-side components using the 'use client' directive.",
      "Additionally, leveraging absolute import mapping (@/*) avoids long, confusing relative path directories, keeping imports clean and developer operations streamlined."
    ]
  },
  "web3-security-standards": {
    title: "Web3 Security: Hardening Smart Contracts",
    publishedAt: "April 15, 2026",
    category: "Blockchain & Web3",
    body: [
      "Deploying Solidity code onto public ledgers demands rigorous engineering scrutiny. Unlike traditional backends, smart contract bugs can lead to direct, irreversible financial loss.",
      "Engineers should run comprehensive unit tests using Foundry, verify contract states using invariant testing, and optimize gas fees by avoiding redundant storage writes and utilizing optimized assembly blocks when safe.",
      "Always ensure that ownership transfer utilities and contract access levels are thoroughly locked down before mainnet deployment."
    ]
  }
};

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogDetailsMap[params.slug];
  
  if (!post) {
    notFound();
  }

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
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 flex-grow">
        <Link href="/blog" className="text-primary font-mono text-xs font-semibold tracking-wider hover:underline mb-4 inline-block">
          &larr; BACK TO INSIGHTS
        </Link>
        
        <div className="mb-8">
          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xs font-mono text-muted">{post.publishedAt}</p>
        </div>

        {/* Article Body */}
        <section className="prose prose-slate max-w-none text-muted leading-relaxed space-y-6 text-sm md:text-base mb-16">
          {post.body.map((para, idx) => (
            <p key={idx}>{para}</p>
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
