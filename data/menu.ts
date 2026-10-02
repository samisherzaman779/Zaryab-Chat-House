import { z } from "zod";
import { field, todo } from "./business";

const photo = z.object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() });
export type Photo = z.infer<typeof photo>;

const item = z.object({
  slug: z.string(),
  name: z.string(),
  nameUrdu: field(z.string()),
  tagline: z.string(), // neutral placeholder label until the owner supplies copy
  description: field(z.string()),
  price: field(z.number()), // PKR, only rendered when verified
  photo: field(photo), // drop a real photo in /public and set status "verified"
  category: z.string(),
  featured: z.boolean(),
  availability: z.enum(["available", "unavailable", "unknown"]),
});
export type MenuItem = z.infer<typeof item>;

const base = {
  nameUrdu: todo, description: todo, price: todo, photo: todo,
  category: "Street food", featured: true, availability: "unknown",
} as const;

export const menuItems = z.array(item).parse([
  { ...base, slug: "chaat", name: "Chaat", tagline: "Street-food chaat" },
  { ...base, slug: "pani-puri", name: "Pani Puri", tagline: "Street-food pani puri" },
  { ...base, slug: "kathiyawari-chana-piyala", name: "Kathiyawari Chana Piyala", tagline: "Kathiyawari-style street food" },
]);
