import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/reveal/Reveal";
import { buildMetadata } from "@/lib/seo";

const values = [
  {
    title: "Craft",
    description:
      "Blending GSAP stage direction with Framer Motion micro-interactions, always tuned for reduced-motion visitors.",
  },
  {
    title: "Systems",
    description:
      "CMS stubs, structured content, and reusable story decks so every drop can scale without new tooling.",
  },
  {
    title: "Sound",
    description:
      "Narratives inspired by piano mechanics and recital halls—because rhythm matters as much as pixels.",
  },
  {
    title: "Care",
    description:
      "Transparent builds, weekly Looms, and living documentation so you can own the stack after launch.",
  },
];

const partners = [
  "montaguepianos.co.uk",
  "pianotuningherts.co.uk",
  "chat.montaguepianos.co.uk",
  "Boutique research labs",
];

export const metadata = buildMetadata(
  {
    title: "About Coldharbour",
    description:
      "The studio translating AI research into poetic imagery, chatbots, and motion websites.",
  },
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-5xl space-y-12 px-6 md:px-10">
          <PageIntro
            eyebrow="About"
            title="Built in Coldharbour Lane, tuned for global stages"
            description="Coldharbour is a one-person studio partnering with piano houses, galleries, and AI labs to ship cinematic experiences."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Reveal key={value.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-slate-300">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Section
        background="muted"
        eyebrow="Partners"
        title="Working with piano makers, storytellers, and research collectives"
        description="Projects include AI Imagery for Montague Pianos, concierge chatbots for Piano Tuning Herts, and the chat.montaguepianos.co.uk companion."
      >
        <Reveal className="flex flex-wrap gap-4 text-sm text-slate-200">
          {partners.map((partner) => (
            <span key={partner} className="rounded-full border border-white/10 px-4 py-2">
              {partner}
            </span>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
