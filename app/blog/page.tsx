import React, { Suspense } from "react";
import { getBlogPosts } from "@/sanity/lib/client";
import BlogClient from "./BlogClient";

export const revalidate = 600; // ISR revalidation (600s)

export const metadata = {
  title: "Insights | Codex Neural",
  description: "Engineering notes, industry studies, and design principles compiled by our distributed team.",
};

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex-grow w-full">
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">Insights</p>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground mb-6">
            The Neural Loop
          </h1>
          <p className="text-lg text-muted leading-relaxed font-sans">
            Engineering notes, industry studies, and design principles compiled by our distributed team.
          </p>
        </div>

        {/* Suspense wrapper for dynamic search parameters */}
        <Suspense fallback={<div className="text-sm font-mono text-muted animate-pulse">Loading posts...</div>}>
          <BlogClient posts={posts} />
        </Suspense>
      </div>
    </main>
  );
}
