"use client";

import React from "react";
import Link from "next/link";
import Badge from "./Badge";

// 1. ServiceCard Component
interface ServiceCardProps {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  className?: string;
}

export function ServiceCard({
  slug,
  title,
  desc,
  icon,
  className = ""
}: ServiceCardProps) {
  return (
    <div
      className={`p-8 bg-background border border-gray-200 rounded-xl shadow-sm hover:shadow-premium hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        <span className="text-3xl mb-4 block select-none">{icon}</span>
        <h3 className="text-lg font-bold text-foreground mb-2 font-heading">{title}</h3>
        <p className="text-xs text-muted leading-relaxed mb-6 font-sans">{desc}</p>
      </div>
      <Link
        href={`/services/${slug}`}
        className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1 w-fit"
      >
        Learn more &rarr;
      </Link>
    </div>
  );
}

// 2. CaseStudyCard Component
interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  category: string;
  desc: string;
  className?: string;
}

export function CaseStudyCard({
  slug,
  title,
  client,
  category,
  desc,
  className = ""
}: CaseStudyCardProps) {
  return (
    <div
      className={`p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        <Badge variant="primary" className="mb-4">
          {category}
        </Badge>
        <h3 className="text-xl font-bold text-foreground mb-1 font-heading">{title}</h3>
        <p className="text-xs text-muted mb-4 font-mono">Client: {client}</p>
        <p className="text-sm text-muted leading-relaxed mb-8 font-sans">{desc}</p>
      </div>
      <Link
        href={`/portfolio/${slug}`}
        className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1 w-fit"
      >
        Read Case Study &rarr;
      </Link>
    </div>
  );
}

// 3. BlogCard Component
interface BlogCardProps {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime?: string;
  className?: string;
}

export function BlogCard({
  slug,
  title,
  category,
  publishedAt,
  readTime = "5 min read",
  className = ""
}: BlogCardProps) {
  return (
    <div
      className={`p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        <span className="text-xs font-mono font-semibold text-primary uppercase block mb-2">
          {category}
        </span>
        <h4 className="text-lg font-bold text-foreground mb-2 line-clamp-2 font-heading">
          {title}
        </h4>
        <p className="text-xs text-muted mb-6 font-mono">
          {publishedAt} &bull; {readTime}
        </p>
      </div>
      <Link
        href={`/blog/${slug}`}
        className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1 w-fit"
      >
        Read Article &rarr;
      </Link>
    </div>
  );
}

// 4. TeamCard Component
interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  github: string;
  twitter?: string;
  className?: string;
}

export function TeamCard({
  name,
  role,
  bio,
  linkedin,
  github,
  twitter,
  className = ""
}: TeamCardProps) {
  return (
    <div
      className={`p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        <h3 className="text-lg font-bold text-foreground mb-1 font-heading">{name}</h3>
        <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4">
          {role}
        </p>
        <p className="text-xs text-muted leading-relaxed mb-6 font-sans">{bio}</p>
      </div>
      <div className="flex gap-4 pt-4 border-t border-gray-100 font-mono text-xs">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
        >
          LinkedIn
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
        >
          GitHub
        </a>
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            Twitter
          </a>
        )}
      </div>
    </div>
  );
}
