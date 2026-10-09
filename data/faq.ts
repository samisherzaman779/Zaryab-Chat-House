import { z } from "zod";

const faqItem = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
});

export const faqItems = z.array(faqItem).parse([
  {
    id: "hours",
    question: "What are Zaryab Chat House opening hours?",
    answer:
      "We are open every day from 11:00 PM to 1:00 AM, seven days a week—including weekends and public holidays in our usual schedule.",
  },
  {
    id: "location",
    question: "Where is Zaryab Chat House in Karachi?",
    answer:
      "We are on Van Street at Empress Market in Saddar, Karachi. Use the Get Directions button on this site or search “Zaryab Chat House” on Google Maps for the exact pin.",
  },
  {
    id: "menu-prices",
    question: "What is on the menu and how much do plates cost?",
    answer:
      "We serve chaat in three sizes: Single Plate Rs 100, Double Plate Rs 200, and Special Plate Rs 250. See the Menu section on this page for a short description of each plate.",
  },
  {
    id: "since-1990",
    question: "How long has Zaryab Chat House been serving chaat?",
    answer:
      "We have been on Van Street at Empress Market since 1990—more than three decades of the same late-night chaat tradition in Saddar.",
  },
  {
    id: "contact",
    question: "Can I call or WhatsApp to ask before visiting?",
    answer:
      "Yes. Call or message us on +92 316 1113501. WhatsApp is available on the same number—use the Call or WhatsApp buttons on this site.",
  },
  {
    id: "delivery",
    question: "Do you offer delivery?",
    answer:
      "We focus on walk-up service at our Empress Market stall during opening hours. For delivery or large orders, please call or WhatsApp so we can confirm what is possible that night.",
  },
  {
    id: "registered",
    question: "Is Zaryab Chat House a registered food business?",
    answer:
      "Yes. We operate as a food-authority registered business in Karachi, with hygiene and preparation standards we have maintained since 1990.",
  },
  {
    id: "find-stall",
    question: "How do I find the stall inside Empress Market?",
    answer:
      "Head to Van Street in the Empress Market area in Saddar. Google Maps directions to Zaryab Chat House will bring you to our pin; look for us along the Van Street food row during our open hours (11 PM–1 AM).",
  },
]);
