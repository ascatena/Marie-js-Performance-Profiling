// // import { defineConfig } from 'vite';
// // import { svelte } from '@sveltejs/vite-plugin-svelte';

// // // https://vitejs.dev/config/
// // export default defineConfig({
// // 	base: './', // Fuerza siempre rutas relativas
// // 	plugins: [svelte()],
// // 	build: {
// // 		outDir: 'dist',
// // 		emptyOutDir: true,
// // 		assetsInlineLimit: 4096 // (4KB) Archivos menores se inlinenan
// // 	  },
// // 	  publicDir: 'public' // Asegúrate que coincide con tu estructura
// // });

// import { defineConfig } from 'vite';
// import { svelte } from '@sveltejs/vite-plugin-svelte';

// export default defineConfig({
//   base: './', // Usa './' para rutas relativas
//   plugins: [svelte()],
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true,
//     sourcemap: true, // Para debugging
//     rollupOptions: {
//       output: {
//         entryFileNames: `assets/[name].js`,
//         chunkFileNames: `assets/[name].js`,
//         assetFileNames: `assets/[name].[ext]`
//       }
//     }
//   },
//   server: {
//     fs: {
//       strict: true
//     }
//   }
// });
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/',
  plugins: [svelte()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  },
  server: {
    open: true
  }
});