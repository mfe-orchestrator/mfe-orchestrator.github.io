import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Zap } from 'lucide-react';
import Link from 'next/link';
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "MFE Orchestrator - Start Now",
  alternates: {
    canonical: 'https://mfe-orchestrator.dev/start-now',
  },
  description: "Get started with MFE Orchestrator in minutes with our easy-to-use Docker setup",
  keywords: [
    "MFE Orchestrator Start Now",
    "microfrontend start now",
    "frontend orchestration start now",
    "microfrontend versioning start now",
    "canary releases start now",
    "multicloud frontend start now",
    "Kubernetes for frontend start now",
  ],
  openGraph: {
    title: "MFE Orchestrator - Start Now",
    description: "Get started with MFE Orchestrator in minutes with our easy-to-use Docker setup",
    url: "https://mfe-orchestrator.dev/start-now",
    siteName: "MFE Orchestrator",
    // images: [
    //   {
    //     url: "https://mfe-orchestrator.dev/start-now-og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "MFE Orchestrator Start Now",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MFE Orchestrator - Start Now",
    description: "Get started with MFE Orchestrator in minutes with our easy-to-use Docker setup",
    //images: ["https://mfe-orchestrator.github.io/start-now-og-image.png"],
  },
}

export default function StartNowPage() {
  return (<>
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Get Started with MFE Orchestrator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deploy your first microfrontend in minutes with our easy-to-use Docker setup
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle>Start Online Now</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Don't want to install anything? Start using MFE Orchestrator immediately with our online platform!
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">No Installation Required</h4>
                    <p className="text-sm text-muted-foreground">Access the full platform directly from your browser</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Connect Your GitHub Account and Go</h4>
                    <p className="text-sm text-muted-foreground">Simple GitHub authentication to get started instantly</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Free to Start</h4>
                    <p className="text-sm text-muted-foreground">Begin orchestrating your microfrontends for free</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Ready in Seconds</h4>
                    <p className="text-sm text-muted-foreground">Click and start managing your microfrontends immediately</p>
                  </div>
                </li>
              </ul>

              <div className="pt-10 flex justify-center">
                <a
                  href="https://console.mfe-orchestrator.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 backdrop-blur-sm border-2 border-primary/50 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105 animate-pulse"
                >
                  <Zap className="w-6 h-6 text-white" />
                  Start Now For Free
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Code className="h-6 w-6" />
              </div>
              <CardTitle>Quick Start with Docker</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Get up and running quickly with our pre-configured Docker setup. Just run the command below:
              </p>

              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <code>
                  # Create a new directory for your project<br />
                  mkdir mfe-orchestrator<br />
                  cd mfe-orchestrator<br /><br />

                  # Create a docker-compose.yml file<br />
                  curl -o docker-compose.yml https://raw.githubusercontent.com/mfe-orchestrator/mfe-orchestrator/refs/heads/main/docker-compose.yaml<br /><br />

                  # Start the services<br />
                  docker-compose up -d
                </code>
              </div>

              <div className="pt-2">
                <p className="text-sm text-muted-foreground">
                  Once started, access the dashboard at <span className="font-mono">http://localhost:8080</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild>
                  <Link href="https://mfe-orchestrator.dev/documentation/docs/installation/docker-compose" className="w-full sm:w-auto">
                    View Full Documentation
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/mfe-orchestrator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                  <path d="M8.5 8.5v.01"></path>
                  <path d="M16 15.5v.01"></path>
                  <path d="M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                  <path d="M18 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                </svg>
              </div>
              <CardTitle>Self-Hosting Options</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Need absolute control? Self-host MFE Orchestrator in your own infrastructure with our enterprise plan:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Custom Deployment</h4>
                    <p className="text-sm text-muted-foreground">Deploy on your infrastructure with custom configurations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Team Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Role-based access control and team management</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Security First</h4>
                    <p className="text-sm text-muted-foreground">Enterprise-grade security and compliance standards</p>
                  </div>
                </li>
              </ul>

              <div className="pt-2">
                <Button variant="outline" className="w-full" disabled>
                  New features coming soon
                </Button>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/50">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Need Help Getting Started?</h2>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Check out our comprehensive documentation for detailed guides and API references.
            </p>
            <Button variant="outline" asChild>
              <Link href="https://mfe-orchestrator.dev/documentation" className="w-full sm:w-auto">
                View Documentation
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
    <WaitingListSection />
    </>
  );
}