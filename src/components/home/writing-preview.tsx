import { Container } from "@/components/layout/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import { TextLink } from "@/components/shared/text-link";

export function WritingPreview() {
  return (
    <section className="border-b border-border bg-surface/40">
      <Container className="py-20 md:py-28">
        <Reveal>
          <div className="site-grid gap-y-8">
            <div className="col-span-12 md:col-span-7">
              <MonoLabel className="mb-4 block">Notes From HAMIFAL</MonoLabel>
              <h2 className="font-display text-4xl tracking-tight md:text-6xl">
                We write about what we’re learning.
              </h2>
            </div>
            <div className="col-span-12 max-w-md space-y-4 text-base leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:text-lg">
              <ul className="space-y-2">
                <li>Company building.</li>
                <li>Product.</li>
                <li>AI.</li>
                <li>Engineering.</li>
                <li>Enterprise sales.</li>
                <li>Operating small teams.</li>
              </ul>
              <p>Mostly things we learned by doing them.</p>
              <div className="pt-2">
                <TextLink href="/blog">Writing →</TextLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
