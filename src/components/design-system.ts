"use client";

/*
 * Single entry point for the shared design system.
 *
 * The "use client" directive is load-bearing: the design system bundle imports
 * react-hook-form at module level, and react-hook-form's `react-server`
 * conditional export omits every hook. Importing the bundle from a server
 * component therefore fails to resolve `useFormContext`/`Controller`. Routing
 * every import through this client module keeps server pages working.
 */
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Input,
} from "@mfe-orchestrator/design-system";
