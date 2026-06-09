"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceDetail {
  title: string;
  desc: string;
  included: string[];
  approach: string;
  tech: string[];
  caseStudyTitle: string;
  caseStudySlug: string;
  faqs: { q: string; a: string }[];
}

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full relative z-10">
      <Link
        href="/services"
        className="text-primary font-mono text-xs font-semibold tracking-wider hover:underline mb-8 inline-block"
      >
        &larr; BACK TO CAPABILITIES
      </Link>
      
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground mb-6">
          {service.title}
        </h1>
        <p className="text-lg text-muted leading-relaxed font-sans">
          {service.desc}
        </p>
      </div>

      {/* Grid of Two Columns: Left column for info, Right column for tech and case study */}
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        
        {/* Left 2 columns: Content */}
        <div className="lg:col-span-2 space-y-16">
          {/* What's Included */}
          <section className="p-8 bg-surface border border-gray-200 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold font-heading text-foreground mb-6 pb-2 border-b border-gray-100">
              What&apos;s Included
            </h2>
            <ul className="space-y-4">
              {service.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted text-sm md:text-base font-sans">
                  <span className="text-primary font-bold mt-1 select-none">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Our Approach */}
          <section className="p-8 bg-surface border border-gray-200 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold font-heading text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-muted leading-relaxed text-sm md:text-base font-sans">
              {service.approach}
            </p>
          </section>

          {/* FAQ Accordion Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold font-heading text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-surface shadow-sm transition-all duration-300"
                  >
                    <button
                      id={`faq-title-${idx}`}
                      aria-expanded={isOpen ? "true" : "false"}
                      aria-controls={`faq-content-${idx}`}
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50/50 transition-colors"
                      type="button"
                    >
                      <span className="text-sm font-bold text-foreground font-sans pr-4">{faq.q}</span>
                      <svg
                        className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <motion.div
                      id={`faq-content-${idx}`}
                      role="region"
                      aria-labelledby={`faq-title-${idx}`}
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-muted leading-relaxed border-t border-gray-100 bg-background/30 font-sans">
                        {faq.a}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right 1 column: Tech Stack & Case Study */}
        <div className="space-y-8 lg:sticky lg:top-24">
          {/* Tech Stack Card */}
          <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xs font-mono font-bold text-muted uppercase tracking-wider mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-background border border-gray-200 text-foreground text-xs rounded-full font-medium font-sans hover:border-primary/30 transition-colors duration-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Related Case Study Card */}
          <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl shadow-sm">
            <h3 className="text-xs font-mono font-bold tracking-wider text-primary uppercase mb-3">
              Related Case Study
            </h3>
            <Link
              href={`/portfolio/${service.caseStudySlug}`}
              className="text-base font-bold font-heading text-foreground hover:text-primary transition-colors block mb-2 leading-snug"
            >
              {service.caseStudyTitle}
            </Link>
            <p className="text-xs text-muted leading-relaxed font-sans mb-4">
              Read about how we successfully scoped, architected, and shipped this solution in production.
            </p>
            <Link
              href={`/portfolio/${service.caseStudySlug}`}
              className="inline-flex items-center text-xs font-bold text-primary hover:text-[#0c5953] transition-colors"
            >
              Read Case Study &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
