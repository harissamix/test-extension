import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: 'build',
        rollupOptions: {
            input: {
                content: './src/content/index.tsx',
            },
            output: {
                entryFileNames: 'assets/[name].js',
            },
        },
        emptyOutDir: false,
    },
});
