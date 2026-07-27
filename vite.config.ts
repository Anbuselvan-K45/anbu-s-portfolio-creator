// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "fs";
import path from "path";

function lovableAssetsPlugin() {
  return {
    name: "lovable-assets-check",
    buildStart() {
      try {
        const assetsDir = path.resolve(process.cwd(), "src", "assets");
        if (!fs.existsSync(assetsDir)) return;
        const files = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".asset.json"));
        files.forEach((f) => {
          try {
            const json = JSON.parse(fs.readFileSync(path.join(assetsDir, f), "utf8"));
            if (json && typeof json.url === "string" && json.url.startsWith("/__l5e")) {
              this.warn(
                `[lovable-assets-check] ${f} points to editor-preview URL (${json.url}) and may 404 in local dev or production. Place the raw asset in /public and update imports.`,
              );
            }
          } catch (e) {
            // ignore malformed
          }
        });
      } catch (e) {
        // ignore
      }
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [lovableAssetsPlugin()],
  },
});
