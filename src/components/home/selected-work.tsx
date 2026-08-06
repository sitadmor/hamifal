import Link from "next/link";
import { Container } from "@/components/layout/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import { TextLink } from "@/components/shared/text-link";
import { ProjectVisual } from "@/components/work/project-visual";
import { projects } from "@/lib/data/projects";

export function SelectedWork() {
  return (
    <section id="companies" className="border-b border-border">
      <Container className="py-20 md:py-28">
        <Reveal>
          <div className="mb-14 md:mb-20">
            <MonoLabel className="mb-4 block">Companies</MonoLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-6xl">
              Companies we build.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-0">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={project.slug}
                className="border-t border-border py-14 md:py-20"
              >
                <Reveal>
                  <div className="site-grid items-start gap-y-8">
                    <div
                      className={
                        reverse
                          ? "col-span-12 md:col-span-5 md:col-start-8 md:row-start-1"
                          : "col-span-12 md:col-span-5"
                      }
                    >
                      <MonoLabel className="mb-5 block text-foreground">
                        {project.name}
                      </MonoLabel>
                      <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                        <Link
                          href={`/work/${project.slug}`}
                          className="transition-opacity hover:opacity-60"
                        >
                          {project.category}
                        </Link>
                      </h3>
                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                        {project.tags.map((tag) => (
                          <MonoLabel key={tag}>{tag}</MonoLabel>
                        ))}
                      </div>
                      <div className="mt-8 max-w-md space-y-4 text-base leading-relaxed text-muted-foreground">
                        {project.description.split("\n\n").map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="mt-8">
                        <TextLink href={`/work/${project.slug}`}>
                          Learn more →
                        </TextLink>
                      </div>
                    </div>

                    <div
                      className={
                        reverse
                          ? "col-span-12 md:col-span-6 md:col-start-1 md:row-start-1"
                          : "col-span-12 md:col-span-6 md:col-start-7"
                      }
                    >
                      <Link
                        href={`/work/${project.slug}`}
                        className="block transition-opacity hover:opacity-95"
                      >
                        <ProjectVisual project={project} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
