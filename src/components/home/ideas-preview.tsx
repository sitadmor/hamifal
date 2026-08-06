import { Container } from "@/components/layout/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import { TextLink } from "@/components/shared/text-link";

export function IdeasPreview() {
  return (
    <section>
      <Container className="py-20 md:py-28">
        <Reveal>
          <div className="site-grid gap-y-8">
            <div className="col-span-12 md:col-span-7">
              <MonoLabel className="mb-4 block">Writing / Podcast</MonoLabel>
              <h2 className="font-display text-4xl tracking-tight text-balance md:text-6xl">
                Ideas from building.
              </h2>
            </div>
            <div className="col-span-12 max-w-md space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:text-lg">
              <p>
                Essays, lessons, and conversations about company building,
                technology, product, execution, and founders.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-8">
                <TextLink href="/blog">Writing →</TextLink>
                <TextLink href="/podcast">Podcast →</TextLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
