
import { z } from "zod";

/**
 * Every unconfirmed fact is `todo` with a null value,
 * so it can never render as real data.
 */
export const field = <T extends z.ZodType>(value: T) =>
  z.discriminatedUnion("status", [
    z.object({ status: z.literal("verified"), value }),
    z.object({ status: z.literal("todo"), value: z.null() }),
  ]);

export type Field<T> =
  | { status: "verified"; value: T }
  | { status: "todo"; value: null };

export const todo = { status: "todo", value: null } as const;

const mapsPlaceUrl =
  "https://www.google.com/maps/place/Zaryab+Chat+House/@24.8628683,67.0293042,18.75z/data=!4m20!1m13!4m12!1m4!2m2!1d67.1067917!2d24.874023!4e1!1m6!1m2!1s0x3eb33f1b95816149:0x93df40996d946ce4!2sChaat+wala,+V27J%2BC46,+Van+St,+Empress+Market+Karachi,+Pakistan!2m2!1d67.0302694!2d24.8635409!3m5!1s0x3eb33f51fd555da3:0xa43ea2bb370ee671!8m2!3d24.8634375!4d67.0303537!16s%2Fg%2F11pq6bd2nk?entry=ttu";

const schema = z.object({
  name: z.string(),

  address: z.object({
    street: z.string(),
    area: z.string(),
    city: z.string(),
    region: z.string(),
    countryCode: z.string(),
  }),

  phone: field(
    z.object({
      e164: z.string().regex(/^\+\d{8,15}$/),
      display: z.string(),
    }),
  ),

  // Digits only; use only after confirming WhatsApp is enabled.
  whatsapp: field(z.string().regex(/^\d{8,15}$/)),

  hours: field(z.string()),

  mapsPlaceUrl: field(z.url()),

  instagram: field(z.url()),

  facebook: field(z.url()),

  youtube: field(z.url()),

  tiktok: field(z.url()),

  foundedYear: field(z.number().int()),

  ordering: field(z.boolean()),

  delivery: field(z.boolean()),
});

export const business = schema.parse({
  name: "Zaryab Chat House",

  address: {
    street: "Van Street, Empress Market",
    area: "Saddar",
    city: "Karachi",
    region: "Sindh",
    countryCode: "PK",
  },

  phone: {
    status: "verified",
    value: {
      e164: "+923161113501",
      display: "+92 316 1113501",
    },
  },

  whatsapp: {
    status: "verified",
    value: "923161113501",
  },

  hours: {
    status: "verified",
    value: "Daily, 11:00 PM – 1:00 AM (7 days a week)",
  },

  mapsPlaceUrl: {
    status: "verified",
    value: mapsPlaceUrl,
  },

  instagram: {
    status: "verified",
    value: "https://www.instagram.com/zaryabchathouse",
  },

  facebook: {
    status: "verified",
    value: "https://www.facebook.com/profile.php?id=61594956853013",
  },

  youtube: {
    status: "verified",
    value: "https://www.youtube.com",
  },

  tiktok: {
    status: "verified",
    value: "https://www.tiktok.com/@zaryabchathouse",
  },

  foundedYear: {
    status: "verified",
    value: 1990,
  },

  ordering: todo,

  delivery: todo,
});

export { allowIndexing, siteUrl } from "@/data/seo";

export const addressLine =
  `${business.address.street}, ${business.address.area}, ${business.address.city}`;

export const telHref =
  business.phone.status === "verified"
    ? `tel:${business.phone.value.e164}`
    : null;

export const whatsappHref =
  business.whatsapp.status === "verified"
    ? `https://wa.me/${business.whatsapp.value}`
    : null;

const query = encodeURIComponent(
  `${business.name}, ${addressLine}, Pakistan`,
);

export const directionsHref =
  business.mapsPlaceUrl.status === "verified"
    ? business.mapsPlaceUrl.value.toString()
    : `https://www.google.com/maps/dir/?api=1&destination=${query}`;