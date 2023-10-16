import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://frankenjs.github.io',
  base: '/',
  integrations: [tailwind()],
  experimental:  {
    assets: true,
  }
});