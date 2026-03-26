import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  integrations: [svelte(), vercel()],
  vite: {
    plugins: [tailwindcss(), wasm(), topLevelAwait()],
    optimizeDeps: {
      exclude: ['@automerge/automerge-wasm']
    }
  }
});
