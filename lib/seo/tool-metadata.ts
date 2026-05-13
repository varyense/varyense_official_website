import type { Metadata } from "next";
import type { Tool } from "@/lib/tools";
import { createPageMetadata } from "@/lib/seo/metadata";

/** Route-level metadata for individual calculator hub pages (canonical, OG, Twitter). */
export function buildToolPageMetadata(tool: Tool): Metadata {
  const base = createPageMetadata({
    title: tool.seo.metaTitle,
    description: tool.seo.metaDescription,
    path: tool.path,
  });

  return {
    ...base,
    keywords: tool.keywords,
  };
}
