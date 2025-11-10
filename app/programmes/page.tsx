import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";
import { getProgrammes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  {
    title: "Programmes",
    description:
      "AI Imagery, Chatbot Studio, and Story Lab residencies designed for boutique launches.",
  },
  "/programmes"
);

export default function ProgrammesPage() {
  const programmes = getProgrammes();

  return (
    <>
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-5xl space-y-10 px-6 md:px-10">
          <PageIntro
            eyebrow="Programmes"
            title="Pick your build rhythm"
            description="Each programme stacks research, creative direction, build, QA, and documentation."
          />
        </div>
      </section>
      <Section
        background="muted"
        eyebrow="Residencies"
        title="What we ship together"
        description="Programmes can run solo or in parallel for multi-surface launches."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      </Section>
    </>
  );
}
