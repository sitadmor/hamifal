import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";
import {
  formatEpisodeDate,
  podcastEpisodes,
  podcastShow,
} from "@/lib/data/podcast";

export const metadata: Metadata = {
  title: "Bootstrapia",
  description: `${podcastShow.name}: ${podcastShow.description}`,
};

function Waveform() {
  const bars = [
    18, 34, 22, 48, 28, 56, 32, 44, 20, 52, 36, 26, 60, 30, 42, 24, 50, 38, 16,
    46, 28, 54, 22, 40, 34, 58, 26, 48, 20, 44, 32, 50, 24, 38, 56, 30,
  ];
  return (
    <div className="flex h-16 items-end gap-[3px] md:h-20 md:gap-1" aria-hidden>
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="w-[3px] bg-foreground/35 md:w-1"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

export default function PodcastPage() {
  const featured = podcastEpisodes[0];

  return (
    <>
      <section className="border-b border-border">
        <Container className="py-16 md:py-24">
          <Reveal>
            <div className="site-grid gap-y-8">
              <div className="col-span-12 md:col-span-7">
                <MonoLabel className="mb-4 block">Podcast</MonoLabel>
                <h1 className="font-display text-5xl tracking-tight md:text-7xl">
                  {podcastShow.name}
                </h1>
              </div>
              <div className="col-span-12 md:col-span-4 md:col-start-9 md:self-end">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {podcastShow.description}
                </p>
                <div className="mt-8 space-y-2">
                  <MonoLabel className="block text-foreground">
                    Host / {podcastShow.host}
                  </MonoLabel>
                  <MonoLabel className="mt-4 block text-foreground">
                    Coming soon
                  </MonoLabel>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ComingSoon intensity="heavy" className="min-h-[70vh]">
        <section className="border-b border-border bg-surface/40">
          <Container className="py-10 md:py-14">
            <div className="site-grid items-end gap-y-8">
              <div className="col-span-12 md:col-span-3">
                <MonoLabel className="mb-4 block text-foreground">
                  Now playing
                </MonoLabel>
                <p className="font-display text-5xl tracking-tight">
                  {featured.number}
                </p>
              </div>
              <div className="col-span-12 md:col-span-8 md:col-start-5">
                <p className="font-display text-2xl tracking-tight md:text-4xl">
                  {featured.title}
                </p>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  {podcastShow.host} · {featured.duration}
                </p>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-foreground text-background">
                    <span className="ml-0.5 text-lg leading-none">▶</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <Waveform />
                    <div className="mt-3 flex justify-between text-xs tracking-wide text-muted-foreground uppercase">
                      <span>12:08</span>
                      <span>{featured.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container className="py-10 md:py-16">
            <MonoLabel className="mb-8 block">Episodes</MonoLabel>
            <div className="border-t border-border">
              {podcastEpisodes.map((episode) => (
                <article
                  key={episode.slug}
                  className="border-b border-border py-10 md:py-12"
                >
                  <div className="site-grid items-start">
                    <div className="col-span-12 md:col-span-3">
                      <p className="font-display text-4xl tracking-tight">
                        {episode.number}
                      </p>
                      <MonoLabel className="mt-4 block">
                        {formatEpisodeDate(episode.date)} / {episode.duration}
                      </MonoLabel>
                      <div className="mt-6 flex h-10 w-10 items-center justify-center border border-border">
                        <span className="ml-0.5 text-sm leading-none">▶</span>
                      </div>
                    </div>
                    <div className="col-span-12 mt-4 md:col-span-8 md:col-start-5 md:mt-0">
                      <h2 className="font-display text-2xl tracking-tight md:text-4xl">
                        {episode.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {episode.summary}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                        {episode.topics.map((topic) => (
                          <MonoLabel key={topic}>{topic}</MonoLabel>
                        ))}
                      </div>
                      <span className="mt-6 inline-block text-sm tracking-tight text-foreground border-b border-foreground/25 pb-0.5">
                        Episode details →
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
