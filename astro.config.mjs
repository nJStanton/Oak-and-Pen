// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://nJStanton.github.io',
    base: '/Oak-and-Pen',
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
      responsiveImages: true
    },
  });