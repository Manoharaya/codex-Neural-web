import React from "react";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/sanity/lib/client";
import BlogDetailClient from "./BlogDetailClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Codex Neural Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `https://codexneural.com/blog/${params.slug}`
    },
    openGraph: {
      title: `${post.title} | Codex Neural`,
      description: post.excerpt,
      url: `https://codexneural.com/blog/${params.slug}`,
      images: [
        {
          url: "https://codexneural.com/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    }
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  // Get related blog posts dynamically (excluding current post)
  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://codexneural.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://codexneural.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://codexneural.com/blog/${params.slug}`
      }
    ]
  };

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Codex Neural",
      "url": "https://codexneural.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogDetailClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
