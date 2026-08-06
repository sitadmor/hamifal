import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import { TextLink } from "@/components/shared/text-link";
import { blogPosts, formatBlogDate } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes from building. Coming soon.",
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-16 md:py-24">
          <Reveal>
            <div className="site-grid">
              <div className="col-span-12 md:col-span-7">
                <MonoLabel className="mb-4 block">Writing</MonoLabel>
                <h1 className="font-display text-5xl tracking-tight md:text-7xl">
                  Writing
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Things we are learning while building.
                </p>
                <MonoLabel className="mt-8 block text-foreground">
                  Coming soon
                </MonoLabel>
              </div>
              <div className="col-span-12 mt-8 self-end md:col-span-4 md:col-start-9 md:mt-0 md:text-right">
                <TextLink href="/podcast">Bootstrapia →</TextLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ComingSoon className="min-h-[50vh]">
        <section>
          <Container className="py-10 md:py-16">
            <div className="border-t border-border">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-border py-10 md:py-12"
                >
                  <div className="site-grid items-start">
                    <div className="col-span-12 md:col-span-3">
                      <MonoLabel className="block text-foreground">
                        {post.category}
                      </MonoLabel>
                      <MonoLabel className="mt-3 block">
                        {formatBlogDate(post.date)} / {post.readingTime}
                      </MonoLabel>
                    </div>
                    <div className="col-span-12 mt-4 md:col-span-8 md:col-start-5 md:mt-0">
                      <h2 className="font-display text-2xl tracking-tight md:text-4xl">
                        {post.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {post.summary}
                      </p>
                      <span className="mt-6 inline-block text-sm tracking-tight text-foreground border-b border-foreground/25 pb-0.5">
                        Read essay →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </ComingSoon>
    </>
  );
}
