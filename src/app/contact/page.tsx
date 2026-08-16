import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import { TextLink } from "@/components/shared/text-link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with HAMIFAL.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-16 md:py-24">
          <Reveal>
            <MonoLabel className="mb-4 block">Contact</MonoLabel>
            <h1 className="font-display max-w-4xl text-5xl tracking-tight text-balance md:text-7xl">
              Start a conversation
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We work with a small number of founders and organizations. Tell us
              what you are building, or what you believe should exist.
            </p>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-14 md:py-20">
          <div className="site-grid gap-y-12">
            <Reveal className="col-span-12 md:col-span-4">
              <MonoLabel className="mb-6 block">Direct</MonoLabel>
              <ul className="space-y-4">
                <li>
                  <TextLink href="mailto:hello@hamifal.ai" external>
                    hello@hamifal.ai
                  </TextLink>
                </li>
                <li>
                  <TextLink href="https://www.linkedin.com" external>
                    LinkedIn
                  </TextLink>
                </li>
              </ul>
              <p className="mt-10 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Remote collaboration where the work requires it.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="col-span-12 md:col-span-7 md:col-start-6">
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
