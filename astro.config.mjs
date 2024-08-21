import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
    trailingSlash: 'never',
    integrations: [
        tailwind(),
        icon({
            iconDir: 'src/assets/icons',
        }),
    ],
});
