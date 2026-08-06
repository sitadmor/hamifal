import { cn } from "@/lib/utils";

type MonoLabelProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
};

export function MonoLabel({
  children,
  className,
  as: Tag = "span",
}: MonoLabelProps) {
  return <Tag className={cn("label-mono text-muted-foreground", className)}>{children}</Tag>;
}
