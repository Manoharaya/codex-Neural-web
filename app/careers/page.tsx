"use client";

import Link from "next/link";
import { useState } from "react";

interface JobOpening {
  title: string;
  dept: string;
  location: string;
  type: string;
}

const openings: JobOpening[] = [
  {
    title: "Senior AI/ML Engineer",
    dept: "Applied Intelligence",
    location: "Remote (Kathmandu, NP / Global)",
    type: "Full-time"
  },
  {
    title: "Full Stack Engineer (Next.js & Go)",
    dept: "Systems Engineering",
    location: "Remote (Kathmandu, NP / Global)",
    type: "Full-time"
  },
  {
    title: "Technical Writer & Product Marketer",
    dept: "Growth & Communications",
    location: "Remote (Global)",
    type: "Contract"
  }
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  // Application form states
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyingJobTitle, setApplyingJobTitle] = useState("");
  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    pitch: "",
    cvFileName: ""
  });
  const [applySubmitted, setApplySubmitted] = useState(false);

  const filteredOpenings = selectedDept === "All"
    ? openings
    : openings.filter((job) => job.dept === selectedDept);

  const handleApplyClick = (jobTitle: string) => {
    setApplyingJobTitle(jobTitle);
    setShowApplyModal(true);
    setApplySubmitted(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setApplyForm({ ...applyForm, cvFileName: e.target.files[0].name });
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySubmitted(true);
    // Reset form after delay
    setTimeout(() => {
      setShowApplyModal(false);
      setApplyForm({ name: "", email: "", pitch: "", cvFileName: "" });
      setApplySubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Sticky Header */}
      <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md border-b border-gray-200 z-45">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between relative">
          <div className="flex items-center gap-10">
            <Link href="/" className="font-mono text-xl font-black tracking-tighter text-foreground uppercase">
              CODEX<span className="text-primary font-light">NEURAL</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button className="hover:text-foreground transition-colors duration-300 py-2 flex items-center gap-1">
                  Services
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-surface border border-gray-200 rounded-xl shadow-lg p-4 grid gap-2 z-50 animate-fade-in-up">
                    <Link href="/services/ai-ml" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">🧠 AI & Machine Learning</Link>
                    <Link href="/services/web-development" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">💻 Web Development</Link>
                    <Link href="/services/app-development" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">📱 Mobile App Development</Link>
                    <Link href="/services/system-software" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">⚙️ Systems & Software</Link>
                    <Link href="/services/ui-ux" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">🎨 UI/UX Design Studio</Link>
                    <Link href="/services/web3-blockchain" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">🔗 Blockchain & Web3</Link>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCompanyDropdown(true)}
                onMouseLeave={() => setCompanyDropdown(false)}
              >
                <button className="hover:text-foreground transition-colors duration-300 py-2 flex items-center gap-1">
                  Company
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${companyDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {companyDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-surface border border-gray-200 rounded-xl shadow-lg p-4 grid gap-2 z-50 animate-fade-in-up">
                    <Link href="/about" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">About Us</Link>
                    <Link href="/careers" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">Careers</Link>
                    <Link href="/privacy" className="p-2 hover:bg-tint/30 rounded-lg text-xs font-semibold text-foreground transition-colors">Privacy Policy</Link>
                  </div>
                )}
              </div>

              <Link href="/portfolio" className="hover:text-foreground transition-colors duration-300 py-2">
                Work
              </Link>
              <Link href="/blog" className="hover:text-foreground transition-colors duration-300 py-2">
                Insights
              </Link>
            </nav>
          </div>

          <div className="hidden md:block">
            <Link href="/contact" className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-[#0d645e] transition-all duration-300 shadow-sm">
              Start a project
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenu && (
          <div className="fixed inset-0 top-[73px] bg-background/95 backdrop-blur-md z-40 flex flex-col p-6 animate-fade-in-up md:hidden border-t border-gray-100">
            <nav className="flex flex-col gap-6 text-lg font-bold text-foreground mb-8">
              <Link href="/services" onClick={() => setMobileMenu(false)} className="hover:text-primary">Services</Link>
              <Link href="/portfolio" onClick={() => setMobileMenu(false)} className="hover:text-primary">Work</Link>
              <Link href="/about" onClick={() => setMobileMenu(false)} className="hover:text-primary">About Us</Link>
              <Link href="/careers" onClick={() => setMobileMenu(false)} className="hover:text-primary">Careers</Link>
              <Link href="/blog" onClick={() => setMobileMenu(false)} className="hover:text-primary">Insights</Link>
              <Link href="/privacy" onClick={() => setMobileMenu(false)} className="hover:text-primary">Privacy Policy</Link>
            </nav>
            <Link 
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="w-full py-4 bg-primary text-white text-center font-bold rounded-lg hover:bg-[#0d645e] transition-all"
            >
              Start a Project
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full z-10">
        
        {/* Culture Hero */}
        <section className="max-w-3xl mb-20 animate-fade-in-up">
          <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">Join the Network</p>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-foreground mb-6 leading-tight">
            Node Admittance
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed font-sans">
            We are a highly specialized distributed collective of systems engineers, compilers, and interface designers. We prioritize deep focus, architectural integrity, and healthy developer operations.
          </p>
        </section>

        {/* Benefits Grid */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Perks &amp; Support</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">Why Code With Us?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
              <span className="text-2xl mb-4 block">🌍</span>
              <h3 className="text-sm font-bold text-foreground mb-2">Remote-First Workflow</h3>
              <p className="text-xs text-muted leading-relaxed font-sans">
                Work asynchronously from where you are most productive. We build on Slack, Git, and Notion.
              </p>
            </div>
            <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
              <span className="text-2xl mb-4 block">💻</span>
              <h3 className="text-sm font-bold text-foreground mb-2">Hardware Stipends</h3>
              <p className="text-xs text-muted leading-relaxed font-sans">
                Annual budget allowance for computer upgrades, dedicated server nodes, or custom keycaps.
              </p>
            </div>
            <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
              <span className="text-2xl mb-4 block">🏥</span>
              <h3 className="text-sm font-bold text-foreground mb-2">Health &amp; Security</h3>
              <p className="text-xs text-muted leading-relaxed font-sans">
                Comprehensive health insurance allowances and mental health subscriptions for all full-timers.
              </p>
            </div>
            <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
              <span className="text-2xl mb-4 block">📚</span>
              <h3 className="text-sm font-bold text-foreground mb-2">Continuous Learning</h3>
              <p className="text-xs text-muted leading-relaxed font-sans">
                We reimburse books, technical courses, local conference tickets, and professional certifications.
              </p>
            </div>
          </div>
        </section>

        {/* Listings Section with Department Filter */}
        <section className="mb-24">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Current Opportunities</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-4">Active Openings</h2>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["All", "Applied Intelligence", "Systems Engineering", "Growth & Communications", "Design"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                    selectedDept === dept
                      ? "bg-primary text-white border-primary"
                      : "bg-surface text-muted border-gray-200 hover:text-foreground"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Active Job list */}
          <div className="space-y-4 max-w-5xl">
            {filteredOpenings.length > 0 ? (
              filteredOpenings.map((job) => (
                <div 
                  key={job.title} 
                  className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-premium hover:border-primary/20 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1 font-heading">{job.title}</h3>
                    <p className="text-xs text-muted font-sans">{job.dept} &bull; {job.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-4">
                    <span className="px-3 py-1 bg-tint text-primary text-xs font-semibold rounded-full font-mono">
                      {job.type}
                    </span>
                    <button 
                      onClick={() => handleApplyClick(job.title)}
                      className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-[#0d645e] transition-colors"
                    >
                      Apply Now &rarr;
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // Fallback state
              <div className="p-8 bg-surface border border-gray-200 rounded-xl text-center text-muted font-sans">
                <span className="text-3xl block mb-2">🔍</span>
                <p className="text-sm font-bold text-foreground mb-1">No active positions in {selectedDept}</p>
                <p className="text-xs mb-4">We are always scouting for talented developers. Submit a general query below.</p>
                <button
                  onClick={() => handleApplyClick("General Admittance Inquiry")}
                  className="px-4 py-2 border border-primary text-primary text-xs font-bold rounded-lg hover:bg-tint/30 transition-all"
                >
                  Submit General Application
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Application Form Modal overlay */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface border border-gray-200 rounded-xl shadow-lg w-full max-w-xl p-8 relative animate-fade-in-up">
            <button 
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 text-muted hover:text-foreground text-xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-1">Application for Node</span>
            <h3 className="text-xl font-heading font-black text-foreground mb-6">{applyingJobTitle}</h3>

            {applySubmitted ? (
              <div className="p-6 bg-tint/25 border border-primary/20 text-primary rounded-xl text-sm font-semibold text-center font-sans">
                🎉 Application Submitted! <br />
                Your details and CV credentials have been securely stored. Our recruitment node will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 font-sans">
                <div>
                  <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={applyForm.name}
                    onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"
                    placeholder="e.g. Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={applyForm.email}
                    onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"
                    placeholder="e.g. jane@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Cover Pitch (Short)</label>
                  <textarea
                    required
                    rows={4}
                    value={applyForm.pitch}
                    onChange={(e) => setApplyForm({ ...applyForm, pitch: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground resize-none"
                    placeholder="Highlight your systems experience or AI training credentials..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Attach CV / resume</label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-center cursor-pointer">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <span className="text-2xl mb-1">📁</span>
                    <span className="text-xs font-bold text-foreground block">
                      {applyForm.cvFileName || "Click to upload CV (PDF / DOCX)"}
                    </span>
                    <span className="text-[10px] text-muted font-mono mt-1">MAX SIZE: 10MB</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-[#0d645e] transition-colors text-sm"
                >
                  Submit Application Credentials
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted relative z-10">
        <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
        <p>ESTABLISHED IN NEPAL // GLOBAL OPERATIONS</p>
      </footer>
    </main>
  );
}
