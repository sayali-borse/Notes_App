// vite.config.js or vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// other imports like react() or vue() might be here

export default defineConfig({
  plugins: [
    // other plugins
    tailwindcss(),
  ],
});
