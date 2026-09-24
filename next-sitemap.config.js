/**
 * Sitemap generation. Priorities are set per page rather than left flat: the
 * homepage and the two acquisition pages are what we want crawled most often,
 * while the orphaned pricing page is excluded and the legal pages are
 * de-prioritised.
 */
const fs = require('fs');
const path = require('path');

const HIGH_PRIORITY = ['/', '/what-is-a-micro-frontend', '/module-federation'];
const LOW_PRIORITY = ['/privacy-policy', '/cookie-policy'];

// The page that keeps the blog's dynamic routes alive while the CMS is empty
// (PLACEHOLDER_SLUG in src/lib/blog). It is noindex and linked from nowhere, so
// it must not be advertised either.
const PLACEHOLDER_SLUG = 'no-posts-yet';

/**
 * Whether the CMS had any published post at build time, read off the export
 * itself: with no posts, /blog/ contains nothing but the reserved page. The
 * blog index goes noindex in that state (see src/app/blog/page.tsx), and a
 * sitemap that lists a noindex URL is a contradiction crawlers report on.
 */
function blogHasPosts() {
  try {
    return fs
      .readdirSync(path.join(__dirname, 'out', 'blog'))
      .some((entry) => entry.endsWith('.html') && entry !== `${PLACEHOLDER_SLUG}.html`);
  } catch {
    return false;
  }
}

const BLOG_HAS_POSTS = blogHasPosts();

module.exports = {
  siteUrl: 'https://mfe-orchestrator.dev',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: './out',
  // /pricing is unlinked and marked noindex, so it should not be advertised in
  // the sitemap either. The social card and the feed are assets, not pages.
  exclude: [
    '/admin/**',
    '/pricing',
    '/opengraph-image.png',
    '/blog/rss.xml',
    `/blog/${PLACEHOLDER_SLUG}`,
    `/blog/category/${PLACEHOLDER_SLUG}`,
  ],
  robotsTxtOptions: {
    // The documentation is a separate Docusaurus build served under
    // /documentation, so next-sitemap — which only walks ./out — never sees it.
    // Docusaurus emits its own sitemap there, and it is already submitted in
    // Search Console directly, so this line is not what makes those pages
    // discoverable. It names the file for every other crawler, and keeps the
    // site's own robots.txt honest about where its content actually lives.
    additionalSitemaps: ['https://mfe-orchestrator.dev/documentation/sitemap.xml'],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/pricing'],
      },
    ],
  },
  transform: async (config, path) => {
    // While the blog is empty its index is noindex: leave it out entirely.
    if (path === '/blog' && !BLOG_HAS_POSTS) return null;

    let priority = config.priority;
    let changefreq = config.changefreq;

    if (HIGH_PRIORITY.includes(path)) {
      priority = 1.0;
    } else if (LOW_PRIORITY.includes(path)) {
      priority = 0.3;
      changefreq = 'yearly';
    } else if (path === '/blog') {
      // The index gains an entry every time a post is published.
      priority = 0.9;
      changefreq = 'daily';
    } else if (path.startsWith('/blog/category/')) {
      // Archives are navigation, not content: worth crawling, worth less than
      // the posts they point at.
      priority = 0.5;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
