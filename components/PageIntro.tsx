import { Reveal } from "@/components/reveal/Reveal";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="space-y-4">
      <Reveal className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{eyebrow}</p>
        <h1 className="display-type text-4xl font-semibold text-white md:text-5xl">{title}</h1>
        <p className="text-lg text-slate-300">{description}</p>
      </Reveal>
    </div>
  );
}
