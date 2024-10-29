import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import icon from 'astro-icon';

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            },
        },
    },
    integrations: [
        tailwind(),
        icon({
            iconDir: 'src/assets/icons',
        }),
    ],
});
