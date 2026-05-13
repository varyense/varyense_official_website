import { blogPosts } from "@/lib/content/blog";
import { caseStudies } from "@/lib/content/case-studies";
import { industryPages } from "@/lib/content/industries";
import { servicePages } from "@/lib/content/services";
import { technologyPages } from "@/lib/content/technologies";
import { getAllTools } from "@/lib/tools";

export type NavItem = { href: string; label: string };

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/blog", label: "Blog" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerExplore: NavItem[] = [
  { href: "/services/web-development", label: "Web development" },
  { href: "/services/saas-development", label: "SaaS development" },
  { href: "/technologies/nextjs-development", label: "Next.js" },
  { href: "/industries/fintech-software", label: "Fintech" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/blog", label: "Blog" },
  { href: "/tools", label: "Calculators & tools" },
];

export const footerLegal: NavItem[] = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/refund-policy", label: "Refunds" },
];

export function allPublicPaths(): string[] {
  const paths = new Set<string>([
    "/",
    "/about",
    "/contact",
    "/services",
    "/case-studies",
    "/blog",
    "/tools",
    "/privacy-policy",
    "/refund-policy",
    "/terms",
  ]);

  for (const p of Object.values(servicePages)) paths.add(p.path);
  for (const p of Object.values(industryPages)) paths.add(p.path);
  for (const p of Object.values(technologyPages)) paths.add(p.path);
  for (const post of blogPosts) paths.add(`/blog/${post.slug}`);
  for (const cs of caseStudies) paths.add(`/case-studies/${cs.slug}`);
  for (const tool of getAllTools()) paths.add(tool.path);

  return [...paths].sort();
}
