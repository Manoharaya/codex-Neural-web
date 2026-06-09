"use client";

import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

const team: TeamMember[] = [
  {
    name: "Manohar Singh",
    role: "Founder & CEO",
    bio: "Leading strategic vision and operational excellence. Orchestrating business development, client relations, and day-to-day operations.",
    linkedin: "https://www.linkedin.com/in/manohar-cn",
    github: "https://github.com/Manoharaya"
  },
  {
    name: "Anuj Pokhrel",
    role: "CTO & Backend Developer",
    bio: "Architecting scalable backend systems and leading technical strategy. Building robust server infrastructure with focus on security and reliability.",
    linkedin: "https://www.linkedin.com/in/anujpokharel2468",
    github: "https://github.com/Anuj12Pokharel"
  },
  {
    name: "Aman Yadav",
    role: "Advisor & Data Analysis Specialist",
    bio: "Providing strategic guidance and extracting actionable insights from complex datasets. Driving data-driven decision making and business intelligence.",
    linkedin: "https://www.linkedin.com/company/codexneural", // Fixed placeholder
    github: "https://github.com/Manoharaya" // Fixed placeholder
  },
  {
    name: "Rahul Sah",
    role: "Backend Developer",
    bio: "Specializing in the development of robust, scalable backend architectures. Ensuring high performance and seamless server-side integration.",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-sah-b77885148/",
    github: "https://github.com/rahul-4321/"
  },
  {
    name: "Anjali Singh",
    role: "Frontend Developer",
    bio: "Crafting responsive, performant user interfaces with modern frameworks. Designing intuitive user experiences and interactive implementations.",
    linkedin: "https://www.linkedin.com/in/anjali-singh-11138b271/",
    github: "https://github.com/Anjalisingh44"
  },
  {
    name: "Priti Gupta",
    role: "SEO Specialist",
    bio: "Optimizing digital presence and search visibility. Implementing data-driven SEO strategies to drive organic growth and improve rankings.",
    linkedin: "https://www.linkedin.com/in/priti-gupta-1b5a68217",
    github: "https://github.com/priteegupta"
  },
  {
    name: "Bibek Sah",
    role: "DevOps Engineer",
    bio: "Building intelligent automation pipelines and CI/CD workflows. Streamlining development processes through infrastructure as code.",
    linkedin: "https://www.linkedin.com/in/bibek-shah-8b460b2bb/",
    github: "https://github.com/bibekshah220"
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-mono text-xl font-black tracking-tighter text-foreground uppercase">
            CODEX<span className="text-primary font-light">NEURAL</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
            <Link href="/services" className="hover:text-foreground transition-colors duration-300">Services</Link>
            <Link href="/portfolio" className="hover:text-foreground transition-colors duration-300">Work</Link>
            <Link href="/about" className="text-foreground font-semibold">About</Link>
          </nav>
        </div>
        <div>
          <Link href="/contact" className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-[#0d645e] transition-all duration-300">
            Start a project
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow">
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">About Codex Neural</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            The Neural Network
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            We are a distributed collective of systems engineers, AI specialists, and designers. We build durable, high-integrity digital infrastructure for long-term value, focusing on AI/ML applications, backend engineering, and sleek interface designs.
          </p>
        </div>

        {/* Team Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 pb-3 border-b border-gray-200">Our Core Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="p-6 bg-surface border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-sm text-muted leading-relaxed mb-6">{member.bio}</p>
                </div>
                <div className="flex gap-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors text-sm font-semibold">
                      LinkedIn
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors text-sm font-semibold">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
        <p>&copy; {new Date().getFullYear()} CODEX NEURAL. ALL RIGHTS RESERVED.</p>
        <p>ESTABLISHED IN NEPAL // GLOBAL OPERATIONS</p>
      </footer>
    </main>
  );
}
