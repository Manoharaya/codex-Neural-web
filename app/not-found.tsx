"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const fullText = `ping -c 3 codexneural.com
PING codexneural.com (27.7172, 85.3240) 56(84) bytes of data.
Request timeout for seq 0
Request timeout for seq 1
Request timeout for seq 2

--- codexneural.com ping statistics ---
3 packets transmitted, 0 received, 100% packet loss, time 2048ms

ERROR: HOST ROUTE NOT FOUND (404)
$ _`;

export default function NotFound() {
  const [terminalText, setTerminalText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Mini-Header */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center">
        <Link href="/" className="font-mono text-xl font-black tracking-tighter text-foreground uppercase">
          CODEX<span className="text-primary font-light">NEURAL</span>
        </Link>
      </header>

      {/* Main 404 Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 flex-grow flex flex-col justify-center w-full z-10">
        <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
          SIGNAL DEGRADATION // CODE 404
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
          Signal Not Found.
        </h1>
        <p className="text-sm md:text-base text-muted mb-10 leading-relaxed font-sans">
          The node you are requesting does not exist or has been relocated within the codex cluster. Review the terminal diagnostic below or choose a recovery route.
        </p>

        {/* Terminal Diagnostic */}
        <div className="w-full bg-[#0F172A] text-gray-200 border border-slate-800 rounded-xl p-6 shadow-premium mb-12 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
          <div className="flex items-center gap-1.5 mb-4 border-b border-slate-800 pb-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
            <span className="text-[10px] text-slate-500 font-bold ml-2">diagnostic@codex-node-404:~</span>
          </div>
          <pre className="whitespace-pre-wrap select-none text-[#14B8A6]">
            {terminalText}
            {terminalText.length === fullText.length && (
              <span className="inline-block w-2 h-4 bg-[#14B8A6] ml-0.5 align-middle animate-pulse"></span>
            )}
          </pre>
        </div>

        {/* Link Recovery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full font-mono text-xs font-bold">
          <Link
            href="/"
            className="p-4 bg-surface border border-gray-200 rounded-lg text-center text-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            🏠 Return Home
          </Link>
          <Link
            href="/services"
            className="p-4 bg-surface border border-gray-200 rounded-lg text-center text-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            🧠 Capabilities
          </Link>
          <Link
            href="/portfolio"
            className="p-4 bg-surface border border-gray-200 rounded-lg text-center text-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            💻 Case Studies
          </Link>
          <Link
            href="/blog"
            className="p-4 bg-surface border border-gray-200 rounded-lg text-center text-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            Insights &rarr;
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted relative z-10">
        <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
        <p>ESTABLISHED IN NEPAL // GLOBAL OPERATIONS</p>
      </footer>
    </main>
  );
}
