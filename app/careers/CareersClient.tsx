"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MockJobOpening } from "@/sanity/lib/client";

interface CareersClientProps {
  openings: MockJobOpening[];
}

interface ApplicationFormData {
  name: string;
  email: string;
  pitch: string;
  cv: FileList;
}

export default function CareersClient({ openings }: CareersClientProps) {
  const [selectedDept, setSelectedDept] = useState("All");
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyingJobTitle, setApplyingJobTitle] = useState("");
  const [applySubmitted, setApplySubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<ApplicationFormData>({
    defaultValues: {
      name: "",
      email: "",
      pitch: ""
    }
  });

  const selectedFile = watch("cv");

  const filteredOpenings = selectedDept === "All"
    ? openings
    : openings.filter((job) => job.dept === selectedDept);

  const handleApplyClick = (jobTitle: string) => {
    setApplyingJobTitle(jobTitle);
    setShowApplyModal(true);
    setApplySubmitted(false);
  };

  const onSubmitApplication = (data: ApplicationFormData) => {
    setApplySubmitted(true);
    console.log("Job Application Data:", {
      name: data.name,
      email: data.email,
      pitch: data.pitch,
      cvName: data.cv?.[0]?.name
    });
    
    // Simulate API delay and reset
    setTimeout(() => {
      setShowApplyModal(false);
      reset();
      setApplySubmitted(false);
    }, 3500);
  };

  return (
    <div className="space-y-20 font-sans">
      
      {/* Perks & Benefits Section */}
      <section className="mb-12">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Perks &amp; Support</span>
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">Why Code With Us?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
            <span className="text-2xl mb-4 block select-none">🌍</span>
            <h3 className="text-sm font-bold text-foreground mb-2">Remote-First Workflow</h3>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Work asynchronously from where you are most productive. We build on Slack, Git, and Notion.
            </p>
          </div>
          <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
            <span className="text-2xl mb-4 block select-none">💻</span>
            <h3 className="text-sm font-bold text-foreground mb-2">Hardware Stipends</h3>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Annual budget allowance for computer upgrades, dedicated server nodes, or custom keycaps.
            </p>
          </div>
          <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
            <span className="text-2xl mb-4 block select-none">🏥</span>
            <h3 className="text-sm font-bold text-foreground mb-2">Health &amp; Security</h3>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Comprehensive health insurance allowances and mental health subscriptions for all team nodes.
            </p>
          </div>
          <div className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
            <span className="text-2xl mb-4 block select-none">📚</span>
            <h3 className="text-sm font-bold text-foreground mb-2">Continuous Learning</h3>
            <p className="text-xs text-muted leading-relaxed font-sans">
              We reimburse books, technical courses, local conference tickets, and professional certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Listings Section with Department Filter */}
      <section className="mb-12">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-2">Current Opportunities</span>
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-4">Active Openings</h2>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["All", "Applied Intelligence", "Systems Engineering", "Growth & Communications", "Design"].map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-3 min-h-[44px] rounded-lg text-xs font-semibold border transition-all ${
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
                  <span className="px-3 py-1 bg-tint text-primary text-xs font-semibold rounded-full font-mono select-none">
                    {job.type}
                  </span>
                  <button 
                    onClick={() => handleApplyClick(job.title)}
                    className="px-5 py-2.5 min-h-[44px] inline-flex items-center justify-center bg-primary text-white text-xs font-bold rounded-lg hover:bg-[#0d645e] transition-colors font-mono tracking-wider"
                  >
                    APPLY NOW &rarr;
                  </button>
                </div>
              </div>
            ))
          ) : (
            // Fallback state
            <div className="p-8 bg-surface border border-gray-200 rounded-xl text-center text-muted font-sans">
              <span className="text-3xl block mb-2 select-none">🔍</span>
              <p className="text-sm font-bold text-foreground mb-1">No active positions in {selectedDept}</p>
              <p className="text-xs mb-4">We are always scouting for talented developers. Submit a general query below.</p>
              <button
                onClick={() => handleApplyClick("General Admittance Inquiry")}
                className="px-4 py-3 min-h-[44px] inline-flex items-center justify-center border border-primary text-primary text-xs font-bold rounded-lg hover:bg-tint/30 transition-all font-mono tracking-wider"
              >
                SUBMIT GENERAL APPLICATION
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Modal overlay */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface border border-gray-200 rounded-xl shadow-lg w-full max-w-xl p-8 relative animate-fade-in-up">
            <button 
              onClick={() => setShowApplyModal(false)}
              className="absolute top-2 right-2 text-muted hover:text-foreground text-2xl focus:outline-none w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
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
              <form onSubmit={handleSubmit(onSubmitApplication)} className="space-y-4 font-sans">
                <div>
                  <label htmlFor="apply-name" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    id="apply-name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full min-h-[44px] px-4 py-3 bg-background border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground`}
                    placeholder="e.g. Jane Doe"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-mono mt-1 block">{errors.name.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="apply-email" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    id="apply-email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full min-h-[44px] px-4 py-3 bg-background border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground`}
                    placeholder="e.g. jane@company.com"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-mono mt-1 block">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="apply-pitch" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Cover Pitch (Short)</label>
                  <textarea
                    id="apply-pitch"
                    rows={4}
                    {...register("pitch", { required: "Cover pitch details are required" })}
                    className={`w-full px-4 py-3 bg-background border ${errors.pitch ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground resize-none`}
                    placeholder="Highlight your systems experience or AI training credentials..."
                  />
                  {errors.pitch && (
                    <span className="text-[10px] text-red-500 font-mono mt-1 block">{errors.pitch.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="apply-cv" className="block text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">Attach CV / resume</label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-center cursor-pointer min-h-[100px]">
                    <input
                      id="apply-cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      {...register("cv", { required: "CV file attachment is required" })}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <span className="text-2xl mb-1 select-none font-sans">📁</span>
                    <span className="text-xs font-bold text-foreground block">
                      {selectedFile && selectedFile[0] ? selectedFile[0].name : "Click to upload CV (PDF / DOCX)"}
                    </span>
                    <span className="text-[10px] text-muted font-mono mt-1">MAX SIZE: 10MB</span>
                  </div>
                  {errors.cv && (
                    <span className="text-[10px] text-red-500 font-mono mt-1 block">{errors.cv.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] py-4 bg-primary text-white font-bold rounded-lg hover:bg-[#0d645e] transition-colors text-sm font-mono tracking-wider active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  SUBMIT APPLICATION CREDENTIALS
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
