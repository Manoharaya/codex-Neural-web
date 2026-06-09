export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-gray-100 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-[#00FF88]/20 selection:text-[#00FF88]">
      {/* Decorative Grid & Glow Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,255,136,0.1),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00FF88] to-emerald-500 flex items-center justify-center shadow-lg shadow-[#00FF88]/20">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 20 Q24 18 26 20 M12 2v20M17 5v14M7 9v6" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-extrabold tracking-wider text-lg">CODEX</span>
            <span className="text-[#00FF88] font-bold text-xs tracking-widest">NEURAL</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest text-gray-400">
          <a href="#about" className="hover:text-white transition-colors duration-300">ABOUT</a>
          <a href="#services" className="hover:text-white transition-colors duration-300">SERVICES</a>
          <a href="#careers" className="hover:text-white transition-colors duration-300">CAREERS</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF88]/5 border border-[#00FF88]/20 text-[#00FF88] text-xs font-mono tracking-widest mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[#00FF88]" />
          SYSTEM_ONLINE // DEPLOYMENT_SUCCESSFUL
        </div>
        
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-gray-500">
          Architecting the <br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-[#00FF88] via-[#05FFD2] to-emerald-400 bg-clip-text text-transparent">
            Invisible Systems
          </span>
        </h1>

        <p className="text-base md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-mono">
          We build durable, high-integrity digital infrastructure and AI solutions engineered for long-term growth and resilience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[#00FF88] text-black font-semibold rounded-xl hover:bg-[#00FF88]/90 transition-all duration-300 shadow-lg shadow-[#00FF88]/20 hover:scale-[1.02]">
            Explore Services &rarr;
          </button>
          <button className="px-8 py-4 bg-gray-900 border border-gray-800 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]">
            Contact Experts
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
        <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
        <p className="flex items-center gap-2">
          <span>BUILT WITH RESILIENCE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
          <span>ESTABLISHED IN NEPAL</span>
        </p>
      </footer>
    </main>
  );
}
