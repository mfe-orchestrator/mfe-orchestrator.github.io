import { Metadata } from "next";
import './style.css'
import FAQList from './FAQList';
import { WaitingListSection } from "@/components/WaitingListSection";

export const metadata: Metadata = {
  title: "MFE Orchestrator - FAQ",
  description:
    "Find answers to the most frequently asked questions about MFE Orchestrator. Learn how to set up, manage versions, enable canary releases, and integrate your microfrontends.",
  keywords: [
    "MFE Orchestrator FAQ",
    "microfrontend questions",
    "frontend orchestration help",
    "microfrontend versioning support",
    "canary releases",
    "multicloud frontend",
    "Kubernetes for frontend",
  ],
  openGraph: {
    title: "MFE Orchestrator - FAQ",
    description:
      "Discover how MFE Orchestrator works: setup, versioning, canary releases, multicloud support, and more.",
    url: "https://mfe-orchestrator-hub.github.io/faq",
    siteName: "MFE Orchestrator",
    images: [
      {
        url: "https://mfe-orchestrator-hub.github.io/faq-og-image.png",
        width: 1200,
        height: 630,
        alt: "MFE Orchestrator FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MFE Orchestrator - FAQ",
    description:
      "Get clear answers to the most common questions about MFE Orchestrator: setup, versioning, and orchestration.",
    images: ["https://mfe-orchestrator-hub.github.io/faq-og-image.png"],
  },
};


export default function FAQPage() {

  return (
    <>
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
          Find answers to common questions about MFE Orchestrator and micro-frontend architecture.
        </p>
      </div>

      <FAQList />
    </div>
    <WaitingListSection />
    </>
  );
}
