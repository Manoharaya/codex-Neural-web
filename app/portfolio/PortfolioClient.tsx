"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MockCaseStudy } from "@/sanity/lib/client";

interface PortfolioClientProps {
  cases: MockCaseStudy[];
}

export default function PortfolioClient({ cases }: PortfolioClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Categories of filters
  const industries = Array.from(new Set(cases.map((c) => c.industry))).filter(Boolean);
  const services = Array.from(new Set(cases.flatMap((c) => c.services))).filter(Boolean);
  const technologies = Array.from(new Set(cases.flatMap((c) => c.tech))).filter(Boolean);

  // Filter state
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<string>("All");
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Initialize filters from URL params
  useEffect(() => {
    const industryParam = searchParams.get("industry");
    const serviceParam = searchParams.get("service");
    const techParam = searchParams.get("tech");
    const queryParam = searchParams.get("q");

    if (industryParam) setSelectedIndustry(industryParam);
    if (serviceParam) setSelectedService(serviceParam);
    if (techParam) setSelectedTech(techParam);
    if (queryParam) setSearchQuery(queryParam);
  }, [searchParams]);

  // Sync state with URL params
  const updateURL = (industry: string, service: string, tech: string, query: string) => {
    const params = new URLSearchParams();
    if (industry !== "All") params.set("industry", industry);
    if (service !== "All") params.set("service", service);
    if (tech !== "All") params.set("tech", tech);
    if (query.trim()) params.set("q", query);
    
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleIndustrySelect = (ind: string) => {
    setSelectedIndustry(ind);
    updateURL(ind, selectedService, selectedTech, searchQuery);
  };

  const handleServiceSelect = (serv: string) => {
    setSelectedService(serv);
    updateURL(selectedIndustry, serv, selectedTech, searchQuery);
  };

  const handleTechSelect = (t: string) => {
    setSelectedTech(t);
    updateURL(selectedIndustry, selectedService, t, searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    updateURL(selectedIndustry, selectedService, selectedTech, val);
  };

  const handleClearFilters = () => {
    setSelectedIndustry("All");
    setSelectedService("All");
    setSelectedTech("All");
    setSearchQuery("");
    router.push(pathname);
  };

  // Filter case studies
  const filteredCases = cases.filter((project) => {
    const matchesIndustry = selectedIndustry === "All" || project.industry === selectedIndustry;
    const matchesService = selectedService === "All" || project.services.includes(selectedService);
    const matchesTech = selectedTech === "All" || project.tech.includes(selectedTech);
    
    const matchesSearch =
      !searchQuery.trim() ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesIndustry && matchesService && matchesTech && matchesSearch;
  });

  return (
    <div className="space-y-10">
      
      {/* Search & Filter Bar */}
      <div className="p-6 bg-surface border border-gray-200 rounded-2xl shadow-sm space-y-6 font-sans">
        
        {/* Search input */}
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search case studies, stacks, clients..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground font-sans pl-10"
          />
          <span className="absolute left-3.5 top-3.5 text-muted select-none text-sm pointer-events-none">🔍</span>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                updateURL(selectedIndustry, selectedService, selectedTech, "");
              }}
              className="absolute right-3 top-3 text-muted hover:text-foreground text-sm font-semibold"
            >
              &times;
            </button>
          )}
        </div>

        {/* Filter categories */}
        <div className="grid md:grid-cols-3 gap-6 pt-2">
          
          {/* Industries filters */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider block">
              Filter by Industry
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => handleIndustrySelect("All")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  selectedIndustry === "All"
                    ? "bg-primary text-white border-primary"
                    : "bg-background text-muted border-gray-100 hover:text-foreground"
                }`}
              >
                All
              </button>
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => handleIndustrySelect(ind)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    selectedIndustry === ind
                      ? "bg-primary text-white border-primary"
                      : "bg-background text-muted border-gray-100 hover:text-foreground"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Services filters */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider block">
              Filter by Service
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => handleServiceSelect("All")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  selectedService === "All"
                    ? "bg-primary text-white border-primary"
                    : "bg-background text-muted border-gray-100 hover:text-foreground"
                }`}
              >
                All
              </button>
              {services.map((serv) => (
                <button
                  key={serv}
                  onClick={() => handleServiceSelect(serv)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    selectedService === serv
                      ? "bg-primary text-white border-primary"
                      : "bg-background text-muted border-gray-100 hover:text-foreground"
                  }`}
                >
                  {serv}
                </button>
              ))}
            </div>
          </div>

          {/* Tech stack filters */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider block">
              Filter by Technology
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto pr-1">
              <button
                onClick={() => handleTechSelect("All")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  selectedTech === "All"
                    ? "bg-primary text-white border-primary"
                    : "bg-background text-muted border-gray-100 hover:text-foreground"
                }`}
              >
                All
              </button>
              {technologies.map((t) => (
                <button
                  key={t}
                  onClick={() => handleTechSelect(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    selectedTech === t
                      ? "bg-primary text-white border-primary"
                      : "bg-background text-muted border-gray-100 hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Clear Filters Indicator */}
        {(selectedIndustry !== "All" || selectedService !== "All" || selectedTech !== "All" || searchQuery) && (
          <div className="flex justify-between items-center border-t border-gray-100 pt-4 text-xs">
            <span className="text-muted">
              Showing {filteredCases.length} of {cases.length} case studies
            </span>
            <button
              onClick={handleClearFilters}
              className="text-primary hover:text-[#0c5953] font-bold font-mono tracking-wider uppercase"
            >
              Reset Filters &times;
            </button>
          </div>
        )}
      </div>

      {/* Case Studies Grid with animated reflow */}
      <motion.section 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredCases.map((project) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider bg-tint/30 px-2 py-0.5 rounded">
                    {project.industry}
                  </span>
                  {project.featured && (
                    <span className="text-[9px] font-mono font-black text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                      ★ Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted font-sans mb-4">Client: {project.client}</p>
                <p className="text-xs md:text-sm text-muted leading-relaxed mb-6 line-clamp-3 font-sans">
                  {project.challenge}
                </p>
                
                {/* Micro tech pills */}
                <div className="flex flex-wrap gap-1 mb-8">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] font-mono font-semibold text-muted bg-background px-1.5 py-0.5 rounded border border-gray-100">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[9px] font-mono font-semibold text-muted bg-background px-1.5 py-0.5 rounded border border-gray-100">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <Link
                href={`/portfolio/${project.slug}`}
                className="text-primary font-bold text-sm hover:text-[#0c5953] transition-colors inline-flex items-center gap-1 font-mono tracking-wider mt-auto"
              >
                READ CASE STUDY &rarr;
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredCases.length === 0 && (
          <div className="col-span-full p-16 bg-surface border border-gray-200 rounded-2xl text-center text-muted font-sans">
            <span className="text-4xl block mb-3">🔍</span>
            <h4 className="text-base font-bold text-foreground mb-1">No Matching Case Studies</h4>
            <p className="text-xs max-w-sm mx-auto">
              We couldn&apos;t find any case studies matching your selected parameters. Try expanding your search queries.
            </p>
          </div>
        )}
      </motion.section>
      
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
