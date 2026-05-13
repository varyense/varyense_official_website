import type { BreadcrumbItem, FaqItem } from "@/lib/content/types";

export const TOOL_SLUGS = [
  "energy-calculator",
  "carbon-calculator",
  "ai-token-cost-calculator",
  "square-footage-calculator",
  "concrete-slab-calculator",
  "retirement-corpus-calculator",
  "mortgage-loan-calculator",
  "body-fat-calculator",
  "pregnancy-due-date-calculator",
  "calorie-calculator",
  "tire-size-calculator",
  "snow-day-prediction-calculator",
  "air-fryer-conversion-calculator",
  "percentage-calculator",
] as const;

export type ToolSlug = (typeof TOOL_SLUGS)[number];

export type ToolCategory =
  | "Energy & sustainability"
  | "Construction & property"
  | "Finance & planning"
  | "Health & wellness"
  | "Lifestyle & home"
  | "Developer & AI"
  | "Weather & planning";

export type ToolRelated = {
  serviceSlugs: string[];
  technologySlugs?: string[];
  industrySlugs?: string[];
  blogSlugs: string[];
  caseStudySlugs?: string[];
};

export type Tool = {
  slug: ToolSlug;
  title: string;
  shortDescription: string;
  category: ToolCategory;
  keywords: string[];
  /** Hosted calculator app (subdomain). */
  externalUrl: string;
  path: string;
  featured: boolean;
  heroEyebrow: string;
  /** Plain text; the page template applies gradient styling to match services. */
  heroTitle: string;
  heroSubtitle: string;
  introduction: string;
  benefits: { title: string; body: string }[];
  useCases: { title: string; body: string }[];
  faqs: FaqItem[];
  relatedToolSlugs: ToolSlug[];
  related: ToolRelated;
  seo: { metaTitle: string; metaDescription: string };
  schemaApplicationCategory: string;
};

type ToolSeed = Omit<Tool, "path" | "externalUrl"> & { externalHost: string };

function finalize(seed: ToolSeed): Tool {
  return {
    ...seed,
    path: `/tools/${seed.slug}`,
    externalUrl: `https://${seed.externalHost}`,
  };
}

