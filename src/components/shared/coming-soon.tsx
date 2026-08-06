import type { ReactNode } from "react";
import { MonoLabel } from "@/components/shared/mono-label";
import { cn } from "@/lib/utils";

type ComingSoonProps = {
  children: ReactNode;
  className?: string;
  /** Stronger blur / denser overlay; useful for podcast feeds */
  intensity?: "default" | "heavy";
  label?: string;
};

export function ComingSoon({
  children,
  className,
  intensity = "default",
  label = "Coming soon",
}: ComingSoonProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none select-none",
          intensity === "heavy"
            ? "blur-[10px] opacity-55 saturate-[0.85]"
            : "blur-[7px] opacity-65",
        )}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-background/25">
        <div className="border border-border bg-background/90 px-10 py-8 text-center shadow-[0_0_0_1px_var(--border)] backdrop-blur-md">
          <MonoLabel className="mb-3 block text-foreground">{label}</MonoLabel>
          <p className="font-display text-2xl tracking-tight md:text-3xl">
            Not public yet.
          </p>
        </div>
      </div>
    </div>
  );
}
