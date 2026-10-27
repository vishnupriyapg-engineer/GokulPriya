import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/memories")({
  beforeLoad: () => { throw redirect({ to: "/gallery", replace: true }); },
});
