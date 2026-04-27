import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    root: "src",
    plugins: [tailwindcss()],

    server: {
        host: true,
        port: 5173,
        strictPort: true,

        // 🔥 σημαντικό για DDEV
        origin: process.env.DDEV_PRIMARY_URL_WITHOUT_PORT + ':5173',

        // 🔥 μην περιορίζεις hosts
        allowedHosts: true,

        hmr: {
            host: process.env.DDEV_HOSTNAME,
            protocol: 'wss',
            clientPort: 443,
        },
    },

    build: {
        rollupOptions: {
            input: { main: "src/index.html" },
        },
        outDir: "../dist",
        emptyOutDir: true,
    },
})