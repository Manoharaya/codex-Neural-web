"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { MockBlogPost } from "@/sanity/lib/client";

interface BlogClientProps {
  posts: MockBlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Dynamic list of categories
  const categories = Array.from(new Set(posts.map((p) => p.category))).filter(Boolean);

  // States
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  // Sync state from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const queryParam = searchParams.get("q");

    if (categoryParam) setSelectedCategory(categoryParam);
    if (queryParam) setSearchQuery(queryParam);
  }, [searchParams]);

  // Sync state with URL params
  const updateURL = (category: string, query: string) => {
    const params = new URLSearchParams();
    if (category !== "All") params.set("category", category);
    if (query.trim()) params.set("q", query);

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    updateURL(cat, searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    updateURL(selectedCategory, val);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Featured post is the first one in the list (if no active filter)
  const featuredPost = searchQuery || selectedCategory !== "All" ? null : posts[0];
  const regularPosts = featuredPost ? filteredPosts.slice(1) : filteredCases();

  function filteredCases() {
    return filteredPosts;
  }

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start font-sans">
      
      {/* Left Column: Articles & Filters */}
      <div className="space-y-12">
        
        {/* Search & Category Pills */}
        <div className="space-y-4">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search articles, keywords, authors..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"
            />
            <span className="absolute left-3.5 top-3.5 text-muted select-none text-sm pointer-events-none">🔍</span>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            <button
              onClick={() => handleCategorySelect("All")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                selectedCategory === "All"
                  ? "bg-primary text-white border-primary"
                  : "bg-surface text-muted border-gray-200 hover:text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-surface text-muted border-gray-200 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post Hero */}
        {featuredPost && (
          <article className="p-8 bg-surface border border-gray-200 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 grid md:grid-cols-2 gap-8 items-center group">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider bg-tint/30 px-2 py-0.5 rounded w-fit block">
                Featured Article
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground group-hover:text-primary transition-colors duration-300">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <div className="flex items-center gap-3 text-xs font-mono text-muted">
                <span>{featuredPost.publishedAt}</span>
                <span>&bull;</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <p className="text-xs md:text-sm text-muted leading-relaxed font-sans line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <div className="w-6 h-6 rounded-full bg-tint text-primary font-heading font-bold text-[10px] flex items-center justify-center border border-primary/10">
                  {featuredPost.author.avatarText}
                </div>
                <span className="text-xs font-bold text-foreground font-sans">{featuredPost.author.name}</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10 h-48 flex items-center justify-center font-mono text-primary/30 font-black text-4xl select-none relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:15px_15px]" />
              INSIGHTS
            </div>
          </article>
        )}

        {/* Regular Posts List */}
        <div className="space-y-8">
          {regularPosts.map((post) => (
            <article 
              key={post.slug} 
              className="group pb-8 border-b border-gray-200 flex flex-col md:flex-row gap-6 justify-between items-start"
            >
              <div className="space-y-3 flex-grow max-w-xl">
                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider block">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <div className="flex items-center gap-3 text-xs font-mono text-muted">
                  <span>{post.publishedAt}</span>
                  <span>&bull;</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-xs md:text-sm text-muted leading-relaxed font-sans line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-5 h-5 rounded-full bg-tint text-primary font-heading font-bold text-[9px] flex items-center justify-center border border-primary/10">
                    {post.author.avatarText}
                  </div>
                  <span className="text-xs text-foreground font-sans">{post.author.name}</span>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="text-primary font-bold text-xs hover:text-[#0c5953] transition-colors font-mono tracking-wider flex-shrink-0 self-end md:self-auto"
              >
                READ ARTICLE &rarr;
              </Link>
            </article>
          ))}

          {filteredPosts.length === 0 && (
            <div className="p-16 bg-surface border border-gray-200 rounded-2xl text-center text-muted">
              <span className="text-4xl block mb-3">🔍</span>
              <h4 className="text-base font-bold text-foreground mb-1">No Matching Articles</h4>
              <p className="text-xs max-w-sm mx-auto">
                No insights could be found matching your parameters. Reset filters to explore all logs.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Right Column: Newsletter Subscription Sidebar */}
      <aside className="p-6 bg-surface border border-gray-200 rounded-2xl shadow-sm lg:sticky lg:top-24 space-y-4">
        <h3 className="text-base font-bold font-heading text-foreground">Subscribe to Insights</h3>
        <p className="text-xs text-muted leading-relaxed font-sans">
          Subscribe to our newsletter to receive our monthly notes on systems architecture, AI deployment, and Web3 security.
        </p>
        
        {subscribed ? (
          <div className="p-3 bg-tint/20 border border-primary/20 text-primary text-xs font-semibold rounded-lg text-center font-sans">
            🎉 Successfully subscribed!
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3 font-sans">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-xs bg-background border border-gray-200 rounded-lg text-foreground focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-[#0c5953] transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </aside>
      
    </div>
  );
}

// Inline Next.js 14 Link custom implementation to bypass direct import type conflicts
function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
