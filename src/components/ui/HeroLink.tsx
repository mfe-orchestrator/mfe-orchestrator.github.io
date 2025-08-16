import { ArrowRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface HeroLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroLink = ({
  children,
  className,
  ...props
}: HeroLinkProps) => {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "h-12 px-8 py-2.5 text-base group",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
};
