import { ContactForm } from "@/components/contact/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/reveal/Reveal";
import { buildMetadata } from "@/lib/seo";

const signals = [
  "AI imagery drops",
  "Chatbot copilots",
  "ScrollTrigger microsites",
  "Research partnerships",
];

export const metadata = buildMetadata(
  {
    title: "Contact",
    description:
      "Start a Coldharbour project or request the deck. Replies within one day.",
  },
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-4xl space-y-10 px-6 md:px-10">
          <PageIntro
            eyebrow="Contact"
            title="Tell me about the next recital"
            description="Share a link, timeline, or even a feeling—we'll map the right programme together."
          />
        </div>
      </section>
      <Section
        background="muted"
        eyebrow="Enquiries"
        title="Send a note"
        description="Available for remote retainers and on-site residencies in London."
      >
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <ContactForm />
          <Reveal className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Signals</p>
            <ul className="space-y-3">
              {signals.map((signal) => (
                <li key={signal} className="flex items-center gap-3">
                  <span className="h-1 w-8 rounded-full bg-white/40" aria-hidden />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 text-slate-300">
              <p>Email</p>
              <a href="mailto:hello@coldharbour.studio" className="text-white">
                hello@coldharbour.studio
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
