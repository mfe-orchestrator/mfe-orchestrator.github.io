This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## The blog

Posts are written in a hosted [Sanity](https://www.sanity.io) Studio and read
from its API during `pnpm run build`, so what gets deployed is static HTML like
the rest of the site. Publishing a post fires a webhook that rebuilds and
redeploys the site.

- Authoring: https://mfe-orchestrator.sanity.studio
- Setup, webhook, and how the code is laid out: [docs/blog.md](docs/blog.md)
- Working on the blog offline: `BLOG_FIXTURES=1 pnpm dev` renders two fake posts
- Building with no blog at all: `SANITY_PROJECT_ID=off pnpm run build`

The Studio itself lives in [`studio/`](studio/) as a separate pnpm project, with
its own workspace file and lockfile, so the site's `pnpm install` never pulls
Sanity in. It never enters the site's bundle.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
