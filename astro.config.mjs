import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    imageService: true
  }),
  integrations: [svelte(), tailwind()]
});