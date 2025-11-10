import { PageIntro } from "@/components/PageIntro";
import { StoryCard } from "@/components/cards/StoryCard";
import { Section } from "@/components/Section";
import { getStories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  {
    title: "Stories",
    description:
      "Selected collaborations across AI imagery, concierge chatbots, and ScrollTrigger theatre.",
  },
  "/stories"
);

export default function StoriesPage() {
  const stories = getStories();

  return (
    <>
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-5xl space-y-10 px-6 md:px-10">
          <PageIntro
            eyebrow="Stories"
            title="Recent releases"
            description="Every story begins with a CMS stub and content deck we can scale later."
          />
        </div>
      </section>
      <Section
        background="muted"
        eyebrow="Case studies"
        title="From recital halls to research labs"
        description="Hover to explore imagery, then tap through to live experiences."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </Section>
    </>
  );
}
