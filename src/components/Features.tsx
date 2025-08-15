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
    icon: FileText,
    title: "Intuitive Web Interface",
    description: "Manage your microfrontends through a beautiful, user-friendly interface with drag-and-drop configuration and real-time preview."
  },
  {
    icon: Layers,
    title: "Multi-environment Support",
    description: "Deploy different versions across DEV, UAT, PROD, and custom environments with environment-specific configurations."
  },
  {
    icon: Globe,
    title: "Multi-cloud & Local Hosting",
    description: "Host locally (on‑prem) or deploy across AWS, Azure, and GCP with unified management and seamless failover."
  },
  {
    icon: Layers,
    title: "Version Management",
    description: "Track and manage different versions of your microfrontends with built-in versioning and rollback capabilities."
  },
  {
    icon: Rocket,
    title: "Independent Deployment",
    description: "Deploy microfrontends independently without requiring a complete frontend rebuild, enabling faster development cycles."
  },
  {
    icon: Settings,
    title: "Environment-specific Configs",
    description: "Maintain separate configurations for each environment, allowing different versions in different stages of development."
  }
];

const featuresOps = [
  {
    icon: GitBranch,
    title: "Canary Deployments",
    description: "Safely roll out changes with canary deployments, gradually directing traffic to new versions while monitoring performance and user feedback."
  },
  {
    icon: GitMerge,
    title: "CI/CD Pipelines",
    description: "Built-in pipelines for GitHub Actions, GitLab CI, and Azure DevOps to push built artifacts to the MFE Orchestrator Hub."
  },
  {
    icon: GitPullRequest,
    title: "Git Integration",
    description: "Import Git repositories and manage individual MFEs directly from your VCS; create pipelines on your Git projects."
  },
  {
    icon: GitCompare,
    title: "GitOps (In progress)",
    description: "We're implementing GitOps workflows to automatically promote versions across environments via PRs and policies."
  },
  {
    icon: ShieldCheck,
    title: "Secured by Design",
    description: "Security-first architecture with RBAC, secrets management, audit logs, and safe rollout strategies baked in."
  }
];

const Features = () => {
  return (
    <>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Orchestrate. Scale.
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Anywhere.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage and host your MFEs across any environment and cloud, with zero friction.
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
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Release faster.
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Secure by Design.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Canary, CI/CD and deep Git integration for fast and reliable releases.
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