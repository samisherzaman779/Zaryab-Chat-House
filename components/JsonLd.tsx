import { structuredDataGraph } from "@/lib/structured-data";

export function JsonLd() {
  const data = structuredDataGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
