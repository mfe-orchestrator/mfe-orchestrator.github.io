import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import JsonLd from "@/components/JsonLd";
import { CONSOLE_URL, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

/**
 * The question that decides these deals is not "how does Module Federation
 * work" — it is "where does our code end up, and who can release it". This page
 * answers that one, in the words a buyer uses. The integration detail lives on
 * /module-federation.
 */

export const metadata: Metadata = pageMetadata({
  title: "How It Works: Independent Releases, Your Own Storage",
  description:
    "Every piece of your site gets its own team, its own release rhythm and the storage you choose — Google Cloud, AWS, Azure or your own data centre. MFE Orchestrator decides which version is live, environment by environment, without releasing the whole site.",
  path: "/how-it-works",
  keywords: [
    "micro frontend architecture diagram",
    "micro frontend hosting",
    "multi-cloud micro frontends",
    "on-premise micro frontend hosting",
    "where micro frontend artifacts are stored",
    "independent frontend releases",
    "micro frontend release process",
    "frontend rollback without redeploy",
  ],
});

const benefits = [
  {
    title: "Releases without a queue",
    description:
      "A team goes to production without waiting for anyone else's release window. A small change costs a small release.",
  },
  {
    title: "No vendor lock-in",
    description:
      "Choose where the files live piece by piece: Google Cloud, AWS, Azure or inside your own network. Changing provider does not mean rebuilding the site.",
  },
  {
    title: "Immediate rollback",
    description:
      "The previous version is still online, so you go back to it by reassigning it. No emergency release in the middle of the night.",
  },
  {
    title: "Your data stays yours",
    description:
      "The files sit in storage you control. If they are not allowed to leave the corporate network, they stay in your own data centre.",
  },
];

const steps = [
  {
    title: "Build",
    description:
      "Each team works on its own piece of the site, with its own tools and its own timing. There is no shared calendar to respect.",
  },
  {
    title: "Publish",
    description:
      "When the piece is ready, the files go to the storage chosen for it — your cloud or your data centre — and the control plane records the new version.",
  },
  {
    title: "Decide",
    description:
      "From the console you choose which version goes live: for everyone at once, or first for a share of the traffic so you can watch how it behaves.",
  },
  {
    title: "It goes live",
    description:
      "On the next page load the site asks the control plane which versions to show and picks up the files where they already are. No release of the whole site.",
  },
];

const ownership = [
  {
    what: "The files of each piece",
    where:
      "In your own storage: Google Cloud, AWS, Azure or your data centre — a different one per piece, if that is what you need",
    why: "No content passes through our systems: it stays inside the perimeter you have already approved",
  },
  {
    what: "The release decisions",
    where:
      "In MFE Orchestrator: which version, in which environment, for how much of the traffic",
    why: "One place to see what is live, instead of asking four teams",
  },
  {
    what: "The site that holds it together",
    where: "On its own hosting, independent of everything else",
    why: "You do not put it back into production every time one piece changes",
  },
  {
    what: "The finished page",
    where: "In your visitor's browser",
    why: "The pieces come together as the page opens, so a version change takes effect straight away",
  },
];

const objections = [
  {
    question: "“What if our code is not allowed in the cloud?”",
    answer:
      "The fourth piece in the diagram sits entirely in an on-premise data centre, and nothing changes for the other three. The choice is made piece by piece, not once for everything.",
  },
  {
    question: "“How long does it take to go back?”",
    answer:
      "As long as it takes to make the previous version live again — it is still where it was, next to the new one. No new release is needed.",
  },
  {
    question: "“Do we have to rebuild the frontend?”",
    answer:
      "No. Each team keeps its piece, its tools and its technology. You add a publishing step; you do not rewrite the site.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([{ name: "How it works", path: "/how-it-works" }])}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl space-y-14">
        <header className="space-y-6 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Every team ships when it is ready. Your files stay where you want them.
          </h1>
          <p className="text-xl text-foreground leading-relaxed">
            Your site is made of independent pieces: home, customer area, checkout, back office. Each
            piece has its own team, its own release rhythm and the storage you choose for it — Google
            Cloud, AWS, Azure or your own data centre. MFE Orchestrator is the control plane: it
            decides which version goes live, environment by environment, without putting the whole
            site back into production. Your files never pass through us.
          </p>
        </header>

        <section className="space-y-4">
          <div className="flex flex-wrap gap-x-8 gap-y-3 rounded-lg border border-border/50 bg-surface/50 backdrop-blur-sm px-5 py-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-3">
              <svg width="46" height="10" viewBox="0 0 46 10" aria-hidden="true" className="flex-shrink-0">
                <line x1="1" y1="5" x2="45" y2="5" strokeWidth={1.6} className="stroke-white/70" />
              </svg>
              <span>
                <strong className="text-foreground font-semibold">Solid line</strong> — the files of
                your site
              </span>
            </span>
            <span className="flex items-center gap-3">
              <svg width="46" height="10" viewBox="0 0 46 10" aria-hidden="true" className="flex-shrink-0">
                <line
                  x1="1"
                  y1="5"
                  x2="45"
                  y2="5"
                  strokeWidth={1.6}
                  strokeDasharray="6 4"
                  className="stroke-primary"
                />
              </svg>
              <span>
                <strong className="text-foreground font-semibold">Dashed line</strong> — the release
                decisions
              </span>
            </span>
          </div>

          <ArchitectureDiagram />
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why it pays off</h2>
            <p className="text-muted-foreground">
              Four direct consequences of the diagram above.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-surface/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">The four steps</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-sm text-primary">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">What lives where</h2>
            <p className="text-muted-foreground">
              The question that always comes first: who holds what, and why it matters.
            </p>
          </div>
          <Card className="bg-surface/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr>
                    {["What", "Where it lives", "Why it matters to you"].map((heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="border-b border-border/50 pb-3 pr-6 text-left font-mono text-xs font-normal uppercase tracking-widest text-muted-foreground"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ownership.map((row) => (
                    <tr key={row.what}>
                      <th
                        scope="row"
                        className="border-b border-border/50 py-4 pr-6 text-left align-top font-semibold text-foreground"
                      >
                        {row.what}
                      </th>
                      <td className="border-b border-border/50 py-4 pr-6 align-top leading-relaxed text-muted-foreground">
                        {row.where}
                      </td>
                      <td className="border-b border-border/50 py-4 align-top leading-relaxed text-muted-foreground">
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            If it comes up in the meeting
          </h2>
          <div className="space-y-6">
            {objections.map((objection) => (
              <div key={objection.question} className="border-l-2 border-primary pl-5">
                <p className="font-semibold text-foreground">{objection.question}</p>
                <p className="text-muted-foreground leading-relaxed mt-1">{objection.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Keep your teams. Keep your storage.
              </h2>
              <p className="text-muted-foreground">
                Nothing to migrate first: each team adds one publishing step to the pipeline it
                already has, and you decide what goes live from the console.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-primary group cursor-pointer w-full sm:w-auto"
                >
                  Start free — no install
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/module-federation">
                <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer">
                  See the technical detail
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
