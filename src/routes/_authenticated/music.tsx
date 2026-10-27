import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Disc3,
  Heart,
  Music2,
  Pause,
  Play,
  Search,
  SkipBack,
  SkipForward,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import { songs } from "@/content";
import { fmt, useAudio } from "@/components/audio";

function MusicPage() {
  const {
    current,
    playing,
    time,
    duration,
    error,
    toggle,
    seek,
  } = useAudio();

  const [search, setSearch] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [showLibrary, setShowLibrary] = useState(true);

  const defaultNotes = [
    "If this song could speak, I think it would tell you how much happiness you bring into my life. ❤️",
    "A little reminder that even ordinary moments feel special when you're part of them.",
    "Whenever this plays, I hope you feel loved, appreciated, and chosen.",
  ];

  const filteredSongs = useMemo(() => {
    const query = search.trim().toLowerCase();
    return songs
      .map((song, index) => ({ song, index }))
      .filter(({ song }) => {
        if (!query) return true;
        return `${song.title} ${song.artist} ${song.description}`
          .toLowerCase()
          .includes(query);
      });
  }, [search]);

  const activeSong =
    current !== null && current >= 0 && current < songs.length
      ? songs[current]
      : null;

  const playRelative = (direction: -1 | 1) => {
    if (songs.length === 0) return;
    const nextIndex =
      current === null
        ? direction === 1
          ? 0
          : songs.length - 1
        : (current + direction + songs.length) % songs.length;

    void toggle(nextIndex);
    setShowNote(false);
  };

  const chooseSong = (index: number) => {
    void toggle(index);
    setShowNote(false);
  };

  const progress = duration > 0 ? Math.min((time / duration) * 100, 100) : 0;

  return (
    <main className="music-page relative min-h-screen overflow-hidden bg-[#160d12] px-4 pb-10 pt-6 text-[#fff7f2] sm:px-8 sm:pt-8">
      {/* Soft background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="music-glow absolute -left-32 top-16 h-80 w-80 rounded-full bg-rose-900/25 blur-[100px]" />
        <div className="music-glow music-glow-delay absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-amber-700/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Compact header */}
        <header className="music-enter mb-6 text-center sm:mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200/15 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-rose-200/80 sm:text-xs">
            <Heart className="h-3.5 w-3.5" />
            A Little Soundtrack for Us
          </div>

          <h1 className="font-display text-4xl leading-tight sm:text-6xl">
            Our <span className="italic text-rose-200">Soundtrack</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
            Pick a number, press play, and let a little memory find you. ❤️
          </p>
        </header>

        {/* Numbered quick access: stay near the top */}
        {songs.length > 0 && (
          <nav
            aria-label="Quick song selection"
            className="music-enter mb-5 rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                Jump to your song
              </p>
              <span className="text-xs text-rose-200/70">{songs.length} tracks</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {songs.map((song, index) => {
                const selected = current === index;
                return (
                  <button
                    key={`quick-${song.src}-${index}`}
                    type="button"
                    onClick={() => chooseSong(index)}
                    aria-label={`Play song ${index + 1}: ${song.title}`}
                    title={song.title}
                    className={`group flex min-w-0 shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                      selected
                        ? "border-rose-200/60 bg-rose-200 text-[#27131b] shadow-[0_0_22px_rgba(251,207,220,0.18)]"
                        : "border-white/10 bg-white/[0.04] text-white/70 hover:border-rose-200/40 hover:bg-rose-200/10 hover:text-rose-100"
                    }`}
                  >
                    <span className="font-mono text-xs font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="max-w-28 truncate text-xs sm:max-w-40">
                      {song.title}
                    </span>
                    {selected && playing && <span className="music-equalizer" aria-hidden="true"><i /><i /><i /></span>}
                  </button>
                );
              })}
            </div>
          </nav>
        )}

        {/* Premium player */}
        <section className="music-enter music-enter-delay-1 mb-5 grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 sm:p-7 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
          <div className="min-w-0">
            <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-rose-200/70 sm:text-xs">
              <Sparkles className="h-4 w-4" />
              {activeSong ? `Now playing · ${String((current ?? 0) + 1).padStart(2, "0")}` : "Choose your first melody"}
            </p>

            <div className="song-change" key={current ?? "empty"}>
              <h2 className="font-display text-2xl sm:text-3xl">
                {activeSong?.title ?? "Pick a Song, Stay Awhile"}
              </h2>
              <p className="mt-1 text-sm text-white/50">
                {activeSong?.artist ?? "A collection that can keep growing"}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                {activeSong?.description ??
                  "Choose a numbered track above or explore the library below. No long searching needed."}
              </p>
            </div>

            {activeSong && (
              <div className="mt-5 max-w-xl">
                <input
                  aria-label="Seek through song"
                  type="range"
                  min={0}
                  max={duration || 0}
                  step={0.1}
                  value={Math.min(time, duration || 0)}
                  disabled={duration <= 0}
                  onChange={(event) => seek(Number(event.target.value))}
                  style={{ background: `linear-gradient(to right, #fbcfe0 ${progress}%, rgba(255,255,255,.15) ${progress}%)` }}
                  className="music-seek h-1.5 w-full cursor-pointer rounded-full disabled:cursor-not-allowed"
                />
                <div className="mt-2 flex justify-between text-xs tabular-nums text-white/45">
                  <span>{fmt(time)}</span>
                  <span>{fmt(duration)}</span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button type="button" onClick={() => playRelative(-1)} aria-label="Previous song" className="music-control grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/75 hover:bg-white/10">
                    <SkipBack className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => current !== null && void toggle(current)}
                    aria-label={playing ? "Pause song" : "Play song"}
                    className="music-play grid h-12 w-12 place-items-center rounded-full bg-rose-200 text-[#27131b] shadow-lg shadow-rose-300/10"
                  >
                    {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
                  </button>
                  <button type="button" onClick={() => playRelative(1)} aria-label="Next song" className="music-control grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/75 hover:bg-white/10">
                    <SkipForward className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNote((value) => !value)}
                    className="ml-1 inline-flex items-center gap-2 rounded-full border border-rose-200/20 px-4 py-2 text-xs text-rose-100 transition-all duration-300 hover:border-rose-200/50 hover:bg-rose-200/10"
                  >
                    <Heart className={`h-3.5 w-3.5 ${showNote ? "fill-current" : ""}`} />
                    {showNote ? "Hide my note" : "A note for you"}
                  </button>
                </div>

                {error !== null && error === current && (
                  <p role="alert" className="mt-3 text-sm text-rose-300">
                    This song couldn't be played. Check the audio file path and try again.
                  </p>
                )}

                <div className={`note-reveal ${showNote ? "note-reveal-open" : ""}`} aria-hidden={!showNote}>
                  {showNote && (
                    <div className="mt-4 rounded-2xl border border-rose-200/15 bg-rose-200/[0.06] p-4 text-sm leading-7 text-rose-50/85">
                      <p className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-rose-200/65">
                        <Heart className="h-3 w-3" /> Just Between Us
                      </p>
                      {activeSong.dedication ||
                        defaultNotes[(current ?? 0) % defaultNotes.length]}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Smaller vinyl keeps the important controls visible */}
          <div className="flex items-center justify-center gap-4 py-1 md:flex-col">
            <div className={`vinyl-record relative grid h-32 w-32 shrink-0 place-items-center rounded-full border border-white/10 bg-[repeating-radial-gradient(circle,#21151b_0px,#21151b_3px,#100b0e_4px,#21151b_5px)] shadow-[0_18px_45px_rgba(0,0,0,0.4)] sm:h-40 sm:w-40 ${playing ? "vinyl-playing" : "vinyl-paused"}`}>
              <div className="absolute inset-4 rounded-full border border-white/[0.07]" />
              <div className="absolute inset-8 rounded-full border border-white/[0.07]" />
              <div className="grid h-12 w-12 place-items-center rounded-full border border-rose-100/20 bg-gradient-to-br from-rose-200 to-rose-400 text-[#381a26] shadow-inner sm:h-14 sm:w-14">
                <Disc3 className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <span className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-rose-200/70 shadow-[0_0_12px_rgba(253,205,215,0.8)]" />
            </div>
            <p className="max-w-28 text-center text-[9px] uppercase leading-5 tracking-[0.22em] text-white/35 md:mt-1">
              {playing ? "Spinning just for you" : "Your little record"}
            </p>
          </div>
        </section>

        {/* Library stays compact and collapsible */}
        <section className="music-enter music-enter-delay-2 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-rose-200/65">
                <Disc3 className="h-4 w-4" /> The Vinyl Library
              </p>
              <h2 className="font-display text-2xl sm:text-3xl">Choose by number. Find your feeling.</h2>
              <p className="mt-2 text-xs text-white/45">
                {songs.length} {songs.length === 1 ? "song" : "songs"} · No pictures, just music and memories.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowLibrary((value) => !value)}
              aria-expanded={showLibrary}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-xs text-white/65 transition-all hover:bg-white/5 sm:self-auto"
            >
              {showLibrary ? "Hide list" : "Show all songs"}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showLibrary ? "rotate-180" : ""}`} />
            </button>
          </div>

          {showLibrary && (
            <div className="library-reveal">
              <label className="mt-5 flex max-w-sm items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 focus-within:border-rose-200/40">
                <Search className="h-4 w-4 shrink-0 text-white/35" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search song or artist..."
                  aria-label="Search songs"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-white/30"
                />
              </label>

              <div className="mt-4 space-y-2">
                {filteredSongs.map(({ song, index }) => {
                  const isActive = current === index;
                  return (
                    <article
                      key={`${song.src}-${index}`}
                      className={`song-row group flex items-center gap-3 rounded-2xl border p-3 sm:gap-4 sm:p-4 ${
                        isActive
                          ? "border-rose-200/30 bg-rose-200/[0.07]"
                          : "border-transparent hover:border-white/10 hover:bg-white/[0.035]"
                      }`}
                    >
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono text-sm font-semibold transition-colors ${
                        isActive ? "bg-rose-200 text-[#27131b]" : "border border-white/10 bg-white/[0.04] text-rose-100/70"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <button
                        type="button"
                        onClick={() => chooseSong(index)}
                        aria-label={`${isActive && playing ? "Pause" : "Play"} song ${index + 1}: ${song.title}`}
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-rose-200 text-[#27131b]"
                            : "border border-white/10 bg-white/[0.04] text-rose-100 group-hover:border-rose-200/30 group-hover:bg-rose-200/10"
                        }`}
                      >
                        {isActive && playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => chooseSong(index)}
                        className="min-w-0 flex-1 text-left"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="truncate font-display text-lg text-white/90">{song.title}</h3>
                          {isActive && (
                            <span className="rounded-full bg-rose-200/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.15em] text-rose-200">
                              {playing ? "Playing now" : "Selected"}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 truncate text-xs text-white/40">{song.artist}</p>
                        <p className="mt-1 line-clamp-1 text-xs text-white/55">{song.description}</p>
                      </button>

                      <Music2 className="mr-1 hidden h-4 w-4 shrink-0 text-rose-200/35 sm:block" />
                    </article>
                  );
                })}

                {filteredSongs.length === 0 && (
                  <p className="rounded-2xl border border-dashed border-white/10 px-4 py-8 text-center text-sm text-white/40">
                    No songs found. Try another title or artist.
                  </p>
                )}
              </div>
            </div>
          )}
        </section>

        <footer className="mt-6 pb-2 text-center">
          <p className="font-display text-lg italic text-rose-100/65">“Some songs sound like home.”</p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">Made with love, just for you</p>
        </footer>
      </div>

      <style>{`
        .music-page { animation: page-in .65s ease-out both; }
        .music-enter { animation: rise-in .65s ease-out both; }
        .music-enter-delay-1 { animation: rise-in .8s .08s ease-out both; }
        .music-enter-delay-2 { animation: rise-in .8s .16s ease-out both; }
        .music-glow { animation: glow-drift 9s ease-in-out infinite alternate; }
        .music-glow-delay { animation-delay: -4s; }
        .vinyl-playing { animation: vinyl-spin 5.5s linear infinite; }
        .vinyl-paused { animation: vinyl-breathe 3.8s ease-in-out infinite; }
        .player-is-playing { border-color: rgba(251,207,220,.25); box-shadow: 0 0 0 1px rgba(251,207,220,.05), 0 18px 60px rgba(0,0,0,.22); }
        .player-is-playing .vinyl-record { box-shadow: 0 0 0 8px rgba(251,207,220,.025), 0 0 38px rgba(251,207,220,.12), 0 18px 45px rgba(0,0,0,.4); }
        .vinyl-record { transition: box-shadow .5s ease, filter .5s ease; }
        .vinyl-record::before { content: ""; position: absolute; inset: -9px; border-radius: 50%; border: 1px solid rgba(251,207,220,.0); transition: border-color .4s ease, transform .4s ease; }
        .player-is-playing .vinyl-record::before { border-color: rgba(251,207,220,.25); animation: ring-pulse 2.2s ease-out infinite; }
        .player-is-playing .vinyl-record::after { content: ""; position: absolute; inset: -18px; border-radius: 50%; border: 1px solid rgba(251,207,220,.13); animation: ring-pulse 2.2s .7s ease-out infinite; pointer-events: none; }
        .music-play { position: relative; }
        .music-play:active { transform: scale(.93); }
        .music-play::after { content: ""; position: absolute; inset: -5px; border: 1px solid rgba(251,207,220,.3); border-radius: 999px; opacity: 0; }
        .player-is-playing .music-play::after { animation: button-wave 1.8s ease-out infinite; }
        .song-change { animation: song-in .45s cubic-bezier(.2,.8,.2,1) both; }
        .note-reveal-open > div { animation: note-pop .4s cubic-bezier(.2,.8,.2,1) both; }
        .song-change { animation: song-in .35s ease-out both; }
        .song-row { transition: transform .22s ease, background-color .22s ease, border-color .22s ease; }
        .song-row:hover { transform: translateY(-2px); }
        .music-control, .music-play { transition: transform .22s ease, box-shadow .22s ease, background-color .22s ease; }
        .music-control:hover, .music-play:hover { transform: scale(1.06); }
        .music-play:hover { box-shadow: 0 0 24px rgba(251,207,220,.22); }
        .music-seek { appearance: none; -webkit-appearance: none; }
        .music-seek::-webkit-slider-thumb { appearance: none; -webkit-appearance: none; width: 12px; height: 12px; border-radius: 50%; background: #fbcfe0; border: 2px solid #160d12; box-shadow: 0 0 0 3px rgba(251,207,220,.12); }
        .music-seek::-moz-range-thumb { width: 10px; height: 10px; border-radius: 50%; background: #fbcfe0; border: 2px solid #160d12; }
        .note-reveal { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows .35s ease, opacity .3s ease; }
        .note-reveal-open { grid-template-rows: 1fr; opacity: 1; }
        .note-reveal > div { min-height: 0; overflow: hidden; }
        .library-reveal { animation: library-in .3s ease-out both; }
        .music-equalizer { display: inline-flex; height: 12px; align-items: end; gap: 2px; }
        .music-equalizer i { display: block; width: 2px; border-radius: 2px; background: currentColor; animation: equalize .6s ease-in-out infinite alternate; }
        .music-equalizer i:nth-child(1) { height: 45%; }
        .music-equalizer i:nth-child(2) { height: 100%; animation-delay: .2s; }
        .music-equalizer i:nth-child(3) { height: 65%; animation-delay: .35s; }
        @keyframes page-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes rise-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes song-in { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes library-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes vinyl-spin { to { transform: rotate(360deg); } }
        @keyframes vinyl-breathe { 0%,100% { transform: scale(1); filter: brightness(1); } 50% { transform: scale(1.025); filter: brightness(1.12); } }
        @keyframes ring-pulse { 0% { transform: scale(.94); opacity: .7; } 100% { transform: scale(1.18); opacity: 0; } }
        @keyframes button-wave { 0% { transform: scale(.9); opacity: .7; } 100% { transform: scale(1.35); opacity: 0; } }
        @keyframes note-pop { from { opacity: 0; transform: translateY(12px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes glow-drift { from { transform: translate3d(0,0,0) scale(1); } to { transform: translate3d(18px,-12px,0) scale(1.08); } }
        @keyframes equalize { from { transform: scaleY(.35); } to { transform: scaleY(1); } }
        @media (prefers-reduced-motion: reduce) {
          .music-page, .music-enter, .music-enter-delay-1, .music-enter-delay-2, .music-glow, .vinyl-playing, .song-change, .library-reveal, .music-equalizer i { animation: none !important; }
          .song-row, .music-control, .music-play, .note-reveal { transition: none !important; }
        }
      `}</style>
    </main>
  );
}

export const Route = createFileRoute("/_authenticated/music")({
  component: MusicPage,
});
