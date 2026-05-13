import type { Metadata } from "next";
import { ToolsLandingView } from "@/components/tools/tools-landing-view";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Free calculators & tools",
  description:
    "Browse Varyense calculators for energy, carbon, AI token costs, mortgages, health, construction, and more—each with SEO hub pages, structured data, and safe links to hosted apps.",
  path: "/tools",
});

export default function ToolsPage() {
  return <ToolsLandingView />;
}
