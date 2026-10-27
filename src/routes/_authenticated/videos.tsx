
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, Video as VideoIcon, X } from "lucide-react";

import { videos, type Video } from "@/content";
import { PageHeader } from "@/components/PageHeader";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useAudio } from "@/components/audio";

export const Route = createFileRoute("/_authenticated/videos")({
  head: () => ({
    meta: [
      { title: "Moments in Motion ❤️" },
      {
        name: "description",
        content: "Some memories are better when they move.",
      },
      { property: "og:title", content: "Moments in Motion ❤️" },
      {
        property: "og:description",
        content: "Some memories are better when they move.",
      },
    ],
  }),
  component: Videos,
});

function Videos() {
  const [active, setActive] = useState<Video | null>(null);
  const audio = useAudio();

  function openVideo(video: Video) {
    if (audio.playing && audio.current !== null) {
      audio.toggle(audio.current);
    }

    setActive(video);
  }

  function closeVideo() {
    setActive(null);
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-16">
      <PageHeader
        title="Moments in Motion"
        subtitle="Some memories are better when they move. ❤️"
      />

      {/* Video gallery */}
      {videos.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <button
              key={`${video.src}-${index}`}
              type="button"
              onClick={() => openVideo(video)}
              aria-label={`Play ${video.title}`}
              className="group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
            >
              {/* Video itself provides its cover frame */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-lg transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                <video
                  src={`${video.src}#t=0.1`}
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  className="pointer-events-none aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Play button */}
                <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/20 text-white shadow-xl backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-pink-500/70">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>

                <span className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                  ▶ Watch memory
                </span>
              </div>

              {/* Title and short description */}
              <div className="px-1 pt-4">
                <h2 className="font-display text-2xl text-foreground transition-colors group-hover:text-pink-400">
                  {video.title}
                </h2>

                <p className="mt-2 line-clamp-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">
                  {video.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-2 text-sm text-pink-400">
                  <Play className="h-4 w-4" />
                  Click to watch
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 px-6 py-16 text-center">
          <VideoIcon className="mx-auto mb-4 h-10 w-10 text-pink-400" />

          <h2 className="font-display text-2xl text-foreground">
            Our memories are waiting ❤️
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Add your videos to see them here.
          </p>
        </div>
      )}

      {/* Video popup */}
      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) closeVideo();
        }}
      >
        <DialogContent className="glass max-h-[92vh] w-[94vw] max-w-4xl overflow-y-auto rounded-3xl border-white/10 p-3 sm:p-5">
          {active && (
            <Player
              key={active.src}
              video={active}
              onClose={closeVideo}
            />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

function Player({
  video,
  onClose,
}: {
  video: Video;
  onClose: () => void;
}) {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="space-y-4">
      {/* Video title and close button */}
      <div className="flex items-start justify-between gap-4 px-1 pt-1">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.25em] text-pink-400">
            A memory in motion ❤️
          </p>

          <DialogTitle className="mt-2 font-display text-2xl font-medium text-foreground sm:text-3xl">
            {video.title}
          </DialogTitle>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:bg-pink-500/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Main video player */}
      <div className="overflow-hidden rounded-2xl bg-black">
        {!videoError ? (
          <video
            key={video.src}
            src={video.src}
            controls
            autoPlay
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="aspect-video w-full"
          >
            Your browser does not support video playback.
          </video>
        ) : (
          <div className="grid aspect-video place-items-center px-6 text-center text-white">
            <div>
              <VideoIcon className="mx-auto mb-3 h-10 w-10 text-pink-400" />

              <p className="text-lg">Unable to load this video 💔</p>

              <p className="mt-2 text-sm text-white/70">
                Check that the video file exists and its path is correct.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Full description */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 sm:px-5">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-pink-400">
          The story behind this moment
        </p>

        <DialogDescription className="whitespace-pre-wrap text-sm leading-7 text-muted-foreground sm:text-base">
          {video.description}
        </DialogDescription>
      </div>

      <p className="pb-1 text-center text-xs text-muted-foreground">
        Every little moment becomes a memory worth keeping. 💗
      </p>
    </div>
  );
}

