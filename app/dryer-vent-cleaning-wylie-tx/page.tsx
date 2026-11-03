import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/lib/data";
import { LocationPageView } from "@/components/LocationPageView";

const location = LOCATIONS.find((l) => l.slug === "dryer-vent-cleaning-wylie-tx")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
};

export default function DryerVentCleaningWyliePage() {
  if (!location) notFound();
  return <LocationPageView location={location} />;
}
