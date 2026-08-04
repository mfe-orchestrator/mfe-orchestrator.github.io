"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

/**
 * Replaces the old "Visual Management" block, which described the UI but never
 * showed the mechanism. Developers evaluating an orchestrator want to see what
 * their host actually receives before they trust it with a release.
 */

const runtimeConfig = `{
  "environment": "production",
  "microfrontends": {
    "header": {
      "version": "2.1.0",
      "entry": "https://cdn.example.com/header/2.1.0/remoteEntry.js",
      "scope": "header",
      "module": "./Header"
    },
    "dashboard": {
      "version": "1.8.3",
      "entry": "https://cdn.example.com/dashboard/1.8.3/remoteEntry.js",
      "scope": "dashboard",
      "module": "./Dashboard"
    },
    "checkout": {
      "version": "4.2.0",
      "entry": "https://cdn.example.com/checkout/4.2.0/remoteEntry.js",
      "scope": "checkout",
      "module": "./Checkout",
      "canary": {
        "version": "4.3.0-rc.1",
        "traffic": 10
      }
    }
  }
}`;

const steps = [
  {
    title: "Build",
    description:
      "Each micro frontend is built in its own repository, with its own pipeline, in whatever framework the team prefers.",
  },
  {
    title: "Publish",
    description:
      "The pipeline uploads the artifact from GitHub Actions, GitLab CI, Azure DevOps or the API. The version is recorded and stored in your cloud or on-premise storage.",
  },
  {
    title: "Assign",
    description:
      "Decide which version DEV, UAT and PROD serve — immediately, or gradually with a canary release.",
  },
  {
    title: "Load at runtime",
    description:
      "The host reads the configuration below on startup and loads the assigned versions through Module Federation. No host rebuild — and a rollback is the same step in reverse.",
  },
];

const HowItWorks = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(runtimeConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              How MFE Orchestrator
              <span className="bg-gradient-primary bg-clip-text text-transparent"> works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four steps, and only one of them happens at release time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <div key={step.title} className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <Card className="bg-surface/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between gap-4">
              <div>
                <CardTitle className="text-lg text-foreground">
                  What your host receives at runtime
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Illustrative configuration served per environment — versions, entry points and an
                  in-flight canary.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="gap-2 flex-shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <pre className="text-sm text-muted-foreground overflow-x-auto p-4 bg-background/50 rounded-lg border border-border/30">
                <code>{runtimeConfig}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
