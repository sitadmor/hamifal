import Link from "next/link";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function TextLink({ href, children, className, external }: TextLinkProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 text-[0.95rem] tracking-tight text-foreground transition-colors duration-300 hover:text-accent",
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        <span className="border-b border-foreground/25 pb-0.5 transition-colors group-hover:border-accent/50">
          {children}
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <span className="border-b border-foreground/25 pb-0.5 transition-colors group-hover:border-accent/50">
        {children}
      </span>
    </Link>
  );
}
