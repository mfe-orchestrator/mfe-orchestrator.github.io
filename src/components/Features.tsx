import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Globe, 
  Rocket, 
  FileText, 
  Layers, 
  GitBranch, 
  GitMerge, 
  ShieldCheck, 
  GitPullRequest, 
  GitCompare 
} from "lucide-react";

const featuresCore = [
  {
    icon: Layers,
    title: "Micro Frontend Version Management",
    description: "Every build you publish stays available and addressable. Track which version of each micro frontend is live, and change it without a rebuild."
  },
  {
    icon: Rocket,
    title: "Independent Deployment",
    description: "Release one micro frontend without rebuilding or redeploying the host application, so a small change costs a small deploy."
  },
  {
    icon: Settings,
    title: "Per-environment Configuration",
    description: "DEV, UAT, PROD and any environment you invent can serve different versions at the same time, each with its own configuration."
  },
  {
    icon: GitCompare,
    title: "Module Federation, Configured For You",
    description: "MFE Orchestrator generates the runtime configuration your host needs under Vite or Webpack — no hand-maintained remotes file in the host repository."
  },
  {
    icon: Globe,
    title: "Multi-cloud & On-premise Storage",
    description: "Artifacts go to your own AWS S3, Azure Blob Storage or Google Cloud Storage — or stay entirely on-premise when they cannot leave your network."
  },
  {
    icon: FileText,
    title: "One Console For The Whole Estate",
    description: "See every micro frontend, environment and version in one interface, instead of reading pipeline logs to find out what is deployed."
  }
];

const featuresOps = [
  {
    icon: GitBranch,
    title: "Canary Releases",
    description: "Serve a new version to a share of your users, raise it when the numbers hold, and stop the rollout by changing one setting."
  },
  {
    icon: GitMerge,
    title: "CI/CD Integrations",
    description: "Ready-made pipelines for GitHub Actions, GitLab CI and Azure DevOps, plus an API for everything else. The pipeline you already have gains one upload step."
  },
  {
    icon: ShieldCheck,
    title: "Rollback In One Step",
    description: "Recovering means selecting the previous version, not reverting a commit and waiting for a build. Time to recover stops depending on your pipeline."
  },
  {
    icon: GitPullRequest,
    title: "Git Integration (In progress)",
    description: "Import Git repositories and manage individual micro frontends directly from your VCS; create pipelines on your Git projects."
  },
  // {
  //   icon: GitCompare,
  //   title: "GitOps (In progress)",
  //   description: "We're implementing GitOps workflows to automatically promote versions across environments via PRs and policies."
  // },
  // {
  //   icon: ShieldCheck,
  //   title: "Secured by Design",
  //   description: "Security-first architecture with RBAC, secrets management, audit logs, and safe rollout strategies baked in."
  // }
];

const Features = () => {
  return (
    <>
        <section className="py-20 container mx-auto px-4 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Everything a micro frontend needs
              <span className="bg-gradient-primary bg-clip-text text-transparent"> after the build</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Storage, versions, per-environment configuration and the runtime wiring your host
              application depends on — across any cloud, or none.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresCore.map((feature, index) => (
              <Card
                key={index}
                className="bg-surface/50 backdrop-blur-sm border-border/50 hover:bg-surface-variant transition-all duration-300 hover:shadow-glow group hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Release often.
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Recover instantly.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Canary releases, pipeline integrations and one-step rollback, so shipping more often
              does not mean risking more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresOps.map((feature, index) => (
              <Card
                key={index}
                className="bg-surface/50 backdrop-blur-sm border-border/50 hover:bg-surface-variant transition-all duration-300 hover:shadow-glow group hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;