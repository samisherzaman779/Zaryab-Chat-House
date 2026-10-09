import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import { siteFavicon } from "@/data/brand";
import { allowIndexing, seo, siteUrl } from "@/data/seo";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { JsonLd } from "@/components/JsonLd";

const { defaultTitle, description, siteName, ogImage, locale, keywords } = seo;
const fullTitle = `${siteName} | ${defaultTitle}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: fullTitle,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [...keywords],
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "food",
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
    googleBot: {
      index: allowIndexing,
      follow: allowIndexing,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: fullTitle,
    description,
    url: "/",
    siteName,
    locale,
    type: "website",
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: [ogImage.url],
  },
  icons: {
    icon: [{ url: siteFavicon.src, type: siteFavicon.type }],
    apple: [{ url: siteFavicon.src, type: siteFavicon.type }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2a1410",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PK">
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
