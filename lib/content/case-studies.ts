import type { BreadcrumbItem, FaqItem } from "@/lib/content/types";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  services: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  cta: { title: string; body: string };
  faq: FaqItem[];
  publishedAt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "attend-exam-platform",
    title: "Attend Exam: online exam delivery at scale",
    summary:
      "A student exam portal with workflows for submissions, evaluations, and performance feedback, built for reliability during peak exam windows.",
    industry: "Education",
    services: ["SaaS development", "Web development", "UI/UX design"],
    technologies: ["Next.js", "React", "PostgreSQL"],
    challenge:
      "Exam platforms spike traffic unpredictably and cannot afford ambiguity in submission states. The product needed clear student flows and a trustworthy evaluation pipeline for teachers.",
    solution:
      "We implemented explicit state machines for attempts and submissions, resilient uploads, and admin tooling that makes evaluation auditable. Observability was added around the highest-risk transitions.",
    results: [
      "Reduced ambiguous submission states through explicit attempt lifecycle modeling.",
      "Improved operational confidence with structured logs and admin dashboards.",
      "Faster iteration cycles via modular route groups and reusable UI primitives.",
    ],
    cta: {
      title: "Planning a high-stakes workflow product?",
      body: "Tell us about peak traffic patterns, roles, and compliance constraints, we’ll propose an architecture and delivery plan.",
    },
    faq: [
      {
        question: "Can this architecture handle proctored exams?",
        answer:
          "Proctoring introduces vendor-specific integrations and policy constraints. We implement technical foundations first, then integrate providers aligned to your requirements.",
      },
    ],
    publishedAt: "2026-01-22T10:00:00.000Z",
  },
  {
    slug: "turf-operations-portal",
    title: "Play on Turf: operations portal for bookings and slots",
    summary:
      "A turf management system that centralizes bookings, slot availability, and day-to-day operations for sports facilities.",
    industry: "Sports & recreation",
    services: ["Web development", "Mobile app development"],
    technologies: ["React", "Laravel", "REST APIs"],
    challenge:
      "Facilities juggle phone bookings, walk-ins, and online demand. Double-bookings and unclear slot states create operational stress and customer churn.",
    solution:
      "We built a single operational source of truth: slot inventory, booking rules, and staff workflows. APIs were designed for both web and mobile clients with consistent validation.",
    results: [
      "Fewer scheduling conflicts through inventory-first booking rules.",
      "Staff workflows consolidated into one portal with role-based access.",
      "Clearer customer communication with predictable confirmation states.",
    ],
    cta: {
      title: "Need an operations portal for a physical business?",
      body: "Share your scheduling constraints and integrations, we’ll map a pragmatic build sequence.",
    },
    faq: [
      {
        question: "Do you integrate payments for deposits?",
        answer:
          "Yes, deposits and refunds can be integrated with provider webhooks and explicit reconciliation tooling for support teams.",
      },
    ],
    publishedAt: "2026-02-14T10:00:00.000Z",
  },
  {
    slug: "local-business-discovery-app",
    title: "Biggapon360: local discovery and bookings",
    summary:
      "A discovery experience that helps local businesses promote services and lets customers find, compare, and book with less friction.",
    industry: "Local commerce",
    services: ["Web development", "UI/UX design", "Technical SEO"],
    technologies: ["Next.js", "TypeScript", "Search indexing patterns"],
    challenge:
      "Discovery products fail when listings are stale, unstructured, or slow. SEO and performance must work together so businesses actually get demand.",
    solution:
      "We implemented structured content patterns, clean internal linking, and performance budgets for media-heavy listings. Admin workflows made updates easier for business owners.",
    results: [
      "More scannable listing pages with consistent metadata and entity-rich copy patterns.",
      "Better performance discipline for listing grids and images.",
      "Improved maintainability with typed content modules and reusable sections.",
    ],
    cta: {
      title: "Growing a marketplace or directory?",
      body: "We can help with SEO architecture, listing quality workflows, and scalable route patterns.",
    },
    faq: [
      {
        question: "How do you prevent duplicate listings?",
        answer:
          "Normalization rules, dedupe workflows in admin tools, and canonical strategies for near-duplicate pages, implemented to match your operational reality.",
      },
    ],
    publishedAt: "2026-03-05T10:00:00.000Z",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}

export function breadcrumbsForCaseStudy(slug: string, title: string): BreadcrumbItem[] {
  return [
    { name: "Home", href: "/" },
    { name: "Case studies", href: "/case-studies" },
    { name: title, href: `/case-studies/${slug}` },
  ];
}
