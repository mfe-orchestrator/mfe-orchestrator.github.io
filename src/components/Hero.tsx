import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Zap } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/hero-microfrontends.jpg"
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-10 relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="justify-center flex">
        <div className="inline-flex items-center gap-2 bg-surface/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 text-sm text-muted-foreground">
          <Zap className="w-4 h-4 text-primary" />
          Coming Soon
        </div>
      </div>
      <div className="container mx-auto px-4 pt-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Streamline your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Microfrontends</span>
                <br />
                Architecture
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                A centralized multi-cloud platform with intuitive UI for managing and orchestrating microfrontends across multiple environments. 
              </p>
              <p className="text-primary pt-2 text-xl md:text-2xl text-muted-foreground max-w-2xl font-bold">Like Kubernetes... but for frontend</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* <Link href="/start-now">
              <Button variant="hero" size="xl" className="group cursor-pointer">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link> */}
              <Link href="#join-the-waiting-list">
                <Button variant="hero" size="xl" className="bg-primary group cursor-pointer">
                    Join The Waiting List
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="https://github.com/mfe-orchestrator-hub">
              <Button variant="outline" size="xl" className="group cursor-pointer">
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-card">
              <Image
                src={heroImage} 
                alt="Microfrontend Orchestration" 
                className="w-full h-auto rounded-lg shadow-glow"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-primary">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-surface border border-border/50 rounded-lg p-4 shadow-card backdrop-blur-sm">
              <div className="text-xs text-muted-foreground">Environment</div>
              <div className="text-sm font-semibold text-primary">PROD</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-surface border border-border/50 rounded-lg p-4 shadow-card backdrop-blur-sm">
              <div className="text-xs text-muted-foreground">Version</div>
              <div className="text-sm font-semibold text-primary">v2.1.0</div>
            </div>
          </div>
        </div>

        <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Easy to use UI
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-200"></div>
                Multi-cloud & local hosting
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-400"></div>
                CI/CD pipelines (GitHub, GitLab, Azure DevOps)
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-600"></div>
                Canary Distribution
              </div>
            </div>
      </div>
    </section>
  );
};

export default Hero;