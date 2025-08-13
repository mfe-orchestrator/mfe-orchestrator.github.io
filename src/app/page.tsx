import Features from "../components/Features";
import Hero from "../components/Hero";
import CodeExample from "../components/CodeExample";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <CodeExample />
      <CTA />
    </div>
  );
}
