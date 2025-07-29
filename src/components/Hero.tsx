import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Zap } from "lucide-react";
import heroImage from "@/assets/hero-microfrontends.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-surface/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                Microfrontend Orchestration Platform
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Orchestrate
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Microfrontends</span>
                <br />
                with Ease
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                A centralized multi-cloud platform with intuitive UI for managing and orchestrating microfrontends across multiple environments. 
                Deploy independently with canary support without rebuilding your entire frontend.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Multi-environment support
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-200"></div>
                Intuitive web interface
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-400"></div>
                Version management
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-card">
              <img 
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
      </div>
    </section>
  );
};

export default Hero;