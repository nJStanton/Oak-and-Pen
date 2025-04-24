// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // 'http://localhost:4321'
  site: 'https://oakandpen.co.uk',

  vite: {
    plugins: [tailwindcss()],
  },

  //Activates image layout controls
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: 'responsive',
  },

  experimental: {
    responsiveImages: true,
    session: true
  },

  adapter: netlify()
});