import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false, // Desactiva la toolbar correctamente
      },
  integrations: [
    tailwind(),
    icon({
      iconify: {
        // Solo usamos Lucide
        collections: {
          'lucide': () => import('@iconify-json/lucide/icons.json'),
        }
      }
    })
  ]
});