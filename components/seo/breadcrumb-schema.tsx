import { JsonLd } from "@/components/seo/json-ld";
import type { BreadcrumbItem } from "@/lib/content/types";
import { absoluteUrl } from "@/lib/site-config";

function toBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={toBreadcrumbList(items)} />;
}
