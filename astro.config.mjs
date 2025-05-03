import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import netlify from '@astrojs/netlify'; // 👈 importá el adaptador

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  adapter: netlify(), // 👈 agregá el adaptador aquí
  integrations: [
    tailwind(),
    icon({
      iconify: {
        collections: {
          'lucide': () => import('@iconify-json/lucide/icons.json'),
        }
      }
    })
  ]
});
