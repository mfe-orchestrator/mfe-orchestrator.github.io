"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const codeExample = `{
  "environment": "production",
  "microfrontends": {
    "header": {
      "name": "Header Component",
      "version": "2.1.0",
      "entry": "https://cdn.example.com/header/2.1.0/remoteEntry.js",
      "scope": "header",
      "module": "./Header"
    },
    "dashboard": {
      "name": "Dashboard Module", 
      "version": "1.8.3",
      "entry": "https://cdn.example.com/dashboard/1.8.3/remoteEntry.js",
      "scope": "dashboard",
      "module": "./Dashboard"
    },
    "analytics": {
      "name": "Analytics Widget",
      "version": "3.0.1", 
      "entry": "https://cdn.example.com/analytics/3.0.1/remoteEntry.js",
      "scope": "analytics",
      "module": "./Analytics"
    }
  },
  "routes": {
    "/": "header",
    "/dashboard": "dashboard", 
    "/analytics": "analytics"
  }
}`;

const CodeExample = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Visual
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Management</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Configure your entire microfrontend architecture through our intuitive interface then integrate with your Frontend framework.  <br/>
              No complex setups or technical knowledge required.
            </p>
          </div>
          
          {/* <Card className="bg-surface/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg text-foreground">microfrontend-config.json</CardTitle>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCopy}
                className="gap-2"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="text-sm text-muted-foreground overflow-x-auto p-4 bg-background/50 rounded-lg border border-border/30">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </CardContent>
          </Card> */}
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold text-foreground">Configure Visually</h3>
              <p className="text-sm text-muted-foreground">
                Use our intuitive interface to set up microfrontends and canary deployments
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold text-foreground">Deploy Individual</h3>
              <p className="text-sm text-muted-foreground">
                Update any microfrontend without affecting others
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold text-foreground">Orchestrate</h3>
              <p className="text-sm text-muted-foreground">
                Let our platform handle the integration automatically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;