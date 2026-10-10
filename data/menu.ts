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

const verified = <T>(value: T) => ({ status: "verified" as const, value });

const plate1Photo = verified({
  src: "/images/single-plate.png",
  alt: "Single plate of chana chaat with papri and onion",
  width: 204,
  height: 316,
});

const plate2Photo = verified({
  src: "/images/double-plate.png",
  alt: "Double plate of papri chaat with chickpeas and masala",
  width: 373,
  height: 257,
});

const plate3Photo = verified({
  src: "/images/special-plate.png",
  alt: "Special plate of chaat with chutneys and toppings",
  width: 316,
  height: 373,
});

export const menuItems = z.array(item).parse([
  {
    slug: "single-plate",
    name: "Single Plate",
    nameUrdu: todo,
    tagline: "One full serving on Van Street",
    description: verified(
      "A single plate of our house chaat—seasoned chickpeas, crisp papri, fresh onion, and chutneys finished with chaat masala. Ideal for one person after a round through Empress Market.",
    ),
    price: verified(100),
    photo: plate1Photo,
    category: "Plates",
    featured: true,
    availability: "available",
  },
  {
    slug: "double-plate",
    name: "Double Plate",
    nameUrdu: todo,
    tagline: "Twice the portion",
    description: verified(
      "Double the chaat for a bigger appetite or to share. Same recipes we have used since 1990—more chickpeas, more papri, and the same tangy, spicy balance in every bite.",
    ),
    price: verified(200),
    photo: plate2Photo,
    category: "Plates",
    featured: true,
    availability: "available",
  },
  {
    slug: "special-plate",
    name: "Special Plate",
    nameUrdu: todo,
    tagline: "Our largest serving",
    description: verified(
      "The special plate is piled high with extra toppings and the full spread of chutneys and masala. Our most generous option for chaat lovers who want the complete Zaryab Chat House experience.",
    ),
    price: verified(250),
    photo: plate3Photo,
    category: "Plates",
    featured: true,
    availability: "available",
  },
]);
