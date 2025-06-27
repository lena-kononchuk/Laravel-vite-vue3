import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/less/app.less', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        compression({ algorithm: 'gzip' }),
        compression({ algorithm: 'brotliCompress' }),
        // visualizer({ open: true }),

    ],
    optimizeDeps: {
        include: ['vue', 'vue-router', 'fast-deep-equal', '@fawmi/vue-google-maps']
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },

    build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                return 'vendor';
              }
            }
          }
        },
        minify: 'esbuild',
        sourcemap: false,
        cssCodeSplit: true,
        target: 'es2020',
        assetsInlineLimit: 4096,
        chunkSizeWarningLimit: 500,

      }


});
