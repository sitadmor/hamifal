import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import { ProjectVisual } from "@/components/work/project-visual";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected ventures and projects built with HAMIFAL.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-16 md:py-24">
          <Reveal>
            <MonoLabel className="mb-4 block">Index</MonoLabel>
            <h1 className="font-display text-5xl tracking-tight md:text-7xl">
              Work
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Companies, products, and technical programs built across the
              studio.
            </p>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-10 md:py-16">
          <div className="space-y-0">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.04}>
                <article className="border-t border-border py-10 md:py-14">
                  <Link href={`/work/${project.slug}`} className="group block">
                    <div className="site-grid items-end gap-y-6">
                      <div className="col-span-12 md:col-span-5">
                        <MonoLabel className="mb-4 block text-foreground">
                          {project.name}
                        </MonoLabel>
                        <h2 className="font-display text-3xl tracking-tight transition-opacity group-hover:opacity-60 md:text-4xl">
                          {project.category}
                        </h2>
                        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                          {project.tags.map((tag) => (
                            <MonoLabel key={tag}>{tag}</MonoLabel>
                          ))}
                        </div>
                        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                          {project.summary}
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-6 md:col-start-7">
                        <ProjectVisual project={project} compact />
                      </div>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
