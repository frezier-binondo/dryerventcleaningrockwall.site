import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import { ServicePageView } from "@/components/ServicePageView";

const service = SERVICES.find((s) => s.slug === "dryer-vent-installation")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function DryerVentInstallationPage() {
  if (!service) notFound();
  return <ServicePageView service={service} />;
}
