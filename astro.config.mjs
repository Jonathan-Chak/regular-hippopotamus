// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // Example: Use the function syntax to customize based on command
  server: ({ command }) => ({ port: command === 'dev' ? 5000 : 4000 }),

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify()
});