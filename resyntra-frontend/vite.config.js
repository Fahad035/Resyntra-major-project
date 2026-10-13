
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// Vite + Vitest configuration
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // Frontend testing configuration
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    globals: true,
    css: true,
  },

  build: {
    // Keep your existing build settings
    chunkSizeWarningLimit: 2000,

    rolldownOptions: {
      output: {
        codeSplitting: {
          minSize: 50000,
          groups: [
            {
              name: "vendor",
              test: /node_modules/,
            },
          ],
        },
      },
    },
  },
});