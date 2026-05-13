import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/site-config";

export function ServiceSchema(props: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaServed?: string;
}) {
  const url = absoluteUrl(props.path);
  const node = {
    "@type": "Service",
    name: props.name,
    description: props.description,
    url,
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    serviceType: props.serviceType ?? props.name,
    areaServed: props.areaServed ?? "Worldwide",
  };

  return <JsonLd data={node} />;
}
