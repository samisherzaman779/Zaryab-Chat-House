import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import { siteUrl } from "@/data/business";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { JsonLd } from "@/components/JsonLd";

const title = "Chaat Wala | Chaat and Pani Puri in Saddar, Karachi";
const description =
  "Chaat Wala serves chaat, pani puri and kathiyawari chana piyala on Van Street, Empress Market, Saddar, Karachi. Call or get directions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "Chaat Wala", locale: "en_PK", type: "website" },
};
export const viewport: Viewport = { themeColor: "#2a1410" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pb-16 md:pb-0">
        <a
          href="#main"
          className="sr-only z-[70] rounded bg-saffron px-4 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Skip to content
        </a>
        <noscript><style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style></noscript>
        <MotionRoot>{children}</MotionRoot>
        <JsonLd />
      </body>
    </html>
  );
}
