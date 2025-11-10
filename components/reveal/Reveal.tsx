"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";
import { useMemo, useRef } from "react";

import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: keyof typeof motion;
  amount?: number;
  once?: boolean;
  transition?: Transition;
}

export function Reveal({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  amount = 0.3,
  once = true,
  transition,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount, once });
  const prefersReduced = useReducedMotion();

  const animate = useMemo(() => {
    if (prefersReduced) return "visible";
    return isInView ? "visible" : "hidden";
  }, [isInView, prefersReduced]);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={animate}
      transition={transition ? { ...transition, delay: transition.delay ?? delay } : { delay }}
    >
      {children}
    </motion.div>
  );
}
