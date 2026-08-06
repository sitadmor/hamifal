import { MonoLabel } from "@/components/shared/mono-label";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title?: string;
  description?: string;
  className?: string;
  align?: "left" | "right";
};

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "right" && "md:items-end md:text-right",
        className,
      )}
    >
      <MonoLabel>{label}</MonoLabel>
      {title ? (
        <h2 className="font-display max-w-4xl text-4xl leading-[0.95] tracking-tight text-balance md:text-5xl lg:text-6xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
