import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig({
  base: `/${pkg.name}/`,
  build: {
    rollupOptions: {
      output: { dir: "demo" },
    },
  },
  plugins: [],
});
