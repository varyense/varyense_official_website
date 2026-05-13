import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/site-config";
import { tools } from "@/lib/tools";

/** CollectionPage + ItemList for the /tools hub (semantic clustering for search engines). */
export function ToolsIndexSchema() {
  const url = absoluteUrl("/tools");
  const itemListElement = tools.map((t, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: t.title,
    url: absoluteUrl(t.path),
    description: t.shortDescription,
  }));

  const node = {
    "@type": "CollectionPage",
    name: "Calculators & tools by Varyense",
    description:
      "Browse free calculators for energy, finance, health, construction, AI budgeting, and everyday utilities—each with SEO hub pages and hosted interactive apps.",
    url,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tools.length,
      itemListElement,
    },
  };

  return <JsonLd data={node} />;
}
