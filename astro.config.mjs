import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify()
});