import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',
        rollupOptions: {
            input: {
                main: './src/popup/index.html',
            },
            output: {
                entryFileNames: 'assets/[name].js',
            },
        },
    },
});
