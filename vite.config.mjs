import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    server: {
        host: true,
        port: 5173,
        strictPort: true,
        allowedHosts: [
            'hall-of-fame-2025.ddev.site',
        ],
        open: '/index.html',
    },
    build: {
        rollupOptions: {
            input: {
                main: "src/index.html",
                // features: "src/features.html",
                // company: "src/company.html",
                // contact: "src/contact.html",
                // terms: "src/terms.html",
                // blog: "src/blog.html",
                // article: "src/article.html",
            },
        },
        outDir: "../dist",
        emptyOutDir: true,
    },
    root: "src",
    plugins: [
        tailwindcss(),
    ],
})
