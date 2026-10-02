import { z } from "zod";

/** Every unconfirmed fact is `todo` with a null value, so it can never render as real data. */
export const field = <T extends z.ZodType>(value: T) =>
  z.discriminatedUnion("status", [
    z.object({ status: z.literal("verified"), value }),
    z.object({ status: z.literal("todo"), value: z.null() }),
  ]);
export type Field<T> = { status: "verified"; value: T } | { status: "todo"; value: null };

export const todo = { status: "todo", value: null } as const;

const schema = z.object({
  name: z.string(),
  address: z.object({
    street: z.string(),
    area: z.string(),
    city: z.string(),
    region: z.string(),
    countryCode: z.string(),
  }),
  phone: field(z.object({ e164: z.string().regex(/^\+\d{8,15}$/), display: z.string() })),
  whatsapp: field(z.string().regex(/^\d{8,15}$/)), // digits only, set once confirmed WhatsApp-enabled
  hours: field(z.string()),
  mapsPlaceUrl: field(z.url()), // supplied Google Maps place URL, when available
  instagram: field(z.url()),
  facebook: field(z.url()),
  foundedYear: field(z.number().int()),
  ordering: field(z.boolean()),
  delivery: field(z.boolean()),
});

export const business = schema.parse({
  name: "Chaat Wala",
  address: {
    street: "Van Street, Empress Market",
    area: "Saddar",
    city: "Karachi",
    region: "Sindh",
    countryCode: "PK",
  },
  phone: { status: "verified", value: { e164: "+923161113501", display: "+92 316 1113501" } },
  whatsapp: todo,
  hours: todo,
  mapsPlaceUrl: todo,
  instagram: todo,
  facebook: todo,
  foundedYear: todo,
  ordering: todo,
  delivery: todo,
});

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const addressLine = `${business.address.street}, ${business.address.area}, ${business.address.city}`;
export const telHref = business.phone.status === "verified" ? `tel:${business.phone.value.e164}` : null;
export const whatsappHref =
  business.whatsapp.status === "verified" ? `https://wa.me/${business.whatsapp.value}` : null;

// No coordinates are stored. Until a place URL is supplied, Google's documented
// search/directions URLs are built from the address text.
const query = encodeURIComponent(`${business.name}, ${addressLine}, Pakistan`);
export const directionsHref =
  business.mapsPlaceUrl.status === "verified"
    ? business.mapsPlaceUrl.value
    : `https://www.google.com/maps/dir/?api=1&destination=${query}`;
