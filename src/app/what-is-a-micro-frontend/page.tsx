import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Layers, Puzzle, Users, X } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { CONSOLE_URL, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, definedTermSchema } from "@/lib/structuredData";

/**
 * Search Console shows that almost every impression this site earns is for the
 * bare acronym and its definitional variants — "what is mfe", "mfe means",
 * "define mfe", "mfe full form". The homepage cannot answer those and never
 * earned a click. This page answers them directly, then hands the reader the
 * product only once the term makes sense.
 */

export const metadata: Metadata = pageMetadata({
  title: "What Is a Micro Frontend (MFE)? Definition & Architecture",
  description:
    "MFE stands for micro frontend: an independently built and deployed piece of a web application, combined with others at runtime. A plain definition, when to use the architecture, and what it costs you.",
  path: "/what-is-a-micro-frontend",
  keywords: [
    "what is mfe",
    "mfe meaning",
    "mfe meaning in software",
    "what does mfe stand for",
    "mfe full form",
    "define mfe",
    "what is a micro frontend",
    "micro frontend architecture",
    "micro frontend vs monolith",
    "mfe software development",
  ],
});

const benefits = [
  {
    title: "Independent deployment",
    description:
      "A team ships its own part of the product when it is ready, without waiting for a shared release.",
  },
  {
    title: "Team autonomy",
    description:
      "Each micro frontend has an owner, a repository and a pipeline, so responsibility is unambiguous.",
  },
  {
    title: "Framework freedom",
    description:
      "A new area can be built in a different framework, and a legacy area can be replaced piece by piece.",
  },
  {
    title: "Smaller blast radius",
    description:
      "A broken release affects one part of the interface rather than the whole application.",
  },
];

const costs = [
  {
    title: "Runtime integration",
    description:
      "Something has to load the right pieces, in the right versions, at the right time. This is the problem an orchestrator solves.",
  },
  {
    title: "Duplicated dependencies",
    description:
      "Without shared dependencies, every micro frontend ships its own copy of React and users download it several times.",
  },
  {
    title: "Version drift",
    description:
      "With no registry, nobody can say which version of which micro frontend is live in which environment.",
  },
  {
    title: "Operational overhead",
    description:
      "More pipelines, more artifacts and more places to look when something breaks.",
  },
];

export default function WhatIsAMicroFrontendPage() {
  return (
    <>
      <JsonLd
        schema={[
          definedTermSchema({
            name: "Micro frontend (MFE)",
            description:
              "A micro frontend (MFE) is an independently built, tested and deployed piece of a web application — such as a checkout flow or a dashboard — that is combined with other micro frontends at runtime to form a single product.",
            path: "/what-is-a-micro-frontend",
            alternateNames: ["MFE", "micro-frontend", "microfrontend"],
          }),
          breadcrumbSchema([
            { name: "What is a micro frontend", path: "/what-is-a-micro-frontend" },
          ]),
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            What is a micro frontend (MFE)?
          </h1>

          {/* The answer, first, in one paragraph — written to stand alone as a
              snippet without the reader needing the rest of the page. */}
          <p className="text-xl text-foreground leading-relaxed">
            <strong>MFE stands for micro frontend</strong> (also written micro-frontend or
            microfrontend). A micro frontend is an independently built, tested and deployed piece of
            a web application — a checkout flow, a dashboard, a search widget — that is combined
            with other micro frontends at runtime to form a single product. It is the same idea as
            microservices, applied to the browser: instead of one frontend codebase released as one
            unit, you have several small ones released on their own schedules.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The term is usually written <em>MFE</em> in tooling and job descriptions. If you arrived
            here looking for a different MFE, this page is about frontend architecture.
          </p>
        </header>

        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Puzzle className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">How a micro frontend application fits together</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              There is a <strong className="text-foreground">host application</strong> — often called
              the shell or the container. It owns the page frame, routing and authentication, and it
              decides which micro frontends to place where.
            </p>
            <p>
              Each <strong className="text-foreground">micro frontend</strong> is built separately
              into its own bundle and published somewhere the browser can reach it. At runtime the
              host fetches those bundles and mounts them into the page.
            </p>
            <p>
              The loading itself is usually done with{" "}
              <Link href="/module-federation" className="text-primary hover:underline">
                Module Federation
              </Link>
              , a bundler feature that lets one application consume code from another at runtime and
              share common libraries between them. Web components and import maps are the other
              common approaches.
            </p>
            <p>
              What none of these mechanisms answer is <em>which version</em> of each micro frontend a
              given environment should load. Answer that in the host&apos;s source code and you are
              back to rebuilding the host for every release — which is the reason micro frontend
              orchestrators exist.
            </p>
          </CardContent>
        </Card>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <CardTitle>What you gain</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <X className="h-5 w-5" />
                </div>
                <CardTitle>What it costs</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {costs.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">When micro frontends are worth it</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Micro frontends solve an organisational problem before a technical one. They pay off
              when several teams contribute to one product and keep blocking each other: a shared
              release train, a merge queue nobody enjoys, a build that grows slower every quarter.
            </p>
            <p>
              For a single team on a single application, they mostly add work. One codebase with good
              module boundaries is easier to run than four deployables that have to agree on a
              runtime.
            </p>
            <p className="text-foreground">
              The honest rule of thumb: adopt micro frontends when the cost of coordinating teams
              exceeds the cost of coordinating deployments.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-background">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Layers className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">Where MFE Orchestrator comes in</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              MFE Orchestrator is the control plane for the part the architecture leaves to you. It
              stores each build, keeps a version history per environment, serves the runtime
              configuration your host reads on startup, and handles canary releases and rollback.
              You get independent deployment for real — releasing a micro frontend never rebuilds
              the host.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="bg-primary group cursor-pointer w-full sm:w-auto">
                  Start free — no install
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/faq">
                <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer">
                  Read the FAQ
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
