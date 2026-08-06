import { Button } from "@/components/design-system";
import { ArrowRight, BookOpen, Github } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/promo-video.gif"
import Link from "next/link";
import { CONSOLE_URL, GITHUB_URL, QUICK_START_URL } from "@/lib/seo";

const Hero = () => {
  return (
    <section className="py-10 relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 pt-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Micro frontend deployment &amp; orchestration
              </p>

              {/* The H1 states the outcome in the words a developer searches
                  for. The Kubernetes analogy moved below: it explains the
                  category well but nobody looks for the product that way. */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Ship
                <span className="bg-gradient-primary bg-clip-text text-transparent"> micro frontends </span>
                without rebuilding the host
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                MFE Orchestrator is the open-source control plane for your micro frontends.
                It stores every build, decides which version each environment serves, and hands
                your host application the runtime configuration it needs.
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl">
                Versioning, canary releases and one-click rollback for Module Federation —
                like Kubernetes, but for the frontend.
              </p>
            </div>

            {/* One primary action. The console is the fastest path to value,
                so everything else is visibly secondary. */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                  Start free — no install
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href={QUICK_START_URL}>
                <Button variant="secondary" size="lg" className="group cursor-pointer w-full sm:w-auto">
                  <BookOpen className="w-5 h-5" />
                  Quick start — 10 minutes
                </Button>
              </Link>
            </div>

            {/* Social proof, stated in verifiable facts rather than adjectives:
                the license, the pull count and the self-host escape hatch. */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <Link
                href={GITHUB_URL}
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                Apache-2.0 open source
              </Link>
              <span className="hidden sm:inline text-border">|</span>
              <span>4,000+ Docker pulls</span>
              <span className="hidden sm:inline text-border">|</span>
              <Link href="/start-now" className="hover:text-foreground transition-colors">
                Or self-host it with Docker Compose
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-card">
              <Image
                src={heroImage}
                alt="The MFE Orchestrator console assigning micro frontend versions to environments"
                className="w-full h-auto rounded-lg shadow-glow"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-surface border border-border/50 rounded-lg p-4 shadow-card backdrop-blur-sm">
              <div className="text-xs text-muted-foreground">Version</div>
              <div className="text-sm font-semibold text-primary">v0.8.5</div>
            </div>
          </div>
        </div>

        <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            No host rebuild to release
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-200"></div>
            Multi-cloud &amp; on-premise hosting
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-400"></div>
            GitHub, GitLab &amp; Azure DevOps pipelines
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-600"></div>
            Canary releases &amp; instant rollback
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
