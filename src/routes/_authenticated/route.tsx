import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Nav } from "@/components/Nav";
import { AudioProvider } from "@/components/audio";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/login", replace: true });
    return { user: data.user };
  },
  pendingComponent: () => (
    <div className="grid min-h-screen place-items-center">
      <p className="font-display text-2xl italic text-muted-foreground animate-pulse">opening our little world…</p>
    </div>
  ),
  component: Layout,
});

function Layout() {
  return (
    <AudioProvider>
      <Nav />
      <main className="pb-32 md:pb-16">
        <Outlet />
      </main>
    </AudioProvider>
  );
}
