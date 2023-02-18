import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import basicSsl from '@vitejs/plugin-basic-ssl'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/main.scss";
        `
      }
    }
  },
  plugins: [vue(), basicSsl()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
