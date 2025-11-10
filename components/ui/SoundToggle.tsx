"use client";

import { useEffect, useState } from "react";

import {
  isAmbientAudioPlaying,
  pauseAmbientAudio,
  playAmbientAudio,
  subscribeToAmbientAudio,
} from "@/lib/ambientAudio";

export function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPlaying(isAmbientAudioPlaying());
    return subscribeToAmbientAudio(setIsPlaying);
  }, []);

  const handleToggle = async () => {
    setError(false);
    if (isPlaying) {
      pauseAmbientAudio();
      return;
    }
    const success = await playAmbientAudio();
    if (!success) {
      setError(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[0.6rem] uppercase tracking-[0.4em] text-slate-200 transition hover:border-white/40"
      aria-pressed={isPlaying}
    >
      <span
        className={`relative block h-3 w-3 rounded-full transition ${
          isPlaying ? "bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)]" : "bg-slate-500"
        }`}
      >
        <span
          className={`absolute inset-0 rounded-full border border-white/40 opacity-0 transition group-hover:opacity-100 ${
            isPlaying ? "animate-ping" : ""
          }`}
        />
      </span>
      <span>{isPlaying ? "Sound On" : "Sound Off"}</span>
      {error && (
        <span className="text-[0.45rem] tracking-[0.3em] text-amber-300">
          Tap to allow
        </span>
      )}
    </button>
  );
}
