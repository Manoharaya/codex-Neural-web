"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-2xl -z-10" />

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-8">
          {/* Logo / Branding */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xl font-black tracking-tighter text-foreground uppercase">
              CODEX<span className="text-primary font-light">NEURAL</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
            <a href="#services" className="hover:text-foreground transition-colors duration-300">
              Services
            </a>
            <a href="#work" className="hover:text-foreground transition-colors duration-300">
              Work
            </a>
            <a href="#about" className="hover:text-foreground transition-colors duration-300">
              About
            </a>
          </nav>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-[#0d645e] transition-all duration-300 shadow-sm"
          >
            Start a project
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 flex-grow flex flex-col justify-center z-10">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Nepal&apos;s AI &amp; Engineering Studio
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
            We Build Software <br />
            That Lasts.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            From AI systems to enterprise infrastructure — we engineer durable, high-performance digital products for global clients.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-[#0d645e] transition-all duration-300 shadow-lg shadow-primary/10 hover:translate-y-[-1px]"
            >
              Start a Project
              <span className="text-lg font-light">&rarr;</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-7 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-tint/40 transition-all duration-300 hover:translate-y-[-1px]"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Stats Footer */}
      <section className="w-full border-t border-gray-200 bg-surface z-10 relative">
        {/* Floating Down Arrow Icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-all duration-300 focus:outline-none"
            aria-label="Scroll down"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col justify-center px-4 py-4 md:py-0">
            <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">20+</span>
            <span className="text-sm font-medium text-muted uppercase tracking-wider">Projects</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col justify-center px-4 py-4 md:py-0">
            <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">8</span>
            <span className="text-sm font-medium text-muted uppercase tracking-wider">Engineers</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col justify-center px-4 py-4 md:py-0">
            <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">3+</span>
            <span className="text-sm font-medium text-muted uppercase tracking-wider">Years</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col justify-center px-4 py-4 md:py-0">
            <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">Global</span>
            <span className="text-sm font-medium text-muted uppercase tracking-wider">Clients</span>
          </div>
        </div>
      </section>
    </main>
  );
}
