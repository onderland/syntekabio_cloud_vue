// import { fileURLToPath, URL } from 'node:url';
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       'vue': 'vue/dist/vue.esm-bundler.js',
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   define: {
//     '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': true, // 여기에서 기능 플래그를 정의합니다.
//   }
// });

// /////////////////////////////// 개발용 ///////////////////////////////
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      host: '175.211.83.52',
      port: 5173
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "@/assets/static/scss/style.scss";`
      }
    },
    devSourcemap: true
  },
  optimizeDeps: {
    exclude: ["swiper/vue", "swiper/types"]
  }
});


