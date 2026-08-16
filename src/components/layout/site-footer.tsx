import Link from "next/link";
import { Container } from "@/components/layout/container";
import { HamifalMark } from "@/components/shared/hamifal-mark";
import { MonoLabel } from "@/components/shared/mono-label";
import { TextLink } from "@/components/shared/text-link";

const footerNav = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/podcast", label: "Podcast" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="py-14 md:py-20">
        <div className="site-grid gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <HamifalMark className="text-2xl md:text-3xl" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We build technology companies.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <MonoLabel className="mb-4 block">Navigate</MonoLabel>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <MonoLabel className="mb-4 block">Connect</MonoLabel>
            <ul className="space-y-3">
              <li>
                <TextLink href="mailto:hello@hamifal.ai" external className="text-sm">
                  hello@hamifal.ai
                </TextLink>
              </li>
              <li>
                <TextLink
                  href="https://www.linkedin.com"
                  external
                  className="text-sm"
                >
                  LinkedIn
                </TextLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <MonoLabel>© HAMIFAL / 2026</MonoLabel>
        </div>
      </Container>
    </footer>
  );
}
