import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  base: '/sympoiesis-site/',
  integrations: [mdx()],
});
