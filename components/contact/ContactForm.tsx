"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Message queued. Coldharbour will reply within a day.");
    event.currentTarget.reset();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Name
          <input
            type="text"
            name="name"
            required
            className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white focus:border-white"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white focus:border-white"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-slate-300">
        Project notes
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white focus:border-white"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
      >
        Send message
      </button>
      {status && <p className="text-sm text-emerald-300">{status}</p>}
    </form>
  );
}
