import hero from "@/content/hero.json";
import programmes from "@/content/programmes.json";
import stories from "@/content/stories.json";

export type HeroContent = typeof hero;
export type Programme = (typeof programmes)[number];
export type Story = (typeof stories)[number];

export function getHeroContent(): HeroContent {
  return hero;
}

export function getProgrammes(): Programme[] {
  return programmes;
}

export function getStories(): Story[] {
  return stories;
}

export function getTestimonials() {
  return stories
    .filter((story) => story.testimonial)
    .map((story) => ({
      ...story.testimonial,
      story: story.title,
      category: story.category,
    }));
}
