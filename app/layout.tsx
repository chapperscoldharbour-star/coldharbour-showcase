import type { Metadata } from "next";

import "./globals.css";
import { displayFont, sansFont } from "./fonts";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AppProviders } from "@/components/providers/AppProviders";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansFont.variable} ${displayFont.variable} bg-slate-950 text-white antialiased`}
      >
        <AppProviders>
          <Header />
          <main id="main-content" className="pt-24">
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
