import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/site-config";

export function WebPageSchema(props: { name: string; description: string; path: string }) {
  const node = {
    "@type": "WebPage",
    name: props.name,
    description: props.description,
    url: absoluteUrl(props.path),
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
  };

  return <JsonLd data={node} />;
}
