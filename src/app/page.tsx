import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyItExists from "../components/WhyItExists";
import CTA from "../components/CTA";
import { Metadata } from "next";
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { howToSchema, softwareApplicationSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  // Leads with the searched category rather than the brand, and states the
  // outcome inside the 60 characters Google will actually show.
  title:
    "Micro Frontend Orchestration & Deployment | MFE Orchestrator",
  description:
    "Deploy, version and roll back micro frontends without rebuilding the host application. Open-source control plane for Module Federation, with canary releases, multi-cloud storage and CI/CD integrations. Free to start.",
  path: "/",
  keywords: [
    "micro frontend orchestrator",
    "micro frontend deployment tool",
    "micro frontend version management",
    "module federation orchestration",
    "deploy micro frontend without rebuilding host",
    "open source micro frontend platform",
  ],
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd schema={[softwareApplicationSchema(), howToSchema()]} />
      <Hero />
      {/* Value proposition before the newsletter: the signup form used to sit
          directly under the hero, ahead of any explanation of the product. */}
      <WhyItExists />
      <Features />
      <HowItWorks />
      <CTA />
      <WaitingListSection />
    </div>
  );
}
