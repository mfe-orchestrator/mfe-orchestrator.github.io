import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Cloud, Code, Cpu, GitBranch, GitCommit, GitFork, GitPullRequest, Globe, Layers, Package, RefreshCw, Server, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          About MFE Orchestrator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The open-source solution for seamless microfrontend orchestration and versioning
        </p>
      </div>

      <Card className="border-primary/20 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Layers className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl">What is MFE Orchestrator?</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-lg">
              MFE Orchestrator is a free and open-source plug & play solution for orchestrating microfrontend versioning.
              Think of it like Kubernetes... but specifically designed for Frontend applications.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl">How It Works</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-1 gap-1">
            <div className="space-y-4">
              {[
                { icon: <Code className="h-5 w-5" />, text: '1. You build your Frontend' },
                { icon: <GitBranch className="h-5 w-5" />, text: '2. Upload via API, GitHub, GitLab, or Azure DevOps' },
                { icon: <Package className="h-5 w-5" />, text: '3. Install MFE Orchestrator libraries or itegrates with Vite or Webpack Module Federation' },
                { icon: <CheckCircle className="h-5 w-5 text-green-500" />, text: '4. Your microfrontend is ready to use!' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-primary/10 text-primary mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Server className="h-6 w-6" />
              </div>
              <CardTitle>What MFE Orchestrator Does For You</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                'Automatically uploads to the right cloud provider (Azure, AWS, or S3)',
                'Manages versioning across different environments',
                'Dynamically loads the correct frontend version',
                'Simplifies rollback procedures',
                'Reduces deployment complexity'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle>Key Features</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <RefreshCw className="h-5 w-5" />, text: 'Version Control' },
                { icon: <GitPullRequest className="h-5 w-5" />, text: 'CI/CD Integration' },
                { icon: <Globe className="h-5 w-5" />, text: 'Multi-cloud' },
                { icon: <Cpu className="h-5 w-5" />, text: 'Lightweight' },
                { icon: <Cloud className="h-5 w-5" />, text: 'Cloud Agnostic' },
                { icon: <GitCommit className="h-5 w-5" />, text: 'GitOps Ready' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/50">
        <CardHeader>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              How we transformed our microfrontend architecture and what we learned along the way
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              In our team, we wanted to split microfrontends across multiple repositories to ensure complete confidence in every release. By having a reference tag for each Micro Frontend, we could be 100% certain about what we were deploying, even months later.
            </p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="initial-approach" className="border rounded-lg p-4">
                <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                      <GitFork className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-semibold">Our Initial Approach</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mt-4 pl-2">
                    {[
                      'Created a framework mimicking the classic FE (the shell)',
                      'Developed each MFE in separate repositories',
                      'Built them as WebComponents',
                      'Published them as private libraries',
                      'Installed them as dependencies in our host system',
                      'Published everything together'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 mt-2.5 rounded-full bg-primary/30" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="challenges" className="border rounded-lg p-4">
                <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                        <path d="M12 9v4"/>
                        <path d="M12 17h.01"/>
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">Challenges We Faced</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mt-4 pl-2">
                    {[
                      'Releasing an MFE required two builds: one for the MFE and one for the shell',
                      'Builds eventually failed due to memory constraints',
                      'Longer deployment times',
                      'Difficult to manage versions across teams',
                      'Inefficient rollback process'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 mt-2.5 rounded-full bg-amber-500/30" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="solution" className="border rounded-lg p-4">
                <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-green-500/10 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1 1.5 1.5 2.5"/>
                        <path d="M9 18h6"/>
                        <path d="M10 22h4"/>
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">Our Solution</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mt-4 pl-2">
                    {[
                      'Implemented dynamic loading of microfrontends',
                      'Deployed to cloud storage (Azure, AWS, or S3)',
                      'Version control through mfe-configuration.json',
                      'Runtime loading of microfrontends',
                      'Simplified deployment process',
                      'Independent versioning for each MFE'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 mt-2.5 rounded-full bg-green-500/30" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="results" className="border rounded-lg p-4">
                <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-big">
                        <path d="M3 3v18h18"/>
                        <rect width="4" height="7" x="7" y="10" rx="1"/>
                        <rect width="4" height="12" x="15" y="5" rx="1"/>
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">The Results</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Key Benefits</h4>
                      <ul className="space-y-2">
                        {[
                          'Faster deployments',
                          'Independent versioning',
                          'Simplified rollback process',
                          'Better team autonomy',
                          'Improved performance'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Metrics</h4>
                      <ul className="space-y-3">
                        {[
                          { label: 'Deployment Time', value: '↓ 75%' },
                          { label: 'Build Failures', value: '↓ 90%' },
                          { label: 'Rollback Time', value: '↓ 95%' },
                          { label: 'Team Productivity', value: '↑ 60%' }
                        ].map((metric, index) => (
                          <li key={index} className="flex justify-between items-center">
                            <span className="text-muted-foreground">{metric.label}</span>
                            <span className="font-mono font-medium">{metric.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="future" className="border rounded-lg p-4">
                <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                        <path d="M5 3v4"/>
                        <path d="M19 17v4"/>
                        <path d="M3 5h4"/>
                        <path d="M17 19h4"/>
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">Future Enhancements</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {[
                      { 
                        title: 'Canary Releases',
                        description: 'Gradual rollouts to minimize risk',
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch">
                          <line x1="6" x2="6" y1="3" y2="15"/>
                          <circle cx="18" cy="6" r="3"/>
                          <circle cx="6" cy="18" r="3"/>
                          <path d="M18 9a9 9 0 0 1-9 9"/>
                        </svg>,
                        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                      },
                      { 
                        title: 'CDN Integration',
                        description: 'Faster global delivery',
                        icon: <Globe className="h-4 w-4" />,
                        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      },
                      { 
                        title: 'Enhanced Error Handling',
                        description: 'Better monitoring and recovery',
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                          <path d="M12 8v4"/>
                          <path d="M12 16h.01"/>
                        </svg>,
                        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      },
                      { 
                        title: 'Multi-cloud Support',
                        description: 'Seamless cloud provider switching',
                        icon: <Cloud className="h-4 w-4" />,
                        color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                        <div className={`p-2 rounded-md ${feature.color} flex-shrink-0`}>
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
