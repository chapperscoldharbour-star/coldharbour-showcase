"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Reveal } from "@/components/reveal/Reveal";
import type { HeroContent } from "@/lib/content";
import { playAmbientAudio } from "@/lib/ambientAudio";

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let hasPlayed = false;

    const cleanupTriggers = () => {
      window.removeEventListener("pointerdown", triggerPlay);
      window.removeEventListener("wheel", triggerPlay, true);
      window.removeEventListener("scroll", triggerPlay, true);
      window.removeEventListener("touchstart", triggerPlay);
      window.removeEventListener("touchmove", triggerPlay);
    };

    const triggerPlay = () => {
      if (hasPlayed) return;
      playAmbientAudio().then((success) => {
        if (success) {
          hasPlayed = true;
          cleanupTriggers();
        }
      });
    };

    triggerPlay(); // attempt autoplay immediately
    window.addEventListener("pointerdown", triggerPlay);
    window.addEventListener("wheel", triggerPlay, { capture: true, passive: true });
    window.addEventListener("scroll", triggerPlay, { capture: true, passive: true });
    window.addEventListener("touchstart", triggerPlay);
    window.addEventListener("touchmove", triggerPlay);

    return () => {
      cleanupTriggers();
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-32">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/social_critzo__random_animation_style_--ar_9151_--motion_low_--video_458202f0-25f7-4595-93e5-66050620e5ad_2.mp4"
        playsInline
        muted
        loop
        autoPlay
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/5 to-slate-950/60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/25 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-10">
        <div className="space-y-10">
          <Reveal className="space-y-6" transition={{ duration: 1.4, delay: 0.4 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">{content.eyebrow}</p>
            <h1 className="display-type text-balance text-5xl font-semibold leading-tight text-white md:text-6xl">
              {content.title}
            </h1>
            <p className="text-xl text-slate-200">{content.description}</p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-4" transition={{ duration: 1.4, delay: 0.6 }}>
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-200"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
            >
              {content.secondaryCta.label}
            </Link>
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-3" transition={{ duration: 1.4, delay: 0.8 }}>
            {content.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center backdrop-blur">
                <p className="display-type text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="space-y-6 self-center md:-mt-5 lg:-mt-8">
          <Reveal className="space-y-3">
            <p className="text-[0.65rem] uppercase tracking-[0.45em] text-emerald-200">Focus</p>
            <ul className="space-y-3 text-[0.9rem] text-slate-100/95">
              {content.narrative.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-3 h-px w-8 bg-emerald-300" aria-hidden />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">{item.title}</p>
                    <p className="text-[0.9rem] leading-relaxed text-slate-100/85">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
