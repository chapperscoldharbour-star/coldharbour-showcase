import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal/Reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  background?: "default" | "muted" | "inverted";
  children?: ReactNode;
  fullViewport?: boolean;
}

const backgroundMap = {
  default: "bg-slate-950",
  muted: "bg-slate-900/70",
  inverted: "bg-white text-slate-900",
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  background = "default",
  children,
  fullViewport = false,
}: SectionProps) {
  const isInverted = background === "inverted";

  return (
    <section
      id={id}
      className={cn(
        "relative flex w-full items-center",
        fullViewport ? "min-h-screen py-24" : "py-24",
        backgroundMap[background]
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
        <Reveal className="max-w-3xl space-y-4">
          {eyebrow && (
            <p
              className={cn(
                "text-sm uppercase tracking-[0.2em]",
                isInverted ? "text-slate-500" : "text-slate-300/80"
              )}
            >
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              className={cn(
                "display-type text-balance text-4xl font-semibold leading-tight md:text-5xl",
                isInverted ? "text-slate-900" : "text-white"
              )}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className={cn(
                "text-lg md:text-xl",
                isInverted ? "text-slate-700" : "text-slate-300"
              )}
            >
              {description}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
