import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Globe, 
  Rocket, 
  FileText, 
  Layers, 
  GitBranch 
} from "lucide-react";

const features = [
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
    icon: Rocket,
    title: "Independent Deployment",
    description: "Deploy microfrontends independently without requiring a complete frontend rebuild, enabling faster development cycles."
  },
  {
    icon: Settings,
    title: "Environment-specific Configs",
    description: "Maintain separate configurations for each environment, allowing different versions in different stages of development."
  },
  {
    icon: Layers,
    title: "Version Management",
    description: "Track and manage different versions of your microfrontends with built-in versioning and rollback capabilities."
  },
  {
    icon: GitBranch,
    title: "Canary Deployments",
    description: "Safely roll out changes with canary deployments, gradually directing traffic to new versions while monitoring performance and user feedback."
  },
  {
    icon: Globe,
    title: "Multi-cloud Support",
    description: "Deploy across AWS, Azure, GCP, and other cloud providers with unified management and seamless failover capabilities."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Modern Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to orchestrate, deploy, and manage microfrontends 
            across your entire development lifecycle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-surface/50 backdrop-blur-sm border-border/50 hover:bg-surface-variant transition-all duration-300 hover:shadow-glow group"
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
  );
};

export default Features;