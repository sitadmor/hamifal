import { Container } from "@/components/layout/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import { thesisIntro, thesisSections } from "@/lib/data/thesis";

export function Thesis() {
  return (
    <section id="thesis" className="border-b border-border bg-surface/50">
      <Container className="py-20 md:py-28">
        <Reveal>
          <div className="site-grid gap-y-10">
            <div className="col-span-12 md:col-span-7">
              <MonoLabel className="mb-4 block">{thesisIntro.label}</MonoLabel>
              <h2 className="font-display text-4xl tracking-tight text-balance md:text-6xl">
                {thesisIntro.title}
              </h2>
            </div>

            <div className="col-span-12 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8 md:self-end md:text-lg">
              {thesisIntro.blocks.map((block, index) =>
                block.type === "p" ? <p key={index}>{block.text}</p> : null,
              )}
            </div>

            <div className="col-span-12 grid border-t border-border md:grid-cols-2 lg:grid-cols-3">
              {thesisSections.map((section) => (
                <div
                  key={section.number}
                  className="border-b border-border py-8 md:px-6 md:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
                >
                  <MonoLabel className="mb-4 block text-muted-foreground">
                    {section.number}
                  </MonoLabel>
                  <p className="font-display text-2xl tracking-tight">
                    {section.title}
                  </p>
                  <div className="mt-3 max-w-sm space-y-3 text-base leading-relaxed text-muted-foreground">
                    {section.blocks.map((block, index) =>
                      block.type === "p" ? <p key={index}>{block.text}</p> : null,
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
