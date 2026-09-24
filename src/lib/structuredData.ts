import { faqs } from "./faqs";
import { CONSOLE_URL, DOCS_URL, GITHUB_URL, PRODUCT, SITE_NAME, SITE_URL, X_URL } from "./seo";

/**
 * JSON-LD builders. Google reads these to understand what the product is and
 * to render rich results — the FAQ one is the realistic path to a first click
 * on question-shaped queries, which is what most of our impressions are.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: PRODUCT.definition,
    // Every profile the project actually holds. An entity anchored in one
    // place is a weak entity: these are how an answer engine confirms that the
    // GitHub organisation, the X account and this site are one thing.
    sameAs: [GITHUB_URL, X_URL],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: PRODUCT.definition,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: PRODUCT.category,
    description: PRODUCT.definition,
    url: SITE_URL,
    downloadUrl: GITHUB_URL,
    softwareHelp: DOCS_URL,
    operatingSystem: "Any (web-based, or self-hosted with Docker)",
    isAccessibleForFree: true,
    license: "https://opensource.org/licenses",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url: CONSOLE_URL,
      description: "Free to start on the hosted console; free to self-host.",
    },
    featureList: [
      "Micro frontend version management per environment",
      "Runtime configuration for Module Federation hosts",
      "Deploy a micro frontend without rebuilding the host application",
      "Canary releases with gradual traffic shifting",
      "One-step rollback to any previous version",
      "Multi-cloud and on-premise artifact storage",
      "CI/CD integrations for GitHub Actions, GitLab CI and Azure DevOps",
    ],
    author: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faqpage`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * A single question/answer pair rendered as a standalone QAPage-style entity,
 * used by the definitional pages so their answer is eligible on its own.
 */
export function definedTermSchema({
  name,
  description,
  path,
  alternateNames = [],
}: {
  name: string;
  description: string;
  path: string;
  alternateNames?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${SITE_URL}${path}#term`,
    name,
    description,
    alternateName: alternateNames,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Micro frontend architecture",
      url: `${SITE_URL}/what-is-a-micro-frontend`,
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", path: "/" },
      ...items,
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function howToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to deploy a micro frontend with MFE Orchestrator",
    description:
      "Publish a new version of a micro frontend and serve it to an environment without rebuilding the host application.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Build your micro frontend",
        text: "Build the micro frontend in its own repository, with its own pipeline, using whatever framework the team already uses.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Publish the artifact",
        text: "Upload the build from GitHub Actions, GitLab CI, Azure DevOps or the API. MFE Orchestrator stores it and records the version.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Assign the version to an environment",
        text: "Choose which version DEV, UAT or PROD should serve — all at once, or gradually with a canary release.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Let the host load it at runtime",
        text: "The host application reads the configuration MFE Orchestrator serves and loads the assigned versions. No host rebuild, and rollback is the same step in reverse.",
      },
    ],
  };
}

/**
 * Structured data for the blog.
 *
 * Three kinds of page, three shapes:
 * - /blog is an index: CollectionPage plus an ItemList pointing at the
 *   articles. Index pages are exactly the case Google wants ItemList for.
 * - /blog/[slug] is the article: BlogPosting, the only node Google uses for
 *   article rich results.
 * - /blog/category/[slug] is an archive, so a CollectionPage like the index.
 *
 * Every node references the site's canonical Organization and WebSite by @id
 * instead of restating them, so the whole site stays one entity.
 */

export function blogIndexSchema({
  path,
  name,
  description,
  posts,
}: {
  path: string;
  name: string;
  description: string;
  posts: readonly { slug: string; title: string }[];
}) {
  const url = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: {
      // The list carries positions and URLs, not content: the article page is
      // the only one that emits a BlogPosting, so there is exactly one node per
      // post across the site.
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
      })),
    },
  };
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string | null;
  imageUrl?: string | null;
  categories?: readonly string[];
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    datePublished: post.publishedAt,
    // Google expects dateModified even on a post that was never revised; there
    // it simply equals the publication date.
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "en",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    ...(post.imageUrl ? { image: post.imageUrl } : {}),
    ...(post.categories?.length
      ? { articleSection: [...post.categories] }
      : {}),
  };
}
