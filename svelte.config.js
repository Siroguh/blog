import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ['*', '/sitemap.xml', '/rss.xml']
    }
  },
  preprocess: [
    preprocess({
      postcss: true
    }),
    mdsvex(mdsvexConfig)
  ],
  extensions: ['.svelte', ...mdsvexConfig.extensions]
}
export default config;
