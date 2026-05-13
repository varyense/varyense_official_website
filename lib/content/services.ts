import type { BreadcrumbItem, ContentBlock, FaqItem } from "@/lib/content/types";

export type ServicePageContent = {
  slug: string;
  path: string;
  title: string;
  summary: string;
  breadcrumbs: BreadcrumbItem[];
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  benefits: { title: string; body: string }[];
  technologies: string[];
  process: { step: string; detail: string }[];
  faq: FaqItem[];
  relatedIndustrySlugs: string[];
  relatedTechnologySlugs: string[];
  relatedBlogSlugs: string[];
  relatedCaseStudySlugs: string[];
  /** Semantic sections for AI/snippets */
  blocks: ContentBlock[];
};

export const servicePages: Record<string, ServicePageContent> = {
  "saas-development": {
    slug: "saas-development",
    path: "/services/saas-development",
    title: "SaaS Development",
    summary:
      "Design, build, and evolve multi-tenant SaaS products with clear architecture, billing-ready foundations, and production-grade operations.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "SaaS Development", href: "/services/saas-development" },
    ],
    heroEyebrow: "Services",
    heroTitle: "SaaS products engineered for reliability and growth.",
    heroSubtitle:
      "We help teams ship subscription software faster, without sacrificing security, observability, or maintainability.",
    overview:
      "SaaS development at Varyense focuses on outcomes: onboarding that converts, permissions that scale, and infrastructure patterns that keep costs predictable. We align engineering decisions with your roadmap so you can iterate safely in production.",
    benefits: [
      {
        title: "Multi-tenant aware from day one",
        body: "We model tenants, roles, and data boundaries early so refactors do not become emergencies later.",
      },
      {
        title: "Operational clarity",
        body: "Logging, metrics, and deployment workflows are treated as product requirements, not afterthoughts.",
      },
      {
        title: "Product-minded engineering",
        body: "We translate business constraints into technical plans with explicit tradeoffs and timelines.",
      },
    ],
    technologies: ["Next.js", "React", "PostgreSQL", "Stripe", "AWS / Vercel"],
    process: [
      { step: "Discovery", detail: "Map users, tenants, integrations, and compliance constraints." },
      { step: "Architecture", detail: "Define domains, APIs, auth, and data lifecycle." },
      { step: "Build & ship", detail: "Incremental releases with quality gates and monitoring." },
      { step: "Scale", detail: "Performance tuning, cost controls, and roadmap support." },
    ],
    faq: [
      {
        question: "Do you take over existing SaaS codebases?",
        answer:
          "Yes. We start with a focused technical assessment, stabilize critical paths, then propose a phased improvement plan aligned with your business priorities.",
      },
      {
        question: "Can you help with billing and subscriptions?",
        answer:
          "We implement subscription lifecycle patterns (trials, upgrades, proration) using proven providers and clear audit trails.",
      },
    ],
    relatedIndustrySlugs: ["fintech-software", "ecommerce-solutions"],
    relatedTechnologySlugs: ["nextjs-development", "react-development"],
    relatedBlogSlugs: ["building-scalable-saas-with-nextjs"],
    relatedCaseStudySlugs: ["attend-exam-platform"],
    blocks: [
      {
        id: "what-you-get",
        title: "What you get",
        body: "A SaaS delivery partner that ships incrementally: secure authentication, tenant isolation patterns, admin tooling, and release discipline suited to production traffic.",
      },
      {
        id: "who-its-for",
        title: "Who it is for",
        body: "Founding teams shipping an MVP, as well as established products modernizing architecture or scaling customer onboarding.",
      },
    ],
  },
  "web-development": {
    slug: "web-development",
    path: "/services/web-development",
    title: "Web Development",
    summary:
      "High-performance marketing sites, dashboards, and web apps with accessible UI, strong SEO foundations, and maintainable code.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Web Development", href: "/services/web-development" },
    ],
    heroEyebrow: "Services",
    heroTitle: "Websites and web apps built for speed, clarity, and SEO.",
    heroSubtitle:
      "From landing pages to complex workflows, we build web experiences that load fast, communicate clearly, and scale with your team.",
    overview:
      "Web development spans more than visuals: information architecture, performance budgets, and semantic HTML all influence discoverability and conversion. We build with modern frameworks and pragmatic patterns your team can extend.",
    benefits: [
      {
        title: "Performance-first defaults",
        body: "We prioritize LCP-friendly layouts, image discipline, and minimal client JavaScript where possible.",
      },
      {
        title: "Technical SEO baked in",
        body: "Metadata, structured data, sitemaps, and internal linking patterns are part of the implementation, not a late add-on.",
      },
      {
        title: "Accessible UI",
        body: "Keyboard navigation, contrast, and semantics are treated as baseline quality requirements.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      { step: "UX & IA", detail: "Clarify user journeys, content hierarchy, and conversion goals." },
      { step: "Implementation", detail: "Component architecture, SEO modules, and analytics hooks." },
      { step: "Hardening", detail: "Performance passes, accessibility checks, and production readiness." },
      { step: "Launch & iterate", detail: "Monitoring, experiments, and continuous improvements." },
    ],
    faq: [
      {
        question: "Do you work with existing design systems?",
        answer:
          "Yes. We can implement from Figma, extend an internal component library, or help define tokens and reusable patterns.",
      },
      {
        question: "Can you migrate from WordPress or a legacy stack?",
        answer:
          "We plan migrations in phases, content modeling, redirects, and SEO parity, to reduce risk and avoid traffic cliffs.",
      },
    ],
    relatedIndustrySlugs: ["ecommerce-solutions", "healthcare-software"],
    relatedTechnologySlugs: ["nextjs-development", "react-development", "laravel-development"],
    relatedBlogSlugs: ["technical-seo-checklist-2026"],
    relatedCaseStudySlugs: ["local-business-discovery-app"],
    blocks: [
      {
        id: "deliverables",
        title: "Typical deliverables",
        body: "Route structure, reusable layouts, CMS integration when needed, analytics events, and documentation for your team’s workflows.",
      },
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    path: "/services/mobile-app-development",
    title: "Mobile App Development",
    summary:
      "Cross-platform and native-aligned mobile engineering with pragmatic release workflows, offline-aware UX, and secure APIs.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
    heroEyebrow: "Services",
    heroTitle: "Mobile experiences that feel fast, stable, and trustworthy.",
    heroSubtitle:
      "We build mobile products with clear navigation, resilient networking, and backend integrations designed for real-world usage.",
    overview:
      "Mobile users expect instant feedback and graceful degradation. We focus on performance budgets, predictable state management, and API contracts that keep releases smooth across iOS and Android.",
    benefits: [
      {
        title: "Release discipline",
        body: "CI checks, staged rollouts, and crash analytics are integrated into the delivery loop.",
      },
      {
        title: "Security-minded integrations",
        body: "Token handling, deep links, and storage policies are reviewed with threat models appropriate to your domain.",
      },
      {
        title: "Shared domain models",
        body: "We align mobile clients with backend schemas to reduce breakage as features evolve.",
      },
    ],
    technologies: ["React Native", "TypeScript", "REST / GraphQL", "Push notifications"],
    process: [
      { step: "Product shaping", detail: "Define MVP scope, platforms, and non-functional requirements." },
      { step: "Foundations", detail: "Auth, navigation, analytics, and error reporting." },
      { step: "Feature delivery", detail: "Iterative milestones with testable increments." },
      { step: "Store readiness", detail: "Policies, assets, performance, and submission support." },
    ],
    faq: [
      {
        question: "React Native or fully native?",
        answer:
          "We choose based on UX needs, team skills, and timeline. React Native is often the best balance for cross-platform products with shared business logic.",
      },
    ],
    relatedIndustrySlugs: ["healthcare-software", "fintech-software"],
    relatedTechnologySlugs: ["react-development"],
    relatedBlogSlugs: ["ai-assistants-for-support-teams"],
    relatedCaseStudySlugs: ["turf-operations-portal"],
    blocks: [
      {
        id: "platform-fit",
        title: "Platform fit",
        body: "We evaluate device capabilities, offline requirements, and store policies early to avoid costly pivots mid-project.",
      },
    ],
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    path: "/services/ui-ux-design",
    title: "UI/UX Design",
    summary:
      "Research-informed UX, interface systems, and content design that improve conversion, comprehension, and accessibility.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
    ],
    heroEyebrow: "Services",
    heroTitle: "Design systems that make products easier to ship, and easier to use.",
    heroSubtitle:
      "We connect user goals to interface patterns, reducing ambiguity for engineering and improving clarity for customers.",
    overview:
      "Good UX is measurable: fewer support tickets, higher task completion, and clearer comprehension. We produce practical artifacts, flows, wireframes, UI kits, and content guidance, that integrate with development.",
    benefits: [
      {
        title: "Consistent patterns",
        body: "Reusable components and tokens reduce drift between design and code.",
      },
      {
        title: "Accessibility by default",
        body: "Contrast, focus states, and semantics are validated as part of the design process.",
      },
      {
        title: "SEO-aware content structure",
        body: "Headings, scannability, and entity-rich copy patterns support both humans and search systems.",
      },
    ],
    technologies: ["Figma", "Design tokens", "Component specs", "Content guidelines"],
    process: [
      { step: "Research", detail: "Interviews, analytics review, and competitive landscape." },
      { step: "IA & flows", detail: "Maps, states, and edge cases documented explicitly." },
      { step: "UI craft", detail: "High-fidelity screens and interaction notes." },
      { step: "Handoff", detail: "Developer-ready specs and QA checklists." },
    ],
    faq: [
      {
        question: "Do you write UX copy?",
        answer:
          "Yes, microcopy, empty states, and onboarding messaging are part of a complete UX engagement when needed.",
      },
    ],
    relatedIndustrySlugs: ["ecommerce-solutions"],
    relatedTechnologySlugs: ["nextjs-development"],
    relatedBlogSlugs: ["technical-seo-checklist-2026"],
    relatedCaseStudySlugs: ["local-business-discovery-app"],
    blocks: [
      {
        id: "outcomes",
        title: "Outcomes we optimize for",
        body: "Task success, perceived performance, trust signals, and clarity of pricing and onboarding paths.",
      },
    ],
  },
  "ai-development": {
    slug: "ai-development",
    path: "/services/ai-development",
    title: "AI Development",
    summary:
      "Practical AI features: assistants, retrieval workflows, evaluation, and guardrails integrated into your product, not demos.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "AI Development", href: "/services/ai-development" },
    ],
    heroEyebrow: "Services",
    heroTitle: "AI features grounded in your data, policies, and customer trust.",
    heroSubtitle:
      "We implement retrieval-augmented workflows, monitoring, and safety patterns suitable for production, not one-off prototypes.",
    overview:
      "Successful AI products require evaluation datasets, observability, and clear escalation paths when models fail. We focus on measurable quality: latency, grounded answers, and auditability.",
    benefits: [
      {
        title: "Grounded responses",
        body: "Retrieval and citation patterns reduce hallucinations for business-critical answers.",
      },
      {
        title: "Operational monitoring",
        body: "Logging prompts/outputs (with privacy controls) enables regression detection and tuning.",
      },
      {
        title: "Human-in-the-loop",
        body: "We design workflows where automation assists staff instead of replacing judgment blindly.",
      },
    ],
    technologies: ["OpenAI APIs", "Vector search", "TypeScript", "Next.js"],
    process: [
      { step: "Use cases", detail: "Define success metrics, failure modes, and compliance constraints." },
      { step: "Data pipeline", detail: "Chunking, embeddings, access control, and refresh strategy." },
      { step: "Product integration", detail: "UI flows, moderation, and admin tooling." },
      { step: "Evaluation", detail: "Test sets, red teaming basics, and rollout controls." },
    ],
    faq: [
      {
        question: "Can AI features comply with privacy requirements?",
        answer:
          "We implement data minimization, retention policies, and access boundaries aligned to your requirements, treating AI as part of your overall security model.",
      },
    ],
    relatedIndustrySlugs: ["healthcare-software", "fintech-software"],
    relatedTechnologySlugs: ["nextjs-development", "react-development"],
    relatedBlogSlugs: ["ai-assistants-for-support-teams"],
    relatedCaseStudySlugs: ["attend-exam-platform"],
    blocks: [
      {
        id: "when-ai-makes-sense",
        title: "When AI makes sense",
        body: "High-volume support triage, internal knowledge assistants, and workflow copilots with measurable time savings and clear escalation paths.",
      },
    ],
  },
};

export const serviceSlugs = Object.keys(servicePages);
