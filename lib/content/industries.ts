import type { BreadcrumbItem, ContentBlock, FaqItem } from "@/lib/content/types";

export type IndustryPageContent = {
  slug: string;
  path: string;
  title: string;
  summary: string;
  breadcrumbs: BreadcrumbItem[];
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  complianceNotes: string[];
  faq: FaqItem[];
  relatedServiceSlugs: string[];
  relatedTechnologySlugs: string[];
  relatedCaseStudySlugs: string[];
  blocks: ContentBlock[];
};

export const industryPages: Record<string, IndustryPageContent> = {
  "healthcare-software": {
    slug: "healthcare-software",
    path: "/industries/healthcare-software",
    title: "Healthcare Software",
    summary:
      "Secure patient-facing portals, clinician workflows, and integrations with pragmatic compliance awareness and maintainable engineering.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Healthcare Software", href: "/industries/healthcare-software" },
    ],
    heroEyebrow: "Industries",
    heroTitle: "Healthcare software that balances speed with responsibility.",
    heroSubtitle:
      "We build workflows that reduce administrative burden while keeping access control, auditing, and reliability front and center.",
    overview:
      "Healthcare products demand careful handling of sensitive data and predictable operations. We partner with teams to ship incrementally, starting with the highest-risk workflows and hardening as usage grows.",
    challenges: [
      "Fragmented systems and duplicate data entry across tools.",
      "Strict access requirements for staff vs patients vs partners.",
      "Need for uptime during peak hours and seasonal demand.",
    ],
    solutions: [
      "Role-based access models with explicit permission boundaries.",
      "Audit-friendly event logging and operational dashboards.",
      "API-first integrations to reduce manual reconciliation.",
    ],
    complianceNotes: [
      "Compliance is contextual to jurisdiction and product scope; we implement technical controls as part of your legal and clinical guidance.",
    ],
    faq: [
      {
        question: "Do you provide HIPAA compliance guarantees?",
        answer:
          "We implement security best practices and support your compliance program, but final compliance posture depends on hosting choices, policies, and organizational processes.",
      },
    ],
    relatedServiceSlugs: ["web-development", "mobile-app-development", "ai-development"],
    relatedTechnologySlugs: ["nextjs-development", "react-development"],
    relatedCaseStudySlugs: ["attend-exam-platform"],
    blocks: [
      {
        id: "focus-areas",
        title: "Common focus areas",
        body: "Scheduling, intake, education portals, internal admin tools, and integrations with billing or EHR ecosystems, scoped to your roadmap.",
      },
    ],
  },
  "fintech-software": {
    slug: "fintech-software",
    path: "/industries/fintech-software",
    title: "Fintech Software",
    summary:
      "Payments-adjacent workflows, dashboards, and SaaS features with an emphasis on traceability, permissions, and operational rigor.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Fintech Software", href: "/industries/fintech-software" },
    ],
    heroEyebrow: "Industries",
    heroTitle: "Fintech products built for auditability and safe change management.",
    heroSubtitle:
      "Money movement amplifies every software bug. We engineer with explicit invariants, reconciliation patterns, and strong observability.",
    overview:
      "Fintech engineering rewards conservative architecture: idempotency keys, ledger-like models where appropriate, and clear admin tooling for support teams.",
    challenges: [
      "High cost of errors in balances, fees, and settlement flows.",
      "Fraud and abuse patterns evolve continuously.",
      "Regulatory expectations vary by region and product type.",
    ],
    solutions: [
      "Transaction tracing and admin investigation tooling.",
      "Feature flags and progressive rollout patterns.",
      "Security reviews for sensitive endpoints and data access.",
    ],
    complianceNotes: [
      "We align implementation to your legal and risk requirements; licensing and jurisdictional rules are outside pure engineering scope.",
    ],
    faq: [
      {
        question: "Can you integrate Stripe or similar providers?",
        answer:
          "Yes, subscriptions, invoices, and webhook-driven workflows are common integrations we implement with testable, replay-safe handlers.",
      },
    ],
    relatedServiceSlugs: ["saas-development", "web-development", "mobile-app-development"],
    relatedTechnologySlugs: ["nextjs-development", "laravel-development"],
    relatedCaseStudySlugs: ["turf-operations-portal"],
    blocks: [
      {
        id: "what-we-build",
        title: "What we build",
        body: "Customer portals, internal ops tools, billing automation layers, and SaaS admin experiences with strong access control.",
      },
    ],
  },
  "ecommerce-solutions": {
    slug: "ecommerce-solutions",
    path: "/industries/ecommerce-solutions",
    title: "E-commerce Solutions",
    summary:
      "Conversion-focused storefronts, catalog systems, and integrations that improve performance, SEO, and operational efficiency.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "E-commerce Solutions", href: "/industries/ecommerce-solutions" },
    ],
    heroEyebrow: "Industries",
    heroTitle: "E-commerce engineering that improves discovery and checkout clarity.",
    heroSubtitle:
      "We connect catalog data, content, and performance budgets so customers find products faster and complete purchases with confidence.",
    overview:
      "E-commerce success is a mix of UX, site speed, and trustworthy fulfillment signals. We implement structured content, clean URL patterns, and internal linking strategies that support growth.",
    challenges: [
      "Thin duplicate content across categories and filters.",
      "Slow LCP on listing pages due to media and third-party scripts.",
      "Operational complexity: inventory, promotions, returns.",
    ],
    solutions: [
      "Structured data for products where applicable and consistent metadata patterns.",
      "Image and font discipline for Core Web Vitals.",
      "Admin tooling tailored to merchandising workflows.",
    ],
    complianceNotes: [
      "Consumer protection rules vary; we implement transparent pricing UX patterns as part of your legal guidance.",
    ],
    faq: [
      {
        question: "Do you build custom storefronts or only integrate platforms?",
        answer:
          "Both. We can implement headless storefronts or extend platforms depending on your catalog complexity and team operations.",
      },
    ],
    relatedServiceSlugs: ["web-development", "ui-ux-design"],
    relatedTechnologySlugs: ["nextjs-development", "react-development"],
    relatedCaseStudySlugs: ["local-business-discovery-app"],
    blocks: [
      {
        id: "seo-for-commerce",
        title: "Technical SEO for commerce",
        body: "Canonical strategy for parameterized URLs, faceted navigation controls, sitemaps, and entity-rich category copy patterns.",
      },
    ],
  },
};
