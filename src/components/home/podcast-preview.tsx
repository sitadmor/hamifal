import { Container } from "@/components/layout/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import { TextLink } from "@/components/shared/text-link";

export function PodcastPreview() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 md:py-28">
        <Reveal>
          <div className="site-grid gap-y-8">
            <div className="col-span-12 md:col-span-7">
              <MonoLabel className="mb-4 block">Podcast</MonoLabel>
              <h2 className="font-display text-4xl tracking-tight text-balance md:text-6xl">
                Conversations with people who build.
              </h2>
            </div>
            <div className="col-span-12 max-w-md space-y-4 text-base leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:text-lg">
              <p>
                Founders, operators, engineers, researchers, and people building
                businesses in unusual corners of the world.
              </p>
              <p>Less about the success story.</p>
              <p className="text-foreground">
                More about how the thing actually works.
              </p>
              <div className="pt-2">
                <TextLink href="/podcast">Listen →</TextLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
