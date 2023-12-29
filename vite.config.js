import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import { installGlobals } from "@remix-run/node";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
  ],
  test: {
    environment: "happy-dom",
    env: loadEnv("test", process.cwd(), ""),
  },
});
