import Features from "../components/Features";
import Hero from "../components/Hero";
import CodeExample from "../components/CodeExample";
import CTA from "../components/CTA";
import { Metadata } from "next";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "MFE Orchestrator - Microfrontend Versioning & Orchestration | Start now for free",
  description:
    "MFE Orchestrator is a free and open-source software that simplifies versioning and orchestration of microfrontends. Plug & play, multicloud, and easy to integrate.",
  keywords: [
    "MFE Orchestrator",
    "microfrontend",
    "frontend orchestration",
    "frontend versioning",
    "open source",
    "multicloud",
    "Kubernetes for frontend",
  ],
  openGraph: {
    title: "MFE Orchestrator - Microfrontend Versioning & Orchestration",
    description:
      "An open-source solution to orchestrate and version your microfrontends. Multicloud-ready, simple, and fast.",
    url: "https://mfe-orchestrator-hub.github.io",
    siteName: "MFE Orchestrator",
    images: [
      {
        url: "https://mfe-orchestrator-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "MFE Orchestrator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MFE Orchestrator - Microfrontend Versioning & Orchestration",
    description:
      "Easily manage versions, buckets, and canary releases of your microfrontends with MFE Orchestrator.",
    images: ["https://mfe-orchestrator-hub.github.io/og-image.png"],
  },
};
 

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CodeExample />
      <CTA />
    </div>
  );
}
