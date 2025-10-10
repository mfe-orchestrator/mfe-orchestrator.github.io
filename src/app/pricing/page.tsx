import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Shield, Users, Server, GitBranch, Clock, CheckCircle } from "lucide-react";
import { PricingCardButton } from "@/components/PricingCardButton";
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";

export const metadata: Metadata = {
  title: "MFE Orchestrator - Pricing",
  alternates: {
    canonical: 'https://mfe-orchestrator.dev/pricing',
  },
  description: "Choose the perfect plan for your team's needs. Start for free, upgrade when you're ready.",
  keywords: [
    "MFE Orchestrator Pricing",
    "microfrontend pricing",
    "frontend orchestration pricing",
    "microfrontend versioning pricing",
    "canary releases pricing",
    "multicloud frontend pricing",
    "Kubernetes for frontend pricing",
  ],
  openGraph: {
    title: "MFE Orchestrator - Pricing",
    description: "Choose the perfect plan for your team's needs. Start for free, upgrade when you're ready.",
    url: "https://mfe-orchestrator.dev/pricing",
    siteName: "MFE Orchestrator",
    // images: [
    //   {
    //     url: "https://mfe-orchestrator.dev/pricing-og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "MFE Orchestrator Pricing",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MFE Orchestrator - Pricing",
    description: "Choose the perfect plan for your team's needs. Start for free, upgrade when you're ready.",
    //images: ["https://mfe-orchestrator.github.io/pricing-og-image.png"],
  },
}


const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individual developers and small projects",
    features: [
      "Up to 3 microfrontends",
      "1 environment",
      "Community support",
      "Basic analytics",
      "Git integration"
    ],
    cta: "Get Started",
    popular: false,
    icon: <Zap className="w-6 h-6 text-primary" />
  },
  {
    name: "Team",
    price: "$49",
    description: "For growing teams that need more power",
    features: [
      "Up to 20 microfrontends",
      "3 environments",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "CI/CD integration",
      "Custom domains"
    ],
    cta: "Start Free Trial",
    popular: true,
    icon: <Users className="w-6 h-6 text-primary" />
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced requirements",
    features: [
      "Unlimited microfrontends",
      "Unlimited environments",
      "24/7 dedicated support",
      "Advanced security features",
      "SLA guarantees",
      "On-premises deployment",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false,
    icon: <Server className="w-6 h-6 text-primary" />
  }
];

const includedFeatures = [
  "Unlimited deployments",
  "Version history",
  "Team collaboration",
  "CI/CD integration",
  "Cloud integration"
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Simple, transparent
              <span className="bg-gradient-primary bg-clip-text text-transparent"> pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your team's needs. Start for free, upgrade when you're ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <Card 
                  className={`h-full flex flex-col border-border/50 overflow-hidden transition-all duration-300 hover:shadow-glow group ${plan.popular ? 'ring-2 ring-primary' : ''}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {plan.icon}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-4xl font-bold">
                        {plan.price}
                        {plan.price !== 'Free' && <span className="text-base font-normal text-muted-foreground">/month</span>}
                      </div>
                      <CardDescription className="mt-2">{plan.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <PricingCardButton 
                      isPopular={plan.popular}
                      cta={plan.cta}
                      selectedPlan={plan.name}
                    />
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-surface/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center text-white">Everything in all plans</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Need something custom? We've got you covered.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact Sales
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div> */}
        </div>
      </section>
      <WaitingListSection />
    </div>
  );
}
