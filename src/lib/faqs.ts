/**
 * Single source of truth for the FAQ: the page renders it and the FAQPage
 * JSON-LD is generated from it, so a rich result can never describe an answer
 * that is no longer on the page.
 *
 * Answers are plain text on purpose — structured data does not accept markup,
 * and each one opens with a direct sentence so it can stand alone as a snippet.
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What does MFE stand for?",
    answer:
      "MFE stands for micro frontend (also written micro-frontend or microfrontend). It is a single, independently built and deployed piece of a web application — a checkout flow, a dashboard, a search widget — that is combined with other micro frontends at runtime to form one product.",
  },
  {
    question: "What is a micro frontend orchestrator?",
    answer:
      "A micro frontend orchestrator is the control plane that decides which version of each micro frontend an environment serves, and delivers that decision to the host application at runtime. Without one, the list of micro frontends and their URLs is hardcoded in the host, so every release requires rebuilding and redeploying the host.",
  },
  {
    question: "What does MFE Orchestrator actually do?",
    answer:
      "MFE Orchestrator stores the build artifacts of each micro frontend, keeps a version history per environment, and serves the runtime configuration your host application reads on startup. Releasing a new version means pointing an environment at a different version — no host rebuild, no redeploy of the shell, and a rollback is the same operation in reverse.",
  },
  {
    question:
      "How is this different from using Module Federation on its own?",
    answer:
      "Module Federation gives you the loading mechanism; it does not tell you which version to load. Teams usually end up hand-maintaining a remotes configuration file, committed to the host repository, which puts every micro frontend release back behind a host deploy. MFE Orchestrator generates that configuration from a versioned registry and serves it per environment, so the mechanism stays and the manual bookkeeping goes away.",
  },
  {
    question:
      "Do I have to rebuild the host application to release a micro frontend?",
    answer:
      "No. The host resolves the micro frontends it should load at runtime from the configuration MFE Orchestrator serves. You build and upload one micro frontend, set the version for the target environment, and the change is live on the next page load.",
  },
  {
    question: "Which frameworks and bundlers are supported?",
    answer:
      "MFE Orchestrator is framework-agnostic. Micro frontends can be built with React, Angular, Vue, Svelte or plain JavaScript, and it integrates with Module Federation under both Vite and Webpack. Each team can pick its own stack, because the orchestrator deals with builds and versions rather than with your framework.",
  },
  {
    question: "Do I need to change my existing setup?",
    answer:
      "Very little. You add the MFE Orchestrator client library — or point your existing Module Federation configuration at the orchestrator — and add an upload step to the pipeline that already builds each micro frontend. Your application code, framework and repository layout stay as they are.",
  },
  {
    question: "Where are the build artifacts stored?",
    answer:
      "In storage you control. MFE Orchestrator uploads to AWS S3, Azure Blob Storage or Google Cloud Storage, and can also serve micro frontends hosted on-premise. The same project can use different storage per environment.",
  },
  {
    question: "How do rollbacks work?",
    answer:
      "A rollback is a version change, not a rebuild. Every uploaded version stays available, so you select the previous version for the affected environment and it is served immediately. Because the host is not rebuilt, the time to recover does not depend on your build pipeline.",
  },
  {
    question: "What is a canary release for a micro frontend?",
    answer:
      "A canary release serves a new version of a micro frontend to a fraction of your users while the rest continue on the current version. MFE Orchestrator handles the split at the orchestration layer, so you can raise the share gradually and stop the rollout by changing one setting.",
  },
  {
    question: "How does it fit into my CI/CD?",
    answer:
      "MFE Orchestrator ships pipeline integrations for GitHub Actions, GitLab CI and Azure DevOps, and exposes an API for anything else. The pipeline that already builds a micro frontend gains one step: publish the artifact and register the version.",
  },
  {
    question: "Can I self-host MFE Orchestrator?",
    answer:
      "Yes. MFE Orchestrator is open source and runs in your own infrastructure with Docker Compose, which is the option to choose when artifacts and configuration have to stay inside your network. There is also a hosted console if you would rather not run it yourself.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes. MFE Orchestrator is free and open source, and the hosted console is free to start with. Self-hosting has no licence cost.",
  },
  {
    question: "How do shared dependencies work across micro frontends?",
    answer:
      "Shared dependencies are handled by Module Federation's sharing mechanism, which MFE Orchestrator configures for you: common libraries such as React are loaded once and reused across micro frontends instead of being bundled into each one, which keeps the total payload down and the runtime consistent.",
  },
];
