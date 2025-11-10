import Link from "next/link";

const footerLinks = [
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "Behance", href: "https://www.behance.net" },
  { label: "Email", href: "mailto:hello@coldharbour.studio" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10">
        <p>&copy; {new Date().getFullYear()} Coldharbour. Crafted in London.</p>
        <div className="flex gap-4">
          {footerLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
