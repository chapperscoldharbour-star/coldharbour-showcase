"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SoundToggle } from "@/components/ui/SoundToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/stories", label: "Stories" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        isScrolled ? "bg-slate-950/90 backdrop-blur border-b border-white/10" : "bg-transparent"
      )}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
          Coldharbour
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={cn(
                      "transition hover:text-white",
                      pathname === link.href ? "text-white" : "text-slate-300"
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <SoundToggle />
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition hover:border-white/60"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
