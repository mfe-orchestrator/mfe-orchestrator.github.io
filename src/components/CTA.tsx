import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { CONSOLE_URL, DOCS_URL } from "@/lib/seo";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Release your next micro frontend
              <span className="bg-gradient-primary bg-clip-text text-transparent"> without touching the host</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect your repository, publish a build, and assign it to an environment.
              Nothing to install, and nothing to migrate first.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group cursor-pointer bg-primary w-full sm:w-auto">
                Start free — no install
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href={DOCS_URL}>
              <Button variant="outline" size="xl" className="group cursor-pointer w-full sm:w-auto">
                <BookOpen className="w-5 h-5" />
                Read the docs
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Free to start
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Open source, self-host anytime
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Works with your existing pipelines
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
