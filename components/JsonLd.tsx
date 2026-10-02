import { addressLine, business, siteUrl } from "@/data/business";

// Only verified facts: no hours, rating, reviews or social profiles until confirmed.
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: business.name,
    url: siteUrl,
    description: `Chaat, pani puri and kathiyawari chana piyala at ${addressLine}.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.countryCode,
    },
    ...(business.phone.status === "verified" && { telephone: business.phone.value.e164 }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
