import type { Metadata } from "next";
import { IndustryPageView } from "@/components/templates/industry-page-view";
import { industryPages } from "@/lib/content/industries";
import { createPageMetadata } from "@/lib/seo/metadata";

const content = industryPages["fintech-software"];

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.summary,
  path: content.path,
});

export default function Page() {
  return <IndustryPageView content={content} />;
}
