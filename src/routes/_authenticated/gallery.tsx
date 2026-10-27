import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import { memories, type Memory } from "@/content";
import { useMedia } from "@/lib/media";
import { X, ChevronLeft, ChevronRight, Heart, Sparkles, Music2 } from "lucide-react";

type GalleryAlbum = Memory & {
  photos?: string[];
  description?: string;
  song?: string;
  songTitle?: string;
};

export const Route = createFileRoute("/_authenticated/gallery")({
  head: () => ({
    meta: [
      { title: "Our Little Memories ❤️" },
      { name: "description", content: "Every photo holds a little piece of our story." },
      { property: "og:title", content: "Our Little Memories ❤️" },
      { property: "og:description", content: "Every photo holds a little piece of our story." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [activeAlbumIndex, setActiveAlbumIndex] = useState<number | null>(null);
  const albums = memories as GalleryAlbum[];

  const closeAlbum = () => setActiveAlbumIndex(null);
  const moveAlbum = (direction: number) => {
    setActiveAlbumIndex((current) => {
      if (current === null || albums.length === 0) return current;
      return (current + direction + albums.length) % albums.length;
    });
  };

  useEffect(() => {
    if (activeAlbumIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAlbum();
      if (event.key === "ArrowRight") moveAlbum(1);
      if (event.key === "ArrowLeft") moveAlbum(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeAlbumIndex]);

  return (
    <main className="little-gallery relative isolate min-h-screen overflow-hidden px-4 py-8 text-white sm:px-6 sm:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[5%] top-[18%] h-44 w-44 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <span className="absolute right-[8%] top-[38%] h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />
        <span className="absolute bottom-[4%] left-[40%] h-44 w-44 rounded-full bg-pink-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-10 text-center sm:mb-14">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-pink-200/20 bg-pink-200/10 text-pink-100">
            <Heart className="h-6 w-6" fill="currentColor" />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-pink-200/80 sm:text-xs">a little piece of us</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl">Our Little Memories</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Choose a memory to open its little album — more photos, the story behind them, and a song to remember it by. ♡
          </p>
        </header>

        {albums.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-white/70">
            Add your memories in <code>src/content.ts</code> to show them here.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-7">
            {albums.map((album, index) => (
              <AlbumCover key={`${album.title}-${index}`} album={album} index={index} onOpen={() => setActiveAlbumIndex(index)} />
            ))}
          </div>
        )}
        <p className="mt-10 text-center text-[10px] uppercase tracking-[0.3em] text-white/30">every picture keeps a little forever</p>
      </div>

      {activeAlbumIndex !== null && albums[activeAlbumIndex] && (
        <AlbumViewer
          album={albums[activeAlbumIndex]}
          albumIndex={activeAlbumIndex}
          albumCount={albums.length}
          onClose={closeAlbum}
          onPrevious={() => moveAlbum(-1)}
          onNext={() => moveAlbum(1)}
        />
      )}

      <style>{`
        .little-gallery { background:radial-gradient(ellipse at 14% 12%,rgba(111,45,111,.24),transparent 36%),radial-gradient(ellipse at 86% 25%,rgba(65,47,130,.20),transparent 34%),#090711; }
        .gallery-cover { animation:coverFloat var(--float-time,7s) ease-in-out infinite; animation-delay:var(--float-delay,0s); }
        .gallery-cover:nth-child(3n) { --float-time:8.4s; }
        .gallery-cover:nth-child(4n) { --float-time:6.6s; }
        @keyframes coverFloat { 0%,100% { transform:translateY(0) rotate(var(--tilt,0deg)); } 50% { transform:translateY(-7px) rotate(0deg); } }
        @keyframes albumAppear { from { opacity:0; transform:translateY(12px) scale(.985); } to { opacity:1; transform:translateY(0) scale(1); } }
        .album-viewer-panel { animation:albumAppear .3s ease-out both; }
        .gallery-scrollbar { scrollbar-width:thin; scrollbar-color:rgba(244,190,255,.8) rgba(255,255,255,.08); }
        .gallery-scrollbar::-webkit-scrollbar { width:8px; height:8px; }
        .gallery-scrollbar::-webkit-scrollbar-track { background:rgba(255,255,255,.07); border-radius:999px; }
        .gallery-scrollbar::-webkit-scrollbar-thumb { background:rgba(244,190,255,.8); border-radius:999px; }
        @media(prefers-reduced-motion:reduce) { .gallery-cover,.album-viewer-panel { animation:none!important; } }
      `}</style>
    </main>
  );
}

function AlbumCover({ album, index, onOpen }: { album: GalleryAlbum; index: number; onOpen: () => void }) {
  const { url } = useMedia(album.src, "birthday-images");
  const tilt = ["-1.5deg", "1.2deg", "-0.7deg", "1.7deg"][index % 4];
  const count = album.photos?.length || 1;

  return (
    <article className="gallery-cover" style={{ "--tilt": tilt, "--float-delay": `${(index % 6) * -0.55}s` } as CSSProperties}>
      <button type="button" onClick={onOpen} aria-label={`Open album: ${album.title}`} className="group block w-full rounded-[1.4rem] border border-white/15 bg-white/[0.055] p-2 text-left shadow-xl shadow-black/20 transition duration-500 hover:-translate-y-1 hover:border-pink-200/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 sm:rounded-[1.7rem] sm:p-2.5">
        <div className="relative overflow-hidden rounded-[1.05rem] bg-white/5">
          {url ? <img src={url} alt={album.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" /> : <div className="grid aspect-[4/5] w-full place-items-center bg-gradient-to-br from-violet-900/50 to-fuchsia-900/30"><Heart className="h-9 w-9 text-pink-100/70" /></div>}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080711] via-[#080711]/10 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur">{count} {count === 1 ? "photo" : "photos"}</span>
          <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
            <h2 className="font-display text-lg leading-tight sm:text-2xl">{album.title}</h2>
            <p className="mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.17em] text-pink-100/80"><Heart className="h-3 w-3" /> open memory album</p>
          </div>
        </div>
      </button>
    </article>
  );
}

function AlbumViewer({ album, albumIndex, albumCount, onClose, onPrevious, onNext }: {
  album: GalleryAlbum; albumIndex: number; albumCount: number; onClose: () => void; onPrevious: () => void; onNext: () => void;
}) {
  const photos = Array.isArray(album.photos) && album.photos.length ? album.photos : [album.src];
  const [photoIndex, setPhotoIndex] = useState(0);
  const description =
    (typeof album.description === "string" && album.description) ||
    ("story" in album && typeof album.story === "string" && album.story) ||
    ("caption" in album && typeof album.caption === "string" && album.caption) ||
    "This little moment is one of the pieces that makes our story special. ♡";
  const selectedPhoto = photos[Math.min(photoIndex, photos.length - 1)] ?? album.src;
const { url: photoUrl } = useMedia(selectedPhoto, "birthday-images");

  useEffect(() => { setPhotoIndex(0); }, [album.title]);

  return (
    <div className="fixed inset-0 z-[100000] overflow-y-auto bg-[#05030a]/95 p-3 backdrop-blur-2xl sm:p-6" role="dialog" aria-modal="true" aria-label={`${album.title} album`}>
      <section className="album-viewer-panel relative mx-auto my-3 w-full max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#100d19]/95 shadow-2xl sm:my-5 sm:rounded-[2rem]">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#100d19]/95 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="min-w-0 pr-3">
            <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-pink-200/80 sm:text-xs"><Heart className="h-3.5 w-3.5" fill="currentColor" /> your memory album</p>
            <p className="mt-1 truncate font-display text-lg sm:text-2xl">{album.title}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close album" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-black/30 text-white transition hover:bg-pink-200/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200"><X className="h-5 w-5" /></button>
        </header>

        <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(320px,.85fr)]">
          <div className="min-w-0 p-4 sm:p-6">
            <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-2 sm:min-h-[420px] sm:p-4">
              {photoUrl ? <img key={photoUrl} src={photoUrl} alt={`${album.title} photo ${photoIndex + 1}`} className="max-h-[58vh] w-full object-contain" /> : <div className="grid min-h-[260px] w-full place-items-center text-white/40"><Heart className="h-10 w-10" /></div>}
              {photos.length > 1 && <>
                <button type="button" onClick={() => setPhotoIndex((photoIndex - 1 + photos.length) % photos.length)} aria-label="Previous photo" className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-white hover:bg-black/80"><ChevronLeft className="h-5 w-5" /></button>
                <button type="button" onClick={() => setPhotoIndex((photoIndex + 1) % photos.length)} aria-label="Next photo" className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-white hover:bg-black/80"><ChevronRight className="h-5 w-5" /></button>
              </>}
              <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] tabular-nums text-white/80">{photoIndex + 1} / {photos.length}</span>
            </div>

            {photos.length > 1 && <div className="gallery-scrollbar mt-4 flex gap-3 overflow-x-auto pb-2" aria-label="Choose a photo">
              {photos.map((photo, index) => <PhotoThumbnail key={`${photo}-${index}`} photo={photo} title={album.title} index={index} active={index === photoIndex} onClick={() => setPhotoIndex(index)} />)}
            </div>}
          </div>

          <aside className="flex min-w-0 flex-col border-t border-white/10 px-5 py-6 sm:px-7 md:border-l md:border-t-0 md:px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-pink-200/80">the story behind it</p>
            <h2 className="mt-3 break-words font-display text-3xl leading-tight sm:text-4xl">{album.title}</h2>
            <div className="my-5 h-px w-16 bg-gradient-to-r from-pink-200 to-violet-300" />
            <div className="gallery-scrollbar max-h-[38vh] min-h-[8rem] overflow-y-auto whitespace-pre-line pr-3 text-sm leading-7 text-white/85 sm:text-base sm:leading-8">{description}</div>

            {album.song && <div className="mt-6 rounded-2xl border border-pink-200/15 bg-pink-100/[0.05] p-4">
              <div className="mb-3 flex items-center gap-2 text-pink-100"><Music2 className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-[0.18em]">our song</span></div>
              <p className="mb-3 text-sm text-white/75">{album.songTitle || "A song for this memory"}</p>
              <audio key={album.song} controls preload="metadata" src={album.song} className="w-full">Your browser does not support audio playback.</audio>
            </div>}

            <div className="mt-7 flex items-center justify-between gap-2 border-t border-white/10 pt-5">
              <button type="button" onClick={onPrevious} className="inline-flex min-h-11 items-center gap-1 rounded-full border border-white/15 px-3 text-xs text-white/80 transition hover:bg-white/10 sm:px-4"><ChevronLeft className="h-4 w-4" /> Previous album</button>
              <span className="text-xs tabular-nums text-white/40">{albumIndex + 1} / {albumCount}</span>
              <button type="button" onClick={onNext} className="inline-flex min-h-11 items-center gap-1 rounded-full bg-pink-200 px-3 text-xs font-semibold text-[#170d1c] transition hover:bg-white sm:px-4">Next <ChevronRight className="h-4 w-4" /></button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function PhotoThumbnail({ photo, title, index, active, onClick }: {
  photo: string; title: string; index: number; active: boolean; onClick: () => void;
}) {
  const { url } = useMedia(photo, "birthday-images");
  return <button type="button" onClick={onClick} aria-label={`Show photo ${index + 1}`} aria-pressed={active} className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-24 sm:w-20 ${active ? "border-pink-200 shadow-lg shadow-pink-500/20" : "border-white/10 opacity-70 hover:opacity-100"}`}>
    {url ? <img src={url} alt={`${title} thumbnail ${index + 1}`} loading="lazy" className="h-full w-full object-cover" /> : <span className="grid h-full place-items-center bg-white/5 text-xs">{index + 1}</span>}
  </button>;
}
