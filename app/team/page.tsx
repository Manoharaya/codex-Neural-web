import React from "react";
import { getTeamMembers } from "@/sanity/lib/client";

export const revalidate = 60; // ISR revalidation (60s)

export const metadata = {
  title: "Our Team | Codex Neural",
  description: "Meet the distributed systems architects, frontend developers, and data analysis specialists engineering future-ready software in Kathmandu.",
};

export default async function TeamPage() {
  const team = await getTeamMembers();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans z-10">
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Roster content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex-grow w-full">
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-3">Our People</p>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground mb-6">
            Meet the Network
          </h1>
          <p className="text-lg text-muted leading-relaxed font-sans">
            A distributed network of systems developers, blockchain auditors, and client leads engineering high-availability platforms.
          </p>
        </div>

        {/* Team Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {team.map((member) => (
            <div 
              key={member.slug} 
              className="p-8 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-premium hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Profile Avatar Initials placeholder */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-tint text-primary font-heading font-black text-lg flex items-center justify-center border border-primary/10 select-none">
                    {member.avatarText}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground leading-snug">{member.name}</h3>
                    <p className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mt-0.5">{member.role}</p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-muted leading-relaxed mb-6 font-sans">
                  {member.bio}
                </p>

                {/* Role tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {member.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-mono font-bold text-muted bg-background border border-gray-100 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social URLs */}
              <div className="flex gap-4 pt-4 border-t border-gray-100 font-mono text-[10px]">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted hover:text-primary transition-colors font-bold uppercase tracking-wider"
                >
                  LinkedIn
                </a>
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted hover:text-primary transition-colors font-bold uppercase tracking-wider"
                >
                  GitHub
                </a>
                {member.twitter && (
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted hover:text-primary transition-colors font-bold uppercase tracking-wider"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>

    </main>
  );
}
