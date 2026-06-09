"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface ScopingFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  brief: string;
  referral: string;
}

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ScopingFormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "$10k - $25k",
      brief: "",
      referral: "Google Search"
    }
  });

  const onSubmit = async (data: ScopingFormData) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
        reset();
      } else {
        setApiError(result.error || "Failed to submit scoping request.");
      }
    } catch (err) {
      setApiError("Network error. Please try again.");
      console.error("Scoping submit error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex-grow w-full grid lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column: Form Scoping */}
      <div className="lg:col-span-7 bg-surface border border-gray-200 rounded-xl p-8 shadow-sm">
        <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Scope Project</span>
        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-6">Inbound Scoping Form</h2>
        
        {submitted ? (
          <div className="p-6 bg-tint/25 border border-primary/20 text-primary rounded-xl text-sm font-semibold text-center font-sans">
            🎉 Thank you! Your scoping inquiry has been received. Our engineering leads will review your request and reply via email within 24 hours.
            <button 
              onClick={() => setSubmitted(false)}
              className="block text-xs text-primary underline mx-auto mt-4 font-mono font-bold uppercase tracking-wide min-h-[44px] px-4"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-sans">
            {apiError && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-lg">
                ⚠️ {apiError}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name-input" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Name</label>
                <input
                  id="name-input"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full min-h-[44px] px-4 py-3 bg-background border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground`}
                  placeholder="e.g. John Doe"
                />
                {errors.name && (
                  <span className="text-[10px] text-red-500 font-mono mt-1 block">{errors.name.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="email-input" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                <input
                  id="email-input"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`w-full min-h-[44px] px-4 py-3 bg-background border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground`}
                  placeholder="e.g. john@company.com"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500 font-mono mt-1 block">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company-input" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Company / Organization</label>
                <input
                  id="company-input"
                  type="text"
                  {...register("company", { required: "Company name is required" })}
                  className={`w-full min-h-[44px] px-4 py-3 bg-background border ${errors.company ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground`}
                  placeholder="e.g. Acme Corp"
                />
                {errors.company && (
                  <span className="text-[10px] text-red-500 font-mono mt-1 block">{errors.company.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="budget-input" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Estimated Budget</label>
                <select
                  id="budget-input"
                  {...register("budget")}
                  className="w-full min-h-[44px] px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                >
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="referral-input" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Referral Source</label>
              <select
                id="referral-input"
                {...register("referral")}
                className="w-full min-h-[44px] px-4 py-3 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
              >
                <option>Google Search</option>
                <option>LinkedIn</option>
                <option>GitHub</option>
                <option>Industry Referral</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="brief-input" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Project Brief &amp; Stack Requirements</label>
              <textarea
                id="brief-input"
                rows={5}
                {...register("brief", { required: "Project brief details are required" })}
                className={`w-full px-4 py-3 bg-background border ${errors.brief ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground resize-none`}
                placeholder="Tell us about the problems you are trying to solve, critical timeline specifications, and preferred technologies (e.g. Next.js, Go, Python, AWS)..."
              />
              {errors.brief && (
                <span className="text-[10px] text-red-500 font-mono mt-1 block">{errors.brief.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full min-h-[48px] py-4 bg-primary text-white font-bold rounded-lg hover:bg-[#0d645e] transition-all duration-300 shadow-sm text-sm active:scale-[0.99] disabled:bg-primary/50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {isSubmitting ? "Submitting Scoping Details..." : "Submit Scoping Request"}
            </button>
          </form>
        )}
      </div>

      {/* Right Column: Scheduler & Office Info */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Direct Booking</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-4">Book a Call</h2>
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
  );
}