const seeds: ToolSeed[] = [
  {
    slug: "energy-calculator",
    externalHost: "energycalculator.varyense.com",
    title: "Energy cost calculator",
    shortDescription: "Estimate electricity spend from usage, tariffs, and efficiency scenarios.",
    category: "Energy & sustainability",
    featured: true,
    keywords: [
      "energy cost calculator",
      "electricity bill estimator",
      "kWh cost calculator",
      "home energy savings",
    ],
    heroEyebrow: "Tools",
    heroTitle: "Model electricity costs with clear, practical inputs.",
    heroSubtitle:
      "Use the hosted calculator to translate usage and rates into monthly and annual cost views you can compare and iterate on.",
    introduction:
      "Energy planning is easier when costs are visible. This hub page explains what the calculator helps you estimate, how to interpret results, and when to involve an engineer or auditor for high-stakes decisions.",
    benefits: [
      {
        title: "Faster budgeting conversations",
        body: "Align stakeholders around a shared baseline before you invest in hardware upgrades or tariff changes.",
      },
      {
        title: "Scenario thinking",
        body: "Compare simple what-if cases to understand sensitivity to price, load, and seasonal patterns.",
      },
      {
        title: "Transparent assumptions",
        body: "Calculators work best when inputs are explicit, use notes fields and conservative ranges when uncertainty is high.",
      },
    ],
    useCases: [
      {
        title: "Residential budgeting",
        body: "Estimate monthly electricity costs from typical appliance usage and local rates.",
      },
      {
        title: "Small business operations",
        body: "Sanity-check utility line items against measured or estimated consumption.",
      },
      {
        title: "Education and workshops",
        body: "Teach tariff structures with hands-on numeric examples.",
      },
    ],
    faqs: [
      {
        question: "Is this financial advice?",
        answer:
          "No. Results depend on your inputs and simplifying assumptions. Use outputs for planning conversations, not as a substitute for billing statements or professional engineering review.",
      },
      {
        question: "Why is there a separate hosted app?",
        answer:
          "The interactive experience runs on a dedicated subdomain so it can evolve independently while this page provides stable SEO context, FAQs, and internal links.",
      },
    ],
    relatedToolSlugs: ["carbon-calculator", "percentage-calculator", "square-footage-calculator"],
    related: {
      serviceSlugs: ["web-development", "saas-development"],
      technologySlugs: ["nextjs-development"],
      blogSlugs: ["technical-seo-checklist-2026", "building-scalable-saas-with-nextjs"],
    },
    seo: {
      metaTitle: "Energy cost calculator",
      metaDescription:
        "Estimate electricity costs with Varyense’s energy calculator. Learn benefits, use cases, and FAQs, then open the free hosted tool on a dedicated subdomain.",
    },
    schemaApplicationCategory: "UtilitiesApplication",
  },
  {
    slug: "carbon-calculator",
    externalHost: "carboncalculator.varyense.com",
    title: "Carbon footprint calculator",
    shortDescription: "Turn activity estimates into approximate emissions for awareness and planning.",
    category: "Energy & sustainability",
    featured: false,
    keywords: ["carbon footprint calculator", "CO2 estimator", "emissions estimate", "sustainability planning"],
    heroEyebrow: "Tools",
    heroTitle: "Approximate emissions from everyday inputs.",
    heroSubtitle:
      "The hosted calculator helps teams and individuals translate rough activity data into directional carbon estimates.",
    introduction:
      "Carbon accounting is nuanced, methodology matters. This page summarizes what the tool is for, what it is not for, and how to pair outputs with policy-grade measurement when required.",
    benefits: [
      {
        title: "Directional insight",
        body: "Use outputs to identify the biggest contributors in a simple model before investing in detailed inventories.",
      },
      {
        title: "Teaching and alignment",
        body: "Help teams build intuition for orders of magnitude across travel, energy, and consumption categories.",
      },
      {
        title: "Planning prompts",
        body: "Turn estimates into questions: what data would improve accuracy? what decisions change if uncertainty is wide?",
      },
    ],
    useCases: [
      { title: "Team workshops", body: "Facilitate discussions about reduction levers with tangible numbers." },
      { title: "Student projects", body: "Explore sensitivity to assumptions in a controlled environment." },
      { title: "Early-stage roadmaps", body: "Prioritize measurement investments where estimates swing outcomes." },
    ],
    faqs: [
      {
        question: "Can I use this for regulated reporting?",
        answer:
          "Not without validating methodology against your reporting requirements. Treat results as educational unless your process explicitly qualifies the approach.",
      },
      {
        question: "How does this relate to the energy calculator?",
        answer:
          "Energy and emissions are adjacent topics. Use energy calculators for tariff and usage economics, and carbon tools for emissions framing, often together in sustainability narratives.",
      },
    ],
    relatedToolSlugs: ["energy-calculator", "percentage-calculator", "square-footage-calculator"],
    related: {
      serviceSlugs: ["web-development", "saas-development"],
      blogSlugs: ["technical-seo-checklist-2026"],
    },
    seo: {
      metaTitle: "Carbon footprint calculator",
      metaDescription:
        "Explore Varyense’s carbon footprint calculator: benefits, FAQs, and a safe link to the hosted estimator for directional emissions planning.",
    },
    schemaApplicationCategory: "UtilitiesApplication",
  },
  {
    slug: "ai-token-cost-calculator",
    externalHost: "ai-token-cost-calculator.varyense.com",
    title: "AI token cost calculator",
    shortDescription: "Translate token usage into rough provider spend for budgeting and comparisons.",
    category: "Developer & AI",
    featured: true,
    keywords: ["LLM cost calculator", "token pricing", "OpenAI cost estimate", "AI API budget"],
    heroEyebrow: "Tools",
    heroTitle: "Budget AI features with clearer unit economics.",
    heroSubtitle:
      "Estimate spend from token counts and rate assumptions, useful when product teams need quick guardrails before deeper instrumentation.",
    introduction:
      "Shipping AI features responsibly means understanding cost drivers. This page connects product and engineering readers to a hosted calculator while linking to Varyense services for production-grade implementations.",
    benefits: [
      {
        title: "Product guardrails",
        body: "Sanity-check pricing tiers and feature flags against rough per-request economics.",
      },
      {
        title: "Vendor comparison framing",
        body: "Compare scenarios across models when list pricing and tokenization rules differ.",
      },
      {
        title: "Stakeholder communication",
        body: "Translate technical units into finance-friendly ranges with explicit assumptions.",
      },
    ],
    useCases: [
      { title: "SaaS feature scoping", body: "Estimate monthly AI spend for assistive workflows at different adoption levels." },
      { title: "Support automation", body: "Model costs for retrieval-augmented support drafts with capped tokens." },
      { title: "Prototype evaluation", body: "Compare short prompts vs long contexts during early experiments." },
    ],
    faqs: [
      {
        question: "Why do estimates differ from my invoice?",
        answer:
          "Invoices include discounts, caching, batching, retries, and provider-specific billing rules. Treat the calculator as directional unless you calibrate it to your observed usage.",
      },
      {
        question: "Can Varyense help implement production AI?",
        answer:
          "Yes, see AI development services and related articles on evaluation, moderation, and grounded retrieval.",
      },
    ],
    relatedToolSlugs: ["percentage-calculator", "calorie-calculator", "energy-calculator"],
    related: {
      serviceSlugs: ["ai-development", "saas-development"],
      technologySlugs: ["nextjs-development"],
      blogSlugs: ["ai-assistants-for-support-teams", "building-scalable-saas-with-nextjs"],
    },
    seo: {
      metaTitle: "AI token cost calculator",
      metaDescription:
        "Plan LLM spend with Varyense’s AI token cost calculator hub: use cases, FAQs, internal links, and access to the hosted estimator.",
    },
    schemaApplicationCategory: "DeveloperApplication",
  },
  {
    slug: "square-footage-calculator",
    externalHost: "square-footage-calculator.varyense.com",
    title: "Square footage calculator",
    shortDescription: "Compute area from dimensions for rooms, lots, and simple layouts.",
    category: "Construction & property",
    featured: false,
    keywords: ["square footage calculator", "area calculator", "room size sq ft", "lot area estimate"],
    heroEyebrow: "Tools",
    heroTitle: "Measure area consistently for planning tasks.",
    heroSubtitle:
      "The hosted tool supports common geometry patterns so you can move faster on estimates, ordering, and documentation drafts.",
    introduction:
      "Square footage shows up across real estate, renovations, and facilities workflows. This hub clarifies typical uses, limitations, and when to bring in a surveyor or architect for authoritative measurements.",
    benefits: [
      { title: "Shared units", body: "Reduce mismatches between drafts, quotes, and site notes." },
      { title: "Repeatable math", body: "Standardize how dimensions combine into totals across teammates." },
      { title: "Faster proposals", body: "Produce defensible rough quantities for materials planning." },
    ],
    useCases: [
      { title: "Interior planning", body: "Estimate paint, flooring, and lighting coverage from room dimensions." },
      { title: "Property marketing drafts", body: "Cross-check listed areas against simple measurements." },
      { title: "DIY projects", body: "Plan cuts and purchases with clearer totals." },
    ],
    faqs: [
      {
        question: "Is this suitable for legal disclosures?",
        answer:
          "Only if your jurisdiction and listing rules allow simplified measurements. When precision has legal consequences, use licensed measurements and official records.",
      },
      {
        question: "Related construction tools?",
        answer: "Pair with the concrete slab calculator when you are estimating volumes and materials for flatwork.",
      },
    ],
    relatedToolSlugs: ["concrete-slab-calculator", "percentage-calculator", "mortgage-loan-calculator"],
    related: {
      serviceSlugs: ["web-development", "ui-ux-design"],
      industrySlugs: ["ecommerce-solutions"],
      blogSlugs: ["technical-seo-checklist-2026"],
    },
    seo: {
      metaTitle: "Square footage calculator",
      metaDescription:
        "Use Varyense’s square footage calculator hub for SEO context, FAQs, and a direct link to the hosted geometry tool.",
    },
    schemaApplicationCategory: "UtilitiesApplication",
  },
  {
    slug: "concrete-slab-calculator",
    externalHost: "concrete-slab-calculator.varyense.com",
    title: "Concrete slab calculator",
    shortDescription: "Estimate concrete volume and bag counts from slab dimensions.",
    category: "Construction & property",
    featured: false,
    keywords: ["concrete calculator", "slab volume", "bags of concrete", "yardage estimator"],
    heroEyebrow: "Tools",
    heroTitle: "Rough-order concrete quantities before you order.",
    heroSubtitle:
      "Use the hosted calculator to translate dimensions into volume and common bag equivalents, always validate with site conditions.",
    introduction:
      "Concrete jobs have waste factors, reinforcement, and subgrade variability. This page focuses on how the calculator supports early planning and what to verify on site before purchasing.",
    benefits: [
      { title: "Order-of-magnitude checks", body: "Catch unit errors and unrealistic totals before they become expensive." },
      { title: "Crew coordination", body: "Share a baseline assumption set across estimators and purchasers." },
      { title: "Teaching tool", body: "Demonstrate how thickness and area drive volume quickly." },
    ],
    useCases: [
      { title: "Patios and walkways", body: "Plan pours with clearer expectations for material volumes." },
      { title: "Small footings", body: "Estimate needs for minor structural elements in simple projects." },
      { title: "Classroom exercises", body: "Practice unit conversions with practical context." },
    ],
    faqs: [
      {
        question: "Does this include reinforcement or fiber?",
        answer:
          "The hosted tool focuses on plain volume estimates. Add reinforcement, admixtures, and waste factors based on your mix design and jobsite practice.",
      },
      {
        question: "Should I order exactly the output amount?",
        answer:
          "Typically no, jobsites benefit from a prudent buffer and supplier guidance. Treat outputs as planning aids.",
      },
    ],
    relatedToolSlugs: ["square-footage-calculator", "percentage-calculator", "retirement-corpus-calculator"],
    related: {
      serviceSlugs: ["web-development"],
      blogSlugs: ["building-scalable-saas-with-nextjs"],
    },
    seo: {
      metaTitle: "Concrete slab calculator",
      metaDescription:
        "Plan concrete pours with Varyense’s slab calculator hub: benefits, FAQs, and access to the hosted volume and bag estimator.",
    },
    schemaApplicationCategory: "UtilitiesApplication",
  },
  {
    slug: "retirement-corpus-calculator",
    externalHost: "retirement-corpus-calculator.varyense.com",
    title: "Retirement corpus calculator",
    shortDescription: "Project savings growth and withdrawal needs with transparent assumptions.",
    category: "Finance & planning",
    featured: false,
    keywords: ["retirement calculator", "corpus planning", "SWR estimate", "savings projection"],
    heroEyebrow: "Tools",
    heroTitle: "Explore retirement targets with explicit assumptions.",
    heroSubtitle:
      "The hosted calculator helps you iterate on savings rate, return assumptions, and spending needs, outputs are educational, not personalized advice.",
    introduction:
      "Retirement planning is deeply personal and tax-sensitive. This hub explains how to use the calculator responsibly and where to engage licensed professionals for comprehensive plans.",
    benefits: [
      { title: "Scenario literacy", body: "See how sensitive outcomes are to return assumptions and timelines." },
      { title: "Conversation starter", body: "Align partners and advisors around a written set of inputs." },
      { title: "Educational clarity", body: "Separate deterministic math from uncertain market futures." },
    ],
    useCases: [
      { title: "Savings rate experiments", body: "Test how contribution changes affect projected balances." },
      { title: "FIRE-style planning drafts", body: "Explore conservative vs optimistic return bands." },
      { title: "Workshop demos", body: "Teach compounding with concrete numbers." },
    ],
    faqs: [
      {
        question: "Is this personalized financial advice?",
        answer:
          "No. The tool provides generic estimates. Consult a qualified professional for advice tailored to your jurisdiction, tax situation, and risk tolerance.",
      },
      {
        question: "How does this relate to the mortgage calculator?",
        answer:
          "Mortgage tools focus on debt cash flows; retirement tools focus on long-term accumulation and drawdown. Many households use both together.",
      },
    ],
    relatedToolSlugs: ["mortgage-loan-calculator", "percentage-calculator", "calorie-calculator"],
    related: {
      serviceSlugs: ["saas-development", "web-development"],
      industrySlugs: ["fintech-software"],
      blogSlugs: ["technical-seo-checklist-2026"],
    },
    seo: {
      metaTitle: "Retirement corpus calculator",
      metaDescription:
        "Understand retirement planning scenarios with Varyense’s retirement corpus calculator hub, FAQs, and hosted tool link.",
    },
    schemaApplicationCategory: "FinanceApplication",
  },
  {
    slug: "mortgage-loan-calculator",
    externalHost: "mortgage-loan-calculator.varyense.com",
    title: "Mortgage loan calculator",
    shortDescription: "Estimate monthly payments from principal, rate, and term.",
    category: "Finance & planning",
    featured: true,
    keywords: ["mortgage calculator", "home loan payment", "amortization estimate", "interest rate payment"],
    heroEyebrow: "Tools",
    heroTitle: "Clarify monthly payment mechanics for common loan shapes.",
    heroSubtitle:
      "The hosted calculator helps you explore principal and interest relationships, always confirm with a lender for offers and fees.",
    introduction:
      "Mortgages include lender-specific fees, insurance, and escrow treatments. This page frames what the calculator models well and what requires your loan estimate documentation.",
    benefits: [
      { title: "Payment intuition", body: "Understand how rate and term shift monthly principal and interest." },
      { title: "Comparison scaffolding", body: "Compare scenarios with consistent assumptions across options." },
      { title: "Buyer education", body: "Support first-time buyers learning standard loan vocabulary." },
    ],
    useCases: [
      { title: "Purchase budgeting", body: "Estimate housing payment components before shopping with a lender." },
      { title: "Refinance screening", body: "Roughly test break-even ideas before deeper analysis." },
      { title: "Financial literacy classes", body: "Demonstrate amortization concepts interactively." },
    ],
    faqs: [
      {
        question: "Does this include taxes and insurance?",
        answer:
          "Only if the hosted tool’s inputs explicitly capture them. Many calculators separate escrow components, read the on-tool notes carefully.",
      },
      {
        question: "Is this a loan offer?",
        answer: "No. It is an educational estimator. Final terms come only from a licensed lender’s disclosures.",
      },
    ],
    relatedToolSlugs: ["retirement-corpus-calculator", "percentage-calculator", "square-footage-calculator"],
    related: {
      serviceSlugs: ["web-development", "saas-development"],
      industrySlugs: ["fintech-software"],
      blogSlugs: ["technical-seo-checklist-2026"],
    },
    seo: {
      metaTitle: "Mortgage loan calculator",
      metaDescription:
        "Estimate mortgage payments with Varyense’s mortgage calculator hub: clear explanations, FAQs, and a link to the hosted payment tool.",
    },
    schemaApplicationCategory: "FinanceApplication",
  },
  {
    slug: "body-fat-calculator",
    externalHost: "body-fat-calculator.varyense.com",
    title: "Body fat calculator",
    shortDescription: "Estimate body composition using common anthropometric methods.",
    category: "Health & wellness",
    featured: false,
    keywords: ["body fat calculator", "body composition estimate", "skinfold alternative", "fitness metrics"],
    heroEyebrow: "Tools",
    heroTitle: "Directional body composition estimates from measurable inputs.",
    heroSubtitle:
      "The hosted calculator applies published formulas to your measurements, results vary by method and population.",
    introduction:
      "Body composition is multi-dimensional. This hub explains limitations, when clinical methods outperform calculators, and how to interpret trends cautiously.",
    benefits: [
      { title: "Progress tracking support", body: "Pair repeated measurements with consistent technique for trend insight." },
      { title: "Coaching conversations", body: "Anchor discussions in numbers while emphasizing holistic health." },
      { title: "Education", body: "Teach how different estimation methods diverge." },
    ],
    useCases: [
      { title: "Training programs", body: "Set baselines for strength and conditioning clients with clear disclaimers." },
      { title: "Personal journaling", body: "Log estimates alongside performance and recovery signals." },
      { title: "Classroom demos", body: "Explore measurement error and model uncertainty." },
    ],
    faqs: [
      {
        question: "Is this a medical diagnosis?",
        answer:
          "No. It is an educational estimator. For medical decisions, consult qualified clinicians and appropriate measurement protocols.",
      },
      {
        question: "Why do methods disagree?",
        answer:
          "Each method optimizes different proxies, hydration, measurement skill, and formula population all affect outputs.",
      },
    ],
    relatedToolSlugs: ["calorie-calculator", "pregnancy-due-date-calculator", "percentage-calculator"],
    related: {
      serviceSlugs: ["mobile-app-development", "web-development"],
      industrySlugs: ["healthcare-software"],
      blogSlugs: ["technical-seo-checklist-2026"],
    },
    seo: {
      metaTitle: "Body fat calculator",
      metaDescription:
        "Explore body composition estimates with Varyense’s body fat calculator hub: use cases, FAQs, and the hosted measurement tool.",
    },
    schemaApplicationCategory: "HealthApplication",
  },
  {
    slug: "pregnancy-due-date-calculator",
    externalHost: "pregnancy-due-date-calculator.varyense.com",
    title: "Pregnancy due date calculator",
    shortDescription: "Estimate due dates from LMP or ultrasound reference points where applicable.",
    category: "Health & wellness",
    featured: false,
    keywords: ["due date calculator", "pregnancy estimator", "LMP due date", "gestational age"],
    heroEyebrow: "Tools",
    heroTitle: "Educational due date estimates with clinical context in mind.",
    heroSubtitle:
      "The hosted tool applies standard dating approaches used in educational materials, clinical dating should follow provider guidance.",
    introduction:
      "Due dating varies by cycle regularity, ovulation timing, and ultrasound policies. This page summarizes what calculators can and cannot replace in prenatal care.",
    benefits: [
      { title: "Expectation framing", body: "Understand how small reference changes shift estimated windows." },
      { title: "Partner communication", body: "Share a neutral baseline while deferring medical questions to clinicians." },
      { title: "Classroom clarity", body: "Teach standard conventions used alongside professional care." },
    ],
    useCases: [
      { title: "Early pregnancy planning", body: "Roughly map trimester milestones for personal organization, not diagnosis." },
      { title: "Doula and educator resources", body: "Pair tools with referrals and evidence-based curricula." },
      { title: "FAQ support content", body: "Link users from articles to a consistent interactive reference." },
    ],
    faqs: [
      {
        question: "Should I rely on this instead of my provider?",
        answer:
          "No. Always follow your clinician’s dating and scheduling. This tool is informational and cannot account for individual medical history.",
      },
      {
        question: "Why might the estimate differ from an ultrasound?",
        answer:
          "Clinical dating incorporates imaging measurements, cycle history, and guidelines. Calculators use simplified rules.",
      },
    ],
    relatedToolSlugs: ["calorie-calculator", "body-fat-calculator", "percentage-calculator"],
    related: {
      serviceSlugs: ["web-development", "ui-ux-design"],
      industrySlugs: ["healthcare-software"],
      blogSlugs: ["technical-seo-checklist-2026"],
    },
    seo: {
      metaTitle: "Pregnancy due date calculator",
      metaDescription:
        "Read Varyense’s pregnancy due date calculator hub for educational context, FAQs, and access to the hosted estimator.",
    },
    schemaApplicationCategory: "HealthApplication",
  },
  {
    slug: "calorie-calculator",
    externalHost: "calorie-calculator.varyense.com",
    title: "Calorie calculator",
    shortDescription: "Estimate daily energy needs using common predictive equations.",
    category: "Health & wellness",
    featured: false,
    keywords: ["calorie calculator", "TDEE estimate", "maintenance calories", "energy expenditure"],
    heroEyebrow: "Tools",
    heroTitle: "Translate activity and body metrics into maintenance estimates.",
    heroSubtitle:
      "The hosted calculator applies standard equations, individual metabolism varies, so treat outputs as starting points.",
    introduction:
      "Nutrition planning should respect medical conditions and professional guidance. This hub explains how to use calorie estimates responsibly alongside registered dietitians when needed.",
    benefits: [
      { title: "Macro planning baseline", body: "Start budgeting protein, carbs, and fats from a consistent maintenance anchor." },
      { title: "Coach workflows", body: "Provide transparent math clients can reproduce and discuss." },
      { title: "Education", body: "Teach the difference between BMR and TDEE concepts." },
    ],
    useCases: [
      { title: "Cut and bulk planning", body: "Adjust intake relative to estimated maintenance with conservative steps." },
      { title: "Athlete fueling drafts", body: "Sanity-check energy availability assumptions before specialization." },
      { title: "Wellness apps", body: "Deep-link users from marketing pages to an interactive estimator." },
    ],
    faqs: [
      {
        question: "Is this medical nutrition therapy?",
        answer:
          "No. It is a generic estimator. Medical conditions require individualized professional guidance.",
      },
      {
        question: "Why does my wearable disagree?",
        answer:
          "Wearables estimate expenditure differently than equation-based models. Use one method consistently or follow clinician advice.",
      },
    ],
    relatedToolSlugs: ["body-fat-calculator", "percentage-calculator", "pregnancy-due-date-calculator"],
    related: {
      serviceSlugs: ["mobile-app-development", "saas-development"],
      industrySlugs: ["healthcare-software"],
      blogSlugs: ["ai-assistants-for-support-teams"],
    },
    seo: {
      metaTitle: "Calorie calculator",
      metaDescription:
        "Estimate maintenance calories with Varyense’s calorie calculator hub: benefits, FAQs, and the hosted energy needs tool.",
    },
    schemaApplicationCategory: "HealthApplication",
  },
  {
    slug: "tire-size-calculator",
    externalHost: "tire-size-calculator.varyense.com",
    title: "Tire size calculator",
    shortDescription: "Compare overall tire diameters and fitment hints from size notation.",
    category: "Lifestyle & home",
    featured: false,
    keywords: ["tire size calculator", "tire diameter comparison", "plus sizing", "fitment estimate"],
    heroEyebrow: "Tools",
    heroTitle: "Compare tire dimensions before you buy.",
    heroSubtitle:
      "The hosted calculator helps translate size codes into comparable geometry, always confirm clearance and load ratings for your vehicle.",
    introduction:
      "Tire changes interact with speedometer accuracy, braking, and suspension geometry. This hub emphasizes safety checks beyond pure size math.",
    benefits: [
      { title: "Safer comparisons", body: "Evaluate diameter deltas that affect gearing and clearance." },
      { title: "Shopper confidence", body: "Reduce notation confusion across metric and imperial markings." },
      { title: "Content depth", body: "Pair interactive tools with educational articles for SEO topical authority." },
    ],
    useCases: [
      { title: "Winter and summer sets", body: "Compare seasonal wheel packages with consistent math." },
      { title: "Forum answers", body: "Link askers to a repeatable calculator instead of ad-hoc spreadsheets." },
      { title: "Retail assistants", body: "Support staff explaining upsizing tradeoffs." },
    ],
    faqs: [
      {
        question: "Does this replace manufacturer guidance?",
        answer:
          "Never. Always follow placard pressures, load indexes, speed ratings, and manufacturer fitment documentation.",
      },
      {
        question: "Will my speedometer be accurate?",
        answer:
          "Overall diameter changes can affect indicated speed. Validate with GPS or professional recalibration options when applicable.",
      },
    ],
    relatedToolSlugs: ["percentage-calculator", "snow-day-prediction-calculator", "air-fryer-conversion-calculator"],
    related: {
      serviceSlugs: ["web-development"],
      blogSlugs: ["technical-seo-checklist-2026"],
    },
    seo: {
      metaTitle: "Tire size calculator",
      metaDescription:
        "Compare tire sizes with Varyense’s tire calculator hub: safety notes, FAQs, and a link to the hosted comparison tool.",
    },
    schemaApplicationCategory: "UtilitiesApplication",
  },
  {
    slug: "snow-day-prediction-calculator",
    externalHost: "snow-day-prediction-calculator.varyense.com",
    title: "Snow day prediction calculator",
    shortDescription: "Playful, heuristic estimates for snow-day likelihood using weather-style inputs.",
    category: "Weather & planning",
    featured: false,
    keywords: ["snow day calculator", "school closure estimate", "winter weather fun", "snow prediction"],
    heroEyebrow: "Tools",
    heroTitle: "A fun estimator, never a replacement for official announcements.",
    heroSubtitle:
      "The hosted experience combines simplified signals for entertainment and classroom use. Always follow district communications for real closures.",
    introduction:
      "Snow decisions involve safety, transportation, and policy. This page makes the entertainment and educational positioning explicit to align with trustworthy SEO content.",
    benefits: [
      { title: "Clear positioning", body: "Separates playful modeling from authoritative emergency information." },
      { title: "Classroom engagement", body: "Teach probability language with relatable winter context." },
      { title: "Seasonal traffic", body: "Earn topical relevance during winter months without overclaiming accuracy." },
    ],
    useCases: [
      { title: "Student projects", body: "Discuss uncertainty, data sources, and responsible messaging." },
      { title: "Social posts", body: "Link to a transparent methodology page instead of opaque gimmicks." },
      { title: "Family planning jokes", body: "Keep expectations light while checking official channels." },
    ],
    faqs: [
      {
        question: "Can schools use this to decide closures?",
        answer:
          "No. Closures must follow official processes. This tool is not designed for operational decision-making.",
      },
      {
        question: "How accurate is it?",
        answer:
          "Accuracy is not guaranteed. Treat outputs as heuristic entertainment unless the hosted tool explicitly documents validated models.",
      },
    ],
    relatedToolSlugs: ["percentage-calculator", "tire-size-calculator", "energy-calculator"],
    related: {
      serviceSlugs: ["web-development", "saas-development"],
      blogSlugs: ["building-scalable-saas-with-nextjs"],
    },
    seo: {
      metaTitle: "Snow day prediction calculator",
      metaDescription:
        "Explore Varyense’s snow day calculator hub: responsible disclaimers, FAQs, and access to the hosted playful estimator.",
    },
    schemaApplicationCategory: "UtilitiesApplication",
  },
  {
    slug: "air-fryer-conversion-calculator",
    externalHost: "air-fryer-conversion-calculator.varyense.com",
    title: "Air fryer conversion calculator",
    shortDescription: "Convert conventional oven times and temperatures to air-fryer-friendly ranges.",
    category: "Lifestyle & home",
    featured: false,
    keywords: ["air fryer converter", "oven to air fryer", "cooking temperature adjust", "recipe conversion"],
    heroEyebrow: "Tools",
    heroTitle: "Adapt recipes with safer, test-and-learn conversions.",
    heroSubtitle:
      "Air fryers vary by wattage and basket size. The hosted calculator suggests starting points, always monitor food for doneness and safety.",
    introduction:
      "Kitchen conversions are part art. This hub encourages food-safety habits and links to the hosted tool for interactive experimentation.",
    benefits: [
      { title: "Faster weeknight meals", body: "Reduce guesswork when adapting familiar oven recipes." },
      { title: "New appliance onboarding", body: "Help new owners build confidence with structured adjustments." },
      { title: "Content hubs", body: "Pair calculators with internal links to broader lifestyle and utility topics." },
    ],
    useCases: [
      { title: "Frozen foods", body: "Tune time and temperature for crispness without burning." },
      { title: "Meal prep", body: "Batch items with consistent thickness for predictable results." },
      { title: "Creator workflows", body: "Link recipe posts to a canonical interactive converter." },
    ],
    faqs: [
      {
        question: "Is every conversion safe?",
        answer:
          "No. Thickness, starting temperature, and appliance quirks matter. Always follow food safety guidance and manufacturer instructions.",
      },
      {
        question: "Why link out to a subdomain?",
        answer:
          "Interactive tools can ship independently while this site preserves narrative context, FAQs, and internal linking for SEO.",
      },
    ],
    relatedToolSlugs: ["percentage-calculator", "calorie-calculator", "tire-size-calculator"],
    related: {
      serviceSlugs: ["web-development"],
      blogSlugs: ["technical-seo-checklist-2026"],
    },
    seo: {
      metaTitle: "Air fryer conversion calculator",
      metaDescription:
        "Convert oven recipes for air fryers with Varyense’s hub page: tips, FAQs, and the hosted conversion calculator.",
    },
    schemaApplicationCategory: "LifestyleApplication",
  },
  {
    slug: "percentage-calculator",
    externalHost: "percentage-calculator.varyense.com",
    title: "Percentage calculator",
    shortDescription: "Solve common percent change, ratio, and tip-style calculations quickly.",
    category: "Finance & planning",
    featured: true,
    keywords: ["percentage calculator", "percent change", "discount calculator", "tip calculator"],
    heroEyebrow: "Tools",
    heroTitle: "Handle everyday percentage math without spreadsheet friction.",
    heroSubtitle:
      "The hosted calculator focuses on the most common percentage relationships used in finance, school, and shopping contexts.",
    introduction:
      "Percentages appear across pricing, analytics, and education. This hub connects the calculator to broader internal resources on technical communication and product analytics workflows.",
    benefits: [
      { title: "Fewer mistakes", body: "Standardize “percent of” vs “percent change” vocabulary with guided inputs." },
      { title: "Teaching support", body: "Give learners immediate feedback while preserving written methods." },
      { title: "Cross-tool synergy", body: "Pair with finance calculators for discount and interest intuition." },
    ],
    useCases: [
      { title: "Retail markdowns", body: "Stack discounts and sale pricing with clearer intermediate steps." },
      { title: "Homework checks", body: "Verify practice problems with transparent breakdowns." },
      { title: "Business reviews", body: "Translate growth rates into plain language for stakeholders." },
    ],
    faqs: [
      {
        question: "Does it handle compound percentages?",
        answer:
          "Depends on the hosted tool’s modes. Read on-page labels carefully when chaining sequential discounts or growth rates.",
      },
      {
        question: "Why host a simple calculator?",
        answer:
          "Because clarity and speed matter. Dedicated tools reduce errors and earn navigational queries when paired with helpful documentation.",
      },
    ],
    relatedToolSlugs: ["mortgage-loan-calculator", "retirement-corpus-calculator", "ai-token-cost-calculator"],
    related: {
      serviceSlugs: ["web-development", "saas-development"],
      technologySlugs: ["nextjs-development"],
      blogSlugs: ["technical-seo-checklist-2026", "building-scalable-saas-with-nextjs"],
    },
    seo: {
      metaTitle: "Percentage calculator",
      metaDescription:
        "Use Varyense’s percentage calculator hub for quick math help, FAQs, and a secure link to the hosted calculator app.",
    },
    schemaApplicationCategory: "UtilitiesApplication",
  },
];

