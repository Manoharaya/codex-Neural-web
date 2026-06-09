import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-10';

// Initialize the Sanity client if credentials exist
const isSanityConfigured = !!projectId && projectId !== 'dummy';

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null;

// ==========================================
// MOCK DATA LAYER (FALLBACKS)
// ==========================================

export interface MockCaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  sector: string;
  timeline: string;
  role: string;
  challenge: string;
  solution: string;
  outcomes: string;
  metrics: { value: string; label: string; desc: string }[];
  tech: string[];
  services: string[];
  featured: boolean;
}

export interface MockTeamMember {
  name: string;
  slug: string;
  role: string;
  tags: string[];
  bio: string;
  linkedin: string;
  github: string;
  twitter?: string;
  email?: string;
  avatarText: string;
}

export interface MockBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  author: MockTeamMember;
  body: string[]; // paragraph blocks
}

export interface MockJobOpening {
  title: string;
  dept: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const mockTeam: MockTeamMember[] = [
  {
    name: "Manohar Singh",
    slug: "manohar-singh",
    role: "Founder & CEO",
    tags: ["Leadership", "Management", "Operations"],
    bio: "Leading strategic vision and operational excellence. Orchestrating business development, client relations, and day-to-day operations.",
    linkedin: "https://www.linkedin.com/in/manohar-cn",
    github: "https://github.com/Manoharaya",
    twitter: "https://x.com/codexneural",
    email: "manohar@codexneural.com",
    avatarText: "MS"
  },
  {
    name: "Anuj Pokhrel",
    slug: "anuj-pokhrel",
    role: "CTO & Backend Developer",
    tags: ["Leadership", "Backend", "Security"],
    bio: "Architecting scalable backend systems and leading technical strategy. Building robust server infrastructure with focus on security and reliability.",
    linkedin: "https://www.linkedin.com/in/anujpokharel2468",
    github: "https://github.com/Anuj12Pokharel",
    twitter: "https://x.com/codexneural",
    email: "anuj@codexneural.com",
    avatarText: "AP"
  },
  {
    name: "Aman Yadav",
    slug: "aman-yadav",
    role: "Advisor & Data Analysis Specialist",
    tags: ["Advisor", "Data Analysis"],
    bio: "Providing strategic guidance and extracting actionable insights from complex datasets. Driving data-driven decision making and business intelligence.",
    linkedin: "https://www.linkedin.com/company/codexneural",
    github: "https://github.com/Manoharaya",
    twitter: "https://x.com/codexneural",
    email: "aman@codexneural.com",
    avatarText: "AY"
  },
  {
    name: "Rahul Sah",
    slug: "rahul-sah",
    role: "Backend Developer",
    tags: ["Backend", "APIs", "Go"],
    bio: "Specializing in the development of robust, scalable backend architectures. Ensuring high performance and seamless server-side integration.",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-sah-b77885148/",
    github: "https://github.com/rahul-4321/",
    twitter: "https://x.com/codexneural",
    email: "rahul@codexneural.com",
    avatarText: "RS"
  },
  {
    name: "Anjali Singh",
    slug: "anjali-singh",
    role: "Frontend Developer",
    tags: ["Frontend", "UI/UX", "Next.js"],
    bio: "Crafting responsive, performant user interfaces with modern frameworks. Designing intuitive user experiences and interactive implementations.",
    linkedin: "https://www.linkedin.com/in/anjali-singh-11138b271/",
    github: "https://github.com/Anjalisingh44",
    twitter: "https://x.com/codexneural",
    email: "anjali@codexneural.com",
    avatarText: "AS"
  },
  {
    name: "Priti Gupta",
    slug: "priti-gupta",
    role: "SEO Specialist",
    tags: ["SEO", "Digital Growth"],
    bio: "Optimizing digital presence and search visibility. Implementing data-driven SEO strategies to drive organic growth and improve rankings.",
    linkedin: "https://www.linkedin.com/in/priti-gupta-1b5a68217",
    github: "https://github.com/priteegupta",
    twitter: "https://x.com/codexneural",
    email: "priti@codexneural.com",
    avatarText: "PG"
  },
  {
    name: "Bibek Sah",
    slug: "bibek-sah",
    role: "DevOps Engineer",
    tags: ["DevOps", "Infrastructure", "Cloud"],
    bio: "Building intelligent automation pipelines and CI/CD workflows. Streamlining development processes through infrastructure as code.",
    linkedin: "https://www.linkedin.com/in/bibek-shah-8b460b2bb/",
    github: "https://github.com/bibekshah220",
    twitter: "https://x.com/codexneural",
    email: "bibek@codexneural.com",
    avatarText: "BS"
  },
  {
    name: "Dinesh Giri",
    slug: "dinesh-giri",
    role: "UI/UX Designer",
    tags: ["Design", "UX/UI", "Figma"],
    bio: "Creating high-fidelity mockups, responsive grid layouts, and component style guides to streamline developer handoff.",
    linkedin: "https://www.linkedin.com/company/codexneural",
    github: "https://github.com/Manoharaya",
    twitter: "https://x.com/codexneural",
    email: "dinesh@codexneural.com",
    avatarText: "DG"
  }
];

const mockCaseStudies: MockCaseStudy[] = [
  {
    slug: "enterprise-saas",
    title: "Enterprise SaaS Migration",
    client: "Optima Health",
    industry: "Enterprise & SaaS",
    sector: "Healthcare & FinTech",
    timeline: "5 Months (2024)",
    role: "Cloud Architecture & Full-Stack Frontend",
    challenge: "Optima Health's legacy portal served over 50k active patients daily but suffered from severe latency spikes during peak hours. Client-rendered monolithic pages resulted in a poor Google Core Web Vitals score (FCP of 2.4s) and blocked search engines from indexing critical public health documentation.",
    solution: "We decoupled their web layout into a modern Next.js 14 App Router codebase hosted on Vercel Edge, caching public content at edge nodes. Dynamic patient data was queried via secure server-to-server Go microservices. We optimized image loaders, lazy-loaded offscreen components, and implemented rigorous bundle budgeting.",
    outcomes: "The new portal loads instantly worldwide. Mobile conversion rates spiked, server overhead dropped significantly, and administrative support cases regarding portal downtime fell to zero.",
    metrics: [
      { value: "0.9s", label: "First Contentful Paint", desc: "Reduced from 2.4s, putting the portal in the 99th percentile of speed." },
      { value: "+35%", label: "User Retention", desc: "A significant boost in recurring patient log-ins and platform engagement." },
      { value: "99.99%", label: "System Uptime", desc: "Achieved via decoupled serverless architecture on AWS and Vercel edge." }
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "AWS", "Vercel"],
    services: ["Web & App Development", "Systems & Software Development"],
    featured: true
  },
  {
    slug: "ai-automation",
    title: "AI Scoping & Automation Engine",
    client: "Vektor Retail",
    industry: "E-Commerce & Retail",
    sector: "E-Commerce Logistics",
    timeline: "4 Months (2024)",
    role: "AI Pipeline Engineering & RAG Design",
    challenge: "Vektor Retail handles over 10,000 inquiries daily across different departments. Manual ticket categorisation took up to 6 hours per ticket, leading to major delays and a decline in customer satisfaction scores. Existing auto-responders lacked semantic accuracy.",
    solution: "We built an intelligent intake pipeline using FastAPI. Incoming emails are embedded using OpenAI embeddings and checked against a Pinecone vector index. Relevant company context is injected into fine-tuned Llama 3 models, drafting a high-accuracy, personalized response and routing the ticket to the correct human queue.",
    outcomes: "The customer service department reduced ticket backlog to zero, allowing support agents to focus on complex, high-tier inquiries.",
    metrics: [
      { value: "-80%", label: "Response Latency", desc: "Average response/routing time dropped from 6 hours to under 30 seconds." },
      { value: "45%", label: "Support Cost Saved", desc: "Significant operational cost savings in customer support divisions." },
      { value: "94%", label: "Intention Accuracy", desc: "High semantic accuracy in classifying complex multi-topic inquiries." }
    ],
    tech: ["Python", "FastAPI", "Pinecone", "PostgreSQL", "Llama 3 Model", "Sanity CMS"],
    services: ["AI & Machine Learning"],
    featured: true
  },
  {
    slug: "web3-dex",
    title: "DeFi Wallet Protocol",
    client: "Aether Labs",
    industry: "Fintech & Payments",
    sector: "Decentralized Finance",
    timeline: "3 Months (2023)",
    role: "Smart Contract Engineering & Web3 Integration",
    challenge: "Aether Labs needed to deploy a high-yield ERC-20 staking contract managing over $10M in assets. High Ethereum gas prices threatened to eat into user yields, and smart contract security vulnerabilities were a major existential threat to the launch.",
    solution: "We engineered custom Solidity staking contracts using gas-optimized storage slots and loop optimizations. We wrote a rigorous testing suite in Foundry with 100% branch coverage and invariant testing, followed by building a sleek frontend with Wagmi and RainbowKit.",
    outcomes: "The platform launched with zero security incidents and industry-leading gas efficiency, driving rapid adoption within the first week of deployment.",
    metrics: [
      { value: "-25%", label: "Gas Transaction Fees", desc: "Optimized bytecode execution compared to standard ERC-20 staking contracts." },
      { value: "$12M+", label: "Total Value Locked", desc: "Reached within 14 days of smart contract mainnet deployment." },
      { value: "Zero", label: "Security Exploits", desc: "Verified via Foundry testing frameworks and certified smart contract audit." }
    ],
    tech: ["Solidity", "Foundry", "TypeScript", "Wagmi", "Ethers.js", "RainbowKit"],
    services: ["Blockchain & Web3"],
    featured: true
  },
  {
    slug: "systems-scaling",
    title: "Low-Latency Billing Gateway",
    client: "LogPoint",
    industry: "Enterprise & SaaS",
    sector: "High-Throughput Payments",
    timeline: "6 Months (2025)",
    role: "Microservices & Database Architect",
    challenge: "LogPoint's ledger sync services experienced high failure rates and locks when parsing more than 5,000 concurrent database updates. This resulted in delayed transaction reconciliations and system-wide timeouts during month-end invoicing.",
    solution: "We designed a decoupled queue architecture using Go microservices and RabbitMQ message brokers. Write operations were buffered and serialized via memory buffers, updating split tables in PostgreSQL. Real-time notifications were piped over low-latency WebSockets.",
    outcomes: "System locks were eliminated completely. Reconciliation times dropped from 2 hours to under 3 minutes, with 100% processing reliability.",
    metrics: [
      { value: "3 min", label: "Reconciliation Time", desc: "Reduced from 2 hours. Handled under peak concurrent load spikes." },
      { value: "0% locks", label: "Database Timeout", desc: "Locks resolved completely through write-ahead queuing buffers." },
      { value: "15k/sec", label: "Message Throughput", desc: "Stable pipeline ingestion of structured transactional log updates." }
    ],
    tech: ["Go", "RabbitMQ", "PostgreSQL", "Docker", "Vercel", "GitHub Actions"],
    services: ["Systems & Software Development"],
    featured: false
  },
  {
    slug: "mobile-banking",
    title: "Cross-Platform Fintech Portal",
    client: "Cedar Gate",
    industry: "Fintech & Payments",
    sector: "Consumer FinTech",
    timeline: "4 Months (2025)",
    role: "Mobile App Lead Developer",
    challenge: "Cedar Gate wanted to launch a secure consumer mobile wallet. However, slow network performance in rural regions led to frequent transaction timeouts and session drops, causing severe sync errors between client states and central ledgers.",
    solution: "We engineered an offline-first hybrid mobile app using React Native. We built local storage nodes with SQLite databases to capture offline payloads, and scripted transactional queues that synchronize incrementally with Go API gateways once connectivity restores.",
    outcomes: "User feedback scores reached 4.8/5. Sync errors dropped to zero and regional users reported crash-free operations under spotty mobile coverage.",
    metrics: [
      { value: "0%", label: "Transaction Sync Errors", desc: "Incremental sync queues resolved all client-side state inconsistencies." },
      { value: "4.8/5", label: "App Store Rating", desc: "Strong customer feedback regarding speed and reliable transactions." },
      { value: "-40%", label: "Mobile Data Bandwidth", desc: "Minimized payload transfers via gzip JSON compression algorithms." }
    ],
    tech: ["React Native", "TypeScript", "FastAPI", "SQLite", "AWS", "Vercel"],
    services: ["Web & App Development"],
    featured: false
  }
];

const mockBlogs: MockBlogPost[] = [
  {
    slug: "future-ai-enterprise",
    title: "The Future of AI in Enterprise Infrastructure",
    excerpt: "Exploring how global enterprises are adopting local, open-source large language models (LLMs) to preserve data sovereignty and reduce operational cloud spend.",
    publishedAt: "June 8, 2026",
    readTime: "5 min read",
    category: "Applied Intelligence",
    tags: ["AI/ML", "Enterprise", "Infrastructure", "Open Source"],
    author: mockTeam[2], // Aman Yadav
    body: [
      "As artificial intelligence transitions from a novelty to a core systems requirement component, global enterprises face a critical fork in the road: lease proprietary cloud API interfaces or host local open-source LLM model weights.",
      "Leasing proprietary models exposes enterprise systems to data sovereignty risks and high transactional costs. On the other hand, running local open-source models (such as Llama 3 or Mistral) on dedicated GPU containers offers complete control, privacy compliance, and predictability in IT infrastructure costs.",
      "To deploy AI locally with high-performance metrics, engineers must implement efficient context vector retrieval (RAG pipelines), prune redundant model layers, and partition databases so intelligence acts as a secure, local neural network.",
      "Ultimately, the competitive advantage will lie with companies that own their neural data pipelines rather than renting generic brains from massive monopolistic APIs. The future of corporate IT architecture is distributed, localized, and open-source."
    ]
  },
  {
    slug: "nextjs14-best-practices",
    title: "Next.js 14 App Router: Production Best Practices",
    excerpt: "A compilation of core patterns for structuring Next.js 14 codebases, dealing with Server Actions, layout composition, and caching optimizations in high-traffic applications.",
    publishedAt: "May 24, 2026",
    readTime: "4 min read",
    category: "Web Engineering",
    tags: ["Next.js", "React", "Frontend", "Performance"],
    author: mockTeam[0], // Manohar Singh
    body: [
      "Next.js 14 introduces foundational features for writing performant react applications, notably dynamic Server Actions and streaming layout structures.",
      "In high-traffic systems, it is recommended to keep page shells static by default. Use loading boundaries for heavy database fetches, and keep your interactive event handlers encapsulated inside client-side components using the 'use client' directive.",
      "Additionally, leveraging absolute import mapping (@/*) avoids long, confusing relative path directories, keeping imports clean and developer operations streamlined.",
      "Optimizing initial bundles using lightweight library alternatives, auditing custom fonts, and lazy loading heavy media elements guarantees that your project consistently clocks sub-second FCP speeds worldwide."
    ]
  },
  {
    slug: "web3-security-standards",
    title: "Web3 Security: Hardening Smart Contracts",
    excerpt: "An in-depth review of smart contract vulnerabilities, gas-saving assembly patterns, and strict Foundry testing guidelines for secure blockchain deployments.",
    publishedAt: "April 15, 2026",
    readTime: "6 min read",
    category: "Blockchain & Web3",
    tags: ["Solidity", "Smart Contracts", "Foundry", "Security"],
    author: mockTeam[1], // Anuj Pokhrel
    body: [
      "Deploying Solidity code onto public ledgers demands rigorous engineering scrutiny. Unlike traditional backends, smart contract bugs can lead to direct, irreversible financial loss.",
      "Engineers should run comprehensive unit tests using Foundry, verify contract states using invariant testing, and optimize gas fees by avoiding redundant storage writes and utilizing optimized assembly blocks when safe.",
      "Always ensure that ownership transfer utilities and contract access levels are thoroughly locked down before mainnet deployment.",
      "By adhering to standard security checklists like the Checks-Effects-Interactions pattern and using reputable libraries like OpenZeppelin, development teams can launch new staking and swap nodes with complete confidence."
    ]
  }
];

const mockJobOpenings: MockJobOpening[] = [
  {
    title: "Senior AI/ML Engineer",
    dept: "Applied Intelligence",
    location: "Remote (Kathmandu, NP / Global)",
    type: "Full-time",
    description: "We are seeking a senior systems-minded ML engineer to lead context optimization pipelines, model fine-tuning, and RAG architectures for our enterprise SaaS partners.",
    requirements: [
      "5+ years of software experience, with 2+ years deploying production ML pipelines.",
      "Deep understanding of vector databases (Pinecone, pgvector) and embedding systems.",
      "Proficient in Python, PyTorch, and FastAPI.",
      "Familiarity with containerized model serving (vLLM, Ollama, Docker)."
    ]
  },
  {
    title: "Full Stack Engineer (Next.js & Go)",
    dept: "Systems Engineering",
    location: "Remote (Kathmandu, NP / Global)",
    type: "Full-time",
    description: "Looking for an engineer who excels at designing clean, typesafe Next.js interfaces that integrate with low-latency Go microservices and RabbitMQ message queues.",
    requirements: [
      "3+ years of production experience with Next.js, TypeScript, and Tailwind CSS.",
      "Strong proficiency writing backend endpoints and databases in Go.",
      "Experience configuring automated CI/CD workflows and Docker configurations.",
      "Solid understanding of relational database design (PostgreSQL)."
    ]
  },
  {
    title: "Technical Writer & Product Marketer",
    dept: "Growth & Communications",
    location: "Remote (Global)",
    type: "Contract",
    description: "We are looking for a technical wordsmith to author deep-dive engineering articles, document developer specifications, and manage corporate branding copy.",
    requirements: [
      "Proven history of writing accessible technical content (blogs, whitepapers).",
      "Familiarity with git workflows, Markdown/MDX, and basic frontend concepts.",
      "Strong communication alignment and editing skills.",
      "Ability to translate complex microservices concepts into clear architectural explanations."
    ]
  }
];

// ==========================================
// CLIENT FETCH METHODS (WITH AUTOMATIC FALLBACKS)
// ==========================================

export async function getCaseStudies(): Promise<MockCaseStudy[]> {
  if (client) {
    try {
      const data = await client.fetch(`*[_type == "caseStudy"] | order(_createdAt desc)`);
      if (data && data.length > 0) {
        return data.map((item: any) => ({
          slug: item.slug?.current || item.slug,
          title: item.title,
          client: item.client,
          industry: item.industry,
          sector: item.sector || item.industry,
          timeline: item.timeline || '4 Months',
          role: item.role || 'Full-Stack Developer',
          challenge: item.challenge,
          solution: item.solution,
          outcomes: item.outcomes || item.results,
          metrics: item.metrics || [],
          tech: item.tech || item.tags || [],
          services: item.services || [],
          featured: !!item.featured
        }));
      }
    } catch (err) {
      console.warn("Sanity fetch failed. Falling back to local case studies.", err);
    }
  }
  return mockCaseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<MockCaseStudy | null> {
  if (client) {
    try {
      const data = await client.fetch(`*[_type == "caseStudy" && (slug.current == $slug || slug == $slug)][0]`, { slug });
      if (data) {
        return {
          slug: data.slug?.current || data.slug,
          title: data.title,
          client: data.client,
          industry: data.industry,
          sector: data.sector || data.industry,
          timeline: data.timeline || '4 Months',
          role: data.role || 'Full-Stack Developer',
          challenge: data.challenge,
          solution: data.solution,
          outcomes: data.outcomes || data.results,
          metrics: data.metrics || [],
          tech: data.tech || data.tags || [],
          services: data.services || [],
          featured: !!data.featured
        };
      }
    } catch (err) {
      console.warn(`Sanity fetch for case study [${slug}] failed. Falling back to local data.`, err);
    }
  }
  const local = mockCaseStudies.find((c) => c.slug === slug);
  return local || null;
}

export async function getTeamMembers(): Promise<MockTeamMember[]> {
  if (client) {
    try {
      const data = await client.fetch(`*[_type == "teamMember"] | order(_createdAt asc)`);
      if (data && data.length > 0) {
        return data.map((item: any) => ({
          name: item.name,
          slug: item.slug?.current || item.slug,
          role: item.role,
          tags: item.tags || [],
          bio: item.bio,
          linkedin: item.linkedin || 'https://linkedin.com',
          github: item.github || 'https://github.com',
          twitter: item.twitter,
          email: item.email,
          avatarText: item.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()
        }));
      }
    } catch (err) {
      console.warn("Sanity fetch failed. Falling back to local team list.", err);
    }
  }
  return mockTeam;
}

export async function getBlogPosts(): Promise<MockBlogPost[]> {
  if (client) {
    try {
      const data = await client.fetch(`*[_type == "blog"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        readTime,
        category,
        tags,
        author->{
          name,
          "slug": slug.current,
          role,
          tags,
          bio,
          linkedin,
          github,
          twitter,
          email
        },
        body
      }`);
      if (data && data.length > 0) {
        return data.map((item: any) => ({
          slug: item.slug,
          title: item.title,
          excerpt: item.excerpt,
          publishedAt: new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          readTime: item.readTime || '5 min read',
          category: item.category,
          tags: item.tags || [],
          author: {
            name: item.author?.name || 'Writer',
            slug: item.author?.slug || 'writer',
            role: item.author?.role || 'Staff Writer',
            tags: item.author?.tags || [],
            bio: item.author?.bio || '',
            linkedin: item.author?.linkedin || '',
            github: item.author?.github || '',
            twitter: item.author?.twitter,
            email: item.author?.email,
            avatarText: (item.author?.name || 'W').split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()
          },
          body: Array.isArray(item.body) ? item.body.map((block: any) => block.children?.map((child: any) => child.text).join('') || '') : []
        }));
      }
    } catch (err) {
      console.warn("Sanity fetch failed. Falling back to local blog list.", err);
    }
  }
  return mockBlogs;
}

export async function getBlogPostBySlug(slug: string): Promise<MockBlogPost | null> {
  if (client) {
    try {
      const data = await client.fetch(`*[_type == "blog" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        readTime,
        category,
        tags,
        author->{
          name,
          "slug": slug.current,
          role,
          tags,
          bio,
          linkedin,
          github,
          twitter,
          email
        },
        body
      }`, { slug });
      if (data) {
        return {
          slug: data.slug,
          title: data.title,
          excerpt: data.excerpt,
          publishedAt: new Date(data.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          readTime: data.readTime || '5 min read',
          category: data.category,
          tags: data.tags || [],
          author: {
            name: data.author?.name || 'Writer',
            slug: data.author?.slug || 'writer',
            role: data.author?.role || 'Staff Writer',
            tags: data.author?.tags || [],
            bio: data.author?.bio || '',
            linkedin: data.author?.linkedin || '',
            github: data.author?.github || '',
            twitter: data.author?.twitter,
            email: data.author?.email,
            avatarText: (data.author?.name || 'W').split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()
          },
          body: Array.isArray(data.body) 
            ? data.body.filter((b: any) => b._type === 'block').map((block: any) => block.children?.map((child: any) => child.text).join('') || '') 
            : []
        };
      }
    } catch (err) {
      console.warn(`Sanity fetch for blog [${slug}] failed. Falling back to local data.`, err);
    }
  }
  const local = mockBlogs.find((b) => b.slug === slug);
  return local || null;
}

export async function getJobOpenings(): Promise<MockJobOpening[]> {
  if (client) {
    try {
      const data = await client.fetch(`*[_type == "jobListing"] | order(_createdAt desc)`);
      if (data && data.length > 0) {
        return data.map((item: any) => ({
          title: item.title,
          dept: item.department,
          location: item.location || 'Remote',
          type: item.type || 'Full-time',
          description: item.description || '',
          requirements: item.requirements || []
        }));
      }
    } catch (err) {
      console.warn("Sanity fetch failed. Falling back to local job listings.", err);
    }
  }
  return mockJobOpenings;
}
