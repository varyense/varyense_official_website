import type { BreadcrumbItem, FaqItem } from "@/lib/content/types";

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string; // ISO
  updatedAt?: string;
  author: string;
  readingTimeMinutes: number;
  tags: string[];
  /** Plain-text sections for TOC + rendering */
  sections: { id: string; heading: string; content: string }[];
  faq: FaqItem[];
  relatedSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-saas-with-nextjs",
    title: "Building scalable SaaS with Next.js (App Router)",
    summary:
      "A practical architecture checklist for SaaS teams: tenancy boundaries, metadata at scale, caching, and operational observability.",
    publishedAt: "2026-01-10T10:00:00.000Z",
    author: "Varyense",
    readingTimeMinutes: 8,
    tags: ["Next.js", "SaaS", "Architecture", "SEO"],
    sections: [
      {
        id: "why-nextjs",
        heading: "Why Next.js fits SaaS delivery",
        content:
          "Next.js combines routing, rendering modes, and metadata APIs in one framework. For SaaS, that means you can ship marketing surfaces and authenticated product areas with consistent patterns—reducing glue code and improving time-to-production.",
      },
      {
        id: "tenancy",
        heading: "Model tenancy early",
        content:
          "Decide how tenants are represented: subdomain, path prefix, or explicit tenant context in session. The data model and authorization checks should reflect the same boundary to avoid subtle cross-tenant bugs.",
      },
      {
        id: "metadata",
        heading: "Metadata templates reduce SEO drift",
        content:
          "Use root title templates, canonical URLs, and route-level descriptions. Centralize repeated Open Graph fields while allowing each page to define unique titles and descriptions.",
      },
      {
        id: "caching",
        heading: "Caching is a product feature",
        content:
          "Treat caching keys and revalidation as part of your release process. Prefer predictable staleness over accidental freshness bugs—especially for plan entitlements and permissions.",
      },
      {
        id: "observability",
        heading: "Observability for SaaS incidents",
        content:
          "Structured logs, tracing on critical paths, and synthetic checks catch regressions before customers do. Pair metrics with user-facing status communication when incidents occur.",
      },
    ],
    faq: [
      {
        question: "Should SaaS dashboards be server-rendered?",
        answer:
          "Often yes for first paint and security, with client islands for interactive charts and editors. The exact split depends on data freshness and interactivity requirements.",
      },
    ],
    relatedSlugs: [
      "technical-seo-checklist-2026",
      "ai-assistants-for-support-teams",
    ],
  },
  {
    slug: "technical-seo-checklist-2026",
    title: "Technical SEO checklist for modern web apps (2026)",
    summary:
      "Canonicals, sitemaps, structured data, internal linking, and CWV signals—what still matters for Google and AI-driven retrieval.",
    publishedAt: "2026-02-02T10:00:00.000Z",
    author: "Varyense",
    readingTimeMinutes: 7,
    tags: ["SEO", "Next.js", "Performance"],
    sections: [
      {
        id: "crawl",
        heading: "Crawlability and indexation",
        content:
          "Robots.txt should declare sitemap locations. Avoid accidental noindex on production. Prefer clean status codes and stable canonical URLs for parameterized routes.",
      },
      {
        id: "structured-data",
        heading: "Structured data with discipline",
        content:
          "Use JSON-LD for Organization, WebSite, Article, FAQPage, and BreadcrumbList where truthful. Schema should match visible content—avoid misleading rich-result bait.",
      },
      {
        id: "cwv",
        heading: "Core Web Vitals are relevance signals",
        content:
          "Optimize LCP with image discipline and prioritized hero rendering. Reduce CLS by reserving space for media and fonts. Improve INP by shrinking client JS and deferring non-critical work.",
      },
      {
        id: "ai-search",
        heading: "AI search and semantic retrieval",
        content:
          "Write with clear headings, explicit entities, and concise summaries. FAQ sections help both humans and systems extract trustworthy answers—especially when tied to factual policies and product boundaries.",
      },
    ],
    faq: [
      {
        question: "Do breadcrumbs help SEO?",
        answer:
          "They improve UX and site structure signals, and BreadcrumbList schema can clarify hierarchy. They should reflect an accurate path users can navigate.",
      },
    ],
    relatedSlugs: ["building-scalable-saas-with-nextjs", "ai-assistants-for-support-teams"],
  },
  {
    slug: "ai-assistants-for-support-teams",
    title: "AI assistants for support teams: a grounded implementation guide",
    summary:
      "How to ship retrieval-augmented support assistants with evaluation, moderation, and human escalation—without turning support into a black box.",
    publishedAt: "2026-03-18T10:00:00.000Z",
    author: "Varyense",
    readingTimeMinutes: 9,
    tags: ["AI", "Support", "Product", "Security"],
    sections: [
      {
        id: "grounding",
        heading: "Ground answers in approved sources",
        content:
          "Retrieval should prioritize authoritative internal docs and policy pages. Citations reduce hallucination risk and help agents validate responses quickly.",
      },
      {
        id: "evaluation",
        heading: "Evaluation is continuous",
        content:
          "Create a labeled set of common tickets and expected answer patterns. Track regression when models, prompts, or document corpora change.",
      },
      {
        id: "moderation",
        heading: "Moderation and PII boundaries",
        content:
          "Redact sensitive fields, log carefully, and define when the assistant must refuse. Escalate to humans for high-risk categories like billing disputes and safety issues.",
      },
    ],
    faq: [
      {
        question: "Will AI replace support teams?",
        answer:
          "The best deployments reduce repetitive workload while increasing consistency. Humans remain essential for judgment, exceptions, and relationship-sensitive cases.",
      },
    ],
    relatedSlugs: ["building-scalable-saas-with-nextjs", "technical-seo-checklist-2026"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function breadcrumbsForPost(slug: string, title: string): BreadcrumbItem[] {
  return [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: title, href: `/blog/${slug}` },
  ];
}
