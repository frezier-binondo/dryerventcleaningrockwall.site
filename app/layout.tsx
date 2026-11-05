import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { JsonLd } from "@/components/JsonLd";
import { COMPANY } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dryerventcleaningrockwall.site"),
  title: {
    default: "Dryer Vent Cleaning Rockwall TX",
    template: "%s",
  },
  description:
    "Keep your home safe and your dryer efficient with professional dryer vent cleaning in Rockwall, TX. Remove lint, improve airflow. Request service today.",
  keywords: [
    "dryer vent cleaning Rockwall TX",
    "dryer vent cleaning company Rockwall",
    "dryer vent cleaning near me",
    "lint removal Rockwall",
    "dryer fire prevention Rockwall",
    "dryer vent repair Heath TX",
    "dryer vent cleaning Fate TX",
    "dryer vent cleaning Rowlett TX",
    "dryer vent cleaning Royse City TX",
    "dryer vent cleaning Wylie TX",
  ],
  authors: [{ name: "Dryer Vent Cleaning Rockwall" }],
  creator: "Dryer Vent Cleaning Rockwall",
  publisher: "Dryer Vent Cleaning Rockwall",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Dryer Vent Cleaning Rockwall TX",
    description:
      "Keep your home safe and your dryer efficient with professional dryer vent cleaning in Rockwall, TX. Certified technicians, fast quotes, same-day service.",
    url: "https://dryerventcleaningrockwall.site",
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dryerventcleaningrockwall.site/images/hero-dryer-vent.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Dryer Vent Cleaning in Rockwall TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryer Vent Cleaning Rockwall TX",
    description:
      "Keep your home safe and your dryer efficient with professional dryer vent cleaning in Rockwall, TX. Fast quotes & certified technicians.",
    images: ["https://dryerventcleaningrockwall.site/images/hero-dryer-vent.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-white pb-14 sm:pb-0">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
