// @ts-check
import { EventEmitter } from 'events';
import rehypeExternalLinks from 'rehype-external-links';

// Prevent Node.js MaxListenersExceededWarning during rapid local dev navigation
EventEmitter.defaultMaxListeners = 20;
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chrisgiomt.github.io',
  integrations: [mdx(), sitemap()],
  
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      }
    },
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});