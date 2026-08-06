"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

const toneStyles: Record<Project["visualTone"], string> = {
  ink: "bg-ink text-[#f7f7f5]",
  steel: "bg-steel text-[#f7f7f5]",
  sand: "bg-sand text-[#121212]",
  olive: "bg-olive text-[#f7f7f5]",
};

type ProjectVisualProps = {
  project: Project;
  className?: string;
  compact?: boolean;
};

export function ProjectVisual({
  project,
  className,
  compact = false,
}: ProjectVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden border border-border",
        compact ? "aspect-[16/10]" : "aspect-[16/10] md:aspect-[16/9]",
        toneStyles[project.visualTone],
        className,
      )}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.18]">
          <div className="absolute inset-y-0 left-[12%] w-px bg-current" />
          <div className="absolute inset-y-0 left-[38%] w-px bg-current" />
          <div className="absolute inset-y-0 left-[72%] w-px bg-current" />
          <div className="absolute inset-x-0 top-[28%] h-px bg-current" />
          <div className="absolute inset-x-0 top-[64%] h-px bg-current" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-8">
          <div className="flex items-start justify-end gap-4">
            <span className="label-mono opacity-70">{project.year}</span>
          </div>

          <div className="max-w-md">
            <p className="font-display text-3xl tracking-tight md:text-5xl">
              {project.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-75 md:text-base">
              {project.category}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {project.tags.map((tag) => (
              <span key={tag} className="label-mono opacity-60">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <svg
          className="pointer-events-none absolute right-0 bottom-0 h-40 w-40 opacity-30 md:h-56 md:w-56"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden
        >
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" />
          <path d="M80 200 H200 V80" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}
