"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { HamifalMark } from "@/components/shared/hamifal-mark";
import { TextLink } from "@/components/shared/text-link";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
        <div className="site-grid">
          <div className="col-span-12">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[clamp(3.5rem,14vw,11rem)] leading-none">
                <HamifalMark priority />
              </h1>
            </motion.div>
          </div>

          <div className="col-span-12 mt-10 md:col-span-7 md:mt-14 lg:col-span-6">
            <motion.h2
              className="font-display text-3xl leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-[3.5rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              We build technology companies.
            </motion.h2>
          </div>

          <div className="col-span-12 mt-8 md:col-span-5 md:col-start-8 md:mt-14 lg:col-span-4 lg:col-start-9">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full flex-col justify-between gap-10"
            >
              <div className="max-w-md space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  HAMIFAL takes technology companies from first insight through
                  product, customers, process, and scale.
                </p>
                <p>
                  AI and modern software made execution cheaper. We use that
                  leverage to stay smaller, sharper, and closer to the problem.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                <TextLink href="#thesis">Read the thesis →</TextLink>
                <TextLink href="#companies">View companies →</TextLink>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
