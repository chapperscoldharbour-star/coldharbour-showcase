import Image from "next/image";

import { Hero } from "@/components/home/Hero";
import { MarqueeBand } from "@/components/MarqueeBand";
import { Section } from "@/components/Section";
import { MediaGrid } from "@/components/MediaGrid";
import { PinnedShowcase } from "@/components/features/PinnedShowcase";
import { Reveal } from "@/components/reveal/Reveal";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";
import { TestimonialSlider } from "@/components/sliders/TestimonialSlider";
import {
  getHeroContent,
  getProgrammes,
  getStories,
  getTestimonials,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { MontyEmbed } from "@/components/features/MontyEmbed";

export const metadata = buildMetadata({
  title: "Coldharbour Studio",
  description:
    "Immersive AI imagery, conversational agents, and narrative web builds.",
});

const mediaItems = [
  {
    type: "video" as const,
    src: "/media/social_critzo__random_animation_style_--ar_5229_--motion_low_--video_0f8b423a-55ad-4809-a3a9-c42f6bca0063_0.mp4",
    alt: "AI kinetic sculpture",
    poster:
      "/media/critzo__random_animation_style_--ar_169_--raw_--profile_cpsah_3f295c59-68f7-4877-afc7-2ef1f9a59918_1.png",
  },
  {
    type: "video" as const,
    src: "/media/social_critzo__httpss.mj.run-yAeAIDwOcM_The_picture_comes_alive_--ar_e972a36c-8f8f-4c99-9392-5fad8b620e63_0.mp4",
    alt: "Animated recital hall",
    poster:
      "/media/critzo__pixar__--ar_169_--raw_--profile_cpsahru_--stylize_800_fd5ecf5e-8fd3-45f5-ba07-c88f8ee645ec_3.png",
  },
  {
    type: "video" as const,
    src: "/media/social_critzo__a_dark_gothic_marionette_puppet_as_a_performing_stree_79e26e4c-4456-4c88-8ccc-a9dcf2afadc1_1.mp4",
    alt: "Gothic marionette performance",
    poster: "/media/critzo__sound_waves_with_an_unhappy_chid_face_and_a_piano_sil_4e663fa1-0e76-4c4a-af37-0eda8bde2ac9_0.png",
  },
  {
    type: "video" as const,
    src: "/media/social_critzo__a_Chinese_tourist_looks_at_the_mud_brick_buildings_in_ee7b112c-2162-4b37-abab-0ba39b689482_1.mp4",
    alt: "Chinese tourist cinematic pan",
    poster: "/media/critzo__Lego_box_Old_Town_in_AlUla_in_Saudi_Arabia_--ar_169_-_365829a0-d2c1-4f53-9d60-93f71067e3b3_0.png",
  },
  {
    type: "video" as const,
    src: "/media/social_critzo__random_animation_style_--ar_9151_--motion_low_--video_458202f0-25f7-4595-93e5-66050620e5ad_2.mp4",
    alt: "Story engine wide reel",
    poster:
      "/media/critzo__a_photo_realistic_image_of_an_unopened_mothers_day_ca_f7fb57dc-11d2-47b0-87b2-7cbf6d321879_0.png",
  },
  {
    type: "video" as const,
    src: "/media/social_critzo__spooky_anime_animation-niji_6_--ar_11_--motion_high_-_070e99b8-6f41-4338-9fd6-2b1cd4239ff1_1.mp4",
    alt: "Spooky anime inspired motion study",
    poster: "/media/critzo__pixar__--ar_43_--raw_--stylize_800_--v_6.1_0e10315f-46d2-48fa-aa95-7aedebd7356f_2.png",
  },
];

export default function HomePage() {
  const hero = getHeroContent();
  const programmes = getProgrammes();
  const stories = getStories();
  const testimonials = getTestimonials();

  return (
    <>
      <Hero content={hero} />
      <MarqueeBand />
      <Section
        id="narrative"
        eyebrow="Narrative system"
        title="Hero sections that read like short films"
        description="Each pathway blends Framer Motion reveals with Lenis easing so the story feels like a single take."
        fullViewport
      >
        <div className="grid gap-6 md:grid-cols-3">
          {hero.narrative.map((item) => (
            <Reveal key={item.title} className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={item.media}
                  alt={item.title}
                  width={600}
                  height={480}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-slate-300">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section
        id="media"
        eyebrow="Media lab"
        title="Motion studies from the Coldharbour vault"
        description="Lazy-loaded images and looping reels stay crisp through Next Image and smart video posters."
      >
        <MediaGrid items={mediaItems} />
      </Section>
      <PinnedShowcase />
      <Section
        id="programmes"
        eyebrow="Programmes"
        title="Choose the residency that fits your launch"
        description="From rapid imagery drops to ScrollTrigger theatre, every programme ships with narrative strategy, QA, and onboarding."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      </Section>
      <Section
        id="stories"
        eyebrow="Stories"
        title="Recent collaborations"
        description="AI Imagery for Montague Pianos, concierge chatbots, and pinned story platforms for boutique makers."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <Reveal key={story.slug}>
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={story.media}
                    alt={story.title}
                    width={640}
                    height={480}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-emerald-300">
                  {story.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{story.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{story.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <MontyEmbed />
      <Section
        id="testimonials"
        eyebrow="Testimonials"
        title="Quiet confidence from collaborators"
        description="Swiper slider stays keyboard-accessible and pauses for reduced-motion visitors."
      >
        <TestimonialSlider items={testimonials} />
      </Section>
    </>
  );
}
