// @ts-check
import { EventEmitter } from 'events';

// Prevent Node.js MaxListenersExceededWarning during rapid local dev navigation
EventEmitter.defaultMaxListeners = 20;
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://chrisgiomt.github.io',
  integrations: [mdx()],
  
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      }
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});