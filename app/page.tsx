"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import NeuralBackground from "@/components/NeuralBackground";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { ServiceCard, CaseStudyCard } from "@/components/Card";

// 1. ScrollReveal Wrapper Component for clean fade-up on scroll
function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(30px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      className={className}
    >
      {children}
    </div>
  );
}

// 2. Metric Counter Component for dynamic metrics count-up
function Counter({ target, duration = 1500, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const totalSteps = 40;
    const increment = end / totalSteps;
    const stepTime = duration / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  // States for testimonials slider carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  // Framer Motion staggered child variants for Hero load
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  // Process section ref and view status
  const processRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true, margin: "-10% 0px" });

  const processContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const processCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  // Testimonials data
  const testimonials = [
    { quote: "Codex Neural migrated our legacy portal in record time. Page load speeds improved by 60%.", name: "Dr. Amit Shah", title: "CTO, Optima Health" },
    { quote: "Their AI automation pipeline saved our customer support ops hours of manual routing.", name: "Sarah Carter", title: "VP Operations, Vektor Retail" },
    { quote: "The gas optimizations they built for our staking contract saved our users thousands.", name: "Marcus Vance", title: "Founder, Aether Labs" },
    { quote: "Codex Neural's systems architecture approach saved us from multiple pipeline failures during peak traffic.", name: "David Miller", title: "VP Infrastructure, LogPoint" }
  ];

  const handleNextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 30 : -30,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const
      }
    })
  };

  const techStackData = [
    {
      cat: "Languages",
      items: [
        { name: "TypeScript", logo: "/tech/typescript.svg" },
        { name: "Go", logo: "/tech/go.svg" },
        { name: "Python", logo: "/tech/python.svg" },
        { name: "Solidity", logo: "/tech/solidity.svg" }
      ],
      desc: "Ensures type safety, low runtime latency, and model building flexibility."
    },
    {
      cat: "Frameworks",
      items: [
        { name: "Next.js", logo: "/tech/nextjs.svg" },
        { name: "React Native", logo: "/tech/reactnative.svg" },
        { name: "FastAPI", logo: "/tech/fastapi.svg" },
        { name: "Tailwind CSS", logo: "/tech/tailwindcss.svg" }
      ],
      desc: "Enables fast rendering, native hybrid bridges, and clean adaptive UI styles."
    },
    {
      cat: "Infrastructure",
      items: [
        { name: "AWS", logo: "/tech/aws.svg" },
        { name: "Docker", logo: "/tech/docker.svg" },
        { name: "Vercel", logo: "/tech/vercel.svg" },
        { name: "GitHub Actions", logo: "/tech/github.svg" }
      ],
      desc: "Guarantees secure container workloads, edge deployments, and automation."
    },
    {
      cat: "Databases",
      items: [
        { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
        { name: "Redis", logo: "/tech/redis.svg" },
        { name: "Sanity CMS", logo: "/tech/sanity.svg" },
        { name: "MongoDB", logo: "/tech/mongodb.svg" }
      ],
      desc: "Ensures ACID relational storage, caching layers, and structured CMS datasets."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans">
      
      {/* Neural Network interactive canvas backdrop */}
      <NeuralBackground />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-tint/15 rounded-full blur-[100px] -z-20 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[90px] -z-20" />

      {/* 1. Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 flex flex-col items-start z-10 min-h-[80vh] justify-center">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={heroItemVariants}
            className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4"
          >
            Nepal&apos;s AI &amp; Engineering Studio
          </motion.p>
          
          <motion.h1
            variants={heroItemVariants}
            className="text-5xl md:text-7xl font-heading font-black tracking-tight mb-6 text-foreground leading-[1.15]"
          >
            We Build Software <br />
            That Lasts<span className="text-primary">.</span>
          </motion.h1>
          
          <motion.p
            variants={heroItemVariants}
            className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl font-sans"
          >
            From AI models to enterprise infrastructure — we engineer durable, high-performance digital products for global clients.
          </motion.p>
          
          <motion.div
            variants={heroItemVariants}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button href="/contact" variant="primary" className="animate-button-glow">
              Start a Project &rarr;
            </Button>
            <Button href="/portfolio" variant="secondary">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-full pt-10 border-t border-gray-200"
        >
          <p className="text-[10px] font-mono font-bold tracking-widest text-muted uppercase mb-6">
            TRUSTED BY LEADING TEAMS AND ENTERPRISES
          </p>
          <div className="flex flex-wrap gap-8 md:gap-16 items-center opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-mono text-sm font-bold text-muted tracking-widest">CEDAR GATE</span>
            <span className="font-mono text-sm font-bold text-muted tracking-widest">DEERHOLD</span>
            <span className="font-mono text-sm font-bold text-muted tracking-widest">COTIVITI</span>
            <span className="font-mono text-sm font-bold text-muted tracking-widest">LOGPOINT</span>
            <span className="font-mono text-sm font-bold text-muted tracking-widest">EPAM</span>
          </div>
        </motion.div>
      </section>

      {/* 2. Capabilities/Services Section */}
      <section id="services" className="w-full bg-surface border-t border-b border-gray-200 py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Capabilities</span>
            <Typography variant="h2" className="mb-4">Engineering Domains</Typography>
            <Typography variant="body-large">
              High-performance custom stacks configured to meet strict technical objectives.
            </Typography>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              slug="ai-ml"
              title="AI & Machine Learning"
              desc="Deploying custom models, vector DB embeddings, and predictive intelligence pipelines."
              icon="🧠"
            />
            <ServiceCard
              slug="web-app-development"
              title="Web & App Development"
              desc="Performance-focused frontends and hybrid mobile apps built with Next.js and React Native."
              icon="💻"
            />
            <ServiceCard
              slug="system-software"
              title="Systems & Software Development"
              desc="Scalable backends, low-latency APIs, and microservice nodes in Go and Rust."
              icon="⚙️"
            />
            <ServiceCard
              slug="ui-ux"
              title="UI/UX Design Studio"
              desc="Component design systems, interactive prototypes, and pixel-perfect assets."
              icon="🎨"
            />
            <ServiceCard
              slug="web3-blockchain"
              title="Blockchain & Web3"
              desc="Gas-optimized smart contracts, DeFi routing, and security code reviews."
              icon="🔗"
            />
            <ServiceCard
              slug="digital-growth"
              title="Digital Growth"
              desc="Growth acceleration through data-driven SEO, SMM, and conversion rate optimization."
              icon="📈"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Featured Work Section */}
      <section id="work" className="w-full py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Portfolio</span>
            <Typography variant="h2" className="mb-4">Case Studies</Typography>
            <Typography variant="body-large">
              Proven solutions delivered to scaling global client partners.
            </Typography>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard
              slug="enterprise-saas"
              title="Enterprise SaaS Migration"
              client="Optima Health"
              category="Web Engineering"
              desc="Migrating health portals to decoupled Next.js & Go, resulting in a 60% drop in initial page load speed."
            />
            <CaseStudyCard
              slug="ai-automation"
              title="AI Scoping & Automation Engine"
              client="Vektor Retail"
              category="AI & Machine Learning"
              desc="Ingesting customer inquiries via custom FastAPI pipelines to achieve 45% support cost reduction."
            />
            <CaseStudyCard
              slug="web3-dex"
              title="DeFi Wallet Protocol"
              client="Aether Labs"
              category="Blockchain & Web3"
              desc="Solidity staking contracts verified with Foundry, achieving 25% lower gas transaction fees."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Why Codex Neural (Value Pillars & Counters) */}
      <section className="w-full bg-surface border-t border-b border-gray-200 py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Core Pillars</span>
            <Typography variant="h2" className="mb-4">Why Codex Neural?</Typography>
            <Typography variant="body-large">
              Our execution is guided by deliberate structural standards, avoiding short-term shortcuts.
            </Typography>
          </ScrollReveal>

          {/* Pillars and Counters Grid */}
          <div className="space-y-16">
            <ScrollReveal className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-background border border-gray-200 rounded-xl">
                <span className="text-2xl mb-4 block">🏗️</span>
                <Typography variant="h3" className="mb-3">Architecture-First</Typography>
                <Typography variant="body-small">
                  We structure databases, API nodes, and components to scale seamlessly, ensuring long-term code maintainability.
                </Typography>
              </div>
              <div className="p-8 bg-background border border-gray-200 rounded-xl">
                <span className="text-2xl mb-4 block">⚓</span>
                <Typography variant="h3" className="mb-3">Full-Stack Ownership</Typography>
                <Typography variant="body-small">
                  Our engineers own features end-to-end: writing gas-optimized smart contracts, backend microservices, and pixel-perfect layouts.
                </Typography>
              </div>
              <div className="p-8 bg-background border border-gray-200 rounded-xl">
                <span className="text-2xl mb-4 block">🤝</span>
                <Typography variant="h3" className="mb-3">Long-Term Alignment</Typography>
                <Typography variant="body-small">
                  We act as dedicated technical co-founders, focusing on client ROI, stable delivery, and transparent scopes.
                </Typography>
              </div>
            </ScrollReveal>

            {/* Counters Strip */}
            <ScrollReveal className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-gray-100 text-center font-sans">
              <div>
                <span className="text-3xl md:text-5xl font-heading font-black text-primary block mb-1">
                  <Counter target={60} suffix="%" />
                </span>
                <span className="text-xs md:text-sm font-bold text-foreground">FCP Speed Reduction</span>
              </div>
              <div>
                <span className="text-3xl md:text-5xl font-heading font-black text-primary block mb-1">
                  $<Counter target={12} suffix="M+" />
                </span>
                <span className="text-xs md:text-sm font-bold text-foreground">TVL Secured</span>
              </div>
              <div>
                <span className="text-3xl md:text-5xl font-heading font-black text-primary block mb-1">
                  <Counter target={100} suffix="%" />
                </span>
                <span className="text-xs md:text-sm font-bold text-foreground">Exploit-Free Audits</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Industries Section */}
      <section className="w-full py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Sectors</span>
            <Typography variant="h2" className="mb-4">Target Industries</Typography>
            <Typography variant="body-large">
              Specialized engineering workflows configured to handle sector-specific constraints.
            </Typography>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Enterprise & SaaS", bullet1: "Scalable cloud infrastructures", bullet2: "Microservice modular nodes", bullet3: "Decoupled Next.js portals", icon: "🏢", slug: "saas" },
              { title: "Fintech & Payments", bullet1: "Secure payment flow capture", bullet2: "Multi-layered encryption pipelines", bullet3: "Ledger transaction auditing", icon: "💳", slug: "fintech" },
              { title: "Healthcare & Biotech", bullet1: "HIPAA compliance standards", bullet2: "Secure patient portals", bullet3: "Biometric and clinical inputs", icon: "🏥", slug: "healthcare" },
              { title: "E-Commerce & Retail", bullet1: "Serverless storefront setups", bullet2: "Predictive recommendation feeds", bullet3: "Real-time inventory sync", icon: "🛒", slug: "retail" },
              { title: "Education & EdTech", bullet1: "LMS plugin integrations", bullet2: "Student progress trackers", bullet3: "Virtual dashboard charts", icon: "🎓", slug: "edtech" },
              { title: "Logistics & Transport", bullet1: "Geofencing fleet trackers", bullet2: "Real-time dispatch pipelines", bullet3: "Dynamic routing optimization", icon: "🚚", slug: "logistics" }
            ].map((ind) => (
              <Link
                key={ind.title}
                href={`/portfolio?industry=${ind.slug}`}
                className="group p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium hover:border-primary/20 transition-all duration-300 block"
              >
                <span className="text-2xl mb-3 block select-none">{ind.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-4 group-hover:text-primary transition-colors font-heading">{ind.title}</h3>
                <ul className="space-y-2 text-xs text-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">&bull;</span> {ind.bullet1}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">&bull;</span> {ind.bullet2}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">&bull;</span> {ind.bullet3}
                  </li>
                </ul>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Tech Stack Section */}
      <section className="w-full bg-surface border-t border-b border-gray-200 py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Toolsets</span>
            <Typography variant="h2" className="mb-4">Engineering Stack</Typography>
            <Typography variant="body-large">
              Chosen for runtime speed, developer velocity, and long-term codebase safety.
            </Typography>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStackData.map((stack) => (
              <div key={stack.cat} className="p-6 bg-background border border-gray-100 rounded-xl shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                <div>
                  <Typography variant="label" className="mb-4 block">{stack.cat}</Typography>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {stack.items.map((item) => (
                      <div key={item.name} className="flex items-center gap-2 p-1.5 rounded-lg bg-surface border border-gray-100 hover:border-primary/20 transition-all duration-300">
                        <div className="relative w-5 h-5 flex-shrink-0">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[10px] font-semibold text-foreground font-sans truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Typography variant="caption" className="border-t border-gray-50 pt-3 text-muted text-[11px] leading-normal">{stack.desc}</Typography>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Development Process */}
      <section id="process" className="w-full py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Workflow</span>
            <Typography variant="h2" className="mb-4">Development Process</Typography>
            <Typography variant="body-large">
              Our step-by-step pipeline ensuring transparent milestones and solid execution.
            </Typography>
          </ScrollReveal>

          {/* Sequentially animated process cards */}
          <motion.div
            ref={processRef}
            variants={processContainerVariants}
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
            className="grid md:grid-cols-5 gap-8 relative"
          >
            {[
              { num: "01", title: "Discovery", desc: "Scoping business objectives and API specifications." },
              { num: "02", title: "Architecture", desc: "Designing database models, schemas, and layouts." },
              { num: "03", title: "POC Development", desc: "Deploying core mock pipelines to reduce architectural risk." },
              { num: "04", title: "Build & Ship", desc: "Continuous integration, tests, and production code freeze." },
              { num: "05", title: "Support & Scale", desc: "Monitoring performance limits, runs, and SEO rankings." }
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                variants={processCardVariants}
                className="relative flex-1 group"
              >
                <div className="h-full p-6 bg-surface border border-gray-200 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-premium transition-all duration-300 relative z-10">
                  <span className="text-3xl font-black text-primary/20 font-mono mb-6 block">{step.num}</span>
                  <div>
                    <h3 className="text-xs font-bold text-foreground mb-2 font-heading">{step.title}</h3>
                    <Typography variant="caption" className="block text-[11px] leading-relaxed">{step.desc}</Typography>
                  </div>
                </div>

                {/* Staggered Animated Connector Lines */}
                {idx < 4 && (
                  <>
                    {/* Horizontal Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 -right-[20px] w-10 h-[2px] z-0 transform -translate-y-1/2 overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isProcessInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ delay: 0.3 + idx * 0.15, duration: 0.4, ease: "easeInOut" }}
                        style={{ originX: 0 }}
                        className="w-full h-full bg-gradient-to-r from-primary/30 to-primary/10"
                      />
                    </div>
                    {/* Vertical Connector Line (Mobile) */}
                    <div className="md:hidden absolute left-1/2 -bottom-[20px] w-[2px] h-10 z-0 transform -translate-x-1/2 overflow-hidden">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isProcessInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ delay: 0.3 + idx * 0.15, duration: 0.4, ease: "easeInOut" }}
                        style={{ originY: 0 }}
                        className="w-full h-full bg-gradient-to-b from-primary/30 to-primary/10"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="w-full bg-surface border-t border-b border-gray-200 py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Success Stories</span>
            <Typography variant="h2" className="mb-4">Client Feedback</Typography>
            <Typography variant="body-large">
              Direct quotes from our global client project stakeholders.
            </Typography>
          </ScrollReveal>

          {/* Testimonial Quote Carousel Slider */}
          <ScrollReveal className="relative max-w-4xl mx-auto px-4 md:px-12 min-h-[250px] flex flex-col justify-between">
            <div className="relative overflow-hidden w-full h-full flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full p-8 md:p-12 bg-background border border-gray-100 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-premium transition-all duration-300 relative"
                >
                  {/* Styled Background Quote Icon */}
                  <span className="absolute top-4 left-6 text-7xl font-serif text-primary/5 select-none pointer-events-none">&ldquo;</span>
                  
                  <p className="text-sm md:text-lg text-muted leading-relaxed italic mb-8 font-sans relative z-10">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </p>
                  
                  <div className="border-t border-gray-100 pt-6 font-sans relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-[10px] text-primary font-semibold uppercase tracking-wider font-mono mt-1">{testimonials[currentTestimonial].title}</p>
                    </div>

                    {/* Navigation Buttons inside Card */}
                    <div className="flex gap-2 self-end sm:self-auto">
                      <button
                        onClick={handlePrevTestimonial}
                        className="w-8 h-8 rounded-full border border-gray-200 hover:border-primary/40 hover:bg-surface flex items-center justify-center text-muted hover:text-primary transition-all duration-200 text-xs"
                        aria-label="Previous testimonial"
                      >
                        &larr;
                      </button>
                      <button
                        onClick={handleNextTestimonial}
                        className="w-8 h-8 rounded-full border border-gray-200 hover:border-primary/40 hover:bg-surface flex items-center justify-center text-muted hover:text-primary transition-all duration-200 text-xs"
                        aria-label="Next testimonial"
                      >
                        &rarr;
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentTestimonial ? 1 : -1);
                    setCurrentTestimonial(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial ? "bg-primary w-6" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. CTA Scoping Banner Section */}
      <section id="contact" className="w-full py-24 z-10 relative">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <ScrollReveal className="w-full bg-gradient-to-r from-primary to-[#0d645e] p-10 md:p-16 rounded-2xl shadow-xl text-center text-white relative overflow-hidden group">
            {/* Glow backdrop inside card */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,184,166,0.35),transparent_60%)]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 leading-tight">
                Ready to Build <br className="md:hidden" /> Something Exceptional?
              </h2>
              <p className="text-sm md:text-base text-teal-100 max-w-xl mx-auto leading-relaxed mb-8 font-sans">
                Connect with our systems architects today to scope your database migration, backend microservices, or custom AI models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" className="bg-white text-primary hover:bg-tint animate-button-glow">
                  Start a Project
                </Button>
                <Button href="https://cal.com/codexneural/scoping" variant="secondary" className="border-white text-white hover:bg-white/10">
                  Book Scoping Call
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
    </main>
  );
}
