import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    root: "src",
    plugins: [tailwindcss()],

    server: {
        host: true,           // 0.0.0.0 μέσα στο container
        port: 5173,
        strictPort: true,

        allowedHosts: ['tailwind-4-vite-starter.ddev.site'],

        // ΣΗΜΑΝΤΙΚΟ για ddev https router
        hmr: {
            host: 'tailwind-4-vite-starter.ddev.site',
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
