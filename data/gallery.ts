import { z } from "zod";

export const galleryCategories = ["food", "storefront", "atmosphere", "preparation", "location"] as const;

const image = z.object({
  id: z.string(),
  category: z.enum(galleryCategories),
  src: z.string(), // real photo in /public/gallery
  alt: z.string(),
  width: z.number(),
  height: z.number(),
});

// Empty until the business supplies real photography.
export const galleryItems = z.array(image).parse([]);
