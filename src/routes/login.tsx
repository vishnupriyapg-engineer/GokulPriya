import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { nameToEmail } from "@/lib/auth";
import { site } from "@/content";

type Search = { expired?: boolean | undefined };

export const Route = createFileRoute("/login")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>): Search => ({ expired: s["expired"] === true || s["expired"] === "1" || undefined }),
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/home", replace: true });
  },
  head: () => ({
    meta: [
      { title: "Just for You ❤️ — Enter" },
      { name: "description", content: "Some memories are meant to be kept between two hearts." },
      { property: "og:title", content: "Just for You ❤️" },
      { property: "og:description", content: "Some memories are meant to be kept between two hearts." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Login,
});

function Login() {
  const { expired } = Route.useSearch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(expired ? "Your little session has ended. Please enter again ❤️" : null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true); setError(null);
    try {
      const email = nameToEmail(name);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        if (import.meta.env.DEV) console.warn("[auth] sign-in failed", { email, status: error.status, code: error.code, message: error.message });
        const network = error.status === 0 || /fetch|network/i.test(error.message);
        setError(network ? "Something went wrong. Please try again." : "That's not our little secret... try again ❤️");
        return;
      }
      navigate({ to: "/home", replace: true });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const field = "w-full rounded-2xl border border-input bg-background/40 px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-ring";

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-12">
      <img src="/images/hero.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25 blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />

      <form onSubmit={submit} className="glass shadow-soft animate-fade-up relative w-full max-w-sm rounded-3xl px-7 py-10 sm:px-9">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">a private place</p>
        <h1 className="mt-4 text-center font-display text-5xl font-medium text-foreground">{site.loginTitle}</h1>
        <p className="mx-auto mt-4 max-w-xs text-center font-display text-lg italic leading-snug text-muted-foreground">
          {site.loginSubtitle}
        </p>

        <div className="mt-9 space-y-3">
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" required autoComplete="username" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
          <label className="sr-only" htmlFor="password">Password</label>
          <input id="password" required type="password" autoComplete="current-password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={field} />
        </div>

        <p role="alert" className={`min-h-6 pt-3 text-center text-sm text-primary transition-opacity ${error ? "opacity-100" : "opacity-0"}`}>{error}</p>

        <button type="submit" disabled={busy}
          className="bg-blush shadow-glow mt-3 w-full rounded-2xl py-4 text-base font-semibold text-primary-foreground transition hover:scale-[1.015] disabled:opacity-60">
          {busy ? "Opening…" : site.loginButton}
        </button>
      </form>
    </div>
  );
}
