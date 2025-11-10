let ambientAudio: HTMLAudioElement | null = null;
const subscribers = new Set<(playing: boolean) => void>();

const NOTIFICATION_EVENTS: Array<keyof HTMLMediaElementEventMap> = [
  "play",
  "pause",
  "ended",
];

function notifySubscribers() {
  const playing = isAmbientAudioPlaying();
  subscribers.forEach((callback) => callback(playing));
}

function ensureListeners(audio: HTMLAudioElement) {
  NOTIFICATION_EVENTS.forEach((eventName) => {
    audio.addEventListener(eventName, notifySubscribers);
  });
}

export function ensureAmbientAudio() {
  if (typeof window === "undefined") return null;
  if (!ambientAudio) {
    ambientAudio = new Audio("/media/Tinkling_Mystique_2025-11-10T114347.mp3");
    ambientAudio.loop = true;
    ambientAudio.volume = 0.5;
    ensureListeners(ambientAudio);
  }
  return ambientAudio;
}

export function isAmbientAudioPlaying() {
  if (!ambientAudio) return false;
  return !ambientAudio.paused;
}

export async function playAmbientAudio() {
  const audio = ensureAmbientAudio();
  if (!audio) return false;
  try {
    await audio.play();
    return true;
  } catch {
    return false;
  }
}

export function pauseAmbientAudio() {
  ambientAudio?.pause();
}

export function subscribeToAmbientAudio(
  listener: (playing: boolean) => void
) {
  subscribers.add(listener);
  listener(isAmbientAudioPlaying());
  return () => {
    subscribers.delete(listener);
  };
}
