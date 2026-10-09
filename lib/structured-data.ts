
import { brandMainLogo } from "@/data/brand";
import { business, whatsappHref } from "@/data/business";
import { faqItems } from "@/data/faq";
import { menuItems } from "@/data/menu";
import { absoluteUrl, seo, siteUrl } from "@/data/seo";

function menuJsonLd() {
  const items = menuItems
    .filter((item) => item.price.status === "verified")
    .map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description:
        item.description.status === "verified"
          ? item.description.value
          : item.tagline,
      offers: {
        "@type": "Offer",
        price: String(item.price.value),
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
      },
    }));

  return {
    "@type": "Menu",
    "@id": `${siteUrl}#menu`,
    name: "Zaryab Chat House chaat plates",
    hasMenuSection: {
      "@type": "MenuSection",
      name: "Plates",
      hasMenuItem: items,
    },
  };
}

function restaurantJsonLd() {
  const { geo } = seo;

  const sameAs = [
    ...(business.instagram.status === "verified"
      ? [business.instagram.value]
      : []),

    ...(business.facebook.status === "verified"
      ? [business.facebook.value]
      : []),

    ...(business.youtube.status === "verified"
      ? [business.youtube.value]
      : []),

    ...(business.tiktok.status === "verified"
      ? [business.tiktok.value]
      : []),
  ];

  return {
    "@type": ["Restaurant", "FoodEstablishment", "LocalBusiness"],
    "@id": `${siteUrl}#restaurant`,
    name: business.name,
    url: siteUrl,

    image: [
      absoluteUrl(brandMainLogo.src),
      absoluteUrl(seo.ogImage.url),
    ],

    description: seo.description,
    servesCuisine: [...seo.servesCuisine],
    priceRange: seo.priceRange,

    menu: {
      "@id": `${siteUrl}#menu`,
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.countryCode,
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },

    areaServed: {
      "@type": "City",
      name: business.address.city,
    },

    ...(business.phone.status === "verified" && {
      telephone: business.phone.value.e164,

      contactPoint: {
        "@type": "ContactPoint",
        telephone: business.phone.value.e164,
        contactType: "customer service",
        areaServed: business.address.countryCode,
        availableLanguage: ["en", "ur"],
        ...(whatsappHref && { url: whatsappHref }),
      },
    }),

    ...(business.hours.status === "verified" && {
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "23:00",
          closes: "01:00",
        },
      ],
    }),

    ...(business.mapsPlaceUrl.status === "verified" && {
      hasMap: business.mapsPlaceUrl.value,
    }),

    ...(business.foundedYear.status === "verified" && {
      foundingDate: String(business.foundedYear.value),
    }),

    ...(sameAs.length > 0 && { sameAs }),
  };
}

function faqJsonLd() {
  return {
    "@type": "FAQPage",
    "@id": `${siteUrl}#faq`,

    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function webSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: seo.siteName,
    description: seo.description,

    publisher: {
      "@id": `${siteUrl}#restaurant`,
    },

    inLanguage: "en-PK",
  };
}

export function structuredDataGraph() {
  return {
    "@context": "https://schema.org",

    "@graph": [
      webSiteJsonLd(),
      restaurantJsonLd(),
      menuJsonLd(),
      faqJsonLd(),
    ],
}
}