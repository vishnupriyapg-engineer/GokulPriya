import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { heroMemory, site, memories } from "@/content";
import { MemoryModal } from "@/components/MemoryModal";
import LoveCounters from "@/components/LoveCounters";
import { useMedia } from "@/lib/media";

export const Route = createFileRoute("/_authenticated/home")({
  head: () => ({
    meta: [
      { title: "Our Little World ❤️" },
      {
        name: "description",
        content: "Welcome to our little world.",
      },
      {
        property: "og:title",
        content: "Our Little World ❤️",
      },
      {
        property: "og:description",
        content: "Welcome to our little world.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const heartRef = useRef<HTMLDivElement>(null);

  const { url: heroUrl } = useMedia(
    heroMemory.src,
    "birthday-images",
  );

  const reveal = () => {
    setRevealed(true);

    setTimeout(() => {
      heartRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 60);
  };

  return (
    <div className="mx-auto max-w-5xl px-5">
      {/* Welcome Heading */}
      <section className="animate-fade-up pt-10 text-center md:pt-16">
        <h1 className="font-display text-5xl font-medium leading-[1.05] text-foreground md:text-7xl">
          {site.welcome}
        </h1>
      </section>

      {/* Hero Memory Image */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open this memory"
        className="group animate-fade-up shadow-soft relative mx-auto mt-10 block w-full max-w-xl overflow-hidden rounded-3xl [animation-delay:150ms]"
      >
        <img
          src={heroUrl ?? undefined}
          alt={heroMemory.title}
          width={1280}
          height={1600}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-foreground/90 opacity-80 transition-opacity group-hover:opacity-100">
          tap to remember
        </span>
      </button>

      {/* Hero Caption */}
      <p className="mx-auto mt-8 max-w-md text-center font-display text-2xl italic text-muted-foreground">
        {site.heroCaption}
      </p>

      {/* Love Counters - Always Visible */}
      <section className="animate-fade-up py-12">
        <LoveCounters />
      </section>

      {/* Open Heart Section */}
      <section className="py-24 text-center">
        <p className="font-display text-3xl text-foreground md:text-4xl">
          {site.teaser}
        </p>

        {!revealed && (
          <button
            onClick={reveal}
            className="bg-blush shadow-glow mt-8 rounded-full px-9 py-4 text-base font-semibold text-primary-foreground transition hover:scale-105"
          >
            {site.openHeart}
          </button>
        )}
      </section>

      {/* Revealed Content */}
      {revealed && (
        <div
          ref={heartRef}
          className="animate-fade-up scroll-mt-20 space-y-24"
        >
          {/* Navigation Cards */}
          <section className="grid gap-4 sm:grid-cols-3">
            {[
              {
                to: "/gallery" as const,
                t: "Our Memories",
                s: "Little moments",
                img: memories[0]!.src,
              },
              {
                to: "/videos" as const,
                t: "Moments in Motion",
                s: "Some memories move",
                img: memories[1]!.src,
              },
              {
                to: "/music" as const,
                t: "Our Songs",
                s: "For every feeling",
                img: memories[2]!.src,
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src={c.img}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                <div className="absolute bottom-5 left-5 text-left">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {c.s}
                  </p>

                  <p className="font-display text-3xl text-foreground">
                    {c.t}
                  </p>
                </div>
              </Link>
            ))}
          </section>

          {/* Birthday Message */}
          <section className="glass mx-auto max-w-2xl rounded-3xl px-7 py-14 text-center md:px-14">
            <h2 className="font-display text-4xl font-medium leading-tight text-blush md:text-5xl">
              {site.birthdayTitle}
            </h2>

            <div className="mx-auto my-8 h-px w-16 bg-primary/50" />

            <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
              {site.birthdayMessage.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <p className="mt-10 font-display text-xl italic text-muted-foreground">
              {site.signature}
            </p>
          </section>
        </div>
      )}

      {/* Memory Modal */}
      <MemoryModal
        memory={open ? heroMemory : null}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}