import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
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
  build: {
    // 1. Scales the size warning limit threshold up to 2MB to keep your console clean
    chunkSizeWarningLimit: 2000, 
    // 2. Configures the underlying Rolldown engine to handle manual chunking splits
    rolldownOptions: {
      output: {
        codeSplitting: {
          minSize: 50000, // 50KB minimum before a new file chunk is generated
          groups: [
            {
              name: 'vendor',
              test: /node_modules/, // Isolates third-party packages from your core application logic
            },
          ],
        },
      },
    },
  },
})
