import { z } from "zod";
import { field } from "./business";

export const story = z
  .object({
    copyStatus: z.enum(["placeholder", "verified"]),
    eyebrow: z.string(),
    headline: z.string(),
    paragraphs: z.array(z.string()),
    details: z.array(z.object({ label: z.string(), value: z.string() })),
    ownerStory: field(z.string()),
  })
  .parse({
    copyStatus: "verified",
    eyebrow: "Van Street, Rainbow Centre",
    headline: "Chaat in Saddar since 1990",
    paragraphs: [
      "Since 1990 we have served late-night chaat on Van Street—families, shopkeepers, and night crowds stopping for a plate before heading home.",
      "We are food-authority registered. Every plate is assembled fresh: chickpeas, papri, chutneys, and the same spice blends our regulars have trusted for years.",
    ],
    details: [
      { label: "Established", value: "1990" },
      { label: "Hours", value: "11 PM – 1 AM daily" },
      { label: "Location", value: "Van Street, Rainbow Centre" },
    ],
    ownerStory: {
      status: "verified",
      value:
        "This stall is our family’s work—one counter and one chaat people still ask for by name. Thank you for trusting us on Van Street.",
    },
  });
