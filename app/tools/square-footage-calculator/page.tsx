import { ToolPageView } from "@/components/tools/tool-page-view";
import { buildToolPageMetadata } from "@/lib/seo/tool-metadata";
import { getToolBySlugStrict } from "@/lib/tools";
import type { ToolSlug } from "@/lib/tools";

const slug = "square-footage-calculator" as ToolSlug;
const tool = getToolBySlugStrict(slug);
export const metadata = buildToolPageMetadata(tool);

export default function Page() {
  return <ToolPageView tool={tool} />;
}
