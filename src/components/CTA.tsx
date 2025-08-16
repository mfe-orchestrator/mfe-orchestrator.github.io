import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Orchestrate Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Microfrontends?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop waiting time with build&deploy and cloud. Start now for free.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-now" className="group">
              <Button variant="hero" size="xl" className="group cursor-pointer">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/documentation" className="group">
              <Button variant="outline" size="xl" className="cursor-pointer">
                <BookOpen className="w-5 h-5" />
                Read Documentation
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Free to get started
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Open source
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Community support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;