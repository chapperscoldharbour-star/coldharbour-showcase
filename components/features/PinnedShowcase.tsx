"use client";

import { useEffect, useRef } from "react";

import { Reveal } from "@/components/reveal/Reveal";

export function PinnedShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinTargetRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ctx: { revert: () => void } | null = null;

    if (prefersReduced.matches) {
      return undefined;
    }

    const register = async () => {
      if (!containerRef.current || !pinTargetRef.current) return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 1.25,
          scrub: 1.1,
          pin: pinTargetRef.current,
          anticipatePin: 1,
          pinSpacing: false,
          onLeave: () => {
            if (mediaRef.current) {
              gsap.to(mediaRef.current, { opacity: 0, duration: 0.2 });
            }
          },
          onEnterBack: () => {
            if (mediaRef.current) {
              gsap.to(mediaRef.current, { opacity: 1, duration: 0.2 });
            }
          },
        });
      }, containerRef);
    };

    register();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col bg-slate-950 py-24 lg:flex-row lg:items-start"
      aria-label="Pinned narrative section"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-6">
          <Reveal className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Pinned theatre</p>
            <h3 className="display-type text-4xl font-semibold text-white md:text-5xl">
              Scroll-triggered essays with a stage-left narrator and stage-right imagery.
            </h3>
            <p className="text-lg text-slate-300">
              GSAP ScrollTrigger keeps the copy anchored while Lenis eases every movement. We stitch story beats,
              sound cues, and CTA moments into a single viewport so visitors never lose focus.
            </p>
          </Reveal>
          <ul className="space-y-4 text-base text-slate-300">
            {[
              "Pin + scrub copy decks with image swaps",
              "Blend Framer Motion reveals with GSAP timing",
              "Optimised for reduced-motion preferences",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          ref={pinTargetRef}
          className="flex w-full justify-end"
        >
          <div
            ref={mediaRef}
            className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-4"
          >
            <video
              className="mx-auto block h-[78vh] w-auto rounded-[24px] object-contain"
              src="/media/social_critzo__httpss.mj.runujvZo_hCnIE_The_model_on_the_magazine_co_79c28a87-f37c-48e4-8a54-64c93661ee6a_2.mp4"
              playsInline
              muted
              loop
              autoPlay
              preload="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
