const items = [
  "AI Imagery",
  "Conversational Agents",
  "Story Engines",
  "GSAP Theatre",
  "Lenis Smooth Scroll",
];

export function MarqueeBand() {
  return (
    <div className="w-full border-y border-white/10 bg-slate-900/60 py-4 backdrop-blur">
      <div className="marquee" aria-label="Coldharbour capabilities marquee">
        <div className="marquee-track">
          {[...items, ...items].map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
