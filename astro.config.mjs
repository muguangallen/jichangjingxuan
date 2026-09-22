import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://network2026.example.com',
  integrations: [
    tailwind({
      applyBaseStyles: true
    }),
    mdx()
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});
