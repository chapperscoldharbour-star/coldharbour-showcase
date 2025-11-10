import Link from "next/link";

import { Reveal } from "@/components/reveal/Reveal";

export function MontyEmbed() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-[1fr_minmax(0,580px)] md:px-10">
        <div className="space-y-5">
          <Reveal className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">In-flow demo</p>
            <h2 className="display-type text-4xl font-semibold text-white md:text-5xl">
              Meet the Montague concert companion without leaving the page
            </h2>
            <p className="text-lg text-slate-300">
              The chat.montaguepianos.co.uk guide mixes AI memory, archive access, and performance etiquette.
              Explore it live below.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="https://chat.montaguepianos.co.uk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-dotted underline-offset-4"
            >
              Open in a full tab ↗
            </Link>
          </Reveal>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-3">
          <div className="overflow-hidden rounded-[24px] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <iframe
              src="https://chat.montaguepianos.co.uk"
              title="Montague chat companion"
              loading="lazy"
              className="h-[620px] w-full"
              allow="microphone; camera; clipboard-write"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
