
import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { markIntentionalSignOut } from "@/lib/session";

const items = [
  { to: "/home", label: "Home", icon: "❤️" },
  { to: "/timeline", label: "Timeline", icon: "🕰️" },
 
  //{ to: "/music", label: "Music", icon: "🎵" },
  { to: "/letters", label: "Letters", icon: "💌" },
  
  { to: "/bucket-list", label: "Bucket List", icon: "💗" },
  { to: "/quiz", label: "Love Quiz", icon: "💌" },
  { to: "/love-reasons", label: "100 Things I Love About You", icon: "💗" },
   { to: "/gallery", label: "Gallery", icon: "📸" },
  { to: "/videos", label: "Videos", icon: "🎬" },
] as const;

export function Nav() {
  const navigate = useNavigate();
  const qc = useQueryClient();

  const logout = async () => {
    markIntentionalSignOut();
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/login", replace: true });
  };

  const linkCls =
    "rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground";

  const activeCls = "bg-secondary text-foreground";

  return (
    <>
      {/* Desktop navigation */}
      <nav className="glass sticky top-0 z-30 hidden border-x-0 border-t-0 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <span className="font-display text-xl italic text-blush">
            our little world
          </span>

          <div className="flex items-center gap-1">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={linkCls}
                activeProps={{ className: activeCls }}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </nav>

      {/* Mobile header */}
      <div className="flex items-center justify-between px-5 pt-5 md:hidden">
        <span className="font-display text-lg italic text-blush">
          our little world
        </span>

        <button
          onClick={logout}
          className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
        >
          <LogOut className="h-3.5 w-3.5" />
          Logout
        </button>
      </div>

      {/* Mobile bottom navigation */}
      <nav
        className="glass fixed inset-x-2 bottom-3 z-30 rounded-2xl md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-5">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-w-0 flex-col items-center justify-center gap-1 py-2.5 text-[10px] text-muted-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              <span className="text-lg leading-none">{item.icon}</span>

              <span className="max-w-full truncate px-0.5">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

