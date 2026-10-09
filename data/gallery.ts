import { z } from "zod";

export const galleryCategories = ["food", "storefront", "atmosphere", "preparation", "location"] as const;

const image = z.object({
  id: z.string(),
  category: z.enum(galleryCategories),
  src: z.string(), // real photo in /public/images
  alt: z.string(),
  width: z.number(),
  height: z.number(),
});

export const galleryItems = z.array(image).parse([
  { id: "chaat-plate1", category: "food", src: "/images/chaat-plate1.png", alt: "Chana chaat with papri, red onion and chili on a white plate", width: 204, height: 204 },
  { id: "chaat-plate2", category: "food", src: "/images/chaat-plate2.png", alt: "Chaat bowl with chickpeas, papri and condiments arranged around it", width: 276, height: 316 },
  { id: "chaat-plate3", category: "food", src: "/images/chaat-plate3.png", alt: "Spoonful of seasoned chickpeas from a bowl of chana chaat", width: 203, height: 203 },
  { id: "chaat-plate4", category: "food", src: "/images/chaat-plate4.png", alt: "Chana chaat with onions, papri and chaat masala on a plate", width: 201, height: 203 },
  { id: "chaat-plate5", category: "food", src: "/images/chaat-plate5.png", alt: "Papri chaat piled with chickpeas, crispy papri and onion", width: 373, height: 257 },
  { id: "chaat-spices1", category: "preparation", src: "/images/chaat-spices1.png", alt: "Bowls of fresh herbs, chutneys and spices used for chaat", width: 205, height: 156 },
  { id: "chaat-spices2", category: "preparation", src: "/images/chaat-spices2.png", alt: "Stainless trays of chickpeas, onions and chutneys being prepared", width: 199, height: 154 },
]);
