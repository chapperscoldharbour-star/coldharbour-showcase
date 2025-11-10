"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

import { LenisProvider } from "./LenisProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LenisProvider>{children}</LenisProvider>
    </MotionConfig>
  );
}
