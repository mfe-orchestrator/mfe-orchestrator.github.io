import { Metadata } from "next";
import Link from "next/link";
import './style.css'
import FAQList from './FAQList';
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/structuredData";

// The canonical URL here used to point at /about, which told Google this page
// was a duplicate of a different page and made it a candidate for being dropped
// from the index entirely. pageMetadata derives it from the path instead.
export const metadata: Metadata = pageMetadata({
  title: "Micro Frontend Orchestration FAQ — Quick Answers Before You Start",
  description:
    "What MFE stands for, how a micro frontend orchestrator differs from plain Module Federation, how versioning, canary releases and rollback work, and whether you can self-host.",
  path: "/faq",
  keywords: [
    "micro frontend FAQ",
    "what does mfe stand for",
    "micro frontend orchestrator questions",
    "module federation versioning",
    "micro frontend rollback",
    "self-hosted micro frontend platform",
  ],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd schema={[faqPageSchema(), breadcrumbSchema([{ name: "FAQ", path: "/faq" }])]} />

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Micro frontends, orchestration and MFE Orchestrator — answered plainly.
          </p>
        </div>

        <FAQList />

        <div className="mt-16 text-center space-y-3 text-muted-foreground">
          <p>
            Still deciding whether you need an orchestrator? Start with{" "}
            <Link href="/what-is-a-micro-frontend" className="text-primary hover:underline">
              what a micro frontend is
            </Link>
            , or read how it compares to{" "}
            <Link href="/module-federation" className="text-primary hover:underline">
              plain Module Federation
            </Link>
            .
          </p>
        </div>
      </div>
      <WaitingListSection />
    </>
  );
}
