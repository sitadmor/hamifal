import Image from "next/image";
import { cn } from "@/lib/utils";

type HamifalMarkProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Locked from editor values (x: 17.2, y: -36.3, scale: 1.15)
 * at the hero font-size (~156.5px). Stored in em so header/footer
 * keep the same relative placement.
 */
const OFFSET = {
  xEm: 17.2 / 156.5,
  yEm: -36.3 / 156.5,
  scale: 1.15,
} as const;

export function HamifalMark({ className, priority = false }: HamifalMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display leading-none",
        className,
      )}
      aria-label="HAMIFAL"
    >
      <span className="relative inline-block">
        {/* Invisible H keeps the same anchor box the editor used */}
        <span className="invisible relative select-none" aria-hidden>
          H
        </span>

        <span
          className="absolute left-1/2 top-1/2 z-10"
          style={{
            transform: `translate(calc(-50% + ${OFFSET.xEm}em), calc(-50% + ${OFFSET.yEm}em))`,
          }}
        >
          <Image
            src="/hamifal-h.png"
            alt=""
            width={586}
            height={750}
            priority={priority}
            unoptimized
            draggable={false}
            aria-hidden
            className="pointer-events-none max-w-none select-none"
            style={{
              height: `${OFFSET.scale}em`,
              width: "auto",
              display: "block",
            }}
          />
        </span>
      </span>
      <span className="-ml-[0.02em] tracking-[-0.045em]">AMIFAL</span>
    </span>
  );
}
