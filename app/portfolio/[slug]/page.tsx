import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudies } from "@/sanity/lib/client";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const project = await getCaseStudyBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Codex Neural Case Study`,
    description: project.challenge.substring(0, 155),
    alternates: {
      canonical: `https://codexneural.com/portfolio/${params.slug}`
    },
    openGraph: {
      title: `${project.title} | Codex Neural`,
      description: project.challenge.substring(0, 155),
      url: `https://codexneural.com/portfolio/${params.slug}`,
      images: [
        {
          url: "https://codexneural.com/og-image.png",
          width: 1200,
          height: 630,
          alt: project.title
        }
      ]
    }
  };
}

export default async function CaseDetailPage({ params }: PageProps) {
  const project = await getCaseStudyBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  // Get all case studies to find the next project slug dynamically
  const allCases = await getCaseStudies();
  const currentIndex = allCases.findIndex((c) => c.slug === params.slug);
  const nextProject = allCases[(currentIndex + 1) % allCases.length];

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
        "name": "Portfolio",
        "item": "https://codexneural.com/portfolio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://codexneural.com/portfolio/${params.slug}`
      }
    ]
  };

  // Project schema
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "creator": {
      "@type": "Organization",
      "name": "Codex Neural",
      "url": "https://codexneural.com"
    },
    "client": {
      "@type": "Organization",
      "name": project.client
    },
    "description": project.challenge
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans z-10">
        
        {/* Decorative background grid and glowing blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex-grow w-full">
          <Link 
            href="/portfolio" 
            className="text-primary font-mono text-xs font-semibold tracking-wider hover:underline mb-8 inline-block"
          >
            &larr; BACK TO CASE STUDIES
          </Link>
          
          {/* Project Title and Client Hero */}
          <div className="max-w-4xl mb-12">
            <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">
              Case Study // {project.client}
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-foreground mb-6 leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Project Quick Facts / Stat Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-surface border border-gray-200 rounded-2xl shadow-sm mb-16 max-w-5xl font-sans">
            <div>
              <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">Client</span>
              <span className="text-sm font-bold text-foreground">{project.client}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">Sector</span>
              <span className="text-sm font-bold text-foreground">{project.sector}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">Timeline</span>
              <span className="text-sm font-bold text-foreground">{project.timeline}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">Our Role</span>
              <span className="text-sm font-bold text-foreground">{project.role}</span>
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <section className="grid lg:grid-cols-2 gap-12 mb-16 max-w-5xl">
            <div className="p-8 bg-surface/50 border border-gray-200 rounded-xl">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                The Challenge
              </h2>
              <p className="text-muted leading-relaxed text-sm md:text-base font-sans">{project.challenge}</p>
            </div>
            <div className="p-8 bg-tint/10 border border-primary/20 rounded-xl">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                Our Solution
              </h2>
              <p className="text-muted leading-relaxed text-sm md:text-base font-sans">{project.solution}</p>
            </div>
          </section>

          {/* Outcomes Summary */}
          {project.outcomes && (
            <section className="p-8 bg-surface border border-gray-200 rounded-xl max-w-5xl mb-16 font-sans">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">Outcomes & Impact</h2>
              <p className="text-muted leading-relaxed text-sm md:text-base font-sans">{project.outcomes}</p>
            </section>
          )}

          {/* Outcomes & Metrics section */}
          {project.metrics && project.metrics.length > 0 && (
            <section className="mb-16 max-w-5xl">
              <h2 className="text-2xl font-heading font-extrabold text-foreground mb-8">Key Performance Metrics</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.metrics.map((metric, i) => (
                  <div 
                    key={i} 
                    className="p-8 bg-surface border border-gray-200 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300"
                  >
                    <span className="text-4xl md:text-5xl font-heading font-black text-primary block mb-2">
                      {metric.value}
                    </span>
                    <span className="text-sm font-bold text-foreground block mb-2">
                      {metric.label}
                    </span>
                    <p className="text-xs text-muted leading-relaxed font-sans">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack Used */}
          <section className="max-w-5xl mb-20">
            <h3 className="text-xs font-mono font-bold text-muted uppercase tracking-wider mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="px-3 py-1.5 bg-surface border border-gray-200 text-foreground text-xs rounded-full font-medium font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Next Project link banner */}
          {nextProject && (
            <section className="max-w-5xl p-8 bg-gradient-to-r from-primary to-accent rounded-2xl text-white shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 opacity-10 font-mono text-9xl font-black select-none pointer-events-none translate-x-12 translate-y-12 transition-transform duration-500 group-hover:scale-110">
                NEXT
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-tint uppercase block mb-1">UP NEXT</span>
                  <h4 className="text-2xl font-heading font-bold">{nextProject.title}</h4>
                  <p className="text-xs text-tint/90 font-sans mt-1">
                    Read how we deployed high-performance solutions for {nextProject.client}.
                  </p>
                </div>
                <div>
                  <Link 
                    href={`/portfolio/${nextProject.slug}`} 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold text-sm rounded-lg hover:bg-tint transition-all duration-300"
                  >
                    Read Next Case Study &rarr;
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>

      </main>
    </>
  );
}
