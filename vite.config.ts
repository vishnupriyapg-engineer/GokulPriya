import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
plugins: [
tanstackStart({
// Keep your existing server entry configuration.
server: { entry: "server" },
}),
netlify(),
],
});
