import { Metadata } from "next";
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: "MFE Orchestrator - Privacy Policy",
  alternates: {
    canonical: 'https://mfe-orchestrator.dev/privacy-policy',
  },
  description: "Privacy Policy for MFE Orchestrator - Learn how we protect your data and respect your privacy",
  openGraph: {
    title: "MFE Orchestrator - Privacy Policy",
    description: "Privacy Policy for MFE Orchestrator - Learn how we protect your data and respect your privacy",
    url: "https://mfe-orchestrator.dev/privacy-policy",
    siteName: "MFE Orchestrator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MFE Orchestrator - Privacy Policy",
    description: "Privacy Policy for MFE Orchestrator - Learn how we protect your data and respect your privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your privacy is important to us
        </p>
      </div>

      <Card className="border-primary/20 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full h-[calc(100vh-300px)] min-h-[600px]">
            <iframe
              src="https://www.iubenda.com/privacy-policy/73426124"
              title="Privacy Policy"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
