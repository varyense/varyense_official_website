import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/service-page-view";
import { servicePages } from "@/lib/content/services";
import { createPageMetadata } from "@/lib/seo/metadata";

const content = servicePages["ui-ux-design"];

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.summary,
  path: content.path,
});

export default function Page() {
  return <ServicePageView content={content} />;
}
