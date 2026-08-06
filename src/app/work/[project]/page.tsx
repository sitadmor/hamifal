import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import { TextLink } from "@/components/shared/text-link";
import { ProjectVisual } from "@/components/work/project-visual";
import {
  getProject,
  getRelatedProjects,
  projects,
} from "@/lib/data/projects";

type ProjectPageProps = {
  params: Promise<{ project: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ project: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { project: slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project: slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);

  return (
    <>
      <section className="border-b border-border">
        <Container className="py-14 md:py-20">
          <Reveal>
            <MonoLabel className="mb-6 block">{project.year}</MonoLabel>
            <h1 className="font-display text-5xl tracking-tight md:text-7xl">
              {project.name}
            </h1>
            <p className="mt-4 font-display text-2xl tracking-tight text-muted-foreground md:text-3xl">
              {project.category}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
              {project.tags.map((tag) => (
                <MonoLabel key={tag}>{tag}</MonoLabel>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-10 md:py-14">
          <Reveal>
            <ProjectVisual project={project} />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-16 md:py-24">
          <div className="site-grid gap-y-12">
            {project.sections.map((section, index) => (
              <Reveal
                key={section.label}
                delay={index * 0.03}
                className="col-span-12 border-t border-border pt-8 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3"
              >
                <MonoLabel className="mb-4 block text-foreground">
                  {section.label}
                </MonoLabel>
                <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {section.body.map((paragraph) => {
                    const text =
                      typeof paragraph === "string" ? paragraph : paragraph.text;
                    const strong =
                      typeof paragraph === "object" && paragraph.strong;

                    return (
                      <p
                        key={text}
                        className={
                          strong
                            ? "font-medium text-foreground"
                            : undefined
                        }
                      >
                        {text}
                      </p>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-24">
          <Reveal>
            <MonoLabel className="mb-8 block">Related Work</MonoLabel>
            <div className="site-grid gap-y-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  className="col-span-12 border-t border-border pt-8 transition-opacity hover:opacity-70 md:col-span-6"
                >
                  <MonoLabel className="mb-3 block">{item.name}</MonoLabel>
                  <p className="font-display text-2xl tracking-tight">
                    {item.category}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <TextLink href="/work">← Work</TextLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
