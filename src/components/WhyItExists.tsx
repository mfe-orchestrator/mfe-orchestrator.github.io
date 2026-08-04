import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Check, CheckCircle2 } from "lucide-react";

/**
 * The site jumped straight from the tagline to a feature grid, so a visitor who
 * did not already know they had this problem had nothing to recognise
 * themselves in. This section names the pain first and qualifies the reader
 * second.
 */

const withoutOrchestrator = [
  "The list of micro frontends and their URLs lives in the host repository",
  "Releasing one micro frontend means rebuilding and redeploying the shell",
  "Two pipelines have to succeed for one change to reach production",
  "A rollback is a revert, a rebuild and a wait",
  "Teams queue behind each other for a shared release window",
  "Nobody can say with certainty which version is live in UAT",
];

const withOrchestrator = [
  "Versions live in a registry, not hardcoded in the host",
  "Publish a micro frontend and assign it to an environment — the shell is untouched",
  "One pipeline per micro frontend, ending in an upload step",
  "A rollback is selecting the previous version",
  "Each team releases on its own schedule",
  "Every environment shows exactly which version it serves",
];

const qualifiers = [
  {
    title: "You run more than one frontend team",
    description:
      "Several teams contribute to one product and keep colliding in the same release train.",
  },
  {
    title: "You already use Module Federation",
    description:
      "The loading mechanism works, but a remotes configuration file is maintained by hand and committed to the host.",
  },
  {
    title: "Your releases are blocked by the shell",
    description:
      "A one-line change in a widget still costs a full host build, and the build is slow or memory-hungry.",
  },
  {
    title: "You need control over where artifacts live",
    description:
      "Builds have to sit in your own S3, Azure or GCP storage — or stay on-premise entirely.",
  },
];

const WhyItExists = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            One widget changed.
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Why is the shell rebuilding?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Micro frontends promise independent deployment. Most setups do not deliver it,
            because the host application still decides at build time what to load.
            MFE Orchestrator moves that decision to runtime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-surface/50 backdrop-blur-sm border-amber-500/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-foreground">Micro frontends wired by hand</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {withoutOrchestrator.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <div className="h-1.5 w-1.5 mt-2 rounded-full bg-amber-500/50 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-surface/50 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-foreground">With MFE Orchestrator</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {withOrchestrator.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            You probably need an orchestrator if&hellip;
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {qualifiers.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-surface/30 backdrop-blur-sm"
              >
                <div className="p-1.5 rounded-md bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItExists;
