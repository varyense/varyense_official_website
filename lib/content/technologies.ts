import type { BreadcrumbItem, ContentBlock, FaqItem } from "@/lib/content/types";

export type TechnologyPageContent = {
  slug: string;
  path: string;
  title: string;
  summary: string;
  breadcrumbs: BreadcrumbItem[];
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  whyChoose: string[];
  typicalProjects: string[];
  faq: FaqItem[];
  relatedServiceSlugs: string[];
  relatedIndustrySlugs: string[];
  relatedBlogSlugs: string[];
  blocks: ContentBlock[];
};

export const technologyPages: Record<string, TechnologyPageContent> = {
  "nextjs-development": {
    slug: "nextjs-development",
    path: "/technologies/nextjs-development",
    title: "Next.js Development",
    summary:
      "App Router architecture, technical SEO, streaming, and performance patterns for production Next.js applications.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Next.js Development", href: "/technologies/nextjs-development" },
    ],
    heroEyebrow: "Technologies",
    heroTitle: "Next.js engineering for SEO, speed, and maintainability.",
    heroSubtitle:
      "We build App Router projects with disciplined metadata, caching strategy, and component boundaries that stay fast as routes grow.",
    overview:
      "Next.js is a strong fit for content-heavy and SaaS products alike when conventions are followed consistently: server components by default, client boundaries where interaction demands it, and structured metadata for every route surface.",
    whyChoose: [
      "Built-in routing and metadata APIs for technical SEO at scale.",
      "Hybrid rendering models to optimize TTFB and interactivity.",
      "Ecosystem maturity for TypeScript, testing, and deployment tooling.",
    ],
    typicalProjects: [
      "Marketing + docs sites with static generation and incremental updates.",
      "Dashboards with authenticated server rendering and selective client islands.",
      "SaaS consoles with modular feature areas and strong internal linking.",
    ],
    faq: [
      {
        question: "Server components vs client components, how do you decide?",
        answer:
          "We default to server components for data fetching and layout, and introduce client components for stateful UI, animations, or browser-only APIs, keeping bundles smaller and improving LCP.",
      },
    ],
    relatedServiceSlugs: ["web-development", "saas-development"],
    relatedIndustrySlugs: ["ecommerce-solutions", "fintech-software"],
    relatedBlogSlugs: ["building-scalable-saas-with-nextjs", "technical-seo-checklist-2026"],
    blocks: [
      {
        id: "seo-patterns",
        title: "SEO patterns we implement",
        body: "Sitemaps, robots, canonical URLs, JSON-LD modules, and route-level metadata templates that stay consistent as content grows.",
      },
    ],
  },
  "react-development": {
    slug: "react-development",
    path: "/technologies/react-development",
    title: "React Development",
    summary:
      "Component architecture, performance tuning, and predictable state management for web and hybrid mobile products.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "React Development", href: "/technologies/react-development" },
    ],
    heroEyebrow: "Technologies",
    heroTitle: "React interfaces engineered for clarity and long-term velocity.",
    heroSubtitle:
      "We structure components for readability, testing, and incremental feature growth, whether you ship in Next.js or another React host.",
    overview:
      "React rewards consistency: explicit data flow, stable composition patterns, and careful attention to re-render boundaries. We align engineering conventions with your team’s experience level to reduce onboarding friction.",
    whyChoose: [
      "Large talent pool and ecosystem for integrations.",
      "Strong fit for design systems and reusable UI primitives.",
      "Portable skills across web and React Native when needed.",
    ],
    typicalProjects: [
      "Design-system-driven product UI.",
      "Interactive dashboards with accessible controls.",
      "Hybrid apps sharing logic between web and mobile.",
    ],
    faq: [
      {
        question: "Do you prefer a specific state library?",
        answer:
          "We choose based on complexity: React state and context for smaller surfaces, and proven libraries when concurrency, caching, and devtools matter for larger apps.",
      },
    ],
    relatedServiceSlugs: ["web-development", "mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["healthcare-software"],
    relatedBlogSlugs: ["building-scalable-saas-with-nextjs"],
    blocks: [
      {
        id: "performance",
        title: "Performance practices",
        body: "Memoization where justified, code splitting at route boundaries, and careful effects discipline to keep INP healthy.",
      },
    ],
  },
  "laravel-development": {
    slug: "laravel-development",
    path: "/technologies/laravel-development",
    title: "Laravel Development",
    summary:
      "APIs, admin systems, and backend workflows with Laravel, secure defaults, queues, and maintainable domain structure.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Laravel Development", href: "/technologies/laravel-development" },
    ],
    heroEyebrow: "Technologies",
    heroTitle: "Laravel backends built for operational reliability.",
    heroSubtitle:
      "We implement APIs, background jobs, and admin tooling with explicit validation, authorization, and observability hooks.",
    overview:
      "Laravel remains a pragmatic choice for teams that want conventions, rapid delivery, and a mature ecosystem. We emphasize clean boundaries: domain logic separated from framework glue, and queues for anything that should not block user requests.",
    whyChoose: [
      "Fast iteration for admin panels and internal tools.",
      "Strong ecosystem for auth, mail, notifications, and payments integrations.",
      "Clear upgrade paths with disciplined dependency management.",
    ],
    typicalProjects: [
      "JSON APIs powering Next.js or mobile clients.",
      "Operations portals for support and fulfillment teams.",
      "Webhook ingestion with idempotency and retries.",
    ],
    faq: [
      {
        question: "Can Laravel power a Next.js frontend?",
        answer:
          "Yes, often as a dedicated API service with authenticated endpoints, rate limiting, and versioning while the frontend handles rendering and SEO.",
      },
    ],
    relatedServiceSlugs: ["saas-development", "web-development"],
    relatedIndustrySlugs: ["fintech-software", "ecommerce-solutions"],
    relatedBlogSlugs: ["technical-seo-checklist-2026"],
    blocks: [
      {
        id: "quality",
        title: "Quality signals",
        body: "Form requests for validation, policies for authorization, structured logging, and tests around critical business rules.",
      },
    ],
  },
};
