import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/design-system";
import { ArrowRight, GitCompare, Server, Workflow } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { CONSOLE_URL, DOCS_URL, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

/**
 * The highest-intent audience we have is a developer already running Module
 * Federation who is hand-maintaining a remotes configuration in the host repo.
 * That is exactly the problem this product removes, and the site said nothing
 * about it — "Module Federation" appeared nowhere in the marketing copy.
 */

export const metadata: Metadata = pageMetadata({
  title: "Module Federation Without the Pain — Versioned Remotes, Zero Host Rebuilds",
  description:
    "Module Federation loads remotes at runtime but does not decide which version to load. MFE Orchestrator replaces the hand-maintained remotes configuration with a versioned registry and serves it per environment — for Webpack and Vite.",
  path: "/module-federation",
  keywords: [
    "module federation versioning",
    "module federation dynamic remotes",
    "module federation runtime configuration",
    "module federation remoteEntry version",
    "webpack module federation micro frontend",
    "vite module federation micro frontend",
    "module federation orchestration",
    "dynamic remotes without rebuilding host",
  ],
});

const staticRemotes = `// webpack.config.js in the host — committed, so every
// version change is a host rebuild and a host deploy
new ModuleFederationPlugin({
  name: "shell",
  remotes: {
    header: "header@https://cdn.example.com/header/2.1.0/remoteEntry.js",
    checkout: "checkout@https://cdn.example.com/checkout/4.2.0/remoteEntry.js",
  },
});`;

const orchestratedRemotes = `// The host asks MFE Orchestrator what to load, per environment.
// Versions change in the console; the host stays exactly as it is.
{
  "environment": "production",
  "microfrontends": {
    "header":   { "version": "2.1.0", "entry": ".../header/2.1.0/remoteEntry.js" },
    "checkout": { "version": "4.2.0", "entry": ".../checkout/4.2.0/remoteEntry.js",
                  "canary": { "version": "4.3.0-rc.1", "traffic": 10 } }
  }
}`;

const problems = [
  {
    icon: GitCompare,
    title: "The remotes map lives in the host",
    problem:
      "Remote URLs are declared in the host's bundler configuration and committed to the host repository.",
    result:
      "Publishing a new version of any micro frontend requires a pull request, a build and a deploy of the host — the coupling micro frontends were supposed to remove.",
  },
  {
    icon: Workflow,
    title: "Versions become URLs to remember",
    problem:
      "Version information ends up encoded in paths, in CI variables, or in whatever the last engineer decided.",
    result:
      "There is no single answer to 'which version is in UAT right now', and rollback means reconstructing a URL from a commit history.",
  },
  {
    icon: Server,
    title: "Every environment forks the configuration",
    problem:
      "DEV, UAT and PROD each need a different set of versions, so the configuration is duplicated per environment and drifts.",
    result:
      "Configuration bugs surface only in the environment that has them, which is usually production.",
  },
];

export default function ModuleFederationPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Module Federation", path: "/module-federation" },
        ])}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
        <header className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            For teams already using Module Federation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Module Federation gives you loading. It does not give you versioning.
          </h1>
          <p className="text-xl text-foreground leading-relaxed">
            Module Federation lets a host application consume code from another build at runtime and
            share dependencies between them. What it deliberately leaves open is{" "}
            <em>which version of which remote</em> each environment should load. Most teams answer
            that with a remotes configuration committed to the host repository — and quietly put every
            micro frontend release back behind a host deploy.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MFE Orchestrator answers it with a versioned registry instead, and serves the
            configuration your host reads at startup. The mechanism stays; the manual bookkeeping
            goes away.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            What static remotes cost you
          </h2>
          <div className="grid gap-6">
            {problems.map((item) => (
              <Card key={item.title} className="bg-surface/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>{item.problem}</p>
                  <p className="text-foreground">{item.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Before and after</h2>

          <Card className="bg-surface/50 backdrop-blur-sm border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">
                Static remotes, declared in the host
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm text-muted-foreground overflow-x-auto p-4 bg-background/50 rounded-lg border border-border/30">
                <code>{staticRemotes}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="bg-surface/50 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">
                Orchestrated remotes, resolved at runtime
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm text-muted-foreground overflow-x-auto p-4 bg-background/50 rounded-lg border border-border/30">
                <code>{orchestratedRemotes}</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-4">
                Illustrative shape of the configuration served per environment. The exact
                integration for Webpack and Vite is in the{" "}
                <Link href={DOCS_URL} className="text-primary hover:underline">
                  documentation
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            What you get on top of Module Federation
          </h2>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <ul className="space-y-4 text-muted-foreground">
                {[
                  ["A version registry", "Every published build stays addressable, with a record of what was released when."],
                  ["Per-environment assignment", "DEV, UAT and PROD serve different versions from the same registry, with no duplicated configuration."],
                  ["Canary releases", "Shift a percentage of traffic to a new remote and raise it only when the numbers hold."],
                  ["Rollback as a version change", "Select the previous version. No revert, no rebuild, no dependency on your pipeline's queue."],
                  ["Artifact storage you control", "AWS S3, Azure Blob Storage, Google Cloud Storage, or on-premise."],
                  ["Shared dependencies handled", "Common libraries are configured to load once and be reused, rather than bundled into each remote."],
                ].map(([title, description]) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">{title}.</strong> {description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Keep Module Federation. Drop the remotes file.
              </h2>
              <p className="text-muted-foreground">
                Nothing to migrate first: point your existing configuration at the orchestrator and
                add an upload step to the pipeline that already builds each micro frontend.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                  Start free — no install
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/what-is-a-micro-frontend">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto cursor-pointer">
                  New to micro frontends?
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
