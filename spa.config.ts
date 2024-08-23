import { defineConfig } from '@solidjs/start/config'
import suidPlugin from '@suid/vite-plugin'

export default defineConfig({
    vite: {
        plugins: [suidPlugin()],
        build: {
            target: 'esnext',
        },
    },
    ssr: false,
    server: {
        static: true,
        prerender: {
            crawlLinks: true,
        },
    },
})
