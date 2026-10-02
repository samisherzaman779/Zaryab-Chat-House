import { z } from "zod";
import { field, todo } from "./business";

/** `placeholder` copy is neutral area context, not the business's official history. */
export const story = z
  .object({
    copyStatus: z.enum(["placeholder", "verified"]),
    eyebrow: z.string(),
    headline: z.string(),
    paragraphs: z.array(z.string()),
    details: z.array(z.object({ label: z.string(), value: z.string() })),
    ownerStory: field(z.string()), // owner-approved story replaces the placeholder paragraphs
  })
  .parse({
    copyStatus: "placeholder",
    eyebrow: "Saddar, Karachi",
    headline: "Chaat on Van Street, Empress Market",
    paragraphs: [
      "Saddar is one of Karachi's oldest commercial districts, and Empress Market, built in the 1880s, is its best-known landmark.",
      "Chaat Wala is on Van Street in the Empress Market area, serving chaat, pani puri and kathiyawari chana piyala.",
    ],
    details: [
      { label: "Area", value: "Saddar, Karachi" },
      { label: "Landmark", value: "Empress Market" },
      { label: "Street", value: "Van Street" },
    ],
    ownerStory: todo,
  });