export const tools: Tool[] = seeds.map(finalize);

const toolBySlug = new Map<ToolSlug, Tool>(tools.map((t) => [t.slug, t]));

export function getToolBySlug(slug: string): Tool | undefined {
  return toolBySlug.get(slug as ToolSlug);
}

export function getToolBySlugStrict(slug: ToolSlug): Tool {
  const t = toolBySlug.get(slug);
  if (!t) throw new Error(`Unknown tool slug: ${slug}`);
  return t;
}

export function getAllTools(): Tool[] {
  return tools;
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export function getToolCategories(): ToolCategory[] {
  return [...new Set(tools.map((t) => t.category))].sort();
}

export function getRelatedTools(slug: ToolSlug, limit = 4): Tool[] {
  const tool = getToolBySlugStrict(slug);
  const related = tool.relatedToolSlugs.map((s) => toolBySlug.get(s)).filter(Boolean) as Tool[];
  if (related.length >= limit) return related.slice(0, limit);
  const extras = tools.filter((t) => t.slug !== slug && !related.some((r) => r.slug === t.slug));
  return [...related, ...extras].slice(0, limit);
}

export function breadcrumbsForTool(tool: Tool): BreadcrumbItem[] {
  return [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: tool.title, href: tool.path },
  ];
}

export const toolsIndexFaqs: FaqItem[] = [
  {
    question: "Why does Varyense host calculators on subdomains?",
    answer:
      "Subdomains let each interactive app deploy and iterate independently while varyense.com provides stable educational context, structured data, FAQs, and internal links that strengthen topical authority.",
  },
  {
    question: "Are these calculators professional advice?",
    answer:
      "No. Tools are for education and planning unless explicitly stated otherwise on the tool. For legal, medical, tax, engineering, or financial decisions, consult qualified professionals and primary sources.",
  },
  {
    question: "Can you build a custom calculator for my business?",
    answer:
      "Yes. Varyense builds web and SaaS products where interactive estimators, onboarding flows, and dashboards are core to the product. Start with the contact page and describe your inputs, outputs, and compliance constraints.",
  },
];
