import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal/Reveal";
import type { Story } from "@/lib/content";

export function StoryCard({ story }: { story: Story }) {
  return (
    <Reveal className="space-y-4">
      <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={story.media}
            alt={story.title}
            width={900}
            height={700}
            loading="lazy"
            className="h-64 w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-emerald-300">{story.category}</p>
        <h3 className="display-type text-2xl font-semibold text-white">{story.title}</h3>
        <p className="text-slate-300">{story.summary}</p>
        <Link
          href={story.url}
          className="text-sm font-medium text-white underline decoration-dotted underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          View project ↗
        </Link>
      </article>
    </Reveal>
  );
}
