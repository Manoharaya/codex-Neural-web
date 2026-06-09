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
    challenge: `Optima Health operated a legacy EHR patient portal serving over 50,000 active daily patients. However, the system's underlying monolithic server infrastructure struggled under concurrent request spikes, leading to severe API latency and frequent system timeouts during peak hours. Client-side rendering of medical histories caused an average First Contentful Paint (FCP) of 2.4 seconds, resulting in poor user satisfaction scores.

Furthermore, because the patient portal's public facing sections (such as clinical updates and resource directories) were dynamically rendered via a client-side monolith, search engine crawlers were unable to parse or index critical public health documentation. This indexing block caused a significant loss in organic discoverability, resulting in severe search engine visibility penalties.

Additionally, the monolithic database layout led to frequent table locks during write operations. Whenever hundreds of administrative users updated patient schedules concurrently, read transactions backed up, causing cascading timeouts across their entire operations network.`,
    solution: `To solve these scaling issues, we engineered a completely decoupled, high-performance architecture. We migrated the client-facing frontends to Next.js 14 hosted on Vercel's global edge network. By utilizing Next.js's Incremental Static Regeneration (ISR) and server-side rendering, we ensured that static public directories were cached globally at edge nodes, while sensitive patient portals were rendered dynamically on demand.

For the backend, we decoupled processing workloads into microservices written in Go, deployed in Docker containers on AWS ECS. A RabbitMQ message broker was introduced to handle transactional schedule updates asynchronously, buffering writes and completely eliminating database table locks.

We also implemented pgvector in their PostgreSQL database, enabling semantic search capabilities for medical records. To optimize loading speeds, we implemented strict bundle budgeting, audited third-party scripts, lazy-loaded interactive graphing components, and converted all visual assets to optimized WebP formats.`,
    outcomes: `The decoupled Edge architecture successfully resolved all performance bottlenecks. The patient portal now boasts sub-second initial load speeds worldwide, and Core Web Vitals scores reached a perfect FCP score of 0.9 seconds.

By moving database operations to Go microservices and RabbitMQ write buffers, system locks were resolved completely, reducing scheduling write failure rates to absolute zero.

Additionally, because public directories are now pre-rendered statically, search engine indexing succeeded, leading to a 35% boost in search visibility and organic patient log-ins. Support tickets regarding portal downtime dropped to zero, significantly lowering administrative overhead.`,
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
    challenge: `Vektor Retail handles over 10,000 inquiries daily across different departments. Manual ticket categorisation took up to 6 hours per ticket, leading to major delays and a decline in customer satisfaction scores. Existing auto-responders lacked semantic accuracy.

The sheer volume of customer requests blocked operations leads from extracting structured insights from ticket histories, making it difficult to optimize catalog issues or supply chain delays.

Security was also a critical bottleneck, as sending raw customer order details containing personal identifiers to external APIs without filters violated data protection regulations.`,
    solution: `We built an intelligent intake pipeline using FastAPI. Incoming emails are embedded using OpenAI embeddings and checked against a Pinecone vector index. Relevant company context is injected into fine-tuned Llama 3 models, drafting a high-accuracy, personalized response and routing the ticket to the correct human queue.

We set up a PII scrubbing middleware that automatically replaces names, addresses, and order numbers with placeholder hashes before payloads are dispatched to translation engines or external pipelines.

Finally, we established a background data analytics node using PostgreSQL that parses processed inquiry labels, generating real-time dashboards mapping catalog error rates and regional shipping delays.`,
    outcomes: `The customer service department reduced ticket backlog to zero, allowing support agents to focus on complex, high-tier inquiries.

Average ticket routing and response times dropped from 6 hours to under 30 seconds, leading to a 40% jump in customer satisfaction ratings.

Operational costs inside customer support divisions dropped by 45% due to the automated resolution of common queries. The PII scrubbing pipeline successfully prevented compliance violations, ensuring full regulatory alignment.`,
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
    challenge: `Aether Labs aimed to launch an ERC-20 staking contract managing over $10M in Total Value Locked (TVL). However, high Ethereum gas prices threatened to eat into user yields, making micro-staking economically unviable. More critically, smart contract security vulnerabilities represented an existential risk; a single loophole in the staking logic could lead to complete, irreversible drainage of user assets.

The client also faced major usability issues with existing wallet connection libraries. Slow connection states, unhandled RPC sync timeouts, and cryptic transaction error prompts caused high drop-off rates on their staking frontend dashboard.

Finally, they needed a system that could handle staking distribution updates dynamically without running expensive loops that would exceed block gas limits, which would halt all user withdrawals.`,
    solution: `We designed and deployed a suite of gas-optimized smart contracts in Solidity. We utilized custom storage slot packing, bitwise operations, and loop-free reward allocation algorithms (such as the Scaled Staking mechanism) to optimize bytecode execution, reducing transaction gas fees by 25%.

To guarantee absolute security, we built a comprehensive testing framework in Foundry. We wrote extensive unit tests, fuzzing tests, and invariant tests with 100% branch coverage to simulate millions of user scenarios and identify boundary failures.

For the user interface, we built a sleek React dashboard integrated with Wagmi and RainbowKit, utilizing custom RPC fallback grids to handle network latency. Transaction states were cached locally, showing clear visual cues and transaction guides to users during signatures.`,
    outcomes: `The DeFi protocol launched with complete success. Within 14 days of smart contract mainnet deployment, the Total Value Locked (TVL) exceeded $12 million.

Due to storage optimizations and Scaled Staking logic, transactions achieved a 25% drop in gas fees, making micro-staking viable for retail users.

Most importantly, the platform has maintained a 100% security record with zero exploits. All invariant tests passed, and the smart contracts were certified by a top-tier security audit firm with zero findings. User wallet connection conversion rates rose by 40% due to the optimized Wagmi/RainbowKit implementation.`,
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
    challenge: `LogPoint's ledger sync services experienced high failure rates and locks when parsing more than 5,000 concurrent database updates. This resulted in delayed transaction reconciliations and system-wide timeouts during month-end invoicing.

The legacy architecture processed billing logs synchronously, tying up main threads and blocking other endpoints. This caused a severe bottleneck for their customer dashboard, which frequently crashed during invoicing runs.

Additionally, data integrity was compromised because incomplete database transactions were not properly rolled back during networking spikes.`,
    solution: `We designed a decoupled queue architecture using Go microservices and RabbitMQ message brokers. Write operations were buffered and serialized via memory buffers, updating split tables in PostgreSQL. Real-time notifications were piped over low-latency WebSockets.

We configured strict PostgreSQL transaction isolation levels and scripted a transactional rollback mechanism that triggers automatically if downstream services lose synchronization.

The Go backend compiled to clean binary containers, which were automated for auto-scaling under AWS Elastic Container Service matching system workloads.`,
    outcomes: `System locks were eliminated completely. Reconciliation times dropped from 2 hours to under 3 minutes, with 100% processing reliability.

The customer dashboard maintained a 100% uptime score during month-end billing, running completely unaffected by transaction parsing spikes.

LogPoint successfully scaled its billing ingestion capabilities, comfortably handling 15,000 concurrent invoice updates per second.`,
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
    challenge: `Cedar Gate wanted to launch a secure consumer mobile wallet. However, slow network performance in rural regions led to frequent transaction timeouts and session drops, causing severe sync errors between client states and central ledgers.

Users also reported severe screen lag on older mobile devices due to heavy data re-rendering loops in the frontend.

Security was another critical parameter, demanding hardware-level encryption and biometrics validation on device states before making sensitive payment calls.`,
    solution: `We engineered an offline-first hybrid mobile app using React Native. We built local storage nodes with SQLite databases to capture offline payloads, and scripted transactional queues that synchronize incrementally with Go API gateways once connectivity restores.

We optimized React Native component rendering by using memoization and virtualized lists, cutting memory usage by 40%.

We hooked directly into native iOS Keychain and Android Keystore APIs to encrypt private keys on-device, implementing biometric locks for authorization.`,
    outcomes: `User feedback scores reached 4.8/5. Sync errors dropped to zero and regional users reported crash-free operations under spotty mobile coverage.

The application launched smoothly, achieving over 100,000 downloads in its first month with zero critical payment failures recorded.

Memory usage optimizations resolved layout stutter, creating a fluid 60fps interaction profile even on legacy low-end hardware.`,
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
    slug: "why-nextjs-app-router",
    title: "Why we chose Next.js App Router for every project in 2026",
    excerpt: "A deep dive into why Codex Neural consolidates all web development around Next.js App Router, detailing its static, server, and client-side execution boundaries.",
    publishedAt: "June 10, 2026",
    readTime: "8 min read",
    category: "Web Engineering",
    tags: ["Next.js", "React", "Frontend", "Performance"],
    author: mockTeam[0], // Manohar Singh
    body: [
      "Selecting a frontend framework in 2026 requires looking past surface-level conveniences. As enterprise web systems grow more complex, code durability, rendering speed, and indexing security emerge as core metrics. At Codex Neural, we have standardized all custom web platforms on the Next.js App Router. This article explains the technical rationale behind this engineering choice, outlining how server-side rendering, streaming compilation, and bundle constraints work together to deliver robust applications.",
      "[!] In high-traffic systems, selecting the wrong rendering paradigm can lead to excessive server costs or poor user interaction scores. Next.js App Router resolves this by combining Server Components and Client Components natively.",
      "The foundation of the App Router lies in Server Components (RSC) by default. In traditional Client-Side Rendered (CSR) applications, the client's browser downloads a large JavaScript bundle, parses the syntax, and makes subsequent API calls to fetch data. This flow delays the First Contentful Paint (FCP) and leaves users staring at empty loading indicators. By shifting rendering logic to the server, Next.js generates static HTML pages that compile instantly. The client downloads minimal JavaScript, resolving initial load bottlenecks and optimizing Core Web Vitals.",
      "Additionally, Server Components have direct database access, allowing engineers to run database queries or server-side fetch requests without exposing sensitive API endpoints or authentication tokens to the client. This decoupling acts as a natural security boundary.",
      "```tsx\n// Example of a clean Next.js Server Component fetching data\nimport React from 'react';\nimport { getCaseStudies } from '@/sanity/lib/client';\n\nexport const revalidate = 60; // Revalidate static content every 60s\n\nexport default async function PortfolioPage() {\n  const cases = await getCaseStudies();\n  return (\n    <main className=\"py-12\">\n      <h1 className=\"text-2xl font-bold\">Case Studies</h1>\n      <div className=\"grid gap-6\">\n        {cases.map((c) => (\n          <div key={c.slug} className=\"border p-4 rounded-xl\">\n            <h2>{c.title}</h2>\n          </div>\n        ))}\n      </div>\n    </main>\n  );\n}\n```",
      "Another crucial feature is Streaming and Suspense. Under old monolithic frameworks, a page could not be served until the server fetched all required data. If a database query in a secondary section lagged, the entire page load failed or timed out. In Next.js, we wrap heavy, asynchronous components in React Suspense boundaries. The server immediately streams the static layout shell, showing a skeleton loader, and pipes dynamic components over the network once data resolves.",
      "```tsx\n// Using Suspense to stream heavy components\nimport { Suspense } from 'react';\nimport PortfolioClient from './PortfolioClient';\n\nexport default function Page() {\n  return (\n    <div>\n      <h1>Our Projects</h1>\n      <Suspense fallback={<div>Loading data...</div>}>\n        <PortfolioClient />\n      </Suspense>\n    </div>\n  );\n}\n```",
      "Incremental Static Regeneration (ISR) is another game-changer. For high-volume sites like our blog or portfolio, rendering pages dynamically on every click wastes server cycles and slows response times. With ISR, pages compile at build time and are stored at edge nodes. When a revalidation threshold (such as 600 seconds) is reached, Next.js regenerates the page in the background upon a user request. The server serves the cached page instantly, updates the cache asynchronously, and avoids database hits during traffic spikes.",
      "> \"Next.js App Router provides a seamless boundary between server security and client interactivity, allowing us to build scalable platforms that load in under a second worldwide.\"",
      "For interactive features, we use Client Components by inserting the 'use client' directive. By encapsulating stateful actions, form validations, and animations within leaf components, we keep the main layout shell static and lightweight. This keeps the initial JS bundle small and keeps the site responsive.",
      "Ultimately, Next.js App Router provides a robust, decoupled framework for building modern web properties. It eliminates package bloating, enforces clean boundary discipline, and delivers exceptional user experiences, making it the perfect choice for Codex Neural."
    ]
  },
  {
    slug: "building-ai-ready-infrastructure",
    title: "Building AI-ready infrastructure: what most startups get wrong",
    excerpt: "Exploring the common pitfalls startups face when designing AI integration nodes, and how to build secure, low-latency, and cost-effective intelligence pipelines.",
    publishedAt: "June 8, 2026",
    readTime: "9 min read",
    category: "Applied Intelligence",
    tags: ["AI/ML", "Enterprise", "Infrastructure", "Open Source"],
    author: mockTeam[2], // Aman Yadav
    body: [
      "In 2026, artificial intelligence integration has shifted from a novel feature to a core backend requirement. Startups are racing to connect Large Language Models (LLMs) to their proprietary data pools, hoping to automate user flows and support queues. However, many teams make critical architectural mistakes, leading to high API costs, severe data leaks, and sluggish response times. This article explores how to build secure, low-latency, and cost-effective AI infrastructure that scales.",
      "[!] The most common error in AI engineering is assuming that proprietary cloud APIs are a scalable solution for processing sensitive data payloads.",
      "The first pitfall is API cost and latency. Relying on cloud APIs (such as OpenAI or Anthropic) for every transaction is expensive and introduces network bottlenecks. A single model call can take anywhere from 2 to 10 seconds, which is unacceptable for real-time web applications. To solve this, startups should adopt a multi-tier model configuration. Simple classification tasks, PII scrubbing, and syntax validations should run on small, local open-source models (like Llama 3 8B or Mistral 7B) hosted on private GPU containers, leaving complex reasoning tasks for larger API nodes.",
      "The second pitfall is data sovereignty and compliance. Sending raw customer transcripts or internal medical files to external APIs violates regulations like GDPR and HIPAA. To protect user privacy, startups must establish an ingestion gateway. This gateway scrubs personally identifiable information (PII) before data leaves the private network.",
      "```python\n# Example of a fastapi PII scrubbing gateway middleware\nfrom fastapi import FastAPI, Request\nimport re\n\napp = FastAPI()\n\nEMAIL_REGEX = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')\n\ndef scrub_pii(text: str) -> str:\n    # Replace sensitive email addresses with hashes\n    return EMAIL_REGEX.sub('[REDACTED_EMAIL]', text)\n\n@app.post(\"/v1/analyze\")\nasync def analyze_input(request: Request):\n    body = await request.json()\n    raw_prompt = body.get(\"prompt\", \"\")\n    clean_prompt = scrub_pii(raw_prompt)\n    # Now safely send clean_prompt to the processing pipeline\n    return {\"status\": \"safe\", \"processed_prompt\": clean_prompt}\n```",
      "The third pitfall is poor vector index design. Many teams struggle with Retrieval-Augmented Generation (RAG) pipelines. They chunk documents using arbitrary character limits, resulting in incomplete context, and insert them into vector databases without proper metadata tags. This causes models to hallucinate. To build a robust RAG system, engineers must implement semantic chunking (splitting documents by natural topics or sections) and use hybrid search, combining vector embeddings with traditional keyword matching (like BM25).",
      "```python\n# Example of connecting to pgvector in PostgreSQL\nimport psycopg2\n\nconn = psycopg2.connect(\"dbname=ai_nodes user=postgres\")\ncur = conn.cursor()\n\ndef query_semantic_records(vector_embedding):\n    # Query pgvector table for similar medical record context\n    cur.execute(\"\"\"\n        SELECT id, document_text, distance \n        FROM medical_records \n        ORDER BY embedding <=> %s::vector \n        LIMIT 3;\n    \"\"\", (vector_embedding,))\n    return cur.fetchall()\n```",
      "Finally, startups must optimize model serving. Deploying open-source LLMs on raw cloud instances without a serving wrapper leads to poor throughput. Utilizing inference frameworks like vLLM or TensorRT-LLM enables continuous batching and page-attention caching, which increases token-per-second metrics by up to 400% on the same hardware.",
      "> \"By shifting simple intelligence workloads to fine-tuned local models and securing data streams with PII gates, startups can reduce their cloud expenditures by 70% while securing their data integrity.\"",
      "Ultimately, building an AI-ready infrastructure requires deliberate architectural choices: multi-tier model serving, secure PII gateways, semantic RAG indices, and optimized serving frameworks. By avoiding common integration pitfalls, startups can deploy intelligence pipelines that are fast, compliant, and cost-effective."
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
