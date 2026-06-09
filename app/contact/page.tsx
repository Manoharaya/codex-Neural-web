"use client";


import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$10k - $25k",
    brief: "",
    referral: "Google Search"
  });
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Clear form
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "$10k - $25k",
      brief: "",
      referral: "Google Search"
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Main Content */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full z-10 grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form Scoping */}
        <div className="lg:col-span-7 bg-surface border border-gray-200 rounded-xl p-8 shadow-sm">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Scope Project</span>
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-6">Inbound Scoping Form</h2>
          
          {submitted ? (
            <div className="p-6 bg-tint/25 border border-primary/20 text-primary rounded-xl text-sm font-semibold text-center font-sans">
              🎉 Thank you! Your scoping inquiry has been received. Our engineering leads will review your request and reply via email within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"
                    placeholder="e.g. john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"
                    placeholder="e.g. Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"
                  >
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Referral Source</label>
                <select
                  value={formData.referral}
                  onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"
                >
                  <option>Google Search</option>
                  <option>LinkedIn</option>
                  <option>GitHub</option>
                  <option>Industry Referral</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Project Brief &amp; Stack Requirements</label>
                <textarea
                  required
                  rows={5}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground resize-none"
                  placeholder="Tell us about the problems you are trying to solve, critical timeline specifications, and preferred technologies (e.g. Next.js, Go, Python, AWS)..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-[#0d645e] transition-colors shadow-sm text-sm"
              >
                Submit Scoping Request
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Scheduler & Office Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Direct Booking</span>
            <h1 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-4">Book a Call</h1>
            <p className="text-sm text-muted leading-relaxed mb-6 font-sans">
              Need immediate technical consultation? Skip the form queue and book a 15-minute scoping call directly on our calendar.
            </p>
          </div>

          {/* Cal.com Embed */}
          <div className="overflow-hidden border border-gray-200 rounded-xl bg-surface shadow-sm">
            <iframe
              src="https://cal.com/codexneural/scoping"
              style={{ width: "100%", height: "450px", border: "0" }}
              title="Cal.com Scoping Scheduler"
              className="w-full"
            />
          </div>

          {/* Contact Details */}
          <div className="p-6 bg-surface/50 border border-gray-200 rounded-xl space-y-3 font-mono text-xs text-muted">
            <h4 className="text-sm font-bold text-foreground font-heading mb-1">Corporate Details</h4>
            <p><strong>HQ:</strong> Maitidevi, Kathmandu, Nepal</p>
            <p><strong>REGISTRATION:</strong> Codex Neural Labs Private Limited</p>
            <p><strong>EMAIL:</strong> contact@codexneural.com</p>
            <p><strong>PHONE/WHATSAPP:</strong> +977 9840327185</p>
          </div>
        </div>

      </div>

    </main>
  );
}
