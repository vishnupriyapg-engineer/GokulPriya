import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play, X } from "lucide-react";
import { songs } from "@/content";
import { resolveMedia } from "@/lib/media";

type AudioState = {
  current: number | null;
  playing: boolean;
  time: number;
  duration: number;
  error: number | null;
  toggle: (i: number) => void;
  seek: (t: number) => void;
  stop: () => void;
};

const Ctx = createContext<AudioState | null>(null);
export const useAudio = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAudio outside provider");
  return c;
};

export const fmt = (s: number) =>
  !isFinite(s) || s <= 0 ? "0:00" : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export function AudioProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<number | null>(null);

  useEffect(() => {
    const a = new Audio();
    a.preload = "metadata";
    ref.current = a;
    const on = (e: string, f: () => void) => a.addEventListener(e, f);
    on("timeupdate", () => setTime(a.currentTime));
    on("loadedmetadata", () => setDuration(a.duration));
    on("play", () => setPlaying(true));
    on("pause", () => setPlaying(false));
    on("ended", () => setPlaying(false));
    return () => { a.pause(); a.src = ""; };
  }, []);

  const toggle = useCallback(async (i: number) => {
    const a = ref.current;
    if (!a) return;
    if (current === i) {
      if (a.paused) a.play().catch(() => setError(i)); else a.pause();
      return;
    }
    a.pause();
    setCurrent(i); setTime(0); setDuration(0); setError(null);
    const url = await resolveMedia(songs[i]!.src, "birthday-music");
    if (!url) { setError(i); return; }
    a.src = url;
    a.play().catch(() => setError(i));
  }, [current]);

  const seek = (t: number) => { if (ref.current) ref.current.currentTime = t; };
  const stop = () => { ref.current?.pause(); setCurrent(null); };

  return (
    <Ctx.Provider value={{ current, playing, time, duration, error, toggle, seek, stop }}>
      {children}
      <MiniPlayer />
    </Ctx.Provider>
  );
}

function MiniPlayer() {
  const { current, playing, time, duration, toggle, stop } = useAudio();
  if (current === null) return null;
  const s = songs[current];
  if (!s) return null;
  return (
    <div className="animate-fade-up fixed inset-x-3 bottom-[5.25rem] z-40 mx-auto max-w-md md:bottom-5">
      <div className="glass shadow-soft flex items-center gap-3 rounded-2xl px-4 py-3">
        <button onClick={() => toggle(current)} aria-label={playing ? "Pause" : "Play"}
          className="bg-blush grid h-10 w-10 shrink-0 place-items-center rounded-full text-primary-foreground transition-transform hover:scale-105">
          {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-lg leading-tight text-foreground">{s.title}</p>
          <div className="mt-1 h-0.5 overflow-hidden rounded-full bg-border">
            <div className="h-full bg-primary transition-[width]" style={{ width: `${duration ? (time / duration) * 100 : 0}%` }} />
          </div>
        </div>
        <span className="text-xs tabular-nums text-muted-foreground">{fmt(time)}</span>
        <button onClick={stop} aria-label="Close player" className="p-1 text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
