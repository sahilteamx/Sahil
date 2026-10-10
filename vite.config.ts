import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the site works on any GitHub Pages path (user.github.io/Sahil/).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
