import type { Metadata } from "next";

export const SITE_URL = "https://mfe-orchestrator.dev";
export const CONSOLE_URL = "https://console.mfe-orchestrator.dev";
export const DOCS_URL = "https://mfe-orchestrator.dev/documentation";
export const GITHUB_URL = "https://github.com/mfe-orchestrator";

export const SITE_NAME = "MFE Orchestrator";

/**
 * The product definition. Every page derives its copy from these three lines so
 * the positioning stays identical across the site, the metadata and the JSON-LD.
 */
export const PRODUCT = {
  /** The category we want to be found in. */
  category: "Micro frontend deployment and orchestration platform",
  /** The promise, in the words a developer would use. */
  oneLiner:
    "Ship a micro frontend without rebuilding the host application.",
  /** The mechanism, for people who need to know how before they trust it. */
  definition:
    "MFE Orchestrator is an open-source control plane for micro frontends. It stores every build, decides which version each environment serves, and hands your host application the runtime configuration it needs — so deploying one micro frontend never means rebuilding the shell.",
} as const;

/**
 * "MFE" alone is an ambiguous acronym, so the vocabulary here always pairs it
 * with the spelled-out term, and covers the three spellings people actually
 * type: "micro frontend", "micro-frontend" and "microfrontend".
 */
export const CORE_KEYWORDS = [
  "micro frontend orchestration",
  "micro frontend deployment",
  "micro frontend versioning",
  "microfrontend orchestrator",
  "micro-frontend architecture",
  "MFE orchestrator",
  "Module Federation",
  "canary release frontend",
  "frontend control plane",
];

interface PageMetaInput {
  title: string;
  description: string;
  /** Path with a leading slash, e.g. "/faq". Used for canonical and og:url. */
  path: string;
  keywords?: string[];
  /** Set for pages that should stay out of the index (orphaned, thin, legal). */
  noindex?: boolean;
}

/**
 * Builds a full metadata object for a page. Centralised because the previous
 * per-page copies drifted: one page canonicalised itself to a different URL,
 * and none of them set an OG image.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  noindex = false,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [...keywords, ...CORE_KEYWORDS],
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
