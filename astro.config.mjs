import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 4321,
  },

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  output: "hybrid",
  adapter: cloudflare()
});