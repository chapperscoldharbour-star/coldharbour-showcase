"use client";

import { type ReactNode, useEffect } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let frame = 0;
    const cleanup = () => {
      if (frame) cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };

    const initLenis = async () => {
      const { default: Lenis } = await import("@studio-freight/lenis");

      lenis = new Lenis({
        duration: 1.3,
        lerp: 0.1,
        smoothWheel: true,
        smoothTouch: false,
      }) as unknown as { raf: (time: number) => void; destroy: () => void };

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches) {
      initLenis();
    }

    const handleMotionChange = (event: MediaQueryListEvent) => {
      cleanup();
      if (!event.matches) {
        void initLenis();
      }
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      cleanup();
    };
  }, []);

  return <>{children}</>;
}
