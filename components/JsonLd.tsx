import React from "react";
import { COMPANY } from "@/lib/data";

interface JsonLdProps {
  type?: "LocalBusiness" | "Service" | "FAQPage" | "Article";
  data?: Record<string, unknown>;
}

export function JsonLd({ type = "LocalBusiness", data = {} }: JsonLdProps) {
  const defaultLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY.name,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    url: "https://dryerventcleaningrockwall.site",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9312,
      longitude: -96.4597,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Rockwall" },
      { "@type": "City", name: "Heath" },
      { "@type": "City", name: "Fate" },
      { "@type": "City", name: "Royse City" },
      { "@type": "City", name: "Rowlett" },
      { "@type": "City", name: "Wylie" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.rating,
      reviewCount: COMPANY.reviewCount,
    },
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultLocalBusiness) }}
    />
  );
}
