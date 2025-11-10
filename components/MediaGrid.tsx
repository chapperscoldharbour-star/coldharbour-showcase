import Image from "next/image";

import { cn } from "@/lib/utils";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

interface MediaGridProps {
  items: MediaItem[];
}

export function MediaGrid({ items }: MediaGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.src}
          className={cn(
            "group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5",
            "shadow-[0_10px_60px_rgba(0,0,0,0.4)]"
          )}
        >
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
              loading="lazy"
            />
          ) : (
            <video
              className="h-full w-full object-cover"
              playsInline
              muted
              loop
              autoPlay
              preload="metadata"
              poster={item.poster}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <figcaption className="sr-only">{item.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
