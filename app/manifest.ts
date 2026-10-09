import type { MetadataRoute } from "next";
import { siteFavicon } from "@/data/brand";
import { seo } from "@/data/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.siteName,
    short_name: "Zaryab Chat",
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f3e6cc",
    theme_color: "#2a1410",
    lang: "en-PK",
    icons: [
      {
        src: siteFavicon.src,
        sizes: "any",
        type: siteFavicon.type,
        purpose: "any",
      },
      {
        src: siteFavicon.src,
        sizes: "any",
        type: siteFavicon.type,
        purpose: "maskable",
      },
    ],
  };
}
