"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MockBlogPost } from "@/sanity/lib/client";

interface BlogDetailClientProps {
  post: MockBlogPost;
  relatedPosts: MockBlogPost[];
}

export default function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Copied page link to clipboard.");
  };

  return (
    <>
      {/* Reading Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex-grow w-full relative z-10 font-sans">
        <Link 
          href="/blog" 
          className="text-primary font-mono text-xs font-semibold tracking-wider hover:underline mb-8 inline-block"
        >
          &larr; BACK TO INSIGHTS
        </Link>
        
        {/* Article Header */}
        <div className="mb-10 max-w-4xl">
          <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3 block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-black tracking-tight text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Author & Info Row */}
          <div className="flex flex-wrap items-center gap-4 py-4 border-t border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-tint rounded-full flex items-center justify-center font-mono font-bold text-primary select-none">
                {post.author.avatarText}
              </div>
              <div>
                <span className="text-sm font-bold text-foreground block leading-none">{post.author.name}</span>
                <span className="text-xs text-muted font-sans mt-1 block">{post.author.role}</span>
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
          <div className="lg:col-span-2 space-y-8">
            <article className="prose prose-slate text-muted leading-relaxed space-y-6 text-sm md:text-base font-sans">
              {post.body.map((para, idx) => {
                // If the paragraph starts with a markdown-like code block identifier, render a clean code component
                if (para.startsWith("```")) {
                  const cleanText = para.replace(/```[a-z]*/g, "").replace(/```/g, "").trim();
                  return (
                    <pre key={idx} className="bg-[#0F172A] text-emerald-400 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800 my-4 shadow-sm">
                      <code>{cleanText}</code>
                    </pre>
                  );
                }

                // If paragraph is a blockquote (starts with "> ")
                if (para.startsWith("> ")) {
                  return (
                    <blockquote key={idx} className="border-l-4 border-primary pl-4 italic text-foreground bg-surface p-3 rounded-r-lg my-4">
                      {para.replace(/^>\s*/, "")}
                    </blockquote>
                  );
                }

                // Callout boxes (starts with "[!] ")
                if (para.startsWith("[!] ")) {
                  return (
                    <div key={idx} className="p-4 bg-tint/20 border border-primary/20 rounded-xl text-xs md:text-sm text-foreground my-4 flex items-start gap-3">
                      <span className="text-primary text-base select-none mt-0.5">ℹ</span>
                      <div>
                        {para.replace(/^\[!\]\s*/, "")}
                      </div>
                    </div>
                  );
                }

                // Normal Paragraph
                return (
                  <p 
                    key={idx} 
                    className="first-of-type:text-foreground first-of-type:text-base first-of-type:font-medium leading-relaxed"
                  >
                    {para}
                  </p>
                );
              })}
            </article>

            {/* Author Biography Card */}
            <div className="mt-12 p-6 bg-surface border border-gray-200 rounded-xl flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 bg-tint rounded-full flex items-center justify-center font-mono font-bold text-primary text-lg flex-shrink-0 select-none">
                {post.author.avatarText}
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Written by {post.author.name}</h4>
                <p className="text-xs text-muted leading-relaxed font-sans">{post.author.bio}</p>
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
                <div className="p-4 bg-tint/30 border border-primary/20 rounded-lg text-center text-xs font-semibold text-primary font-sans">
                  🎉 Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3 font-sans">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
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
              <div className="flex gap-2 font-sans">
                <button 
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 bg-surface border border-gray-200 rounded-lg text-xs font-mono font-semibold text-foreground hover:bg-gray-50 flex items-center gap-1.5"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-10 border-t border-gray-200 max-w-7xl">
            <h3 className="text-xl font-heading font-extrabold text-foreground mb-8">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((rPost) => (
                <div 
                  key={rPost.slug} 
                  className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary uppercase block mb-2">{rPost.category}</span>
                    <h4 className="text-lg font-bold font-heading text-foreground mb-2 line-clamp-2">{rPost.title}</h4>
                    <p className="text-xs text-muted mb-4 font-mono">{rPost.publishedAt} &bull; {rPost.readTime}</p>
                  </div>
                  <Link 
                    href={`/blog/${rPost.slug}`} 
                    className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1 font-mono mt-auto"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
