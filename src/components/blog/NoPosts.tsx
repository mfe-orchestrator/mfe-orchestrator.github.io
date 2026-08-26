import Link from "next/link";

/**
 * Shown when there is nothing to list: on /blog before the first post, and on
 * the reserved page that keeps the dynamic routes alive while the CMS is empty
 * (see PLACEHOLDER_SLUG in @/lib/blog).
 */
export default function NoPosts({ title }: { title: string }) {
  return (
    <div className="rounded-lg border-2 border-border bg-card/60 p-10 text-center backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        We are writing the first pieces on micro frontend architecture, runtime
        integration and releasing without a host rebuild. In the meantime, the{" "}
        <Link
          href="/what-is-a-micro-frontend"
          className="text-primary hover:text-primary/80"
        >
          introduction to micro frontends
        </Link>{" "}
        and the{" "}
        <Link
          href="/module-federation"
          className="text-primary hover:text-primary/80"
        >
          Module Federation guide
        </Link>{" "}
        cover much of the same ground.
      </p>
    </div>
  );
}
