"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { HamifalMark } from "@/components/shared/hamifal-mark";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/podcast", label: "Podcast" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [navPath, setNavPath] = useState(pathname);

  if (navPath !== pathname) {
    setNavPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-border bg-background/90 backdrop-blur-[2px]">
      <Container className="flex h-16 items-center justify-between overflow-visible md:h-[4.5rem]">
        <Link
          href="/"
          className="overflow-visible text-foreground transition-opacity hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          <HamifalMark className="text-lg md:text-xl" />
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "label-mono transition-colors duration-300",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="label-mono text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-b border-border bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b border-border py-4 font-display text-3xl tracking-tight",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </Container>
      </div>
    </header>
  );
}
