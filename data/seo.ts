/** Central SEO config — update `NEXT_PUBLIC_SITE_URL` when the live domain is ready. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://zaryab-chat-house.vercel.app").replace(/\/$/, "");

const isPlaceholderSite =
  siteUrl.includes("zaryab-chat-house.vercel.app") || siteUrl.includes("localhost") || siteUrl.includes("127.0.0.1");

/** True only on real production deploys with a live domain. */
export const allowIndexing =
  !isPlaceholderSite &&
  process.env.NEXT_PUBLIC_NOINDEX !== "true" &&
  process.env.VERCEL_ENV !== "preview" &&
  process.env.NODE_ENV === "production";

export const seo = {
  siteName: "Zaryab Chat House",
  defaultTitle: "Late Night Chaat at Empress Market, Saddar Karachi",
  description:
    "Zaryab Chat House — chaat on Van Street, Empress Market, Saddar, Karachi since 1990. Open daily 11 PM–1 AM. Single plate Rs 100, double Rs 200, special Rs 250. Call or get directions.",
  keywords: [
    "Zaryab Chat House",
    "chaat Karachi",
    "chaat Empress Market",
    "chaat Saddar",
    "late night chaat Karachi",
    "Van Street chaat",
    "Empress Market food",
    "street food Saddar",
  ],
  locale: "en_PK",
  ogImage: {
    url: "/images/chaat-plate5.png",
    width: 373,
    height: 257,
    alt: "Papri chaat at Zaryab Chat House, Empress Market Karachi",
  },
  geo: {
    latitude: 24.8634375,
    longitude: 67.0303537,
  },
  priceRange: "₨100–₨250",
  servesCuisine: ["Pakistani", "Chaat", "Street food"],
  menuSectionId: "menu",
  faqSectionId: "faq",
} as const;

export function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${p}`;
}
