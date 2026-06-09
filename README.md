# Codex Neural - Future-Ready IT Solutions

Codex Neural is a leading IT services company based in Kathmandu, Nepal, specializing in AI/ML, Enterprise Web Development, and Digital Transformation for global clients.

---

## 1. Project Folder Structure
The codebase follows a structured Next.js 14 layout:

```text
├── /app             # Next.js App Router (pages, layouts, and routing)
├── /components      # Reusable UI components (buttons, cards, inputs)
├── /lib             # Helper utilities, functions, and API clients
├── /styles          # Global and Tailwind styling configurations
├── /public          # Static assets (images, icons, fonts)
├── /sanity          # Sanity CMS v3 configuration and schemas
│   ├── /schemas     # Schema definitions (blog, caseStudy, etc.)
│   └── schema.ts    # Main schema registration file
├── package.json     # Node.js dependencies and run scripts
├── tsconfig.json    # TypeScript configuration (with absolute imports)
└── tailwind.config.ts # Tailwind CSS configuration
```

---

## 2. Git Branching Strategy
To ensure software stability and clean deployment pathways, the repository follows a structured branching strategy:

1.  **`main` (Production):** Represents the production-ready code. Only merged via Pull Requests from `staging` after verification.
2.  **`staging` (Pre-production):** Used for integration testing and staging verification. Merged via Pull Requests from `develop`.
3.  **`develop` (Development):** The main branch for feature integration. All feature branches must branch from here.
4.  **Feature/Bugfix Branches (`feat/*`, `bugfix/*`):** Short-lived branches for isolated development, branching from and merging back into `develop`.

---

## 3. Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Vanilla CSS
- **CMS:** Sanity v3 CMS
- **Linter & Formatter:** ESLint & Prettier
