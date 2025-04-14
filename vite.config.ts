import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	base: './', // Fuerza siempre rutas relativas
	plugins: [svelte()],
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		assetsInlineLimit: 4096 // (4KB) Archivos menores se inlinenan
	  },
	  publicDir: 'public' // Asegúrate que coincide con tu estructura
});
