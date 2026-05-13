type JsonValue = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonValue | JsonValue[] }) {
  const payload: JsonValue =
    Array.isArray(data) ? { "@context": "https://schema.org", "@graph": data } : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a JSON string; content is server-generated and safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
