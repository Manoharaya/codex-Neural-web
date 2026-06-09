"use client";


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

      {/* Main Content */}

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

    </main>
  );
}
