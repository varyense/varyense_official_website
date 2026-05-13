import type { Metadata } from "next";
import { TechnologyPageView } from "@/components/templates/technology-page-view";
import { technologyPages } from "@/lib/content/technologies";
import { createPageMetadata } from "@/lib/seo/metadata";

const content = technologyPages["react-development"];

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.summary,
  path: content.path,
});

export default function Page() {
  return <TechnologyPageView content={content} />;
}
