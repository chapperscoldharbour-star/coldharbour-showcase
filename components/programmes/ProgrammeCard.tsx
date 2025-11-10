import Link from "next/link";

import { Reveal } from "@/components/reveal/Reveal";
import type { Programme } from "@/lib/content";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Reveal>
      <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">{programme.duration}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{programme.title}</h3>
          <p className="mt-2 text-slate-300">{programme.tagline}</p>
        </div>
        <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-slate-200">
          {programme.focus.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-white/60" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href={programme.link.href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
        >
          {programme.link.label}
          <span aria-hidden>→</span>
        </Link>
      </article>
    </Reveal>
  );
}
