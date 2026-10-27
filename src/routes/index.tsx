import { createFileRoute, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    throw redirect({ to: data.session ? "/home" : "/login", replace: true });
  },
  head: () => ({
    meta: [
      { title: "Just for You ❤️" },
      { name: "description", content: "A private little world, made with love." },
      { property: "og:title", content: "Just for You ❤️" },
      { property: "og:description", content: "A private little world, made with love." },
    ],
  }),
});
