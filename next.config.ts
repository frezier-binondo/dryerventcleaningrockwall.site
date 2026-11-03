import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/services",
        destination: "/dryer-vent-cleaning-services",
      },
      {
        source: "/locations",
        destination: "/service-areas",
      },
      {
        source: "/faq",
        destination: "/dryer-vent-cleaning-faqs",
      },
    ];
  },
};

export default nextConfig;
