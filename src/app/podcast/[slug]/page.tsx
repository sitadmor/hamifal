import { redirect } from "next/navigation";

type EpisodePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function EpisodePage({ params }: EpisodePageProps) {
  await params;
  redirect("/podcast");
}
