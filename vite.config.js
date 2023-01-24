// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";

const config = {
  plugins: [
    UnoCSS({
      presets: [presetUno()],
    }),
    sveltekit(),
  ],
    // allows vite access to ./posts
  server: {
    fs: {
      allow: ['./']
    }
  }
};
export default config;
