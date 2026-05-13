import { absoluteUrl } from "@/lib/site-config";
import { blogPosts } from "@/lib/content/blog";
import { caseStudies } from "@/lib/content/case-studies";
import { industryPages } from "@/lib/content/industries";
import { servicePages } from "@/lib/content/services";
import { technologyPages } from "@/lib/content/technologies";

export type InternalLink = {
  href: string;
  label: string;
  description?: string;
};

/** Curated cross-links for entity-rich internal linking (services ↔ industries ↔ tech ↔ content). */
export function getRelatedLinks(context: {
  serviceSlugs?: string[];
  industrySlugs?: string[];
  technologySlugs?: string[];
  blogSlugs?: string[];
  caseStudySlugs?: string[];
  limit?: number;
}): InternalLink[] {
  const limit = context.limit ?? 8;
  const out: InternalLink[] = [];
  const push = (link: InternalLink) => {
    if (out.length >= limit) return;
    if (!out.some((x) => x.href === link.href)) out.push(link);
  };

  for (const slug of context.serviceSlugs ?? []) {
    const s = servicePages[slug];
    if (s) push({ href: s.path, label: s.title, description: s.summary });
  }
  for (const slug of context.industrySlugs ?? []) {
    const s = industryPages[slug];
    if (s) push({ href: s.path, label: s.title, description: s.summary });
  }
  for (const slug of context.technologySlugs ?? []) {
    const s = technologyPages[slug];
    if (s) push({ href: s.path, label: s.title, description: s.summary });
  }
  for (const slug of context.blogSlugs ?? []) {
    const p = blogPosts.find((b) => b.slug === slug);
    if (p) push({ href: `/blog/${p.slug}`, label: p.title, description: p.summary });
  }
  for (const slug of context.caseStudySlugs ?? []) {
    const c = caseStudies.find((x) => x.slug === slug);
    if (c) push({ href: `/case-studies/${c.slug}`, label: c.title, description: c.summary });
  }

  if (out.length < limit) {
    for (const s of Object.values(servicePages)) {
      push({ href: s.path, label: s.title, description: s.summary });
      if (out.length >= limit) break;
    }
  }
  if (out.length < limit) {
    for (const p of blogPosts) {
      push({ href: `/blog/${p.slug}`, label: p.title, description: p.summary });
      if (out.length >= limit) break;
    }
  }

  return out.slice(0, limit);
}

export function sameAsForSchema(): string[] {
  return [absoluteUrl("/"), absoluteUrl("/contact")];
}
