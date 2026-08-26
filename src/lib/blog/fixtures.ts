import type { PortableTextBlock } from "@portabletext/types";
import type { Category, Post, PostSummary } from "./types";

/**
 * Placeholder posts for local development, active only with BLOG_FIXTURES=1.
 *
 * They exist so the blog (index, article, category archive, feed) can be worked
 * on before the CMS has content, or with no network at all. They are not
 * publishable copy: the env var is never set in CI, so these never ship.
 */

const CATEGORIES: Category[] = [
  {
    title: "Architecture",
    slug: "architecture",
    description: "Decisions about micro frontend boundaries and runtime integration.",
  },
  {
    title: "Releases",
    slug: "releases",
    description: "Versioning, canary releases and rollbacks across environments.",
  },
];

// Minimal Portable Text builders. The fixtures are content, not a test of the
// serializer, so paragraphs, headings and lists are enough.
let key = 0;
const nextKey = () => `fx${(key += 1)}`;

function span(text: string) {
  return { _type: "span", _key: nextKey(), text, marks: [] as string[] };
}

function block(
  text: string,
  style: "normal" | "h2" | "h3" | "blockquote" = "normal",
): PortableTextBlock {
  return {
    _type: "block",
    _key: nextKey(),
    style,
    markDefs: [],
    children: [span(text)],
  } as PortableTextBlock;
}

function listItem(text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: nextKey(),
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [span(text)],
  } as PortableTextBlock;
}

function code(source: string, language = "json"): PortableTextBlock {
  return {
    _type: "code",
    _key: nextKey(),
    language,
    code: source,
  } as unknown as PortableTextBlock;
}

const POSTS: Post[] = [
  {
    slug: "module-federation-is-not-a-release-strategy",
    title: "Module Federation is not a release strategy",
    excerpt:
      "Module Federation gives you runtime loading. It does not tell you which version each environment should serve, and that gap is where most micro frontend migrations stall.",
    publishedAt: "2026-08-12T08:00:00Z",
    updatedAt: null,
    readingMinutes: 6,
    coverImage: null,
    categories: [CATEGORIES[0], CATEGORIES[1]],
    metaTitle: null,
    metaDescription: null,
    noIndex: false,
    body: [
      block(
        "Teams adopt Module Federation to stop rebuilding the shell every time a remote changes. Then the first production incident arrives, somebody asks which version of the checkout remote is live in UAT, and nobody can answer without opening a pipeline log.",
      ),
      block("What the bundler actually gives you", "h2"),
      block(
        "A remote entry URL, resolved at runtime. That is genuinely the hard part of the browser problem, and it is all it is: a pointer. Deciding what that pointer should point at, per environment, is a deployment concern the bundler never claimed to cover.",
      ),
      listItem("the host resolves remotes at runtime — solved by the bundler"),
      listItem("which build each environment serves — not solved"),
      listItem("moving one environment back a version — not solved"),
      block(
        "The remote entry is a pointer. Someone still has to own what it points to.",
        "blockquote",
      ),
      block("Where the orchestrator sits", "h2"),
      block(
        "One registry holds every build, and the environment holds an assignment rather than a URL. The host asks for its configuration at boot and gets the versions that environment is currently on:",
      ),
      code(
        `{
  "environment": "uat",
  "microfrontends": {
    "checkout": "2.14.0",
    "search": "1.7.3"
  }
}`,
      ),
      block(
        "A rollback is then editing one assignment, not rebuilding and redeploying a shell nobody changed.",
      ),
    ],
  },
  {
    slug: "canary-releases-for-micro-frontends",
    title: "Canary releases for micro frontends, without a service mesh",
    excerpt:
      "Shifting a slice of traffic to a new build of one micro frontend does not need infrastructure changes. It needs the host to ask which version it should load, and the answer to differ per user.",
    publishedAt: "2026-06-30T08:00:00Z",
    updatedAt: "2026-07-15T08:00:00Z",
    readingMinutes: 5,
    coverImage: null,
    categories: [CATEGORIES[1]],
    metaTitle: null,
    metaDescription: null,
    noIndex: false,
    body: [
      block(
        "Backend canaries are a routing problem, so they live in the mesh. Frontend canaries are a resolution problem: the browser decides what to download, and it decides once, at boot.",
      ),
      block("Move the decision, not the traffic", "h2"),
      block(
        "If the host asks the control plane which versions to load, a canary is a rule in the answer: ten per cent of sessions get the new build of one micro frontend, and the rest get the current one. No proxy in front of the CDN, no duplicated environment.",
      ),
      block("What still needs care", "h3"),
      block(
        "Session stickiness, so a reload does not move a user between versions mid-flow, and a metric worth watching before widening the split. Neither is exotic, but skipping them turns a canary into a coin flip.",
      ),
    ],
  },
];

/**
 * Index pages get the same summary the CMS would return: no article body and no
 * SEO fields, neither of which a card uses.
 */
export function fixturePosts(): PostSummary[] {
  return POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readingMinutes: post.readingMinutes,
    coverImage: post.coverImage,
    categories: post.categories,
  }));
}

export function fixtureSlugs(): string[] {
  return POSTS.map((post) => post.slug);
}

export function fixturePost(slug: string): Post | null {
  return POSTS.find((post) => post.slug === slug) ?? null;
}

export function fixtureCategories(): Category[] {
  return CATEGORIES;
}
